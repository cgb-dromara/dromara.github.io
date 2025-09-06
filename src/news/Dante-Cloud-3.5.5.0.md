---
title: 'Dante Cloud 3.5.5.0 Released: "Is Your Project a Monolith or Microservices?" "We Are Both."'
author: Dante Cloud
date: 2025-08-25
cover: /assets/img/news/Dante-Cloud-3.5.5.0-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/Dante-Cloud-3.5.5.0-0.png)

## [I] Project Introduction

**Dante Cloud** is the first microservices platform in China that supports both blocking and reactive services in parallel. Designed with **Domain-Driven Design (DDD)** principles at its core, it focuses on **"high-quality code, low security vulnerabilities"**. Built on the full spectrum of open-source technologies within the Spring ecosystem, it features a highly **modular and componentized design**. It supports authentication for **smart TVs, IoT, and other connected devices**, meets **National Level 3 Protection Requirements**, and includes a series of security systems such as **interface national cryptographic digital envelope encryption and decryption**. It is a multi-tenant microservices solution. It uniquely enables enterprises to **"switch flexibly between microservices and monolithic architectures with one codebase"**.

## [II] Project Philosophy

**Dante Cloud** has always adhered to the principles of "Simplicity, Efficiency, Inclusiveness, and Pragmatism." It utilizes various emerging or mainstream technologies in and around the microservices domain for development, continuously refining, eliminating the crude to extract the essential, and meticulously crafted. The goal is to build a product with `high code quality, low maintenance investment, and strong security protection`. It aims to help users quickly bypass the stages of architectural technology selection and technical research exploration, reducing the high maintenance costs caused by potential hidden dangers such as security vulnerabilities, technical debt, and low-quality code in traditional projects. It is hoped that, like the meaning of its name, it will serve as a bridge during this period of industry transformation, supporting enterprise IT infrastructure development and change.

The core focus of **Dante Cloud** is: **「High-quality system code」**, **「Reasonable system architecture」**, **「Low-coupled module division」**, **「High-security system implementation」**, **「Flexible functional expansion capabilities」**, and **「Excellent microservices implementation」**. Unlike some other systems that pursue the **richness** of **business functions**, piling on a large number of functions that cannot be truly universal would become a burden and interference. It is better for users to design and implement flexibly according to their needs.

## [III] Architectural Design

Besides providing a complete microservices architecture, Dante Cloud also supports running as a monolithic architecture. The microservices architecture and the monolithic architecture are not two separate codebases, nor are they two separate projects. They are completely integrated into one set of code, allowing you to choose to run in microservices mode or monolithic mode as needed. This is one of the biggest features of Dante Cloud microservices: **"One Codebase, Two Architectures"**.

> The microservices architecture based on `Spring Boot` and `Spring Cloud` has become the mainstream solution for enterprise application construction. However, it is undeniable that the infrastructure required to set up a microservices architecture is becoming increasingly numerous and complex. Just setting up a development and debugging environment on a development computer involves considerable complexity and resource requirements. For many applications, especially small ones in their early stages or with low user traffic in the beginning, a monolithic, front-end and back-end separated backend is often sufficient. There is no need to implement a full set of microservices, which adds unnecessary complexity.

The **"One Codebase, Two Architectures"** feature of Dante Cloud can help enterprises quickly build projects with a monolithic architecture in the early stages, facilitate local development for developers, and enable research on new technologies. In the later stages of the project, as user scale grows and concurrency requirements increase, it can seamlessly and quickly migrate to a microservices architecture.

## [IV] Implementation Components

This project does not use any complex, difficult-to-understand, or hard-to-master technologies. Among the core key components involved, **nearly 80% are native components of the Spring ecosystem**. The technical implementations are all combinations and applications of the standard usage methods of each component. The coding style and code design have always strived to remain consistent with the standard specifications and usage of the Spring ecosystem, although a certain level of encapsulation and abstraction has gradually formed after numerous version iterations and refactorings.

Learning and using this project requires a high level of **knowledge of Java and the Spring ecosystem fundamentals**, as well as an **understanding of microservices concepts**. Therefore, if you find this project has a steep learning curve and is difficult to master, unlike other similar open-source projects that seem "**simple**", it is likely that you have not **truly** understood or mastered the relevant components of the Spring ecosystem.

*   **Hearing about it is not the same as knowing it.**
*   **Knowing it is not the same as understanding it.**
*   **Understanding it is not the same as being able to use it.**
*   **Being able to use it is not the same as mastering it.**

From another perspective, this project can also be an excellent case study for deeply learning and mastering the various components of the Spring ecosystem. **It is recommended to read the book "The Way of IT Architecture Transformation: Alibaba's Middle Platform Strategy Thought and Architecture Practice" (you can read the first few chapters first) before getting started with this project, especially for those only proficient in monolithic applications—you must read it!**

> This project provides "Suggestions on Learning Methods and Paths for Dante Cloud and Related Knowledge". Interested friends are welcome to read it [Read Online].

The core components used by Dante Cloud are as follows:

