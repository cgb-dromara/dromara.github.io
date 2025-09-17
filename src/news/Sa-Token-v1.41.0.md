---
title: Sa-Token v1.41.0 Released – Check Out the Exciting New Features!
author: Sa Kite
date: 2025-03-24
cover: /assets/img/news/Sa-Token-v1.41.0-0.png
head:
  - - meta
    - name: News
---

Sa-Token is a lightweight Java permission authentication framework that primarily addresses a series of permission-related issues such as **login authentication**, **permission authentication**, **single sign-on (SSO)**, **OAuth2.0**, and **microservices gateway authentication**. 🔐

**The latest version `v1.41.0` has been pushed to the `Maven` Central Repository** 🎉. You can include it via the following method:

```xml
<!-- Sa-Token Permission Authentication -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-spring-boot-starter</artifactId>
    <version>1.41.0</version>
</dependency>
```

This version includes a large number of ⛏️ new features, ⛏️ underlying refactoring, ⛏️ code optimizations, and more. Below are some of the more important updates for your reference:

### 🛡️ Update 1: Firewall Module Adds Hooks Extension Mechanism

This update adds several new validation rules to the firewall. The previous rules were:

*   • Allowlist release for paths.
*   • Blacklist interception for paths.
*   • Dangerous character validation for paths.

The newly added rules are:

*   • Forbidden character validation for paths.
*   • Directory traversal character detection (with an optimized detection algorithm).
*   • Request host detection.
*   • Request method detection.
*   • Request header detection.
*   • Request parameter detection.

Furthermore, this update opens up a hooks mechanism, allowing developers to register custom validation rules 🛠️. Refer to the example below:

```java
@PostConstruct
public void saTokenPostConstruct() {
    // Demo of registering a new hook: intercept all requests containing the "pwd" parameter and deny the response
    SaFirewallStrategy.instance.registerHook((req, res, extArg) -> {
        if (req.getParam("pwd") != null) {
            throw new FirewallCheckException("Request must not contain the 'pwd' parameter");
        }
    });
}
```

Direct link to documentation: Sa-Token Firewall 🔗

### 💡 Update 2: New SPI-Based Plugin System

Previously, Sa-Token also had a plugin system, but it relied on SpringBoot's SPI mechanism for component registration.

This registration method had an issue: plugins could only work properly in a SpringBoot environment. In other environments, such as Solon projects, plugins had to be registered manually 😫.

In other words, strictly speaking, these plugins were more like SpringBoot plugins rather than Sa-Token framework plugins 🌐.

To improve plugin versatility, Sa-Token has designed its own SPI mechanism, allowing these plugins to function correctly in more project environments 🚀.

**Step 1:** Implement the plugin registration class. This class needs to `implements SaTokenPlugin` 👨💻:

```java
/**
 * SaToken Plugin Installation: Description of the plugin's purpose
 */
public class SaTokenPluginForXxx implements SaTokenPlugin {
    @Override
    public void install() {
        // Write code that needs to be executed when the project starts, for example:
        // SaManager.setXxx(new SaXxxForXxx());
    }
}
```

**Step 2:** In the project's `resources/META-INF/satoken/` folder 📂, create a file named `cn.dev33.satoken.plugin.SaTokenPlugin`. The content should be the fully qualified name of the plugin registration class:

```
cn.dev33.satoken.plugin.SaTokenPluginForXxx
```

This allows the Sa-Token plugin manager to load this plugin during project startup, execute the `install` method of the plugin registration class, and complete the plugin installation ✅.

Direct link to documentation: Sa-Token Plugin Development Guide 🔗

### 🎛️ Update 3: Refactored Caching System, Separating Data Read/Write from Serialization Operations

In previous versions, Redis integration was often coupled with specific serialization methods. This not only caused a lot of redundant code in Redis-related plugins but also severely limited choices when selecting Redis plugins. ⚠️

This version update completely refactors this module, separating data read/write operations from serialization operations. Each part can now have its own custom implementation class, allowing for flexible expansion ✨. For example:

*   • 1️⃣ SaTokenDao data read/write can choose from different implementations: RedisTemplate, Redisson, ConcurrentHashMap, Hutool-Timed-Cache, etc.
*   • 2️⃣ SaSerializerTemplate serializer can choose different methods: Base64 encoding, Hex encoding, ISO-8859-1 encoding, JSON serialization, etc.
*   • 3️⃣ JSON serialization can choose different components: Jackson, Fastjson, Snack3, etc.

All implementation classes can be selected as needed and freely combined, greatly improving flexibility 🏗️.

### ⚙️ Update 4: SaLoginParameter Login Parameter Class Adds Numerous Configuration Options

SaLoginParameter (formerly SaLoginModel) is used to control certain detailed behaviors during login operations. Newly added configuration options include:

