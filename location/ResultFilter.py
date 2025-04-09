from typing import List, Dict


class ResultFilter:
    """
    结果排序与过滤模块。
    负责对计算出的相似度结果进行排序、筛选，并生成最终输出。
    """

    @staticmethod
    def filter_and_sort_results(
        similarity_results: List[Dict],
        threshold: float = 0.5,
        top_k: int = 10
    ) -> List[Dict]:
        """
        根据相似度分数筛选和排序结果。

        参数：
            similarity_results (List[Dict]): 包含相似度和元信息的结果列表。
            threshold (float): 相似度筛选阈值。
            top_k (int): 返回的结果数量上限。

        返回：
            List[Dict]: 筛选后的排序结果列表。
        """
        # 筛选相似度大于等于阈值的结果
        filtered_results = [result for result in similarity_results if result["similarity"] >= threshold]

        # 按相似度降序排序
        filtered_results.sort(key=lambda x: x["similarity"], reverse=True)

        # 返回前 top_k 个结果
        return filtered_results[:top_k]

# 测试模块功能
if __name__ == "__main__":
    # 示例相似度结果
    similarity_results = [
        {"similarity": 0.9, "meta_info": {"id": 1, "fileName": "file1.c"}},
        {"similarity": 0.4, "meta_info": {"id": 2, "fileName": "file2.c"}},
        {"similarity": 0.8, "meta_info": {"id": 3, "fileName": "file3.c"}},
        {"similarity": 0.95, "meta_info": {"id": 4, "fileName": "file4.c"}},
        {"similarity": 0.6, "meta_info": {"id": 5, "fileName": "file5.c"}},
    ]

    # 过滤和排序测试
    threshold = 0.5
    top_k = 3
    result_filter = ResultFilter()
    filtered_results = result_filter.filter_and_sort_results(similarity_results, threshold, top_k)

    # 输出结果
    print("筛选和排序后的结果:")
    for result in filtered_results:
        print(f"相似度: {result['similarity']:.4f}, 文件名: {result['meta_info']['fileName']}, ID: {result['meta_info']['id']}")
