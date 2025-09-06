---
title: MaxKey Single Sign-On Authentication System 4.1.3, Major Persistence Layer Update
author: MaxKey
date: 2024-11-29
cover: /assets/img/news/MaxKey-4.1.3-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/MaxKey-4.1.3-0.png)

**Industry-Leading IAM-IDaas Identity Management and Authentication Product**

# Overview

**MaxKey** Single Sign-On Authentication System is **Industry-Leading IAM-IDaas Identity Management and Authentication Product**. Its name, which sounds like Marx's key, symbolizes that it can unlock complex enterprise security needs like a master key (the biggest key), providing a simple and efficient solution. The product supports standard protocols such as OAuth 2.x/OpenID Connect, SAML 2.0, JWT, CAS, and SCIM, providing secure, standard, and open user identity management (IDM), identity authentication (AM), single sign-on (SSO), RBAC permission management, and resource management.

MaxKey focuses on performance, security, and ease of use in enterprise scenarios and is widely used in industries such as healthcare, finance, government, and manufacturing.

Official Website: **Official Website**

Official QQ: **1054466084**

Email: \*\*support@maxsso.net\*\*

Code Hosting: **Gitee** | **GitHub**

# Product Features

1. Standard Protocols

| Serial Number | Protocol                 | Supported |
| ------------- | ------------------------ | --------- |
| 1.1           | OAuth 2.0/OpenID Connect | High      |
| 1.2           | SAML 2.0                 | High      |
| 1.3           | JWT                      | High      |
| 1.4           | CAS                      | High      |
| 1.5           | SCIM 2.0                 | High      |
| 1.6           | FormBased                | Medium    |
| 1.7           | TokenBased (Post/Cookie) | Medium    |
| 1.8           | ExtendApi                | Low       |
| 1.9           | EXT                      | Low       |

2. Login Support

| Number | Login Method                                                 |
| ------ | ------------------------------------------------------------ |
| 2.1    | Dynamic Verification Code: Alphabets/Numbers/Arithmetic      |
| 2.2    | Two-Factor Authentication                                    |
| 2.3    | SMS Authentication: Tencent Cloud SMS/Alibaba Cloud SMS/NetEase Cloud Messenger |
| 2.4    | EasyLogin/Google/Microsoft Authenticator/FreeOTP/TOTP or HOTP Supported |
| 2.5    | Kerberos/SPNEGO/AD Domain                                    |
| 2.6    | OpenLDAP/ActiveDirectory/Standard LDAP Server                |
| 2.7    | Social Account: WeChat/QQ/Weibo/DingTalk/Google/Facebook/Other |
| 2.8    | QR Code Login: WeChat Enterprise/DingTalk/Feishu QR Code Login |

3. Provides standard authentication interfaces to facilitate SSO integration with other applications, secure mobile access, secure API integration, third-party authentication, and internet authentication integration.

4. Provides user lifecycle management and supports the SCIM 2 protocol; an out-of-the-box connector enables identity provisioning synchronization.

5. Simplifies organization and account management for Microsoft Active Directory domain controllers and standard LDAP servers, and provides self-service password reset.

6. IDaaS multi-tenancy supports independent management of multiple enterprises within a group or data isolation between different departments within an enterprise, reducing operation and maintenance costs.

7. The authentication center is platform-agnostic and supports diverse environments, including web, mobile, and mobile devices such as Apple iOS and Android, providing comprehensive authentication capabilities from B/S to mobile applications.

8. Configurable password and access policies; supports precise IP location using Ip2region or GeoLite2 geographic databases; and robust security auditing, including full user lifecycle audits, access behavior traceability audits, security compliance audits, and security risk warnings.

9. Based on the Java EE platform and a microservices architecture, it utilizes open source technologies such as Spring, MySQL, Tomcat, Redis, and MQ for strong scalability.

10. Open source, secure, compliant, and self-controlled. License: Apache 2.0 License.

