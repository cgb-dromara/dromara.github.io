<template><div><p>大家好，<code v-pre>electron-egg 3.9.0</code> 重大更新。</p>
<p>在这个版本里我们做了重大更新，支持了 <code v-pre>go</code> 语言，天生的跨平台、高性能，可以把核心业务用 go 来写，能极大提升了软件体验。</p>
<p>目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！</p>
<figure><img src="/assets/img/news/electron-egg-3.10.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h3 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用"><span>为什么使用</span></a></h3>
<p>桌面软件（办公方向、 个人工具），仍然是未来十几年 PC 端需求之一，提高工作效率</p>
<p>electron 技术是流行趋势，QQ、百度翻译、阿里网盘、迅雷、有道云笔记 ......</p>
<h3 id="开源" tabindex="-1"><a class="header-anchor" href="#开源"><span>开源</span></a></h3>
<p>gitee：https://gitee.com/dromara/electron-egg 4200+</p>
<p>github：https://github.com/dromara/electron-egg 1300+</p>
<h3 id="本次更新" tabindex="-1"><a class="header-anchor" href="#本次更新"><span>本次更新</span></a></h3>
<h3 id="_3-9-0" tabindex="-1"><a class="header-anchor" href="#_3-9-0"><span>3.9.0</span></a></h3>
<p><strong>【重大更新】</strong></p>
<ol>
<li>【增加】新增 ee-go 模块，支持 go 语言，以及众多功能。</li>
<li>【增加】新增 ee-bin dev for go。</li>
<li>【增加】新增 ee-bin dev 配置 electron.loadingPage。</li>
<li>【增加】新增 ee-core cross 模块，支持跨语言服务。</li>
<li>【增加】新增 ee-core 生产环境配置 loadingPage。</li>
<li>【优化】优化 ee-bin dev --serve 支持自定义命令。</li>
<li>【优化】优化 ee-bin exec --cmds 支持自定义命令。</li>
<li>【优化】优化 ee-bin build --cmds 支持自定义命令。</li>
<li>【升级】升级 ee-core v2.7.1，升级 ee-bin v1.4.0</li>
</ol>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># gitee</span></span>
<span class="line"><span>git clone https://gitee.com/dromara/electron-egg.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span># github</span></span>
<span class="line"><span>git clone https://github.com/dromara/electron-egg.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 设置国内镜像源(加速)</span></span>
<span class="line"><span>npm config set registry=https://registry.npmmirror.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果下载electron慢，配置如下</span></span>
<span class="line"><span>npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根目录，安装 electron 依赖</span></span>
<span class="line"><span>npm i</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入【前端目录】安装 frontend 依赖</span></span>
<span class="line"><span>cd frontend</span></span>
<span class="line"><span>npm i</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目"><span>运行项目</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm run start</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="/assets/img/news/electron-egg-3.10.0-1.png" alt=""></span></a></h2>
<h3 id="用户案例" tabindex="-1"><a class="header-anchor" href="#用户案例"><span>用户案例</span></a></h3>
<figure><img src="/assets/img/news/electron-egg-3.9.0-2.jpg" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/electron-egg-3.9.0-3.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h3>
<p>访问官网：https://www.kaka996.com/</p>
</div></template>


