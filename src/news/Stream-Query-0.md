---
title: Farewell to Tedious Mappers! Stream-Query Officially Joins GitCode Platform
author: August 4, 2025, 08:54
date: 2025-08-04
cover: /assets/img/news/Stream-Query-0-0.gif
head:
  - - meta
    - name: News
---

![](/assets/img/news/Stream-Query-0-0.gif)

In the Java development field, MyBatis-Plus, as an enhancement tool for MyBatis, is widely popular for simplifying CRUD operations. But have you ever been troubled by these issues?

🤕 **Proliferation of Mapper Interfaces**: Every entity class requires a Mapper, resulting in projects cluttered with XxxMapper.java files.  
😠 **Cumbersome Complex Queries**: Handling one-to-many queries requires manually querying the database multiple times in loops, leading to code that is as difficult to maintain as "spaghetti code."  
😣 **Repetitive Stream Operations**: The same `stream().filter().map()` pattern is written countless times, with no elegant way to encapsulate it.

Now, the open-source project Stream-Query has officially joined the GitCode platform as a G-Star outstanding graduated project, set to completely change your perception of MyBatis-Plus!

![](/assets/img/news/Stream-Query-0-1.jpg)

**🚀 Project Highlight: Operate the Database Like Using Utility Classes**

Stream-Query’s core goal is to free developers entirely from the constraints of Mappers. With this project, you can perform database operations as easily as calling static methods of utility classes, significantly improving development efficiency.

![](/assets/img/news/Stream-Query-0-2.png)

**✨ Three Core Features**

1.  **Dynamic Mapper Innovation**: The project uses Byte-Buddy technology to dynamically generate Mappers at runtime, eliminating the need to write tedious Mapper interfaces for each entity class.  

2.  **Stream-Style Query Processing**: For complex query scenarios, Stream-Query provides convenient handling of one-to-one, one-to-many, and other relationships, effortlessly assembling data from multiple single-table queries.  

3.  **Simplified Stream Operations**: The uniquely crafted Steam class (Steam = Stream-r, where "r" stands for Repeat) is specifically designed to reduce repetitive Stream API code, making functional programming more elegant.

**🎯 Project Vision and Mission**

Stream-Query was born from a deep understanding of the pain points developers face when using ORMs in modern Java development.

In daily development practices, the project’s founders observed that most developers spend too much time writing repetitive Mapper interfaces, handling complex association queries, and writing lengthy Stream operations. These mechanical tasks severely distract developers from focusing on core business logic. Based on these observations, the team was determined to create a tool that truly liberates developer productivity, making database operations as simple and intuitive as using utility classes.

From its inception, the project established a clear technical philosophy: reduce complexity through intelligent encapsulation rather than simply adding features. This philosophy is reflected in the clever implementation of dynamic Mappers, which retain the powerful functionality of MyBatis-Plus while eliminating its most cumbersome aspects. In terms of Stream processing, the project innovatively introduced the concept of "Stream-r," freeing developers from repetitive stream operations.

The team believes that through continuous technological innovation and community collaboration, Stream-Query has the potential to become the de facto standard for database operations in the Java ecosystem. In the future, Stream-Query will continue to optimize the performance of dynamic Mappers and further enrich the tool methods for Stream operations. Throughout this process, feedback and suggestions from every developer will serve as vital forces driving the project forward, collectively shaping the next generation of best practices for Java data access layers.

---

**Visit the GitCode platform**: Experience Stream-Query now  
💻 **Open Source License**: Apache License v2.0  
📮 **Project Address**: http://gitcode.com/dromara/stream-query

![](/assets/img/news/Stream-Query-0-3.png)

**Recommended Reading**  
[![](/assets/img/news/Stream-Query-0-4.png)](https://mp.weixin.qq.com/s?__biz=MzkyNjY0MDY1Ng==&mid=2247491795&idx=1&sn=70e669c10491d17c0fda127ffc116a42&scene=21#wechat_redirect)  
GitCode’s First Batch of Top 100 Open Source Projects Shortlist Announced  

[![](/assets/img/news/Stream-Query-0-5.png)](https://mp.weixin.qq.com/s?__biz=MzkyNjY0MDY1Ng==&mid=2247489603&idx=1&sn=66a5adee615b79d841558c0b54b5881f&scene=21#wechat_redirect)  
【Submit and Win an iPhone 17】"My First Open Source Project"  

![](/assets/img/news/Stream-Query-0-6.png)