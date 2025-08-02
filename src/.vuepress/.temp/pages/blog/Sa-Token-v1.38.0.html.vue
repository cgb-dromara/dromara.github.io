<template><div><p>Sa-Token is a lightweight Java permission authentication framework, mainly to solve: login authentication, permission authentication, distributed Session session, single sign-on, OAuth2.0 and a series of permission-related issues.</p>
<p>The framework is adapted to common services such as kicking people offline, automatic renewal, separation of front and back office, and distributed sessions. Through Sa-Token, you can realize the authority authentication part of the system in a 1 simple way.</p>
<p>The Sa-Token v1.38.0 release update includes the following:</p>
<ul>
<li>
<p>• sa-token-core:</p>
</li>
<li>
<p>• Fix: Fix the bug of creating invalid 'SaSession' when the 'StpUtil.getSessionByLoginId(xx)'parameter is null.</p>
</li>
<li>
<p>• Optimization: In the 'SpringBoot 3.x' version, you will be prompted that the dependency has failed to start. (Thanks to 'Uncarbon' for submitting pr)</p>
</li>
<li>
<p>• Optimization: further optimize the permission verification algorithm, hasXxx API will only return true or false, no longer throw exceptions.</p>
</li>
<li>
<p>• Refactoring: 'InvalidContextException' is renamed to 'SaTokenContextException '. *<em>[Backward compatibility processing done ]</em> *</p>
</li>
<li>
<p>• Refactoring: Completely remove the 'getCode()'method in the 'NotPermissionException' exception. *<em>[Outdated API Cleanup ]</em> *</p>
</li>
<li>
<p>• Refactoring: Refactoring the 'SaTokenException' class methods 'throwBy-'&gt;'notTrue', 'throwByNull-'&gt;'notEmpty '. **[Backward compatibility processing has been done ]**</p>
</li>
<li>
<p>• Refactoring: If the 'SessionId' provided by 'StpUtil.getSessionBySessionId' is empty, an exception will be thrown directly instead of returning null. **[not backward compatible ]**</p>
</li>
<li>
<p>• New: Add 'Http Digest' authentication module for simple implementation. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• Refactoring: Change the 'HttpBasic' authentication module package name. *<em>[Backward compatibility processing done ]</em> *</p>
</li>
<li>
<p>• New: The 'StpUtil.getLoginDeviceByToken(xxx)'method is added to obtain the login device type of any token.</p>
</li>
<li>
<p>• New: New' StpUtil.getTokenLastActiveTime()'method is added to obtain the last active time of the current token.</p>
</li>
<li>
<p>• Fix: Fix the problem of &quot;When the specified timeout is less than the global timeout at login, the'Account-Session is valid for the global timeout.</p>
</li>
<li>
<p>• Optimization: When getting 'Token-Session for the first time, its validity period will remain the same as the token validity period instead of the global timeout value.</p>
</li>
<li>
<p>• Remove: Remove the 'isCheckNonce' configuration item of 'SaSignConfig. *<em>[Not backwards compatible ]</em> *</p>
</li>
<li>
<p>• New: 'SaSignTemplate#checkRequest' adds the function of &quot;You can specify participating signature parameters.</p>
</li>
<li>
<p>• Refactoring: Set some encryption algorithms to expire.</p>
</li>
<li>
<p>• Refactoring: Optimize the token read strategy, an empty string will be treated as no token has been committed.</p>
</li>
<li>
<p>• Fix: 'sa-token-bom' complements missing dependencies.</p>
</li>
<li>
<p>• Optimization: Login authentication verification must be passed before level 2 authentication verification.</p>
</li>
<li>
<p>Fix: Fix the bug that cannot return the value correctly when null is passed in' StpUtil.getLoginId(T defaultValue).</p>
</li>
<li>
<p>• sa-token-sso:</p>
</li>
<li>
<p>• Optimization: SSO mode 3, API call signature verification, limited to participate in the signature of the parameter list, more secure.</p>
</li>
<li>
<p>New: New' autoRenewTimeout' configuration item: Whether to automatically renew the validity period of token every time a ticket is issued (according to the global timeout value)</p>
</li>
<li>
<p>• New: 'SaSsoConfig' adds the configuration 'isCheckSign' (whether to verify the parameter signature) to facilitate debugging during local development.</p>
</li>
<li>
<p>• New: 'SaSsoConfig' adds the configuration 'currSsoLogin', which is used to forcibly specify the sso login address of the current system.</p>
</li>
<li>
<p>• Refactoring: Refactoring the sa-token-sso module as a whole to split the code on the 'server' side and the 'client' side. <strong>[Important ]</strong> *<em>[Not backward compatible ]</em> *</p>
</li>
<li>
<p>• Added: 'SaSsoConfig' configuration item 'ssoLogoutCall' is renamed to 'currSsoLogoutCall '. **[Backward compatibility processing has been done ]**</p>
</li>
<li>
<p>• Refactoring: When the mode 3 checks the Ticket, it will also be forced to check the signature in order to call the request. **[not backward compatible ]**</p>
</li>
<li>
<p>• New: Add the 'maxRegClient' configuration item to control the number of clients registered in the mode 3.</p>
</li>
<li>
<p>• New: Add a scheme with different 'secret-key' configurations for different SSO clients. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• Refactoring: The anonymous client will no longer be able to resolve all application tickets. **[not backward compatible ]**</p>
</li>
<li>
<p>• New: Added the 'homeRoute' configuration item: the route to be redirected by default without specifying redirect parameters after logon of '/sso/auth.</p>
</li>
<li>
<p>• Optimization: Optimize the validity period of the login policy. When the SSO client side logs in, the remaining validity period of the session on the SSO server side will be extended.</p>
</li>
<li>
<p>• New: Add the 'checkTicketAppendData' policy function, which is used to append the return information to the sso-client side after checking the ticket.</p>
</li>
<li>
<p>• New: SSO chapter documents new suggestions for user data synchronization/migration scheme.</p>
</li>
<li>
<p>• FIX: Fix a vulnerability where the @ character can bypass the domain name allow list check. *<em>[Vulnerability fix ]</em> *</p>
</li>
<li>
<p>• Fix: Prohibit the &quot;allow-url&quot; configuration item * symbol in the middle position, because this may cause verification to be bypassed. *<em>[Vulnerability fix ]</em> *</p>
</li>
<li>
<p>• New plug-ins/examples:</p>
</li>
<li>
<p>• New: Added plug-in sa-token-hutool-timed-cache to integrate the Hutool cache plug-in TimedCache. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added a simple example of SSM schema integration Sa-Token. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• New: Added Beetl integration Sa-Token simple example. *<em>[Important ]</em> *</p>
</li>
<li>
<p>• Documentation:</p>
</li>
<li>
<p>• Some chapters replace '@ Autowired' with more appropriate' @ PostConstruct'</p>
</li>
<li>
<p>• Added filter execution order change example.</p>
</li>
<li>
<p>• Other:</p>
</li>
<li>
<p>• Optimization: Split the cross-domain processing demo into independent warehouses.</p>
</li>
<li>
<p>• Optimization: Solve the problem that jsckson dependencies cannot be successfully started after springboot integration sa-token.</p>
</li>
<li>
<p>• Optimization: Solve the problem of repeatedly setting keyt keys in the sa-token-jwt module. (Thanks to 'KonBAI' for submission of pr)</p>
</li>
<li>
<p>Optimization: After the jwt mode token expires, the exception description thrown is that the token has expired, instead of the token is invalid.</p>
</li>
<li>
<p>• Fix: Remedies missing listeners in the sa-token-spring-aop module.</p>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;!-- Sa-Token 权限认证 --></span></span>
<span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>cn.dev33&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>sa-token-spring-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>1.38.0&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="code-warehouse-https-gitee-com-dromara-sa-token" tabindex="-1"><a class="header-anchor" href="#code-warehouse-https-gitee-com-dromara-sa-token"><span>Code Warehouse：https://gitee.com/dromara/sa-token</span></a></h4>
<p>Frame function structure diagram</p>
<figure><img src="/assets/img/blog/Sa-Token-v1.38.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Yesterday, I accidentally found a Sa-Token explanation video recorded by a user, with a total of 99 episodes. I was very careful!</p>
<p>[[SaToken Lecture] It's been 4202 years, and I haven't learned Sa-Token yet. It's a domestic lightweight Java permission framework. There is no more complicated spring security!] https://www.bilibili.com/video/BV1Zt421u7gk/</p>
<p>About Dromara</p>
<p>Dromara is an open source community composed of top open source project authors in China. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts involved experience the joy of open source.</p>
<p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p>
<p>**Welcome to the knowledge planet and I interact * *</p>
<figure><img src="/assets/img/qrcode_zsxq.webp" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


