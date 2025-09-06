---
title: "Mayfly-Go 1.10.0 New Version Released: Unified IT Management and Control Platform"
author: mayfly go
date: 2025-05-30
cover: /assets/img/news/Mayfly-Go-1.10.0-0.jpg
head:
  - - meta
    - name: News
---

## **Introduction**

A web-based unified management and operation platform that offers comprehensive support for Linux system operations—including terminal management (with session playback and command filtering), file management, script execution, process monitoring, and scheduled task setup. It also provides data manipulation, synchronization, and migration for various databases (such as MySQL, PostgreSQL, Oracle, SQL Server, Dameng, Gauss, SQLite, etc.). Additionally, it supports operation and management for Redis (standalone, sentinel, and cluster modes), MongoDB, and Elasticsearch. Combined with a ticket-based approval workflow, it offers an all-in-one operation, maintenance, and management solution for enterprises.

![](/assets/img/news/Mayfly-Go-1.10.0-0.jpg)

## **Features**

*   **Linux**: SSH terminal (with operation recording and playback), file viewing (with syntax highlighting for common file extensions and keyword highlighting), editing, uploading, downloading, deletion, script management and execution, scheduled tasks, process management, and system status monitoring (can be used as a bastion host).

*   **DBMS (Currently supports MySQL, PostgreSQL, Oracle, SQL Server, SQLite, Gauss, Dameng, Kingbase, Vastbase)**: Visual data addition, deletion, modification, and query; SQL statement hints; viewing table information, index details, and CREATE TABLE statements; table creation, etc. (similar to a mini Navicat).

*   **DBMS - Data Synchronization**: Supports data synchronization between heterogeneous databases.

*   **DBMS - Database Migration**: Supports migration between heterogeneous databases (e.g., migrating to different database file formats).

*   **Redis (Standalone, Sentinel, Cluster)**: Add, delete, modify, and query Redis data; view basic Redis information such as version, memory, and CPU usage; view cluster node information.

*   **MongoDB**: Add, delete, modify, and query MongoDB document data; view database and collection status; create and delete collections.

*   **Elasticsearch**: Add, delete, modify, and query Elasticsearch data; check status; perform index operations.

*   **SSH Tunnel Support**: All operations for Linux machines, databases, Redis, MongoDB, and Elasticsearch support SSH tunnel access.

*   **Ticket-Based Approval Workflow**: Dangerous write operations (e.g., in DBMS, Redis) require approval via a ticket workflow.

*   **System Management**: Includes a comprehensive account, role, and resource permission control system, along with system configuration (OAuth2, LDAP login, login captcha, two-factor authentication, watermarking, etc.). It can also be used as a backend management system for secondary development.


## **Project Information**

Documentation: https://www.yuque.com/may-fly/mayfly-go

Gitee: https://gitee.com/dromara/mayfly-go

GitHub: https://github.com/dromara/mayfly-go

## **Development Language & Main Frameworks**

*   Frontend: TypeScript, Vue3, Element Plus

*   Backend: Golang, Gin, Gorm


## **Highlights**

*   Most common functionalities are encapsulated in both frontend and backend, making it concise and easy to use. The logical structure is clear, enabling quick learning and development, as well as secondary development or use as a backend management system.

*   Developed in Go, the project runs efficient applications with smaller memory and resource footprints. It is deployed as a binary for convenience and speed.


## **Updates**

*   🌟 Added support for Elasticsearch operations

*   🌟 Optimized ticket workflow, supporting OR-sign/AND-sign and flowchart design

*   🌟 Upgraded frontend and backend dependencies; refactored and optimized parts of the code

*   🐞 Fixed several issues


## Elasticsearch Operations

![](/assets/img/news/Mayfly-Go-1.10.0-1.png)

![](/assets/img/news/Mayfly-Go-1.10.0-2.png)

## Ticket Workflow Optimization

![](/assets/img/news/Mayfly-Go-1.10.0-3.png)

![](/assets/img/news/Mayfly-Go-1.10.0-4.png)