from InputManager import InputManager
from ParserManager import ParserManager
from StorageManager import StorageManager
from summary_generator import SummaryGenerator
from relation_analyzer import FunctionCallAnalyzer
from tqdm import tqdm


class Controller:
    """
    Controller类
    功能：
        1. 整合InputManager、ParserManager和StorageManager模块。
        2. 递归扫描目标目录中的C/C++文件。
        3. 解析文件中的函数和结构体节点。
        4. 将解析结果存储为JSON文件。
    """

    def __init__(self, root_directory, output_file):
        """
        初始化Controller类。

        参数：
        root_directory (str): 要扫描的根目录路径。
        output_file (str): JSON输出文件的路径。
        """
        self.root_directory = root_directory
        self.output_file = output_file
        self.input_manager = InputManager()
        self.parser_manager = ParserManager()
        self.storage_manager = StorageManager()
        self.summary_generator = SummaryGenerator()
        self.relation_analyzer = FunctionCallAnalyzer()

    def run(self):
        """
        执行整体工作流：
            1. 扫描目录，获取所有 C/C++ 文件。
            2. 解析每个文件，提取代码实体。
            3. 为每个实体生成简要描述，并添加到 summary 字段中。
            4. 分析实体之间的调用关系，添加到 relations 字段中。
            5. 保存最终结果到 JSON 文件。
        """
        print(f"开始扫描目录：{self.root_directory}")

        # 步骤1：获取所有C/C++文件路径
        cpp_files = self.input_manager.get_cpp_files(self.root_directory)
        print(f"发现 {len(cpp_files)} 个C/C++文件。")

        # 如果没有找到文件，直接退出
        if not cpp_files:
            print("未找到C/C++文件，流程终止。")
            return

        all_entities = []  # 用于存储所有解析的代码实体

        # 步骤2：解析每个文件
        for file_path in tqdm(cpp_files, desc="解析文件"):
            entities = self.parser_manager.parse_file(file_path)
            if entities:
                # 给每个实体分配唯一的ID
                for idx, entity in enumerate(entities):
                    entity["fileName"] = file_path
                    entity["id"] = len(all_entities) + idx
                all_entities.extend(entities)

        # 步骤3：为每个实体生成简短描述，调用 DeepSeek 生成 summary
        for entity in tqdm(all_entities, desc="生成描述"):
            summary = self.summary_generator.generate_summary(entity)
            entity["summary"] = summary

        # 步骤4：分析实体之间的调用关系
        print("正在分析实体之间的调用关系...")
        all_entities = self.relation_analyzer.analyze(all_entities)

        # 步骤5：保存解析结果
        print(f"正在保存解析结果到：{self.output_file}")
        self.storage_manager.save_to_json(all_entities, self.output_file, mode="w")
        print("流程完成！")


# 测试用例
if __name__ == "__main__":
    # 测试用的根目录路径
    test_root_directory = "../openSourceCode/libuv_src"

    # 输出文件路径
    test_output_file = "../output/sourceCodeResult/libuv_src1.json"

    # 初始化Controller
    controller = Controller(test_root_directory, test_output_file)

    # 运行工作流
    controller.run()
