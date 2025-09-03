---
title: "SQLREST: A Fully Open-Source Tool for Converting SQL to RESTful APIs"
author: sqlrest
date: 2025-08-05
cover: /assets/img/news/SQLREST-0-0.png
head:
  - - meta
    - name: News
---

# A Fully Open-Source Tool for Converting SQL to RESTful APIs

## Author Introduction

*   Alias: Sanpang (inrgihc)  
*   Member of the dromara open-source organization; author of projects dromara/dbswitch and dromara/sqlrest  
*   Project Address: https://gitee.com/dromara/sqlrest  

## Project Origin

As a Java programmer, quickly writing CRUD RESTful interfaces for front-end calls is an essential but often tedious task. In reality, the main design work involves structuring database tables and crafting the SQL logic for the interfaces.  

In the context of today’s booming big data industry, there is often a need to expose data from data platforms to other systems, enabling data sharing and accessibility.  

## Project Overview

SQLREST is an open-source project designed to provide a simple yet powerful way to convert SQL operations into RESTful APIs. It supports multiple databases, allowing users to create APIs by configuring SQL statements without writing complex backend logic. Users only need to select a data source, input SQL or scripts, and configure simple paths to quickly generate API interfaces.  

Key features of SQLREST include:

- **Direct SQL-to-API Conversion**: Configure SQL for CRUD operations and parameters to generate RESTful APIs.  
- **Multi-Database Support**: Compatible with 20+ common databases, including several domestic databases.  
- **MyBatis Syntax Support**: Supports dynamic SQL syntax from MyBatis.  
- **Groovy Script Support**: Allows the use of Groovy scripts for building interfaces in complex scenarios.  
- **Parameter Type Support**: Supports various types including integers, floats, time, date, boolean, string, and objects.  
- **ContentType Support**: Compatible with multiple request formats such as `application/x-www-form-urlencoded` and `application/json`.  
- **Authentication Support**: Provides a token-based authentication mechanism to secure APIs.  
- **Swagger Online Documentation**: Automatically generates Swagger-ui for online API documentation.  
- **Cache Configuration Support**: Supports Hazelcast and Redis caching to improve API performance.  
- **Flow Control Management**: Utilizes Sentinel for traffic control to prevent system overload.  
- **Unified Alert Integration**: Supports integration with unified alert systems for triggering notifications.  
- **LLM MCP Service**: Allows easy configuration to create MCP tools.  

## Deployment and Experience

### 1. System Deployment Guide

One-click installation for x86 architecture CentOS systems with internet access (based on docker-compose):

```bash
curl -k -sSL https://gitee.com/inrgihc/sqlrest/attach_files/2241027/download -o /tmp/sr.sh && systemctl stop firewalld && bash /tmp/sr.sh && rm -f /tmp/sr.sh
```

For detailed instructions, refer to:  
https://gitee.com/dromara/sqlrest/tree/master/build-docker/install

### 2. System Usage Documentation

User guide:  
https://www.yuque.com/sanpang-jq7te/nys82g/hur636mthgyhaodb

![](/assets/img/news/SQLREST-0-0.png)

![](/assets/img/news/SQLREST-0-1.png)

## Follow SQLREST

We welcome you to try out SQLREST. Join the SQLREST WeChat group for discussions. We also look forward to more coding enthusiasts contributing to the project.  

Gitee: https://gitee.com/dromara/sqlrest