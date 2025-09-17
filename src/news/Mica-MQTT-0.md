---
title: Mica-MQTT Officially Joins the Dromara Open Source Community
author: mica
date: 2024-11-26
cover: /assets/img/news/Mica-MQTT-0-0.png
head:
  - - meta
    - name: News
---

# Mica-MQTT Officially Joins the Dromara Community!

## 1. A New Beginning

Thanks to the invitation from `Das`, the author of `MaxKey` in the Dromara community, mica-mqtt has officially joined the Dromara community. One can go fast alone, but a group can go far together. We believe that under the guidance of the Dromara community, mica-mqtt will continue to grow and improve.

Mica-MQTT is an open-source, simple, easy-to-use, low-latency, high-performance Java MQTT client component and Java MQTT broker service built on Java AIO. It was born out of the author's need to deeply understand MQTT upon transitioning into the IoT field, leading to the creation of this project. Through the open-sourcing of mica-mqtt, the author has gained a lot, though not without encountering challenges. It wasn't until version 2.2.x that the project truly stabilized (with the complete resolution of encoding and decoding issues). Thanks to the active users, feedback, and contributors—it is because of you that mica-mqtt has become more stable and user-friendly! Special thanks to `@冷月宫主`, `@willianfu`, `@Symous`, `@hjkJOJO`, `@hongfeng11`, `@胡萝博`, `@一片小雨滴`, `@杨钊`, `@iTong`, `@hpz`, `@tan90`, `@DoubleH`, `@那一刹的容颜`, `@皮球`, `@powerxie`, `@yinyuncan`, `@zkname`, `@彭蕾`, `@litongjava`, `@YYGuo`, `@xiaochonzi`, `@HY`, `@tangjj`, `@peigen`, and many others! Thank you all!!!

Mica-MQTT **2.4.0-M1** has been officially released. This version migrates the Maven groupId to `org.dromara.mica-mqtt`, switches the package name to `org.dromara`, and transitions to Central Sonatype (which does not support snapshot versions). Everything else remains consistent with the previous version.

![](/assets/img/news/Mica-MQTT-0-0.png)

## 2. Features

*   Supports MQTT v3.1, v3.1.1, and v5.0 protocols.
*   Supports WebSocket MQTT sub-protocol (compatible with mqtt.js).
*   Supports HTTP REST API. `HTTP API documentation:` https://gitee.com/dromara/mica-mqtt/blob/master/docs/http-api.md
*   Supports MQTT client.
*   Supports MQTT server (broker).
*   Supports MQTT Last Will and Testament (LWT) messages.
*   Supports MQTT retained messages.
*   Supports custom message (MQ) processing and forwarding for cluster implementation.
*   Includes demo for connecting MQTT client to Alibaba Cloud MQTT.
*   Supports compilation into native executables via GraalVM.
*   Supports rapid integration with Spring Boot, Solon, and JFinal projects.
*   mica-mqtt-spring-boot-starter supports integration with Prometheus + Grafana.
*   Implements clustering based on Redis Stream. For details, see the `mica-mqtt-broker module:` https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-broker.

## 3. Use Cases

*   Internet of Things (cloud-based MQTT broker)
*   Internet of Things (edge device message communication)
*   Group-based Instant Messaging (IM)
*   Message push
*   Simple and easy-to-use MQTT client

## 4. Quick Start

### Spring Boot Project

**Client:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-spring-boot-starter Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-spring-boot-starter/README.md

**Server:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-spring-boot-starter Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-spring-boot-starter/README.md

### Solon Project

**Client:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-solon-plugin Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-solon-plugin/README.md

**Server:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-solon-plugin Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-solon-plugin/README.md

### JFinal Project

**Client:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-jfinal-plugin Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-jfinal-plugin/README.md

**Server:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-jfinal-plugin Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-jfinal-plugin/README.md

### Other Projects

**Client:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-client/README.md

**Server:**

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-server/README.md

## Open Source Repositories

*   Gitee: https://gitee.com/dromara/mica-mqtt
*   GitHub: https://github.com/dromara/mica-mqtt
*   GitCode: https://gitcode.com/dromara/mica-mqtt