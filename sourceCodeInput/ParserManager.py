from clang.cindex import Index, CursorKind


class ParserManager:
    """
    ParserManager类
    功能：
        1. 解析C/C++文件，生成抽象语法树（AST）。
        2. 提取函数和结构体节点信息，包括起始行、结束行和完整代码。
    """

    def __init__(self):
        # 初始化clang的索引，用于构建AST
        self.index = Index.create()

    def parse_file(self, file_path):
        """
        解析C/C++文件并提取函数和结构体节点。

        参数：
        file_path (str): C/C++文件的路径。

        返回：
        list: 包含函数和结构体节点信息的列表。
        每个节点的信息包括：
        {
            "category": "Function" 或 "Struct",
            "startLine": 起始行,
            "endLine": 结束行,
            "code": 代码内容
        }
        """
        try:
            # 使用clang解析文件，生成语法树
            tu = self.index.parse(file_path)
            entities = []  # 存储提取到的节点信息

            # 遍历语法树节点
            for node in tu.cursor.walk_preorder():
                # 过滤掉不属于目标文件的节点
                if not self._is_node_in_file(node, file_path):
                    continue

                # 判断节点类型并提取信息
                if node.kind == CursorKind.FUNCTION_DECL and self._is_valid_function_implementation(node):
                    entities.append(self._extract_entity_info(node, "Function"))
                elif node.kind == CursorKind.STRUCT_DECL:
                    entities.append(self._extract_entity_info(node, "Struct"))
                elif node.kind == CursorKind.CLASS_DECL:
                    entities.append(self._extract_entity_info(node, "Class"))
                elif node.kind == CursorKind.ENUM_DECL:
                    entities.append(self._extract_entity_info(node, "Enum"))
                elif node.kind == CursorKind.MACRO_DEFINITION:
                    entities.append(self._extract_entity_info(node, "Macro"))

            return entities

        except Exception as e:
            # 如果解析失败，打印错误信息
            print(f"解析文件 {file_path} 时出错: {e}")
            return []

    def _is_valid_function_implementation(self, node):
        """
        判断是否是一个有效的函数实现,而非是一个函数声明。

        参数：
        node: AST中的节点对象。

        返回：
        bool: 如果是有效的函数实现，返回True；否则返回False。
        """
        # 必须是定义
        if not node.is_definition():
            return False

        # 获取函数的范围
        start_line = node.extent.start.line
        end_line = node.extent.end.line

        # 函数体的结束行号应该比开始行号大（排除单行伪函数）
        if start_line == end_line:
            return False

        # 检查函数体是否存在有效的"{ }"包裹代码（粗略验证）
        code = self._get_code_from_node(node)
        if "{" not in code or "}" not in code:
            return False

        return True

    def _is_node_in_file(self, node, file_path):
        """
        检查节点是否属于目标文件。

        参数：
        node: AST中的节点对象。
        file_path (str): 目标文件路径。

        返回：
        bool: 如果节点属于目标文件，返回True；否则返回False。
        """
        # 确保节点的文件属性存在，并与目标文件路径匹配
        if node.location.file and node.location.file.name == file_path:
            return True
        return False

    def _extract_entity_info(self, node, category):
        """
        提取单个节点的信息。

        参数：
        node: AST中的节点对象。
        category (str): 节点类别（"Function" 或 "Struct"）。

        返回：
        dict: 包含节点信息的字典。
        """
        # 获取起始行和结束行
        start_line = node.extent.start.line
        end_line = node.extent.end.line

        # 提取节点对应的代码
        code = self._get_code_from_node(node)

        return {
            "category": category,
            "startLine": start_line,
            "endLine": end_line,
            "code": code
        }

    def _get_code_from_node(self, node):
        """
        根据AST节点提取对应的代码内容。

        参数：
        node: AST中的节点对象。

        返回：
        str: 该节点对应的代码内容。
        """
        try:
            # 获取节点所在文件路径
            file_path = node.extent.start.file.name
            # 读取文件内容
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            # 提取节点范围内的代码
            start_line = node.extent.start.line
            end_line = node.extent.end.line
            return ''.join(lines[start_line - 1:end_line])
        except Exception as e:
            print(f"提取代码时出错: {e}")
            return ""


# 测试用例
if __name__ == "__main__":
    # 测试文件路径
    test_file = "../openSourceCode/test/example.c"

    # 初始化ParserManager
    parser_manager = ParserManager()

    # 解析文件并提取节点信息
    entities = parser_manager.parse_file(test_file)

    # 打印提取结果
    print("提取的节点信息如下：")
    for entity in entities:
        print(entity)
