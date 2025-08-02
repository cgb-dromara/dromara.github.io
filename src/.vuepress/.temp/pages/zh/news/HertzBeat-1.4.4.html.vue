<template><div><p>大家早上好，又到了一月一版的时间点，这应该是春节前的最后一个版本，很高兴 HertzBeat 的最新版本 1.4.4 发布啦!</p>
<h3 id="_1-4-4-版本更新简述如下" tabindex="-1"><a class="header-anchor" href="#_1-4-4-版本更新简述如下"><span>1.4.4 版本更新简述如下：</span></a></h3>
<p><strong>新增了对 SNMP V3 版本协议的支持，支持对 Nginx, NebulaGraph, Pop3, Memcached, Hive, DNS, WebSockets, NTP, SMTP 等等一系列新的监控类型。修复了大量 BUG 和文档完善，更多特性欢迎使用探索！</strong></p>
<ul>
<li>support snmp v3 monitoring protocol @TJxiaobao</li>
<li>support monitoring NebulaGraph metrics @ZY945</li>
<li>support monitoring pop3 metrics @a-little-fool</li>
<li>support monitoring memcached metrics @ZY945</li>
<li>support monitoring nginx metrics @a-little-fool</li>
<li>support monitoring hive metrics @a-little-fool</li>
<li>feature: support for dns monitoring by @Calvin979</li>
<li>monitoring the availability of websockets through handshake. by @ZY945</li>
<li>add ntp protocol and support ntp monitoring by @ZY945</li>
<li>add smtp protocol and support smtp monitoring by @ZY945</li>
<li>more feature, document and bugfix</li>
</ul>
<h3 id="什么是-hertzbeat" tabindex="-1"><a class="header-anchor" href="#什么是-hertzbeat"><span>什么是 HertzBeat?</span></a></h3>
<p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，高性能集群，兼容 Prometheus，无需 Agent 的开源实时监控告警系统。</p>
<figure><img src="/assets/img/news/HertzBeat-1.4.4-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ul>
<li>集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，应用程序，数据库，缓存，操作系统，大数据，中间件，Web 服务器，云原生，网络，自定义等监控阈值告警通知一步到位。</li>
<li>易用友好，无需 <code v-pre>Agent</code>，全 <code v-pre>WEB</code> 页面操作，鼠标点一点就能监控告警，零上手学习成本。</li>
<li>将 <code v-pre>Http, Jmx, Ssh, Snmp, Jdbc, Prometheus</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code v-pre>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code v-pre>K8s</code> 或 <code v-pre>Docker</code> 等新的监控类型吗？</li>
<li>兼容 <code v-pre>Prometheus</code> 的系统生态并且更多，只需页面操作就可以监控 <code v-pre>Prometheus</code> 所能监控的。</li>
<li>高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。</li>
<li>自由的告警阈值规则，<code v-pre>邮件</code> <code v-pre>Discord</code> <code v-pre>Slack</code> <code v-pre>Telegram</code> <code v-pre>钉钉</code> <code v-pre>微信</code> <code v-pre>飞书</code> <code v-pre>短信</code> <code v-pre>Webhook</code> <code v-pre>Server酱</code> 等方式消息及时送达。</li>
</ul>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong></p>
<p><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<h3 id="尝试部署" tabindex="-1"><a class="header-anchor" href="#尝试部署"><span>尝试部署</span></a></h3>
<ol>
<li><code v-pre>docker</code> 环境仅需一条命令即可开始</li>
</ol>
<p><code v-pre>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat</code></p>
<hr>
<h3 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h3>
<blockquote>
<p>欢迎探索更多，感谢社区小伙伴们的辛苦贡献, 笔芯 💗!</p>
</blockquote>
<ul>
<li>bugfix metrics tags value store jpa data-storage error by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1403</li>
<li>add smtp protocol and support smtp monitoring by @ZY945 in https://github.com/dromara/hertzbeat/pull/1407</li>
<li>add ZY945 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1409</li>
<li>support new parse type 'log' in ssh collect protocol by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1410</li>
<li>add ntp protocol and support ntp monitoring by @ZY945 in https://github.com/dromara/hertzbeat/pull/1411</li>
<li>monitoring the availability of websockets through handshake. by @ZY945 in https://github.com/dromara/hertzbeat/pull/1413</li>
<li>[Task-1386] When adding tags in tag management, random colors are given by default. by @prolevel1 in https://github.com/dromara/hertzbeat/pull/1412</li>
<li>add prolevel1 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1415</li>
<li>#1397 feature: support for dns monitoring by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1416</li>
<li>Support monitoring hive metrics by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1417</li>
<li>support legend pageable in history data charts by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1414</li>
<li>update component tip and help tip doc by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1418</li>
<li>feature: support monitoring nginx metrics and add a help doc by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1420</li>
<li>update parser to parse from prometheus txt metrics data by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1421</li>
<li>support monitoring memcached metrics and add a help doc by @ZY945 in https://github.com/dromara/hertzbeat/pull/1423</li>
<li>support all ssh connect key exchange by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1424</li>
<li>[doc] add code of conduct by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1425</li>
<li>update label structure store in victoria metrics, make it prometheus like by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1426</li>
<li>feature: support monitoring pop3 metrics and add help doc by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1427</li>
<li>Update sidebars.json by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1428</li>
<li>Add zh-cn help doc by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1429</li>
<li>update monitoring state un-manage to unmonitored, update pic by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1430</li>
<li>Add jpa to date type storage by @Clownsw in https://github.com/dromara/hertzbeat/pull/1431</li>
<li>bugfix ^o^ token error, protect metrics api auth by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1434</li>
<li>Add relevant documents for SMTP and NTP by @ZY945 in https://github.com/dromara/hertzbeat/pull/1437</li>
<li>bugfix threshold init error in mysql env by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1435</li>
<li>app-rabbitmq.yml support for international name aliases by @ZY945 in https://github.com/dromara/hertzbeat/pull/1439</li>
<li>fix(*): error create lru-cache-timeout-cleaner thread by @Clownsw in https://github.com/dromara/hertzbeat/pull/1438</li>
<li>app-rabbitmq.yml Modifying Error Fields. by @ZY945 in https://github.com/dromara/hertzbeat/pull/1440</li>
<li>support monitoring NebulaGraph metrics and add help doc by @ZY945 in https://github.com/dromara/hertzbeat/pull/1441</li>
<li>Fix Nginx Collect validateParams function NPE by @Clownsw in https://github.com/dromara/hertzbeat/pull/1442</li>
<li>feature: add metrics i18n for app-springboot3.yml by @liyin in https://github.com/dromara/hertzbeat/pull/1445</li>
<li>feat: add metrics i18n for app-docker.yml by @liyin in https://github.com/dromara/hertzbeat/pull/1446</li>
<li>update docker-compose script and fix version by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1447</li>
<li>bugfix java.lang.IllegalArgumentException: Illegal character in query… by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1443</li>
<li>bugfix delete monitor error after monitor canceled by @ZhangZixuan1994 in https://github.com/dromara/hertzbeat/pull/1451</li>
<li>add ZhangZixuan1994 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1454</li>
<li>remove sleep, probably busy-waiting by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1456</li>
<li>[doc] add new committer ZY945 by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1453</li>
<li>Update app-zookeeper.yml by @hurenjie1 in https://github.com/dromara/hertzbeat/pull/1458</li>
<li>add hurenjie1 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1459</li>
<li>update dashboard ui, remove ssh custom SignatureFactories, update app name by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1460</li>
<li>[Task] Monitoring Template Yml Metrics I18n | 监控模版指标国际化任务认领 #1212 by @tslj1024 in https://github.com/dromara/hertzbeat/pull/1461</li>
<li>add tslj1024 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1462</li>
<li>Add alarm trigger time for alarm restore by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1464</li>
<li>bugfix history range query not work when victoria-metrics store by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1463</li>
<li>bugfix springboot3 translation by @liyin in https://github.com/dromara/hertzbeat/pull/1467</li>
<li>bugfix telegram-notice can not input bot-token by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1465</li>
<li>feat: support hostname target by @ldysdu in https://github.com/dromara/hertzbeat/pull/1455</li>
<li>add ldysdu as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1471</li>
<li>[feature] support snmp v3 monitoring protocol by @TJxiaobao in https://github.com/dromara/hertzbeat/pull/1469</li>
<li>bugfix alarm trigger-times not work when alarm and recovered trigger cyclically by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1468</li>
<li>update switch monitoring metrics i18n by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1472</li>
<li>fixed: snmpv3 contextName bug by @TJxiaobao in https://github.com/dromara/hertzbeat/pull/1473</li>
<li>Fix npt of webhook notify by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1474</li>
<li>[hertzbeat] release hertzbeat version v1.4.4 by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1475</li>
<li>bugfix nginx collect http deadlock error by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1476</li>
<li>alarm calculate ignore metrics collect code - TIMEOUT by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1478</li>
</ul>
<h2 id="new-contributors" tabindex="-1"><a class="header-anchor" href="#new-contributors"><span>New Contributors</span></a></h2>
<ul>
<li>@ZY945 made their first contribution in https://github.com/dromara/hertzbeat/pull/1407</li>
<li>@prolevel1 made their first contribution in https://github.com/dromara/hertzbeat/pull/1412</li>
<li>@ZhangZixuan1994 made their first contribution in https://github.com/dromara/hertzbeat/pull/1451</li>
<li>@hurenjie1 made their first contribution in https://github.com/dromara/hertzbeat/pull/1458</li>
<li>@tslj1024 made their first contribution in https://github.com/dromara/hertzbeat/pull/1461</li>
<li>@ldysdu made their first contribution in https://github.com/dromara/hertzbeat/pull/1455</li>
</ul>
<p><strong>Full Changelog</strong>: https://github.com/dromara/hertzbeat/compare/v1.4.3...v1.4.4</p>
<blockquote>
<p>欢迎来 <strong>Star</strong> 支持一波哦！</p>
</blockquote>
<p><strong>Github: https://github.com/dromara/hertzbeat</strong></p>
<p><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>
<p><strong>Discord: https://discord.gg/eaDqCXgy</strong></p>
</div></template>


