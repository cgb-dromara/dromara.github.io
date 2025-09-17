---
title: Sa-Token v1.43.0 发布，新增 SSO 单设备注销、消息推送，多 Access-Token 并存能力
author: 2025年05月21日 09:28
date: 2025-05-21
cover: /assets/img/news/Sa-Token-v1.43.0-0.png
head:
  - - meta
    - name: 新闻
---

Sa-Token 是一款 **免费**、**开源** 的轻量级 Java 权限认证框架，主要解决：**登录认证**、**权限认证**、**单点登录**、**OAuth2.0**、**微服务网关鉴权** 等一系列权限相关问题。🔐

![](/assets/img/news/Sa-Token-v1.43.0-0.png)

sa-token-jss--tran

**目前最新版本 `v1.43.0` 已推送至 `Maven` 中央仓库** 🎉，大家可以通过如下方式引入：

```
<!-- Sa-Token 权限认证 -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-spring-boot-starter</artifactId>
    <version>1.43.0</version>
</dependency>
```

该版本包含大量 ⛏️️️新增特性、⛏️底层重构、⛏️️️代码优化 等，下面容我列举几条比较重要的更新内容供大家参阅：

### ⛏️️️️ 更新点1：单点登录模块新增“单设备注销”模式

有单点登录就必然要有单点注销，目前 SSO 单点登录模块包含：单应用注销、单设备注销、全端注销 三种模式，怎么理解三者的差异呢？

举个例子，用户在 Chrome 浏览器 登录了 应用A、应用B、应用C，又在 Firefox 浏览器登录了应用A、应用B，那么此时他：

*   • 点击“单应用注销”后：他只会在应用A注销下线，其它应用依然会保持登录状态。
    
*   • 点击“单设备注销”后：他在 Chrome 浏览器登录的所有应用会一起下线，但是 Firefox 浏览器登录的应用不受影响。
    
*   • 点击“全端注销”后：用户在所有浏览器登录的所以会话一起注销下线。
    

以上几种注销方式仅需通过一行代码或者调用一个接口即可实现，详细可参考在线文档：Sa-Token SSO 单点注销。

### ⛏️️️️ 更新点2：单点登录模块新增消息推送机制

此提案来源于社区交流群中的一位开发者咨询：

![](/assets/img/news/Sa-Token-v1.43.0-1.png)

sa-sso-message-push-tian.png

该开发者指出是否可以在 SSO 模块增加各个系统互相通知 token 续期的功能，以便做到系统之间会话有效期的强同步。

本次更新没有直接增加这两个 API，而是从底层构建了一套消息推送体系，允许 sso-client 端按照特点格式构建一个 http 请求，调用 sso-server 端的 /sso/pushS 接口，sso-server 接收到消息后做出处理回应 sso-client 端。

消息推送是相互的，sso-server 端也可以构建 http 请求，调用 sso-client 端的 /sso/pushC 接口。

消息推送机制是应用与认证中心相互沟通的桥梁，ticket 校验、单点注销等行为都是依赖消息推送机制来实现的。

当然你也可以通过自定义消息处理器的方式，来扩展消息推送能力，这将非常有助于你完成一些应用与认证中心的自定义数据交互。

假设我们现在有如下需求：在 sso-client 获取 sso-server 端指定账号 id 的昵称、头像等信息，即：用户资料的拉取。

首先，我们需要在 sso-server 实现一个消息处理器：

```
@RestController
publicclassSsoServerController {

    // 配置SSO相关参数 
    @Autowired
    privatevoidconfigSso(SaSsoServerTemplate ssoServerTemplate) {

        // 添加消息处理器：userinfo (获取用户资料) （用于为 client 端开放拉取数据的接口）
        ssoServerTemplate.messageHolder.addHandle("userinfo", (ssoTemplate, message) -> {
            System.out.println("收到消息：" + message);

            // 自定义返回结果（模拟）
            return SaResult.ok()
                    .set("id", message.get("loginId"))
                    .set("name", "LinXiaoLin")
                    .set("sex", "女")
                    .set("age", 18);
        });

    }

}
```

