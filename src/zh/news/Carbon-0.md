---
title: 新晋开源项目 Carbon 加入 Dromara，Gopher 的时间工具来了
author: carbon
tag:
  - Carbon
date: 2024-10-24
cover: /assets/img/news/Carbon-0-0.png
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/Carbon-0-0.png)

对于 `gopher` 来说，时间处理是一个常见但又复杂的问题，特别是仅依赖内置的 `time.Time` 包时，尤其是我们在格式化时间的时候，需要用固定的 `Layout`，如

```
now := time.Now()
 // 这几个数字不能乱写，不然转化过来的时间会很莫名其妙
strNow := now.Format("2006/01/02 03:04:05")
```

这时 `carbon` 的用武之地就展现出来了，在 `Golang` 语言圈中，如果你是做日期和时间相关的工作，还没有听说过 `Carbon`库，我劝你还是把之前编写的日期和时间相关的代码再捋一捋，看看`Carbon`能帮你节省多少时间。

`Carbon` 是一个专为 `Golang` 设计的轻量级、语义化、对开发者友好的 时间处理库，被誉为 `Golang` 时间处理的瑞士军刀，它提供了一系列简洁而强大的 `API`，使得时间操作变得异常简单。无论是基本的日期时间计算，还是复杂的时区转换，`Carbon` 都能轻松应对。此外，`Carbon` 已经被 `awesome-go` 收录，还被 `gitee` 评选为年度最有价值项目(`GVP`)，证明了其在 `Golang` 社区中的受欢迎程度。

#### 安装使用

##### Golang 版本大于等于 1.17 (推荐)

```
// 使用 github 库
go get -u github.com/golang-module/carbon/v2

import "github.com/golang-module/carbon/v2"

// 使用 gitee 库
go get -u gitee.com/golang-module/carbon/v2

import "gitee.com/golang-module/carbon/v2"
```

##### Golang 版本小于 1.17 (必须)

```
// 使用 github 库
go get -u github.com/golang-module/carbon

import "github.com/golang-module/carbon"

// 使用 gitee 库
go get -u gitee.com/golang-module/carbon

import "gitee.com/golang-module/carbon"
```

#### 用法示例

> 假设当前时间为 2020-08-05 13:14:15.999999999 +0800 CST

##### 设置全局默认值

```
carbon.SetDefault(carbon.Default{
    Layout: carbon.DateTimeLayout, 
    Timezone: carbon.PRC, 
    WeekStartsAt: carbon.Sunday, 
    Locale: "zh-CN", // 取值范围：lang 目录下翻译文件名，不包含文件后缀
})
```

##### `Carbon` 和 `time.Time` 互转

```
// 将标准 time.Time 转换成 Carboncarbon.CreateFromStdTime(time.Now())
// 将 Carbon 转换成标准 time.Timecarbon.Now().StdTime()
```

##### 昨天、今天、明天

