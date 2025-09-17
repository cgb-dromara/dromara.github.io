---
title: New Open Source Project Carbon Joins Dromara, A Time Tool for Gophers
author: carbon
date: 2024-10-24
cover: /assets/img/news/Carbon-0-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/Carbon-0-0.png)

For `gopher`s, time processing is a common yet complex issue, especially when relying solely on the built-in `time.Time` package. A particular pain point is time formatting, where a fixed `Layout` must be used, such as:

```go
now := time.Now()
// These numbers must be written exactly like this, otherwise the converted time will be莫名其妙 (utterly confusing)
strNow := now.Format("2006/01/02 03:04:05")
```

This is where `carbon` shines. If you work with dates and times in the `Golang` ecosystem and haven't heard of the `Carbon` library, I strongly advise you to review your existing date and time related code to see how much time `Carbon` could save you.

`Carbon` is a lightweight, semantic, and developer-friendly time manipulation library designed specifically for `Golang`, hailed as the Swiss Army knife for time handling in Golang. It provides a series of concise yet powerful `APIs`, making time operations exceptionally simple. Whether it's basic datetime calculations or complex timezone conversions, `Carbon` handles it with ease. Furthermore, `Carbon` has been included in `awesome-go` and awarded the Annual Most Valuable Project (`GVP`) by `gitee`, demonstrating its popularity within the `Golang` community.

#### Installation & Usage

##### Golang version >= 1.17 (Recommended)

```bash
# Using github library
go get -u github.com/golang-module/carbon/v2

import "github.com/golang-module/carbon/v2"

# Using gitee library
go get -u gitee.com/golang-module/carbon/v2

import "gitee.com/golang-module/carbon/v2"
```

##### Golang version < 1.17 (Required)

```bash
# Using github library
go get -u github.com/golang-module/carbon

import "github.com/golang-module/carbon"

# Using gitee library
go get -u gitee.com/golang-module/carbon

import "gitee.com/golang-module/carbon"
```

#### Usage Examples

> Assuming the current time is 2020-08-05 13:14:15.999999999 +0800 CST

##### Set Global Defaults

```go
carbon.SetDefault(carbon.Default{
    Layout:       carbon.DateTimeLayout,
    Timezone:     carbon.PRC,
    WeekStartsAt: carbon.Sunday,
    Locale:       "zh-CN", // Valid values: translation file names in the lang directory, excluding file extensions
})
```

##### Conversion between `Carbon` and `time.Time`

```go
// Convert standard time.Time to Carbon
carbon.CreateFromStdTime(time.Now())
// Convert Carbon to standard time.Time
carbon.Now().StdTime()
```

##### Yesterday, Today, Tomorrow

*(Numerous examples showing various string representations and timestamps for today, yesterday, and tomorrow across different timezones)*

##### Create `Carbon` Instances

*(Examples showing creation from timestamps (seconds, milliseconds, microseconds, nanoseconds), from datetime components (year, month, day, hour, minute, second, with optional fractional seconds), from date components only, and from time components only (using current date))*

##### Parse `Time String` into `Carbon` Instance

*(Extensive examples showing parsing of various string formats including empty strings, relative strings ("now", "yesterday"), partial dates ("2020", "2020-8"), full datetimes with different separators and precision levels, ISO 8601 formats with timezone offsets, and compact numeric formats)*

`Carbon` also provides support for time travel, time differences, time extremes, time judgments, zodiac signs, constellations, the lunar calendar, Julian Day / Modified Julian Day, and the Persian/Iranian calendar.

##### Convert `Gregorian Calendar` to `Lunar Calendar`

*(Examples demonstrating various methods to get lunar calendar properties: animal zodiac, festival, year, month, leap month, day, hour, minute, second, string representations in Chinese, checks for zero value, leap year, leap month, and specific animal years)*

##### Convert `Lunar Calendar` to `Gregorian Calendar`

```go
// Convert Lunar 二零二三年腊月十一 (23rd year of the cycle, 12th month, 11th day) to Gregorian
carbon.CreateFromLunar(2023, 12, 11, 0, 0, 0, false).ToDateTimeString() // 2024-01-21 00:00:00
// Convert Lunar 二零二三年二月十一 (23rd year, 2nd month, 11th day) to Gregorian
carbon.CreateFromLunar(2023, 2, 11, 0, 0, 0, false).ToDateTimeString() // 2023-03-02 00:00:00
// Convert Lunar 二零二三年闰二月十一 (23rd year, Leap 2nd month, 11th day) to Gregorian
carbon.CreateFromLunar(2023, 2, 11, 0, 0, 0, true).ToDateTimeString() // 2023-04-01 00:00:00
```

It currently supports 26 languages including Simplified Chinese, Traditional Chinese, English, Japanese, German, Spanish, French, Arabic, and more.

![](/assets/img/news/Carbon-0-1.png)

##### Conclusion

Whether you are a novice or an experienced `Golang` developer, `Carbon` is a library worth trying. With it, you can handle time issues more elegantly, improving code readability and development efficiency. Introduce `Carbon` into your project now and enjoy the fun of programming!

GitHub: https://github.com/dromara/carbon

Gitee: https://gitee.com/dromara/carbon