在 sso-client 端配置文件里要配置上消息推送的具体地址

```
# sa-token配置 
sa-token:
    # sso-client 相关配置
    sso-client:
        # 应用标识
        client: sso-client3
        # sso-server 端推送消息地址
        push-url: http://sa-sso-server.com:9000/sso/pushS
        # API 接口调用秘钥
        secret-key: SSO-C3-kQwIOrYvnXmSDkwEiFngrKidMcdrgKor
```

然后在需要拉取资料的地方：

```
// 查询我的账号信息：sso-client 前端 -> sso-center 后端 -> sso-server 后端
@RequestMapping("/sso/myInfo")
public Object myInfo() {
    // 如果尚未登录
    if( ! StpUtil.isLogin()) {
        return"尚未登录，无法获取";
    }

    // 获取本地 loginId
    ObjectloginId= StpUtil.getLoginId();

    // 构建消息对象 
    SaSsoMessagemessage=newSaSsoMessage();
    message.setType("userinfo");
    message.set("loginId", loginId);
    
    // 推送至 sso-server，并接收响应数据 
    SaResultresult= SaSsoClientUtil.pushMessageAsSaResult(message);

    // 返回给前端
    return result;
}
```

详细可参考在线文档：Sa-Token SSO 消息推送机制 。

### ⛏️️️️ 更新点3：单点登录新增 resdk 对接模式

Sa-Token SSO 模块一直是支持非 Sa-Token 技术栈、甚至非 java 项目对接的，在之前版本给出的对接方式是 NoSdk 模式。

NoSdk 模式就是指不集成 Sa-Token，直接通过 http 工具类调用接口的方式来对接 SSO-Server。

参考 demo：sa-token-demo-sso3-client-nosdk

该 demo 假设应用端没有使用任何“权限认证框架”，使用最基础的 ServletAPI 进行会话管理，模拟了 `/sso/login`、 `/sso/logout`、 `/sso/logoutCall` 三个接口的处理逻辑。

但是基于以下原因，NoSdk 示例将不再维护：

*   • 1、NoSdk demo 相当于通过 http 工具类再次重写了一遍 Sa-Token SSO 模块代码，繁琐且冗余。
    
*   • 2、重写的代码无法拥有 Sa-Token SSO 模块全部能力，仅能完成基本对接，算是一个简化版 SDK。
    

最新版我们推荐使用 ReSdk 方式进行对接：ReSdk 模式（重写SDK部分方法）：通过重写框架关键步骤点，来对接 SSO-Server。

参考 demo：sa-token-demo-sso3-client-resdk

ReSdk 模式优点：

1、依然支持客户端使用任意技术栈。  
2、仅重写少量部分关键代码，即可完成对接。几乎可以得到 Sa-Token SSO 模块全量能力。

### ⛏️️️️ 更新点4：OAuth2新增多 Access-Token 并存能力。

点击非常高的一个提案：`OAuth2 模块每次生成新的 access_token 时能否保留旧 access_token 依然有效`。

fix issues: #IBHFD1 、 #IBLL4Q 、#724

![](/assets/img/news/Sa-Token-v1.43.0-2.png)

sa-many-access-token-issue1

![](/assets/img/news/Sa-Token-v1.43.0-3.png)

sa-many-access-token-issue2

![](/assets/img/news/Sa-Token-v1.43.0-4.png)

sa-many-access-token-issue3

在之前的版本中，因索引数据结构设计所限，每次申请 `access_token` 时会导致旧 `access_token` 立即失效，新版本重构了索引数据结构，增加了多 `Access-Token` 并存能力。

相关 API 展示：

