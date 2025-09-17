---
title: Dante Cloud 3.5.5.0 发布， “你们项目是单体还是微服务？” “我都是。”
author: dnate cloud
date: 2025-08-25
cover: /assets/img/news/Dante-Cloud-3.5.5.0-0.png
head:
  - - meta
    - name: 新闻
---

  

![](/assets/img/news/Dante-Cloud-3.5.5.0-0.png)

## \[一\] 项目简介

**Dante Cloud** 国内首个支持阻塞式和响应式服务并行的微服务平台。是采用**领域驱动模型(DDD)**设计思想，以「**高质量代码、低安全漏洞**」为核心，基于 Spring 生态全域开源技术，高度**模块化和组件化设计**，支持**智能电视、IoT等物联网设备**认证，满足**国家三级等保要求**，支持**接口国密数字信封加解密**等一系列安全体系的多租户微服务解决方案。独创的可以“**一套代码实现微服务和单体两种架构灵活切换**”的企业级应用系统。

## \[二\] 项目理念

**Dante Cloud** 一直秉承着“简洁、高效、包容、务实”的理念，使用微服务领域及周边相关的各类新兴技术或主流技术进行建设，不断地深耕细作、去粗取精、用心打造。目标是构建一款`代码质量高、维护投入低、安全防护强`的，可以帮助用户快速跨越架构技术选型、技术研究探索阶段，降低传统项目中因安全漏洞、技术负债、低质代码等潜在隐患所产生的高维护投入，期望像项目名字寓意一样，在行业变革的时期承上启下，助力企业信息化建设和变革的产品。

**Dante Cloud** 核心关注点是：**「高质量的系统代码」**、**「合理的系统架构」**、**「低耦合的模块划分」**、**「高安全性系统实现」**、**「灵活的功能扩展能力」**，**「优质的微服务实现」**。不会像其它一些系统一样，追求 **业务功能** 的 **丰富** 性。堆叠大量无法做到真正通用的功能，反倒会成为负担和干扰，不如由用户自己按照需求灵活设计和实现。

## \[三\] 架构设计

Dante Cloud 除了提供一套完整的微服务架构以外，还支持以单体架构运行。这里的微服务架构和单体架构并不是分离的两套代码，也不是分离的两个项目。而是完全融合的一整套代码，使用时可以根据需要选择是以微服务模式或者单体模式运行。这是 Dante Cloud 微服务最大的特色之一：**“一套代码、两种架构”**。

> 基于 `Spring Boot` 和 `Spring Cloud` 的微服务架构，已经成为企业级应用建设的主流方案。但不可否认的是，搭建一套微服务架构所需的基础设施越来越多，也越来越复杂。仅仅是在开发电脑上搭建一套运行开发调试环境，其复杂度和所需的资源也不容小觑。而很多应用特别是小型应用，在早期开发中或者用户量不大的前期，很多情况下一套单体的，前后端分离的后台就足以满足。完全没有必要上一整套微服务，额外增加复杂度。

Dante Cloud **“一套代码、两种架构”** 的特点，可以帮助企业在项目早期以单体架构快速建设项目、方便开发人员在本地进行开发以及新技术研究。在项目后期随着用户规模增大以及并发需求提升时，可以快速无缝迁移至微服务架构。

## \[四\] 实现组件

本项目并未使用任何复杂难懂或难以上手掌握的技术，项目中所涉及核心关键组件中，其中「**近 80% 均为 Spring 生态原生组件**」。技术实现均为各组件标准用法的组合与应用，编码风格和代码设计一直也在极尽努力尽量与 Spring 生态的标准规范用法保持一致，只不过经过大量的版本迭代和重构之后逐渐形成了一定的封装与抽象。

学习使用本项目对 **Java 以及 Spring 生态基础知识**，以及对 **微服务思想理念的认知** 要求较高。因此，如果你觉得本项目学习曲线高、掌握难度大，不像其它同类开源项目那样“**简单**”，那么很有可能是你尚未 **真正** 的了解或者掌握 Spring 生态的相关组件。

*   **听过不等于知道**
    
*   **知道不等于了解**
    
*   **了解不等于会用**
    
*   **会用不等于精通**
    

当然，换个角度，本项目也可以是深入学习掌握 Spring 生态各组件的优秀案例。**建议详细阅读《企业IT架构转型之道：阿里巴巴中台战略思想与架构实战》一书（可以先读前几章）之后再上手本项目，特别是对于仅擅长单体应用的朋友，一定要读**！

> 本项目提供了《Dante Cloud 及相关知识学习方法和学习路径的建议》，欢迎感兴趣的朋友阅读，【在线阅读】

Dante Cloud 所使用的核心组件如下：


