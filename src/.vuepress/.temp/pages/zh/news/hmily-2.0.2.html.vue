<template><div><h2 id="hmily-发布-2-0-2-release-版本" tabindex="-1"><a class="header-anchor" href="#hmily-发布-2-0-2-release-版本"><span>Hmily 发布 2.0.2-RELEASE 版本</span></a></h2>
<ul>
<li>
<p>解决 SpringCloud 使用 hystrix 配置线程池策略的问题。</p>
</li>
<li>
<p>新增对 springcloud 内嵌事务调用的问题。</p>
</li>
<li>
<p>新增 Hmily 负载均衡策略。</p>
</li>
<li>
<p>其他 bug 的修护，与代码的优化。</p>
</li>
<li>
<p>去除不必须的第三方 jar 包。</p>
</li>
<li>
<p>零侵入方式的引入。</p>
</li>
</ul>
<h2 id="hmily-对现在流行-rpc-框架以及-spring-的支持情况。" tabindex="-1"><a class="header-anchor" href="#hmily-对现在流行-rpc-框架以及-spring-的支持情况。"><span>Hmily 对现在流行 RPC 框架以及 Spring 的支持情况。</span></a></h2>
<ul>
<li>
<p>dubbo 2.7.0 以下所有版本。</p>
</li>
<li>
<p>Springcloud Dalston 以上版本，包括支持现在的 Finchley 与 Greenwich</p>
</li>
<li>
<p>Motan 所有版本。</p>
</li>
<li>
<p>3.0 以上所有 Spring 版本。</p>
</li>
</ul>
<h2 id="hmily-在-2-0-2-版本对使用者-rpc-集群时候负载均衡策略。" tabindex="-1"><a class="header-anchor" href="#hmily-在-2-0-2-版本对使用者-rpc-集群时候负载均衡策略。"><span>Hmily 在 2.0.2 版本对使用者 RPC 集群时候负载均衡策略。</span></a></h2>
<ul>
<li>hmily 提供了自己实现的负载均衡策略，只是针对加了@Hmily 的接口</li>
</ul>
<p>dubbo 集群配置,配置负载方式为：loadbalance=&quot;hmily&quot;</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dubbo:reference</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"50000"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"org.dromara.hmily.demo.dubbo.account.api.service.AccountService"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"accountService"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                 retries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> actives</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"20"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> loadbalance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hmily"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Springcloud 在调用方的 yml 配置文件中新增：</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmily ：</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">   ribbon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      rule</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hmily-的具体使用文档" tabindex="-1"><a class="header-anchor" href="#hmily-的具体使用文档"><span>Hmily 的具体使用文档：</span></a></h2>
<ul>
<li>
<p>官网文档 ：https://dromara.org/website/zh-cn/docs/hmily/index.html</p>
</li>
<li>
<p>github 地址: https://github.com/yu199195/hmily</p>
</li>
<li>
<p>gitee 地址： https://gitee.com/dromara/hmily</p>
</li>
<li>
<p>欢迎大家 star fork ，提供优秀的代码与建议。</p>
</li>
</ul>
</div></template>


