---
title: Native Java Artificial Intelligence Algorithm Framework easyAI v1.2.7 Version Update
author: easyAI
tag:
  - EasyAI
date: 2024-10-14
cover: /assets/img/news/easyAI-v1.2.7-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/easyAI-v1.2.7-0.png)

## Foreword

The significance of EasyAi for Java is equivalent to the role of Spring in the JavaWeb field—to provide an out-of-the-box solution that enables every developer to use EasyAi to develop small-scale models that meet their artificial intelligence business needs. This is its mission!

## Introduction to EasyAi

EasyAi has no dependencies. It is a native Java artificial intelligence algorithm framework. Firstly, **it can be seamlessly integrated into our Java projects with Maven in one step, without any additional environment configuration or dependencies, achieving out-of-the-box usability.** Secondly, it includes pre-packaged modules for image target detection and AI customer service, as well as underlying algorithm tools for deep learning, machine learning, reinforcement learning, heuristic learning, matrix operations, and more. Developers can, with minimal learning, develop small-scale models that deeply align with their business needs.

*   EasyAI Gitee download link: https://gitee.com/dromara/easyAi
*   EasyAI technical documentation: https://www.myeasyai.cn/
*   EasyAI detailed video tutorials: https://www.bilibili.com/video/av89134035
*   EasyAI framework zero-based deep development and complete AI system tutorials: https://www.bilibili.com/cheese/play/ss17600

# v1.2.7 Update Content

## v1.2.7 Now supports multi-core parallel computing to accelerate training when the feature dimension is large enough!

### Object Detection Configuration Class Adds Multi-core Acceleration Parameter

> `private int coreNumber` sets the number of threads for multi-threaded parallel computing acceleration. The theoretical maximum value for this number is your current device's core count * 2. If this value is set to less than or equal to 1, it will still use single-process computation.
>
> > **Note: It is only worth enabling parallel computation for acceleration when at least one of the moving detection window width `private int windowWidth` or height `private int windowHeight` exceeds 300. If the values are smaller than this, parallel computation efficiency may be lower than single-process computation!**

### TF Configuration Class Adds Multi-core Acceleration Parameter

> `private int coreNumber` sets the number of threads for multi-threaded parallel computing acceleration. The theoretical maximum value for this number is your current device's core count * 2. If this value is set to less than or equal to 1, it will still use single-process computation.
>
> > **Note: It is only worth enabling parallel computation for acceleration when the feature dimension `private int featureDimension` exceeds 280. If the value is smaller than this, parallel computation efficiency may be lower than single-process computation!**

### easyAI Package Has Been Uploaded to Maven Central Repository

> You can now simply add the following JAR package dependency in your pom file; manual downloading and packaging are no longer required.

```xml
<dependency>
    <groupId>cn.myeasyai.easyai</groupId>
    <artifactId>easyAi</artifactId>
    <version>1.2.7</version>
</dependency>
```

## Face Detection Effect Demonstration

![](/assets/img/news/easyAI-v1.2.7-1.png)

### Image Recognition FastYolo Effect Demonstration

*   Using EasyAi to implement the visual kernel for an image-based automated vending machine settlement system

![](/assets/img/news/easyAI-v1.2.7-2.jpg)

### sayOrder AI Customer Service

*   sayOrder is an AI customer service system built on EasyAi.
*   It can analyze the semantics of user input to identify user behavior and distinguish user intent through typeID. It captures keyword categories set in the backend to extract system-relevant content from user statements, such as time, location, etc.
*   It can also autonomously interact with users through Q&A, answering questions or engaging in conversations based on other intents.
*   Project link: https://gitee.com/dromara/sayOrder

### sayOrder Interaction Basic Workflow Demonstration

*   User inputs their idea for the first time:
    ![](/assets/img/news/easyAI-v1.2.7-3.png)
*   SayOrder detects missing essential order information and asks a follow-up question. The user responds by providing additional information:
    ![](/assets/img/news/easyAI-v1.2.7-4.png)
*   The user's second input still does not meet the key information requirements for the backend's 14-category legal consultation order. After further supplementation, the order information is completed and the order is generated:
    ![](/assets/img/news/easyAI-v1.2.7-5.png)
*   The user inputs a question they want to consult, and SayOrder autonomously answers the user's query:
    ![](/assets/img/news/easyAI-v1.2.7-6.png)

### Architecture Design

**Common Underlying Algorithm Modules**

*   Basic Matrix and Linear Algebra Calculation Module:
    1.  Built-in matrix classes and matrix calculation classes capable of performing common matrix operations, parity checks, multiple linear regression, logistic regression, Euclidean distance, cosine similarity, im2col, inverse im2col, algebraic cofactor calculation, inversion, adjoint matrix calculation, inner product, differentiation, and a series of other APIs.
    2.  RGB three-channel matrices capable of image conversion, cropping, blocking, generating image matrices, and other operations to facilitate subsequent calculations.
*   Machine Learning - Clustering:
    k-means clustering, Gaussian mixture clustering, density clustering, learning vector quantization clustering, etc.
*   Machine Learning - Classification and Fitting:
    Multi-layer feedforward neural networks, multi-layer recurrent neural networks, residual networks, multi-layer residual recurrent neural networks, convolutional neural networks, decision trees, random forests, k-nearest neighbors, etc.
*   Heuristic Algorithms:
    Particle swarm optimization, ant colony optimization, simulated annealing.
*   Reinforcement Learning:
    Dynamic programming, Monte Carlo analysis, Markov decision processes, temporal difference learning.

**Common Upper-Level Algorithm Modules**

*   Visual Imaging:
    Image recognition, image summarization, target detection.
*   Natural Language Processing:
    Semantic understanding, word segmentation, sensitive and keyword inference, sentence completion, language interaction.
*   Game Bots:
    Autonomous strategy, autonomous action.

### Usage

1.  Download the project and package it into the local Maven repository.
2.  Import the easyAi pom file dependency into the project.

### Follow the Project

*   For ideas, suggestions, or learning related to the project, you can add my work WeChat:
    ![](/assets/img/news/easyAI-v1.2.7-7.jpg)

---

About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a range of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, and scheduling orchestration. The technology stack is fully open-source and collaboratively built, maintaining community neutrality, and is dedicated to providing microservices cloud-native solutions for global users. It aims to allow every participating open-source enthusiast to experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of members, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to Interact with Me**

![](/assets/img/news/easyAI-v1.2.7-8.webp)