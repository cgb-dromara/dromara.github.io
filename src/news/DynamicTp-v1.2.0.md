---
title: "Dynamic Thread Pool v1.2.0 Released: Core Module Removes Dependency on Spring!"
author: February 18, 2025 09:35
date: 2025-02-18
cover: /assets/img/news/DynamicTp-v1.2.0-0.png
head:
  - - meta
    - name: News
---

## Introduction to DynamicTp

DynamicTp is a lightweight dynamic thread pool monitoring and management tool based on a configuration center. Its main features can be summarized into several categories: dynamic parameter adjustment, notification alerts, runtime monitoring, and third-party package thread pool management.

![](/assets/img/news/DynamicTp-v1.2.0-0.png)

## Features of DynamicTp

**After multiple iterations, the latest version v1.2.0 now includes the following features** ✅

![](/assets/img/news/DynamicTp-v1.2.0-1.png)

## v1.2.0 Upgrade Notes

*   The Spring startup class annotation has been moved to the Spring module, and the package path has been adjusted. It must be re-imported.

```
org.dromara.dynamictp.spring.annotation.EnableDynamicTp
```

*   The configuration file prefix has been adjusted from `spring.dynamic.tp` to `dynamictp`.

```
dynamictp:
  enabled: true
  enabledBanner: true
  enabledCollect: true
```

## v1.2.0 Release Notes

In versions v1.1.9 and earlier, the core module had a strong dependency on Spring, and the code utilized many Spring-specific features, which made it difficult to integrate into non-Spring projects.

v1.2.0 is a major release that primarily focuses on decoupling from Spring. Spring-related features are now provided as an independent module, allowing non-Spring frameworks to integrate DynamicTp by simply including the core module.

#### Feature

*   Removed dependency on Spring in the core module, making it easier to use in other non-Spring projects.

```
https://github.com/dromara/dynamic-tp/issues/527
```

#### Bugfix

*   Compatibility fix for Dubbo versions between 3.0.9 and 3.1.8, where the executor name to be replaced should be `INTERNAL_SERVICE_EXECUTOR` instead of `ExecutorService.class.getName()`.

```
https://github.com/dromara/dynamic-tp/pull/495
```

*   Fixed an issue with the Redis rate limiter throwing errors in Redis Cluster mode.

```
https://github.com/dromara/dynamic-tp/pull/502
```

*   Fixed an error when canceling a `scheduledFuture`.

```
https://github.com/dromara/dynamic-tp/pull/516
```

*   Fixed an issue in the `adapter-grpc` module where the gRPC client channel executor was being shut down, causing thread pool shutdown errors during calls.

```
https://github.com/dromara/dynamic-tp/pull/520
```

*   Added compatibility for higher versions of OkHttp3, where the thread pool field in `Dispatcher` is named `executorServiceOrNull`.

```
https://github.com/dromara/dynamic-tp/pull/525
```

#### Optimize

*   Improved the configuration file hint functionality for thread pools.

```
https://github.com/dromara/dynamic-tp/pull/498
```

*   Added timeout control for etcd `kvClient` get operations.

```
https://github.com/dromara/dynamic-tp/pull/518
```

*   Zookeeper-starter client initialization now supports ZK authentication.

```
https://gitee.com/dromara/dynamic-tp/pulls/61
```

*   Optimized and refactored parts of the code design.

## Join the Community

The above covers all the content of this release. Everyone is welcome to upgrade and try it out!

If you encounter any issues during use or have ideas or suggestions for the project, feel free to join our community and discuss with over 1,500 members.

![](/assets/img/news/DynamicTp-v1.2.0-2.png)

## Project Links

```
Official Website: https://dynamictp.cn
Gitee: https://gitee.com/dromara/dynamic-tp
GitHub: https://github.com/dromara/dynamic-tp
```