```
// 今天此刻
fmt.Printf("%s", carbon.Now()) // 2020-08-05 13:14:15
carbon.Now().String() // 2020-08-05 13:14:15
carbon.Now().ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Now().ToDateTimeString() // 2020-08-05 13:14:15
// 今天日期
carbon.Now().ToDateString() // 2020-08-05
// 今天时间
carbon.Now().ToTimeString() // 13:14:15
// 指定时区的今天此刻
carbon.Now(Carbon.NewYork).ToDateTimeString() // 2020-08-05 14:14:15
// 今天秒级时间戳
carbon.Now().Timestamp() // 1596604455
// 今天毫秒级时间戳
carbon.Now().TimestampMilli() // 1596604455999
// 今天微秒级时间戳
carbon.Now().TimestampMicro() // 1596604455999999
// 今天纳秒级时间戳
carbon.Now().TimestampNano() // 1596604455999999999

// 昨天此刻
fmt.Printf("%s", carbon.Yesterday()) // 2020-08-04 13:14:15
carbon.Yesterday().String() // 2020-08-04 13:14:15
carbon.Yesterday().ToString() // 2020-08-04 13:14:15 +0800 CST
carbon.Yesterday().ToDateTimeString() // 2020-08-04 13:14:15
// 昨天日期
carbon.Yesterday().ToDateString() // 2020-08-04
// 昨天时间
carbon.Yesterday().ToTimeString() // 13:14:15
// 指定日期的昨天此刻
carbon.Parse("2021-01-28 13:14:15").Yesterday().ToDateTimeString() // 2021-01-27 13:14:15
// 指定时区的昨天此刻
carbon.Yesterday(Carbon.NewYork).ToDateTimeString() // 2020-08-04 14:14:15
// 昨天秒级时间戳
carbon.Yesterday().Timestamp() // 1596518055
// 昨天毫秒级时间戳
carbon.Yesterday().TimestampMilli() // 1596518055999
// 昨天微秒级时间戳
carbon.Yesterday().TimestampMicro() // 1596518055999999
// 昨天纳秒级时间戳
carbon.Yesterday().TimestampNano() // 1596518055999999999

// 明天此刻
fmt.Printf("%s", carbon.Tomorrow()) // 2020-08-06 13:14:15
carbon.Tomorrow().String() // 2020-08-06 13:14:15
carbon.Tomorrow().ToString() // 2020-08-06 13:14:15 +0800 CST
carbon.Tomorrow().ToDateTimeString() // 2020-08-06 13:14:15
// 明天日期
carbon.Tomorrow().ToDateString() // 2020-08-06
// 明天时间
carbon.Tomorrow().ToTimeString() // 13:14:15
// 指定日期的明天此刻
carbon.Parse("2021-01-28 13:14:15").Tomorrow().ToDateTimeString() // 2021-01-29 13:14:15
// 指定时区的明天此刻
carbon.Tomorrow(Carbon.NewYork).ToDateTimeString() // 2020-08-06 14:14:15
// 明天秒级时间戳
carbon.Tomorrow().Timestamp() // 1596690855
// 明天毫秒级时间戳
carbon.Tomorrow().TimestampMilli() // 1596690855999
// 明天微秒级时间戳
carbon.Tomorrow().TimestampMicro() // 1596690855999999
// 明天纳秒级时间戳
carbon.Tomorrow().TimestampNano() // 1596690855999999999
```

##### 创建 `Carbon` 实例

```
// 从秒级时间戳创建 Carbon 实例
carbon.CreateFromTimestamp(-1).ToString() // 1970-01-01 07:59:59 +0800 CST
carbon.CreateFromTimestamp(0).ToString() // 1970-01-01 08:00:00 +0800 CST
carbon.CreateFromTimestamp(1).ToString() // 1970-01-01 08:00:01 +0800 CST
carbon.CreateFromTimestamp(1649735755).ToString() // 2022-04-12 11:55:55 +0800 CST
// 从毫秒级时间戳创建 Carbon 实例
carbon.CreateFromTimestampMilli(1649735755981).ToString() // 2022-04-12 11:55:55.981 +0800 CST
// 从微秒级时间戳创建 Carbon 实例
carbon.CreateFromTimestampMicro(1649735755981566).ToString() // 2022-04-12 11:55:55.981566 +0800 CST
// 从纳秒级时间戳创建 Carbon 实例
carbon.CreateFromTimestampNano(1649735755981566000).ToString() // 2022-04-12 11:55:55.981566 +0800 CST

// 从年月日时分秒创建 Carbon 实例
carbon.CreateFromDateTime(2020, 8, 5, 13, 14, 15).ToString() // 2020-08-05 13:14:15 +0800 CST
// 从年月日时分秒创建 Carbon 实例，包含毫秒
carbon.CreateFromDateTimeMilli(2020, 8, 5, 13, 14, 15, 999).ToString() // 2020-08-05 13:14:15.999 +0800 CST
// 从年月日时分秒创建 Carbon 实例，包含微秒
carbon.CreateFromDateTimeMicro(2020, 8, 5, 13, 14, 15, 999999).ToString() // 2020-08-05 13:14:15.999999 +0800 CST
// 从年月日时分秒创建 Carbon 实例，包含纳秒
carbon.CreateFromDateTimeNano(2020, 8, 5, 13, 14, 15, 999999999).ToString() // 2020-08-05 13:14:15.999999999 +0800 CST

// 从年月日创建 Carbon 实例
carbon.CreateFromDate(2020, 8, 5).ToString() // 2020-08-05 00:00:00 +0800 CST
// 从年月日创建 Carbon 实例，包含毫秒
carbon.CreateFromDateMilli(2020, 8, 5, 999).ToString() // 2020-08-05 00:00:00.999 +0800 CST
// 从年月日创建 Carbon 实例，包含微秒
carbon.CreateFromDateMicro(2020, 8, 5, 999999).ToString() // 2020-08-05 00:00:00.999999 +0800 CST
// 从年月日创建 Carbon 实例，包含纳秒
carbon.CreateFromDateNano(2020, 8, 5, 999999999).ToString() // 2020-08-05 00:00:00.999999999 +0800 CST

// 从时分秒创建 Carbon 实例(年月日默认为当前年月日)
carbon.CreateFromTime(13, 14, 15).ToString() // 2020-08-05 13:14:15 +0800 CST
// 从时分秒创建 Carbon 实例(年月日默认为当前年月日)，包含毫秒
carbon.CreateFromTimeMilli(13, 14, 15, 999).ToString() // 2020-08-05 13:14:15.999 +0800 CST
// 从时分秒创建 Carbon 实例(年月日默认为当前年月日)，包含微秒
carbon.CreateFromTimeMicro(13, 14, 15, 999999).ToString() // 2020-08-05 13:14:15.999999 +0800 CST
// 从时分秒创建 Carbon 实例(年月日默认为当前年月日)，包含纳秒
carbon.CreateFromTimeNano(13, 14, 15, 999999999).ToString() // 2020-08-05 13:14:15.999999999 +0800 CST
```

