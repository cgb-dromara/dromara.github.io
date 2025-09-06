---
title: Warm-Flow Releases Version 1.3.4, Adds Support for Solon and Enhances Usability
author: Warm-Flow
date: 2024-11-27
cover: /assets/img/news/Warm-Flow-1.3.4-0.png
head:
  - - meta
    - name: News
---

# Warm-Flow Releases 1.3.4, Adds Solon Support and Usability Improvements

![](/assets/img/news/Warm-Flow-1.3.4-0.png)

## 1. Old group was taken down, new group:

![](/assets/img/news/Warm-Flow-1.3.4-1.png)

**This version significantly improves the usability of the workflow, as follows:**

> Introduced designer support, added support for Solon.  
> Added listener SpEL expression support with extensibility.  
> Added global listeners for the entire system, accessible via interface.  
> Process variable expressions now support collection replacement.

## 2. Detailed Updates:

*   Changelog

*   \[feat\] Added SpEL expression support for listeners with extensibility.

*   \[feat\] Added global listeners for the entire system, accessible via interface.

*   \[feat\] Added an API to retrieve current assignees before approval, similar to Satoken style @huangjian

*   \[feat\] Process variable expressions now support collection replacement @huangjian

*   \[feat\] Designer introduction, added support for Solon.

*   \[feat\] Added default node initialization when creating process definitions.

*   \[feat\] Added API to query process instance collections based on process definition ID sets.

*   \[update\] Adjusted the UI of the listener configuration page.

*   \[update\] Redefined listener names: original "global listeners" renamed to "process listeners", and "local listeners" renamed to "node listeners".

*   \[update\] Disabled unpublishing and deletion for approval tasks that have already been started.

*   \[update\] Added parameter validity checks for transfer, delegation, add sign, and reduce sign operations.

*   \[update\] Modified process variable passing method; subsequent assignees can now be initialized via assignee variable expressions or assignment listeners.

*   \[update\] Removed lazy loading for handler loading; refactored test project.

*   \[update\] Removed strategy prefix from assignee variable expressions; distinguished by $ and #.

*   \[update\] Process version numbers now auto-increment by default and do not accept external settings.

*   \[refactor\] Refactored condition expressions and assignee variable expressions.

*   \[remove\] Removed permission listeners.


## 3. Project Introduction

> Warm-Flow is a domestic workflow engine🎉, characterized by its simplicity, lightweight design, and extensibility. It is a workflow that can integrate a designer via JAR.

1.  Simple and Easy to Use: Only 7 tables, minimal code, quick to learn and integrate.

2.  Approval Functions: Supports pass, return, arbitrary jump, transfer, termination, countersign, vote sign, delegation, add/reduce sign, mutual exclusion, and parallel gateways.

3.  Listeners and Process Variables: Supports four types of listeners with varying granularity, SpEL expressions, flexibility, extensibility, parameter passing, and dynamic permissions.

4.  Flowchart: The workflow engine includes a built-in flowchart and can be used without integrating a designer.

5.  Process Designer: Can be quickly integrated into projects via JAR, reducing tedious code migration and adaptation. Supports Solon and Spring Boot.

6.  Condition Expressions: Built-in common and SpEL condition expressions, with support for custom extensions.

7.  Assignee Variable Expressions: Built-in ${handler} and SpEL format expressions to meet various scenarios, flexible and extensible.

8.  ORM Framework Extensions: Currently supports MyBatis, MyBatis-Plus, MyBatis-Flex, and JPA. Community will provide support for others in the future; easy to extend.

9.  Database Support: Currently supports MySQL, Oracle, and PostgreSQL. Support for other or domestic databases will be added later.

10.  Multi-Tenancy and Soft Delete: The workflow engine maintains its own multi-tenancy and soft delete implementation, but can also use the corresponding ORM framework's methods.

11.  Supports both Spring and Solon.

12.  Compatible with Java 8 and Java 17 (theoretically Java 11 as well).

13.  Officially provides a practical project based on Ruoyi-Vue encapsulation.


## 4. Demo Address

*   admin/admin123


Demo: http://www.hhzai.top

## 7. Official Website

http://warm-flow.cn

About Dromara

Dromara is an open-source community composed of top domestic open-source project authors. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, scheduling orchestration, etc. The technology stack is fully open-source and co-built, maintaining community neutrality, and is committed to providing global users with microservices cloud-native solutions. Let every participating open-source enthusiast experience the joy of open source.

The Dromara open-source community currently has 10+ GVP projects, with a total star count of over 100,000, building an open-source community of tens of thousands of people, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/news/Warm-Flow-1.3.4-2.webp)