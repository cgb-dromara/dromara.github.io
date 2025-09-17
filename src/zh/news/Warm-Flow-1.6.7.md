---
title: 三头六臂显神通：Warm-Flow引擎实现多维度灵活配置
author: Warm-Flow
date: 2025-03-03
cover: /assets/img/news/Warm-Flow-v1.6.7-0.png
head:
  - - meta
    - name: 新闻
---

#          Warm-Flow 引擎实现多维度灵活配置

![](/assets/img/news/Warm-Flow-v1.6.7-0.png)

#   

## 主要更新内容

*   设计器支持节点扩展属性设置
    
*   流程图扩展，新增接口，方便追加文字
    
*   流程状态支持颜色支持自定义
    

## 详细更新日志

*   升级指南
    
*   \[feat\] 设计器支持节点扩展属性设置
    
*   \[feat\] 流程图扩展，新增接口，方便追加文字
    
*   \[feat\] 流程状态支持颜色支持自定义
    
*   \[update\] 节点表版本号字段标识下个版本删除
    
*   \[update\] Jackson反序列化时忽略未知字段
    
*   \[update\] 删除部分代码，调整注释
    
*   \[update\] 修改当票签和会签节点时，注意事项描述
    
*   \[fix\] 规范solon,api注解 防止某些情况获取不到方法参数名
    
*   \[fix\] 删除流程实例的时候，办理用户不存在，导致删除失败
    
*   \[fix\] #IBP397：修复当设计流程，开始节点出现再负坐标时，文字名称未显示
    
*   \[fix\] #IBP3LK：修复开启流程，流程图第一个节点不是待办颜色
    
*   \[fix\] 网关节点编辑文字报错处理
    
*   \[remove\] 移除流程定义xml导入导出方式
    
*   \[remove\] 移除多余的skip\_Any\_Node字段
    
*   \[style\] 常量改成大写和下划线
    

## 项目介绍

**Dromara Warm-Flow国产工作流引擎，其特点简洁轻量，五脏俱全，灵活扩展性强，是一个可通过jar引入设计器的工作流**。

1.  支持常见审批功能、监听器与流程变量、条件表达式、办理人变量表达式
    
2.  自带流程图、流程设计器、节点扩展属性
    
3.  生态丰富可扩展
    
4.  文档全面
    

![](/assets/img/news/Warm-Flow-v1.6.7-1.png)

  

## 演示地址

*   admin/admin123
    

演示地址：http://www.hhzai.top

## 官网

https://warm-flow.dromara.org

## 本次更新效果图

![](/assets/img/news/Warm-Flow-v1.6.7-2.png)![](/assets/img/news/Warm-Flow-v1.6.7-3.png)![](/assets/img/news/Warm-Flow-v1.6.7-4.png)![](/assets/img/news/Warm-Flow-v1.6.7-5.png)

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/Warm-Flow-v1.6.7-6.webp)