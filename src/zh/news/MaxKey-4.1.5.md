---
title: MaxKey单点登录认证系统4.1.5,Swagger漏洞修复
author: maxkey
date: 2025-01-09
cover: /assets/img/news/MaxKey-4.1.5-0.webp
head:
  - - meta
    - name: 新闻
---

  

![](/assets/img/news/MaxKey-4.1.5-0.webp)

**业界领先的IAM-IDaas身份管理和认证产品**

# 概述

Dromara **MaxKey**单点登录认证系统是**业界领先的IAM-IDaas身份管理和认证产品**，谐音为马克思的钥匙，寓意它能够像一把万能钥匙(最大钥匙)一样，解锁复杂的企业安全需求，提供简洁而高效的解决方案。产品支持OAuth 2.x/OpenID Connect、SAML 2.0、JWT、CAS、SCIM等标准协议，提供**安全、标准和开放**的用户身份管理(IDM)、身份认证(AM)、单点登录(SSO)、RBAC权限管理和资源管理等。

MaxKey注重企业级场景下的性能、安全和易用性，广泛应用于医疗、金融、政府和制造等行业。

MaxKey **遵循 Apache License, Version 2.0 开源免费**，开源、安全、合规、自主可控。

官方网站：**https://www.maxkey.top/**

官方QQ：**1054466084**

邮箱email：support@maxsso.net

代码托管：

Gitee:  https://gitee.com/dromara/MaxKey 

GitHub:  https://github.com/dromara/MaxKey

  

# 产品特性

1.标准协议

| 序号 | 协议 | 支持 |
| --- | --- | --- |
| 1.1 | OAuth 2.0/OpenID Connect | 高 |
| 1.2 | SAML 2.0 | 高 |
| 1.3 | JWT | 高 |
| 1.4 | CAS | 高 |
| 1.5 | SCIM 2.0 | 高 |
| 1.6 | FormBased | 中 |
| 1.7 | TokenBased(Post/Cookie) | 中 |
| 1.8 | ExtendApi | 低 |
| 1.9 | EXT | 低 |

2.登录支持

| 序号 | 登录方式 |
| --- | --- |
| 2.1 | 动态验证码 字母/数字/算术 |
| 2.2 | 双因素认证 |
| 2.3 | 短信认证 腾讯云短信/阿里云短信/网易云信 |
| 2.4 | 登录易/Google/Microsoft Authenticator/FreeOTP/支持TOTP或者HOTP |
| 2.5 | Kerberos/SPNEGO/AD域 |
| 2.6 | OpenLDAP/ActiveDirectory/标准LDAP服务器 |
| 2.7 | 社交账号 微信/QQ/微博/钉钉/Google/Facebook/其他 |
| 2.8 | 扫码登录 企业微信/钉钉/飞书扫码登录 |

3.提供标准的认证接口以便于其他应用集成SSO，安全的移动接入，安全的API、第三方认证和互联网认证的整合。

4.提供用户生命周期管理，支持SCIM 2协议；开箱即用的连接器(Connector)实现身份供给同步。

5.简化微软Active Directory域控、标准LDAP服务器机构和账号管理，密码自助服务重置密码。

6.IDaas多租户功能，支持集团下多企业独立管理或企业下不同部门数据隔离的，降低运维成本。

7.认证中心具有平台无关性、环境多样性，支持Web、手机、移动设备等, 如Apple iOS，Andriod等，将认证能力从B/S到移动应用全面覆盖。

8.配置化的密码策略、访问策略；支持Ip2region或GeoLite2地理库精准IP定位 ，强大安全审计，对用户全生命周期审计、访问行为记录追溯审计、安全合规审计、安全风险预警。

9.基于Java EE平台，微服务架构，采用Spring、MySQL、Tomcat、Redis、MQ等开源技术，扩展性强。

10.开源、安全、合规、自主可控，许可证 Apache 2.0 License https://www.maxkey.top/zh/about/licenses.html。

# 界面

![](/assets/img/news/MaxKey-4.1.5-1.png)

# 下载

当前版本网盘下载

| 版本 | 日期 | 下载地址 |
| --- | --- | --- |
| v 4.1.5 | 2025/01/09 | 下载 |

# 版本说明

MaxKey v 4.1.5 GA 2025/01/09

```

    *(MAXKEY-250101) 登录验证码配置优化，默认配置启用
    *(MAXKEY-250102) SQL语法表达式增强
    *(MAXKEY-250103) unlockdate 修改为 unlocktime
    *(MAXKEY-250104) Xss 安全防护优化
    *(MAXKEY-250105) #IBFGSI knife4j bug by zwj
    *(MAXKEY-250106) 在线文档升级和优化
    *(MAXKEY-250107) 依赖项引用、更新和升级
            mybatis-jpa-extra  3.3.3
```