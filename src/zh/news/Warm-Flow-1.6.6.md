---
title: Warm-Flow 新春版 1.6.6 发布，国产工作流引擎
author: Warm-Flow
date: 2025-01-24
cover: /assets/img/news/Warm-Flow-1.6.6-0.png
head:
  - - meta
    - name: 新闻
---

# 🧨Warm-Flow新春版1.6.6：网关直连和流程图重构, 新增Ruoyi-Vue-Plus优秀开源集成案例

*   本期主要解决了网关直连和流程图重构，可以自此之后可支持各种复杂的网关混合、多网关直连使用。
    
*   新增Ruoyi-Vue-Plus优秀开源集成案例
    

## 更新日志

*   \[feat\] 导入、导出和保存等新增json格式支持DefService.importIs/importJson/importDef/saveDef/exportJson
    
*   \[feat\] 新增获取后置节点方法NodeService.suffixNodeList
    
*   \[feat\] 新增网关直连和测试案例
    
*   \[feat\] 流程图右上角新增完成状态颜色示例
    
*   \[feat\] 新增流程图查询接口和扩展接口ChartService
    
*   \[feat\] 新增历史表数据同步为新的流程图元数据
    
*   \[feat\] 新增sqlserver全量脚本
    
*   \[update\] 导入、导出和保存xml格式标识为即将删除，请参照hh-vue切换json的api
    
*   \[update\] FlowFactory修改为FlowEngine
    
*   \[update\] 历史表目标节点编码和目标节点名称字段长度改为200
    
*   \[update\] 通过或者退回到并行网关，开启多个任务，改为只产生一条历史记录
    
*   \[update\] 退回或者任务完成，其他需要被删除的任务不需要记录历史表，因为已经存在退回记录，不需要重复记录
    
*   \[update\] 转办、委派、加签和减签，改为只产生一条历史记录
    
*   \[update\] 批量保存改为默认1000条一批
    
*   \[update\] 流程设计保存，增加遮罩层
    
*   \[refactor\] 流程图绘制调整重构
    
*   \[refactor\] 移除mybatis-flex,easy-query和jpa的扩展包，独立成项目，由专门人维护
    
*   \[refactor\] 实体类和dao获取改为通过反射，解耦orm-core包
    
*   \[refactor\] 重构获取前置节点方法NodeService.previousNodeList
    
*   \[fix\] 修复退回时存在其他代办任务，未删除的问题
    
*   \[fix\] 修复流程退回目标节点前存在并行网关，导致不生成代办任务的问题
    
*   \[fix\] 修复条件表达式中如果有`|`或导致错误分隔的问题
    
*   \[fix\] 修复绘制流程图，错误判断同一条录像的key
    
*   \[fix\] 修复结束节点还执行创建监听器的问题
    
*   \[remove\] 移除DefService获取流程图api，由ChartService中chartIns和chartDef代替
    
*   \[remove\] 删除前端log打印
    
*   \[remove\] 移除oracle和postgresql升级脚本，后续只提供mysql升级脚本，所有的全量脚本，其他升级脚本的自行转换
    
      
    

## 项目介绍

**Dromara Warm-Flow国产工作流引擎，其特点简洁轻量，五脏俱全，可扩展，是一个可通过jar引入设计器的工作流**。

1.  支持常见审批功能、监听器与流程变量、条件表达式、办理人变量表达式
    
2.  自带流程图、流程设计器
    
3.  生态丰富可扩展
    
4.  文档全面
    
      
    

![](/assets/img/news/Warm-Flow-1.6.6-0.png)

## 演示地址

*   admin/admin123
    

演示地址：http://www.hhzai.top

## 官网

https://warm-flow.dromara.org/

## 演示图  

<table data-tool="mdnice编辑器" width="-807">
  <tbody>
    <tr>
      <td style="word-break: break-all;">
        <img 
          style="display: block; margin-right: auto; margin-left: auto; width: 636px !important; height: 231.433px !important;" 
          src="/assets/img/news/Warm-Flow-1.6.6-1.png"
        >
      </td>
    </tr>
    <tr>
      <td>
        <p style="text-align: center;">
          <img 
            style="width: 636px !important; height: 314.467px !important;" 
            src="/assets/img/news/Warm-Flow-1.6.6-2.png"
          >
        </p>
      </td>
    </tr>
    <tr>
      <td style="word-break: break-all;"><br></td>
    </tr>
    <tr>
      <td>
        <img 
          style="margin-right: auto; margin-left: auto; width: 636px !important; height: 293.856px !important;" 
          src="/assets/img/news/Warm-Flow-1.6.6-3.png"
        >
      </td>
    </tr>
    <tr>
      <td>
        <img 
          style="margin-right: auto; margin-left: auto; width: 636px !important; height: 246.744px !important;" 
          src="/assets/img/news/Warm-Flow-1.6.6-4.png"
        >
      </td>
    </tr>
    <tr>
      <td>
        <img 
          style="margin-right: auto; margin-left: auto; width: 636px !important; height: 306.222px !important;" 
          src="/assets/img/news/Warm-Flow-1.6.6-5.png"
        >
      </td>
    </tr>
  </tbody>
</table>

  

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/Warm-Flow-1.6.6-6.webp)