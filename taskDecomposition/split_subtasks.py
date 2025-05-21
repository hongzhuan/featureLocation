import json
import os
from pathlib import Path

# 英文序数词，足够用就行；不够时后面自动回退到数字
ORDINAL = [
    "first", "second", "third", "fourth", "fifth",
    "sixth", "seventh", "eighth", "ninth", "tenth",
    "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth",
    "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth"
]


def main():
    src = Path("../output/similarityResult/libuv_src.json")  # 原始文件
    dst_dir = Path("../output/subtask/subtasks_input")  # 输出目录
    dst_dir.mkdir(exist_ok=True)

    with src.open(encoding="utf-8") as f:
        entries = json.load(f)

    for i, entry in enumerate(entries, start=1):
        # 生成文件名：前 20 条用英文序数词，其余用数字
        if i <= len(ORDINAL):
            name = ORDINAL[i - 1] + ".json"
        else:
            name = f"{i}.json"

        out_file = dst_dir / name
        with out_file.open("w", encoding="utf-8") as f:
            json.dump([entry], f, ensure_ascii=False, indent=2)
            f.write("\n")

        print(f"✅  写入 {out_file}")


if __name__ == "__main__":
    main()
