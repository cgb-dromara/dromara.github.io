---
title: 重磅升级！Dante Cloud 全面拥抱 Spring Boot 3.5 & Spring Cloud 2025
author: Dante Cloud
date: 2025-06-03
cover: /assets/img/news/Dante-Cloud-3.5.0.0-0.png
head:
  - - meta
    - name: 新闻
---

## \[一\] 项目简介

**Dante Cloud** 国内首个支持阻塞式和响应式服务并行的微服务平台。是采用**领域驱动模型(DDD)**设计思想，以「**高质量代码、低安全漏洞**」为核心，基于 Spring 生态全域开源技术，高度**模块化和组件化设计**，支持**智能电视、IoT等物联网设备**认证，满足**国家三级等保要求**，支持**接口国密数字信封加解密**等一系列安全体系的多租户微服务解决方案。可以“**一套代码实现微服务和单体两种架构**”的企业级应用系统。

![](/assets/img/news/Dante-Cloud-3.5.0.0-0.png)

  

## \[二\] 项目理念

**Dante Cloud** 一直秉承着“简洁、高效、包容、务实”的理念，使用微服务领域及周边相关的各类新兴技术或主流技术进行建设，不断地深耕细作、去粗取精、用心打造。目标是构建一款`代码质量高、维护投入低、安全防护强`的，可以帮助用户快速跨越架构技术选型、技术研究探索阶段，降低传统项目中因安全漏洞、技术负债、低质代码等潜在隐患所产生的高维护投入，期望像项目名字寓意一样，在行业变革的时期承上启下，助力企业信息化建设和变革的产品。

**Dante Cloud** 核心关注点是：**「高质量的系统代码」**、**「合理的系统架构」**、**「低耦合的模块划分」**、**「高安全性系统实现」**、**「灵活的功能扩展能力」**，**「优质的微服务实现」**，而不是追求 **业务功能** 堆叠的 **丰富** 性。

## \[三\] 架构设计

Dante Cloud 除了提供一套完整的微服务架构以外，还支持以单体架构运行。这里的微服务架构和单体架构并不是分离的两套代码，也不是分离的两个项目。而是完全融合的一整套代码，使用时可以根据需要选择是以微服务模式或者单体模式运行。这是 Dante Cloud 微服务最大的特色之一：**“一套代码、两种架构”**。

> 基于 `Spring Boot` 和 `Spring Cloud` 的微服务架构，已经成为企业级应用建设的主流方案。但不可否认的是，搭建一套微服务架构所需的基础设施越来越多，也越来越复杂。仅仅是在开发电脑上搭建一套运行开发调试环境，其复杂度和所需的资源也不容小觑。而很多应用特别是小型应用，在早期开发中或者用户量不大的前期，很多情况下一套单体的，前后端分离的后台就足以满足。完全没有必要上一整套微服务，额外增加复杂度。

Dante Cloud **“一套代码、两种架构”** 的特点，可以帮助企业在项目早期以单体架构快速建设项目、方便开发人员在本地进行开发以及新技术研究。在项目后期随着用户规模增大以及并发需求提升时，可以快速无缝迁移至微服务架构。

## \[四\] 特性介绍

Dante Cloud 演示系统已发布，目前包括在线版、单体离线版(Docker)和微服务镜像版, 欢迎体验使用！

体验地址：https://www.herodotus.vip/get-started/preview/online.html

有任何意见和建议，可以【发 ISSUE】留言。

## \[五\] Spring 生态新特性总结

| 特性领域   | Spring Boot 3.5 特性                          | Spring Cloud 2025.0.0 特性                  |
|------------|-----------------------------------------------|---------------------------------------------|
| Java 支持  | Java 17+（可能优化 Java 21）                  | 依赖 Spring Boot 3.5                        |
| Web/HTTP   | HTTP/3（实验性）、WebSocket 优化              | API 网关（Gateway）优化                     |
| 安全       | Spring Security 6.x 增强                      | 配置加密/解密优化                           |
| 数据访问   | Hibernate 6.x、JDBC 优化                      | Config 管理优化                             |
| 监控       | Micrometer 1.11.x、Actuator 增强              | Sleuth/OpenTelemetry 优化                   |
| 云原生     | Kubernetes/Docker 优化                        | 服务发现、熔断、流处理增强                  |
| 开发体验   | 构建工具优化、Kotlin 支持                     | 动态配置、智能路由                          |


## \[六\] 更新内容

*   **主要更新**
    

*   \[升级\] Spring Boot 版本升级至 3.5.0
    
*   \[升级\] Spring Authorization Server 版本升级至 1.5.0
    
*   \[升级\] Spring Cloud 版本升级至 2025.0.0
    
*   \[升级\] Spring Cloud Tencent 版本升级至 2.0.1.0-2023.0.3
    
