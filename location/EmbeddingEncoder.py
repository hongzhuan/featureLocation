import torch
from typing import List, Dict
import json
from tqdm import tqdm

class EmbeddingEncoder:
    """
    嵌入编码模块。
    负责将输入文本（如查询语句和代码片段）分批编码为语义嵌入向量，并保留元信息。
    """

    def __init__(self, model_path: str, device: str = "cpu"):
        """
        初始化编码器。

        参数：
            model_path (str): 预训练模型的路径。
            device (str): 运行设备（如 'cpu', 'cuda'）。
        """
        self.device = torch.device(device)
        # 加载预训练模型
        self.model = self.load_model(model_path)
        self.model.to(self.device)

    def load_model(self, model_path: str):
        """
        加载预训练模型。

        参数：
            model_path (str): 预训练模型的路径。

        返回：
            模型实例。
        """
        try:
            from sentence_transformers import SentenceTransformer
            return SentenceTransformer(model_path)
        except ImportError:
            raise ImportError("需要安装 sentence_transformers 模块。")

    def encode_in_batches(self, sentences: List[str], batch_size: int = 128) -> torch.Tensor:
        """
        分批次对查询进行编码，避免一次性加载所有数据导致显存不足。

        参数：
            sentences (List[str]): 待编码的句子列表。
            batch_size (int): 每批次的句子数量。

        返回：
            torch.Tensor: 编码后的语义嵌入。
        """
        embeddings = []
        for i in range(0, len(sentences), batch_size):
            batch = sentences[i:i + batch_size]
            with torch.no_grad():
                batch_embeddings = self.model.encode(batch, normalize_embeddings=True, batch_size=batch_size)
            embeddings.append(torch.tensor(batch_embeddings).cpu())  # 转到 CPU 节省显存
            print(f"已编码第 {i} 至 {i + len(batch)} 条，共 {len(sentences)} 条。")
        return torch.cat(embeddings, dim=0)

    def encode_with_meta(self, code_snippets: List[Dict], batch_size: int = 128) -> List[Dict]:
        """
        对代码片段进行分批编码，同时保留元信息。

        参数：
            code_snippets (List[Dict]): 包含代码和元信息的字典列表。
            batch_size (int): 每批次的代码片段数量。

        返回：
            List[Dict]: 包含编码后的嵌入和元信息的列表。
        """
        embeddings_with_meta = []
        sentences = [snippet["code"] for snippet in code_snippets]

        from tqdm import tqdm  # 加在文件顶部的 import 区域

        # 替代原来的 for 循环
        for i in tqdm(range(0, len(sentences), batch_size), desc="编码进度"):
            batch = sentences[i:i + batch_size]
            batch_meta = code_snippets[i:i + batch_size]
            with torch.no_grad():
                batch_embeddings = self.model.encode(batch, normalize_embeddings=True, batch_size=batch_size)
            for idx, embedding in enumerate(batch_embeddings):
                embeddings_with_meta.append({
                    "embedding": torch.tensor(embedding).cpu(),
                    "meta_info": batch_meta[idx]
                })

        return embeddings_with_meta

    @staticmethod
    def load_code_snippets(file_path: str) -> List[Dict]:
        """
        从 JSON 文件加载代码片段。

        参数：
            file_path (str): JSON 文件路径。

        返回：
            List[Dict]: 包含代码和元信息的字典列表。
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                return data
        except Exception as e:
            raise RuntimeError(f"加载代码片段失败: {e}")


# 测试模块功能
if __name__ == "__main__":
    # 模型路径
    model_path = "../model/bge-m3"

    # 初始化编码器
    encoder = EmbeddingEncoder(model_path, device="cuda" if torch.cuda.is_available() else "cpu")

    # 加载代码片段
    code_snippets_file_path = "../output/sourceCodeResult/test.json"
    code_snippets = None
    try:
        code_snippets = EmbeddingEncoder.load_code_snippets(code_snippets_file_path)
        print(f"成功加载代码片段，共 {len(code_snippets)} 条。")
    except Exception as e:
        print(e)

    # 编码代码片段（保留元信息）
    embeddings_with_meta = encoder.encode_with_meta(code_snippets, batch_size=2)
    print(f"编码完成，共生成 {len(embeddings_with_meta)} 条嵌入记录。")
