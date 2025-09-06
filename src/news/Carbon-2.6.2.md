---
title: "Carbon 2.6.2 Released: A Golang Time Handling Library"
author: carbon
date: 2025-04-11
cover: /assets/img/news/carbon-2.6.2-0.png
head:
  - - meta
    - name: News
---

![](/assets/img/news/carbon-2.6.2-0.png)

Carbon is a lightweight, semantic, and developer-friendly Golang time handling library. It supports time travel, time difference calculations, time extremes, time judgments, zodiac signs, seasons, the lunar calendar, Julian Day / Modified Julian Day, and the Persian (Iranian) calendar.

Carbon has been donated to the dromara[1] open-source organization, included in awesome-go[2], and has received the gitee[3] 2024 Most Valuable Project (GVP[4]) award and the gitcode[5] 2024 G-Star[6] award. If you find it useful, please give it a star!

github.com/dromara/carbon[7]  
gitee.com/dromara/carbon[8]  
gitcode.com/dromara/carbon[9]

#### Changelog

*   Removed `hour`, `minute`, and `second` parameters from the `CreateFromLunar` and `CreateFromPersian` methods
*   Modified the definitions of some format symbols, including `U`, `V`, `X`, `S`, `T`, `Z`, `u`, `v`, `x`, and `z`
*   Fixed a bug in the lunar calendar where `IsLeapMonth` returned incorrect results
*   Fixed a bug where `AtomFormat` and `AtomLayout` returned inconsistent values
*   Fixed a bug where `RFC3339Format` and `RFC3339Layout` returned inconsistent values
*   Setting the global default timezone no longer updates `time.Local` simultaneously
*   Added the format symbol `o` to retrieve the timezone offset
*   Added constants: `TimestampLayout`, `TimestampMilliLayout`, `TimestampMicroLayout`, and `TimestampNanoLayout`
*   Added constants: `TimestampFormat`, `TimestampMilliFormat`, `TimestampMicroFormat`, and `TimestampNanoFormat`
*   Added field types: `DateTimeMilli`, `DateTimeMicro`, and `DateTimeNano`
*   Added field types: `DateMilli`, `DateMicro`, and `DateNano`
*   Added field types: `TimeMilli`, `TimeMicro`, and `TimeNano`
*   Fixed a bug where the `IsDST` method lost timezone information
*   Fixed a bug where some `StartOfXXX` and `EndOfXXX` methods lost timezone information
*   Fixed a bug where timezone information was missing when converting from other calendars to the Gregorian calendar
*   Setting the default timezone no longer updates `time.Local` simultaneously
*   Added `MaxDuration` and `MinDuration` methods

References

[1] dromara: https://dromara.org/  
[2] awesome-go: https://github.com/avelino/awesome-go#date-and-time  
[3] gitee: https://gitee.com  
[4] GVP: https://gitee.com/gcp  
[5] gitcode: https://gitcode.com  
[6] G-Star: https://gitcode.com/g-star  
[7] github.com/dromara/carbon: https://github.com/dromara/carbon  
[8] gitee.com/dromara/carbon: https://gitee.com/dromara/carbon  
[9] gitcode.com/dromara/carbon: https://gitcode.com/dromara/carbon