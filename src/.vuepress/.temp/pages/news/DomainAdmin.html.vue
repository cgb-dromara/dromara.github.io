<template><div><p>Project Profile</p>
<p>Domain Admin is an SSL certificate application, automatic renewal, and expiration monitoring tool.</p>
<ol>
<li>Technology stack adopted by Domain Admin</li>
</ol>
<ul>
<li>
<p>Backend: Python</p>
</li>
<li>
<p>Front end: Vue3.js</p>
</li>
</ul>
<ol start="2">
<li>Main functions</li>
</ol>
<ul>
<li>
<p>'Certificate monitoring': Unified and centralized certificate monitoring, allowing you to manage scattered website SSL certificates in a unified way</p>
</li>
<li>
<p>'Certificate Application': Integrates 'Let's Encrypt', 'Zero SSL' to apply for SSL certificate free of charge, and supports automatic renewal</p>
</li>
<li>
<p>'Expiration Notice': pre-expiration email, enterprise WeChat, DingTalk, flying book and other channels. Add another insurance for automatic renewal.</p>
</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>Domain Admin supports multiple installation methods, such as docker, which can be easily installed.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 本地文件夹和容器文件夹映射</span></span>
<span class="line"><span>$ docker run \</span></span>
<span class="line"><span>-v $(pwd)/database:/app/database \</span></span>
<span class="line"><span>-v $(pwd)/logs:/app/logs \</span></span>
<span class="line"><span>-p 8000:8000 \</span></span>
<span class="line"><span>--name domain-admin \</span></span>
<span class="line"><span>mouday/domain-admin:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h2>
<p>Online preview address (account password is optional):</p>
<p>https://mouday.github.io/domain-admin-web/</p>
<p>Login</p>
<figure><img src="/assets/img/news/DomainAdmin-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Home Page</p>
<figure><img src="/assets/img/news/DomainAdmin-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Certificate Monitoring</p>
<figure><img src="/assets/img/news/DomainAdmin-2.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Certificate Request</p>
<figure><img src="/assets/img/news/DomainAdmin-3.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>The project has been added <code v-pre>Dromara开源社区</code></p>
<p>Project Address：</p>
<p>https://github.com/dromara/domain-admin</p>
</div></template>