# Interface

![](/assets/img/news/MaxKey-4.1.3-1.png)

# Download

Current Version Network Download

| Version | Date       | Download Location |
| ------- | ---------- | ----------------- |
| v 4.1.3 | 2024/11/29 | Download          |

# Version Notes

MaxKey v 4.1.3 GA 2024/11/29

```
*(MAXKEY-240701) #IAZNZS OAuth2 single sign-out issue not working
*(MAXKEY-240702) #238 Feishu QR code login failure
*(MAXKEY-240703) Upgrade mybatis-jpa-extra-3.3.2 to add service interface and impl implementation
*(MAXKEY-240704) Move Active Directory related content to org.dromara.maxkey.ldap.activedirectory
*(MAXKEY-240705) Added maxkey-authentication-provider-mgt
*(MAXKEY-240706) Renamed maxkey.auth.session.timeout to maxkey.auth.jwt.refresh.expires
*(MAXKEY-240707) Added common rule ConstsRegex
*(MAXKEY-240708) Optimized post-authentication redirection
*(MAXKEY-240709) #IB1BC9 Client calls single sign-out API or exits maxkey-hmt admin page with error: Circular view path [logout]
*(MAXKEY-240710) Optimization of the oidc wellknown interface
*(MAXKEY-240711) Issue with the response_types_supported returned by the #IAEWN7 well-known/openid-configuration interface
*(MAXKEY-240712) Optimization of the SMS verification code service code
*(MAXKEY-240713) Separation of the login scan code interface
*(MAXKEY-240714) Optimization of login sessions and log queries, adding IP address location display, and removing the loginUrl field
*(MAXKEY-240715) Baota Panel installation and deployment integration
*(MAXKEY-240716) Optimization of bean initialization judgment
*(MAXKEY-24 0717) ALL Projects UTF-8
*(MAXKEY-240718) maxkey-authentications\maxkey-authentication-social -> maxkey-starter\maxkey-starter-social
*(MAXKEY-240719) Database fields automatically populate instId, createdBy, createdDate, modifiedBy, modifiedDate
*(MAXKEY-240720) #235 from khangdc2/circleci-project-setup
*(MAXKEY-240721) docker-compose & docker deployment updates and optimizations
*(MAX KEY-240722) Optimize Gradle configuration files
*(MAXKEY-240723) Remove invalid references from code and standardize code
*(MAXKEY-240724) Rename HistorySignOnAppInterceptor to HistorySingleSignOnInterceptor
*(MAXKEY-240725) Upgrade MySQL to 8.4.2
*(MAXKEY-240726) #IB71WC 404 issue when starting the front-end locally
*(MAXKEY-240727) SAML metadata email address support@maxsso.net
*(MAXKEY-240728) Dependency references, updates, and upgrades
Spring 6.2 .0
springBoot 3.3.6
springSecurity 6.4.1
springData 3.4.0
springkafka 3.3.0
springcloud 4.1.4
httpcomponentscore5 5.3.1
httpcomponentsclient5 5.4.1
tomcat 10.1.33
log4j 2.24.1
gson 2.11.0
freemarker  2.3.33
```

About Dromara

Dromara is an open source community formed by top open source project authors in China. We provide a range of open source products, solutions, consulting, technical support, and training and certification services, including distributed transactions, popular tools, enterprise-level certification, microservices RPC, operations monitoring, agent monitoring, distributed logging, and scheduling and orchestration. Our technology stack is fully open source and community-neutral, dedicated to providing microservices and cloud-native solutions to users worldwide. Let every open source enthusiast experience the joy of open source.

The Dromara open source community currently boasts over 10 GVP projects with over 100,000 stars, building an open source community of over 10,000 people. Thousands of individuals and teams are using Dromara's open source projects.

**Welcome to join me on Knowledge Planet**

![](/assets/img/news/MaxKey-4.1.3-2.webp)