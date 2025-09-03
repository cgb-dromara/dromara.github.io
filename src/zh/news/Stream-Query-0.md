---
title: 告别繁琐 Mapper！Stream-Query 正式入驻 GitCode 平台
author: 2025年08月04日 08:54
date: 2025-08-04
cover: /assets/img/news/Stream-Query-0-0.gif
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/Stream-Query-0-0.gif)

  

在Java开发领域，MyBatis-Plus 作为 MyBatis 的增强工具，因其简化 CRUD 操作而广受欢迎。但你是否曾为这些问题感到困扰？

  

🤕 Mapper 接口泛滥：每个实体类都要写一个 Mapper，项目里堆满了 XxxMapper.java 文件

😠 复杂查询臃肿：处理一对多查询时，要手动循环查多次数据库，代码像"意大利面条"一样难维护

😣 Stream 操作重复：同样的 stream().filter().map() 写了无数遍，却找不到优雅的封装方式

  

现在，开源项目 Stream-Query 已正式入驻 GitCode 平台成为 G-Star 优秀毕业项目，将彻底改变你对 MyBatis-Plus 的认知！

  

![](/assets/img/news/Stream-Query-0-1.jpg)

  

**🚀 项目亮点：像工具类一样操作数据库**

  

  

Stream-Query 的核心目标是让开发者完全摆脱 Mapper 的束缚。通过该项目，你可以像调用工具类静态方法一样轻松完成数据库操作，大大提升开发效率。

  

![](/assets/img/news/Stream-Query-0-2.png)

  

**✨ 三大核心功能**

  

  

1.  动态 Mapper 黑科技：项目采用 Byte-Buddy 技术实现运行时动态生成 Mapper，无需再为每个实体类编写繁琐的 Mapper 接口。 
    
2.  Stream 式查询处理：针对复杂查询场景，Stream-Query 提供了一对一、一对多等关系的便捷处理方式，轻松完成多次单表查询的数据组装。 
    
3.  Stream 操作简化：独创的 Steam 类（Steam = Stream-r，r 代表 Repeat），专门用于减少 Stream API 的重复代码，让函数式编程更加优雅。
    

  

**🎯 项目初衷与愿景**

  

  

Stream-Query 的诞生源于开发者对现代 Java 开发中 ORM 使用痛点的深刻洞察。

  

在日常开发实践中，项目创始人发现大多数开发者花费了过多时间在编写重复的 Mapper 接口、处理复杂的关联查询以及编写冗长的 Stream 操作上，这些机械性工作严重分散了开发者对核心业务逻辑的专注度。正是基于这样的观察，团队决心打造一个能够真正解放开发者生产力的工具，让数据库操作变得像使用工具类一样简单直观。

  

项目从创立之初就确立了明确的技术哲学：通过智能封装降低复杂度，而非简单叠加功能。这种理念体现在动态 Mapper 的巧妙实现上，它既保留了 MyBatis-Plus 的强大功能，又消除了其最繁琐的部分。而在 Stream 处理方面，项目创造性地引入了 "Stream-r" 的概念，将开发者从重复的流式操作中解放出来。

  

团队相信，通过持续的技术创新和社区共建，Stream-Query 有望成为 Java 生态中数据库操作的事实标准。未来，Stream-Query 将持续优化动态 Mapper 的性能，并进一步丰富 Stream 操作的工具方法，在这个过程中，每个开发者的反馈和建议都将成为推动项目进步的重要力量，共同塑造下一代 Java 数据访问层的最佳实践。 

  

* * *

  

来GitCode平台：立刻体验 Stream-Query

💻开源许可证：Apache License v2.0

📮项目地址：http://gitcode.com/dromara/stream-query

  

  

![](/assets/img/news/Stream-Query-0-3.png)

**推荐阅读**

[![](/assets/img/news/Stream-Query-0-4.png)](https://mp.weixin.qq.com/s?__biz=MzkyNjY0MDY1Ng==&mid=2247491795&idx=1&sn=70e669c10491d17c0fda127ffc116a42&scene=21#wechat_redirect)

GitCode首批百大开源项目入围名单出炉  

[![](/assets/img/news/Stream-Query-0-5.png)](https://mp.weixin.qq.com/s?__biz=MzkyNjY0MDY1Ng==&mid=2247489603&idx=1&sn=66a5adee615b79d841558c0b54b5881f&scene=21#wechat_redirect)

【投稿赢 iPhone 17】「我的第一个开源项目」

![](/assets/img/news/Stream-Query-0-6.png)