import json
import os
from openai import OpenAI

# 设置 DeepSeek API 配置
client = OpenAI(api_key="sk-14be3224f00e4a3584e1d9e775b511f2", base_url="https://api.deepseek.com")

# 加载 result.json 文件

def load_result_file(result_file_path):
    with open(result_file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

# 创建 DeepSeek 提示的函数

def create_prompt(query, pre_results):
    """
    构造 DeepSeek 分析的 prompt，其中包含用户查询和初步结果信息。

    参数：
        query (str): 用户查询语句。
        pre_results (list): 初步定位结果列表。

    返回：
        str: 用于调用大模型的用户消息内容。
    """
    # 将初步结果格式化为字符串
    pre_results_str = json.dumps(pre_results, ensure_ascii=False, indent=4)

    prompt = f"""
你是一个帮助分析 feature location 结果的助手。以下是用户查询及其初步定位结果：

用户查询：{query}

初步结果：
{pre_results_str}

请根据以上信息：
1. 找出与查询语句描述的功能相匹配的源代码实体，给出它们的 name、id 和 location。
2. 分析这些代码实体之间的协作关系，即它们如何协作实现查询中描述的功能。
"""
    return prompt

# 调用 DeepSeek API 分析子任务协作关系

def analyze_collaboration(query, pre_results):
    prompt = create_prompt(query, pre_results)

    try:
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {"role": "system", "content": "你是一个软件工程领域的专家。"},
                {"role": "user", "content": prompt}
            ],
            stream=False
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"调用 DeepSeek 分析失败: {e}")
        return None

# 保存分析结果到文件

def save_analysis_results(results_list, output_file):
    """
    将所有查询的分析结果列表保存到指定文件。

    参数：
        results_list (list): 含每条查询及其分析结果的字典列表。
        output_file (str): 保存文件路径。
    """
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results_list, f, ensure_ascii=False, indent=4)
        print(f"分析结果已保存到 {output_file}")
    except Exception as e:
        print(f"保存分析结果失败: {e}")

# 主函数

def main():
    # 设置文件路径
    result_file = "../output/M3_subtaskLocation.json"
    output_file = "../output/M4_llmAnalysis.json"

    # 加载定位结果
    result_data = load_result_file(result_file)
    if not result_data:
        print(f"无法加载文件 {result_file}")
        return

    analysis_results = []
    # 对每条查询结果进行分析
    for entry in result_data:
        query = entry.get("query", "未提供查询")
        pre_results = entry.get("results", [])
        print(f"正在分析查询: {query}")
        analysis = analyze_collaboration(query, pre_results)
        if analysis:
            print(f"查询: {query}\n分析结果：{analysis}\n")
            analysis_results.append({
                "query": query,
                "analysis": analysis
            })

    # 保存所有分析结果
    save_analysis_results(analysis_results, output_file)

if __name__ == "__main__":
    main()
