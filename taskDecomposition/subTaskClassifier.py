import sys

from sklearn.cluster import DBSCAN
import json
from typing import List, Dict, Any
import numpy as np
from sklearn.cluster import KMeans
from sentence_transformers import SentenceTransformer
from openai import OpenAI


class SubTaskClassifier:
    """
    SubTaskClassifier 模块
    功能：
      1. 对输入的查询结果中的代码实体描述信息进行聚类，
         每个实体只保留 meta_info 中的 summary 与 relations 中的 summary_to 信息。
      2. 对聚类结果调用 DeepSeek 模型生成子任务的简短描述，
         最终输出多个子任务描述，每句描述对应一个子任务。
    """

    def __init__(self, deepseek_api_key: str, num_clusters: int = 2):
        """
        初始化 SubTaskClassifier

        参数：
          deepseek_api_key (str): DeepSeek API Key，用于生成子任务描述
          num_clusters (int): 聚类时的类别数，默认为2
        """
        self.num_clusters = num_clusters
        self.deepseek_api_key = deepseek_api_key
        # 加载本地 bge-m3 模型用于文本嵌入
        self.embed_model = SentenceTransformer(r"D:\featureLocation\model\bge-m3")
        # 初始化 DeepSeek 客户端
        self.deepseek_client = OpenAI(api_key=deepseek_api_key, base_url="https://api.deepseek.com")

    def _aggregate_text(self, meta_info: Dict[str, Any]) -> str:
        """
        聚合单个代码实体中的描述信息，仅收集 summary 与 relations 中的 summary_to 信息

        参数：
          meta_info (Dict): 代码实体的 meta_info 字段
        返回：
          str: 聚合后的描述文本
        """
        texts = []
        if meta_info.get("summary"):
            texts.append(meta_info["summary"])
        for rel in meta_info.get("relations", []):
            if rel.get("summary_to"):
                texts.append(rel["summary_to"])
        return "\n".join(texts)

    def classify(self, input_data: List[Dict[str, Any]]) -> List[str]:
        """
        对输入的查询结果进行聚类，并生成子任务描述

        参数：
          input_data (List[Dict]): 输入数据列表，每个元素包含 "query" 和 "results" 字段，
                                    其中 results 中每个元素的 meta_info 包含描述信息
        返回：
          List[str]: 每条字符串是一条子任务的简短描述
        """
        aggregated_texts = []  # 存放每个结果聚合后的文本
        for item in input_data:
            results = item.get("results", [])
            for res in results:
                meta = res.get("meta_info", {})
                agg_text = self._aggregate_text(meta)
                if agg_text.strip():
                    aggregated_texts.append(agg_text.strip())

        if not aggregated_texts:
            print("未收集到描述信息。")
            return []

        # 使用 bge-m3 模型生成嵌入
        embeddings = self.embed_model.encode(aggregated_texts)

        # 聚类：使用 KMeans 将描述文本分为 num_clusters 组
        self.num_clusters = 3
        kmeans = KMeans(n_clusters=self.num_clusters, random_state=0).fit(embeddings)
        labels = kmeans.labels_

        # # 使用 DBSCAN 对描述文本的嵌入进行聚类
        # dbscan = DBSCAN(eps=0.8, min_samples=1).fit(embeddings)
        # labels = dbscan.labels_

        # 按聚类标签将文本分组
        clusters: Dict[int, List[str]] = {}
        for idx, label in enumerate(labels):
            clusters.setdefault(label, []).append(aggregated_texts[idx])

        # 对每个聚类组拼接所有文本，并调用 DeepSeek 生成子任务描述
        print(clusters)
        subtask_descriptions = []
        for label, texts in clusters.items():
            cluster_text = "\n".join(texts)
            sub_desc = self._generate_subtask_description(cluster_text)
            subtask_descriptions.append(sub_desc)

        return subtask_descriptions

    def _generate_subtask_description(self, cluster_text: str) -> str:
        """
        调用 DeepSeek 模型生成聚类结果的子任务描述

        参数：
          cluster_text (str): 聚类中所有文本的拼接
        返回：
          str: 生成的子任务描述
        """
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user",
             "content": "下面是多个代码实体描述的聚类结果，它们对应同一个功能任务，首先你要对这些功能描述进行提炼总结，"
                        "然后对提炼后的结果生成一个提问句式，用于充当code search的查询。"
                        "例如提炼结果是'实现一个文件打开函数，处理路径读取及错误情况'，"
                        "那么你应该生成一个对应的提问句式'实现文件打开操作，处理路径读取及错误情况的函数是什么？'."
                        "基本都提炼成'实现XXX的函数是什么'这种句式，在你的回答中，你只用输出这些任务的提问句式就可以了。"
                        "注意，你只需要提炼出一个提问句式就行，因为这只有一个聚类。提问要尽量具体。"
                        f"这是聚类结果：\n\n{cluster_text}"}
        ]
        try:
            response = self.deepseek_client.chat.completions.create(
                model="deepseek-chat",
                messages=messages,
                stream=False
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            print("调用 DeepSeek API 生成子任务描述时出错：", e)
            return "子任务描述生成失败。"


def save_output(result: Dict[str, Any], output_file: str):
    """
    将结果保存为 JSON 文件。

    参数：
      result (Dict): 要保存的结果数据。
      output_file (str): 输出文件路径。
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=4, ensure_ascii=False)
        print(f"结果已保存到 {output_file}")
    except Exception as e:
        print(f"保存结果到 {output_file} 时出错：", e)


def load_input_data(file_path: str) -> List[Dict[str, Any]]:
    """
    从指定文件加载 input_data。

    参数：
      file_path (str): 输入数据文件的路径，文件内容应为 JSON 格式。
    返回：
      List[Dict]: 解析后的 JSON 数据。
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except Exception as e:
        print(f"加载文件 {file_path} 时出错：", e)
        return []


# 测试用例
if __name__ == "__main__":
    input_dir = "../output/similarityResult/libuv_src.json"
    output_file = "../output/subtask/libuv_src.json"
    input_data = load_input_data(input_dir)

    # 请替换为实际的 DeepSeek API Key
    deepseek_api_key = "sk-14be3224f00e4a3584e1d9e775b511f2"
    classifier = SubTaskClassifier(deepseek_api_key=deepseek_api_key, num_clusters=2)
    subtasks = classifier.classify(input_data)

    if not input_data:
        print("输入数据为空，程序退出。")
        sys.exit(1)

    # 取第一个查询的 query 作为输出结果中的 query（假设只有一个查询）
    query = input_data[0].get("query", "")

    # 构造输出结果字典，键为 "subTasks1", "subTasks2", "subTasks3"
    output_result = {"query": query}
    for idx, task_desc in enumerate(subtasks, start=1):
        output_result[f"subTasks{idx}"] = task_desc

    # 保存输出结果到 JSON 文件
    save_output(output_result, output_file)

    # 同时打印输出结果
    print("子任务划分结果：")
    print(json.dumps(output_result, indent=4, ensure_ascii=False))
