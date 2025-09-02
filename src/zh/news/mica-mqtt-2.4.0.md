---
title: Dromara mica-mqtt 2.4.0 发布
author: mica-mqtt
date: 2024-12-19
cover: /assets/img/news/mica-mqtt-2.4.0-0.png
head:
  - - meta
    - name: 新闻
---

# Dromara mica-mqtt 2.4.0 发布，完善服务端接口，推荐升级

![](/assets/img/news/mica-mqtt-2.4.0-0.png)

## 一、前言

Dromara mica-mqtt **2.4.0** 正式版已经发布，请注意从 `2.4.x` 版本开始将 maven groupId 迁移到了 `org.dromara.mica-mqtt`，包名切换到了 `org.dromara`，并且切换到 central sonatype（不支持快照版）其它使用上均和老版本保持一致。`2.4.x` 将会持续完善和丰富服务端功能，后续版本也会做一些 **大** 的调整和优化，当然我们会尽量 **减少接口变动** 方便大家升级。**强烈推荐** 大家尽快升级到新的 `2.4.x`。

另外由于老的文档散落在各个模块，不方便查看，我们新增了文档站：https://mica-mqtt.dromara.org

## 二、功能

*   支持 MQTT v3.1、v3.1.1 以及 v5.0 协议。
    
*   支持 websocket mqtt 子协议（支持 mqtt.js）。
    
*   支持 http rest api，`http api 文档详见：` https://gitee.com/dromara/mica-mqtt/blob/master/docs/http-api.md
    
*   支持 MQTT client 客户端。
    
*   支持 MQTT server 服务端。
    
*   支持 MQTT 遗嘱消息。
    
*   支持 MQTT 保留消息。
    
*   支持自定义消息（mq）处理转发实现集群。
    
*   MQTT 客户端 阿里云 mqtt 连接 demo。
    
*   支持 GraalVM 编译成本机可执行程序。
    
*   支持 Spring boot、Solon 和 JFinal 项目快速接入。
    
*   mica-mqtt-spring-boot-starter 支持对接 Prometheus + Grafana。
    
*   基于 redis Stream 实现集群，详见 `mica-mqtt-broker 模块：` https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-broker)。
    

## 三、使用场景

*   物联网（云端 mqtt broker）
    
*   物联网（边缘端消息通信）
    
*   群组类 IM
    
*   消息推送
    
*   简单、易用的 mqtt client 客户端
    

## 四、更新记录

*   ✨ http api 添加 `stats`、`clients` 列表和 `client详情` 接口。
    
*   ✨ MqttServer 和 MqttServerTemplate 添加 `getClientInfo` `getClients` 系列客户端信息接口。
    
*   ✨ MqttServer 和 MqttServerTemplate 添加 `getSubscriptions` 获取客户端订阅列表接口。
    
*   ✨ MqttServer 和 MqttServerTemplate 添加 `getStat` 统计接口。
    
*   🚚 调整 maven groupId `net.dreamlu` 到新的 `org.dromara.mica-mqtt`。
    
*   🚚 调整包名 `net.dreamlu.iot.mqtt` 到新的 `org.dromara.mica.mqtt`，其他均保持不变。
    
*   🚚 切换到 central sonatype，central sonatype 不支持快照版，mica-mqtt 不再发布快照版。
    
*   🐛 修复订阅发送时机问题 gitee #IB72L6 感谢 `@江上烽` 反馈
    

## 五、快速上手

### 5.1 Spring boot 项目

**客户端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-spring-boot-starter 使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-spring-boot-starter/README.md

**服务端:**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-spring-boot-starter使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-spring-boot-starter/README.md

### 5.2 solon 项目

**客户端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-solon-plugin 使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-solon-plugin/README.md

**服务端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-solon-plugin 使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-solon-plugin/README.md

### 5.3 JFinal 项目

**客户端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-jfinal-plugin 使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-jfinal-plugin/README.md

**服务端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-jfinal-plugin 使用文档** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-jfinal-plugin/README.md

### 5.4 其他 Java 项目

**客户端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client 使用文档**：https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-client/README.md

**服务端**：

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server 使用文档**： https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-server/README.md

## 六、开源地址

*   Gitee：https://gitee.com/dromara/mica-mqtt
    
*   GitHub：https://github.com/dromara/mica-mqtt
    
*   GitCode：https://gitcode.com/dromara/mica-mqtt
    

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/mica-mqtt-2.4.0-1.png)