*   \[升级\] Spring Boot Admin 版本升级至 3.5.0
    
*   \[升级\] Nacos 版本升级至 3.0.1。自封装支持 Postgresql 的 Nacos Docker 镜像已经上传至 Docker Hub 和 Quay.IO
    

*   **其它更新**
    

*   \[新增\] 增加设置设备属性和调用设备服务参数校验控制
    
*   \[新增\] 新增设置设备属性和调用设备服务接口
    
*   \[新增\] 新增组合文件管理器定义，以支持不同用途文件的本地及对象存储组合管理。同时解决原有 FileTemplate 和 FileTransformer 定义逻辑不够清晰问题。
    
*   \[新增\] 新增 JsonSchema 默认组合文件管理器，并在 core-autoconfigure 模块中默认注入，以保证代码正确运行。
    
*   \[新增\] 新增平台级 JsonSchema 组合文件存储管理器定义。
    
*   \[修复\] 修复因使用 Import 方式依赖 SCT 导致 Springdoc 版本被干扰导致无法升级问题。
    
*   \[修复\] 修复证书工厂测试用例执行错误问题
    
*   \[优化\] hikari 和数据库连接相关配置，进一步提升数据库连接和使用效能
    
*   \[优化\] 优化 MqttTopic 定义，支持更多 Mqtt 主题应用场景
    
*   \[优化\] Spring Boot Test Starter 不再采用全局配置，修改为各模块按需引
    
*   \[优化\] 调整对 JustAuth 依赖所在位置及相关代码，提升相关代码内聚性
    
*   \[重构\] 重构核心基础模块代码，调整部分代码包路径和结构，减少各模块间的依赖和耦合。
    
*   \[重构\] 重构 OAuth2 Client 代码适配最新版本 Spring Security OAuth2
    
*   \[重构\] 重构 WebPathUtils 工具类，适配最新版 Spring Security
    
*   \[重构\] 重构 Spring Authorization Server 认证相关代码，支持 DPoP
    
*   \[重构\] 重构 Spring Authorization Server 认证相关代码，支持 PAR
    
*   \[重构\] 重构 FileTemplate 和 FileTransformer 定义，减少不必要的方法定义和交互。
    
*   \[升级\] minio docker 镜像版本升级至 RELEASE.2025-05-24T17-08-30Z
    
*   \[升级\] grafana docker 镜像版本升级至 12.0.1
    
*   \[升级\] loki docker 镜像版本升级至 3.5.1
    
*   \[升级\] promtail docker 镜像版本升级至 3.5.1
    
*   \[升级\] emqx docker 镜像版本升级至 5.9.0
    
*   \[升级\] influxdb docker 镜像版本升级至 2.7.12
    
*   \[升级\] clickhouse docker 镜像版本升级至 25.5.1
    
*   \[升级\] tdengine docker 镜像版本升级至 3.3.6.6
    

*   **依赖更新**
    

*   \[升级\] alipay-sdk-java 版本升级至 4.40.237.ALL
    
*   \[升级\] com.baidu.aip 版本升级至 4.16.20
    
*   \[升级\] grpc 版本升级至 1.73.0
    
*   \[升级\] json-schema-validator 版本升级至 1.5.7
    
*   \[升级\] protobuf 版本升级至 3.25.8
    
*   \[升级\] redisson 版本升级至 3.48.0
    
*   \[升级\] software.amazon.awssdk 版本升级至 2.31.53
    
*   \[升级\] software.amazon.awssdk.crt 版本升级至 0.38.3
    
*   \[升级\] sweetalert2 webjars 版本升级至 11.22.0
    
*   \[升级\] vue webjars 版本升级至 3.5.16
    
*   \[升级\] weixin java 版本升级至 4.7.5-20250529.111829
    
*   \[升级\] okio 版本升级至 3.12.0
    
*   \[升级\] influxdb-client 版本升级至 7.3.0
    
*   \[升级\] json 版本升级至 20250517
    

## \[七\] 文档说明

原文档站点 https://www.herodotus.cn 因服务器到期，已经停止服务。

需要查阅 Dante Cloud 项目文档的朋友，可以查看【企业版】文档 https://www.herodotus.vip。（该文档除了功能上的差异外，部署方法和使用逻辑等与开源版本完全一致，而且内容更精细易懂，不会影响开源版的使用）。

或者可以访问本项目【社区版】文档 https://dante-cloud.dromara.org，该站点初次访问可能会有点慢，甚至出现部分地区有时打不开的情况。

敬请悉知！

* * *

**如果本项目对你有所帮助，欢迎 Star 一波来支持我们**！

**Gitee**：https://gitee.com/dromara/dante-cloud

**Github**：https://github.com/dromara/dante-cloud