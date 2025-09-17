---
title: MaxKey Single Sign-On Authentication System 4.1.7, Critical Bug Fixes
author: MaxKey
date: 2025-04-01
cover: /assets/img/news/MaxKey-4.1.7-0.webp
head:
  - - meta
    - name: News
---

**![](/assets/img/news/MaxKey-4.1.7-0.webp)**

**The Industry-Leading IAM-IDaas Identity Management and Authentication Product**

# Overview

Dromara **MaxKey** Single Sign-On Authentication System is an **industry-leading IAM-IDaas identity management and authentication product**. Its name is a homophone for "Marx's Key," symbolizing its ability to act like a master key (the greatest key) that unlocks complex enterprise security needs with simple and efficient solutions. The product supports standard protocols such as OAuth 2.x/OpenID Connect, SAML 2.0, JWT, CAS, and SCIM, providing **secure, standard, and open** user identity management (IDM), authentication (AM), single sign-on (SSO), RBAC permission management, and resource management.

MaxKey focuses on performance, security, and ease of use in enterprise scenarios and is widely used in industries such as healthcare, finance, government, and manufacturing.

MaxKey **follows the Apache License, Version 2.0, and is open source and free**. It is open source, secure, compliant, and independently controllable.

Official Website: **https://www.maxkey.top/**

Official QQ: **1054466084**

Email: support@maxsso.net

Code Hosting:

Gitee: https://gitee.com/dromara/MaxKey

GitHub: https://github.com/dromara/MaxKey

# Product Features

1. Standard Protocols

| No.  |         Protocol         | Support Level |
| :--: | :----------------------: | :-----------: |
| 1.1  | OAuth 2.0/OpenID Connect |     High      |
| 1.2  |         SAML 2.0         |     High      |
| ...  |           ...            |      ...      |

2. Login Support

| No.  | Login Methods                                                |
| :--: | :----------------------------------------------------------- |
| 2.1  | Dynamic Verification Code (Letters/Numbers/Arithmetic)       |
| 2.2  | Two-Factor Authentication (2FA)                              |
| 2.3  | SMS Authentication (Tencent Cloud SMS/Aliyun SMS/NetEase YunXin) |
| 2.4  | LoginEasy/Google/Microsoft Authenticator/FreeOTP (Supports TOTP or HOTP) |
| 2.5  | Kerberos/SPNEGO/AD Domain                                    |
| 2.6  | OpenLDAP/Active Directory/Standard LDAP Server               |
| 2.7  | Social Account Login (WeChat/QQ/Weibo/DingTalk/Google/Facebook/Others) |
| 2.8  | QR Code Login (Enterprise WeChat/DingTalk/Feishu QR Code Login) |

3. Provides standard authentication interfaces for integrating other applications with SSO, secure mobile access, secure APIs, third-party authentication, and internet authentication integration.

4. Offers user lifecycle management and supports the SCIM 2 protocol; includes out-of-the-box connectors for identity provisioning and synchronization.

5. Simplifies Microsoft Active Directory domain control, standard LDAP server architecture, and account management, with self-service password reset.

6. IDaas multi-tenancy functionality supports independent management of multiple enterprises within a group or data isolation between different departments within an enterprise, reducing operational costs.

7. The authentication center is platform-agnostic and supports diverse environments, including web, mobile, and mobile devices (e.g., Apple iOS, Android), extending authentication capabilities from B/S to mobile applications.

8. Configurable password policies and access policies; supports Ip2region or GeoLite2 geographic database for precise IP positioning; robust security auditing with full user lifecycle auditing, access behavior traceability, security compliance auditing, and security risk alerts.

9. Based on the Java EE platform with a microservices architecture, using open-source technologies such as Spring, MySQL, Tomcat, Redis, and MQ, ensuring high scalability.

10. Open source, secure, compliant, and independently controllable, licensed under Apache 2.0 License: https://www.maxkey.top/zh/about/licenses.html.

# Interface

![](/assets/img/news/MaxKey-4.1.7-1.png)

# Download

Current Version Network Disk Download

| Version | Date       | Download Link |
| ------- | ---------- | ------------- |
| v 4.1.7 | 2025/04/01 | Download      |

# Release Notes

MaxKey v 4.1.7 GA 2025/04/01

```
*(MAXKEY-250301) #IBQEYU Error when using AccessToken for authentication: session is null
*(MAXKEY-250302) Moved org.dromara.maxkey.web.component to org.dromara.maxkey.entity
*(MAXKEY-250303) Removed query submitLoading
*(MAXKEY-250304) Fixed issue where images might not display after compilation
*(MAXKEY-250305) Optimized sessionStatus
*(MAXKEY-250306) Optimized menu names
*(MAXKEY-250307) Added user password generation function
*(MAXKEY-250308) Changed front-end storage INST value in management end to inst_mgt
*(MAXKEY-250309) Code optimization
*(MAXKEY-250310) Dependency reference, update, and upgrade:
            springVersion                 6.2.5
            springBootVersion             3.4.4
            springSecurityVersion         6.4.4
            springDataVersion             3.4.4
            springkafkaVersion            3.3.4
            tomcatVersion                 10.1.39
            slf4jVersion                  2.0.17
            jacksonVersion                2.18.3
            druidVersion                  1.2.24
            druidspringbootstarterVersion 1.2.24
            mybatisVersion                3.5.19
            mybatisspringVersion          3.0.4
            mybatis-jpa-extra             3.3.5
```