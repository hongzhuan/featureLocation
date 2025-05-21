# featureLocation

## 使用说明

### Module 1 : 知识图谱构建

该部分的实现代码主要集中在sourceCodeInput文件夹中，sourceCodeInput/Controller.py是整个知识图谱构建的总控制程序，它调用sourceCodeInput中的其他文件完成这个功能。

- sourceCodeInput/Controller.py: 输入是源代码文件夹的路径，例如openSourceCode/libuv_src；输出是存有节点、边、节点摘要的json文件，例如output/sourceCodeResult/libuv_src.json；
- 

### Module 2 : 子任务分解

该部分首先利用location/TaskLocatorController.py程序，定位与查询相关的top 5节点，然后提取其中的节点摘要summary信息，然后用TaskDecomposition中的程序进行聚类。

- location/TaskLocatorController.py: 输入是Module 1中的输出文件output/sourceCodeResult/libuv_src.json；
输出是带有与查询最相关的top 5节点的信息json文件，例如output/similarityResult/libuv_src.json；
- taskDecomposition/split_subtasks.py: 在TaskLocatorController.py中，可能会有多个查询语句，然后有多个查询语句对应的top 5节点信息，所以要进行分割。 
这部分的输入是location/TaskLocatorController.py的输出output/similarityResult/libuv_src.json，输出是分割好后的json文件，存放在output/subtask/subtasks_input目录中；
- taskDecomposition/subTaskClassifier.py: 这部分进行聚类，这部分的输入是split_subtasks.py的输出output/subtask/subtasks_input/second.json；
输出是聚类后的结果output/subtask/second.json；

### Module 3 : 子任务定位及修剪排序

该部分利用location/TaskLocatorController.py程序定位与子任务查询相关的top 10/top 20节点，并进行修剪和排序。

- location/TaskLocatorController.py: 该部分可以调用本地嵌入模型，threshold设置为0.5，top-k设置为10/20都可，排序并修剪；
输入是Module 1中的输出文件output/sourceCodeResult/libuv_src.json；
输出是带有与查询最相关的top 10/20节点的信息json文件，例如output/similarityResult/libuv_src.json；

### Module 4 : 定位结果分析

该部分利用location/LLM_analysis.py程序，对定位结果进行分析；

- location/LLM_analysis.py: 输入是子任务的最终定位结果output/result/subTasksLocationResult.json；
输出是分析后的结果output/llmAnalysisResult.json；