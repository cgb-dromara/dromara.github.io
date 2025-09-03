---
title: "NeutrinoProxy 2.0.2 Released: Port Mapping Now Supports Binding Multiple Domain Names"
author: neutrino
date: 2024-12-10
cover: /assets/img/news/NeutrinoProxy-2.0.2-0.png
head:
  - - meta
    - name: News
---

## Project Overview

*   Neutrino Proxy (neutrino-proxy) is a powerful intranet penetration tool based on Solon and Netty. The project adopts the very permissive MIT license, allowing you to copy, modify, distribute, and use it for any personal or commercial purpose.
*   Common products on the market based on intranet penetration include: Peanut Shell, TeamViewer, cpolar, etc.
*   Common use cases:
    *   Local development and debugging of third-party callbacks
    *   Remote API debugging across different locations during local development
    *   Remote login to internal Windows machines
    *   Mapping local services to the public internet for demonstrations

*   GitCode: https://gitcode.com/dromara/neutrino-proxy
*   Gitee Repository: https://gitee.com/dromara/neutrino-proxy
*   Github Repository: https://github.com/dromara/neutrino-proxy
*   Official Website: https://neutrino-proxy.dromara.org

*   ![](/assets/img/news/NeutrinoProxy-2.0.2-0.png)

## Key Features:

*   1. **Traffic Monitoring**: Multi-dimensional traffic monitoring through homepage charts and report management. Gain comprehensive insights into real-time and historical proxy data.
*   2. **User/License**: Supports multiple users and clients. Background disabling takes effect in real-time.
*   3. **Port Pool**: Unified management of external ports, supporting exclusive ports for users and Licenses.
*   4. **Port Mapping**: Real-time生效 for adding, editing, deleting, and disabling mappings.
*   5. **Docker**: Supports one-click Docker deployment for both server and client.
*   6. **SSL Certificates**: Tunnel communication supports SSL encryption to protect your data security.
*   7. **Domain Mapping**: Supports binding multiple subdomains, facilitating local debugging of third-party callbacks.
*   8. **Multiple Protocols**: Supports proxying TCP, HTTP, HTTPS, and UDP protocols.
*   9. **Native Deployment**: Can be compiled into native executable files for lower deployment barriers and less memory usage.
*   10. **Security Groups**: Supports blacklist/whitelist IP access restrictions.
*   11. **Speed Limiting**: Supports limiting upload/download speeds for Licenses and port mappings.
*   12. **Uses the very permissive MIT license**, eliminating your concerns.

## Updates in This Release

*   **Bug Fixes**
    *   Fixed issue where security groups incorrectly blocked access in IPv6 scenarios, causing domain mapping failures.
    *   Fixed batch deletion error in the port pool after native compilation.
    *   Fixed issue where environment variables specifying parameters did not take effect in client Docker deployments.
    *   Server: Fixed error in the log cleanup scheduled task under native deployment.
    *   Fixed known issues with background pagination queries.
    *   Extended the client IP field length in port mapping to resolve field length issues when configuring Alibaba Cloud database domains.
    *   Server: Fixed native deployment warning log "you should use: nativeMetadata.registerField(field) at aot runtime" when accessing the background user list.

*   **New Features**
    *   Added background domain management, supporting addition, modification, deletion, and disabling of primary domains, and adding multi-level domains.
    *   Domain management supports uploading SSL certificates for corresponding domains, enabling forced HTTPS, and automatically loading corresponding server certificates for domain mappings.
    *   Port mapping now supports switching between different primary domains, binding multiple subdomains, and a single port can bind multiple different primary domains.

## Installation and Usage Instructions

*   Quick Start Guide: https://neutrino-proxy.dromara.org/neutrino-proxy/pages/793dcb/
*   Supported Deployment Methods:
    *   Windows
    *   Linux
    *   Mac
    *   1. JAR
    *   2. Docker
    *   3. Native
    *   4. Docker-compose

*   **Upgrade Notes:**
    *   **Configuration of domains and SSL certificates has been moved from config files to the background domain management page.**
    *   The method of declaring server domains and certificates via config files has been removed; please manage them via the page and perform necessary data migration.
    *   Database additions include `domain table` and `domain mapping intermediate table`. The `port mapping table` has been modified. This involves schema changes; please execute the incremental SQL.

## Running Examples

#### License Speed Limiting

![](/assets/img/news/NeutrinoProxy-2.0.2-1.png)

#### Port Mapping Speed Limiting

![](/assets/img/news/NeutrinoProxy-2.0.2-2.png)

#### Port Mapping Binding Multiple Domains

![](/assets/img/news/NeutrinoProxy-2.0.2-3.png)

#### Security Groups

![](/assets/img/news/NeutrinoProxy-2.0.2-4.png)

![](/assets/img/news/NeutrinoProxy-2.0.2-5.png)

## Contact Us

The author's time and ability are limited, and an open-source project is not built overnight—issues are inevitable. If you encounter any problems during use or learning, please feel free to contact me.

If you have any ideas or suggestions for the project, you can add my WeChat to join the discussion group or create issues to help improve the project together.

*   WeChat ID: yuyunshize
*   Email: aoshiguchen@dromara.org
*   WeChat QR Code (Please note "Neutrino Group" when adding):

![](/assets/img/news/NeutrinoProxy-2.0.2-6.jpg)

---

### About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a range of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, and scheduling orchestration. The community is committed to full open-source collaboration and maintains neutrality, striving to provide microservices cloud-native solutions for global users. We aim to let every participating open-source enthusiast experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built a community of tens of thousands of members and is used by thousands of individuals and teams.

**Welcome everyone to join the Knowledge Planet and interact with me!**

![](/assets/img/news/NeutrinoProxy-2.0.2-7.png)