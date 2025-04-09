import json
import os


class StorageManager:
    """
    StorageManager类
    功能：
        1. 将解析得到的代码实体存储为JSON文件。
        2. 支持文件追加写入或覆盖写入模式。
        3. 创建存储目录（如果目录不存在）。
    """

    @staticmethod
    def save_to_json(data, output_file, mode="w"):
        """
        将数据保存到JSON文件。

        参数：
        data (list): 要保存的代码实体列表，每个实体为一个字典。
        output_file (str): JSON文件的输出路径。
        mode (str): 写入模式，"w"为覆盖写入，"a"为追加写入。默认为"w"。

        返回：
        None
        """
        try:
            # 确保输出目录存在
            output_dir = os.path.dirname(output_file)
            if output_dir and not os.path.exists(output_dir):
                os.makedirs(output_dir)

            # 根据模式写入文件
            if mode == "a" and os.path.exists(output_file):
                # 追加模式，先读取已有内容
                with open(output_file, "r", encoding="utf-8") as f:
                    existing_data = json.load(f)
                # 合并数据
                data = existing_data + data

            # 保存数据到JSON文件
            with open(output_file, mode, encoding="utf-8") as f:
                json.dump(data, f, indent=4, ensure_ascii=False)

            print(f"数据成功保存到 {output_file}")

        except Exception as e:
            print(f"保存数据到 {output_file} 时出错: {e}")


# 测试用例
if __name__ == "__main__":
    # 测试数据
    test_data = [
        {
            "fileName": "example.c",
            "id": 0,
            "category": "Function",
            "startLine": 10,
            "endLine": 20,
            "code": "void example_function() { ... }"
        },
        {
            "fileName": "example.c",
            "id": 1,
            "category": "Struct",
            "startLine": 25,
            "endLine": 30,
            "code": "struct ExampleStruct { ... };"
        }
    ]

    # 输出文件路径
    output_path = "../output/code_entities.json"

    # 初始化StorageManager并保存数据
    StorageManager.save_to_json(test_data, output_path, mode="w")
