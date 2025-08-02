<template><div><p><strong>为什么使用</strong></p>
<p>桌面软件（办公方向、 个人工具），仍然是未来十几年 PC 端需求之一，提高工作效率</p>
<p>electron 技术是流行趋势，QQ、百度翻译、阿里网盘、迅雷、有道云笔记 ......</p>
<p><strong>简单</strong></p>
<p>只需懂 JavaScript</p>
<p><strong>开源</strong></p>
<p>gitee：https://gitee.com/dromara/electron-egg 3700+</p>
<p>github：https://github.com/dromara/electron-egg 1000+</p>
<h2 id="本次更新" tabindex="-1"><a class="header-anchor" href="#本次更新"><span>本次更新</span></a></h2>
<p><strong>3.7.0</strong></p>
<ol>
<li>
<p>【增加】新增 config/bin.js 配置文件，统一处理 ee-bin 功能配置项。</p>
</li>
<li>
<p>【增加】新增 ee-bin dev 命令，同时启动 frontend electron 服务。</p>
</li>
<li>
<p>【增加】新增 ee-bin start 命令，使用 node spawn 启动 electron。</p>
</li>
<li>
<p>【增加】新增 ee-bin build 命令，构建出包含 renderer 进程数据的 process。</p>
</li>
<li>
<p>【增加】新增 ee-core boot、failure 页面，优化开发体验。</p>
</li>
<li>
<p>【增加】新增 ee-core jsondb 支持修改数据存储目录。</p>
</li>
<li>
<p>【增加】新增 ee-bin rd 参数，支持 dist、target 参数。</p>
</li>
<li>
<p>【增加】新增 demo 分支，（frontend）loading 动画、登录窗口效果、加载本机图片效果。</p>
</li>
<li>
<p>【增加】新增 demo 分支，（electron）jsondb 目录切换功能、java 插件状态检查功能。</p>
</li>
<li>
<p>【优化】优化 ee-bin 命令的 log 提示，增加颜色效果。</p>
</li>
<li>
<p>【优化】优化 ee-core config.openDevTools 支持传参。</p>
</li>
<li>
<p>【优化】优化 http 服务 listen 参数。</p>
</li>
<li>
<p>【优化】优化 开发体验。</p>
</li>
<li>
<p>【修复】修复 getPort 端口获取 bug。</p>
</li>
<li>
<p>【删除】删除 app.on ('activate')、 app.on ('second-instance')。</p>
</li>
<li>
<p>【升级】升级 ee-core -&gt; v2.5.0、升级 ee-bin -&gt; 1.2.0</p>
</li>
</ol>
<figure><img src="/assets/img/news/electron-egg-3.7.0-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2>
<h3 id="_1-常规桌面软件" tabindex="-1"><a class="header-anchor" href="#_1-常规桌面软件"><span>1. 常规桌面软件</span></a></h3>
<ul>
<li>
<p>windows 平台 - demo
<img src="/assets/img/news/electron-egg-3.7.0-2.png" alt=""></p>
</li>
<li>
<p>macOS 平台 - demo
<img src="/assets/img/news/electron-egg-3.7.0-3.png" alt=""></p>
</li>
<li>
<p>linux 平台 - 国产 UOS、Deepin - demo
<img src="/assets/img/news/electron-egg-3.7.0-4.png" alt=""></p>
</li>
<li>
<p>linux 平台 (ubuntu) - demo
<img src="/assets/img/news/electron-egg-3.7.0-5.png" alt=""></p>
</li>
</ul>
<h3 id="_2-vue、react、web-转换成桌面软件" tabindex="-1"><a class="header-anchor" href="#_2-vue、react、web-转换成桌面软件"><span>2. vue、react、web 转换成桌面软件</span></a></h3>
<ul>
<li>
<p>vue-ant-design（本地）
<img src="/assets/img/news/electron-egg-3.7.0-6.png" alt=""></p>
</li>
<li>
<p>禅道项目管理（web 项目地址）
<img src="/assets/img/news/electron-egg-3.7.0-7.png" alt=""></p>
</li>
</ul>
<h3 id="_3-用户案例" tabindex="-1"><a class="header-anchor" href="#_3-用户案例"><span>3. 用户案例</span></a></h3>
<figure><img src="/assets/img/news/electron-egg-3.7.0-8.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/electron-egg-3.7.0-9.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/electron-egg-3.7.0-10.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h2 id="更多案例" tabindex="-1"><a class="header-anchor" href="#更多案例"><span>更多案例</span></a></h2>
<p>访问官网：electron-egg: 一个入门简单、跨平台、企业级桌面软件开发框架</p>
<p><strong>https://www.kaka996.com/</strong></p>
</div></template>


