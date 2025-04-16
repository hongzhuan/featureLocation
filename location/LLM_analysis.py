import json
from openai import OpenAI

# 设置 DeepSeek API 配置
client = OpenAI(api_key="sk-14be3224f00e4a3584e1d9e775b511f2", base_url="https://api.deepseek.com")


# 加载 result.json 文件
def load_result_file(result_file_path):
    with open(result_file_path, 'r', encoding='utf-8') as f:
        return json.load(f)


# 创建 DeepSeek 提示的函数
def create_prompt(query, subtasks_results):
    # 整理子任务描述信息
    subtasks_descriptions = "\n".join(
        [f"子任务{i + 1}: {subtask['subtask']} \n协作：{subtask['results']}" for i, subtask in
         enumerate(subtasks_results)])

    # 创建提问的 prompt
    prompt = f"""
    你是一个帮助分析feature location结果的助手。以下是一个用户查询和与之相关的多个子查询（子任务）的定位结果：

    用户查询：{query}

    以下是各个子查询（子任务）的代码以及其他信息：
    {subtasks_descriptions}

    请根据以上信息分析：
    1. 各个子任务是如何合作完成用户查询的？
    2. 请详细解释这些子任务的协作方式是什么？
    """

    return prompt


# 调用 DeepSeek API 分析子任务协作关系
def analyze_collaboration(query, subtasks_results):
    prompt = create_prompt(query, subtasks_results)

    # 调用 DeepSeek API 获取分析结果
    try:
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {"role": "system", "content": "你是一个软件工程领域的专家。"},
                {"role": "user", "content": prompt}
            ],
            stream=False
        )
        analysis_result = response.choices[0].message.content
        return analysis_result
    except Exception as e:
        print(f"调用 DeepSeek 分析失败: {e}")
        return None


# 保存分析结果到文件
def save_analysis_result(analysis_result, output_file):
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump({"analysis_result": analysis_result}, f, ensure_ascii=False, indent=4)
        print(f"分析结果已保存到 {output_file}")
    except Exception as e:
        print(f"保存分析结果失败: {e}")


# 主函数
def main():
    # 设置文件路径
    result_file = "../output/subTasksLocationResult.json"
    output_file = "../output/llmAnalysisResult.json"

    # 加载定位结果
    result_data = load_result_file(result_file)

    if not result_data:
        print(f"无法加载文件 {result_file}")
        return

    # 提取查询和子任务结果
    query = result_data[0].get("subtask", "未提供查询")
    subtasks_results = result_data

    # 分析子任务协作
    print("正在分析子任务协作关系")
    analysis_result = analyze_collaboration(query, subtasks_results)

    if analysis_result:
        print("协作分析结果：\n", analysis_result)
        # 保存分析结果
        save_analysis_result(analysis_result, output_file)


if __name__ == "__main__":
    main()