##### 将 `时间字符串` 解析成 `Carbon` 实例

```
carbon.Parse("").ToDateTimeString() // 空字符串
carbon.Parse("0").ToDateTimeString() // 空字符串
carbon.Parse("00:00:00").ToDateTimeString() // 空字符串
carbon.Parse("0000-00-00").ToDateTimeString() // 空字符串
carbon.Parse("0000-00-00 00:00:00").ToDateTimeString() // 空字符串

carbon.Parse("now").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("yesterday").ToString() // 2020-08-04 13:14:15 +0800 CST
carbon.Parse("tomorrow").ToString() // 2020-08-06 13:14:15 +0800 CST

carbon.Parse("2020").ToString() // 2020-01-01 00:00:00 +0800 CST
carbon.Parse("2020-8").ToString() // 2020-08-01 00:00:00 +0800 CST
carbon.Parse("2020-08").ToString() // 2020-08-01 00:00:00 +0800 CST
carbon.Parse("2020-8-5").ToString() // 2020-08-05 00:00:00 +0800 CST
carbon.Parse("2020-8-05").ToString() // 2020-08-05 00:00:00 +0800 CST
carbon.Parse("2020-08-05").ToString() // 2020-08-05 00:00:00 +0800 CST
carbon.Parse("2020-08-05.999").ToString() // 2020-08-05 00:00:00.999 +0800 CST
carbon.Parse("2020-08-05.999999").ToString() // 2020-08-05 00:00:00.999999 +0800 CST
carbon.Parse("2020-08-05.999999999").ToString() // 2020-08-05 00:00:00.999999999 +0800 CST

carbon.Parse("2020-8-5 13:14:15").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-8-05 13:14:15").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-08-5 13:14:15").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-08-05 13:14:15").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-08-05 13:14:15.999").ToString() // 2020-08-05 13:14:15.999 +0800 CST
carbon.Parse("2020-08-05 13:14:15.999999").ToString() // 2020-08-05 13:14:15.999999 +0800 CST
carbon.Parse("2020-08-05 13:14:15.999999999").ToString() // 2020-08-05 13:14:15.999999999 +0800 CST

carbon.Parse("2020-8-5T13:14:15+08:00").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-8-05T13:14:15+08:00").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-08-05T13:14:15+08:00").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("2020-08-05T13:14:15.999+08:00").ToString() // 2020-08-05 13:14:15.999 +0800 CST
carbon.Parse("2020-08-05T13:14:15.999999+08:00").ToString() // 2020-08-05 13:14:15.999999 +0800 CST
carbon.Parse("2020-08-05T13:14:15.999999999+08:00").ToString() // 2020-08-05 13:14:15.999999999 +0800 CST

carbon.Parse("20200805").ToString() // 2020-08-05 00:00:00 +0800 CST
carbon.Parse("20200805131415").ToString() // 2020-08-05 13:14:15 +0800 CST
carbon.Parse("20200805131415.999").ToString() // 2020-08-05 13:14:15.999 +0800 CST
carbon.Parse("20200805131415.999999").ToString() // 2020-08-05 13:14:15.999999 +0800 CST
carbon.Parse("20200805131415.999999999").ToString() // 2020-08-05 13:14:15.999999999 +0800 CST
carbon.Parse("20200805131415.999+08:00").ToString() // 2020-08-05 13:14:15.999 +0800 CST
carbon.Parse("20200805131415.999999+08:00").ToString() // 2020-08-05 13:14:15.999999 +0800 CST
carbon.Parse("20200805131415.999999999+08:00").ToString() // 2020-08-05 13:14:15.999999999 +0800 CST
```

