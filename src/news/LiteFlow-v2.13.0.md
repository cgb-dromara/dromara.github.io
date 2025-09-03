---
title: LiteFlow v2.13.0 is Here! Leading a New Era for Open-Source Rule Engines
author: February 25, 2025, 10:11
date: 2025-02-25
cover: /assets/img/news/LiteFlow-v2.13.0-0.png
head:
  - - meta
    - name: News
---

## Foreword

It's been a while since the last release.

On one hand, this update indeed includes a lot of content. On the other hand, more companies and developers are using LF, so I needed considerable time to gather community feedback. Some features also required careful consideration for rationality, and the underlying code needed frequent reviews for robustness.

Moreover, I tend to be quite laid-back. I never set strict deadlines for LF because I believe working in a relaxed state leads to better outcomes. Whenever a task comes with time pressure or KPIs, I feel it can't be driven by genuine passion.

While developing LF, I review all the code I write, including contributions from others, down to the level of variable naming合理性 (rationality) and the completeness and合理性 of test cases. Documentation合理性 is also reviewed with each release. So, from its open-source inception until now, LF has accumulated over 2,200 test cases and relatively standardized code and documentation.

LF might not be the most frequently updated project, but it is certainly a long-term, thoughtfully iterated open-source project that has persisted for over four years.

Enough digression, let's get to the point.

This version 2.13.0 addresses 22 issues in total, including 7 new features, 8 enhancements, and 7 fixes.

This version is not fully backward compatible, but the upgrade process should be very quick. Please refer to the upgrade guide on the official website for specific changes needed.

Below, I'll highlight some of the important updates.

## Javax-pro Plugin

We previously had a java plugin, then later a javax plugin. What? Now there's a javax-pro plugin? Will there be a javax-pro-max in the future? 🤣

Those who have used Java scripts in LF might know that we have the `liteflow-script-java` plugin based on Janino and the `liteflow-script-javax` plugin based on Liquor. The former only supports JDK6 syntax, while the latter supports all JDK syntax.

This new javax-pro plugin should be the final form. The biggest difference compared to `liteflow-script-javax` is that the scripts supported by javax-pro are completely consistent with the writing style of static class components. This means you can override methods from superclasses within scripts.

Simultaneously, we are retiring the `liteflow-script-java` plugin; it will not be provided in version 2.13.0. So, in the new version, there are two plugins for Java:

*   liteflow-script-javax
*   liteflow-script-javax-pro

However, we recommend migrating to the javax-pro plugin eventually, as `liteflow-script-javax` is only retained for compatibility reasons. It might be retired in the future.

Special thanks here to noear, the author of Liquor. During a chat, I complained to him about Janino and discussed my困惑 (confusions) regarding Java scripts. Without hesitation, he tailored a Java compiler executor specifically for LF, leading to significant progress in LF's Java script capabilities. He has also open-sourced this framework; everyone can check it out:

https://gitee.com/noear/liquor

## Bind Keyword

LF previously supported setting parameters on components within rules using the keywords `tag` and `data`.

This new version introduces the `bind` keyword, which allows you to bind a key and value to an object:

```
THEN(a.bind("k1","v1"), b)
```

It can act not only on components but also on expressions, sub-variables, chains—almost anything can use `bind`.

The reason for introducing `bind` despite having `tag` and `data` is that `bind` also provides dynamic binding capabilities. You can use placeholders:

```
THEN(a, b).bind("k1", "${user.name}")
```

For the above expression, LF will match this placeholder expression against your various contexts and assign the value to both `a` and `b`.

The usage of the `bind` keyword enriches the forms of component parameters. There are many details in its usage; please refer to the official documentation for specific instructions.

## Thread Pool Overhaul

In previous versions, LF's thread pool usage in asynchronous scenarios was somewhat chaotic. Users weren't sure how to set thread pools for diverse scenarios.

Therefore, we have redesigned the thread pool architecture. It's now divided into three dimensions:

*   Global Thread Pool
*   Chain-level Thread Pool
*   Expression-level Thread Pool

The parameter names for the global thread pool have changed from before, and a new method for setting thread pools at the Chain level has been introduced:

```
<chain name="chain1" thread-pool-executor-class="xxx.xxx.CustomChainThreadExecutor">
    WHEN(a,b);
</chain>
```

This thread pool overhaul might break compatibility with previous versions' configuration parameters. But I've always believed that rationality and elegant design are more worth pursuing than mere compatibility.

Furthermore, to clearly explain the thread pool structure in LF, the new documentation dedicates a large chapter specifically to thread pools. The upgrade guide also specifically explains how to upgrade the thread pool configuration to 2.13.X. This shouldn't take developers much time.

Please refer to the documentation for specific usage and settings.

## Scripts Can Also Be Lazily Loaded

LF introduced a new parameter in version 2.12.0 to control lazy loading:

```
liteflow.parse-mode=PARSE_ONE_ON_FIRST_EXEC
```

But this only affected rules, not scripts.

Based on community feedback, many people also needed lazy loading for scripts. So now this parameter controls both rules and scripts.

