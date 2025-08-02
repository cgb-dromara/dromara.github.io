<template><div><p>Sa-Token 是一个轻量级 Java 权限认证框架，主要解决：登录认证、权限认证、分布式 Session 会话、单点登录、OAuth2.0 等一系列权限相关问题。</p>
<p>框架针对踢人下线、自动续签、前后台分离、分布式会话…… 等常见业务进行 N 多适配，通过 Sa-Token，你可以以一种极简的方式实现系统的权限认证部分</p>
<p>Sa-Token v1.39.0 版本更新包括以下内容：</p>
<ul>
<li>
<p>• 核心：</p>
</li>
<li>
<p>• 升级：重构注解鉴权底层，支持自定义鉴权注解了。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 修复：修复前端提交同名 <code v-pre>Cookie</code> 时的框架错读现象。</p>
</li>
<li>
<p>• 插件：</p>
</li>
<li>
<p>• 修复：修复 <code v-pre>sa-token-quick-login</code> 插件无法正常拦截的问题。</p>
</li>
<li>
<p>• SSO：</p>
</li>
<li>
<p>• 优化：优化 sso-server 前后端分离 demo 代码。</p>
</li>
<li>
<p>• 优化：优化 sso-server 前后端分离时的跳转流程。</p>
</li>
<li>
<p>• OAuth2：</p>
</li>
<li>
<p>• 重构：<code v-pre>sa-token-oauth2</code> 模块整体重构。 <strong>[重要]</strong> <strong>[不向下兼容]</strong></p>
</li>
<li>
<p>• 新增：新增支持自定义 <code v-pre>scope</code> 处理器。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 新增：新增支持自定义 <code v-pre>grant_type</code>。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 新增：新增 <code v-pre>scope</code> 划分等级。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 新增：新增 <code v-pre>oidc</code> 协议支持。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 新增：新增支持默认 <code v-pre>openid</code> 生成算法。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 新增：新增 <code v-pre>OAuth2</code> 注解鉴权支持。 <strong>[重要]</strong></p>
</li>
<li>
<p>• 修复：<code v-pre>redirect_url</code> 参数校验增加规则：不允许出现@字符、*通配符只能出现在最后一位。关联 issue <strong>[重要]</strong></p>
</li>
<li>
<p>• 优化：优化代码注释、异常提示信息。</p>
</li>
<li>
<p>• 升级：兼容 <code v-pre>Http Basic</code> 提交 <code v-pre>client</code> 信息的场景。感谢 github <code v-pre>@CuiGeekYoung</code> 提交的pr。</p>
</li>
<li>
<p>• 升级：兼容 <code v-pre>Bearer Token</code> 方式提交 <code v-pre>access_token</code> 和 <code v-pre>client_token</code>。</p>
</li>
<li>
<p>• 升级：适配拆分式路由。</p>
</li>
<li>
<p>• 新增：将 <code v-pre>scope</code> 字段改为 List 类型。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2Strategy</code> 全局策略接口，定义一些创建 token 的算法策略。</p>
</li>
<li>
<p>• 新增：新增 <code v-pre>addAllowUrls</code> <code v-pre>addContractScopes</code> 方法，简化 <code v-pre>SaClientModel</code> 构建代码。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2Dao</code> 接口，负责数据持久。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2DataLoader</code> 数据加载器接口。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2DataGenerate</code> 数据构造器接口。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2DataConverter</code> 数据转换器接口。</p>
</li>
<li>
<p>• 重构：抽离 <code v-pre>SaOAuth2DataResolver</code> 数据解析器接口。</p>
</li>
<li>
<p>• 重构：重构 <code v-pre>SaOAuth2Handle</code> -&gt; <code v-pre>SaOAuth2ServerProcessor</code> 更方便的逻辑重写。</p>
</li>
<li>
<p>• 重构：重构 <code v-pre>PastToken</code> -&gt; <code v-pre>LowerClientToken</code>。</p>
</li>
<li>
<p>• 新增：新增 <code v-pre>state</code> 值校验，同一 <code v-pre>state</code> 参数不可重复使用。</p>
</li>
<li>
<p>• 优化：完善 <code v-pre>SaOAuth2Util</code> 相关方法，更方便的二次开发。</p>
</li>
<li>
<p>• 新增：新增部分异常类，细分异常 <code v-pre>ClassType</code>。</p>
</li>
<li>
<p>• 优化：优化 <code v-pre>sa-token-oauth2</code> 异常细分状态码。</p>
</li>
<li>
<p>• 文档：</p>
</li>
<li>
<p>• 新增：新增数据结构说明。</p>
</li>
<li>
<p>• 新增：新增不同 <code v-pre>client</code> 不同登录页说明。</p>
</li>
<li>
<p>• 优化：优化文档 [将权限数据放在缓存里] 示例。</p>
</li>
<li>
<p>• 新增：新增 从 Shiro、SpringSecurity、JWT 迁移 示例。 <strong>[重要]</strong></p>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>cn.dev33&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>sa-token-spring-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>1.39.0&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码仓库-https-gitee-com-dromara-sa-token" tabindex="-1"><a class="header-anchor" href="#代码仓库-https-gitee-com-dromara-sa-token"><span>代码仓库：https://gitee.com/dromara/sa-token</span></a></h4>
<p>框架功能结构图</p>
<figure><img src="/assets/img/news/Sa-Token-1.39.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>js</p>
<p>近期发现的录制的与 Sa-Token 相关的视频：</p>
<p>【微服务架构设计与实战】 https://www.bilibili.com/video/BV1nJWWeDEFN</p>
</div></template>


