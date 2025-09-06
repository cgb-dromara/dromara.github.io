---
title: Apache Hertzbeat Version 1.6.1 Release Announcement
author: November 1, 2024, 08:54
date: 2024-11-01
cover: /assets/img/news/Apache-Hertzbeat-1.6.1-0.png
head:
  - - meta
    - name: News
---

# Apache Hertzbeat Version 1.6.1 Release Announcement

Dear community members! 🎉️

We are thrilled to announce the official release of Apache Hertzbeat version 1.6.1! This release merges 468 PRs, bringing numerous new features and improvements. This article details the key updates in version 1.6.1. We welcome more developers and users to join our open-source community!

![](/assets/img/news/Apache-Hertzbeat-1.6.1-0.png)

What is Hertzbeat?

![](/assets/img/news/Apache-Hertzbeat-1.6.1-1.png)

## Download & Documentation

*   **Apache Hertzbeat 1.6.1 Download**: https://hertzbeat.apache.org/zh-cn/docs/download
*   **Apache Hertzbeat Documentation**: https://hertzbeat.apache.org/zh-cn/docs/

## Key Updates

### New Features & Enhancements

*   **New Monitoring Support**: Added monitoring for Apache HBase, InfluxDB, VictoriaMetrics cluster, HDFS, Yarn, Linux processes, HBase RegionServer, OpenAI accounts, Redfish protocol, and more.
*   **Prometheus Support**: Added Prometheus parser and Prometheus-like push mode.
*   **Internationalization (i18n) Support**: Added i18n support for metric names of ClickHouse, DynamicTp, Airflow, IoTDB, RocketMQ, and other monitors.
*   **Custom Monitoring Menu**: Monitoring templates now support custom main menus.
*   **NebulaGraph Support**: Added support for querying NebulaGraph monitoring data using `ngql`.
*   **SMS Functionality**: Added support for sending SMS via Alibaba Cloud.
*   **Docker Support**: Added support for running Hertzbeat via Docker Compose.

### Bug Fixes

*   **Startup Issues**: Fixed issues where the Collector couldn't start independently, MySQL dependency problems, and MongoDB monitoring being unavailable in Spring Boot 3.
*   **Data Issues**: Fixed JPA data saving logic errors, Redis cluster node test errors, old data decoding errors, and more.
*   **Null Pointer Exception (NPE) Fixes**: Fixed multiple issues related to Null Pointer Exceptions (NPE).
*   **Other Bug Fixes**: Includes fixes for command window data loss, MongoDB template command errors, and others.

### Code Refactoring & Optimization

*   **Code Simplification**: Optimized code structure, used Assert class to simplify null checks, removed unnecessary if-else statements, and adopted new Java 17 syntax.
*   **Dependency Management Optimization**: Removed unnecessary dependencies and refactored some packages into independent modules.
*   **Performance Improvements**: Improved performance by optimizing WebSocket connections, Redis URI building, and other aspects.
*   **Logging & Configuration Updates**: Updated logback configurations for the Collector and Manager.

### Documentation Translation & Improvements

*   **Translation Work**: Translated numerous class descriptions, blog posts, and monitoring template documents from Chinese to English.
*   **Added Help Documentation**: Added help documentation for monitoring items like ClickHouse, DNS, Flink, etc.
*   **Documentation Structure Updates**: Updated website documentation, contribution guidelines, homepage introduction, and more.

### Security Updates

*   **Dependency Upgrades**: Upgraded H2 database dependency library to fix related security vulnerabilities.
*   **Other Security Improvements**: Fixed issues with SSL certificate remaining days and Jexl expression security matching.

### Test Case Additions

*   **Improved Test Coverage**: Added test cases for Redis, Nginx, Telnet monitoring functionalities, and more, increasing test coverage.

## Acknowledgments

Thanks to **@zqr10159** for supporting this release work. We also extend our gratitude to the following community members whose joint efforts made this release possible:

> LinuxSuRen, transactional, JavaProgrammerLB, westboy, xuziyang, makechoicenow, crossoverJie, xfl12345, boatrainlsz, lw-yang, tomsun28, Alanxtl, Aias00, Clownsw, zhangshenghang, zqr10159, LiuTianyou, handy-git, hudongdong129, dukbong, 15613060203, yqxxgh, miki-hmt, PeixyJ, allcontributors, Ceilzcx, lwjxy, starmilkxin, leo-934, zuobiao-zhou, tomorrowshipyltm, LLP2333, lwqzz, wang1027-wqh, gjjjj0101, ZY945, yuluo-yx, HeartLinked, alpha951, Hi-Mr-Wind, TJxiaobao, YxYL6125, MananPoojara, a-little-fool, Pzz-2021, Yanshuming1, Thespica, Calvin979, WinterKi1ler

# Apache Hertzbeat

**Repository:**

https://github.com/apache/hertzbeat

**Website:**

https://hertzbeat.apache.org/

**Apache Hertzbeat Download:**

https://hertzbeat.apache.org/zh-cn/docs/download

**Apache Hertzbeat Docker Images:**

> Apache HertzBeat produces Docker images for each release. You can pull them from Docker Hub.
>
> *   HertzBeat https://hub.docker.com/r/apache/hertzbeat
> *   HertzBeat Collector https://hub.docker.com/r/apache/hertzbeat-collector

**How to Contribute to the Apache Hertzbeat Open Source Community?**

https://hertzbeat.apache.org/zh-cn/docs/community/contribution