## SQL Plugin Supports Specifying Multiple Data Sources

The LF SQL plugin has always had issues in multi-data source scenarios, often failing to automatically detect the appropriate data source.

This time, LF supports the two most widely used data source frameworks:

*   Baomidou community's `dynamic-datasource` framework.
*   Shardingsphere community's `shardingsphere-jdbc` framework.

The logic for obtaining connection objects has also been significantly optimized.

As the officially recommended storage plugin, the SQL plugin has the broadest support. Give it a try in the new version.

## Supporting Custom Process Data in Steps

You can now use `this.setStepData(xx)` to add custom step data, enabling observation of data changes within the context throughout a process.

This feature was actually proposed via a PR long ago, but I initially didn't see the necessity.

However, later community feedback made me realize this feature is indeed quite necessary. Sometimes community feedback corrects my initially incorrect ideas.

## Persistence of Node Instance ID

In the new version, we added something called `instanceId` to the Node object. This ID represents a unique orchestration ID. As long as your rules remain unchanged, this ID remains constant forever, even across application restarts.

This feature is implemented for both local rule files and the SQL storage plugin.

You might notice this feature isn't highlighted in the documentation, but it is a very important feature in 2.13.0. That's because this feature is more aimed at secondary developers (二开开发者); pure users might not need to know about it.

This feature might appear in the upcoming **development documentation**.

Yes, LF will not only have usage documentation but is also considering creating development documentation to help developers who want to extend LF.

## Full Update List

```
Feature #IBI6A3 New javax-pro plugin based on native form
https://gitee.com/dromara/liteFlow/issues/IBI6A3

Feature #IBL9CK Add bind keyword, enabling binding keys and values anywhere
https://gitee.com/dromara/liteFlow/issues/IBL9CK

Feature #IB2BKP Make PARSE_ONE_ON_FIRST_EXEC effective for scripts as well
https://gitee.com/dromara/liteFlow/issues/IB2BKP

Feature #IBLJ4A Ability to add custom data in steps
https://gitee.com/dromara/liteFlow/issues/IBLJ4A

Feature #IAPI07 Thread pool isolation by chain dimension
https://gitee.com/dromara/liteFlow/issues/IAPI07

Feature #IAUS2R SQL plugin hopes to support specifying data sources
https://gitee.com/dromara/liteFlow/issues/IAUS2R

Feature #IB0SJ1 Node instance ID persistence
https://gitee.com/dromara/liteFlow/issues/IB0SJ1

Enhancement #IBNPZN LiteFlow thread pool system重塑 (overhauled)
https://gitee.com/dromara/liteFlow/issues/IBNPZN

Enhancement #IBJO4X Establish a unified metadata operation class, the entry point for all metadata operations
https://gitee.com/dromara/liteFlow/issues/IBJO4X

Enhancement #IBCLUJ Step information display改造 (overhaul) && Thread information recording
https://gitee.com/dromara/liteFlow/issues/IBCLUJ

Enhancement #IBA89R Expect Java script engine to support inheritance features
https://gitee.com/dromara/liteFlow/issues/IBA89R

Enhancement #IB1YLX Simplify comments in rules, simplify the complex
https://gitee.com/dromara/liteFlow/issues/IB1YLX

Enhancement #IAWJG1 Redesign of the node wrapper type pattern in ELBus EL expression construction
https://gitee.com/dromara/liteFlow/issues/IAWJG1

Enhancement #IAVYME Hope to add an instance Id to Node instances, reflected in steps
https://gitee.com/dromara/liteFlow/issues/IAVYME

Enhancement #IAUS4H SQL plugin database connection acquisition optimization
https://gitee.com/dromara/liteFlow/issues/IAUS4H

Fix #IBLWJG Boolean node setting isAccess to false throws error
https://gitee.com/dromara/liteFlow/issues/IBLWJG

Fix #IBL9HC Fix issue where operators紧跟 (immediately following) nodes in EL expressions cause multiple clones
https://gitee.com/dromara/liteFlow/issues/IBL9HC

Fix #IBGBLN Java exception: Comparison method violates its general contract
https://gitee.com/dromara/liteFlow/issues/IBGBLN

Fix #IBAI9U FlowBus's getNodesByChainId returns null
https://gitee.com/dromara/liteFlow/issues/IBAI9U

Fix #IB7EQJ Issue where target after SWITCH cannot select nodes if maxWaitMilliseconds is added
https://gitee.com/dromara/liteFlow/issues/IB7EQJ

Fix #IB0X4Q Fix bug caused by asynchronous loops in version 2.12.4
https://gitee.com/dromara/liteFlow/issues/IB0X4Q

Fix #IB0K9Y Allow FlowExecutor to accept null context
https://gitee.com/dromara/liteFlow/issues/IB0K9Y
```

## Knowledge Planet (Knowledge Base/Community)

Join the Knowledge Planet now to enjoy a year of high-quality Q&A at a very low price. There are also exclusive LF series analysis articles available only on the Knowledge Planet. Interested friends can scan the QR code to go directly there.
![](/assets/img/news/LiteFlow-v2.13.0-0.png)