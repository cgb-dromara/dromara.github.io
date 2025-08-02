<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p><strong>LiteFlow is an open-source rule engine that allows you to arbitrarily arrange the logic of your system. You can write the logic using scripts, with support for up to six scripting languages. It also supports extensive third-party storage integration. All logic and rules can be hot-swapped, making it a powerful tool for designing and refactoring systems.</strong></p>
<p>LiteFlow is a high-star project on Gitee, which has maintained a very fast growth trend over the past year.</p>
<p>At the same time, LiteFlow is also an excellent community-driven open-source project in China. It has been open-source for nearly 3 years and has been applied to core systems by major companies. Its features and support are very good. The community has over 3500 members. There are 1500 test cases, ensuring quality.</p>
<p>If you are hearing about this project for the first time, you can visit the official website or related homepage to learn more:</p>
<blockquote>
<p>website:</p>
<p>https://liteflow.cc</p>
<p>gitee repo：</p>
<p>https://gitee.com/dromara/liteFlow</p>
<p>github repo：</p>
<p>https://github.com/dromara/liteflow</p>
</blockquote>
<h2 id="new-version-introduction" tabindex="-1"><a class="header-anchor" href="#new-version-introduction"><span>New Version Introduction</span></a></h2>
<p>LiteFlow has released a new version again! Version 2.11.3 mainly fixes some bugs raised in the community.</p>
<p>Version 2.11.3 includes 1 enhancement and 5 fixes in total.</p>
<p>For the SQL plugin, which is probably the most widely used LiteFlow plugin, we have added a new configuration mapping for &quot;enable&quot; in the new version. This allows you to enable or disable certain flows and scripts in the database. For specific documentation, please refer to the chapter on the SQL plugin.</p>
<p>At the same time, we have fixed numerous bugs that were left over from the features introduced in versions 2.11.0 and 2.11.1.</p>
<p>We recommend that users of the 2.11.X series update to this version. The update process is smooth and fully compatible.</p>
<p>We are making rapid progress with every version, thanks to LiteFlow's powerful open-source team and our passion for the open-source cause. We develop each feature carefully, pay attention to each test case, enthusiastically answer every question in the community, sincerely listen to everyone's suggestions, and make every effort to fix every bug.</p>
<p>If you would like to join us, please contact me.</p>
<p>It's that time of year again, the annual Double 11 (November 11th) is here. LiteFlow is currently running in the core business of hundreds of companies. We hope everyone can shop on Double 11, enjoy stable services, and have a smooth experience.</p>
<h2 id="complete-update-list" tabindex="-1"><a class="header-anchor" href="#complete-update-list"><span>Complete update list</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>增强 #I8BPM9 SQL插件增加enable字段的映射</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8BPM9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8BPMD 修复2.11.2中启动parse两次规则的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8BPMD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8BPHS 修复Redis配置源哨兵模式的地址检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8BPHS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8AWHT LiteFlowChainELBuilder.validate()存在bug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8AWHT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8AR0L 组件定义了重试和回滚，回滚也会被重试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8AR0L</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8AF1O 修复redis的订阅模式mode解析的bug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8AF1O</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


