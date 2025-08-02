<template><div><h3 id="hertzbeat-介绍" tabindex="-1"><a class="header-anchor" href="#hertzbeat-介绍"><span>HertzBeat 介绍</span></a></h3>
<blockquote>
<p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。<br>
致力于<strong>易用友好</strong>，全 WEB 页面操作，鼠标点一点就能监控告警，零上手学习成本。<br>
集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。<br>
支持更自由化的阈值规则，<code v-pre>邮件</code> <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>钉钉</code> <code v-pre>微信</code> <code v-pre>飞书</code> <code v-pre>短信</code> <code v-pre>Webhook</code> 等方式及时送达。</p>
</blockquote>
<blockquote>
<p>我们将<code v-pre>Http,Jmx,Ssh,Snmp,Jdbc</code>等协议规范可配置化，您只需配置<code v-pre>YML</code>就能使用这些协议去自定义采集任何您想要的指标。</p>
</blockquote>
<p>官网: hertzbeat.com | hertzbeat.dromara.org | tancloud.cn</p>
<figure><img src="/assets/img/news/HertzBeat-1.3.2-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong></p>
<p><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<h3 id="v1-3-2-来了" tabindex="-1"><a class="header-anchor" href="#v1-3-2-来了"><span>v1.3.2 来了</span></a></h3>
<p>**这次累计 27 位小伙伴们的辛苦贡献才出来了这个令人欣喜的版本。****感谢他们！爱心 💗**</p>
<p>这个版本我们支持对<strong>freebsd, debian, opensuse, redhat, apache doris</strong>等新的监控类型和指标。</p>
<ul>
<li>支持 WEB 页面配置邮件服务器，<strong>取代之前的文件配置</strong></li>
<li>支持告警收敛，<strong>是否遇到了重复告警频繁发送，有了告警收敛马上解决</strong></li>
<li>公共消息队列支持 Kafka，<strong>除了我们默认的内置内存消息队列，也支持了外置 Kafka 消息队列，提升系统性能。</strong></li>
<li>新的监控中心页面，<strong>聚合所有监控类型，不用像之前那样切来切去了。</strong></li>
<li>支持标签分组展示，<strong>把同一业务类别的监控们分组标记，统一管理。</strong></li>
<li>阈值配置不仅仅有表达式，<strong>还支持更人性化的操作 UI，之前的表达式对新人不太友好很容易出错，现在可以直接 UI 操作啦，它可以和表达式互相切换。</strong></li>
<li>还有 HTTP ipv6 等更多功能。</li>
</ul>
<p>修复了大量 BUG，完善文档代码，提高了整体的稳定可用性。更多新功能欢迎探索！</p>
<p>只需要一条 docker 命令即可安装体验 hertzbeat:<br>
<code v-pre>docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat</code></p>
<p>若 dockerhub 网络超时，可以使用下面命令:<br>
<code v-pre>docker run -d -p 1157:1157 --name hertzbeat quay.io/tancloud/hertzbeat</code></p>
<hr>
<p><strong>监控告警全页面操作，0 学习成本，无需修改配置文件加监控，上效果:</strong></p>
<p><img src="/assets/img/news/HertzBeat-1.3.2-2.png" alt="">
<img src="/assets/img/news/HertzBeat-1.3.2-3.png" alt="">
<img src="/assets/img/news/HertzBeat-1.3.2-4.png" alt="">
<img src="/assets/img/news/HertzBeat-1.3.2-5.png" alt="">
<img src="/assets/img/news/HertzBeat-1.3.2-6.png" alt="">
<img src="/assets/img/news/HertzBeat-1.3.2-7.png" alt=""></p>
<hr>
<h2 id="⛄-已支持" tabindex="-1"><a class="header-anchor" href="#⛄-已支持"><span>⛄ 已支持</span></a></h2>
<blockquote>
<p>我们将监控采集类型(mysql,jvm,k8s)都定义为 yml 监控模版，用户可以导入这些模版来支持对应类型的监控!<br>
欢迎大家一起贡献你使用过程中自定义的通用监控类型监控模版。</p>
</blockquote>
<ul>
<li>Website, Port Telnet, Http Api, Ping Connect, Jvm, SiteMap, Ssl Certificate, SpringBoot2, FTP Server, SpringBoot3</li>
<li>Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, DM, OpenGauss, ClickHouse, IoTDB, Redis Cluster, Redis Sentinel</li>
<li>Linux, Ubuntu, CentOS, Windows, EulerOS, Fedora CoreOS, OpenSUSE, Rocky Linux, Red Hat, FreeBSD, AlmaLinux, Debian Linux</li>
<li>Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ</li>
<li>Kubernetes, Docker</li>
<li>CiscoSwitch, HpeSwitch, HuaweiSwitch, TpLinkSwitch, H3cSwitch</li>
<li>和更多自定义监控模版。</li>
<li>通知支持 Discord Slack Telegram 邮件 钉钉 微信 飞书 短信 Webhook。</li>
</ul>
<hr>
<p><strong>欢迎 star 三连来支持我们</strong></p>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong><br>
<strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<p>加微信进交流群哇：</p>
<figure><img src="/assets/img/news/HertzBeat-1.4.1-8.jpg" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


