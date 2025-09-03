---
title: Mica-MQTT 正式加入 Dromara 社区开源社区
author: mica
date: 2024-11-26
cover: /assets/img/news/Mica-MQTT-0-0.png
head:
  - - meta
    - name: 新闻
---

# Mica-MQTT 正式加入 Dromara 社区大家庭啦！

## 一、新的起点

感谢 Dromara 社区 `MaxKey` 作者 `达思` 邀请，mica-mqtt 已正式加入了 Dromara 社区。一个人可以走的很快，一群人才能走的更远。相信在 Dromara 社区的指导下，mica-mqtt 会发展得越来越好。

Mcia-MQTT 是基于 java aio 实现，开源、简单、易用、低延迟、高性能百万级 java mqtt client 组件和 java mqtt broker 服务。诞生于笔者刚转入物联网，需要对 mqtt 有个深入的了解，于是诞生造这么一个轮子。通过 mica-mqtt 的开源，笔者也收获不少，当然也踩了不少坑，到 2.2.x 才算开始正真稳定下来（彻底解决编解码问题）。感谢那些积极使用、反馈和贡献的朋友，也是有你们才让 mica-mqtt 变得更加稳定和好用！感谢 `@冷月宫主`、`@willianfu`、`@Symous`、`@hjkJOJO`、`@hongfeng11`、`@胡萝博`、`@一片小雨滴`、`@杨钊`、`@iTong`、`@hpz`、`@tan90`、`@DoubleH`、`@那一刹的容颜`、`@皮球`、`@powerxie`、`@yinyuncan`、`@zkname`、`@彭蕾`、`@litongjava`、`@YYGuo`、`@xiaochonzi`、`@HY`、`@tangjj`、`@peigen` 等谢谢你们！！！

mica-mqtt **2.4.0-M1** 已经正式发布，该版本将 maven groupId 迁移到了 `org.dromara.mica-mqtt`，将包名切换到了 `org.dromara`，并且切换到 central sonatype（central sonatype 不支持快照版）其他均和老版本保持一致。

![](/assets/img/news/Mica-MQTT-0-0.png)

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
    

## 四、快速上手

### Spring boot 项目

**客户端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-spring-boot-starter 使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-spring-boot-starter/README.md

**服务端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-spring-boot-starter使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-spring-boot-starter/README.md

### solon 项目

**客户端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-solon-plugin 使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-solon-plugin/README.md

**服务端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-solon-plugin 使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-solon-plugin/README.md

### JFinal 项目

**客户端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-jfinal-plugin 使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-jfinal-plugin/README.md

**服务端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-jfinal-plugin 使用文档** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-jfinal-plugin/README.md

### 其他项目

**客户端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client 使用文档**：https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-client/README.md

**服务端：**

```
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server 使用文档：** https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-server/README.md

## 开源地址

*   Gitee：https://gitee.com/dromara/mica-mqtt
    
*   GitHub：https://github.com/dromara/mica-mqtt
    
*   GitCode：https://gitcode.com/dromara/mica-mqtt