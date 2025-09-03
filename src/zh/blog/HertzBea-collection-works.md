---
title: HertzBeat 幕后花絮：公制集合的工作原理
author: 2025年04月03日 11:19
date: 2025-04-03
cover: /assets/img/blog/HertzBea-collection-works-0.png
head:
  - - meta
    - name: 博客
---

  

> 来自Apache HertzBeat 社区韩国朋友 @JuJinPark 的文章，写的很棒，这里就直接贴原文不翻译了。

> HertzBeat 是一个开源的实时监控系统，旨在实现灵活性和易用性。但它究竟是如何收集、处理和存储来自各种系统的指标的呢？

在这篇文章中，我们将借助高级系统图来了解 **HertzBeat 指标收集管道**背后的内部架构——从作业分配到警报和存储。

* * *

### HertzBeat 的公制集合架构

  

![](/assets/img/blog/HertzBea-collection-works-0.png)

> **图**：HertzBeat 指标收集系统的高级架构。Manager 处理作业调度、警报和存储，而 Collector（外部或内部）执行实际的指标收集。Manager 和 Collectors 之间的通信使用自定义的 Netty TCP 协议。

* * *

### 1\. 作业分配：分配要监控的内容

当 **Manager** 组件启动时，它会从数据库加载监视目标。这些目标定义主机、收集间隔和其他参数。

为了分配工作负载，Manager 通过**基于 Netty 的自定义 TCP 协议**将作业发送到**外部收集器**。该模块使用**一致的哈希**处理此逻辑，确保作业在收集器之间均匀分布。`CollectJobScheduling`

> 💡 HertzBeat 还包括一个内置的**主收集器**（标识为 ），它直接在管理器内运行。这使得 HertzBeat 可以在**独立模式下**运行，而无需任何外部收集器。`MAIN_COLLECTOR_NODE`

* * *

### 2\. 任务调度：何时监控

收集器收到作业后，它会将其注册到 **`TimerDispatch`** 系统。

*   对于**外部收集器**，Manager 通过 TCP 连接发送任务。
    
*   对于**主收集器**，Manager 在同一进程中直接调用。`CollectJobService`
    

每个收集器在后台线程中运行一个**`计时器`**，该计时器根据其配置的时间间隔计划任务。时间到时，计时器会触发开始 指标收集。`TimerTask`

* * *

### 3\. 任务执行：如何收集指标

触发 a 时 ，它会创建一个 任务并将其传递给 ，后者将其置于 **`MetricsCollectorQueue`** 中。`TimerTask``MetricsCollect``MetricsTaskDispatch`

*   专用线程 （） 持续轮询此队列。`CommonDispatcher`
    
*   任务由**工作线程池**执行，允许多个指标集合并发运行。
    
*   每个任务都使用特定的**收集器策略**（例如 HTTP、JDBC、SSH）从目标系统获取指标。
    

* * *

### 4\. 结果处理：收集的数据会发生什么

收集指标后，结果将由 **`CollectDataDispatch`** 模块处理。

*   如果任务是重复的，则通过 重新安排。`TimerDispatch`
    
*   结果将添加到 **`CommonDataQueue`** 中以供进一步处理。
    

对于外部收集器，结果通过 Netty TCP 连接发送回 Manager。对于主收集器，结果直接转发 到下一个处理阶段，没有网络开销。

* * *

### 5\. 警报和存储：使指标有用

Manager 接收指标数据并将其推送到 中，通过两个主要管道进行处理：`MetricsDataToAlertQueue`

#### 🔔 提醒

*   使用 警报队列中的指标。`RealTimeAlertCalculator`
    
*   它根据用户定义的警报规则检查每个指标，并在满足条件时触发警报。
    

#### 🧠 存储

*   警报评估后，指标将添加到 .`MetricsDataToStorageQueue`
    
*   后台线程 （） 处理此队列并将指标存储在数据库中，以便进行长期分析和仪表板可视化。`DataStorageDispatch`
    

* * *

### 独立模式：无需外部集电极

得益于内置**的主集电器**，HertzBeat 可以完全在独立模式下运行。这对于测试、小型部署或快速设置特别有用。所有核心组件（作业调度、收集、警报和存储）都在单个进程中运行。

* * *

### 🧠 结论

HertzBeat 的公制收集系统专为**性能、可扩展性和灵活性**而设计。凭借它：

*   **基于队列的多线程架构**
    
*   **持久的 TCP 连接**，实现可靠的作业/结果流
    
*   **内置主集电器**，可独立作
    

它以最小的开销和高效率处理大规模监控工作负载。

* * *

### 🙌 下一步是什么？

如果您想了解更多信息：

*   ⭐️ 在 GitHub 上为项目加星标  
    
*   🤝 贡献或打开问题
    

https://github.com/apache/hertzbeat