---
title: "Carbon 2.6.0 Released: A Lightweight Golang Time Handling Library"
author: carbon
date: 2025-03-25
cover: /assets/img/news/Carbon-2.6.0-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/Carbon-2.6.0-0.png)

Carbon is a lightweight, semantic, and developer-friendly Golang time handling library. It supports time travel, time difference calculations, time extremes, time judgments, zodiac signs, constellations, the lunar calendar, Julian Day / Modified Julian Day, and the Persian (Iranian) calendar.

Carbon has been donated to the dromara\[1] open-source organization, included in awesome-go\[2], and has received the gitee\[3] 2024 Most Valuable Project (GVP\[4]) award and the gitcode\[5] 2024 G-Star\[6] award. If you find it useful, please give it a star!

github.com/dromara/carbon\[7]

gitee.com/dromara/carbon\[8]

gitcode.com/dromara/carbon\[9]

#### Changelog

*   Minimum `golang` version requirement upgraded to `1.18`
*   `carbon`, `julian`, `lunar`, and `persian` changed from value passing to pointer passing
*   Added `ZoneName` method to retrieve the timezone name
*   Added `HasError` method to check for errors
*   Added `IsNil` method to check if the value is `nil`
*   Added `Copy` method for deep copying a `carbon` instance
*   Added example files `xxx_example.go`
*   Added `constant.go` file; constants migrated from `carbon.go` to this file
*   Default global timezone changed from `Local` to `UTC`
*   Renamed `Offset` method to `ZoneOffset`
*   Renamed `IsSetTestNow` method to `IsTestNow`
*   Renamed `UnSetTestNow` method to `CleanTestNow`
*   Removed `Location` method, replaced by `Timezone` method
*   Modified the logic of `IsValid` and `IsInvalid` methods; `zero time` is no longer considered invalid
*   Setting the global default timezone now simultaneously updates `time.Local`
*   Refactored `database.go`; removed `carbon.DateTime`, `carbon.DateTimeMilli`, `carbon.DateTimeMicro`, `carbon.DateTimeNano`, `carbon.Date`, `carbon.DateMilli`, `carbon.DateMicro`, `carbon.DateNano`, `carbon.Time`, `carbon.TimeMilli`, `carbon.TimeMicro`, `carbon.TimeNano`, `carbon.Timestamp`, `carbon.TimestampMilli`, `carbon.TimestampMicro`, and `carbon.TimestampNano` field types. Replaced with generic fields to enable custom output formatting during `MarshalJSON/UnmarshalJSON`

References

\[1]  
dromara: _https://dromara.org/_

\[2]  
awesome-go: _https://github.com/avelino/awesome-go#date-and-time_

\[3]  
gitee: _https://gitee.com_

\[4]  
GVP: _https://gitee.com/gcp_

\[5]  
gitcode: _https://gitcode.com_

\[6]  
G-Star: _https://gitcode.com/g-star_

\[7]  
github.com/dromara/carbon: _https://github.com/dromara/carbon_

\[8]  
gitee.com/dromara/carbon: _https://gitee.com/dromara/carbon_

\[9]  
gitcode.com/dromara/carbon: _https://gitcode.com/dromara/carbon_