---
title: Dromara WarmFlow Workflow Dynamically Assigning Approvers
author: WarmFlow
date: 2024-12-03
cover: /assets/img/blog/dromara-warmflow-assignee-guide-0.webp
head:
  - - meta
    - name: Blog
---

### Background:

The assignee of an approval task is usually predefined in the process designer. But what if you need to assign an approver dynamically during the process? This is where Dromara's WarmFlow workflow comes into play. It effectively addresses this issue through its assignee variable expressions.

##### Solution Approach

*   1. During process design, configure the assignee variable expression `${handler1}` for nodes that require dynamic assignee assignment.
*   2. When the previous task is being processed, pass the value of `${handler1}` in the process variables.
*   3. Once the task is completed, the current node task will be generated, achieving dynamic assignment.

![](/assets/img/blog/dromara-warmflow-assignee-guide-0.webp)

Backend code to set variables:

```java
// Process variables
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", "100");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

##### Advanced Usage

*   Supports dynamically assigning a group of people.
*   Supports SpEL expressions.
*   Supports expression extensions.

Change the code from `"100"` to `Arrays.asList(4, "5", 100L)` to dynamically assign a group of people:

```java
// Process variables
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", Arrays.asList(4, "5", 100L));
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

##### Conclusion

Doesn't WarmFlow workflow make it easy to manage your approval processes? Don't hesitate to give it a try! ^v^

Additionally, the Dromara organization offers many other useful projects. Feel free to explore them!