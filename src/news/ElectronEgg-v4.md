---
title: "ElectronEgg v4 Released: A Brand New Development Experience"
author: ElectronEgg
date: 2025-03-04
cover: /assets/img/news/ElectronEgg-v4-0.jpg
head:
  - - meta
    - name: News
---

Hello everyone, `electron-egg v4` is finally here. This version represents a comprehensive optimization of the EE framework over the past few years. For us, it can be considered an ideal release, and no major changes are expected in the coming years, though compatibility upgrades with Electron will continue to be followed. We highly recommend updating.

v4 refactors the core of the framework, offering a better development experience, encryption, TypeScript support, code optimization, structural adjustments, and more.

Currently, the framework is widely used in various client applications across fields such as accounting, government services, enterprises, healthcare, education, stock trading, ERP, entertainment, and video. Feel free to use it with confidence!

![](/assets/img/news/ElectronEgg-v4-0.jpg)

### Why Use It?

Desktop software (for office use and personal tools) remains one of the needs on the PC end for the next decade, improving work efficiency.

Electron technology is a growing trend, used by QQ, TikTok, Bilibili, Baidu Translate, Alibaba Netdisk, Thunder, Youdao Note, and more.

### Open Source

gitee: https://gitee.com/dromara/electron-egg 5300+  
github: https://github.com/dromara/electron-egg 2000+

### This Update

#### 4.0.0

1. 【Added】ee-core now supports TypeScript with type definitions.
2. 【Optimized】ee-core code refactored to provide more standard APIs.
3. 【Optimized】ee-core adds an app module with a new framework startup process.
4. 【Optimized】ee-core config rewritten for configuration loading logic.
5. 【Optimized】ee-core controller rewritten for controller loading logic.
6. 【Optimized】ee-core core module streamlined, removing redundant code and features.
7. 【Optimized】ee-core Electron functionality rewritten to provide APIs.
8. 【Optimized】ee-core jobs improved.
9. 【Optimized】ee-core loader redundant methods removed.
10. 【Optimized】ee-core log improved.
11. 【Added】ee-core ps ambiguous APIs removed; new APIs added: appVersion, getDataDir, getBundleDir, getBaseDir, getUserHomeDir, getUserHomeAppDir, getUserHomeHiddenAppDir.
12. 【Optimized】ee-core socket improved.
13. 【Optimized】ee-core storage jsondb removed; sqlitedb modified for storage path and type support.
14. 【Optimized】ee-core utils improved.
15. 【Added】ee-bin now supports TypeScript with esbuild as the build tool.
16. 【Added】ee-bin adds encryption for frontend code.
17. 【Optimized】ee-bin hot reload functionality improved.
18. 【Optimized】ee-bin configuration file modified.
19. 【Optimized】ee-bin build functionality improved.
20. 【Optimized】ee-bin move command modified.
21. 【Upgraded】ee-bin@4.1.4 & ee-core@4.0.1.
22. 【Upgraded】node@20.16.0 & electron@31.7.6.

### Download

```bash
# gitee
git clone https://gitee.com/dromara/electron-egg.git

# github
git clone https://github.com/dromara/electron-egg.git
```

### Installation

```bash
# Root directory: Install Electron dependencies
npm i

# Enter the frontend directory to install frontend dependencies
cd frontend
npm i
```

### Run the Project

```bash
npm run start
```

### User Case Showcase

#### Cloud Notes

![](/assets/img/news/ElectronEgg-v4-1.jpg)  
![](/assets/img/news/ElectronEgg-v4-2.png)

#### Remote Control

![](/assets/img/news/ElectronEgg-v4-3.png)  
![](/assets/img/news/ElectronEgg-v4-4.png)

#### Music

![](/assets/img/news/ElectronEgg-v4-5.jpg)  
![](/assets/img/news/ElectronEgg-v4-6.png)

### More

Visit the official website: https://www.kaka996.com/

#### About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a range of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, and scheduling orchestration. The community is committed to full open-source collaboration and maintains neutrality, aiming to provide microservices cloud-native solutions for global users. It allows every participating open-source enthusiast to experience the joy of open-source.

The Dromara open-source community currently boasts 10+ GVP projects, with total stars exceeding 100,000. It has built a community of tens of thousands of members, with countless individuals and teams using Dromara's open-source projects.

**Welcome to join the Knowledge Planet and interact with me**

![](/assets/img/news/ElectronEgg-v4-7.webp)