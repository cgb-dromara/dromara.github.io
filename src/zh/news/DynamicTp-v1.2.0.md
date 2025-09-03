---
title: 动态线程池 v1.2.0 版本发布，核心模块移除对 Spring 的依赖！
author: 2025年02月18日 09:35
date: 2025-02-18
cover: /assets/img/news/DynamicTp-v1.2.0-0.png
head:
  - - meta
    - name: 新闻
---

## DynamicTp 简介

DynamicTp 是一款基于配置中心的轻量级动态线程池监控管理工具，主要功能可以总结为动态调参、通知报警、运行监控、三方包线程池管理等几大类。

![](/assets/img/news/DynamicTp-v1.2.0-0.png)

## DynamicTp 特性

**经过多个版本的迭代，目前最新版本 v1.2.0 具有以下特性** ✅

![](/assets/img/news/DynamicTp-v1.2.0-1.png)

## v1.2.0 升级注意事项

*   Spring 启动类注解移动到 Spring 模块中，包路径有调整，需重新导入
    

```
org.dromara.dynamictp.spring.annotation.EnableDynamicTp
```

*   配置文件前缀有调整，从 spring.dynamic.tp 调整为 dynamictp
    

```
dynamictp:
  enabled: true
  enabledBanner: true
  enabledCollect: true
```

## v1.2.0 发版记录

v1.1.9 及之前版本核心模块强依赖 Spring，代码中用到了不少 Spring 的特性，这样不利于其他非 Spring 项目的接入集成。

v1.2.0 是一个大版本，主要功能是对 Spring 做了解耦，Spring 相关特性以独立 Module 的形式提供，其他非 Spring 框架集成 DynamicTp 时通过引入核心模块即可。

#### Feature

*   核心模块中移除对 Spring 的依赖，方便在其他非 Spring 项目中使用。
    

```
https://github.com/dromara/dynamic-tp/issues/527
```

#### Bugfix

*   兼容当 Dubbo 版本在 3.0.9 到 3.1.8 之间时，需要替换的执行器命名为 INTERNAL\_SERVICE\_EXECUTOR，而不是 ExecutorService.class.getName()。
    

```
https://github.com/dromara/dynamic-tp/pull/495
```

*   修复 Redis 限流器在 Redis Cluster 模式下报错问题。
    

```
https://github.com/dromara/dynamic-tp/pull/502
```

*   修复执行 scheduledFuture cancel 报错问题。
    

```
https://github.com/dromara/dynamic-tp/pull/516
```

*   修复 adapter-grpc 模块，grpc client channel executor 被关闭，调用报线程池关闭的错误。
    

```
https://github.com/dromara/dynamic-tp/pull/520
```

*   兼容高版本 okhttp3 Dispatcher 中线程池字段为 executorServiceOrNull 的情况。
    

```
https://github.com/dromara/dynamic-tp/pull/525
```

#### Optimize

*   优化线程池配置文件提示功能。
    

```
https://github.com/dromara/dynamic-tp/pull/498
```

*   etcd kvClient get 添加超时时间控制。
    

```
https://github.com/dromara/dynamic-tp/pull/518
```

*   zookeeper-starter 客户端初始化支持 zk 认证。
    

```
https://gitee.com/dromara/dynamic-tp/pulls/61
```

*   部分代码设计优化重构
    

## 加入社群

以上就是本次发版的全部内容。欢迎大家升级体验！

使用过程中有任何问题，或者对项目有什么想法或者建议，可以加入社群，跟 1500+ 群友一起交流讨论。

  

![](/assets/img/news/DynamicTp-v1.2.0-2.png)

## 项目地址

```

官网：https://dynamictp.cn

gitee：https://gitee.com/dromara/dynamic-tp

github：https://github.com/dromara/dynamic-tp

```