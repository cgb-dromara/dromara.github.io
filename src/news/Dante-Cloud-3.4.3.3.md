---
title: Dante Cloud 3.4.3.3 Released – Demo System Is Ready, Explore It Now!
author: Dante Cloud
date: 2025-03-17
cover: /assets/img/news/Dante-Cloud-3.4.3.3-0.png
head:
  - - meta
    - name: News
---

## \[1] Project Introduction

**Dante Cloud** is the first microservices platform in China that supports both blocking and reactive services in parallel. It adopts **Domain-Driven Design (DDD)** principles, with a core focus on **high-quality code and low security vulnerabilities**. Based on the full range of open-source technologies in the Spring ecosystem, it features highly **modular and componentized design**, supports authentication for **smart TVs, IoT, and other connected devices**, meets **National Level 3 Cybersecurity Requirements**, and includes a series of security systems such as **interface-level national cryptographic digital envelope encryption and decryption**. It is a multi-tenant microservices solution that enables **"one codebase for both microservices and monolithic architectures"** for enterprise application systems.

![](/assets/img/news/Dante-Cloud-3.4.3.3-0.png)

## \[2] Project Philosophy

**Dante Cloud** has always adhered to the principles of "Simplicity, Efficiency, Inclusiveness, and Pragmatism." It leverages various emerging or mainstream technologies in the microservices domain and its peripherals for development, continuously refining and optimizing with dedication. The goal is to build a product with `high code quality, low maintenance overhead, and strong security protections`. It aims to help users quickly bypass the stages of architectural technology selection and technical research exploration, reducing the high maintenance costs caused by potential issues such as security vulnerabilities, technical debt, and low-quality code in traditional projects. Like the meaning of its name, Dante Cloud hopes to serve as a bridge during industry transformation, supporting enterprises in their信息化 (digital/informatization) construction and transformation.

> The core focus of **Dante Cloud** is: **"High-quality system code"**, **"Reasonable system architecture"**, **"Low-coupled module division"**, **"High-security system implementation"**, **"Flexible functional extensibility"**, and **"Excellent microservices implementation"**, rather than pursuing the **richness** of stacked **business features**.

## \[3] Feature Introduction

The Dante Cloud demo system has been released, currently including an online version, a monolithic offline version (Docker), and a microservices image version. Welcome to try it out!

Experience address: https://www.herodotus.vip/get-started/preview/online.html

Any comments and suggestions can be submitted via 【ISSUE】.

**Effect Demo**

## \[4] Update Content

*   **Major Updates**

*   \[Upgrade\] Spring Boot Admin version upgraded to 3.4.5

*   \[New\] SAS-related exceptions and error feedback no longer display only monotonous messages; now support outputting personalized interfaces as text/html in browser access scenarios

*   \[Optimization\] Significantly improved the usability of the monolithic version and frontend when running under Context Path and Nginx reverse proxy environments

*   **Other Updates**

*   \[Refactor\] Consolidated all exception handling for the authorization server and resource server into facade configuration classes, achieving unified HttpSecurity error configuration invocation. Reduced the number of Beans that need to be injected for SAS core configuration.

*   \[Refactor\] Extracted facade configuration classes for the authorization server and authentication server, reducing the Beans that need to be injected by the application side, facilitating use and unified maintenance.

*   \[Refactor\] Refactored the core processing logic code of RequestMapping using Lambda expressions.

*   \[New\] Added a production environment browser developer tools protection control environment variable, facilitating debugging in production environments by turning off protection.

*   \[New\] Fixed frontend deployment to Nginx page caching strategy configuration.

*   \[New\] Added H2 in-memory database support to the system.

*   \[New\] Added a demo mode Profile based on the H2 in-memory database for the monolithic version.

*   \[New\] Added base path configuration to the frontend Vite configuration, fixing 404 errors for static resources when using reverse proxy pointing to sub-paths.

