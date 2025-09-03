---
title: MaxKey单点登录认证系统4.1.3,持久层重大更新
author: MaxKey
date: 2024-11-29
cover: /assets/img/news/MaxKey-4.1.3-0.png
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/MaxKey-4.1.3-0.png)

**业界领先的IAM-IDaas身份管理和认证产品**

# 概述

**MaxKey**单点登录认证系统是**业界领先的IAM-IDaas身份管理和认证产品**，谐音为马克思的钥匙，寓意它能够像一把万能钥匙(最大钥匙)一样，解锁复杂的企业安全需求，提供简洁而高效的解决方案。产品支持OAuth 2.x/OpenID Connect、SAML 2.0、JWT、CAS、SCIM等标准协议，提供**安全、标准和开放**的用户身份管理(IDM)、身份认证(AM)、单点登录(SSO)、RBAC权限管理和资源管理等。

MaxKey注重企业级场景下的性能、安全和易用性，广泛应用于医疗、金融、政府和制造等行业。

官方网站：**官网**

官方QQ：**1054466084**

邮箱email：\*\*support@maxsso.net\*\*

代码托管：**Gitee**|**GitHub**

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

10.开源、安全、合规、自主可控，许可证 Apache 2.0 License 。

# 界面

![](/assets/img/news/MaxKey-4.1.3-1.png)

# 下载

当前版本网盘下载

| 版本 | 日期 | 下载地址 |
| --- | --- | --- |
| v 4.1.3 | 2024/11/29 | 下载 |

# 版本说明

MaxKey v 4.1.3 GA 2024/11/29

```
    *(MAXKEY-240701) #IAZNZS oauth2单点注销没有生效修复
    *(MAXKEY-240702) #238 飞书扫码登录失败
    *(MAXKEY-240703) 升级mybatis-jpa-extra-3.3.2 增加service接口和impl实现
    *(MAXKEY-240704) 把activedirectory相关移动到org.dromara.maxkey.ldap.activedirectory下
    *(MAXKEY-240705) 增加 maxkey-authentication-provider-mgt
    *(MAXKEY-240706) maxkey.auth.session.timeout rename to maxkey.auth.jwt.refresh.expires
    *(MAXKEY-240707) 增加公共规则 ConstsRegex
    *(MAXKEY-240708) 认证后跳转判断优化
    *(MAXKEY-240709) #IB1BC9 客户端调用单点注销接口或者maxkey-hmt管理后台页面退出报错：Circular view path [logout]
    *(MAXKEY-240710) oidc wellknown接口优化
    *(MAXKEY-240711) #IAEWN7 well-known/openid-configuration 接口 返回的response_types_supported问题
    *(MAXKEY-240712) 短信验证码服务代码优化
    *(MAXKEY-240713) 分离登录扫码接口
    *(MAXKEY-240714) 登录会话和日志查询优化，增加IP地址归属地显示，删除loginUrl字段
    *(MAXKEY-240715) 宝塔面板安装部署接入
    *(MAXKEY-240716) bean初始化判断的优化
    *(MAXKEY-240717) ALL Project UTF-8
    *(MAXKEY-240718) maxkey-authentications\maxkey-authentication-social -> maxkey-starter\maxkey-starter-social
    *(MAXKEY-240719) 数据库字段自动填充instId，createdBy，createdDate，modifiedBy，modifiedDate
    *(MAXKEY-240720) #235 from khangdc2/circleci-project-setup
    *(MAXKEY-240721) docker-compose & docker 部署更新和优化
    *(MAXKEY-240722) gradle配置文件优化
    *(MAXKEY-240723) 删除代码中无效引用，代码规范化
    *(MAXKEY-240724) HistorySignOnAppInterceptor 改名 HistorySingleSignOnInterceptor 
    *(MAXKEY-240725) mysql升级8.4.2
    *(MAXKEY-240726) #IB71WC 前端本地启动 404 问题
    *(MAXKEY-240727) saml metadata emailAddress support@maxsso.net
    *(MAXKEY-240728) 依赖项引用、更新和升级
            spring 6.2.0
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

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/MaxKey-4.1.3-2.webp)