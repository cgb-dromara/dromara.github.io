<template><div><p>项目简介</p>
<p>Domain Admin是一个SSL证书申请，自动续期，到期监控工具</p>
<p>1、Domain Admin 采用的技术栈</p>
<ul>
<li>
<p>后端：Python</p>
</li>
<li>
<p>前端：Vue3.js</p>
</li>
</ul>
<p>2、主要功能</p>
<ul>
<li>
<p><code v-pre>证书监控</code>：统一集中式的证书监控，让你零散的网站SSL证书统一管理</p>
</li>
<li>
<p><code v-pre>证书申请</code>：集成了<code v-pre>Let’s Encrypt</code>、<code v-pre>Zero SSL</code>免费申请SSL证书，并且支持自动续期</p>
</li>
<li>
<p><code v-pre>到期通知</code>：到期前邮件、企业微信、钉钉、飞书等渠道通知。给自动续期再加一个保险</p>
</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>Domain Admin支持多种安装方式，例如使用docker可以很方便的安装</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 本地文件夹和容器文件夹映射</span></span>
<span class="line"><span>$ docker run \</span></span>
<span class="line"><span>-v $(pwd)/database:/app/database \</span></span>
<span class="line"><span>-v $(pwd)/logs:/app/logs \</span></span>
<span class="line"><span>-p 8000:8000 \</span></span>
<span class="line"><span>--name domain-admin \</span></span>
<span class="line"><span>mouday/domain-admin:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览"><span>预览</span></a></h2>
<p>在线预览地址（账号密码随意）：</p>
<p>https://mouday.github.io/domain-admin-web/</p>
<p>登录</p>
<figure><img src="/assets/img/news/DomainAdmin-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>首页</p>
<figure><img src="/assets/img/news/DomainAdmin-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>证书监控</p>
<figure><img src="/assets/img/news/DomainAdmin-2.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>证书申请</p>
<figure><img src="/assets/img/news/DomainAdmin-3.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>该项目已加入 <code v-pre>Dromara开源社区</code></p>
<p>项目地址：</p>
<p>https://github.com/dromara/domain-admin</p>
</div></template>


