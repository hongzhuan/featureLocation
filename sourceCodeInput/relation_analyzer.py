import re
from typing import List, Dict


class RelationAnalyzer:
    """
    RelationAnalyzer 抽象基类，用于分析代码实体之间的关系。
    未来可以扩展其他关系的分析，如 Declares、Define、Cast 等。
    """

    def analyze(self, entities: List[dict]) -> List[dict]:
        raise NotImplementedError("子类必须实现 analyze 方法。")


class FunctionCallAnalyzer(RelationAnalyzer):
    """
    FunctionCallAnalyzer 类，专门用于分析函数之间的调用关系（Call），
    并构建调用链（call chain），以便识别从某个函数开始的连续调用路径。
    """

    def analyze(self, entities: List[dict]) -> List[dict]:
        """
        分析函数之间的直接调用关系，并构建调用链。
        分析结果会添加到每个函数实体的 "relations" 字段中（存储直接调用关系），
        同时为调用链根（未被其他函数调用的函数）生成 "callChains" 字段，
        其中每条调用链为一个函数 id 的列表。

        参数：
            entities (List[dict]): 代码实体列表，其中 category 为 "Function" 的实体为候选。
        返回：
            List[dict]: 修改后的实体列表。
        """
        # 构建函数名到实体 ID 的映射
        func_name_to_id = {}
        for entity in entities:
            if entity.get("category") == "Function":
                func_name = self.extract_function_name(entity.get("code", ""))
                if func_name:
                    func_name_to_id[func_name] = entity["id"]

        # 构建函数 id 到 summary 的映射
        id_to_summary = {}
        for entity in entities:
            if entity.get("category") == "Function":
                id_to_summary[entity["id"]] = entity.get("summary", "")

        # 对每个函数实体，利用正则表达式找出直接调用的函数
        for entity in entities:
            if entity.get("category") == "Function":
                relations = []
                code = entity.get("code", "")
                src_id = entity["id"]
                src_file = entity.get("fileName", "")
                # 正则查找函数调用形式：比如 "bar(" 或 "func_name ("
                call_matches = re.finditer(r'\b([a-zA-Z_]\w*)\s*\(', code)
                for match in call_matches:
                    called_name = match.group(1)
                    # 若调用的函数在映射中存在且不是自身调用
                    if called_name in func_name_to_id and func_name_to_id[called_name] != src_id:
                        loc = self.get_call_location(code, match.start())
                        target_id = func_name_to_id[called_name]
                        relation = {
                            "category": "Call",
                            "from": src_id,
                            "to": func_name_to_id[called_name],
                            "summary_to": id_to_summary.get(target_id, ""),
                            "loc": {
                                "fileName": src_file,
                                "startLine": loc.get("startLine"),
                                "endLine": loc.get("endLine"),
                                "offset": loc.get("offset")
                            }
                        }
                        relations.append(relation)
                entity["relations"] = relations

        # 构建调用图：键为函数 id，值为该函数直接调用的函数 id 列表
        call_graph = {}
        for entity in entities:
            if entity.get("category") == "Function":
                src_id = entity["id"]
                for rel in entity.get("relations", []):
                    if rel.get("category") == "Call":
                        call_graph.setdefault(src_id, []).append(rel["to"])

        # 找出所有被调用的函数 id 集合
        called_set = set()
        for targets in call_graph.values():
            for tid in targets:
                called_set.add(tid)
        # 根函数：即那些未被其他函数调用的函数（在所有函数中其 id 不在 called_set 中）
        roots = []
        for entity in entities:
            if entity.get("category") == "Function" and entity["id"] not in called_set:
                roots.append(entity["id"])

        # 设置最大调用链深度，例如 3
        max_depth = 10
        call_chains_map = {}  # key: 根函数 id, value: 调用链列表（每条链为函数 id 列表）
        for root in roots:
            chains = self._dfs_call_chains(root, call_graph, max_depth)
            call_chains_map[root] = chains

        # 将计算得到的调用链添加到对应的函数实体中
        for entity in entities:
            if entity.get("category") == "Function":
                if entity["id"] in call_chains_map:
                    entity["callChains"] = call_chains_map[entity["id"]]
                else:
                    entity["callChains"] = []
        return entities

    def extract_function_name(self, code: str) -> str:
        """
        从函数代码片段中提取函数名。
        利用正则表达式匹配函数签名中最后一个单词作为函数名。

        参数：
            code (str): 函数代码片段。
        返回：
            str: 提取到的函数名，如果匹配不到则返回空字符串。
        """
        pattern = re.compile(r'(?:[\w\*\s]+)\b(\w+)\s*\(')
        match = pattern.search(code)
        if match:
            return match.group(1)
        return ""

    def get_call_location(self, code: str, index: int) -> Dict:
        """
        根据代码字符串中的索引位置，计算该位置对应的行号和列偏移。

        参数：
            code (str): 函数代码片段。
            index (int): 正则匹配时获得的字符索引位置。
        返回：
            dict: 包含 "startLine"、"endLine" 及 "offset" 的字典。
        """
        lines = code.splitlines()
        current_index = 0
        for i, line in enumerate(lines, start=1):
            line_length = len(line) + 1  # 加上换行符长度
            if current_index + line_length > index:
                offset = index - current_index
                return {"startLine": i, "endLine": i, "offset": offset}
            current_index += line_length
        return {"startLine": 1, "endLine": 1, "offset": 0}

    def _dfs_call_chains(self, current: int, graph: Dict[int, List[int]], max_depth: int, path: List[int] = None) -> \
    List[List[int]]:
        """
        利用深度优先搜索构建调用链。
        避免循环调用，并限制搜索深度。

        参数：
            current (int): 当前函数实体 id。
            graph (dict): 调用图，键为函数 id，值为被调用的函数 id 列表。
            max_depth (int): 最大搜索深度。
            path (list): 当前搜索路径。
        返回：
            list: 包含所有调用链，每条调用链为函数 id 的列表。
        """
        if path is None:
            path = [current]
        else:
            path = path + [current]
        # 如果达到最大深度或没有后续调用，则返回当前路径
        if len(path) >= max_depth or current not in graph:
            return [path]
        chains = []
        for next_id in graph.get(current, []):
            if next_id in path:  # 避免循环调用
                continue
            new_paths = self._dfs_call_chains(next_id, graph, max_depth, path)
            chains.extend(new_paths)
        return chains


