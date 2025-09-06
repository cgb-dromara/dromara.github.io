---
title: SMS Aggregation Framework SMS4j 3.3.4 Update Announcement
author: SMS4j
date: 2025-04-21
cover: /assets/img/news/SMS4j-3.3.4-0.png
head:
  - - meta
    - name: News
---

## SMS4j 3.3.4 Update Announcement  

> It has been nearly half a year since the release of version 3.3.3. During this time, the author has faced a series of challenges—first, a family member fell ill, then I myself got sick, coming within ten minutes of meeting the King of Hell. Shortly after, I encountered "graduation" (job loss). Here, I also want to remind everyone to take care of their health. Health is the greatest asset. Whether it’s overworking or overtime, everyone should take it easy. After all, if you lose your life, you lose everything. Fortunately, everything is now back on track and improving day by day.

![](/assets/img/news/SMS4j-3.3.4-0.png)

**Carpe diem, for tomorrow may never come.**

> Here, I also wish everyone: good health, no hair loss, yearly salary increases, and endless good fortune!

* * *

Below are the updates in this release:

## Fixes  

*   Fixed an issue where thread pool resources were not released when sending OA messages.  
*   Fixed missing request headers when calling Baidu.  
*   Fixed code inconsistencies between two versions of email functionality.  
*   Fixed an issue where Luosimao SMS did not require the "+86" prefix for phone numbers.  
*   Fixed an issue where certain vendor SMS failures would retry indefinitely under abnormal conditions.  
*   Fixed Bean conflicts when both OA and SMS are present.  

## Optimizations  

*   Upgraded Solon support to version 3.0.1.  
*   Changed the daily maximum send count cutoff to 0:00 daily instead of a 24-hour timer.  
*   Removed duplicate dependencies.  
*   Added OA YAML configuration examples.  
*   Optimized parts of the code structure.  

## Additions  

*   Added China Unicom Yixintong platform SMS support.  
*   Added HTTP proxy configuration support for SMS sending.  

Finally, we hope for your continued support. If you have any suggestions, please let us know via issues, and we will do our best to optimize. As long as I’m still around, SMS4j will keep updating. Please use your prosperous hands to give us a free star—your support is our greatest motivation for updates.

Gitee Repository: https://gitee.com/dromara/sms4j  
GitHub Repository: https://github.com/dromara/sms4j  
GitCode Repository: https://gitcode.com/dromara/SMS4J  
Official Documentation: https://sms4j.com