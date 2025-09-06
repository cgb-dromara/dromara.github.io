---
title: 50 天 36 位小伙伴的贡献，开源实时监控工具 HertzBeat v1.3.1 发布
author: tom
tag:
  - HertzBeat
date: 2023-05-08
cover: /assets/img/news/HertzBeat-1.4.0-1.png
head:
  - - meta
    - name: 新闻
---

## 50 天 36 位小伙伴的贡献，开源实时监控工具 HertzBeat v1.3.1 发布

官网: hertzbeat.dromara.org | hertzbeat.com  | tancloud.cn

### What is HertzBeat?

> HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。  
> 集 **监控+告警+通知** 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。  
> 支持更自由化的阈值规则(计算表达式)，`邮件` `Discord` `Slack` `Telegram` `钉钉` `微信` `飞书` `短信` `Webhook` 等方式及时送达。

> 我们将`Http,Jmx,Ssh,Snmp,Jdbc`等协议规范可配置化，您只需配置`YML`监控模版就能使用这些协议去自定义采集任何您想要的指标。

> 您相信只需定义 YML 就能立刻适配一款 K8s 或 Docker 等新的监控类型吗？

![](/assets/img/news/HertzBeat-1.3.2-1.png)

**Github: https://github.com/dromara/hertzbeat**

**Gitee: https://gitee.com/dromara/hertzbeat**

### v1.3.1 版本来了

经过 51 天总 36 位小伙伴们的贡献迭代更新，HertzBeat v1.3.1 正式发布啦, **推荐升级食用**！

- **支持时序数据库 GreptimeDB (aviatorscript, sofastack 的开源大佬的新项目，点赞) 存储指标数据**，用户可以自由选择喜欢的时序数据库来存储。
- **新增很多朋友期待的监控导入导出功能**，对于导入导出格式 Excel, Json, Yaml，小孩才做选择题，这些我们全都要。
- **支持告警静默功能**，监控服务维护期间，业务升级期间再也不怕无必要的频繁告警了。新增告警静默规则即可，支持一次性时间段和周期性时间静默。
- **支持 openguass influxdb 存储指标数据**，与 HuaweiCloud 的开源活动合作需求，用户可以使用 HuaweiCloud 云上的 openguass influxdb 一键开通接入存储指标数据。
- **新的监控模板概念，我们把所有监控的指标采集定义都视为一个个监控模版** 用户只需要定义一个新的监控模版，就能适配一款新的监控类型，目前官方已支持的监控模版可以访问官网 **https://hertzbeat.com/zh-cn/docs/template** 查看，欢迎大家分享贡献更多自己的监控模版。
- **支持 tdengine3.0, EulerOS 指标和 SpringBoot3 指标, HuaweiCloud sms 发送消息等等**
- **还有更多新功能就不一一详述了，等待你的探索哦**

**感谢 hertzbeat 贡献者们的贡献**！👍👍

**非常欢迎文档,编码,找 BUG,I18n 等各方面的贡献者加入**

---

**只需要一条 docker 命令即可安装体验 hertzbeat**

**`docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat`**

#### Release Doc

**https://github.com/dromara/hertzbeat/releases/tag/v1.3.1**

#### 升级注意 ⚠️.

- 若之前使用的 TDengine 时序数据库，需升级至 TDengine3.0+
- 需要执行 SQL 升级脚本

```
ALTER table hzb_alert_define modify field varchar(255) default null;
COMMIT;
```

---

## ⛄ 已支持

> 我们将监控采集类型(mysql,jvm,k8s)都定义为 yml 监控模版，用户可以导入这些模版来支持对应类型的监控!  
> 欢迎大家一起贡献你使用过程中自定义的通用监控类型监控模版。

- 网站监控,  端口可用性, Http Api, Ping 连通性, Jvm, SiteMap 全站, Ssl 证书, SpringBoot, FTP 服务器
- Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB,  达梦, OpenGauss, ClickHouse, IoTDB, Redis 集群
- Linux, Ubuntu, CentOS, Windows
- Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ
- Kubernetes, Docker
- Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch
- 和更多自定义监控模版。
- 通知支持  `Discord` `Slack` `Telegram` `邮件` `钉钉` `微信` `飞书` `短信` `Webhook`。

---

**欢迎在仓库给颗 Star 小星星来支持我们。**

**Github: https://github.com/dromara/hertzbeat**  
**Gitee: https://gitee.com/dromara/hertzbeat**
