---
title: MaxKey Single Sign-On Authentication System 4.1.6, World Map Access Statistics
author: MaxKey
date: 2025-02-20
cover: /assets/img/news/MaxKey-4.1.6-0.png
head:
  - - meta
    - name: News
---

**![](/assets/img/news/MaxKey-4.1.6-1.webp)**

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

| No.  | Protocol                 | Support Level |
| ---- | ------------------------ | ------------- |
| 1.1  | OAuth 2.0/OpenID Connect | High          |
| 1.2  | SAML 2.0                 | High          |
| 1.3  | JWT                      | High          |
| 1.4  | CAS                      | High          |
| 1.5  | SCIM 2.0                 | High          |
| 1.6  | FormBased                | Medium        |
| 1.7  | TokenBased (Post/Cookie) | Medium        |
| 1.8  | ExtendApi                | Low           |
| 1.9  | EXT                      | Low           |

2. Authentication Methods

| No.  | Authentication Method                                        |
| ---- | ------------------------------------------------------------ |
| 2.1  | Dynamic CAPTCHA (letters/numbers/arithmetic)                 |
| 2.2  | Two-Factor Authentication (2FA)                              |
| 2.3  | SMS Authentication (Tencent Cloud SMS/Aliyun SMS/NetEase YunXin) |
| 2.4  | LoginEasy/Google/Microsoft Authenticator/FreeOTP (supports TOTP or HOTP) |
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

![](/assets/img/news/MaxKey-4.1.6-2.png)

# Downloads

| Version | Date       | Download Link |
| ------- | ---------- | ------------- |
| v 4.1.6 | 2025/02/20 | Download      |

# Release Notes

MaxKey v 4.1.6 GA 2025/02/20

```
*(MAXKEY-250201) Global optimization for invalid request addresses
*(MAXKEY-250202) Fixed loginConfig and captchaType property write-back; resolved openApi runtime failure issue by zhangzhongjie
*(MAXKEY-250203) #IBGVOI Set default values for LoginConfig
*(MAXKEY-250204) Added 30-day world map access statistics
*(MAXKEY-250205) Optimized JWT validation code
*(MAXKEY-250206) Optimized audit query
*(MAXKEY-250207) Optimized current organization reading
*(MAXKEY-250208) #IBI3NO Fixed issue where fetch query condition cannot be empty
*(MAXKEY-250209) Optimized login success information update
*(MAXKEY-250210) Optimized session termination issue on the authentication end
*(MAXKEY-250211) Fixed issue where visited session should be saved even when a token already exists by zwj
*(MAXKEY-250212) Fixed issue where string type was incorrectly processed as a string by mappingJacksonHttpMessageConverter due to converter processing order by Ning Pengtao
*(MAXKEY-250213) Enhanced complexity of image calculation CAPTCHA
*(MAXKEY-250214) Added source code link address in the management end
*(MAXKEY-250215) Dependency reference, update, and upgrade:
            springDataVersion          3.4.2
            springkafkaVersion         3.3.2
            freemarkerVersion          2.3.34
            tomcatVersion              10.1.34
            slf4jVersion               2.0.16
            guavaVersion               33.4.0-jre
            zxingcoreVersion           3.5.3
            gsonVersion                2.12.1
            jakartaannotationVersion   3.0.0
            jakartaactivationVersion   2.1.3
            jakartamailapiVersion      2.1.3
            jakartavalidationapiVersion 3.1.1
            jakartaxmlbindapiVersion   4.0.2
            mybatis-jpa-extra          3.3.4
```

## About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, and scheduling orchestration. The community is committed to fully open-source collaboration, maintaining community neutrality, and providing microservices cloud-native solutions for global users. It aims to allow every open-source enthusiast involved to experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP projects, with a total of over 100,000 stars. It has built a community of tens of thousands of members, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to interact with me on the Knowledge Planet**

![](/assets/img/news/MaxKey-4.1.6-3.webp)