# 测试用例
if __name__ == "__main__":
    import json

    # 构造模拟的函数实体列表
    # 假设有如下调用关系：
    # function 1 调用 function 2 和 function 3；
    # function 2 调用 function 8；
    # function 3 调用 function 9；
    # function 8 调用 function 4；
    # function 9 调用 function 5；
    entities = [
        {
            "category": "Function",
            "startLine": 1,
            "endLine": 5,
            "code": "void function1() {\n    function2();\n    function3();\n}",
            "fileName": "./test_project/example.c",
            "id": 1,
            "summary": "这是 function1 的实现"
        },
        {
            "category": "Function",
            "startLine": 6,
            "endLine": 10,
            "code": "void function2() {\n    function8();\n}",
            "fileName": "./test_project/example.c",
            "id": 2,
            "summary": "这是 function2 的实现"
        },
        {
            "category": "Function",
            "startLine": 11,
            "endLine": 15,
            "code": "void function3() {\n    function9();\n}",
            "fileName": "./test_project/example.c",
            "id": 3,
            "summary": "这是 function3 的实现"
        },
        {
            "category": "Function",
            "startLine": 16,
            "endLine": 20,
            "code": "void function8() {\n    function4();\n}",
            "fileName": "./test_project/example.c",
            "id": 4,
            "summary": "这是 function8 的实现"
        },
        {
            "category": "Function",
            "startLine": 21,
            "endLine": 25,
            "code": "void function9() {\n    function5();\n}",
            "fileName": "./test_project/example.c",
            "id": 5,
            "summary": "这是 function9 的实现"
        },
        {
            "category": "Function",
            "startLine": 26,
            "endLine": 30,
            "code": "void function4() {\n    // do something\n}",
            "fileName": "./test_project/example.c",
            "id": 6,
            "summary": "这是 function4 的实现"
        },
        {
            "category": "Function",
            "startLine": 31,
            "endLine": 35,
            "code": "void function5() {\n    // do something\n}",
            "fileName": "./test_project/example.c",
            "id": 7,
            "summary": "这是 function5 的实现"
        }
    ]

    analyzer = FunctionCallAnalyzer()
    updated_entities = analyzer.analyze(entities)

    print("调用关系和调用链分析结果：")
    print(json.dumps(updated_entities, indent=4, ensure_ascii=False))
