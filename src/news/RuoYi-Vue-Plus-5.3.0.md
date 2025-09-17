---
title: RuoYi-Vue-Plus 5.3.0 New Spring Edition Released - Powerful Integration with warm-flow
author: January 25, 2025 09:20
date: 2025-01-25
cover: /assets/img/news/RuoYi-Vue-Plus-5.3.0-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/RuoYi-Vue-Plus-5.3.0-0.png)

* * *

# Changelog

### Major Updates

*   Refactored data permission implementation logic to support annotation on any mapper method, eliminating the need to find the real mapper for annotation.
*   Rewrote the workflow module, integrating warm-flow workflow and removing flowable workflow (too complex, many people find it difficult to understand).

### Dependency Upgrades

*   update springboot 3.2.11 => 3.4.1
*   update springboot-admin 3.2.3 => 3.4.1
*   update mybatis-plus 3.5.8 => 3.5.9
*   update snailjob 1.1.2 => 1.3.0 (Thanks dhb52)
*   update springdoc 2.6.0 => 2.8.3
*   update redisson 3.37.0 => 3.43.0
*   update justauth 1.16.6 => 1.16.7 Supports multiple login methods, not limited to third-party logins.
*   update mybatis-plus 3.5.9 => 3.5.10
*   update hutool 5.8.31 => 5.8.35
*   update mapstruct-plus 1.4.5 => 1.4.6
*   update lombok 1.18.34 => 1.18.36
*   update anyline 20241022 => 20250101

### Feature Updates

*   update Optimized the OSS image URL query interface to use the 'query' identifier.
*   update Optimized third-party binding and unbinding to verify token existence.
*   update Optimized the method for obtaining temporary URLs for OSS private buckets (Thanks 秋辞未寒).
*   update Optimized the ws module to close session connections when replacing sessions.
*   update Optimized data permissions; skips if the current annotation does not meet the template.
*   update Optimized the use of request storage for dynamic tenants to avoid multiple Redis queries per request.
*   update Optimized department information modification by adding transactions (Thanks AprilWind).
*   update Optimized by adding menu selection extension parameters (Thanks 玲娜贝er).
*   update Optimized the scheduled task pool when virtual threads are enabled in a JDK21 environment (Thanks 秋辞未寒).
*   update Optimized SSE; if the obtained token list is empty, delete the storage corresponding to the userid.
*   update Optimized the data permission handler by adding default value handling for cases where expression variables do not correspond to annotations or are null.
*   update Optimized errors when using tools after closing SSE.
*   update Optimized by adding one-click enable/disable for mybatis-plus logical deletion.
*   update Optimized log time display color (Thanks 疯狂的牛子Li).
*   update Adapted TOPIAM 2.0 single sign-on (SSO) (Thanks 马铃薯头).
*   update Optimized and improved the WeChat Mini Program login interface logic.
*   update Optimized and refactored the DateUtils tool class for greater practicality.
*   update Optimized by adding common query methods for departments, roles, positions, and users.
*   update Optimized by adding position data to the logged-in user.
*   update Optimized by removing department query status validation, shifting filtering to the frontend for easier viewing of data under disabled departments.
*   update Optimized the department tree by adding a disabled flag.
*   update Optimized the workflow module by adding interface document generation functionality.
*   update Optimized code generation by adding a default sorting rule for buildQueryWrapper.
*   update Optimized code generation to fix the issue of creation/update time being overwritten.
*   update Optimized code generation sorting (Thanks AprilWind).
*   update Optimized online user queries to prioritize data under the tenant, reducing data volume.
*   update Optimized tenant domain name matching to be case-insensitive.
*   update Optimized the code generator to convert database field names to lowercase by default, avoiding issues with some databases using uppercase.
*   update Optimized by reducing SSE authentication failure logs to debug level due to the retry mechanism causing excessive output.
*   update Optimized the destruction method for bounded queues; a special destruction method should be used.
*   update Optimized Redis serialization to support the faster Apache binary cross-language serialization scheme.
*   update Optimized the tenant log module name.
*   update Optimized by adding a default data permission option: "Department and below or own data permission".
*   update Optimized the code generator for precise primary key retrieval in PostgreSQL databases.
*   update Optimized code generator type retrieval.
*   update Optimized the personal center force logout device interface path.
*   update Optimized Dockerfile to eliminate warn warnings.
*   update Optimized by adding comments to client tool classes (Thanks AprilWind).
*   update Optimized by adding comments to Undertow custom configuration information (Thanks AprilWind).
*   update Optimized by intercepting crawler tracking and other junk requests.
*   update Optimized by changing the Log exception record length to 5000.
*   update Optimized by expanding the Log parameter record length to 5000 to better suit actual needs.
*   update Optimized XSS wrapper Parameter handling to be compatible with containers that do not allow parameter changes.
*   update Optimized to support passing multiple roles and permission identifiers for desensitization.
*   update Optimized role deletion to clear cache.
*   update Optimized code encapsulation using new methods in ObjectUtils.
*   update Optimized data permission queries by adding caching.
*   update Optimized code generator numeric type judgment.
*   update Optimized the logical deletion status to 1 to avoid misunderstandings.
*   update Refactored by changing UserConstants to SystemConstants for unified constant usage, reducing difficulty and misunderstandings.
*   update Optimized by encapsulating department query methods based on parent ID.
*   update Optimized to skip data permission checks if no user ID is passed.
*   update Optimized the display of multiple base points in the department tree, supporting nodes with the same name to be displayed side by side.
*   update Optimized by removing OSS bucket detection; errors will naturally occur if the bucket doesn't exist, making extra detection unnecessary.
*   update Optimized the rate limiting annotation by adding a fixed cleanup time.
*   update Optimized the sys_social table by adding a default value for tenant ID.
*   update Optimized deprecated Jackson methods.
*   update Optimized the multi-tenant plugin initialization process.
*   update Optimized by removing the GenUtils setCreateBy logic, unifying it through automatic injection settings.
*   update Optimized by replacing deprecated methods getKeysStreamByPattern and trySetRate in RedisUtils (Thanks Lucien_Lu).
*   update Optimized by removing the automatic bucket creation code logic (cloud vendors restrict bucket operations).
*   update Optimized the code logic for clearing online users by role.

