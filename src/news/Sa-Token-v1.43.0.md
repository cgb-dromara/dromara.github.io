---
title: "Sa-Token v1.43.0 Released: Adds SSO Single-Device Logout, Message Push, and Multi Access-Token Coexistence Capability"
author: May 21, 2025 09:28
date: 2025-05-21
cover: /assets/img/news/Sa-Token-v1.43.0-0.png
head:
  - - meta
    - name: News
---

Sa-Token is a **free**, **open-source**, lightweight Java permission authentication framework designed to solve a series of permission-related issues: **login authentication**, **permission authentication**, **single sign-on (SSO)**, **OAuth2.0**, **microservices gateway authentication**, and more. 🔐

![](/assets/img/news/Sa-Token-v1.43.0-0.png)

sa-token-jss--tran

**The latest version, `v1.43.0`, has been pushed to the `Maven` Central Repository** 🎉. You can include it via the following dependency:

```xml
<!-- Sa-Token Permission Authentication -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-spring-boot-starter</artifactId>
    <version>1.43.0</version>
</dependency>
```

This version includes a large number of ⛏️ new features, ⛏️ underlying refactoring, ⛏️ code optimizations, and more. Below are some of the more important updates for your reference:

### ⛏️ Update 1: SSO Module Adds "Single-Device Logout" Mode

Where there is single sign-on, there must be single logout. The SSO module now includes three modes: single application logout, single device logout, and full-end logout. How to understand the differences?

For example, a user logs into Application A, B, and C on Chrome browser, and also logs into Application A and B on Firefox browser. Then:

*   • Clicking "Single Application Logout": The user will only be logged out of Application A; other applications remain logged in.
*   • Clicking "Single Device Logout": All applications logged into via the Chrome browser will log out together, but applications logged into via Firefox remain unaffected.
*   • Clicking "Full-End Logout": All sessions across all browsers are logged out simultaneously.

