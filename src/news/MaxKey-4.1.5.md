---
title: MaxKey Single Sign-On Authentication System 4.1.5, Swagger Vulnerability Fix
author: maxkey
date: 2025-01-09
cover: /assets/img/news/MaxKey-4.1.5-0.webp
head:
  - - meta
    - name: News
---

![](/assets/img/news/MaxKey-4.1.5-0.webp)

**Industry-Leading IAM-IDaas Identity Management and Authentication Product**

# Overview

Dromara's **MaxKey** single sign-on authentication system is **an industry-leading IAM-IDaas identity management and authentication product**. Its name, which sounds like Marx's key, symbolizes its ability to unlock complex enterprise security needs like a master key (the biggest key), providing a simple and efficient solution. The product supports standard protocols such as OAuth 2.x/OpenID Connect, SAML 2.0, JWT, CAS, and SCIM, providing secure, standard, and open user identity management (IDM), identity authentication (AM), single sign-on (SSO), RBAC permission management, and resource management.

MaxKey focuses on performance, security, and ease of use in enterprise scenarios and is widely used in industries such as healthcare, finance, government, and manufacturing.

MaxKey is licensed under the Apache License, Version 2.0 and is open source and free. It is open source, secure, compliant, and self-controlled.

Official Website: **https://www.maxkey.top/**

Official QQ: **1054466084**

Email: support@maxsso.net

Code Hosting:

Gitee:  https://gitee.com/dromara/MaxKey

GitHub:  https://github.com/dromara/MaxKey

# Product Features

1. Standard Protocols

| Serial Number | Protocol                  | Supported |
| ------------- | ------------------------- | --------- |
| 1.1           | OAuth 2.0/OpenID Connect  | High      |
| 1.2           | SAML 2.0                  | High      |
| 1.3           | JWT                       | High      |
| 1.4           | CAS                       | High      |
| 1.5           | SCIM 2.0                  | High      |
| 1.6           | Form-Based                | Medium    |
| 1.7           | Token-Based (Post/Cookie) | Medium    |
| 1.8           | ExtendApi                 | Low       |
| 1.9           | EXT                       | Low       |

2. Login Support

| Serial Number | Login Method                                                 |
| ------------- | ------------------------------------------------------------ |
| 2.1           | Dynamic Verification Code: Alphabetic/Number/Arithmetic      |
| 2.2           | Two-Factor Authentication                                    |
| 2.3           | SMS Authentication: Tencent Cloud SMS/Alibaba Cloud SMS/NetEase Cloud Messenger |
| 2.4           | EasyLogin/Google/Microsoft Authenticator/FreeOTP/TOTP or HOTP Support |
| 2.5           | Kerberos/SPNEGO/AD Domain                                    |
| 2.6           | OpenLDAP/ActiveDirectory/Standard LDAP Server                |
| 2.7           | Social Accounts: WeChat/QQ/Weibo/DingTalk/Google/Facebook/Other |
| 2.8           | QR Code Login: WeChat for Business/DingTalk/Feishu QR Code Login |

3. Provides standard authentication interfaces to facilitate SSO integration with other applications, secure mobile access, secure APIs, third-party authentication, and internet authentication integration.

4. Provides user lifecycle management, supports the SCIM 2 protocol, and provides out-of-the-box connectors for identity provisioning synchronization.

5. Simplifies organization and account management for Microsoft Active Directory domain controllers and standard LDAP servers, and enables self-service password reset.

6. IDaaS multi-tenancy supports independent management of multiple enterprises within a group or data isolation between different departments within an enterprise, reducing operational costs.

7. The authentication center is platform-agnostic and supports diverse environments, including web, mobile, and mobile devices such as Apple iOS and Android, providing comprehensive authentication capabilities from B/S to mobile applications.

8. Configurable password and access policies; supports precise IP location using IP2region or GeoLite2 geographic databases; and robust security auditing, including user lifecycle audits, access behavior traceability audits, security compliance audits, and security risk alerts.

9. Based on the Java EE platform and a microservices architecture, it utilizes open-source technologies such as Spring, MySQL, Tomcat, Redis, and MQ for strong scalability.

10. Open source, secure, compliant, and self-controllable. License: Apache 2.0 License https://www.maxkey.top/zh/about/licenses.html.

# Interface

![](/assets/img/news/MaxKey-4.1.5-1.png)

# Download

Current Version Network Disk Download

| Version | Date       | Download Link |
| ------- | ---------- | ------------- |
| v 4.1.5 | 2025/01/09 | Download      |

# Version Notes

MaxKey v 4.1.5 GA January 9, 2025

```

*(MAXKEY-250101) Login verification code configuration optimization, now enabled by default
*(MAXKEY-250102) SQL syntax expression enhancements
*(MAXKEY-250103) Changed unlockdate to unlocktime
*(MAXKEY-250104) XSS security optimization
*(MAXKEY-250105) #IBFGSI knife4j bug by zwj
*(MAXKEY-250106) Online documentation upgrade and optimization
*(MAXKEY-250107) Dependency reference, update, and upgrade
mybatis-jpa-extra 3.3.3
```