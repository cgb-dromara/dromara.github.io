---
title: 原生Java人工智能算法框架 easyAI-v1.2.9版本更新
author: EasyAi
date: 2024-11-25
cover: /assets/img/news/easyAI-v1.2.9-0.webp
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/easyAI-v1.2.9-0.webp)

## 前言

EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！

## EasyAi介绍

EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用。**再者，它既有一些我们已经封装好的图像目标检测及人工智能客服的模块，也提供各种深度学习，机器学习，强化学习，启发式学习，矩阵运算，等底层算法工具。开发者可以通过简单的学习，就能完成根据自身业务，深度开发符合自己业务的小微模型

*   EasyAI码云下载链接:https://gitee.com/dromara/easyAi
    
*   EasyAI技术文档地址：https://www.myeasyai.cn/
    
*   EasyAI详细视频教程：https://www.bilibili.com/video/av89134035
    
*   EasyAI框架0基础深度开发及人工智能完整体系教程：https://www.bilibili.com/cheese/play/ss17600
    

  

*     
    

  

# v1.2.9

## 人脸识别

*   基于EasyAi新创建了一个人脸识别的算法内核项目seeFace
    
*   内核算法链接:https://gitee.com/ldp\_dpsmax/see-face
    
*   视频教程地址:https://www.bilibili.com/video/BV1A8UeYwEsX
    

### 快速API

> `public ErrorMessage look(ThreeChannelMatrix face, long eventID, int secondExplore)`获取该图像的特征向量
> 
> > 参数`ThreeChannelMatrix face`为解析图像的三通道矩阵
> 
> > 参数`long eventID`线程安全唯一ID
> 
> > 参数`int secondExplore`迭代强度，识别时建议使用30，入库时提高到60，该数值越大对人脸抓取就越稳，但速度越慢。所以人脸入库获取向量时 提高该数值，求最稳。识别获取特征时降低到30，可以在兼顾一定稳定的同时求快。
> 
> 返回实体`ErrorMessage`
> 
> > `private int errorCode = 0`为错误码，当错误码为0时才是正常获取了结果
> 
> > `private String errorMessage`错误原因
> 
> > `FaceMessage faceMessage`人脸信息结果，当错误码不为0时，该返回实体为`null`
> > 
> > > 参数`private Matrix feature`为特征矩阵，内置二维数组保存特征值，可通过`getMatrix()`方法将二维数组提取出来用来特征值保存入库，以方便使用向量数据库对比。
> 
> > > 参数`private ThreeChannelMatrix channel`定位到的人脸特征的图像三通道矩阵，可以使用`ImageTools`中的`imageTools.writeImage(faceMessage.getChannel(), "/Users/lidapeng/job/faceData/test/b1.jpg");`方法将人脸输出出来，观察人脸定位结果，如果抓取位置异常，说明本次识别结果不理想，可进行重新拍摄再次获取。

### easyAI包已上传至Maven中央库

> 以后在pom文件引入以下JAR包地址即可，无需进行下载手动打包。

```
    <dependency>
    <groupId>org.dromara.easyai</groupId>
    <artifactId>easyAi</artifactId>
    <version>1.2.9</version>
    </dependency>
```

  

## 人脸检测效果演示

![](/assets/img/news/easyAI-v1.2.9-1.png)

### 图像识别FastYolo效果展示

*   使用EasyAi实现图像结算自动贩卖机视觉内核
    

![](/assets/img/news/easyAI-v1.2.9-2.jpg)

### sayOrder人工智能客服

*   sayOrder是依赖EasyAi进行封装的人工智能客服系统。
    
*   它可以分析用户输入的语义，来识别用户的行为，并通过typeID来区分用户意图ID。并通过捕捉其后台设置的关键词类别，来抓出系统关心的用户在语句中包含的内容，比如语句中的时间，地点等。
    
*   它还可以与用户自主进行问答交互，进行自主解答疑问或者进行其余意图的交流等。
    
*   项目链接地址: https://gitee.com/dromara/sayOrder
    

### sayOrder交互基本业务流程演示

*   用户第一次进行输入表达自己的想法![](/assets/img/news/easyAI-v1.2.9-3.png)
    
*   SayOrder发现用户的描述缺少订单必要信息，则进行反问。用户接收到SayOrder的反问，进一步补充的自己的想法![](/assets/img/news/easyAI-v1.2.9-4.png)
    
*   用户第二次输入信息依然不满足后台14分类法律咨询的订单关键信息要求，继续补充信息，最终完成订单信息补充生成订单。![](/assets/img/news/easyAI-v1.2.9-5.png)
    
*   用户输入想要咨询的问题，SayOrder对用户咨询的问题进行自主解答![](/assets/img/news/easyAI-v1.2.9-6.png)
    

### 架构设计

**常用底层算法模块**

*   基础矩阵及线代计算模块：
    
    1.内置矩阵类，矩阵计算类，可以完成常用矩阵四则运算，奇偶性，多元线性回归，逻辑斯蒂回归，欧式距离，余弦相似性，im2col，逆im2col，求代数余子式，求逆，求伴随矩阵，内积等，微分等一系列api。
    
    2.RGB三通道矩阵，可进行图像转化，剪切，分块，生成图像矩阵等操作方便后续计算。
    
*   机器学习-聚类：
    
    k聚类，混合高斯聚类，密度聚类，学习向量量化聚类等
    
*   机器学习-分类及拟合：多层前馈神经网络，多层循环神经网络，残差网络，多层残差循环神经网络，卷积神经网络，决策树，随机森林，k最近邻等
    
*   启发式算法：粒子群，蚁群，模拟退火
    
*   强化学习 动态规划，蒙特卡洛分析，马尔可夫，时序差分
    

**常用上层算法模块**

*   视觉图像：图像识别，图片摘要，目标检测
    
*   自然语言：语义理解，拆词分词，推理敏感及关键词，语句补全，语言交流
    
*   游戏机器人：自主策略，自主行动
    

### 使用

1.将项目下载后打包进本地maven库

2.将easyAi pom文件引入地址引入项目

### 关注项目

*   对项目有什么想法或者建议与学习，都可以加我工作微信![](/assets/img/news/easyAI-v1.2.9-7.jpg)
    

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/easyAI-v1.2.9-8.webp)