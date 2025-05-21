import json
import os

import torch

from EmbeddingEncoder import EmbeddingEncoder
from SimilarityCalculator import SimilarityCalculator
from ResultFilter import ResultFilter


class TaskLocatorController:
    """
    主控制模块。
    支持对源代码进行预编码，并在运行时多次接收查询进行相似度计算。
    """

    def __init__(self, model_path: str, input_file: str, output_file: str, threshold: float = 0.5, top_k: int = 10):
        """
        初始化控制模块。

        参数：
            model_path (str): 预训练模型路径。
            input_file (str): 源代码 JSON 文件路径。
            output_file (str): 相似度结果输出路径。
            threshold (float): 相似度筛选阈值。
            top_k (int): 返回的结果数量上限。
        """
        self.model_path = model_path
        self.input_file = input_file
        self.output_file = output_file
        self.threshold = threshold
        self.top_k = top_k

        # 初始化嵌入编码器
        self.encoder = EmbeddingEncoder(model_path, device="cuda" if torch.cuda.is_available() else "cpu")
        self.similarity_calculator = SimilarityCalculator()
        self.result_filter = ResultFilter()
        self.embeddings_with_meta = []  # 存储编码后的源代码嵌入
        self.results = []  # 存储所有查询的结果

    def encode_source_code(self):
        """
        编码源代码片段。

        返回：
            None
        """
        try:
            code_snippets = EmbeddingEncoder.load_code_snippets(self.input_file)
            print(f"成功加载代码片段，共 {len(code_snippets)} 条。")
            print("正在编码源代码片段...")
            self.embeddings_with_meta = self.encoder.encode_with_meta(code_snippets, batch_size=2)
            print("源代码编码完成！")
        except Exception as e:
            print(f"加载或编码源代码失败: {e}")

    def process_query(self, query: str):
        """
        对输入的查询进行相似度计算。

        参数：
            query (str): 用户输入的查询语句。

        返回：
            None
        """
        print("正在编码查询语句...")
        query_embedding = self.encoder.encode_in_batches([query], batch_size=1)[0]

        print("正在计算相似度...")
        similarity_results = self.similarity_calculator.calculate_similarity(query_embedding, self.embeddings_with_meta)

        print("正在过滤和排序结果...")
        filtered_results = self.result_filter.filter_and_sort_results(similarity_results, self.threshold, self.top_k)

        print("筛选和排序后的结果:")
        for result in filtered_results:
            print(
                f"相似度: {result['similarity']:.4f}, 文件名: {result['meta_info']['fileName']}, ID: {result['meta_info']['id']}")

        # 保存查询结果
        self.results.append({
            "query": query,
            "results": [{
                "similarity": result["similarity"],
                "meta_info": result["meta_info"]
            } for result in filtered_results]
        })

    def save_results(self):
        """
        将所有查询结果保存到文件。

        返回：
            None
        """
        os.makedirs(os.path.dirname(self.output_file), exist_ok=True)
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, ensure_ascii=False, indent=4)
        print(f"所有查询结果已保存到 {self.output_file}")


# 主程序入口
if __name__ == "__main__":
    # 参数配置
    model_path = "../model/bge-m3"
    input_file = "../output/sourceCodeResult/libuv_src.json"
    output_file = "../output/result/libuv_src.json"

    # 初始化控制模块
    controller = TaskLocatorController(model_path, input_file, output_file, threshold=0.5, top_k=5)

    # 编码源代码
    controller.encode_source_code()

    # 循环处理查询
    while True:
        query = input("请输入查询语句（输入 'quit' 退出程序）：")
        if query.lower() == 'quit':
            break
        controller.process_query(query)

    # 保存结果
    controller.save_results()
