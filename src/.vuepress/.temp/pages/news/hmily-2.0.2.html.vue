<template><div><h2 id="hmily-released-2-0-2-release" tabindex="-1"><a class="header-anchor" href="#hmily-released-2-0-2-release"><span>Hmily released 2.0.2-Release</span></a></h2>
<ul>
<li>
<p>Resolved the issue of SpringCloud using Hystrix to configure thread pool.</p>
</li>
<li>
<p>New issue with SpringCloud embedded transaction calls.</p>
</li>
<li>
<p>Added Hmily load balancing strategy.</p>
</li>
<li>
<p>Other bug fixes and code optimizations.</p>
</li>
<li>
<p>Remove unnecessary third-party JAR packages.</p>
</li>
<li>
<p>Introduction of zero intrusion mode.</p>
</li>
</ul>
<h2 id="hmily-s-support-for-the-popular-rpc-framework-and-spring" tabindex="-1"><a class="header-anchor" href="#hmily-s-support-for-the-popular-rpc-framework-and-spring"><span>Hmily's support for the popular RPC framework and Spring.</span></a></h2>
<ul>
<li>
<p>Dubbo 2.7.0 for all versions below.</p>
</li>
<li>
<p>SpringCloud Dalston and above, including support for Finchley and Greenwich</p>
</li>
<li>
<p>All versions of Motan.</p>
</li>
<li>
<p>All Spring versions up to 3.0.</p>
</li>
</ul>
<h2 id="hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2" tabindex="-1"><a class="header-anchor" href="#hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2"><span>Hmily has a load-balancing policy for user RPC clusters in version 2.0.2.</span></a></h2>
<ul>
<li>
<p>Hmily provides its own implementation of the load-balancing strategy, only for interfaces with @Hmily added</p>
<p>Dubbo cluster configuration with loadbalance=&quot;hmily&quot;</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-xml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dubbo:reference</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"50000"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"org.dromara.hmily.demo.dubbo.account.api.service.AccountService"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"accountService"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                 retries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> actives</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"20"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> loadbalance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hmily"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Cloud added to the caller's YML configuration file:</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yml"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmily ：</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">   ribbon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      rule</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documents" tabindex="-1"><a class="header-anchor" href="#documents"><span>Documents</span></a></h2>
<ul>
<li>
<p>Official document: https://dromara.org/website/zh-cn/docs/hmily/index.html</p>
</li>
<li>
<p>Github: https://github.com/yu199195/hmily</p>
</li>
<li>
<p>Gitee: https://gitee.com/dromara/hmily</p>
<p>Welcome to Star Fork, provide excellent code and suggestions.</p>
</li>
</ul>
</div></template>