### New Features

*   add Added export template required field and remark annotation implementation (Thanks liyang).
*   add Added a Redisson-based ID generator tool (Thanks 秋辞未寒).
*   add Added validation support for enum checks (Thanks 秋辞未寒).
*   add Added validation support for enum checks (Thanks 秋辞未寒) - (Note: Appears twice in original).
*   add Added object utility class (Thanks 秋辞未寒).
*   add Added demo for email with multiple attachments.

### Bug Fixes

*   fix Fixed file download issue where setting content-length was ineffective.
*   fix Fixed Satoken DAO layer getting timeout in seconds, causing loss of millisecond precision (temporary fix, waiting for official Satoken solution).
*   fix Fixed PostgreSQL table metadata lacking creation time (very peculiar), used new Date() as a substitute.
*   fix Fixed incorrect logic for multi-role, multi-annotation containing ignore permission identifiers in data permissions.
*   fix Fixed bean not found error when SSE is not enabled.
*   fix Fixed errors in the personal center's avatar modification and password change interfaces caused by data permissions (Thanks QianRj).
*   fix Fixed department data permission caching errors (Thanks QianRj).
*   fix Fixed missing parameter issues in third-party authorization tools for some websites.
*   fix Fixed code generation issue where special characters in the middle of table names were filtered; changed to filter only at the beginning.
*   fix Fixed field length exceeding database limit issue.
*   fix Fixed regular expression error in filters.
*   fix Fixed monitor context-path causing 404 error upon logout and re-login.
*   fix Fixed issues caused by multi-role and permission identifier共用 in data permissions: https://gitee.com/dromara/RuoYi-Vue-Plus/issues/IB4CS4.
*   fix Fixed by excluding Tomcat dependencies contained within the websocket package (causing issues).
*   fix Fixed PageQuery JSON conversion error.
*   fix Fixed SSE close interface disconnection issue.
*   fix Fixed typo in PlusSmsDao#clean method.
*   fix Fixed excel cascading dropdown data error (Thanks Emil.Zhang).
*   fix Fixed method errors in modules lacking mp dependency.
*   fix Fixed code generation paging errors caused by the new mp version using the latest SQL Server syntax by default.
*   fix Fixed OssClient rollback error modification.
*   fix Fixed registration log status recording error.

### Frontend Changes

