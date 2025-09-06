---
title: Mayfly-Go 1.9.0 新版本发布，统一IT管控平台
author: Mayfly-Go
tag:
  - MaxKey
date: 2024-10-25
cover: /assets/img/news/Mayfly-Go-1.9.0-0.png
head:
  - - meta
    - name: 新闻
---

## **简介**

mayfly-go是一个web版linux、数据库、redis、mongo、集工单流程审批于一体的统一管理操作平台，旨在为用户提供统一的操作和管理体验，助力组织实现资源的高效利用和风险管控，提高系统的安全性、合规性、降低风险，同时增强团队的协作和责任感。

## **功能介绍**

*   **linux：** ssh终端(终端操作记录回放)，文件查看（可根据常见后缀名高亮显示关键词等）、修改、上传、下载、删除等，脚本管理执行，计划任务、进程操作，运行状态查看等（可当做堡垒机使用）。
    
*   **dbms(目前支持** **mysql postgres oracle sqlserver sqlite 高斯 达梦 kingbase vastbase。** **)：** 可视化数据增删改查，sql语句提示，表信息、索引信息、建表语句查看，建表等（类似mini版navicat）。
    
*   **dbms-数据同步：** 支持异构数据库之间数据同步
    
*   **dbms-数据库迁移：** 支持异构数据库迁移（迁移至异构数据库文件等）
    
*   **redis(单机、哨兵、集群)：** 增删改查redis数据，redis基本信息查看，如版本，内存，cpu等使用情况、集群信息节点查看。
    
*   **mongo：** 增删改查mongo文档数据，数据库、集合状态查看，新建删除集合等。
    
*   **支持ssh tunnel访问：** linux机器、数据库、redis、mongo都支持ssh隧道访问操作。
    
*   **支持工单流程审批：** Dbms、Redis等写入类相关危险操作支持工单流程审批执行。
    
*   **系统管理：** 同时拥有完善的账号、角色、资源权限控制、系统配置（oauth2、ldap登录、登录验证码、双因素校验、水印等），也可基于该项目进行二次开发作为后台管理系统。
    

## **项目信息**

项目文档: https://www.yuque.com/may-fly/mayfly-go

gitee: https://gitee.com/objs/mayfly-go

github: https://github.com/may-fly/mayfly-go

## **开发语言&主要框架**

*   前端：typescript、 vue3、 element-plus
    
*   后端：golang、 gin、 gorm
    

## **特点**

*   对前后端进行了大部分通用功能的封装，使用起来更加简洁，功能逻辑清晰，能快速上手学习开发，并进行二次开发或者用于后台管理系统。
    
*   项目使用的Go语言开发，使用更小的内存及资源运行更高效的应用，二进制文件部署，方便快捷。
    

## **升级**

*   🌟 DBMS、机器、redis、mongo编辑表单移除code（编号）
    
*   🌟 新增统一文件基础路径配置，移除机器等相关配置中关于文件路径的配置项
    
*   🌟 流程定义支持根据指定条件触发审批操作
    
*   🌟 DBMS、Redis工单申请统一转移至 ”工单流程-我的流程“ 发起
    
*   🌟 DBMS - 数据库迁移支持定时迁移至异构数据库文件（可以当备份与恢复使用）
    
*   🌟 DBMS - 查询框支持一次执行多条SQL（多条sql对应多个结果集tab）
    
*   🌟 DBMS - sql解析器替换为antlr4自行解析
    
*   🐞 调整sql加密方式为AES，避免使用base64可能被拦截或其他问题
    

### 新增统一文件基础路径配置

![](/assets/img/news/Mayfly-Go-1.9.0-0.png)

### 流程定义支持根据指定条件触发审批操作

![](/assets/img/news/Mayfly-Go-1.9.0-1.png)

### DBMS、Redis工单申请统一转移至 ”工单流程-我的流程“ 发起

![](/assets/img/news/Mayfly-Go-1.9.0-2.png)

### DBMS-数据库迁移支持定时迁移至异构数据库文件（可以当备份与恢复使用）

![](/assets/img/news/Mayfly-Go-1.9.0-3.png)

![](/assets/img/news/Mayfly-Go-1.9.0-4.png)

### DBMS-查询框支持一次执行多条SQL（多条sql对应多个结果集tab）

![](/assets/img/news/Mayfly-Go-1.9.0-5.png)

Github: https://github.com/dromara/mayfly-go

Gitee: https://gitee.com/dromara/mayfly-go