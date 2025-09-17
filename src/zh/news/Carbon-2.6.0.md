---
title: 轻量级 Golang 时间处理库 Carbon 2.6.0 发布
author: carbon
date: 2025-03-25
cover: /assets/img/news/Carbon-2.6.0-0.png
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/Carbon-2.6.0-0.png)

carbon 是一个轻量级、语义化、对开发者友好的 Golang 时间处理库，提供了对时间穿越、时间差值、时间极值、时间判断、星座、星座、农历、儒略日 / 简化儒略日、波斯历 / 伊朗历的支持。

carbon 目前已捐赠给 dromara\[1\] 开源组织，已被  awesome-go\[2\]  收录，并获得 gitee\[3\] 2024 年最有价值项目（GVP\[4\]）和 gitcode\[5\] 2024 年度 G-Star\[6\] 项目，如果您觉得不错，请给个 star 吧

github.com/dromara/carbon\[7\]

gitee.com/dromara/carbon\[8\]

gitcode.com/dromara/carbon\[9\]

#### 更新日志

*   `golang` 最低版本依赖升级到 `1.18`
    
*   `carbon`, `julian`, `lunar`, `persian` 从值传递改成指针传递
    
*   新增 `ZoneName` 方法获取时区名称
    
*   新增 `HasError` 方法判断是否有错误
    
*   新增 `IsNil` 方法判断是否是 `nil`
    
*   新增 `Copy` 方法对 `carbon` 进行深度复制
    
*   新增示例文件 `xxx_example.go`
    
*   新增`constant.go` 文件，将常量从 `carbon.go` 文件迁移到此文件
    
*   默认全局时区从 `Local` 更改为 `UTC`
    
*   `Offset` 方法更名为 `ZoneOffset`
    
*   `IsSetTestNow` 方法更名为 `IsTestNow`
    
*   `UnSetTestNow`  方法更名为 `CleanTestNow`
    
*   移除 `Location` 方法，由 `Timezone` 方法替代
    
*   更改 `IsValid` 和 `IsInvalid` 方法判断逻辑，`zero time` 不再视为无效时间
    
*   设置全局默认时区时同步更新 `time.Local`
    
*   重构 `database.go`，移除 `carbon.DateTime`、`carbon. DateTimeMilli` 、 `carbon.DateTimeMicro`、`carbon.DateTimeNano`、 `carbon. Date`、`carbon.DateMilli`、 `carbon.DateMicro`、 `carbon.DateNano`、 `carbon.Time`、 `carbon.TimeMilli`、 `carbon.TimeMicro`、  `carbon.TimeNano`、`carbon.Timestamp` 、`carbon.TimestampMilli`  、`carbon.TimestampMicro`、`carbon.TimestampNano` 字段类型, 使用泛型字段替代以实现 `MarshalJSON/UnmarshalJSON` 时自定义输出格式
    

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