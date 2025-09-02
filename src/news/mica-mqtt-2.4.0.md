---
title: Dromara mica-mqtt 2.4.0 Released
author: mica-mqtt
date: 2024-12-19
cover: /assets/img/news/mica-mqtt-2.4.0-0.png
head:
  - - meta
    - name: News
---

# Dromara mica-mqtt 2.4.0 Released: Enhanced Server Interfaces, Recommended Upgrade

![](/assets/img/news/mica-mqtt-2.4.0-0.png)

## 1. Preface

The official release of Dromara mica-mqtt **2.4.0** is now available. Please note that starting from version `2.4.x`, the Maven groupId has been migrated to `org.dromara.mica-mqtt`, the package name has been switched to `org.dromara`, and the project has moved to Central Sonatype (snapshots are not supported). All other usage remains consistent with the previous versions. The `2.4.x` series will continue to improve and enrich server functionality. Future versions may also introduce some **major** adjustments and optimizations, though we will strive to **minimize interface changes** to facilitate upgrades. **It is highly recommended** to upgrade to the new `2.4.x` version as soon as possible.

Additionally, since the old documentation was scattered across various modules and inconvenient to navigate, we have added a new documentation site: https://mica-mqtt.dromara.org

## 2. Features

*   Supports MQTT v3.1, v3.1.1, and v5.0 protocols.
*   Supports WebSocket MQTT sub-protocol (compatible with mqtt.js).
*   Supports HTTP REST API. `HTTP API documentation:` https://gitee.com/dromara/mica-mqtt/blob/master/docs/http-api.md
*   Supports MQTT client.
*   Supports MQTT server.
*   Supports MQTT Will messages.
*   Supports MQTT Retained messages.
*   Supports custom message (MQ) processing and forwarding for cluster implementation.
*   MQTT client demo for connecting to Alibaba Cloud MQTT.
*   Supports compilation into native executables via GraalVM.
*   Supports quick integration with Spring Boot, Solon, and JFinal projects.
*   mica-mqtt-spring-boot-starter supports integration with Prometheus + Grafana.
*   Cluster implementation based on Redis Stream. See the `mica-mqtt-broker module:` https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-broker.

## 3. Use Cases

*   Internet of Things (IoT) (cloud MQTT broker)
*   IoT (edge device message communication)
*   Group-based IM
*   Message push
*   Simple and easy-to-use MQTT client

## 4. Changelog

*   ✨ HTTP API adds `stats`, `clients` list, and `client details` interfaces.
*   ✨ MqttServer and MqttServerTemplate add `getClientInfo` and `getClients` series of client information interfaces.
*   ✨ MqttServer and MqttServerTemplate add `getSubscriptions` interface to retrieve client subscription lists.
*   ✨ MqttServer and MqttServerTemplate add `getStat` statistics interface.
*   🚚 Maven groupId changed from `net.dreamlu` to `org.dromara.mica-mqtt`.
*   🚚 Package name changed from `net.dreamlu.iot.mqtt` to `org.dromara.mica.mqtt`. All other aspects remain unchanged.
*   🚚 Moved to Central Sonatype. Central Sonatype does not support snapshots, so mica-mqtt will no longer publish snapshot versions.
*   🐛 Fixed subscription sending timing issue. Gitee #IB72L6. Thanks to `@江上烽` for reporting.

## 5. Quick Start

### 5.1 Spring Boot Project

**Client**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-spring-boot-starter Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-spring-boot-starter/README.md

**Server**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-spring-boot-starter</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-spring-boot-starter Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-spring-boot-starter/README.md

### 5.2 Solon Project

**Client**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-solon-plugin Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-solon-plugin/README.md

**Server**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-solon-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-solon-plugin Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-solon-plugin/README.md

### 5.3 JFinal Project

**Client**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client-jfinal-plugin Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-client-jfinal-plugin/README.md

**Server**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server-jfinal-plugin</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server-jfinal-plugin Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/starter/mica-mqtt-server-jfinal-plugin/README.md

### 5.4 Other Java Projects

**Client**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-client Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-client/README.md

**Server**:

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

**mica-mqtt-server Usage Documentation:** https://gitee.com/dromara/mica-mqtt/tree/master/mica-mqtt-server/README.md

## 6. Open Source Addresses

*   Gitee: https://gitee.com/dromara/mica-mqtt
*   GitHub: https://github.com/dromara/mica-mqtt
*   GitCode: https://gitcode.com/dromara/mica-mqtt

---

About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, and scheduling orchestration. The technology stack is fully open-source and collaboratively built, maintaining community neutrality, and is dedicated to providing microservices cloud-native solutions for global users. It aims to allow every participating open-source enthusiast to experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of members, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/news/mica-mqtt-2.4.0-1.png)