---
title: "MaxKey Single Sign-On Authentication System 4.1.8: Secondary Authentication is Here"
author: maxkey
date: 2025-08-02
cover: /assets/img/news/MaxKey-4.1.8-0.webp
head:
  - - meta
    - name: News
---

![](/assets/img/news/MaxKey-4.1.8-0.webp)

**The Leading IAM-IDaas Identity Management and Authentication Product**

# Overview

Dromara **MaxKey** Single Sign-On Authentication System is **the leading IAM-IDaas identity management and authentication product**. Its name is a homophone for "Marx's Key," symbolizing its ability to act like a master key (the greatest key) that unlocks complex enterprise security needs, providing a simple yet efficient solution. The product supports standard protocols such as OAuth 2.x/OpenID Connect, SAML 2.0, JWT, CAS, and SCIM, offering **secure, standard, and open** user identity management (IDM), identity authentication (AM), single sign-on (SSO), RBAC permission management, and resource management.

MaxKey emphasizes performance, security, and ease of use in enterprise scenarios and is widely used in industries such as healthcare, finance, government, and manufacturing.

MaxKey **follows the Apache-2.0 open-source license**, making it open-source, secure, compliant, and independently controllable.

Official Website: **https://www.maxkey.top/**

Official QQ: **1054466084**

Email: **support@maxsso.net**

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

2. Login Support

| No.  | Login Method                                                 |
| ---- | ------------------------------------------------------------ |
| 2.1  | Dynamic CAPTCHA: Letters/Numbers/Arithmetic                  |
| 2.2  | Two-Factor Authentication                                    |
| 2.3  | SMS Authentication: Tencent Cloud SMS/Aliyun SMS/Netease YunXin |
| 2.4  | LoginEasy/Google/Microsoft Authenticator/FreeOTP (Supports TOTP or HOTP) |
| 2.5  | Kerberos/SPNEGO/AD Domain                                    |
| 2.6  | OpenLDAP/ActiveDirectory/Standard LDAP Server                |
| 2.7  | Social Accounts: WeChat/QQ/Weibo/DingTalk/Google/Facebook/Others |
| 2.8  | Scan Code Login: Enterprise WeChat/DingTalk/Feishu Scan Code Login |

3. Provides standard authentication interfaces for integrating SSO with other applications, secure mobile access, secure APIs, and integration with third-party and internet authentication.

4. Offers user lifecycle management and supports the SCIM 2 protocol. Comes with out-of-the-box connectors for identity provisioning and synchronization.

5. Simplifies Microsoft Active Directory domain control, standard LDAP server structures, and account management, with self-service password reset.

6. IDaas multi-tenancy functionality supports independent management of multiple enterprises under a group or data isolation between different departments within an enterprise, reducing operational costs.

7. The authentication center is platform-independent and supports diverse environments, including web, mobile, and mobile devices (e.g., Apple iOS, Android), extending authentication capabilities from B/S to mobile applications.

8. Configurable password policies and access policies; supports precise IP location using Ip2region or GeoLite2 geographic databases. Provides robust security auditing, including full user lifecycle auditing, access behavior traceability auditing, security compliance auditing, and security risk warnings.

9. Based on the Java EE platform with a microservices architecture, using open-source technologies such as Spring, MySQL, Tomcat, Redis, and MQ, ensuring high scalability.

10. Open-source, secure, compliant, and independently controllable, licensed under Apache 2.0 License: https://www.maxkey.top/zh/about/licenses.html.

# Interface

![](/assets/img/news/MaxKey-4.1.8-1.png)

# Download

Current Version Network Disk Download

| Version | Date       | Download Link |
| ------- | ---------- | ------------- |
| v4.1.8  | 2025/08/01 | Download      |

# Version Notes

MaxKey v4.1.8 GA 2025/08/01

```
*(MAXKEY-250401) Secondary Authentication
*(MAXKEY-250402) MaxKeyOpenApiApplication renamed to MaxKeyApiApplication
*(MAXKEY-250403) Cache optimization
*(MAXKEY-250404) maxkey-core split into maxkey-entity and maxkey-cache
*(MAXKEY-250405) maxkey-common split into maxkey-crypto, maxkey-ldap, and maxkey-commons
*(MAXKEY-250406) Fixed cache CAPTCHA expiration exception issue
*(MAXKEY-250407) Configuration for secondary authentication
*(MAXKEY-250408) /functionList to retrieve application function permission list
*(MAXKEY-250409) #IBY0OL Long periods of inactivity causing CAPTCHA login failure
*(MAXKEY-250410) User and organization sorting optimization
*(MAXKEY-250411) Password modification entry optimization
*(MAXKEY-250412) Groups.service.ts renamed to groups.service.ts
*(MAXKEY-250413) Code integration and optimization
*(MAXKEY-250414) Explanation and details of Open Source Summer tasks
*(MAXKEY-250415) angular.json optimization
*(MAXKEY-250416) Dependency references, updates, and upgrades
    springVersion 6.2.9
    springBootVersion 3.4.8
    springSecurityVersion 6.5.2
    springDataVersion 3.5.2
    springkafkaVersion 3.3.8
    tomcatVersion 10.1.43
    jacksonVersion 2.18.4
```