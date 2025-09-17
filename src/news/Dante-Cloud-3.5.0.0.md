---
title: Major Upgrade! Dante Cloud Fully Embraces Spring Boot 3.5 & Spring Cloud 2025
author: Dante Cloud
date: 2025-06-03
cover: /assets/img/news/Dante-Cloud-3.5.0.0-0.png
head:
  - - meta
    - name: News
---

## \[1] Project Introduction

**Dante Cloud** is the first microservices platform in China that supports both blocking and reactive services in parallel. Designed with **Domain-Driven Design (DDD)** principles, it focuses on **"high-quality code, low security vulnerabilities"**. Based on the full spectrum of open-source technologies in the Spring ecosystem, it features highly **modular and componentized design**, supports authentication for **smart TVs, IoT, and other connected devices**, meets **China's Level 3 Cybersecurity Classification Protection** requirements, and includes a series of security systems such as **interface national cryptographic digital envelope encryption and decryption**. It is a multi-tenant microservices solution that can **"implement both microservices and monolithic architectures with one codebase"** for enterprise application systems.

![](/assets/img/news/Dante-Cloud-3.5.0.0-0.png)

  

## \[2] Project Philosophy

**Dante Cloud** has always adhered to the philosophy of "Simplicity, Efficiency, Inclusiveness, and Pragmatism." It utilizes various emerging or mainstream technologies in the microservices domain and its periphery for construction, continuously refining, discarding the rough and selecting the fine, and meticulously crafting. The goal is to build a product with `high code quality, low maintenance investment, and strong security protection` that can help users quickly bypass the stages of architectural technology selection and technical research exploration. It aims to reduce the high maintenance costs caused by potential hidden dangers such as security vulnerabilities, technical debt, and low-quality code in traditional projects. Like the meaning of its name, it hopes to bridge the past and the future during this period of industry transformation, assisting enterprises in their informatization construction and transformation.

The core focus of **Dante Cloud** is: **「High-quality system code」**, **「Reasonable system architecture」**, **「Low-coupled module division」**, **「High-security system implementation」**, **「Flexible functional expansion capabilities」**, and **「Excellent microservices implementation」**, rather than pursuing the **richness** of stacked **business functions**.

## \[3] Architectural Design

Besides providing a complete microservices architecture, Dante Cloud also supports running as a monolithic architecture. The microservices architecture and the monolithic architecture are not two separate codebases, nor are they two separate projects. They are a fully integrated single codebase. Users can choose to run in microservices mode or monolithic mode as needed. This is one of the biggest features of Dante Cloud microservices: **"One Codebase, Two Architectures"**.

> The microservices architecture based on `Spring Boot` and `Spring Cloud` has become the mainstream solution for enterprise application construction. However, it is undeniable that the infrastructure required to set up a microservices architecture is becoming increasingly numerous and complex. Just setting up a development and debugging environment on a development computer involves considerable complexity and resource requirements. For many applications, especially small ones in their early stages or with a small user base in the beginning, a single, front-end and back-end separated backend is often sufficient. There is no need to deploy a full set of microservices, which adds extra complexity.

Dante Cloud's feature of **"One Codebase, Two Architectures"** can help enterprises quickly build projects with a monolithic architecture in the early stages, facilitate local development for developers, and enable research on new technologies. As user scale grows and concurrency requirements increase in the later stages of the project, it can quickly and seamlessly migrate to a microservices architecture.

## \[4] Feature Introduction

The Dante Cloud demo system has been released. It currently includes an online version, a monolithic offline version (Docker), and a microservices image version. Welcome to experience and use it!

Experience address: https://www.herodotus.vip/get-started/preview/online.html

For any comments and suggestions, you can 【File an ISSUE】 to leave a message.

## \[5] Summary of New Spring Ecosystem Features

| Feature Area           | Spring Boot 3.5                                | Spring Cloud 2025.0.0                                       |
| :--------------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| Java Support           | Java 17+ (possibly optimized for Java 21)      | Depends on Spring Boot 3.5                                  |
| Web/HTTP               | HTTP/3 (experimental), WebSocket optimizations | API Gateway (Gateway) optimizations                         |
| Security               | Spring Security 6.x enhancements               | Configuration encryption/decryption optimizations           |
| Data Access            | Hibernate 6.x, JDBC optimizations              | Config management optimizations                             |
| Monitoring             | Micrometer 1.11.x, Actuator enhancements       | Sleuth/OpenTelemetry optimizations                          |
| Cloud Native           | Kubernetes/Docker optimizations                | Service discovery, circuit breaking, streaming enhancements |
| Development Experience | Build tool optimizations, Kotlin support       | Dynamic configuration, intelligent routing                  |

## \[6] Update Content

