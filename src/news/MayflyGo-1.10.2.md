---
title: "mayfly-go 1.10.2 New Version Released: Unified IT Management and Control Platform"
author: mayfly-go
date: 2025-09-02
cover: /assets/img/news/MayflyGo-1.10.2-0.png
head:
  - - meta
    - name: News
---

## **Introduction**

A web-based unified operation and maintenance management platform that fully supports Linux system operations (terminal management, file management, script execution, process monitoring, etc.), container operations, and data operations and migration for various databases (MySQL, PostgreSQL, Oracle, SQL Server, Dameng, Gauss, SQLite). It also provides full lifecycle management for Redis (standalone/sentinel/cluster), MongoDB, and ES, and integrates a ticket approval process to create an all-in-one IT operation and maintenance solution for enterprises.

## **Feature Overview**

*   **Linux**: SSH terminal (with terminal operation recording and playback), file viewing (with keyword highlighting for common file extensions), modification, upload, download, deletion, script management and execution, scheduled tasks, process operations, runtime status viewing, etc. (can be used as a bastion host).
*   **Container Operations**: Supports container/image management.
*   **DBMS (Currently supports MySQL, PostgreSQL, Oracle, SQL Server, SQLite, Gauss, Dameng, Kingbase, Vastbase)**: Visual data addition, deletion, modification, and query; SQL statement hints; viewing table information, index information, and DDL statements; table creation, etc. (similar to a mini Navicat).
*   **DBMS - Data Synchronization**: Supports data synchronization between heterogeneous databases.
*   **DBMS - Database Migration**: Supports migration between heterogeneous databases (e.g., migrating to heterogeneous database files).
*   **Redis (Standalone, Sentinel, Cluster)**: Add, delete, modify, and query Redis data; view basic Redis information such as version, memory, CPU usage, and cluster node information.
*   **MongoDB**: Add, delete, modify, and query MongoDB document data; view database and collection status; create and delete collections, etc.
*   **Elasticsearch (ES)**: Add, delete, modify, and query Elasticsearch data; view status; perform index operations, etc.
*   **SSH Tunnel Access Support**: Supports SSH tunnel access for Linux machines, databases, Redis, MongoDB, and Elasticsearch.
*   **Ticket Approval Process Support**: Dangerous write operations for DBMS, Redis, etc., require ticket approval for execution.
*   **System Management**: Includes comprehensive account, role, resource permission control, and system configuration (OAuth2, LDAP login, login CAPTCHA, two-factor authentication, watermarking, etc.). It can also be used as a backend management system for secondary development.

## **Project Information**

Project Documentation: https://www.yuque.com/may-fly/mayfly-go

Gitee: https://gitee.com/dromara/mayfly-go

GitHub: https://github.com/dromara/mayfly-go

## **Development Language & Main Frameworks**

*   Frontend: TypeScript, Vue3, Element Plus
*   Backend: Golang, Gin, Gorm

## **Features**

*   Modular design with well-encapsulated common frontend and backend functionalities. The code structure is clear and easy to understand, enabling quick onboarding for learning or secondary development, and easy construction of custom backend management systems.
*   Developed in Go, it features low memory usage and high operational efficiency. One-click deployment via binary files greatly simplifies the deployment process.

## **Updates**

*   🌟 Unified resource operation entry point
*   🌟 Preliminary support for container operations
*   🌟 Optimization and refactoring of the message notification module
*   🐞 Optimized and fixed several other issues

## Unified Resource Operation Entry Point

![](/assets/img/news/MayflyGo-1.10.2-0.png)

![](/assets/img/news/MayflyGo-1.10.2-1.png)

(Image description)

## Preliminary Support for Container Operations

![](/assets/img/news/MayflyGo-1.10.2-2.png)

![](/assets/img/news/MayflyGo-1.10.2-3.png)

![](/assets/img/news/MayflyGo-1.10.2-4.png)

## Optimization and Refactoring of the Message Notification Module

![](/assets/img/news/MayflyGo-1.10.2-5.png)