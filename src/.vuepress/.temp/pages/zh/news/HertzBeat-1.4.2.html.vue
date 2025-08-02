<template><div><blockquote>
<p>哈喽大家早上好，开源实时监控 HertzBeat 新版本 v1.4.2 来啦，欢迎了解使用。</p>
</blockquote>
<p><strong>新版本特性如下</strong></p>
<ul>
<li><strong>自定义消息通知模版特性，开源之夏课题</strong></li>
<li><strong>支持华为云 OBS 存储监控模版文件</strong></li>
<li><strong>支持 MQTT 消息服务器 emqx 监控</strong></li>
<li><strong>支持对 udp 端口可用性监控</strong></li>
<li><strong>更多的特性功能支持和 BUG 修复</strong></li>
<li><strong>安装包内置 JDK 一键启动</strong></li>
</ul>
<p><strong>更多的特性和 BUG 修复欢迎使用探索，1.4.2 版本共有 13 位社区小伙伴们参与，感谢他们的贡献 ❤️</strong></p>
<blockquote>
<p>也欢迎更多朋友加入我们参与开源项目建设，众多 issue 待你认领。</p>
</blockquote>
<p>监控模版指标国际化任务 - https://github.com/dromara/hertzbeat/issues/1212</p>
<h3 id="什么是-hertzbeat" tabindex="-1"><a class="header-anchor" href="#什么是-hertzbeat"><span>什么是 HertzBeat?</span></a></h3>
<p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，高性能集群，无需 Agent 的开源实时监控告警系统。</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ul>
<li>集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等监控阈值告警通知一步到位。</li>
<li>易用友好，无需 <code v-pre>Agent</code>，全 <code v-pre>WEB</code> 页面操作，鼠标点一点就能监控告警，零上手学习成本。</li>
<li>将 <code v-pre>Http,Jmx,Ssh,Snmp,Jdbc</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code v-pre>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code v-pre>K8s</code> 或 <code v-pre>Docker</code> 等新的监控类型吗？</li>
<li>高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。</li>
<li>自由的告警阈值规则，<code v-pre>邮件</code> <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>钉钉</code> <code v-pre>微信</code> <code v-pre>飞书</code> <code v-pre>短信</code> <code v-pre>Webhook</code> 等方式消息及时送达。</li>
</ul>
<blockquote>
<p><code v-pre>HertzBeat</code>的强大自定义，多类型支持，高性能，易扩展，低耦合，希望能帮助开发者和团队快速搭建自有监控系统。<br>
当然我们也提供了对应的 **SAAS 版本监控云服务**，中小团队和个人无需再为监控自有资源而去部署一套监控系统，**登录即可免费开始**。</p>
</blockquote>
<figure><img src="/assets/img/news/HertzBeat-1.4.2-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong></p>
<p><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<h3 id="尝试部署" tabindex="-1"><a class="header-anchor" href="#尝试部署"><span>尝试部署</span></a></h3>
<ol>
<li><code v-pre>docker</code> 环境仅需一条命令即可开始</li>
</ol>
<p><code v-pre>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat</code></p>
<p><code v-pre>或者使用 quay.io (若 dockerhub 网络链接超时)</code></p>
<p><code v-pre>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat</code></p>
<ol start="2">
<li>浏览器访问 <code v-pre>http://localhost:1157</code> 即可开始，默认账号密码 <code v-pre>admin/hertzbeat</code></li>
<li>部署采集器集群</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-e IDENTITY=custom-collector-name</code> : 配置此采集器的唯一性标识符名称，多个采集器名称不能相同，建议自定义英文名称。</li>
<li><code v-pre>-e MANAGER_HOST=127.0.0.1</code> : 配置连接主 HertzBeat 服务的对外 IP。</li>
<li><code v-pre>-e MANAGER_PORT=1158</code> : 配置连接主 HertzBeat 服务的对外端口，默认 1158。</li>
</ul>
<p>更多配置详细步骤参考 通过 Docker 方式安装 HertzBeat</p>
<hr>
<h2 id="⛄-已支持" tabindex="-1"><a class="header-anchor" href="#⛄-已支持"><span>⛄ 已支持</span></a></h2>
<blockquote>
<p>我们将监控采集类型(mysql,jvm,k8s)都定义为 yml 监控模版，用户可以导入这些模版来支持对应类型的监控!<br>
欢迎大家一起贡献你使用过程中自定义的通用监控类型监控模版。</p>
</blockquote>
<ul>
<li>Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server</li>
<li>Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster</li>
<li>Linux, Ubuntu, CentOS, Windows</li>
<li>Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ</li>
<li>Kubernetes, Docker</li>
<li>Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch</li>
<li>and more for your custom monitoring.</li>
<li>Notifications support <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>Mail</code> <code v-pre>Pinning</code> <code v-pre>WeChat</code> <code v-pre>FlyBook</code> <code v-pre>SMS</code> <code v-pre>Webhook</code>.</li>
<li>和更多自定义监控模版。</li>
<li>通知支持 <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>邮件</code> <code v-pre>钉钉</code> <code v-pre>微信</code> <code v-pre>飞书</code> <code v-pre>短信</code> <code v-pre>Webhook</code> <code v-pre>Server酱</code>。</li>
</ul>
<hr>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong><br>
<strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<p><strong>感兴趣的话给个 star 吧，QQ 交流群：236915833 微信交流群加好友：</strong></p>
 <img src="/assets/img/news/HertzBeat-1.4.1-8.jpg" height="340">
</div></template>


