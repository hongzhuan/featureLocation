import json
from flask import Flask, request, jsonify, send_file, stream_with_context, Response
from flask import render_template
import os
from sourceCodeInput.Controller import Controller
from location.TaskLocatorController import TaskLocatorController
from taskDecomposition.subTaskClassifier import SubTaskClassifier, load_input_data, save_output
from threading import Thread
from location.LLM_analysis import load_result_file, analyze_collaboration, save_analysis_result

app = Flask(__name__)

PROCESS_STATUS = {"status": "idle"}  # 记录流程状态
OUTPUT_DIR = "./output"

# 缓存编码后的源代码嵌入信息，避免重复编码
ENCODED_SOURCE_CACHE = {
    "encoder": None,
    "embeddings_with_meta": None
}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze_code():
    """
    分析源代码并构建API知识图谱
    """
    global PROCESS_STATUS
    data = request.get_json()
    source_dir = data.get("sourceDir")
    output_file = os.path.join(OUTPUT_DIR, "sourceCodeResult.json")

    PROCESS_STATUS["status"] = "running"

    def background_task():
        try:
            controller = Controller(source_dir, output_file)
            controller.run()
            PROCESS_STATUS["status"] = "done"
        except Exception as e:
            PROCESS_STATUS["status"] = f"error: {str(e)}"

    Thread(target=background_task).start()
    return jsonify({"message": "开始分析", "status": "running"})


@app.route("/progress", methods=["GET"])
def check_progress():
    return jsonify(PROCESS_STATUS)


@app.route("/query", methods=["POST"])
def handle_query():
    data = request.get_json()
    query_text = data.get("query")

    source_code_file = os.path.join(OUTPUT_DIR, "sourceCodeResult.json")
    result_file = os.path.join(OUTPUT_DIR, "similarityResult.json")
    output_file = os.path.join(OUTPUT_DIR, "subTaskResult.json")

    model_path = "./model/bge-m3"

    # 初始化定位器
    locator = TaskLocatorController(
        model_path=model_path,
        input_file=source_code_file,
        output_file=result_file,
        threshold=0.5,
        top_k=5
    )

    # 使用缓存避免重复编码
    if ENCODED_SOURCE_CACHE["embeddings_with_meta"] is None:
        locator.encode_source_code()
        ENCODED_SOURCE_CACHE["encoder"] = locator.encoder
        ENCODED_SOURCE_CACHE["embeddings_with_meta"] = locator.embeddings_with_meta
    else:
        locator.encoder = ENCODED_SOURCE_CACHE["encoder"]
        locator.embeddings_with_meta = ENCODED_SOURCE_CACHE["embeddings_with_meta"]

    locator.process_query(query_text)
    locator.save_results()

    # 子任务分解
    deepseek_api_key = "sk-14be3224f00e4a3584e1d9e775b511f2"
    input_data = load_input_data(result_file)
    classifier = SubTaskClassifier(deepseek_api_key=deepseek_api_key, num_clusters=3)
    subtasks = classifier.classify(input_data)

    query = input_data[0].get("query", "")
    output_result = {"query": query}
    for idx, task_desc in enumerate(subtasks, start=1):
        output_result[f"subTasks{idx}"] = task_desc

    save_output(output_result, output_file)

    return jsonify({"query": query_text, "subtasks": subtasks})


@app.route("/locate_subtasks", methods=["POST"])
def locate_subtasks():
    subtask_file = os.path.join(OUTPUT_DIR, "subTaskResult.json")
    result_file = os.path.join(OUTPUT_DIR, "subTasksLocationResult.json")

    data = request.get_json()

    # 加载子任务文本（只要 subTasks1, subTasks2, subTasks3）
    try:
        with open(subtask_file, 'r', encoding='utf-8') as f:
            subtask_data = json.load(f)
    except Exception as e:
        return jsonify({"error": f"加载子任务文件失败: {e}"}), 500

    model_path = "./model/bge-m3"
    input_file = "./output/sourceCodeResult.json"
    output_file = result_file

    locator = TaskLocatorController(model_path, input_file, output_file, threshold=0.5, top_k=5)

    # 使用缓存
    if ENCODED_SOURCE_CACHE["embeddings_with_meta"] is None:
        locator.encode_source_code()
        ENCODED_SOURCE_CACHE["encoder"] = locator.encoder
        ENCODED_SOURCE_CACHE["embeddings_with_meta"] = locator.embeddings_with_meta
    else:
        locator.encoder = ENCODED_SOURCE_CACHE["encoder"]
        locator.embeddings_with_meta = ENCODED_SOURCE_CACHE["embeddings_with_meta"]

    all_results = []
    for key, subtask in subtask_data.items():
        if not key.startswith("subTasks"):
            continue  # 忽略 query 等其他字段

        print(f"处理子任务: {subtask}")
        locator.process_query(subtask)
        locator.save_results()

        # 读取结果并裁剪 meta_info
        with open(output_file, 'r', encoding='utf-8') as f:
            raw_result = json.load(f)

        # 每个子任务只有一个结果结构（包含 query 和 results）
        trimmed_result = {
            "query": raw_result[0]["query"],
            "results": []
        }

        for item in raw_result[0]["results"]:
            meta = item.get("meta_info", {})
            trimmed_meta = {
                "category": meta.get("category", ""),
                "code": meta.get("code", "")
            }
            trimmed_result["results"].append({
                "similarity": item["similarity"],
                "meta_info": trimmed_meta
            })

        all_results.append({
            "subtask": subtask,
            "results": trimmed_result
        })

    # 保存最终合并结果
    try:
        with open(result_file, 'w', encoding='utf-8') as f:
            json.dump(all_results, f, ensure_ascii=False, indent=4)
        return jsonify({"message": "子任务定位完成", "results": all_results})
    except Exception as e:
        return jsonify({"error": f"保存结果失败: {e}"}), 500


@app.route("/analyze_collaboration", methods=["POST"])
def analyze_collaboration_route():
    """
    进行大模型分析并返回结果
    """
    result_file = os.path.join(OUTPUT_DIR, "subTasksLocationResult.json")
    analysis_result_file = os.path.join(OUTPUT_DIR, "llmAnalysisResult.json")

    # 加载 result.json 文件
    try:
        result_data = load_result_file(result_file)
    except Exception as e:
        return jsonify({"error": f"加载分析文件失败: {e}"}), 500

    # 从前端获取查询信息
    query = request.json.get("query", "")
    print(f"查询是：{query}")

    # 调用大模型分析
    analysis_result = analyze_collaboration(query, result_data)

    # 保存分析结果
    try:
        save_analysis_result(analysis_result, analysis_result_file)
        return jsonify({"message": "分析完成", "analysis_result": analysis_result})
    except Exception as e:
        return jsonify({"error": f"保存分析结果失败: {e}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
