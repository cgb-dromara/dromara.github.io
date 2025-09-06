---
title: Dromara WarmFlow工作流动态指定办理人
author: WarmFlow
date: 2024-12-03
cover: /assets/img/blog/dromara-warmflow-assignee-guide-0.webp
head:
  - - meta
    - name: 博客
---

### 背景：

审批任务的办理人，通常是在流程设计器中预先设定好办理人，那如果想要在办理过程中指定办理人呢？那不得不提一下本次的主角，来自Dromara组织的WarmFlow工作流，通过他的办理人变量表达式就能很好解决此问题。

##### 解决思路

*   1、流程设计时，需要动态指定办理人的节点，配置办理人变量表达式`${handler1}`
    
*   2、当上一个任务办理时，在流程变量中传入`${handler1}`的值
    
*   3、办理完成会生成本节点任务，即可替换完成
    

![](/assets/img/blog/dromara-warmflow-assignee-guide-0.webp)

后端代码设置变量

```
// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", "100");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

##### 高级玩法

*   支持动态指定一群人
    
*   支持spel表达式
    
*   支持表达式扩展
    

把如上代码`"100"`改成`Arrays.asList(4, "5", 100L)`，就可以动态指定一群人

```
// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", Arrays.asList(4, "5", 100L));
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

##### 总结

是不是通过WarmFlow工作流可以很简单的管理你的审批业务呢，还不快快加入^v^

另外Dromara组织还有大量好用的项目，欢迎评鉴