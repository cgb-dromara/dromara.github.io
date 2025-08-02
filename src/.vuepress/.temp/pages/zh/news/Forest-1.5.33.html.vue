<template><div><h2 id="forest-介绍" tabindex="-1"><a class="header-anchor" href="#forest-介绍"><span>Forest 介绍</span></a></h2>
<p>Forest 是一个开源的 Java HTTP 客户端框架，它能够将 HTTP 的所有请求信息（包括 URL、Header 以及 Body 等信息）绑定到您自定义的 Interface 方法上，能够通过调用本地接口方法的方式发送 HTTP 请求</p>
<h3 id="获得奖项" tabindex="-1"><a class="header-anchor" href="#获得奖项"><span>获得奖项</span></a></h3>
<ul>
<li>2021 年度 OSC 中国开源项目评选「最受欢迎项目」</li>
<li>2022 年度 OSC 中国开源项目评选「最火热中国开源项目社区」</li>
</ul>
<h3 id="简单的栗子" tabindex="-1"><a class="header-anchor" href="#简单的栗子"><span>简单的栗子</span></a></h3>
<ul>
<li><strong>声明式接口</strong></li>
</ul>
<p>创建一个 interface，并用<code v-pre>@Get</code>注解修饰接口方法。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>public interface MyClient {</span></span>
<span class="line"><span>    @Get("http://localhost:8080/hello")</span></span>
<span class="line"><span>    String hello();</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>@Get</code>注解，将上面的 MyClient 接口中的<code v-pre>simpleRequest()</code>方法绑定了一个 HTTP 请求， 其 URL 为<code v-pre>http://localhost:8080/hello</code>，并默认使用 GET 方式，且将请求响应的数据以 String 的方式返回给调用者</p>
<ul>
<li><strong>编程式接口</strong></li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Forest.get("http://localhost:8080/hello").execute();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>编程式接口则更为简单直接</p>
<h2 id="v1-5-33-新增特性" tabindex="-1"><a class="header-anchor" href="#v1-5-33-新增特性"><span>v1.5.33 新增特性</span></a></h2>
<ul>
<li>增强自定义注解组合</li>
<li>支持 Socks 代理</li>
</ul>
<h3 id="增强自定义注解组合" tabindex="-1"><a class="header-anchor" href="#增强自定义注解组合"><span>增强自定义注解组合</span></a></h3>
<p>组合注解是 Forest 提供的自定义注解的一种方式，这种方式只需定义注解自身，已经绑定上需要组合的注解即可，相比通过需要自定义注解声明周期的方式，要方便快捷不少</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@Documented</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Target({ElementType.METHOD, ElementType.TYPE})</span></span>
<span class="line"><span>// 组合Header注解</span></span>
<span class="line"><span>@Headers("Content-Type: application/json")</span></span>
<span class="line"><span>// 组合Address注解</span></span>
<span class="line"><span>@Address(host = "127.0.0.1", port = 80)</span></span>
<span class="line"><span>public @interface MySite {</span></span>
<span class="line"><span>   // 自定义的 @MySite 注解</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时使用自定义的<code v-pre>@MySite</code>的注解，就相当于加上了<code v-pre>Content-Type: application/json</code>头和<code v-pre>host = &quot;127.0.0.1&quot;, port = 80</code>的根地址</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>// @MySite 等价于</span></span>
<span class="line"><span>// @Header("Content-Type: application/json") + @Address(host = "127.0.0.1", port = 80)</span></span>
<span class="line"><span>@MySite</span></span>
<span class="line"><span>public interface MyClient {</span></span>
<span class="line"><span>   // ... ...</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想更灵活一点，想为<code v-pre>@MySite</code>注解添加<code v-pre>host</code>和<code v-pre>port</code>属性，并覆盖<code v-pre>@Address</code>注解的<code v-pre>host</code>和<code v-pre>port</code>属性，这在以前版本是做不到的，而 v1.5.33 版本可以</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@Documented</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Target({ElementType.METHOD, ElementType.TYPE})</span></span>
<span class="line"><span>// 加上 @RequestAttributes 注解才能解析注解中定义的属性</span></span>
<span class="line"><span>@RequestAttributes</span></span>
<span class="line"><span>// 组合Header注解</span></span>
<span class="line"><span>@Headers("Content-Type: application/json")</span></span>
<span class="line"><span>// 组合Address注解</span></span>
<span class="line"><span>@Address</span></span>
<span class="line"><span>public @interface MySite {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 重写 @Address 注解的 host 属性</span></span>
<span class="line"><span>    @OverrideAttribute</span></span>
<span class="line"><span>    String host();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 重写 @Address 注解的 port 属性</span></span>
<span class="line"><span>    @OverrideAttribute</span></span>
<span class="line"><span>    int port();</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就可以通过<code v-pre>@MySite</code>注解的<code v-pre>host</code>和<code v-pre>port</code>属性从外部传入根地址信息了</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@MySite(host = "127.0.0.1", port = 80)</span></span>
<span class="line"><span>public interface MyClient {</span></span>
<span class="line"><span>   // ... ...</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="socks-协议代理" tabindex="-1"><a class="header-anchor" href="#socks-协议代理"><span>Socks 协议代理</span></a></h3>
<p>在以前版本也可以实现 Socks 代理功能，但需要自定义后端的 OkHttpClient 对象或 Apache 的 HttpClient 对象，然后还要后端 HTTP 框架的 Client 对象绑定自定义的 Socket Connection 部分代码，非常的麻烦。如果再加上 SSL 和用户验证的需求，那更是烦上加烦</p>
<p>而此次 Forest 直接支持了 Socks 协议代理，分别为声明式接口和编程式接口提供了友好的 Api，让事情变成原本就该有的简单</p>
<h4 id="声明式-socks-代理" tabindex="-1"><a class="header-anchor" href="#声明式-socks-代理"><span>声明式 Socks 代理</span></a></h4>
<p>只要加上<code v-pre>@SocksProxy</code>注解，并填上<code v-pre>host</code>和<code v-pre>port</code>就能轻松实现 Socks 代理</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@Post("http://localhost:8080/hello")</span></span>
<span class="line"><span>@SocksProxy(host = "127.0.0.1", port = "1089")</span></span>
<span class="line"><span>String simplePostWithSocksProxy();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上用户密码验证也十分简单</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@Post("http://localhost:8080/hello")</span></span>
<span class="line"><span>@SocksProxy(host = "127.0.0.1", port = "1089", username = "root", password = "xxxxxx")</span></span>
<span class="line"><span>String simplePostWithSocksProxy();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编程式-socks-代理" tabindex="-1"><a class="header-anchor" href="#编程式-socks-代理"><span>编程式 Socks 代理</span></a></h4>
<p>通过静态方法<code v-pre>ForestProxy.socks</code>即可快速构建 Socks 协议代理</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ForestProxy proxy = ForestProxy.socks("127.0.0.1", 3128);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>加上用户密码验证</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ForestProxy proxy = ForestProxy.socks("127.0.0.1", 3128)</span></span>
<span class="line"><span>        .username("foo")  // 验证用户名</span></span>
<span class="line"><span>        .password("bar"); // 验证密码</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官网和仓库地址" tabindex="-1"><a class="header-anchor" href="#官网和仓库地址"><span>官网和仓库地址</span></a></h2>
<blockquote>
<h4 id="官网地址" tabindex="-1"><a class="header-anchor" href="#官网地址"><span>官网地址:</span></a></h4>
<p>http://forest.dtflyx.com</p>
<h4 id="gitee-仓库地址" tabindex="-1"><a class="header-anchor" href="#gitee-仓库地址"><span>Gitee 仓库地址:</span></a></h4>
<p>https://gitee.com/dromara/forest</p>
<h4 id="github-仓库地址" tabindex="-1"><a class="header-anchor" href="#github-仓库地址"><span>Github 仓库地址:</span></a></h4>
<p>https://github.com/dromara/forest</p>
</blockquote>
<h2 id="本次更新内容" tabindex="-1"><a class="header-anchor" href="#本次更新内容"><span>本次更新内容</span></a></h2>
<blockquote>
<ul>
<li>feat: #I6MLMD 支持 socks 代理</li>
<li>feat: 组合注解支持属性重写</li>
<li>fix: #I7UPBR @Body 注解的数组参数无法正常解析为 JSON 数组</li>
<li>fix: #I7F3F0 Content-Type 为 application/xml 的情况下，发送 byte 数组数据错误</li>
<li>fix: #I7QLTS @JSONBody Collectioncodes 报错</li>
<li>add: SocksProxy 注解</li>
<li>add: OverrideAttribute 注解</li>
<li>opt: 优化 URL 更新方式</li>
<li>update: forest-solon-plugin 升级 solon 为：2.4.0</li>
</ul>
</blockquote>
<figure><img src="/assets/img/news/Forest-1.5.33-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


