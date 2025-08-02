<template><div><p>Sa-Token is a lightweight Java permission authentication framework, mainly to solve: login authentication, permission authentication, distributed Session session, single sign-on, OAuth2.0 and a series of permission-related issues.</p>
<p>The framework is adapted to common services such as kicking people offline, automatic renewal, separation of front and back office, and distributed sessions. Through Sa-Token, you can realize the authority authentication part of the system in a 1 simple way.</p>
<p>The Sa-Token v1.39.0 version update includes the following:</p>
<ul>
<li>
<p>• Core:</p>
</li>
<li>
<p>Upgrade: Reconstruct the bottom layer of annotation authentication to support custom authentication annotations. *<em>[Important ]</em> *</p>
</li>
<li>
<p>Fix: Fix the frame misreading phenomenon when the front end submits the namesep' Cookie.</p>
</li>
<li>
<p>• Plug-in:</p>
</li>
<li>
<p>• Fix: Fix the problem that the sa-token-quick-login plug-in cannot block normally.</p>
</li>
<li>
<p>• SSO:</p>
</li>
<li>
<p>Optimization: Optimize the front and back end of the sso-server to separate the demo code.</p>
</li>
<li>
<p>• Optimization: Optimize the jump process when the front and back ends of the sso-server are separated.</p>
</li>
<li>
<p>• OAuth2:</p>
</li>
<li>
<p>• Refactoring: The sa-token-oauth2 module is refactored as a whole. <strong>[Important ]</strong> *<em>[Not backward compatible ]</em> *</p>
</li>
<li>
<p>• New: Added support for custom 'scope' processors. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added support for custom grant_type '. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added 'scope' classification. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added 'oidc' protocol support. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added support for the default 'openid' generation algorithm. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added 'OAuth2' annotation authentication support. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• Fix: Add rules for redirect_url parameter verification: @ characters are not allowed, and * wildcards can only appear in the last 1. Associated issue *<em>[Important ]</em> *</p>
</li>
<li>
<p>• Optimization: Optimize code comments and exception prompt information.</p>
</li>
<li>
<p>• Upgrade: Compatible with scenarios where 'Http Basic' submits 'client' information. Thanks to github '@ CuiGeekYoung' for submitting pr.</p>
</li>
<li>
<p>• Upgrade: Compatible with 'Bearer Token' way to submit 'access_token and 'client_token '.</p>
</li>
<li>
<p>• Upgrade: Adapt split routing.</p>
</li>
<li>
<p>• New: Change 'scope' field to List type.</p>
</li>
<li>
<p>• Refactoring: Separate the 'SaOAuth2Strategy' global policy interface and define some algorithm policies for creating tokens.</p>
</li>
<li>
<p>• New: Added the 'addAllowUrls' 'addContractScopes 'method to simplify the 'SaClientModel' build code.</p>
</li>
<li>
<p>• Refactoring: Withdraw the 'SaOAuth2Dao' interface and be responsible for data persistence.</p>
</li>
<li>
<p>• Refactoring: pulling out the 'SaOAuth2DataLoader' data loader interface.</p>
</li>
<li>
<p>• Refactoring: pull out the 'SaOAuth2DataGenerate' data constructor interface.</p>
</li>
<li>
<p>• Refactoring: Withdraw the 'SaOAuth2DataConverter' data converter interface.</p>
</li>
<li>
<p>• Refactoring: pulling away the 'SaOAuth2DataResolver' data parser interface.</p>
</li>
<li>
<p>• Refactoring: Refactoring 'SaOAuth2Handle' -&gt; 'SaOAuth2ServerProcessor' for a more convenient logical rewrite.</p>
</li>
<li>
<p>• Refactoring: Refactoring 'PastToken' -&gt; 'LowerClientToken '.</p>
</li>
<li>
<p>• New: adds a 'state' value verification. The same 'state' parameter cannot be used repeatedly.</p>
</li>
<li>
<p>• Optimization: improve the 'SaOAuth2Util' related methods, more convenient secondary development.</p>
</li>
<li>
<p>• New: Add some exception classes and subdivide the exception 'ClassType '.</p>
</li>
<li>
<p>• Optimization: Optimize the 'sa-token-oauth2 Exception Subdivision Status Code.</p>
</li>
<li>
<p>• Documentation:</p>
</li>
<li>
<p>• New: Added data structure description.</p>
</li>
<li>
<p>• New: Add different 'client' different logon page description.</p>
</li>
<li>
<p>• Optimize: Optimize the document [Put permission data in cache ] example.</p>
</li>
<li>
<p>• New: Added migration examples from Shiro, SpringSecurity, and JWT. *<em>[Important ]</em> *</p>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>cn.dev33&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>sa-token-spring-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>1.39.0&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="code-warehouse-https-gitee-com-dromara-sa-token" tabindex="-1"><a class="header-anchor" href="#code-warehouse-https-gitee-com-dromara-sa-token"><span>Code Warehouse：https://gitee.com/dromara/sa-token</span></a></h4>
<p>Frame function structure diagram</p>
<figure><img src="/assets/img/news/Sa-Token-1.39.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>js</p>
<p>Recently discovered recorded Sa-Token-related videos:</p>
<p>【Microservice architecture design and actual combat】 https://www.bilibili.com/video/BV1nJWWeDEFN</p>
</div></template>