*   update typescript 5.4.5 => 5.7.2
*   update vite 5.2.12 => 5.4.11
*   update vue 3.4.34 => 3.5.13
*   update element-plus 2.7.8 => 2.8.8
*   update eslint upgraded to v9 version (Thanks 玲娜贝er).
*   update vue-i18n 10.0.5
*   update Optimized parseTime hint error issue.
*   update Optimized i18n variable hints.
*   update Optimized by rewriting workflow-related pages.
*   update Optimized theme color display brightness in dark mode (Thanks LiuHao).
*   update Optimized hasRoles method by adding super admin check.
*   update Optimized user page by adding import/export permission identifiers.
*   update Optimized TopNav internal link menu click highlight.
*   update Optimized new/edit user by filtering disabled departments.
*   update Optimized whitelist by adding regex matching examples.
*   update Optimized whitelist to support wildcard path matching.
*   update Optimized i18n $t method to support TS type hints (Thanks 玲娜贝er).
*   update Optimized login page multi-language button style.
*   update Optimized by adding i18n content to login and registration pages and adding language switch buttons (Thanks QianRj).
*   update Optimized eslint upgrade to v9 & updated code that did not comply with validation rules (Thanks 玲娜贝er).
*   update Optimized full code standardization.
*   update Optimized code generation import dropdown default value handling.
*   update Optimized menu breadcrumb navigation to support multi-level display.
*   update Optimized parameter key-value replacement with multi-line text.
*   update Optimized by adding default data permission option: "Department and below or own data permission".
*   update Optimized permission loadView to avoid looping through entire modules, allowing view folders within views (Thanks admin_lijinfu).
*   update Optimized personal center force logout device interface path.
*   update Optimized by reading i18n language pack information directly from @/lang/*.ts files (Thanks QianRj).
*   update Optimized by migrating the sync dictionary function to tenant management.
*   update Optimized by refactoring operation log detail styles (Thanks 玲娜贝er).
*   update Optimized dictionary caching using Map instead of Array for higher efficiency (Thanks 月夜).
*   update Optimized by checking if filenames contain special characters.
*   update Optimized getTenantList interface to dynamically decide whether to pass the token.
*   fix Fixed issue where switching tenants with too many tabs caused freezing.
*   fix Fixed incorrect permission string for the modify button in user management interface (Thanks QianRj).
*   fix Fixed OSS configuration page to display configuration key and hide primary key ID.
*   fix Fixed page API deprecation warnings.
*   fix Fixed code generation list loading issue.
*   fix Fixed issue where internal link pages couldn't open when Tags-Views were closed by default.
*   fix Fixed user selection component ID type inconsistency issue.
*   fix Fixed code generation querying the list twice after editing.
*   fix Fixed 404 error when login lacks redirect parameter.
*   fix Fixed monitor context-path causing 404 error upon logout and re-login.
*   fix Fixed inconsistent redirect behavior between manual logout and token expiration logout.
*   fix Fixed issue where SSE close requests were still sent after disabling SSE, causing errors.
*   fix Fixed data caching issue in embedded pages causing inconsistency with external pages.

## Platform Introduction

> RuoYi-Vue-Plus is a rewrite of RuoYi-Vue, comprehensively upgraded for `distributed clusters and multi-tenancy` scenarios (not compatible with the original framework).

> Project code and documentation are open source, free, and commercially usable. Just retain the open-source license file in the project.
> Code for a lifetime, open source for interest, open source for learning, open source to let everyone truly learn technology.

> System Demo: https://plus-doc.dromara.org/#/common/demo_system

> Frontend Project Address: https://gitee.com/JavaLionLi/plus-ui
> Member Frontend Project Address: Based on vben5 https://gitee.com/dapppp/ruoyi-plus-vben5

> Documentation Address: https://plus-doc.dromara.org

# Functional Differences Between This Framework and RuoYi

| Feature                               | This Framework                                               | RuoYi                                                        |
| :------------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **Frontend Project**                  | Rewritten using Vue3 + TS + ElementPlus                      | Based on Vue2/Vue3 + JS                                      |
| **Backend Project Structure**         | Plugin-based + extension package form, decoupled structure, easy to extend | Modules inject into each other, heavily coupled, difficult to extend |
| **Backend Code Style**                | Strictly follows Alibaba规范 and project-unified code formatting | Code writing and structure differ from conventions, creating reading barriers |
| **Web Container**                     | Uses Undertow, a high-performance container based on XNIO    | Uses Tomcat                                                  |
| **Permission Authentication**         | Uses Sa-Token, Jwt; static use, full-featured, low coupling, high extensibility | Uses Spring Security; cumbersome configuration, poor extensibility |
| **Permission Annotations**            | Uses Sa-Token; supports annotations for login check, role check, permission check, secondary auth check, HttpBasic check, ignore check. Role and permission checks support multiple conditions like `AND`, `OR`, or complex expressions like `Permission OR Role`. | Only supports existence matching                             |
| **Third-party Auth**                  | Uses JustAuth third-party login component; supports dozens of authentications like WeChat, DingTalk | None                                                         |
| **Relational DB Support**             | Natively supports MySQL, Oracle, PostgreSQL, SQLServer. Supports heterogeneous switching (supports all databases mybatis-plus supports, just add JDBC dependency. Success cases include Dameng, Kingbase). | Supports Mysql, Oracle. Does not support concurrent use or heterogeneous switching. |
| **Cache Database**                    | Supports Redis 5-7, supports most new features like distributed rate limiting, distributed queues. | Simple Redis get/set support.                                |
| **Redis Client**                      | Uses Redisson (officially recommended by Redis), Netty-based client tool. Supports over 90% of Redis commands. Underlying optimizations avoid many incorrect usages (e.g., keys converted to scan). Supports standalone, sentinel, single-master cluster, multi-master cluster modes. | Lettuce + RedisTemplate; supports few modes, tools are cumbersome to use. Connection pool uses common-pool, many bugs, frequent issues. |
| **Cache Annotations**                 | Uses Spring-Cache annotations, extended implementation supports more features (e.g., TTL, max idle time, group max length). Data auto-cached with just an annotation. | Requires manual Redis code logic.                            |
| **ORM Framework**                     | Uses Mybatis-Plus; object-based, barely any SQL needed, full Java operation, powerful with many plugins (e.g., multi-tenant, paging, optimistic lock). | Uses Mybatis; XML-based, requires manual SQL writing.        |
| **SQL Monitoring**                    | Uses p6spy; can output complete SQL and execution time monitoring. | Log output; requires manual SQL and parameter拼接, not easy for quick debugging. |
| **Data Paging**                       | Uses Mybatis-Plus paging plugin. Framework extended it, objectified paging object, supports multiple parameter passing methods, supports frontend multi-sorting, complex sorting. | Uses PageHelper; only supports single query paging, parameters only from param, only single sort, poor functionality and extensibility, bad experience. |
| **Data Permissions**                  | Uses Mybatis-Plus plugin;自行 analyzes and拼接 SQL, seamless filtering. Just set annotation conditions on Mapper, supports various customizations, not limited to department/role. | Uses annotation+aop implementation; based on department/role, generated SQL has poor compatibility, doesn't support other business extensions. Generated SQL needs manual splicing onto specific business SQL, doesn't work for multiple Mapper queries. |
| **Data Desensitization**              | Uses annotation + jackson; desensitizes during serialization, supports different conditions per module. Supports multiple strategies: ID card, phone, address, email, bank card, etc. Extensible. | None                                                         |
| **Data Encryption**                   | Uses annotation + mybatis interceptor; auto encrypts/decrypts during data access. Supports multiple strategies: BASE64, AES, RSA, SM2, SM4, etc. | None                                                         |
| **Interface Transmission Encryption** | Uses dynamic AES + RSA to encrypt request body; each request has a different key, greatly reducing crackability. | None                                                         |
| **Data Translation**                  | Uses annotation + jackson; dynamically modifies data during serialization, translates data. Supports multiple modes: `mapping translation`, `direct translation`, `other extended condition translation`. Interface-based, two steps for custom extension. Built-in多种 translation implementations. | None                                                         |
| **Multi-Datasource Framework**        | Uses dynamic-datasource; supports most databases on the market. Dynamically manage heterogeneous databases via yml config, or add datasources via frontend page. Supports SpEL expressions to switch datasource based on request header/parameters. | Based on druid; manual code configuration for datasources, cumbersome configuration, poor support. |
| **Multi-Datasource Transaction**      | Uses dynamic-datasource; supports transaction rollback across different types of databases. | Not supported                                                |
| **Database Connection Pool**          | Uses HikariCP; Spring's built-in connection pool, simple configuration, famous for performance and stability. | Uses druid; many bugs, poor community maintenance, low activity, numerous cumbersome configurations, average performance. |
| **Database Primary Key**              | Uses Snowflake ID; time-based, ordered, increasing, unique ID. No more worries about primary key conflicts during sharding/merging. | Uses database auto-increment ID; limited data volume support, doesn't support unique primary keys across multiple datasources. |
| **WebSocket Protocol**                | Based on Spring's encapsulated WebSocket protocol; extended Token auth and distributed session sync, not just single-machine useless. | None                                                         |
| **SSE Push**                          | Uses Spring SSE implementation; extended Token auth and distributed session sync. | None                                                         |
| **Serialization**                     | Uses Jackson; Spring's built-in serialization, reliable!!!   | Uses fastjson; infamous bugjson                              |
| **Distributed Idempotence**           | Simplified implementation referencing Meituan's GTIS anti-duplication system (details in docs). | Manual annotation implementation based on aop.               |
| **Distributed Lock**                  | Uses Lock4j,底层 based on Redisson.                          | None                                                         |
| **Distributed Task Scheduling**       | Uses SnailJob; natively supports distribution, unified management center, supports multiple databases, sharding, retry, DAG task flows, etc. | Uses Quartz; database lock-based, poor performance, clusters require much configuration and modification. |
| **File Storage**                      | Uses Minio; distributed file storage, natively supports multi-machine, multi-disk, multi-shard, multi-replica storage. Supports permission management, secure, files can be encrypted. | Uses local file storage; files exposed, easily lost/leaked, doesn't support clusters, has single point of failure. |
| **Cloud Storage**                     | Uses AWS S3 protocol client; supports all vendors supporting S3 protocol: Qiniu, Alibaba, Tencent, etc. | Not supported                                                |
| **SMS**                               | Uses sms4j SMS fusion package; supports dozens of SMS vendors. Just configure vendor keys in yml. Multiple vendors can be used together. | Not supported                                                |
| **Email**                             | Uses mail-api universal protocol; supports most email vendors. | Not supported                                                |
| **Interface Documentation**           | Uses SpringDoc, javadoc; annotation-free, zero intrusion based on Java comments. Just write good comments, no need to write lots of doc annotations. | Uses Springfox; discontinued, requires writing大量 annotations to support doc generation. |
| **Validation Framework**              | Uses Validation; supports annotation and utility class validation. Annotations support i18n. | Only supports annotations, and annotations don't support i18n. |
| **Excel Framework**                   | Uses Alibaba EasyExcel; plugin-based. Framework added many features: auto-merge相同 content, auto-arrange layout, dictionary translation, etc. | Based on POI manual implementation; limited functionality, complex, poor extensibility. |
| **Workflow Support**                  | Supports various complex approvals: transfer, delegate, add/sign subtract/sign,会签,或签,票签, etc. | None                                                         |
| **Utility Framework**                 | Uses Hutool, Lombok; hundreds of tools cover 90% of needs. Auto-generates get/set etc. based on annotations, simplifying framework code. | Handwritten tools, unstable, prone to issues. Limited number of tools. Code bloated, need to handwrite get/set etc. |
| **Monitoring Framework**              | Uses SpringBoot-Admin; based on SpringBoot official actuator probe mechanism. Real-time service status monitoring. Framework extended it with online log viewing monitoring. | None                                                         |
| **Tracing**                           | Uses Apache SkyWalking; troubled not knowing where requests went or where problems occurred? Use it to see every node a request passes through in real-time. | None                                                         |
| **Code Generator**                    | Just design the table structure, generate all CRUD code and pages with one click. Reduces development load by 80%, focus on business design. Adapted for MP, SpringDoc standardized code. Supports dynamic multi-datasource code generation. | Code generation for native structure, only supports single datasource generation. |
| **Deployment**                        | Supports Docker orchestration; one-click setup for all environments. Developers no longer worry about environment setup. | Native jar deployment; other environments require manual download, installation, and setup. |
| **Project Path Modification**         | Provides detailed modification plan documentation and made some changes; very easy to modify to your liking. | Requires much modification, limited documentation.           |
| **Internationalization (i18n)**       | Dynamically returns text in different languages based on request header. Low development difficulty, has corresponding utils, supports i18n for most annotation content. | Only provides basic functions, others need self-writing extension. |
| **Code Unit Testing**                 | Provides unit testing, usage methods, writing methods, and maven multi-environment unit test plugin. | Only provides basic functions, others need self-writing extension. |
| **Demo Cases**                        | Provides practical use cases of framework features; a separate module offers many comprehensive examples. | None                                                         |