*   **Major Updates**
    *   \[Upgrade] Spring Boot version upgraded to 3.5.0
    *   \[Upgrade] Spring Authorization Server version upgraded to 1.5.0
    *   \[Upgrade] Spring Cloud version upgraded to 2025.0.0
    *   \[Upgrade] Spring Cloud Tencent version upgraded to 2.0.1.0-2023.0.3
    *   \[Upgrade] Spring Boot Admin version upgraded to 3.5.0
    *   \[Upgrade] Nacos version upgraded to 3.0.1. A self-packaged Nacos Docker image supporting PostgreSQL has been uploaded to Docker Hub and Quay.IO

*   **Other Updates**
    *   \[Add] Added parameter validation control for setting device properties and calling device services
    *   \[Add] Added interfaces for setting device properties and calling device services
    *   \[Add] Added composite file manager definitions to support combined local and object storage management for files of different purposes. Also resolved the issue of unclear logic in the original FileTemplate and FileTransformer definitions.
    *   \[Add] Added a default JsonSchema composite file manager and injected it by default in the core-autoconfigure module to ensure correct code operation.
    *   \[Add] Added platform-level JsonSchema composite file storage manager definitions.
    *   \[Fix] Fixed the issue where importing SCT via Import interfered with the Springdoc version, preventing upgrade.
    *   \[Fix] Fixed certificate factory test case execution errors.
    *   \[Optimize] Optimized Hikari and database connection-related configurations to further improve database connection and usage efficiency.
    *   \[Optimize] Optimized MqttTopic definitions to support more MQTT topic application scenarios.
    *   \[Optimize] Spring Boot Test Starter is no longer globally configured; modified to be imported on-demand by each module.
    *   \[Optimize] Adjusted the location of JustAuth dependency and related code to improve code cohesion.
    *   \[Refactor] Refactored core base module code, adjusted some code package paths and structures to reduce dependencies and coupling between modules.
    *   \[Refactor] Refactored OAuth2 Client code to adapt to the latest version of Spring Security OAuth2.
    *   \[Refactor] Refactored WebPathUtils utility class to adapt to the latest version of Spring Security.
    *   \[Refactor] Refactored Spring Authorization Server authentication-related code to support DPoP.
    *   \[Refactor] Refactored Spring Authorization Server authentication-related code to support PAR.
    *   \[Refactor] Refactored FileTemplate and FileTransformer definitions, reducing unnecessary method definitions and interactions.
    *   \[Upgrade] Minio Docker image version upgraded to RELEASE.2025-05-24T17-08-30Z
    *   \[Upgrade] Grafana Docker image version upgraded to 12.0.1
    *   \[Upgrade] Loki Docker image version upgraded to 3.5.1
    *   \[Upgrade] Promtail Docker image version upgraded to 3.5.1
    *   \[Upgrade] EMQX Docker image version upgraded to 5.9.0
    *   \[Upgrade] InfluxDB Docker image version upgraded to 2.7.12
    *   \[Upgrade] ClickHouse Docker image version upgraded to 25.5.1
    *   \[Upgrade] TDengine Docker image version upgraded to 3.3.6.6

*   **Dependency Updates**
    *   \[Upgrade] alipay-sdk-java version upgraded to 4.40.237.ALL
    *   \[Upgrade] com.baidu.aip version upgraded to 4.16.20
    *   \[Upgrade] grpc version upgraded to 1.73.0
    *   \[Upgrade] json-schema-validator version upgraded to 1.5.7
    *   \[Upgrade] protobuf version upgraded to 3.25.8
    *   \[Upgrade] redisson version upgraded to 3.48.0
    *   \[Upgrade] software.amazon.awssdk version upgraded to 2.31.53
    *   \[Upgrade] software.amazon.awssdk.crt version upgraded to 0.38.3
    *   \[Upgrade] sweetalert2 webjars version upgraded to 11.22.0
    *   \[Upgrade] vue webjars version upgraded to 3.5.16
    *   \[Upgrade] weixin java version upgraded to 4.7.5-20250529.111829
    *   \[Upgrade] okio version upgraded to 3.12.0
    *   \[Upgrade] influxdb-client version upgraded to 7.3.0
    *   \[Upgrade] json version upgraded to 20250517

## \[7] Documentation Notes

The original documentation site https://www.herodotus.cn has ceased service due to server expiration.

Friends who need to consult the Dante Cloud project documentation can view the 【Enterprise Edition】 documentation at https://www.herodotus.vip. (Apart from functional differences, the deployment methods and usage logic are completely consistent with the open-source version, and the content is more refined and easier to understand, which will not affect the use of the open-source version).

Alternatively, you can access the 【Community Edition】 documentation for this project at https://dante-cloud.dromara.org. Please note that initial access to this site might be slow, and there might be times when it is inaccessible in some regions.

Please be informed!

* * *

**If this project is helpful to you, welcome to Star us to show your support!**

**Gitee**: https://gitee.com/dromara/dante-cloud

**Github**: https://github.com/dromara/dante-cloud