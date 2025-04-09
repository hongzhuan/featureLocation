import json
from typing import List, Dict
import re


class DataLoader:
    """
    数据加载与预处理模块。
    负责加载分割后的源代码片段数据和用户的查询语句，并对其进行预处理。
    """

    @staticmethod
    def load_data(file_path: str) -> List[Dict]:
        """
        从JSON文件加载源代码片段数据。

        参数：
            file_path (str): JSON文件的路径。

        返回：
            List[Dict]: 源代码片段的列表。
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                # 确保数据是一个列表
                if isinstance(data, list):
                    return data
                else:
                    raise ValueError("JSON 文件的格式不正确，应该包含一个列表。")
        except Exception as e:
            raise RuntimeError(f"加载数据失败: {e}")

    @staticmethod
    def preprocess_query(query: str) -> str:
        """
        对用户的查询语句进行预处理。

        操作包括：
        1. 转换为小写。
        2. 移除非字母数字字符。
        3. 移除停用词（如果需要，可扩展）。

        参数：
            query (str): 用户输入的查询语句。

        返回：
            str: 预处理后的查询语句。
        """
        # 转换为小写
        query = query.lower()
        # 移除非字母数字字符
        query = re.sub(r'[^a-zA-Z0-9\s]', '', query)
        # 移除多余的空格
        query = re.sub(r'\s+', ' ', query).strip()

        return query


# 测试模块功能
if __name__ == "__main__":
    # 示例数据文件路径
    example_file_path = "../output/sourceCodeResult/test.json"

    # 测试加载数据
    try:
        snippets = DataLoader.load_data(example_file_path)
        for snippet in snippets[:2]:
            print("代码片段 code 元素:", snippet.get("code", "未找到 code 片段"))  # 打印 code 片段
    except Exception as e:
        print(e)

    # 测试查询预处理
    example_query = "What is the best way to use uv_loop in libuv?"
    preprocessed_query = DataLoader.preprocess_query(example_query)
    print("预处理后的查询语句:", preprocessed_query)
