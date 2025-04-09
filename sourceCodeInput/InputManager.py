import os


class InputManager:
    """
    InputManager类
    功能：
        1. 递归扫描指定目录。
        2. 筛选符合条件的文件（如.c, .cpp, .h, .hpp）。
        3. 返回所有符合条件的文件路径列表。
    """

    @staticmethod
    def get_cpp_files(directory):
        """
        递归获取指定目录下的所有C/C++文件路径。

        参数：
        directory (str): 要扫描的根目录路径。

        返回：
        list: 包含所有符合条件的文件路径的列表。
        """
        # 存储C/C++文件路径的列表
        cpp_files = []

        # 遍历目录，包括子目录
        for root, _, files in os.walk(directory):
            for file in files:
                # 筛选以.c、.cpp、.h、.hpp为后缀的文件
                if file.endswith(('.c', '.cpp', '.h', '.hpp')):
                    # 拼接完整的文件路径并加入列表
                    full_path = os.path.join(root, file)
                    cpp_files.append(full_path)

        return cpp_files


# 以下是一个简单的测试用例
if __name__ == "__main__":
    # 指定测试目录
    test_directory = "../openSourceCode/libuv_src"

    # 调用InputManager获取C/C++文件列表
    files = InputManager.get_cpp_files(test_directory)

    # 打印结果
    print("发现的C/C++文件如下：")
    for file in files:
        print(file)
