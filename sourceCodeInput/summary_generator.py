from openai import OpenAI


class SummaryGenerator:
    """
    SummaryGenerator 类
    功能：
        1. 利用 DeepSeek 模型为代码实体生成简短的概括说明，
           用于 API 知识图谱节点的描述。
    """

    def __init__(self):
        """
        初始化 SummaryGenerator 类。

        参数：
            api_key (str): DeepSeek API Key
        """
        # 初始化 DeepSeek 客户端
        self.client = OpenAI(api_key="sk-sjrakzittftbzqscijmcliaapaivruccvrafwlxcgegfzmiv", base_url="https://api.siliconflow.cn")

    def generate_summary(self, entity: dict) -> str:
        """
        生成单个代码实体的简短概括说明。

        参数：
            entity (dict): 包含代码实体信息的字典，至少包含 "code" 字段。

        返回：
            str: 生成的简短概括说明。
        """
        # 获取代码片段信息
        code_snippet = entity.get("code", "")

        # 构造请求消息，提示 DeepSeek 模型生成简短说明
        system_message = "你是一个软件工程领域的专家，擅长的领域是CPP源代码分析。"
        user_message = f"为以下代码片段生成一个二十个字以内的简短的概括说明，描述其功能和用途：\n\n{code_snippet}"

        try:
            # 调用 DeepSeek API 生成说明
            response = self.client.chat.completions.create(
                model="deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": user_message}
                ],
                stream=False
            )
            summary = response.choices[0].message.content.strip()
            return summary
        except Exception as e:
            print("调用 DeepSeek API 生成 summary 时出错：", e)
            return "调用 DeepSeek API 生成 summary 时出错。"


# 测试用例
if __name__ == "__main__":
    # 初始化 SummaryGenerator
    generator = SummaryGenerator()

    # 构造测试用的代码实体
    test_entity = {
        "category": "Function",
        "startLine": 59,
        "endLine": 64,
        "code": "int uv_fs_poll_init(uv_loop_t* loop, uv_fs_poll_t* handle)\n{\n  uv__handle_init(loop, (uv_handle_t*)handle, UV_FS_POLL);\n  handle->poll_ctx = NULL;\n  return 0;\n}\n",
        "fileName": "../openSourceCode/libuv_src\\fs-poll.c",
        "id": 1
    }

    # 调用生成简短概括
    summary = generator.generate_summary(test_entity)
    print("生成的简短概括：")
    print(summary)