| 序号 | Spring 生态组件          | 国内开源组件           |
|------|--------------------------|------------------------|
| 1    | Spring Boot              | Spring Cloud Alibaba   |
| 2    | Spring Security          | Spring Cloud Tencent   |
| 3    | Spring Security OAuth2   | JetCache               |
| 4    | Spring Authorization Server | Mybatis Plus         |
| 5    | Spring Data JPA          | JustAuth               |
| 6    | Spring Data MongoDB      | WxJava                 |
| 7    | Spring Data Redis        | Hutool                 |
| 8    | Spring Data Envers       | sms-spring-boot-starter|
| 9    | Spring Cloud             | grpc-spring-boot-starter|
| 10   | Spring Cloud Bus         | --                     |
| 11   | Spring Cloud Stream      | --                     |
| 12   | Spring Cloud Gateway     | --                     |
| 13   | Spring Cloud Loadbalancer| --                     |
| 14   | Spring Cloud OpenFegin   | --                     |
| 15   | Spring Cloud Zookeeper   | --                     |
| 16   | Spring Session           | --                     |
| 17   | Spring Integration       | --                     |
| 18   | Spring Kafka             | --                     |
| 19   | Spring WebSocket         | --                     |
| 20   | Spring RSocket           | --                     |
| 21   | Spring Webflux           | --                     |
| 22   | Micrometer               | --                     |
| 23   | SpringDoc                | --                     |
| 24   | Spring Boot Admin        | --                     |



## \[五\] 交流反馈

为了方便 Dante Cloud 开源版及企业版用户交流，深入了解、掌握 Dante Cloud 使用相关技术栈，快速解决实际应用问题。自 2025年8月18日起，Dante Cloud 重新开放 **技术交流群**，欢迎所有 `真心` 交流技术朋友加入。

**如何进群**：详见【技术交流群】。

## \[六\] 本次更新

*   **主要更新**
    

*   \[升级\] Spring Boot 版本升级至 3.5.5
    
*   \[升级\] Spring Boot Admin 版本升级至 3.5.2
    
*   \[升级\] Spring Authorization Server 版本升级至 1.5.2
    
*   \[升级\] Nacos 版本升级至 3.0.3。自封装支持 Postgresql 的 Nacos Docker 镜像已经上传至 Docker Hub 和 Quay.IO
    
*   \[优化\] 系统已支持 Redis 8.2.1 版本，
    

*   **其它更新**
    

*   \[新增\] 前端工程新增主题切换特效
    
*   \[修复\] 修复自定义扩展 Client Credentials 模式 Provider 与 SAS 最新配置方式不匹配，导致 Client Credentials 模式使用不稳定问题
    
*   \[修复\] 修复物联网设备客户端动态注册，因循环开启认证导致客户端注册生的 Registered Client 信息被覆盖问题
    
*   \[修复\] 修复 Spring Session 在退出系统时会抛出 java.lang.IllegalStateException: LettuceConnectionFactory has been STOPPED. Use start() to initialize it 问题。fix：#ICTVGU
    
*   \[修复\] 修复前端设备码验证轮询 API 返回信息错误
    
*   \[修复\] 修复客户端动态注册时 oauth2\_authorization\_resource 表中，出现多条相同 clientId 信息存在，导致查询出错问题
    
*   \[修复\] 修复设备码授权默认验证成功后跳转地址错误问题
    
*   \[修复\] 修复前端 framework kernel 模块因导入信息错误，导致模块打包过大问题
    
*   \[修复\] 修复 @vue/tsconfig 升级至 0.8.0，默认开启 noUncheckedIndexedAccess 和 exactOptionalPropertyTypes 配置，导致打包编译时出现错误提示问题
    
*   \[重构\] 重构前端 Axios 组件抽象定义中的类型，让类型验证更准确，减少不必要的类型转换
    
*   \[优化\] IP 地址库数据库更新至 2025-08-13
    
*   \[优化\] 优化前端客户端动态注册默认参数，避免注册时生成不必要的授权模式
    
*   \[优化\] 删除 Baidu OCR OpenAPI 封装模块
    
*   \[优化\] 去除 Velocity 组件的依赖以及相关配置
    
*   \[优化\] 优化 Maven 配置，去除早期为控制依赖漏洞而引入的 fastjson 统一版本控制
    
*   \[优化\] 优化 Gitee ISSUE Template
    
*   \[优化\] 删除前端 Bpmn 设计器模块打包配置中的无用配置
    
*   \[优化\] 优化前端 vite.config.mts 和 tsconfig.json 配置，采用更合理的定义配置，同时去除无用或过时的配置内容
    
*   \[优化\] 优化前端应用 Vite 配置，调整自动生成配置文件位置，优化自动导入配置
    
*   \[优化\] 优化前端模块 package.json 导出配置，简化模块样式引入路径长途
    
*   \[升级\] tempo docker 镜像版本升级至 2.8.2
    
*   \[升级\] cassandra docker 镜像版本升级至 5.0.5
    
*   \[升级\] clickhouse docker 镜像版本升级至 25.7.4
    
*   \[升级\] kestra docker 镜像版本升级至 v0.24.2
    

*   **依赖更新**
    

*   \[升级\] alipay-sdk-java 版本升级至 4.40.411.ALL
    
*   \[升级\] grpc 版本升级至 1.75.0
    
*   \[升级\] skywalking agent 版升级至 9.5.0
    
*   \[升级\] software.amazon.awssdk 版本升级至 2.32.27
    
*   \[升级\] software.amazon.awssdk.crt 版本升级至 0.38.9
    
*   \[升级\] springdoc 版本升级至 2.8.10
    
*   \[升级\] sweetalert2 webjars 版本升级至 11.22.4
    
*   \[升级\] wxjava 版本升级至 4.7.7-20250808.182223
    

* * *

**如果本项目对你有所帮助，欢迎 Star 一波来支持我们**！

**Gitee**：https://gitee.com/dromara/dante-cloud

**Github**：https://github.com/dromara/dante-cloud

**Gitcode**：https://gitcode.com/dromara/dante-cloud