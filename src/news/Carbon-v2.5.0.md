---
title: Lightweight Golang Time Library Carbon v2.5.0 Released
author: carbon
date: 2024-11-28
cover: /assets/img/news/Carbon-v2.5.0-0.png
head:
  - - meta
    - name: News
---

Carbon is a lightweight, semantic, and developer-friendly Golang time processing library. It provides support for time travel, time differences, time extremes, time judgments, zodiac signs, the lunar calendar, Julian Day / Modified Julian Day, and the Persian/Iranian calendar.

Carbon has been donated to the dromara[[1]](#user-content-fn-1){: .footnote-backref} open-source organization. It has been included in awesome-go[[2]](#user-content-fn-2){: .footnote-backref} and has received the Gitee[[3]](#user-content-fn-3){: .footnote-backref} 2024 Most Valuable Project (GVP[[4]](#user-content-fn-4){: .footnote-backref}) award and the GitCode[[5]](#user-content-fn-5){: .footnote-backref} 2024 Annual G-Star[[6]](#user-content-fn-6){: .footnote-backref} project award. If you find it useful, please give it a star!

github.com/dromara/carbon[[7]](#user-content-fn-7){: .footnote-backref}

gitee.com/dromara/carbon[[8]](#user-content-fn-8){: .footnote-backref}

gitcode.com/dromara/carbon[[9]](#user-content-fn-9){: .footnote-backref}

![](/assets/img/news/Carbon-v2.5.0-0.png)

#### Changelog

*   Repository address changed from `github.com/golang-module/carbon` to `github.com/dromara/carbon`
*   Added translation support for `Hungarian`, translated by @kenlas
*   Retranslated the `Japanese version README` file, translated by Japanese friend @You-saku
*   Fixed a bug where `DiffInMonths()` calculation was incorrect
*   Replaced `Lock()`, `Unlock()` with `RLock()`, `RUnlock()`
*   Removed methods `ToDateTimeStruct()`, `ToDateTimeMilliStruct()`, `ToDateTimeMicroStruct()`, `ToDateStruct()`, etc., replaced by newly added methods `NewDateTime()`, `NewDateTimeMilli()`, `NewDateTimeMicro()`, `NewDate()`, etc.
*   Structs like `DateTime`, `DateTimeXXX`, `Date`, `DateXXX`, `Time`, `TimeXXX` now implement the `Scan`, `Value`, `MarshalJSON`, `UnmarshalJSON` interfaces
*   The `Scan` interface implementation supports parsing formats of `string`, `[]byte`, and `time.Time`
*   When `UnmarshalJSON` parses JSON-formatted time strings, it uniformly uses the global default timezone `defaultTimezone`
*   Upgraded `codecov/codecov-action` from `v4` to `v5`

Reference Materials

[1]  
dromara: https://dromara.org/

[2]  
awesome-go: https://github.com/avelino/awesome-go#date-and-time

[3]  
gitee: https://gitee.com

[4]  
GVP: https://gitee.com/gvp

[5]  
gitcode: https://gitcode.com

[6]  
G-Star: https://gitcode.com/g-star

[7]  
github.com/dromara/carbon: https://github.com/dromara/carbon

[8]  
gitee.com/dromara/carbon: https://gitee.com/dromara/carbon

[9]  
gitcode.com/dromara/carbon: https://gitcode.com/dromara/carbon

---

About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, and scheduling orchestration. The technology stack is fully open-source and collaboratively built, maintaining community neutrality, and is dedicated to providing microservices cloud-native solutions for global users. It aims to allow every participating open-source enthusiast to experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of members, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/news/Carbon-v2.5.0-1.webp)