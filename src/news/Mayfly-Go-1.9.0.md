---
title: Mayfly-Go 1.9.0 New Version Released, Unified IT Control Platform
author: Mayfly-Go
date: 2024-10-25
cover: /assets/img/news/Mayfly-Go-1.9.0-0.png
head:
  - - meta
    - name: News
---

## **Introduction**

mayfly-go is a unified management and operation platform that integrates web-based Linux, databases, Redis, MongoDB, and workflow approval processes. It aims to provide users with a unified operation and management experience, helping organizations achieve efficient resource utilization and risk control, improve system security and compliance, reduce risks, and enhance team collaboration and accountability.

## **Feature Overview**

*   **Linux:** SSH terminal (with terminal operation recording and playback), file viewing (with keyword highlighting based on common file extensions), modification, upload, download, deletion, script management and execution, scheduled tasks, process operations, system status monitoring, etc. (Can be used as a bastion host).
*   **DBMS (Currently supports MySQL, PostgreSQL, Oracle, SQL Server, SQLite, GaussDB, Dameng, Kingbase, Vastbase):** Visual data addition, deletion, modification, and query; SQL statement hints; viewing table information, index information, and DDL statements; table creation, etc. (Similar to a mini version of Navicat).
*   **DBMS - Data Synchronization:** Supports data synchronization between heterogeneous databases.
*   **DBMS - Database Migration:** Supports migration between heterogeneous databases (e.g., migrating to heterogeneous database files).
*   **Redis (Standalone, Sentinel, Cluster):** Add, delete, modify, and query Redis data; view basic Redis information such as version, memory, CPU usage, and cluster node information.
*   **MongoDB:** Add, delete, modify, and query MongoDB document data; view database and collection status; create and delete collections, etc.
*   **SSH Tunnel Access Support:** Linux machines, databases, Redis, and MongoDB all support operation via SSH tunnels.
*   **Workflow Approval Support:** Dangerous write operations for DBMS, Redis, etc., support execution through workflow approval processes.
*   **System Management:** Comprehensive account, role, resource permission control, and system configuration (OAuth2, LDAP login, login captcha, two-factor authentication, watermarking, etc.). It can also be二次开发 (custom developed) based on this project as a backend management system.

## **Project Information**

Project Documentation: https://www.yuque.com/may-fly/mayfly-go

Gitee: https://gitee.com/objs/mayfly-go

GitHub: https://github.com/may-fly/mayfly-go

## **Development Language & Main Frameworks**

*   Frontend: TypeScript, Vue3, Element-Plus
*   Backend: Golang, Gin, Gorm

## **Characteristics**

*   Most common functions are encapsulated for both frontend and backend, making usage more concise. The functional logic is clear, enabling quick learning, development, and secondary development or use as a backend management system.
*   The project is developed using Go language, running more efficient applications with smaller memory and resource footprint. Binary file deployment is convenient and fast.

## **Upgrades**

*   🌟 Removed the 'code' (number) field from DBMS, Machine, Redis, and MongoDB edit forms.
*   🌟 Added a unified base file path configuration; removed file path configuration items related to machines and other settings.
*   🌟 Process definitions now support triggering approval operations based on specified conditions.
*   🌟 DBMS and Redis work order applications have been统一转移至 (consolidated and moved to) the "Workflow Process - My Processes" section for initiation.
*   🌟 DBMS - Database migration now supports scheduled migration to heterogeneous database files (can be used for backup and restore).
*   🌟 DBMS - The query box now supports executing multiple SQL statements at once (multiple SQL statements correspond to multiple result set tabs).
*   🌟 DBMS - SQL parser replaced with ANTLR4 for self-parsing.
*   🐞 Changed SQL encryption method to AES to avoid potential issues with base64 interception or other problems.

### Added Unified Base File Path Configuration

![](/assets/img/news/Mayfly-Go-1.9.0-0.png)

### Process Definitions Support Triggering Approval Based on Specified Conditions

![](/assets/img/news/Mayfly-Go-1.9.0-1.png)

### DBMS and Redis Work Orders Consolidated into "Workflow Process - My Processes"

![](/assets/img/news/Mayfly-Go-1.9.0-2.png)

### DBMS - Database Migration Supports Scheduled Migration to Heterogeneous Database Files (Can be used for Backup and Restore)

![](/assets/img/news/Mayfly-Go-1.9.0-3.png)

![](/assets/img/news/Mayfly-Go-1.9.0-4.png)

### DBMS - Query Box Supports Executing Multiple SQL Statements at Once (Multiple result set tabs)

![](/assets/img/news/Mayfly-Go-1.9.0-5.png)

GitHub: https://github.com/dromara/mayfly-go

Gitee: https://gitee.com/dromara/mayfly-go