| No.  | Spring Ecosystem Components | Domestic Open-Source Components |
| :--- | :-------------------------- | :------------------------------ |
| 1    | Spring Boot                 | Spring Cloud Alibaba            |
| 2    | Spring Security             | Spring Cloud Tencent            |
| 3    | Spring Security OAuth2      | JetCache                        |
| 4    | Spring Authorization Server | Mybatis Plus                    |
| 5    | Spring Data JPA             | JustAuth                        |
| 6    | Spring Data MongoDB         | WxJava                          |
| 7    | Spring Data Redis           | Hutool                          |
| 8    | Spring Data Envers          | sms-spring-boot-starter         |
| 9    | Spring Cloud                | grpc-spring-boot-starter        |
| 10   | Spring Cloud Bus            | --                              |
| 11   | Spring Cloud Stream         | --                              |
| 12   | Spring Cloud Gateway        | --                              |
| 13   | Spring Cloud Loadbalancer   | --                              |
| 14   | Spring Cloud OpenFeign      | --                              |
| 15   | Spring Cloud Zookeeper      | --                              |
| 16   | Spring Session              | --                              |
| 17   | Spring Integration          | --                              |
| 18   | Spring Kafka                | --                              |
| 19   | Spring WebSocket            | --                              |
| 20   | Spring RSocket              | --                              |
| 21   | Spring Webflux              | --                              |
| 22   | Micrometer                  | --                              |
| 23   | SpringDoc                   | --                              |
| 24   | Spring Boot Admin           | --                              |

## [V] Communication and Feedback

To facilitate communication among users of Dante Cloud Open Source and Enterprise editions, enable a deeper understanding and mastery of the technologies used in Dante Cloud, and quickly solve practical application problems, starting from August 18, 2025, Dante Cloud has reopened its **Technical Exchange Group**. All friends who `sincerely` wish to exchange technology are welcome to join.

**How to join the group**: Please see 【Technical Exchange Group】 for details.

## [VI] This Update

*   **Main Updates**
    *   [Upgrade] Spring Boot version upgraded to 3.5.5
    *   [Upgrade] Spring Boot Admin version upgraded to 3.5.2
    *   [Upgrade] Spring Authorization Server version upgraded to 1.5.2
    *   [Upgrade] Nacos version upgraded to 3.0.3. The self-packaged Nacos Docker image supporting PostgreSQL has been uploaded to Docker Hub and Quay.IO
    *   [Optimization] The system now supports Redis version 8.2.1.

*   **Other Updates**
    *   [New] Frontend project adds theme switching effects.
    *   [Fix] Fixed an issue where the custom extended Client Credentials mode Provider was incompatible with the latest SAS configuration method, causing instability in using the Client Credentials mode.
    *   [Fix] Fixed an issue in IoT device client dynamic registration where circular initiation of authentication caused the generated Registered Client information to be overwritten.
    *   [Fix] Fixed an issue where Spring Session would throw `java.lang.IllegalStateException: LettuceConnectionFactory has been STOPPED. Use start() to initialize it` during system logout. fix：#ICTVGU
    *   [Fix] Fixed incorrect return information from the front-end device code verification polling API.
    *   [Fix] Fixed an issue where multiple entries with the same clientId appeared in the `oauth2_authorization_resource` table during client dynamic registration, causing query errors.
    *   [Fix] Fixed an incorrect default redirect URL after successful device code authorization verification.
    *   [Fix] Fixed an issue in the front-end framework kernel module where incorrect import information caused the module package to be excessively large.
    *   [Fix] Fixed an issue where upgrading @vue/tsconfig to 0.8.0, which enables `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` configurations by default, caused error prompts during packaging and compilation.
    *   [Refactor] Refactored type definitions in the front-end Axios component abstraction for more accurate type validation and reduced unnecessary type conversions.
    *   [Optimization] Updated the IP address library database to 2025-08-13.
    *   [Optimization] Optimized default parameters for front-end client dynamic registration to avoid generating unnecessary authorization modes during registration.
    *   [Optimization] Removed the Baidu OCR OpenAPI encapsulation module.
    *   [Optimization] Removed dependency on the Velocity component and related configurations.
    *   [Optimization] Optimized Maven configuration, removing the unified version control for fastjson introduced earlier to control dependency vulnerabilities.
    *   [Optimization] Optimized Gitee ISSUE Template.
    *   [Optimization] Removed useless configurations from the packaging configuration of the front-end Bpmn designer module.
    *   [Optimization] Optimized front-end vite.config.mts and tsconfig.json configurations, adopting more reasonable definition configurations and removing useless or outdated content.
    *   [Optimization] Optimized front-end application Vite configuration, adjusted the location of auto-generated configuration files, and optimized auto-import configuration.
    *   [Optimization] Optimized the export configuration in the front-end module's package.json, simplifying the long paths for importing module styles.
    *   [Upgrade] Tempo docker image version upgraded to 2.8.2.
    *   [Upgrade] Cassandra docker image version upgraded to 5.0.5.
    *   [Upgrade] Clickhouse docker image version upgraded to 25.7.4.
    *   [Upgrade] Kestra docker image version upgraded to v0.24.2.

*   **Dependency Updates**
    *   [Upgrade] alipay-sdk-java version upgraded to 4.40.411.ALL
    *   [Upgrade] grpc version upgraded to 1.75.0
    *   [Upgrade] skywalking agent version upgraded to 9.5.0
    *   [Upgrade] software.amazon.awssdk version upgraded to 2.32.27
    *   [Upgrade] software.amazon.awssdk.crt version upgraded to 0.38.9
    *   [Upgrade] springdoc version upgraded to 2.8.10
    *   [Upgrade] sweetalert2 webjars version upgraded to 11.22.4
    *   [Upgrade] wxjava version upgraded to 4.7.7-20250808.182223

---

**If this project is helpful to you, welcome to Star us to show your support!**

**Gitee**: https://gitee.com/dromara/dante-cloud

**Github**: https://github.com/dromara/dante-cloud

**Gitcode**: https://gitcode.com/dromara/dante-cloud