These logout methods can be achieved with just one line of code or a single API call. For details, refer to the online documentation: [Sa-Token SSO Single Logout](https://sa-token.cc/doc.html#/sso/sso-logout).

### ⛏️ Update 2: SSO Module Adds Message Push Mechanism

This proposal originated from a discussion in the community exchange group:

![](/assets/img/news/Sa-Token-v1.43.0-1.png)

sa-sso-message-push-tian.png

The developer inquired about adding functionality for systems to notify each other of token renewals in the SSO module to achieve strong synchronization of session validity periods between systems.

This update doesn't just add these two APIs but builds a underlying message push system from the ground up. It allows an sso-client to construct an HTTP request in a specific format and call the `/sso/pushS` endpoint on the sso-server. The sso-server processes the message and responds to the sso-client.

Message pushing is mutual; the sso-server can also construct HTTP requests to call the `/sso/pushC` endpoint on an sso-client.

The message push mechanism serves as a bridge for communication between applications and the authentication center. Actions like ticket validation and single logout rely on this mechanism.

You can also extend the message push capability by customizing message handlers, which is very helpful for achieving custom data interactions between your application and the authentication center.

Suppose we have the following requirement: An sso-client needs to pull the nickname, avatar, and other information (i.e., user profile data) for a specific account ID from the sso-server.

First, we need to implement a message handler on the sso-server:

```java
@RestController
public class SsoServerController {

    // Configure SSO parameters
    @Autowired
    private void configSso(SaSsoServerTemplate ssoServerTemplate) {

        // Add message handler: userinfo (Get user profile) (Used to expose an interface for client to pull data)
        ssoServerTemplate.messageHolder.addHandle("userinfo", (ssoTemplate, message) -> {
            System.out.println("Message received: " + message);

            // Custom return result (simulated)
            return SaResult.ok()
                    .set("id", message.get("loginId"))
                    .set("name", "LinXiaoLin")
                    .set("sex", "Female")
                    .set("age", 18);
        });

    }

}
```

The sso-client configuration file needs to specify the message push URL:

```yaml
# sa-token configuration
sa-token:
    # sso-client related configuration
    sso-client:
        # Application identifier
        client: sso-client3
        # sso-server message push URL
        push-url: http://sa-sso-server.com:9000/sso/pushS
        # API call secret key
        secret-key: SSO-C3-kQwIOrYvnXmSDkwEiFngrKidMcdrgKor
```

Then, where you need to pull the data:

```java
// Query my account info: sso-client frontend -> sso-center backend -> sso-server backend
@RequestMapping("/sso/myInfo")
public Object myInfo() {
    // If not logged in
    if( ! StpUtil.isLogin()) {
        return "Not logged in, unable to retrieve";
    }

    // Get local loginId
    Object loginId = StpUtil.getLoginId();

    // Build message object
    SaSsoMessage message = new SaSsoMessage();
    message.setType("userinfo");
    message.set("loginId", loginId);

    // Push to sso-server and receive response data
    SaResult result = SaSsoClientUtil.pushMessageAsSaResult(message);

    // Return to frontend
    return result;
}
```

For details, refer to the online documentation: [Sa-Token SSO Message Push Mechanism](https://sa-token.cc/doc.html#/sso/sso-message).

### ⛏️ Update 3: SSO Adds ReSdk Integration Mode

The Sa-Token SSO module has always supported integration with non-Sa-Token tech stacks, even non-Java projects. Previously, the provided integration method was the NoSdk mode.

NoSdk mode means not integrating Sa-Token and directly calling the SSO-Server interfaces via HTTP utility classes.

Reference demo: [sa-token-demo-sso3-client-nosdk](https://gitee.com/dromara/sa-token/tree/master/sa-token-demo/sa-token-demo-sso3-client-nosdk)

This demo assumes the application does not use any "permission authentication framework" and uses the most basic ServletAPI for session management, simulating the handling logic for the `/sso/login`, `/sso/logout`, and `/sso/logoutCall` interfaces.

However, the NoSdk example will no longer be maintained for the following reasons:

*   • 1. The NoSdk demo essentially rewrites the Sa-Token SSO module code using HTTP utility classes, which is cumbersome and redundant.
*   • 2. The rewritten code cannot possess the full capabilities of the Sa-Token SSO module; it can only handle basic integration, making it a simplified SDK.

The latest version recommends using the ReSdk mode for integration: ReSdk Mode (Rewrite部分SDK methods): Integrate with the SSO-Server by overriding key framework methods.

Reference demo: [sa-token-demo-sso3-client-resdk](https://gitee.com/dromara/sa-token/tree/master/sa-token-demo/sa-token-demo-sso3-client-resdk)

Advantages of ReSdk Mode:

1.  Still supports the client using any technology stack.
2.  Integration is achieved by overriding only a small number of key code sections. Almost all capabilities of the Sa-Token SSO module can be obtained.

### ⛏️ Update 4: OAuth2 Adds Multi Access-Token Coexistence Capability

A highly requested proposal: `Can the OAuth2 module keep the old access_token valid when a new one is generated?`.

Fix issues: #IBHFD1, #IBLL4Q, #724

![](/assets/img/news/Sa-Token-v1.43.0-2.png)
sa-many-access-token-issue1

![](/assets/img/news/Sa-Token-v1.43.0-3.png)
sa-many-access-token-issue2

![](/assets/img/news/Sa-Token-v1.43.0-4.png)
sa-many-access-token-issue3

In previous versions, due to limitations in the index data structure design, applying for a new `access_token` would immediately invalidate the old one. The new version refactors the index data structure, adding the capability for multiple `Access-Tokens` to coexist.

Relevant API examples:

```java
// Get AccessTokenModel, returns null for invalid AccessToken
SaOAuth2Util.getAccessToken(accessToken);

// Check Access-Token, returns AccessTokenModel on success, throws exception on failure
SaOAuth2Util.checkAccessToken(accessToken);

// Get Access-Token list: All Access-tokens issued by this application for a specific user
SaOAuth2Util.getAccessTokenValueList(clientId, loginId);

// Check if the specified Access-Token has the specified Scope list, returns true or false
SaOAuth2Util.hasAccessTokenScope(accessToken, ...scopes);

// Verify if the specified Access-Token has the specified Scope list, throws exception if not
SaOAuth2Util.checkAccessTokenScope(accessToken, ...scopes);

// Get the LoginId represented by the Access-Token
SaOAuth2Util.getLoginIdByAccessToken(accessToken);

// Get the clientId represented by the Access-Token
SaOAuth2Util.getClientIdByAccessToken(accessToken);

// Revoke an Access-Token
SaOAuth2Util.revokeAccessToken(accessToken);

// Revoke all Access-Tokens: All Access-Tokens for a specified user under a specified application
SaOAuth2Util.revokeAccessTokenByIndex(clientId, loginId);
```

Relevant online documentation section: [Sa-Token-OAuth2 Common Methods](https://sa-token.cc/doc.html#/oauth2/oauth2-method)

### ⛏️ Update 5: Simplify Core Package Function Modules, Split Packages

Discussions in the community group mentioned that the sa-token-core package was overly crowded and complex. In response, some functional modules have been split off into separate plugin packages:

*   • Split: API Key module split into independent plugin package: `sa-token-apikey`.
*   • Split: API Sign module split into independent plugin package: `sa-token-sign`.

Furthermore, this update adds the following plugin packages:

*   • New: Added `sa-token-forest` plugin for integrating Forest in the HTTP request handler module.
*   • New: Added `sa-token-okhttps` plugin for integrating OkHttps in the HTTP request handler module.

### 📜 Full Changelog

Besides the points mentioned above, there are more updates that cannot be detailed one by one. Below is the complete changelog for version v1.43.0:

*   • core:
    *   • New: `SaLogoutParameter` adds `deviceId` parameter for controlling logout of a specific device id. **[Important]**
    *   • New: Added `SaHttpTemplate` request handler module.
    *   • New: TOTP adds `issuer` field. merge: pr 329
    *   • Fix: Fixed issue where HTTP Digest authentication failed when the URL contained query parameters. merge: pr 334
      • New: @SaCheckOr annotation adds `append` field for capturing undefined annotation types for batch annotation permission checks.
      • New: Listener `doRenewTimeout` method adds loginType parameter.
      • New: `SaInterceptor` adds `beforeAuth` authentication pre-function.

*   • SSO:
    • New: Single logout supports single device logout. **[Important]** fix: #IA6ZK0, #747
    • New: Added message push mechanism. **[Important]** fix: #IBGXA7
    • New: Configuration item `clients` for individually configuring authorization information for each client. **[Important]**
    • New: Configuration item `allowAnonClient` decides whether to enable anonymous clients.
    • New: SSO module adds configuration file method to enable "different secrets for different clients" capability.
    • Refactor: sso-client encapsulation for obtaining client identifier value.
    • New: Added SSO Strategy class.
    • New: sso-client adds `convertCenterIdToLoginId`, `convertLoginIdToCenterId` strategy functions to describe conversion rules between local LoginId and authentication center loginId.
    • New: sso-server adds `jumpToRedirectUrlNotice` strategy for notification before authorization redirect jump.
    • Optimize: Adjust overall SSO example code.
    • New: Added ReSdk mode integration example: `sa-token-demo-sso3-client-resdk`. **[Important]**
    • New: Added anonymous application mode integration example: `sa-token-demo-sso3-client-anon`. **[Important]**

*   • OAuth2:
    • New: `SaClientModel` adds `isAutoConfirm` configuration item to decide whether an application can automatically confirm authorization. **[Important]**
    • New: Multi `Access-Token` coexistence, multi `Refresh-Token` coexistence, multi `Client-Token` coexistence capability. **[Important]** fix: #IBHFD1, #IBLL4Q, #724
    • New: Scope separator supports plus sign. merge: pr 333
    • Fix: Fixed issue under oidc protocol where id_token contained old information after user data changes.
    • Optimize: Added strong reminder that the OAuth2 Password grant mode requires rewriting the handler.
    • Optimize: Moved authentication flow callback from `SaOAuth2ServerConfig` to `SaOAuth2Strategy`.
    • New: Added `SaOAuth2Strategy.instance.userAuthorizeClientCheck` strategy to check if a specified user can authorize a specified application. fix: #553
    • Optimize: Optimized and adjusted the code structure and comments of the `sa-token-oauth2` module.
    • New: `currentAccessToken()`, `currentClientToken()`, simplifying the steps to read `access_token`, `client_token`.

*   • Plugins:
    • New: Added `sa-token-forest` plugin for integrating Forest in the HTTP request handler module.
    • New: Added `sa-token-okhttps` plugin for integrating OkHttps in the HTTP request handler module.
    • Split: API Key module split into independent plugin package: `sa-token-apikey`.
    • Split: API Sign module split into independent plugin package: `sa-token-sign`.
    • Fix: Fixed context control errors in certain scenarios in the `sa-token-dubbo` plugin.
    • Fix: Fixed issue where `SaSessionForSnack3Customized:getModel` in `sa-token-sanck3` would error when receiving map values. merge: pr 330
    • Fix: Fixed deserialization error when using `sa-token-redis-template-jdk-serializer`. merge: pr 331
    • Fix: `sa-token-snack3` optimized `objectToJson` serialization handling (adds class name, but not root class name).
    • Refactor: Refactored `update` method TTL acquisition to milliseconds in `sa-token-redis-template`, `sa-token-redis-template-jdk-serializer` plugins to reduce TTL calculation error during update. **[Important]**

*   • Examples:
    • New: Added SSE authentication example.

*   • Documentation:
    • New: Added offline version download for documentation.
    • New: Added framework feature list illustration.
    • New: Added example: How to call Sa-Token synchronous API in Filter under reactive environment.
    • New: Added QA: Error when importing source code in idea: java: package cn.dev33.satoken.oauth2 does not exist.
    • New: Added QA: Added QA: Error: SaTokenContext context not initialized.
    • New: Added QA: Error when importing source code in idea: java: package cn.dev33.satoken.oauth2 does not exist.
    • New: Rewrote route matching algorithm correction to the latest写法.
    • New: Fixed incorrect descriptions in the OAuth2 UnionId section.
    • Optimize: Improved QA: Accessed a non-existent route, error: SaTokenContext context not initialized. fix: #771
    • Optimize: Added missing configuration field descriptions in the sso module.
    • Optimize: OAuth2-Server example added real form.
    • New: Documentation added example for rewriting `PasswordGrantTypeHandler` handler.
    • New: sso and oauth2 chapters added descriptions of overridable strategies.

*   • Others:
    • New: Readme added framework feature introduction diagram.
    • New: SSO module added mind map explanation.
    • New: Readme added Forest friendship link.

Direct link to the online changelog documentation: [https://sa-token.cc/doc.html#/more/update-log](https://sa-token.cc/doc.html#/more/update-log)

### 🌟 Others

Code repository address: [https://gitee.com/dromara/sa-token](https://gitee.com/dromara/sa-token)