*   • `isConcurrent`: Determines whether to allow concurrent logins for the same account from different locations (true allows simultaneous logins, false forces the new login to kick out the old one). 🌍
*   • `isShare`: When multiple users log into the same account, determines whether they share one token (true means all logins share one token, false means each login creates a new token). 🔄
*   • `maxLoginCount`: The maximum number of concurrent logins for the same account. Clients exceeding this number will be automatically logged out. -1 means unlimited. 🚫
*   • `maxTryTimes`: The maximum number of loop attempts when creating a token, used to ensure token uniqueness (-1 = no loop attempts, use directly). ⏳
*   • `deviceId`: The client device ID for this login, used to determine if a subsequent login is from a trusted device. 📱
*   • `terminalExtraData`: Custom extension data mounted to SaTerminalInfo for this login. 📦

Most of these configuration options were supported in previous versions, but they were defined in the global configuration class SaTokenConfig. This update supports defining these options within SaLoginParameter, making login strategy control more flexible. ✨

### 🚪 Update 5: New SaLogoutParameter Logout Parameter Class

SaLogoutParameter is used to control certain detailed behaviors during logout operations 🎯. For example:

Determine the logout scope via the `Range` parameter:
```java
// Logout scope: TOKEN = only logout the session of the current token, ACCOUNT = logout all client sessions for the loginId pointed to by the current token
StpUtil.logout(new SaLogoutParameter().setRange(SaLogoutRange.TOKEN));
```

Determine which login device types participate in the logout via the `DeviceType` parameter 💻:
```java
// Logout user 10001 from all PC devices; other devices like APP are unaffected
StpUtil.logout(10001, new SaLogoutParameter().setDeviceType("PC"));
```

Other parameters are not listed here individually. Direct link to documentation: Sa-Token Login Parameters & Logout Parameters 🔗

### 🐞 Update 6: Fixed Null Pointer Issues with `StpUtil.setTokenValue("xxx")` and `loginParameter.getIsWriteHeader()`

Nothing much to say here – bugs 🐛 must be fixed.

fix issue：#IBKSM0 🔗

### ✨ Update 7: API Parameter Signature Module Upgrade

*   • 1. Added the `@SaCheckSign` annotation. The API parameter signature module now supports annotation-based authentication. 🆕
*   • 2. Added custom digest algorithms for signatures. Now supports not only MD5 but also SHA1, SHA256, etc., for calculating signatures. 🔐
*   • 3. Added multi-application mode:

Multi-application mode allows using different secret keys and other configuration items when integrating with multiple systems. Configuration example 📝:

```yaml
sa-token:
    # API signature configuration - Multi-application mode
    sign-many:
        # Application 1
        xm-shop:
            secret-key: 0123456789abcdefg
            digest-algo: md5
        # Application 2
        xm-forum:
            secret-key: 0123456789hijklmnopq
            digest-algo: sha256
        # Application 3
        xm-video:
            secret-key: 12341234aaaaccccdddd
            digest-algo: sha512
```

Then, specify the `appid` during signing to get the corresponding SignTemplate for operations 👨💻:

```java
// Create signature example
String paramStr = SaSignMany.getSignTemplate("xm-shop").addSignParamsAndJoin(paramMap);

// Check signature example
SaSignMany.getSignTemplate("xm-shop").checkRequest(SaHolder.getRequest());
```

### ⚡ Update 8: New sa-token-caffeine Plugin for Integrating Caffeine

Caffeine is a high-performance local caching library for Java. This update adds the sa-token-caffeine plugin to use Caffeine as Sa-Token's cache layer for storing session authentication data. 🚀
This further enriches the ecosystem of cache layer plugins for Sa-Token. 🌱

```xml
<!-- Sa-Token Integration with Caffeine -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-caffeine</artifactId>
    <version>1.41.0</version>
</dependency>
```

### 🎪 Update 9: New sa-token-serializer-features Serialization Extension Package

Introducing this plugin provides Sa-Token with some interesting serialization schemes. (For entertainment purposes, not recommended for production 🎭)

For example: Base64 encoding using the periodic table of elements 🧪, special symbols 🔣, or emojis 😊 as the character set for storing data:

![](/assets/img/news/Sa-Token-v1.41.0-0.png)
sa-custom-serializer-yszqb.png

![](/assets/img/news/Sa-Token-v1.41.0-1.png)
sa-custom-serializer-tsfh.png

![](/assets/img/news/Sa-Token-v1.41.0-2.png)
sa-custom-serializer-emoji.png

![](/assets/img/news/Sa-Token-v1.41.0-3.png)
sa-custom-serializer-emoji2.png

### 📜 Full Changelog

Besides the points mentioned above, there are more updates that cannot be detailed individually. Below is the complete changelog for version v1.41.0:

