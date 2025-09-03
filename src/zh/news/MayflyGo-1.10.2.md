---
title: mayfly-go 1.10.2新版本发布，统一IT管控平台
author: mayfly-go
date: 2025-09-02
cover: /assets/img/news/MayflyGo-1.10.2-0.png
head:
  - - meta
    - name: 新闻
---

## **简介**

Web 版统一运维管理平台，全面支持 Linux 系统运维（终端管理、文件管理、脚本执行、进程监控等）、容器操作及多种数据库（MySQL、PostgreSQL、Oracle、SQL Server、达梦、高斯、SQLite）的数据操作与迁移。同时提供 Redis（单机/哨兵/集群）、MongoDB、ES 的全生命周期管理，并集成工单审批流程，打造企业一站式 IT 运维解决方案。  

## **功能介绍**

*   **linux**： ssh 终端(终端操作记录回放)，文件查看（可根据常见后缀名高亮显示关键词等）、修改、上传、下载、删除等，脚本管理执行，计划任务、进程操作，运行状态查看等（可当做堡垒机使用）。
    
*   **容器操作**： 支持容器/镜像管理等。
    
*   **dbms(目前支持****mysql postgres oracle sqlserver sqlite 高斯 达梦 kingbase vastbase**。**)**： 可视化数据增删改查，sql 语句提示，表信息、索引信息、建表语句查看，建表等（类似 mini 版 navicat）。
    
*   **dbms-数据同步**： 支持异构数据库之间数据同步
    
*   **dbms-数据库迁移**： 支持异构数据库迁移（迁移至异构数据库文件等）
    
*   **redis(单机、哨兵、集群)**： 增删改查 redis 数据，redis 基本信息查看，如版本，内存，cpu 等使用情况、集群信息节点查看。
    
*   **mongo**： 增删改查 mongo 文档数据，数据库、集合状态查看，新建删除集合等。
    
*   **es**： 增删改查 elasticsearch 数据，状态查看，索引操作等。
    
*   **支持 ssh tunnel 访问**： linux 机器、数据库、redis、mongo、es 都支持 ssh 隧道访问操作。
    
*   **支持工单流程审批**： Dbms、Redis 等写入类相关危险操作支持工单流程审批执行。
    
*   **系统管理**： 同时拥有完善的账号、角色、资源权限控制、系统配置（oauth2、ldap 登录、登录验证码、双因素校验、水印等），也可基于该项目进行二次开发作为后台管理系统。
    

## **项目信息**

项目文档: https://www.yuque.com/may-fly/mayfly-go

gitee: https://gitee.com/dromara/mayfly-go

github: https://github.com/dromara/mayfly-go

## **开发语言&主要框架**

*   前端：typescript、 vue3、 element-plus
    
*   后端：golang、 gin、 gorm
    

## **特点**

*   模块化设计，前后端通用功能封装完善，代码结构清晰易懂，无论是学习上手还是二次开发都能快速开展，轻松构建专属后台管理系统
    
*   采用 Go 语言开发，具备低内存占用、高运行效率的优势，通过二进制文件一键部署，极大简化了部署流程
    

## **升级**

*   🌟 资源操作入口统一
    
*   🌟 初步支持容器操作
    
*   🌟 消息通知模块优化重构
    
*   🐞 优化与修复若干其他问题
    

## 资源操作入口统一

  

![](/assets/img/news/MayflyGo-1.10.2-0.png)

  

  

![](/assets/img/news/MayflyGo-1.10.2-1.png)

  

输入图片说明

## 初步支持容器操作

![](/assets/img/news/MayflyGo-1.10.2-2.png)

![](/assets/img/news/MayflyGo-1.10.2-3.png)

![](/assets/img/news/MayflyGo-1.10.2-4.png)

## 消息通知模块优化重构

  

![](/assets/img/news/MayflyGo-1.10.2-5.png)