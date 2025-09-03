---
title: x-easypdf v3.3.0发布，拥有AI加持的pdf框架
author: x-easypdf
date: 2025-02-17
cover: /assets/img/news/x-easypdf-v3.3.0-0.png
head:
  - - meta
    - name: 新闻
---

#####   

![](/assets/img/news/x-easypdf-v3.3.0-0.png)

  

x-easypdf是一个java语言简化处理pdf的框架，包含fop模块与pdfbox模块，fop模块以创建功能为主，基于xsl-fo模板生成pdf文档，以数据源的方式进行模板渲染；pdfbox模块以编辑功能为主，对标准的pdfbox进行扩展，添加了成吨的功能。

本次更新内容如下：

###### 新特性：

*   【pdfbox】新增jpeg2000格式图像支持
    
*   【pdfbox】新增大模型解析文档的支持
    
*   【pdfbox】新增开源中国（gitee）AI解析器
    
*   【pdfbox】新增智谱（glm）AI解析器
    
*   【pdfbox】新增腾讯（hunyuan）AI解析器
    
*   【pdfbox】新增阿里（qwen）AI解析器
    
*   【pdfbox】新增深度求索（deepseek）AI解析器
    
*   【pdfbox】新增字节跳动（doubao）AI解析器
    
*   【pdfbox】新增昆仑万维（tiangong）AI解析器
    
*   【pdfbox】新增月之暗面（kimi）AI解析器
    
*   【pdfbox】新增讯飞（spark）AI解析器
    
*   【pdfbox】新增线性化支持
    
*   【pdfbox】新增office文件转换pdf的支持（依赖office服务）
    
*   【pdfbox】新增word转换器
    
*   【pdfbox】新增excel转换器
    
*   【pdfbox】新增ppt转换器
    
*   【pdfbox】新增html转换器
    
*   【pdfbox】新增rtf转换器
    
*   【pdfbox】新增附件处理器
    
*   【pdfbox】新增加载awt字体的支持
    
*   【fop】新增条形码无白边配置
    
*   【fop】新增设置条形码缓存的方法
    
*   【fop】新增权限配置
    
*   【fop】新增从资源路径加载awt字体的支持
    

###### 原有变更：

maven坐标变更，原 `groupId “org.dromara.x-easypdf”` 变更为 `org.dromara`

###### 问题修复：

*   【pdfbox模块】修复表格组件单元格添加多组件换行错误问题
    
*   【pdfbox模块】修复表格重叠问题
    
*   【pdfbox模块】修复空文本错误问题
    

  

Gitee: https://gitee.com/dromara/x-easypdf 

AI解析功能演示： 

![](/assets/img/news/x-easypdf-v3.3.0-1.jpg)

  

  

关于 Dromara

Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。

  

Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。

**欢迎大家来到知识星球和我互动**

![](/assets/img/news/x-easypdf-v3.3.0-2.webp)