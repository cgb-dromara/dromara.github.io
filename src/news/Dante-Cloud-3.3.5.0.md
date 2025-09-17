---
title: "Dante Cloud 3.3.5.0 Released: China's First Microservices Platform Supporting Both Blocking and Reactive Fusion"
author: Dante Cloud
date: 2024-10-31
cover: /assets/img/news/Dante-Cloud-3.3.5.0-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/Dante-Cloud-3.3.5.0-0.png)

**Dante Cloud** is China's first microservices platform that supports the fusion of both blocking and reactive programming models. With a core focus on "**high-quality code and low security vulnerabilities**", it adopts Domain-Driven Design (DDD) principles, is fully based on the Spring ecosystem's open-source technologies and the OAuth2.1 protocol, supports authentication for smart TVs, IoT devices, and other IoT equipment, meets **China's Level 3 Cybersecurity Protection requirements**, supports **national cryptographic digital envelope encryption and decryption** for interfaces, and provides a **multi-tenant microservices solution** with a comprehensive security system including anti-brute force, high-level XSS, and SQL injection protection.

## [I] Release Background

**Dante Cloud** has always adhered to the philosophy of "Simplicity, Efficiency, Inclusiveness, and Pragmatism". It is built using various emerging or mainstream technologies in the microservices domain and its surrounding areas, continuously refined and meticulously crafted. The goal is to create a product with `high code quality, low maintenance effort, and strong security protection` that can help users quickly bypass the stages of architectural technology selection and technical research exploration. It aims to reduce the high maintenance costs caused by potential hidden dangers such as security vulnerabilities, technical debt, and low-quality code in traditional projects. Like the meaning of its name, it hopes to bridge the gap during industry transformation and assist enterprises in their informatization construction and transformation.

## [II] Update Content

*   **Major Updates**

*   [Upgrade] Spring Boot version upgraded to 3.3.5

*   [Upgrade] Spring Authorization Server version upgraded to 1.3.3

*   [Upgrade] Spring Boot Admin version upgraded to 3.3.4

*   [Upgrade] Debezium version upgraded to 3.0

*   [Upgrade] Camunda version upgraded to 7.22.0

*   [Upgrade] Nacos version upgraded to 2.4.3

*   [Refactor] Open-source version project code package name changed from `cn.herodotus` to `org.dromara` to align with the community project.

*   [Refactor] The monolithic version system has been merged into the microservices version project. The monolithic version or microservices version can now be started from the same project. This resolves the previous mode where the microservices version needed to be compiled separately and the monolithic version started in another project, improving development and usability convenience.

*   [New] Added inter-service file upload and download transmission mechanism, supporting both OpenFeign and Grpc modes, switchable via hot-plug mode.

*   [New] Added OSS file operation GRPC definition module

*   [New] Added local common file management mechanism for services

*   [New] Added cross-module, cross-service authentication enable/disable control unit

*   [New] Added client dynamic registration business information synchronous creation function

*   [New] Mqtt user account management function

*   [New] Added NoSQL related component auto-configuration Starters.

*   [New] Added support for both columnar and row-based storage of device reported data in Influxdb.

*   **Other Updates**

*   [Fix] Rebuilt Nacos Server image supporting Postgresql. Fixed the issue of failed namespace creation.

*   [Fix] Fixed the issue where data encryption policy configuration did not take effect.

*   [Fix] Fixed Kafka Docker Compose configuration error causing Kafka image startup to throw errors.

*   [Fix] Fixed frontend Vite CSS style configuration incompatibility causing page startup errors.

*   [Fix] Fixed abnormal dictionary aggregation data summary issue caused by incorrect use of distributed events in microservices environment.

*   [Fix] Fixed issue where pre-signed URLs created using AWS SDK V2 still used AWS default service endpoints and did not locate to custom hosts.

*   [Fix] Fixed error in log identification Class introduced in auto-configuration classes.

*   [Fix] Fixed grpc compilation error: `error: emptyList() is not public in LazyStringArrayList; cannot be accessed from outside package com.google.protobuf.LazyStringArrayList.emptyList()`. fix: #IAWQ4C

*   [Fix] Fixed Docker Compose image address configuration error. fix: #IAXUFB

*   [Fix] Fixed inconsistency between Influxdb2 default configuration and the default configuration provided by the system's Docker Compose, which caused some Influxdb test codes to pass partially.

*   [Fix] Fixed frontend `Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0` warning error.

*   [Refactor] Refactored AWS SDK V2 high-level OSS operation code, added high-level operation unit tests.

*   [Refactor] Changed basic file operations within services to use NIO operations.

*   [Refactor] Mybatis Plus changed to Bom import, simultaneously adapting to the latest version of Mybatis Plus.

*   [Refactor] Refactored part of the OAuth2 core code to enhance module cohesion and reduce code coupling.

*   [Refactor] Refactored the logic for dynamically enabling and disabling authentication for IoT devices, simplifying and removing the original multi-event jump approach.

*   [Refactor] Refactored service local file management definitions and certificate generation logic code.

*   [Optimize] Optimized OSS model basic operation class naming for easier identification of code purpose.

*   [Optimize] Optimized OSS module code, pooled S3Presigner object management to improve efficiency.

*   [Optimize] Optimized OSS module code, extracted independent pre-signing operation Service.

*   [Optimize] Improved the interface implementation logic for product and device management by referencing Alibaba Cloud IoT usage.

*   [Optimize] Optimized OIDC client dynamic registration logic for better compatibility with IoT device management requirements.

