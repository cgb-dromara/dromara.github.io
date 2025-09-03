---
title: ElectronEgg v4 发布，全新的开发体验
author: ElectronEgg
date: 2025-03-04
cover: /assets/img/news/ElectronEgg-v4-0.jpg
head:
  - - meta
    - name: 新闻
---

大家好，`electron-egg v4` 终于发布。这个版本是对过去几年EE框架的全面优化，对于我们来说，应该算的上一个理想的版本了，未来几年应该不会有大的改动，当然也会跟进对 electron 的兼容性升级，推荐更新。

v4 重构了框架核心，提供更好的开发体验、加密、ts支持、代码优化、结构调整等等。

目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！

  

![](/assets/img/news/ElectronEgg-v4-0.jpg)

  

  

### 为什么使用

桌面软件（办公方向、 个人工具），仍然是未来十几年 PC 端需求之一，提高工作效率

electron 技术是流行趋势，QQ、抖音、B站、百度翻译、阿里网盘、迅雷、有道云笔记 ......

### 开源

gitee：https://gitee.com/dromara/electron-egg 5300+

github：https://github.com/dromara/electron-egg 2000+

### 本次更新

### 4.0.0

1.  【增加】ee-core 增加 ts 支持，添加类型定义
    
2.  【优化】ee-core 重构代码，提供更标准的api
    
3.  【优化】ee-core 增加app模块，新的框架启动流程
    
4.  【优化】ee-core config 重写配置加载逻辑
    
5.  【优化】ee-core controller 重写控制器加载逻辑
    
6.  【优化】ee-core core 精简 core 模块，去除冗余的代码和功能
    
7.  【优化】ee-core electron 重写功能，提供 api
    
8.  【优化】ee-core jobs 优化
    
9.  【优化】ee-core loader 去除冗余的方法
    
10.  优化】ee-core log 优化
    
11.  【增加】ee-core ps 去除有歧义的 api，新增 appVersion、getDataDir、getBundleDir、getBaseDir、getUserHomeDir、getUserHomeAppDir、getUserHomeHiddenAppDir
    
12.  【优化】ee-core socket 优化
    
13.  【优化】ee-core storage 去除 jsondb, sqlitedb修改存储路径和类型支持
    
14.  【优化】ee-core utils 优化
    
15.  【增加】ee-bin 新增 ts 支持，添加 esbuild 构建工具
    
16.  【增加】ee-bin 新增对前端代码加密
    
17.  【优化】ee-bin 优化 热重载功能
    
18.  【优化】ee-bin 修改配置文件
    
19.  【优化】ee-bin 优化 build 功能
    
20.  【优化】ee-bin 修改 move 命令
    
21.  【升级】ee-bin@4.1.4 & ee-core@4.0.1
    
22.  【升级】node@20.16.0 & electron@31.7.6
    

### 下载

```
# gitee
git clone https://gitee.com/dromara/electron-egg.git

# github
git clone https://github.com/dromara/electron-egg.git
```

### 安装

```
# 根目录，安装 electron 依赖
npm i

# 进入【前端目录】安装 frontend 依赖
cd frontend 
npm i
```

### 运行项目

```
npm run start
```

##   
 

### 用户案例展示

#### 云笔记

![](/assets/img/news/ElectronEgg-v4-1.jpg)

![](/assets/img/news/ElectronEgg-v4-2.png)

#### 远控

![](/assets/img/news/ElectronEgg-v4-3.png)

![](/assets/img/news/ElectronEgg-v4-4.png)

#### 音乐

![](/assets/img/news/ElectronEgg-v4-5.jpg)

![](/assets/img/news/ElectronEgg-v4-6.png)

### 更多

访问官网：https://www.kaka996.com/

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/ElectronEgg-v4-7.webp)