`carbon` 还提供了对时间穿越、时间差值、时间极值、时间判断、星座、星座、农历、儒略日/简化儒略日、波斯历/伊朗历的支持。

##### 将 `公历` 转换成 `农历`

```
// 获取农历生肖
carbon.Parse("2020-08-05 13:14:15").Lunar().Animal() // 鼠
// 获取农历节日
carbon.Parse("2021-02-12 13:14:15").Lunar().Festival() // 春节

// 获取农历年份
carbon.Parse("2020-08-05 13:14:15").Lunar().Year() // 2020
// 获取农历月份
carbon.Parse("2020-08-05 13:14:15").Lunar().Month() // 6
// 获取农历闰月月份
carbon.Parse("2020-08-05 13:14:15").Lunar().LeapMonth() // 4
// 获取农历日期
carbon.Parse("2020-08-05 13:14:15").Lunar().Day() // 16
// 获取农历时辰
carbon.Parse("2020-08-05 13:14:15").Lunar().Hour() // 13
// 获取农历分钟
carbon.Parse("2020-08-05 13:14:15").Lunar().Minute() // 14
// 获取农历秒数
carbon.Parse("2020-08-05 13:14:15").Lunar().Second() // 15

// 获取农历日期时间字符串
carbon.Parse("2020-08-05 13:14:15").Lunar().String() // 2020-06-16 13:14:15
fmt.Printf("%s", carbon.Parse("2020-08-05 13:14:15").Lunar()) // 2020-06-16 13:14:15
// 获取农历年字符串
carbon.Parse("2020-08-05 13:14:15").Lunar().ToYearString() // 二零二零
// 获取农历月字符串
carbon.Parse("2020-08-05 13:14:15").Lunar().ToMonthString() // 六月
// 获取农历闰月字符串
carbon.Parse("2020-04-23 13:14:15").Lunar().ToMonthString() // 闰四月
// 获取农历周字符串
carbon.Parse("2020-04-23 13:14:15").Lunar().ToWeekString() // 周四
// 获取农历天字符串
carbon.Parse("2020-08-05 13:14:15").Lunar().ToDayString() // 十六
// 获取农历日期字符串
carbon.Parse("2020-08-05 13:14:15").Lunar().ToDateString() // 二零二零年六月十六

// 是否是零值时间
carbon.Parse("0000-00-00 00:00:00").Lunar().IsZero() // true
carbon.Parse("2020-08-05 13:14:15").Lunar().IsZero() // false

// 是否是农历闰年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsLeapYear() // true
// 是否是农历闰月
carbon.Parse("2020-08-05 13:14:15").Lunar().IsLeapMonth() // false

// 是否是鼠年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsRatYear() // true
// 是否是牛年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsOxYear() // false
// 是否是虎年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsTigerYear() // false
// 是否是兔年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsRabbitYear() // false
// 是否是龙年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsDragonYear() // false
// 是否是蛇年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsSnakeYear() // false
// 是否是马年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsHorseYear() // false
// 是否是羊年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsGoatYear() // false
// 是否是猴年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsMonkeyYear() // false
// 是否是鸡年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsRoosterYear() // false
// 是否是狗年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsDogYear() // false
// 是否是猪年
carbon.Parse("2020-08-05 13:14:15").Lunar().IsPigYear() // false
```

##### 将 `农历` 转化成 `公历`

```
// 将农历 二零二三年腊月十一 转化为 公历
carbon.CreateFromLunar(2023, 12, 11, 0, 0, 0, false).ToDateTimeString() // 2024-01-21 00:00:00
// 将农历 二零二三年二月十一 转化为 公历
carbon.CreateFromLunar(2023, 2, 11, 0, 0, 0, false).ToDateTimeString() // 2023-03-02 00:00:00
// 将农历 二零二三年闰二月十一 转化为 公历
carbon.CreateFromLunar(2023, 2, 11, 0, 0, 0, true).ToDateTimeString() // 2023-04-01 00:00:00
```

目前已支持简体中文、繁体中文、英语、日语、德语、西班牙语、法语、阿拉伯语等26国语言的支持。

![](/assets/img/news/Carbon-0-1.png)

Laravel

##### 结语

无论是新手还是经验丰富的 `Golang` 开发者，`Carbon` 都是一个值得尝试的库。通过它，你可以更加优雅地处理时间问题，提高代码的可读性和开发效率。现在就将 `Carbon` 引入你的项目，享受编程带来的乐趣吧！

GitHub: https://github.com/dromara/carbon

Gitee: https://gitee.com/dromara/carbon