*   [Optimize] Removed duplicate ApplicationEvent message channel definitions,改用 unified message channel definition.

*   [Optimize] Optimized Emqx client status detection strategy configuration method.

*   [Optimize] Merged some system configuration parameter class definitions to enhance the rationality of configuration parameter division and categorization.

*   [Optimize] Deleted unused duplicate constant definitions.

*   [Optimize] Extracted common Spring ParameterizedTypeReference definition.

*   [Optimize] Optimized custom functional interface ListConverter code logic, removed IDE null value warnings.

*   [Upgrade] Liberica JDK base image versions upgraded to 17.0.13-12 and 21.0.5-11 respectively.

*   [Upgrade] minio docker image version upgraded to RELEASE.2024-10-13T13-34-11Z

*   [Upgrade] loki docker image version upgraded to 3.2.0

*   [Upgrade] promtail docker image version upgraded to 3.2.0

*   [Upgrade] grafana docker image version upgraded to 11.2.2

*   [Upgrade] zipkin docker image version upgraded to 3.4.2

*   [Upgrade] emqx image version upgraded to 5.8.0

*   **Dependency Updates**

*   [Upgrade] aws-java-sdk-s3 version upgraded to 1.12.777

*   [Upgrade] software.amazon.awssdk version upgraded to 2.28.29

*   [Upgrade] software.amazon.awssdk.crt version upgraded to 0.31.3

*   [Upgrade] alipay-sdk-java version upgraded to 4.39.234.ALL

*   [Upgrade] mysql version upgraded to 9.1.0

*   [Upgrade] mybatis plus version upgraded to 3.5.9

*   [Upgrade] sqlite-jdbc version upgraded to 3.47.0.0

*   [Upgrade] quasar webjars version upgraded to 2.17.1

*   [Upgrade] sweetalert2 webjars version upgraded to 11.14.4

*   [Upgrade] grpc version upgraded to 1.68.0

*   [Upgrade] protobuf version upgraded to 3.25.5

*   [Upgrade] redisson version upgraded to 3.37.0

*   [Upgrade] hutool version upgraded to 6.0.0-M17

*   [Upgrade] checker-qual version upgraded to 3.48.1

*   [Upgrade] nacos-client version upgraded to 2.4.3

*   [Upgrade] opengauss-jdbc version upgraded to 6.0.0-og

*   [Upgrade] vue webjars version upgraded to 3.5.12


## [III] Design Q&A

### 1\. Why Not "Pure" Reactive?

Reactive programming certainly has its advantages, but using it also forces one to face some practical issues:

*   To achieve "pure" reactive, first, there must be ecosystem support. Currently, the acceptance of reactive programming is not very high, and many components still do not support it. Unless one has the energy to rewrite all the unsupported components used, it is difficult to achieve purity, especially for microservices systems.

*   The vast majority of applications need to use databases. Existing ORM components in the Java field either do not support reactive (e.g., JPA), do not support it particularly well (e.g., Hibernate reactive), or require too much manual coding (e.g., R2DBC). Therefore, from an input-output ratio perspective, doing reactive at the data layer is not "cost-effective" at the moment.


Therefore, it still depends on the type of application system. There is no need to pursue "pure" `reactive` when conditions are not met.

### 2\. What Benefits Can Reactive Bring?

There are numerous articles online comparing the benefits of `reactive` over `blocking`, so specifics won't be repeated here. The more obvious advantages in practical applications are:

*   `Reactive` utilizes resources more efficiently. Its advantages are more prominent for functions with high resource consumption.

*   Microservices systems often need to integrate more content, especially at the data layer, where multiple types of data storage might be used simultaneously, along with data flow and migration. The "stream" thinking of event-driven and reactive programming fits better with this than traditional blocking methods.

*   Reactive programming can better cooperate with event-driven architecture. The Spring ecosystem uses event-driven extensively in many aspects, and the core design philosophy of reactive is also殊途同归 (converges with) event-driven.


> Precisely because Dante Cloud uses a lot of Spring Integration content, the traditional blocking method became increasingly awkward to use, making it more and more necessary to support reactive. If you have time, take a good look at Spring Integration; it might open up a new world for you.

### 3\. What Are the Difficulties in Learning Reactive Programming?

*   If learning reactive programming based on Reactor, the difficulty and breakthrough point lie in the `Flux` and `Mono` classes. Thoroughly understanding and mastering the methods of these two classes can basically eliminate all development obstacles.

*   The biggest difficulty in reactive programming is the shift in programming mindset. Being accustomed to blocking programming makes it hard to adapt to the `stream`-based development thinking of `reactive` initially.


> Where there is a will, there is a way.

## [IV] System Documentation

To better help everyone understand and learn Dante Cloud, a new documentation site has been added: https://www.herodotus.vip. This site currently includes corrected and reorganized system deployment-related content. Plans are underway to gradually supplement it with articles on detailed knowledge points, module-specific design implementations, and conceptual understanding related to the system. The original site will be retained unless there are special reasons not to.

---

**Welcome to Star us to show your support!**

**Gitee**: https://gitee.com/dromara/dante-cloud  
**Github**: https://github.com/dromara/dante-cloud

About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a range of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling orchestration, etc. The technology stack is fully open-source and co-built, maintaining community neutrality, and is committed to providing microservices cloud-native solutions for global users. It aims to let every participating open-source enthusiast experience the joy of open source.

The Dromara open-source community currently boasts 10+ GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of people, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/news/Dante-Cloud-3.3.5.0-1.webp)