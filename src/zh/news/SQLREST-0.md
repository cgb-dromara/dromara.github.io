---
title: 新晋项目SQLREST：一款完全开源的SQL转RESTful API的工具
author: sqlrest
date: 2025-08-05
cover: /assets/img/news/SQLREST-0-0.png
head:
  - - meta
    - name: 新闻
---

#        一款完全开源的SQL转RESTful API的工具

## 作者介绍

*   网名：三胖(inrgihc)
    
*   dromara 开源组织成员，项目dromara/dbswitch和dromara/sqlrest作者
    
*   项目地址：https://gitee.com/dromara/sqlrest
    

## 项目诞生

作为一个java程序员，快速编写前端调用的CRUD的RESTfull接口，是一项必备的体力劳动工作，事实上需要设计的工作也就是设计库表结构和构思接口SQL实现了；

当今大数据火热的背景下，常常需要将数据平台中的数据对外提供给其他系统访问，以实现数据的访问共享；

## 项目概述

SQLREST 是一个开源项目，旨在提供一种简单而强大的方式来将 SQL 操作转化为 RESTful API。它支持多种数据库，允许用户通过配置 SQL 语句来创建 API，无需编写复杂的后端逻辑，用户只需选择数据源、输入SQL或脚本、简单path配置即可快速生成API接口。

SQLREST的功能包括：

*   SQL直接构建API：通过配置增删改查SQL和参数即可生成 RESTful API。
    
*   多数据库支持：支持常见的20+种数据库，其中包含多款国产数据库。
    
*   MyBatis语法支持：支持MyBatis的动态SQL语法。
    
*   Groovy脚本支持：支持groovy语法构建复杂场景下的接口。
    
*   参数类型支持：支持整型/浮点型/时间/日期/布尔/字符串/对象等多种类型。
    
*   ContentType支持：支持application/x-www-form-urlencoded及application/json等多种请求格式。
    
*   身份认证支持：提供基于 Token 的认证机制，保护 API 安全。
    
*   Swagger在线文档：支持自动生成swagger-ui的在线接口文档。
    
*   缓存配置支持：支持 Hazelcast 和 Redis 缓存，提升 API 访问性能。
    
*   流控配置管理：通过 Sentinel 支持流量控制，防止系统过载。
    
*   统一告警对接：支持统一告警系统的对接与触发。
    
*   大模型MCP服务：支持简单配置即可创建MCP的tool。
    

## 部署体验

### 1、系统部署指南

x86架构联网CentOS系统一键安装(基于docker-compose):

```
curl -k -sSL https://gitee.com/inrgihc/sqlrest/attach_files/2241027/download -o /tmp/sr.sh && systemctl stop firewalld && bash /tmp/sr.sh && rm -f /tmp/sr.sh
```

详细参考：https://gitee.com/dromara/sqlrest/tree/master/build-docker/install

### 2、系统使用说明文档

使用说明文档：

https://www.yuque.com/sanpang-jq7te/nys82g/hur636mthgyhaodb

![](/assets/img/news/SQLREST-0-0.png)

  

  

![](/assets/img/news/SQLREST-0-1.png)

  

  

## 关注sqlrest

欢迎体验sqlrest工具，可加入sqlrest微信群内交流，sqlrest期望获得更多的代码开发爱好者参与代码贡献。

  Gitee: https://gitee.com/dromara/sqlrest