*   \[New\] Extended the original SAS error response that only supported application/json type to support text/html type processing, making exception information accessed via browsers more user-friendly.

*   \[New\] Added Thymeleaf manual page rendering tool to solve the issue where manual rendering does not support '@{}', throwing "Link base "/error/css/style.css" cannot be context relative (/...) unless the context used for executing the engine implements the org.thymeleaf.context.IWebContext interface" error.

*   \[Fix\] Fixed the issue where SAS DefaultAuthenticationEventPublisher would throw an unrecognized exception breaking out of the system error system if no default event was specified.

*   \[Fix\] Fixed the issue where some SAS exceptions broke out of the system's custom error system, throwing exceptions without custom error information.

*   \[Fix\] Fixed the issue where native OAuth2 exceptions could not be converted into the system error system's standard exceptions.

*   \[Fix\] Fixed the issue where the authorization code page was intercepted after adjusting the error handler configuration method.

*   \[Fix\] Fixed the issue where obtaining IP could sometimes get 0:0:0:0:0:0:0:1, causing exceptions.

*   \[Fix\] Fixed the issue where environment variables were not effective when the frontend was packaged into a Docker image.

*   \[Fix\] Fixed the inconsistency between frontend Typescript definitions and backend entities, which caused display and operation abnormalities in the frontend OAuth2Application functionality.

*   \[Fix\] Optimized frontend production compilation configuration, fixed 404 errors for font references via css url in scenarios with a specified Base.

*   \[Fix\] Fixed the logic error in AccessDenied exception handling in the Servlet environment, which resulted in insufficiently precise exception messages.

*   \[Fix\] Fixed the warning for incorrect import types output during frontend compilation.

*   \[Fix\] Fixed the compilation warning caused by duplicate exports of frontend pinia store ts.

*   \[Fix\] Fixed compilation warnings caused by syntax errors in frontend Vue page exports.

*   \[Fix\] Fixed the issue where images on custom login pages were not displayed in environments with a specified context path.

*   \[Fix\] Fixed the issue where the system lacked the initialization script for the oauth2_authorization_resource table.

*   \[Fix\] Fixed the issue where Cookie Path setting anomalies in Context Path environments caused login failures.

*   \[Fix\] Fixed permission verification errors containing placeholders in Context Path environments.

*   \[Fix\] Fixed the issue where interface permission conversion in Context Path environments did not include the Context Path, causing permission verification failures.

*   \[Optimization\] Removed duplicate definitions of the DefaultOAuth2AuthenticationEventPublisher Bean configuration in the code.

*   \[Optimization\] Added static resource filtering (js, css, image, etc.) protection to request audit logs to prevent recording too much static resource call information.

*   \[Optimization\] Removed unused compilation and packaging settings from the Vite configuration file.

*   \[Upgrade\] Minio Docker image version upgraded to RELEASE.2025-03-12T18-04-18Z

*   \[Upgrade\] EMQX Docker image version upgraded to 5.8.5

*   \[Upgrade\] TDengine image version upgraded to 3.3.5.8

*   **Dependency Updates**

*   \[Upgrade\] hypersistence-utils-hibernate-63 version upgraded to 3.9.5

*   \[Upgrade\] software.amazon.awssdk version upgraded to 2.30.38

*   \[Upgrade\] software.amazon.awssdk.crt version upgraded to 0.36.2

*   \[Upgrade\] audience-annotations version upgraded to 0.15.1

*   \[Upgrade\] grpc version upgraded to 1.71.0

*   \[Upgrade\] quasar webjars version upgraded to 2.18.1

*   \[Upgrade\] sms4j-spring-boot-starter version upgraded to 3.3.4

*   \[Upgrade\] webauthn4j version upgraded to 0.28.6.RELEASE

*   \[Upgrade\] checker-qual version upgraded to 3.49.1


---

**If this project is helpful to you, welcome to Star us for support!**

**Gitee**: https://gitee.com/dromara/dante-cloud

**Github**: https://github.com/dromara/dante-cloud