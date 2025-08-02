---
title: HertzBeat 1.4.3新版本发布，Prometheus兼容。CNCF全景图
author: tom
tag:
  - HertzBeat
date: 2023-12-12
cover: /assets/img/news/HertzBeat-1.4.3-0.png
head:
  - - meta
    - name: 新闻
---

### 大家早上好，又到了一月一版的时间点，很高兴 HertzBeat 的最新版本 1.4.3 发布啦!

### 还有一个好消息，很开心上周 HertzBeat 被 CNCF 云原生全景图收录，这也算是对这个开源项目的一个认可，继续冲还有就是后续在云原生能力的更加增强。

![](/assets/img/news/HertzBeat-1.4.3-0.png)

**1.4.3 版本更新简述如下：**

- 三方外部告警上报增强
- 支持 mysql api port website mongodb jvm redis 等监控指标的 i18n 国际化
- Prometheus 生态兼容，支持添加 Prometheus 任务
- 支持使用 VictoriaMetrics 时序数据库作为系统指标数据存储
- 支持监控 Spring Gateway 指标
- 新增更多 Windows 监控指标
- 添加 e2e 测试模块，由 api-testing 支持
- 更多的特性，文档优化和 BUG 修复

> 上面这些特性其中想拿 支持 Prometheus 任务出来说一说。

对 Prometheus 兼容目前 HertzBeat 的能力可以分为三种。

- 在页面添加支持 Prometheus 协议的对端应用或 exporter 即可，无需适配。

> 例如我们监控有暴露 prometheus metrics 接口的 iotdb 数据库，在页面添加任务，即可看到采集数据并阈值告警等，无需提前适配模版。

![](/assets/img/news/HertzBeat-1.4.3-1.png)

![](/assets/img/news/HertzBeat-1.4.3-2.png)

![](/assets/img/news/HertzBeat-1.4.3-3.png)

- 提前根据应用暴露的 Prometheus metrics 接口数据编写监控模版，然后在页面该监控类型即可。需要适配，但指标名称等内容自定义更友好。

> 还是例如这个 iotdb 数据库，我们根据其暴露的 prometheus metrics 接口编写监控模版，然后将其作为一款新的监控类型，然后在页面添加监控资源。

![](/assets/img/news/HertzBeat-1.4.3-4.png)

![](/assets/img/news/HertzBeat-1.4.3-5.png)

![](/assets/img/news/HertzBeat-1.4.3-6.png)

- 第三种能力是当这个资源已经被 prometheus 监控时，我们通过查询 PromQL 从 prometheus server 直接拿这个监控资源的数据来作为采集指标数据。需要编写监控模版配置 PromQL.

> 例如我们自定义监控模版从 prometheus server 拿 kafka 的数据。

![](/assets/img/news/HertzBeat-1.4.3-7.png)

![](/assets/img/news/HertzBeat-1.4.3-8.png)

还有些不足后面还需加强，一个是 prometheus 的资源自动发现，还有就是指标类型 Histogram 还没支持等，后面继续完善优化。  
这一次我们也适配了 VictoriaMetrics 时序数据库作为指标存储层，参考了 VictoriaMetrics 的优雅数据结构设计，我们自己的数据结构也更新了一波。因为 VictoriaMetrics 兼容 PromQL，我们后续可能会考虑深入结合 VictoriaMetrics 的能力做一些高级特性。

### 什么是 HertzBeat?

HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，高性能集群，兼容 Prometheus，无需 Agent 的开源实时监控告警系统。

### 特点

- 集 **监控+告警+通知** 为一体，支持对应用服务，应用程序，数据库，缓存，操作系统，大数据，中间件，Web 服务器，云原生，网络，自定义等监控阈值告警通知一步到位。
- 易用友好，无需 `Agent`，全 `WEB` 页面操作，鼠标点一点就能监控告警，零上手学习成本。
- 将 `Http, Jmx, Ssh, Snmp, Jdbc, Prometheus` 等协议规范可配置化，只需在浏览器配置监控模版 `YML` 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 `K8s` 或 `Docker` 等新的监控类型吗？
- 兼容 `Prometheus` 的系统生态并且更多，只需页面操作就可以监控 `Prometheus` 所能监控的。
- 高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。
- 自由的告警阈值规则，`邮件` `Discord` `Slack` `Telegram` `钉钉` `微信` `飞书` `短信` `Webhook` `Server酱` 等方式消息及时送达。

**Github: https://github.com/dromara/hertzbeat**

**Gitee: https://gitee.com/dromara/hertzbeat**

### 尝试部署

1.  `docker` 环境仅需一条命令即可开始

`docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat`

---

### 更新日志

> 欢迎探索更多，感谢社区小伙伴们的辛苦贡献, 笔芯 💗!

- update package deploy doc by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1330
- bugfix duplicate collect job when update monitor templates by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1332
- bugfix number variable in freemarker template display error by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1334
- \[alerter\] Enhanced reporting of external general alert API by @SurryChen in https://github.com/dromara/hertzbeat/pull/1326
- \[doc\] update hertzbeat-mysql-tdengine readme by @jiashu1024 in https://github.com/dromara/hertzbeat/pull/1335
- add jiashu1024 as a contributor for doc by @allcontributors in https://github.com/dromara/hertzbeat/pull/1336
- app-mysql.yml: Adjust slow query translation by @1036664317 in https://github.com/dromara/hertzbeat/pull/1337
- add 1036664317 as a contributor for doc by @allcontributors in https://github.com/dromara/hertzbeat/pull/1338
- Bump com.google.guava:guava from 31.0.1-jre to 32.0.0-jre by @dependabot in https://github.com/dromara/hertzbeat/pull/1339
- \[feature\] support auto collect metrics by prometheus task by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1342
- \[doc\] add vinci as new committer by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1341
- \[feature\] add tag word cloud in dashboard by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1345
- support custom prometheus endpoint path by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1346
- bugfix tdengine query interval history metrics data with instance error by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1348
- unlimit Alert.java content field length by @xiaoguolong in https://github.com/dromara/hertzbeat/pull/1351
- add xiaoguolong as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1353
- update monitor detail table ui layout by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1352
- \[doc\]add star history by @zqr10159 in https://github.com/dromara/hertzbeat/pull/1356
- feature: app-mongodb.yml by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1359
- alarm threshold support prometheus task metrics by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1354
- support victoriametrics as metrics data storage by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1361
- Add time type to support query_time of mysql and mariadb by @Clownsw in https://github.com/dromara/hertzbeat/pull/1364
- add Clownsw as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1365
- Error occured when I followed running steps to start Front-web by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1366
- add Calvin979 as a contributor for doc by @allcontributors in https://github.com/dromara/hertzbeat/pull/1367
- enriches the cncf landscape by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1368
- Fix flaky test in CollectUtilTest by @bbelide2 in https://github.com/dromara/hertzbeat/pull/1371
- add bbelide2 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1372
- Fix flaky test replaceSmilingPlaceholder by @bbelide2 in https://github.com/dromara/hertzbeat/pull/1373
- add docker-compose script hertzbeat+mysql+victoria-metrics all in one by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1370
- Feature: app-jvm.yml support for international name aliases by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1376
- add Calvin979 as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1377
- feature: support monitoring spring gateway metrics by @a-little-fool in https://github.com/dromara/hertzbeat/pull/1374
- update code comment and doc, bugfix concurrent exception by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1378
- update windows define and accept snmp leaf by @jinyaoMa in https://github.com/dromara/hertzbeat/pull/1379
- add jinyaoMa as a contributor for code by @allcontributors in https://github.com/dromara/hertzbeat/pull/1380
- fix exception when sending email has special chars by @Carpe-Wang in https://github.com/dromara/hertzbeat/pull/1383
- test: add e2e testing for some basic APIs by @LinuxSuRen in https://github.com/dromara/hertzbeat/pull/1387
- add LinuxSuRen as a contributor for code, and test by @allcontributors in https://github.com/dromara/hertzbeat/pull/1389
- bugfix auto generate monitor name error when add monitor by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1384
- bugfix CalculateAlarm execAlertExpression NPE by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1388
- Feature: app-redis.yml support for international name aliases by @Calvin979 in https://github.com/dromara/hertzbeat/pull/1390
- test: add more monitor related e2e testing case by @LinuxSuRen in https://github.com/dromara/hertzbeat/pull/1391
- chore: update the pr template about the e2e testing by @LinuxSuRen in https://github.com/dromara/hertzbeat/pull/1392
- add help header ui when update or add monitors by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1399
- \[hertzbeat\] release hertzbeat version v1.4.3 by @tomsun28 in https://github.com/dromara/hertzbeat/pull/1400

**Full Changelog**: https://github.com/dromara/hertzbeat/compare/v1.4.2...v1.4.3

**Github: https://github.com/dromara/hertzbeat**  
**Gitee: https://gitee.com/dromara/hertzbeat**

\***\*看到不妨 star 下吧**，QQ 交流群：236915833 微信交流群加好友：  
\*\*

 <img src="/assets/img/news/HertzBeat-1.4.1-8.jpg" height="340">
