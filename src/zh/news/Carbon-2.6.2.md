---
title: Golang 时间处理库 carbon 2.6.2 发布
author: carbon
date: 2025-04-11
cover: /assets/img/news/carbon-2.6.2-0.png
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/carbon-2.6.2-0.png)

  

carbon 是一个轻量级、语义化、对开发者友好的 Golang 时间处理库，提供了对时间穿越、时间差值、时间极值、时间判断、星座、季节、农历、儒略日 / 简化儒略日、波斯历 / 伊朗历的支持。

carbon 目前已捐赠给 dromara\[1\] 开源组织，已被  awesome-go\[2\]  收录，并获得 gitee\[3\] 2024 年最有价值项目（GVP\[4\]）和 gitcode\[5\] 2024 年度 G-Star\[6\] 项目，如果您觉得不错，请给个 star 吧

github.com/dromara/carbon\[7\]

gitee.com/dromara/carbon\[8\]

gitcode.com/dromara/carbon\[9\]

#### 更新日志

*   `CreateFromLunar`, `CreateFromPersian` 方法去掉 `hour`, `minute`, `second` 参数
    
*   更改部分格式符号定义，涉及到的符号有 `U`, `V`, `X`,`S`,`T` `Z`,`u`,`v`,`x`,`z`
    
*   修复农历中 `IsLeapMonth` 判断错误的 bug
    
*   修复 `AtomFormat` 和 `AtomLayout` 格式返回值不一致的 bug
    
*   修复 `RFC3339Format` 和 `RFC3339Layout` 格式返回值不一致的 bug
    
*   设置全局默认时区时不再同步更新 `time.Local`
    
*   新增格式符号`o` 来获取时区偏移量
    
*   新增 `TimestampLayout`、`TimestampMilliLayout`、`TimestampMicroLayout` 和 `TimestampNanoLayout` 常量
    
*   新增 `TimestampFormat`、`TimestampMilliFormat`、`TimestampMicroFormat` 和 `TimestampNanoFormat` 常量
    
*   新增 `DateTimeMilli`、`DateTimeMicro`、`DateTimeNano` 字段类型
    
*   新增 `DateMilli`、`DateMicro`、`DateNano` 字段类型
    
*   新增 `TimeMilli`、`TimeMicro`、`TimeNano` 字段类型
    
*   修复 `IsDST` 方法丢失时区的 bug
    
*   修复 `StartOfXXX`、`EndOfXXX` 部分方法丢失时区的 bug
    
*   修复其他日历转化为公历时缺失时区的 bug
    
*   设置默认时区时不再同步更新  `time.Local`
    
*   新增 `MaxDuration`、`MinDuration` 方法
    

参考资料

\[1\] 

dromara: _https://dromara.org/_

\[2\] 

awesome-go: _https://github.com/avelino/awesome-go#date-and-time_

\[3\] 

gitee: _https://gitee.com_

\[4\] 

GVP: _https://gitee.com/gcp_

\[5\] 

gitcode: _https://gitcode.com_

\[6\] 

G-Star: _https://gitcode.com/g-star_

\[7\] 

github.com/dromara/carbon: _https://github.com/dromara/carbon_

\[8\] 

gitee.com/dromara/carbon: _https://gitee.com/dromara/carbon_

\[9\] 

gitcode.com/dromara/carbon: _https://gitcode.com/dromara/carbon_