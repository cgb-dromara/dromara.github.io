<template><div><h2 id="新年好呀" tabindex="-1"><a class="header-anchor" href="#新年好呀"><span>新年好呀</span></a></h2>
<p>没想到在除夕之前还能出一个版本，HertzBeat v1.5.0 发布啦，刚好一月一版。</p>
<p>这个版本我们主要是新提供了 Status Page 状态页面构建功能，用户可以通过赫兹跳动构建自己团队服务的对外状态页面，支持状态页状态与监控实例状态联动，支持发布维护异常事件。</p>
<p><strong>通过 Status Page 轻松向用户传达您产品服务的实时状态</strong></p>
<p><strong>如果你们团队提供用户在线服务，那 Status Page 状态页的重要性我们就不要再一一强调了吧。参考 Github 状态页 https://www.githubstatus.com/ , 阿里云状态页 https://status.aliyun.com/。</strong></p>
<p><strong>提升团队服务的透明度和专业度，增强用户信任，降低沟通成本。还不快来 10 分钟构建一个专属的 Status Page</strong></p>
<figure><img src="/assets/img/news/HertzBeat-1.5.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/HertzBeat-1.5.0-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/HertzBeat-1.5.0-2.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/HertzBeat-1.5.0-3.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/HertzBeat-1.5.0-4.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p><strong>后面在 status page 还会加消息订阅功能等，欢迎在 github issue 上你理想的 status page 功能需求</strong></p>
<p><strong>https://github.com/dromara/hertzbeat/issues</strong></p>
<h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2>
<ul>
<li>support status page function @tomsun28</li>
<li>add new field description in hertzbeat tag detail by @GEM0816g</li>
<li>bugfix: search monitors error when pageable @avvCode</li>
<li>Alert define add export and import function @a-little-fool @yqxxgh</li>
<li>refactor tdengine store code, auto close resource by @Carpe-Wang</li>
<li>alert notice add monitor host by @yqxxgh</li>
<li>snowflake id by @liyin</li>
<li>interface info displays in Mb by @Calvin979</li>
<li>Alert yml config by @zqr10159</li>
<li>more feature, document and bugfix</li>
</ul>
<h2 id="🎡-hertzbeat-介绍" tabindex="-1"><a class="header-anchor" href="#🎡-hertzbeat-介绍"><span>🎡 HertzBeat 介绍</span></a></h2>
<p>HertzBeat 赫兹跳动 是一个易用友好的开源实时监控告警系统，无需 Agent，高性能集群，兼容 Prometheus，提供强大的自定义监控和状态页构建能力。</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ul>
<li>集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，应用程序，数据库，缓存，操作系统，大数据，中间件，Web 服务器，云原生，网络，自定义等监控阈值告警通知一步到位。</li>
<li>易用友好，无需 <code v-pre>Agent</code>，全 <code v-pre>WEB</code> 页面操作，鼠标点一点就能监控告警，零上手学习成本。</li>
<li>将 <code v-pre>Http, Jmx, Ssh, Snmp, Jdbc, Prometheus</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code v-pre>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code v-pre>K8s</code> 或 <code v-pre>Docker</code> 等新的监控类型吗？</li>
<li>兼容 <code v-pre>Prometheus</code> 的系统生态并且更多，只需页面操作就可以监控 <code v-pre>Prometheus</code> 所能监控的。</li>
<li>高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。</li>
<li>自由的告警阈值规则，<code v-pre>邮件</code> <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>钉钉</code> <code v-pre>微信</code> <code v-pre>飞书</code> <code v-pre>短信</code> <code v-pre>Webhook</code> <code v-pre>Server酱</code> 等方式消息及时送达。</li>
<li>提供强大的状态页构建能力，轻松向用户传达您产品服务的实时状态。</li>
</ul>
<p>Github: https://github.com/dromara/hertzbeat</p>
<p>Gitee: https://gitee.com/dromara/hertzbeat</p>
<p>今年就这样了，大家新年快乐！准备去干饭，来个 star 哇！</p>
</div></template>


