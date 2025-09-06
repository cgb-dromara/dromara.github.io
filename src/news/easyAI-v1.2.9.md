---
title: Native Java Artificial Intelligence Algorithm Framework easyAI-v1.2.9 Version Update
author: EasyAi
date: 2024-11-25
cover: /assets/img/news/easyAI-v1.2.9-0.webp
head:
  - - meta
    - name: News
---

![](/assets/img/news/easyAI-v1.2.9-0.webp)

## Foreword

The significance of EasyAi for Java is equivalent to the significance of the emergence of Spring in the JavaWeb field—to be an out-of-the-box solution that enables every developer to use EasyAi to develop small and micro models that meet their own artificial intelligence business needs. This is its mission!

## Introduction to EasyAi

EasyAi has no dependencies. It is a native Java artificial intelligence algorithm framework. Firstly, **it can be smoothly introduced into our Java project with Maven in one step, without any additional environment configuration or dependencies, achieving out-of-the-box usability.** Furthermore, it includes pre-packaged modules for image target detection and AI customer service, as well as provides various underlying algorithm tools for deep learning, machine learning, reinforcement learning, heuristic learning, matrix operations, etc. Developers can, through simple learning, develop small and micro models that deeply align with their own business needs.

*   EasyAI Gitee download link: https://gitee.com/dromara/easyAi
*   EasyAI technical documentation address: https://www.myeasyai.cn/
*   EasyAI detailed video tutorials: https://www.bilibili.com/video/av89134035
*   EasyAI framework zero-based deep development and complete artificial intelligence system tutorial: https://www.bilibili.com/cheese/play/ss17600

# v1.2.9

## Facial Recognition

*   Created a new facial recognition algorithm kernel project seeFace based on EasyAi.
*   Kernel algorithm link: https://gitee.com/ldp_dpsmax/see-face
*   Video tutorial address: https://www.bilibili.com/video/BV1A8UeYwEsX

### Quick API

> `public ErrorMessage look(ThreeChannelMatrix face, long eventID, int secondExplore)` Gets the feature vector of the image.
>
> > Parameter `ThreeChannelMatrix face` is the three-channel matrix of the parsed image.
>
> > Parameter `long eventID` is the thread-safe unique ID.
>
> > Parameter `int secondExplore` is the iteration intensity. It is recommended to use 30 for recognition and increase to 60 for入库 (storing in database). The higher this value, the more stable the face capture, but the slower the speed. Therefore, increase this value when storing faces to obtain vectors for maximum stability. Reduce it to 30 when recognizing features to achieve speed while maintaining a certain level of stability.
>
> Return entity `ErrorMessage`.
>
> > `private int errorCode = 0` is the error code. When the error code is 0, the result is obtained normally.
>
> > `private String errorMessage` is the error reason.
>
> > `FaceMessage faceMessage` is the face information result. When the error code is not 0, this return entity is `null`.
> >
> > > Parameter `private Matrix feature` is the feature matrix, with a built-in two-dimensional array storing feature values. The `getMatrix()` method can be used to extract the two-dimensional array for saving feature values into a database, facilitating comparison using a vector database.
>
> > > Parameter `private ThreeChannelMatrix channel` is the image three-channel matrix locating the facial features. The `ImageTools` method `imageTools.writeImage(faceMessage.getChannel(), "/Users/lidapeng/job/faceData/test/b1.jpg");` can be used to output the face image and observe the face positioning result. If the captured position is abnormal, it indicates that this recognition result is not ideal, and re-shooting can be done to obtain it again.

### easyAI package has been uploaded to the Maven Central Repository

> From now on, simply introduce the following JAR package address in the pom file. No need to download and manually package.

```
    <dependency>
    <groupId>org.dromara.easyai</groupId>
    <artifactId>easyAi</artifactId>
    <version>1.2.9</version>
    </dependency>
```

## Facial Detection Effect Demonstration

![](/assets/img/news/easyAI-v1.2.9-1.png)

### Image Recognition FastYolo Effect Display

*   Using EasyAi to implement the visual kernel of an image-based self-service vending machine.

![](/assets/img/news/easyAI-v1.2.9-2.jpg)

### sayOrder Artificial Intelligence Customer Service

*   sayOrder is an artificial intelligence customer service system packaged based on EasyAi.
*   It can analyze the semantics of user input to identify user behavior and distinguish user intent IDs through typeID. It captures keyword categories set in the background to extract content of interest to the system contained in the user's statement, such as time, place, etc.
*   It can also autonomously interact with users through Q&A, autonomously answering questions or engaging in communication about other intents.
*   Project link address: https://gitee.com/dromara/sayOrder

### sayOrder Interaction Basic Business Process Demonstration

*   The user first inputs to express their idea. ![](/assets/img/news/easyAI-v1.2.9-3.png)
*   SayOrder finds that the user's description lacks necessary order information and asks a follow-up question. The user receives SayOrder's question and further supplements their idea. ![](/assets/img/news/easyAI-v1.2.9-4.png)
*   The user's second input still does not meet the key information requirements for the background 14-category legal consultation order. They continue to add information until the order information is complete and the order is generated. ![](/assets/img/news/easyAI-v1.2.9-5.png)
*   The user inputs a question they want to consult, and SayOrder autonomously answers the user's consulting question. ![](/assets/img/news/easyAI-v1.2.9-6.png)

### Architecture Design

**Common Underlying Algorithm Modules**

*   Basic Matrix and Linear Algebra Calculation Module:
    1.  Built-in matrix class, matrix calculation class, can complete common matrix arithmetic, parity, multiple linear regression, logistic regression, Euclidean distance, cosine similarity, im2col, inverse im2col, finding algebraic cofactors, finding inverse, finding adjoint matrix, inner product, differentiation, and a series of APIs.
    2.  RGB three-channel matrix, which can perform image conversion, cropping, blocking, generating image matrices, and other operations to facilitate subsequent calculations.
*   Machine Learning - Clustering:
    k-means clustering, Gaussian mixture clustering, density clustering, learning vector quantization clustering, etc.
*   Machine Learning - Classification and Fitting: Multi-layer feedforward neural network, multi-layer recurrent neural network, residual network, multi-layer residual recurrent neural network, convolutional neural network, decision tree, random forest, k-nearest neighbor, etc.
*   Heuristic Algorithms: Particle swarm, ant colony, simulated annealing.
*   Reinforcement Learning: Dynamic programming, Monte Carlo analysis, Markov, temporal difference.

**Common Upper-layer Algorithm Modules**

*   Visual Image: Image recognition, image summarization, target detection.
*   Natural Language: Semantic understanding, word segmentation, reasoning about sensitivity and keywords, sentence completion, language interaction.
*   Game Bots: Autonomous strategy, autonomous action.

### Usage

1.  Download the project and package it into the local Maven repository.
2.  Introduce the easyAi pom file address into the project.

### Follow the Project

*   For any ideas, suggestions, or learning related to the project, you can add my work WeChat. ![](/assets/img/news/easyAI-v1.2.9-7.jpg)

About Dromara

Dromara is an open-source community composed of top domestic open-source project authors. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, scheduling orchestration, etc. The technology stack is fully open-source and co-built, maintaining community neutrality, and is committed to providing microservice cloud-native solutions for global users. Let every open-source enthusiast involved experience the happiness of open source.

The Dromara open-source community currently has 10+ GVP projects, with a total star count of over 100,000, building an open-source community of tens of thousands of people, with thousands of individuals and teams using the open-source projects of the Dromara community.

**Everyone is welcome to come to the Knowledge Planet to interact with me.**

![](/assets/img/news/easyAI-v1.2.9-8.webp)