*   • core:
    *   • Fix: Fixed null pointer issues with `StpUtil.setTokenValue("xxx")` and `loginParameter.getIsWriteHeader()`. fix: #IBKSM0
    *   • Fix: Changed the default ban level return value of `SaDisableWrapperInfo.createNotDisabled()` to -2 to ensure compatibility with previous versions.
    *   • Add: Added an SPI-based plugin system. **[Important]**
    *   • Refactor: Refactored the JSON converter module. **[Important]**
    *   • Add: Added a serializer module to control the serialization between `Object` and `String`. **[Important]**
    *   • Refactor: Refactored the firewall module, adding a hooks mechanism. **[Important]**
    *   • Add: Firewall added: Request path forbidden character validation, Host detection, Request method detection, Request header detection, Request parameter detection. Refactored directory traversal character detection algorithm.
    *   • Refactor: Refactored the `SaTokenDao` module, separating serialization from storage operations. **[Important]**
    *   • Refactor: Refactored the default implementation class of `SaTokenDao`, optimizing the underlying design.
    *   • Add: The `isLastingCookie` configuration item can now be defined in the global configuration.
    *   • Refactor: `SaLoginModel` -> `SaLoginParameter`. **[Not backward compatible]**
    *   • Refactor: `TokenSign` -> `SaTerminalInfo`. **[Not backward compatible]**
    *   • Add: `SaTerminalInfo` added `extraData` for custom extension data setting.
    *   • Add: `SaLoginParameter` supports configuring `isConcurrent`, `isShare`, `maxLoginCount`, `maxTryTimes`.
    *   • Add: Added `SaLogoutParameter` to control various details during session logout. **[Important]**
    *   • Add: Added `StpLogic#isTrustDeviceId` method to determine if a specified device is a trusted device.
    *   • Add: Added `StpUtil.getTerminalListByLoginId(loginId)`, `StpUtil.forEachTerminalList(loginId)` methods to更方便地实现单账号会话管理 (more conveniently implement single-account session management).
    *   • Upgrade: API parameter signature configuration supports custom digest algorithms.
    *   • Add: Added `@SaCheckSign` annotation authentication for API signature parameter validation.
    *   • Add: API parameter signature module added multi-application mode. fix: #IAK2BI, #I9SPI1, #IAC0P9 **[Important]**
    *   • Refactor: Global configuration `is-share` default value changed to false. **[Not backward compatible]**
    *   • Refactor: Kicking a user offline or replacing a user offline will now delete the corresponding token-session object by default.
    *   • Optimize: Optimized APIs related to logging out sessions.
    *   • Refactor: Default login device type value changed to DEF. **[Not backward compatible]**
    *   • Refactor: Marked `BCrypt` as `@Deprecated`.
    *   • Add: `sa-token-quick-login` supports `SpringBoot3` projects. fix: #IAFQNE, #673
    *   • Add: `SaTokenConfig` added `replacedRange`, `overflowLogoutMode`, `logoutRange`, `isLogoutKeepFreezeOps`, `isLogoutKeepTokenSession` configuration items.
*   • OAuth2:
    *   • Refactor: Refactored the sa-token-oauth2 plugin, changing the registration process of the annotation authentication handler to SPI plugin loading.
*   • Plugins:
    *   • Add: `sa-token-serializer-features` plugin for implementing various forms of custom character set serialization schemes.
    *   • Add: `sa-token-fastjson` plugin.
    *   • Add: `sa-token-fastjson2` plugin.
    *   • Add: `sa-token-snack3` plugin.
    *   • Add: `sa-token-caffeine` plugin.
*   • Unit Tests:
    *   • Add: `sa-token-json-test` JSON module unit tests.
    *   • Add: `sa-token-serializer-test` serializer module unit tests.
*   • Documentation:
    *   • Add: QA "How to prevent conflicts when multiple projects share the same Redis?"
    *   • Optimize: Added missing related configuration items for the OAuth2 module.
    *   • Optimize: Optimized the description document for the OAuth2 overview chapter.
    *   • Optimize: Improved the documentation for the "SSO User Data Synchronization / Migration" chapter.
    *   • Fix: Added missing project directory structure introduction document.
    *   • Add: Added a new "Login Parameters & Logout Parameters" chapter to the documentation.
    *   • Optimize: Optimized the prompt text for the "Technical Help" button.
    *   • Add: Added `preview-doc.bat` file for one-click document preview startup.
    *   • Improve: Improved Redis integration documentation.
    *   • Add: Added operation examples for single-account session query.
    *   • Add: Added introduction to the kick-user-offline API.
    *   • Add: Added a chapter on custom serialization plugins.
*   • Other:
    *   • Add: Added `sa-token-demo/pom.xml` to allow one-click import of all demo projects in IDEA.
    *   • Delete: Removed unnecessary `.gitignore` files.
    *   • Refactor: Refactored the `sa-token-solon-plugin` plugin.
    *   • Add: Added device lock login example.

Direct link to the online changelog documentation: https://sa-token.cc/doc.html#/more/update-log

### 🌟 Other

Code Repository Address: https://gitee.com/dromara/sa-token

Framework Functional Structure Diagram:

![](/assets/img/news/Sa-Token-v1.41.0-4.png)