```
// 获取 AccessTokenModel，无效的 AccessToken 会返回 null
SaOAuth2Util.getAccessToken(accessToken);

// 校验 Access-Token，成功返回 AccessTokenModel，失败则抛出异常
SaOAuth2Util.checkAccessToken(accessToken);

// 获取 Access-Token 列表：此应用下 对 某个用户 签发的所有 Access-token
SaOAuth2Util.getAccessTokenValueList(clientId, loginId);

// 判断：指定 Access-Token 是否具有指定 Scope 列表，返回 true 或 false
SaOAuth2Util.hasAccessTokenScope(accessToken, ...scopes);

// 校验：指定 Access-Token 是否具有指定 Scope 列表，如果不具备则抛出异常
SaOAuth2Util.checkAccessTokenScope(accessToken, ...scopes);

// 获取 Access-Token 所代表的LoginId
SaOAuth2Util.getLoginIdByAccessToken(accessToken);

// 获取 Access-Token 所代表的 clientId
SaOAuth2Util.getClientIdByAccessToken(accessToken);

// 回收一个 Access-Token
SaOAuth2Util.revokeAccessToken(accessToken);

// 回收全部 Access-Token：指定应用下 指定用户 的全部 Access-Token
SaOAuth2Util.revokeAccessTokenByIndex(clientId, loginId);
```

在线文档相关章节：Sa-Token-OAuth2 常用方法

### ⛏️️️️ 更新点5：简化 core 核心包功能模块，进行拆包

在社区群聊中有同学提到目前 sa-token-core 核心包功能过于拥挤复杂。应要求本次将部分功能模块进行删减，转移到了 plugin 包下：

*   • 拆分：API Key 模块拆分独立插件包：`sa-token-apikey`。
    
*   • 拆分：API Sign 模块拆分独立插件包：`sa-token-sign`。
    

并且本次更新新增了以下插件包：

*   • 新增：新增 `sa-token-forest` 插件，用于在 Http 请求处理器模块整合 Forest。
    
*   • 新增：新增 `sa-token-okhttps` 插件，用于在 Http 请求处理器模块整合 OkHttps。
    

### 📜 完整更新日志

除了以上提到的几点以外，还有更多更新点无法逐一详细介绍，下面是 v1.43.0 版本的完整更新日志：

*   • core:
    

*   • 新增：`SaLogoutParameter` 新增 `deviceId` 参数，用于控制指定设备 id 的注销。 **\[重要\]**
    
*   • 新增：新增 `SaHttpTemplate` 请求处理器模块。
    
*   • 新增：TOTP 增加 `issuer` 字段。 merge: pr 329
    
*   • 修复：修复 `Http Digest` 认证时 url 上带有查询参数时认证无法通过的问题。merge: pr 334
    
*   • 新增：@SaCheckOr 注解添加 `append` 字段，用于抓取未预先定义的注解类型进行批量注解鉴权。
    
*   • 新增：侦听器 `doRenewTimeout` 方法添加 loginType 参数。
    
*   • 新增：`SaInterceptor` 新增 `beforeAuth` 认证前置函数。
    

*   • SSO：
    

*   • 新增：单点注销支持单设备注销。 **\[重要\]** fix: #IA6ZK0 、#747
    
*   • 新增：新增消息推送机制。 **\[重要\]** fix: #IBGXA7
    
*   • 新增：配置项 clients 用于单独配置每个 client 的授权信息。 **\[重要\]**
    
*   • 新增：配置项 `allowAnonClient` 决定是否启用匿名 client。
    
*   • 新增：SSO 模块新增配置文件方式启用“不同 client 不同秘钥”能力。
    
*   • 重构：sso-client 封装化获取 client 标识值。
    
*   • 新增：新增 SSO Strategy 策略类。
    
*   • 新增：sso-client 新增 `convertCenterIdToLoginId`、`convertLoginIdToCenterId` 策略函数，用于描述本地 LoginId 与认证中心 loginId 的转换规则。
    
*   • 新增：sso-server 新增 `jumpToRedirectUrlNotice` 策略，用于授权重定向跳转之前的通知。
    
*   • 优化：调整整体 SSO 示例代码。
    
*   • 新增：新增 ReSdk 模式对接示例：`sa-token-demo-sso3-client-resdk`。 **\[重要\]**
    
*   • 新增：新增匿名应用模式对接示例：`sa-token-demo-sso3-client-anon`。 **\[重要\]**
    

*   • OAuth2：
    

*   • 新增：`SaClientModel` 新增 `isAutoConfirm` 配置项，用于决定是否允许应用可以自动确认授权。 **\[重要\]**
    
