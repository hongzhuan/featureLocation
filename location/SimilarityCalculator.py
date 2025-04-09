import torch
from typing import List, Dict
from scipy.spatial.distance import cosine
from EmbeddingEncoder import EmbeddingEncoder


class SimilarityCalculator:
    """
    相似度计算模块。
    负责计算查询语句与源代码片段之间的语义相似度，并返回排序结果。
    """

    def __init__(self):
        pass

    @staticmethod
    def calculate_similarity(query_embedding: torch.Tensor, code_embeddings_with_meta: List[Dict]) -> List[Dict]:
        """
        计算查询嵌入与代码片段嵌入之间的相似度。

        参数：
            query_embedding (torch.Tensor): 查询语句的嵌入向量。
            code_embeddings_with_meta (List[Dict]): 包含代码片段嵌入和元信息的列表。

        返回：
            List[Dict]: 按相似度排序的代码片段及其元信息。
        """
        results = []
        for item in code_embeddings_with_meta:
            embedding = item["embedding"]
            meta_info = item["meta_info"]
            similarity = 1 - cosine(query_embedding, embedding)
            results.append({"similarity": similarity, "meta_info": meta_info})

        # 按相似度降序排序
        results.sort(key=lambda x: x["similarity"], reverse=True)
        return results

# 测试模块功能
if __name__ == "__main__":
    # 模型路径
    model_path = "../model/bge-m3"

    # 初始化编码器
    encoder = EmbeddingEncoder(model_path, device="cuda" if torch.cuda.is_available() else "cpu")

    # 加载代码片段
    code_snippets_file_path = "../output/test.json"
    try:
        code_snippets = EmbeddingEncoder.load_code_snippets(code_snippets_file_path)
        print(f"成功加载代码片段，共 {len(code_snippets)} 条。")
    except Exception as e:
        print(e)

    # 编码查询
    query = "What is the best way to use uv_loop in libuv?"
    query_embedding = encoder.encode_in_batches([query], batch_size=1)[0]

    # 编码代码片段（保留元信息）
    embeddings_with_meta = encoder.encode_with_meta(code_snippets, batch_size=2)

    # 计算相似度
    similarity_calculator = SimilarityCalculator()
    sorted_results = similarity_calculator.calculate_similarity(query_embedding, embeddings_with_meta)

    # 输出相似度排序结果
    print("相似度排序结果:")
    for result in sorted_results[:5]:  # 输出前5个
        print(f"相似度: {result['similarity']:.4f}")
        print(f"元信息: {result['meta_info']}")
