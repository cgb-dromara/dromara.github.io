---
title: "Mayfly-Go 1.9.4 New Version Released: Unified IT Management and Control Platform"
author: mayfly-go
date: 2025-04-17
cover: /assets/img/news/Mayfly-Go-1.9.4-0.png
head:
  - - meta
    - name: News
---

## **Introduction**

A web-based unified management and operation platform that offers comprehensive support for Linux system operations—including terminal management (with session playback and command filtering), file management, script execution, process monitoring, and scheduled task configuration. It also provides data operations, data synchronization, and data migration for various databases (such as MySQL, PostgreSQL, Oracle, SQL Server, Dameng, Gauss, SQLite, etc.). Additionally, it supports operation and management for Redis (standalone, sentinel, and cluster modes) and MongoDB. Combined with a workflow approval process, it offers an all-in-one operation, maintenance, and management solution for enterprises.

![](/assets/img/news/Mayfly-Go-1.9.4-0.png)

## **Features**

- **Linux**: SSH terminal (with session playback), file viewing (with syntax highlighting for common file extensions and keywords), editing, uploading, downloading, deletion, script management and execution, scheduled tasks, process operations, and system status monitoring (can be used as a bastion host).

- **DBMS (Currently supports MySQL, PostgreSQL, Oracle, SQL Server, SQLite, Gauss, Dameng, Kingbase, Vastbase)**: Visual data addition, deletion, modification, and query; SQL statement hints; viewing table information, index details, and CREATE TABLE statements; table creation (similar to a mini version of Navicat).

- **DBMS - Data Synchronization**: Supports data synchronization between heterogeneous databases.

- **DBMS - Database Migration**: Supports migration between heterogeneous databases (e.g., migrating to heterogeneous database files).

- **Redis (Standalone, Sentinel, Cluster)**: Add, delete, modify, and query Redis data; view basic Redis information such as version, memory, CPU usage, and cluster node details.

- **MongoDB**: Add, delete, modify, and query MongoDB document data; view database and collection status; create and delete collections.

- **SSH Tunnel Access Support**: Supports SSH tunnel access for Linux machines, databases, Redis, and MongoDB operations.

- **Workflow Approval Process**: Supports workflow approval for high-risk write operations such as those in DBMS and Redis.

- **System Management**: Includes a comprehensive account, role, and resource permission control system, as well as system configuration (OAuth2, LDAP login, login captcha, two-factor authentication, watermarking, etc.). It can also be used as a backend management system for secondary development.

## **Project Information**

Documentation: https://www.yuque.com/may-fly/mayfly-go  
Gitee: https://gitee.com/dromara/mayfly-go  
GitHub: https://github.com/dromara/mayfly-go

## **Development Language & Main Frameworks**

- Frontend: TypeScript, Vue3, Element Plus  
- Backend: Golang, Gin, Gorm

## **Key Highlights**

- Most common functionalities are encapsulated in both frontend and backend, making it easier to use, with clear logic for quick learning and development. Suitable for secondary development or as a backend management system.
- The project is developed in Go, enabling more efficient applications with lower memory and resource usage. It can be deployed as a binary file for convenience and speed.

## **Updates**

- 🌟 Added message channel management. Supports notifications via email, DingTalk bot, Enterprise WeChat bot, and Feishu bot.
- 🌟 Added message template management. Supports setting templates in TXT, Markdown, and HTML formats.
- 🌟 Process definitions now support associating message templates for work order approval notifications.
- 🌟 Upgraded frontend and backend dependencies; optimized partial code.
- 🐞 Fixed issue with database migration where longblob was incorrectly converted to longblog with length.
- 🐞 Fixed precision loss issue when displaying PostgreSQL decimal types on the frontend.