*   • 新增：多 `Access-Token` 并存、多 `Refresh-Token` 并存、多 `Client-Token` 并存能力。 **\[重要\]** fix: #IBHFD1 、 #IBLL4Q 、#724
    
*   • 新增：Scope 分割符支持加号。merge: pr 333
    
*   • 修复：修复 oidc 协议下，当用户数据变动后，id\_token 仍是旧信息的问题。
    
*   • 优化：对 `OAuth2 Password` 认证模式需要重写处理器添加强提醒。
    
*   • 优化：将认证流程回调从 `SaOAuth2ServerConfig` 转移到 `SaOAuth2Strategy`。
    
*   • 新增：新增 `SaOAuth2Strategy.instance.userAuthorizeClientCheck` 策略，用于检查指定用户是否可以授权指定应用。fix: #553
    
*   • 优化：优化调整 `sa-token-oauth2` 模块代码结构及注释。
    
*   • 新增：`currentAccessToken()`、`currentClientToken()`，简化读取 `access_token`、`client_token` 步骤
    

*   • 插件：
    

*   • 新增：新增 `sa-token-forest` 插件，用于在 Http 请求处理器模块整合 Forest。
    
*   • 新增：新增 `sa-token-okhttps` 插件，用于在 Http 请求处理器模块整合 OkHttps。
    
*   • 拆分：API Key 模块拆分独立插件包：`sa-token-apikey`。
    
*   • 拆分：API Sign 模块拆分独立插件包：`sa-token-sign`。
    
*   • 修复：修复 `sa-token-dubbo` 插件部分场景上下文控制出错的问题。
    
*   • 修复：修复 `sa-token-sanck3` `SaSessionForSnack3Customized:getModel` 接收 map 值时会出错的问题。 merge: pr 330
    
*   • 修复：修复使用 `sa-token-redis-template-jdk-serializer` 时反序列化错误。merge: pr 331
    
*   • 修复：`sa-token-snack3` 优化 `objectToJson` 序列化处理（增加类名，但不增加根类名）。
    
*   • 重构：重构 `sa-token-redis-template`、`sa-token-redis-template-jdk-serializer` 插件中 update 方法 ttl 获取方式改为毫秒，以减少 update 时的 ttl 计算误差。 **\[重要\]**
    

*   • 示例：
    

*   • 新增：新增 SSE 鉴权示例。
    

*   • 文档：
    

*   • 新增：新增文档离线版下载。
    
*   • 新增：新增框架功能列表插图。
    
*   • 新增：新增示例：如何在响应式环境下的 Filter 里调用 Sa-Token 同步 API。
    
*   • 新增：新增 QA：在 idea 导入源码，运行报错：java: 程序包cn.dev33.satoken.oauth2不存在。
    
*   • 新增：新增 QA：新增QA：报错：SaTokenContext 上下文尚未初始化。
    
*   • 新增：新增 QA：在 idea 导入源码，运行报错：java: 程序包cn.dev33.satoken.oauth2不存在。
    
*   • 新增：重写路由匹配算法修正为最新写法。
    
*   • 新增：修复 OAuth2 UnionId 章节相关不正确描述。
    
*   • 优化：完善 QA：访问了一个不存在的路由，报错：SaTokenContext 上下文尚未初始化。 fix: #771
    
*   • 优化：补充 sso 模块遗漏的配置字段介绍。
    
*   • 优化：OAuth2-Server 示例添加真正表单。
    
*   • 新增：文档新增重写 `PasswordGrantTypeHandler` 处理器示例。
    
*   • 新增：sso 章节和 oauth2 章节文档增加可重写策略说明。
    

*   • 其它：
    

*   • 新增：readme 新增框架功能介绍图。
    
*   • 新增：SSO 模块新增思维导图说明。
    
*   • 新增：readme 新增 Forest 的友情链接。
    

更新日志在线文档直达链接：https://sa-token.cc/doc.html#/more/update-log

### 🌟 其它

代码仓库地址：https://gitee.com/dromara/sa-token