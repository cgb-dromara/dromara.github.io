---
title: Native Java Artificial Intelligence Algorithm Framework EasyAI-v1.3.8 Version Update
author: easyAI
date: 2025-03-11
cover: /assets/img/news/EasyAI-v1.3.8-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/EasyAI-v1.3.8-0.png)

# Preface

The significance of EasyAI for Java is equivalent to the significance of the emergence of Spring in the JavaWeb field—to be out-of-the-box, enabling every developer to use EasyAI to develop small and micro models that meet their own artificial intelligence business needs. This is its mission!

# Introduction to EasyAI

EasyAI has no dependencies; it is a native Java artificial intelligence algorithm framework. Firstly, **it can be smoothly introduced into our Java project with Maven in one step, without any additional environment configuration or dependencies, achieving out-of-the-box usability**. Furthermore, it includes pre-packaged modules for image target detection and AI customer service, as well as provides various underlying algorithm tools such as deep learning, machine learning, reinforcement learning, heuristic learning, matrix operations, etc. Developers can, through simple learning, develop small and micro models that deeply align with their own business needs.

*   EasyAI Gitee download link: https://gitee.com/dromara/easyAi
*   EasyAI technical documentation address: https://www.myeasyai.cn/
*   EasyAI detailed video tutorial: https://www.bilibili.com/video/av89134035
*   EasyAI framework zero-based deep development and complete artificial intelligence system tutorial: https://www.bilibili.com/cheese/play/ss17600

# v1.3.8 Update Content

## Image Matting

*   Performs pixel-level segmentation of image semantics; the former inputs the original image, the latter outputs the image after matting.

![](/assets/img/news/EasyAI-v1.3.8-1.png)![](/assets/img/news/EasyAI-v1.3.8-2.png)

## How to Use GPU Acceleration

### Environmental Requirements (Graphics Card, Driver, CUDA)

*   The machine must have an `NVIDIA graphics card` because EasyAI uses CUDA for GPU acceleration. Non-`NVIDIA graphics cards` (such as `AMD graphics cards`) do not support CUDA.
*   The machine's graphics driver must support `CUDA 12.0.0` or a higher version (usually supporting a higher version also means supporting lower versions).
*   Install `CUDA 12.0.0` and the corresponding `cuDNN` for that CUDA version. Installation reference: https://blog.csdn.net/m0_45447650/article/details/123704930

### Version Correspondence Between easyai and CUDA Extensions.

| EasyAI Version | CUDA Extension Version | Platform Architecture          |
| :------------- | :--------------------- | :----------------------------- |
| ≥1.3.4         | 1.0.0                  | windows-x86_64<br>linux-x86_64 |

### Introducing CUDA Extension Dependencies

Choose the corresponding CUDA extension version based on the dependent EasyAI version.

```xml
<dependency>
    <groupId>org.dromara.easyai.extensions</groupId>
    <artifactId>easyai-extensions-cuda-12.0.0</artifactId>
    <version>${CUDA_Extension_Version}</version> <!-- e.g., 1.0.0 -->
    <classifier>${Platform_Architecture}</classifier> <!-- e.g., windows-x86_64 -->
</dependency>
```

## Run & Verify

After successfully completing the previous steps, directly call EasyAI for training. If the `console` outputs the following content, it indicates successful CUDA extension integration.

```
EasyAI CUDA-12.0.0 extensions init success.
```

### easyAI Package Has Been Uploaded to Maven Central Repository

> From now on, you can introduce the following JAR package address in the pom file without needing to download and package it manually.

```xml
<dependency>
    <groupId>org.dromara.easyai</groupId>
    <artifactId>easyAi</artifactId>
    <version>1.3.8</version>
</dependency>
```

## Face Detection Effect Demonstration

![](/assets/img/news/EasyAI-v1.3.8-3.png)

### FastYolo Image Recognition Effect Display

*   Using EasyAI to implement the visual core of an image-based checkout automatic vending machine.

![](/assets/img/news/EasyAI-v1.3.8-4.jpg)

### sayOrder AI Customer Service

*   sayOrder is an AI customer service system packaged based on EasyAI.
*   It can analyze the semantics of user input to identify user behavior and distinguish user intent IDs through typeID. It captures keyword categories set in the background to extract content the system cares about contained in the user's statement, such as time, location, etc.
*   It can also autonomously interact with users through Q&A, answering questions autonomously or engaging in communication about other intents.
*   Project link: https://gitee.com/dromara/sayOrder

### Demonstration of sayOrder Interactive Basic Business Process

*   The user first inputs to express their idea.  
    ![](/assets/img/news/EasyAI-v1.3.8-5.png)
*   SayOrder finds that the user's description lacks necessary order information and asks a follow-up question. The user receives SayOrder's question and further supplements their idea.  
    ![](/assets/img/news/EasyAI-v1.3.8-6.png)
*   The user's second input still does not meet the key information requirements for the background 14-category legal consultation order. They continue to add information, finally completing the order information supplement and generating the order.  
    ![](/assets/img/news/EasyAI-v1.3.8-7.png)
*   The user inputs a question they want to consult, and SayOrder autonomously answers the user's query.  
    ![](/assets/img/news/EasyAI-v1.3.8-8.png)

### Architecture Design

**Common Underlying Algorithm Modules**

*   Basic Matrix and Linear Algebra Calculation Module:
    1.  Built-in matrix class and matrix calculation class can complete common matrix arithmetic, parity, multiple linear regression, logistic regression, Euclidean distance, cosine similarity, im2col, inverse im2col, finding algebraic cofactors, finding inverses, finding adjoint matrices, inner products, differentiation, and a series of other APIs.
    2.  RGB three-channel matrix, which can perform image conversion, cropping, blocking, generating image matrices, and other operations to facilitate subsequent calculations.
*   Machine Learning - Clustering:
    k-means clustering, Gaussian mixture clustering, density clustering, learning vector quantization clustering, etc.
*   Machine Learning - Classification and Fitting: Multi-layer feedforward neural network, multi-layer recurrent neural network, residual network, multi-layer residual recurrent neural network, convolutional neural network, decision tree, random forest, k-nearest neighbors, etc.
*   Heuristic Algorithms: Particle swarm optimization, ant colony optimization, simulated annealing.
*   Reinforcement Learning: Dynamic programming, Monte Carlo analysis, Markov, temporal difference.

**Common Upper-Level Algorithm Modules**

*   Visual Image: Image recognition, image summarization, object detection.
*   Natural Language: Semantic understanding, word segmentation, inferring sensitive and key words, sentence completion, language interaction.
*   Game Bots: Autonomous strategy, autonomous action.

### Usage

1.  Download the project and package it into the local Maven repository.
2.  Introduce the easyAi pom file address into the project.

### Follow the Project

*   For any ideas, suggestions, or learning related to the project, you can add my work WeChat.  
    ![](/assets/img/news/EasyAI-v1.3.8-9.jpg)

### About Dromara

Dromara is an open-source community composed of top domestic open-source project authors. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, scheduling orchestration, etc. The technology stack is fully open-source and co-built, maintaining community neutrality, and is committed to providing global users with microservice cloud-native solutions. Let every open-source enthusiast participating experience the joy of open source.

The Dromara open-source community currently owns 10+ GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of people, with thousands of individuals and teams using the open-source projects from the Dromara community.

**Welcome everyone to join the Knowledge Planet to interact with me**

![](/assets/img/news/EasyAI-v1.3.8-10.webp)