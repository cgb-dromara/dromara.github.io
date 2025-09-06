---
title: "Warm-Flow Spring Festival Edition 1.6.6 Released: A Domestic Workflow Engine"
author: Warm-Flow
date: 2025-01-24
cover: /assets/img/news/Warm-Flow-1.6.6-0.png
head:
  - - meta
    - name: News
---

# 🧨Warm-Flow Spring Festival Edition 1.6.6: Gateway Direct Connection and Flowchart Refactoring, Adds Excellent Ruoyi-Vue-Plus Open-Source Integration Example

*   This release primarily addresses gateway direct connection and flowchart refactoring, enabling support for various complex gateway hybrids and multi-gateway direct connections.
*   Added an excellent open-source integration example with Ruoyi-Vue-Plus.

## Changelog

*   \[feat\] Added JSON format support for import, export, save, etc.: DefService.importIs/importJson/importDef/saveDef/exportJson
*   \[feat\] Added method to retrieve subsequent nodes: NodeService.suffixNodeList
*   \[feat\] Added gateway direct connection and test cases
*   \[feat\] Added completion status color legend in the upper right corner of the flowchart
*   \[feat\] Added flowchart query interface and extension interface ChartService
*   \[feat\] Added synchronization of historical table data to new flowchart metadata
*   \[feat\] Added full SQL Server script
*   \[update\] Marked import, export, and save in XML format as deprecated; please refer to hh-vue for switching to JSON APIs
*   \[update\] FlowFactory renamed to FlowEngine
*   \[update\] Increased field length for target node code and name in history table to 200
*   \[update\] When passing or returning to a parallel gateway, creating multiple tasks now generates only one history record
*   \[update\] When returning or completing a task, other tasks to be deleted do not need history records as the return record already exists, avoiding duplication
*   \[update\] Transfer, delegation, add sign, and reduce sign operations now generate only one history record
*   \[update] Changed batch save default to 1000 records per batch
*   \[update] Added overlay mask during process design saving
*   \[refactor] Adjusted and refactored flowchart rendering
*   \[refactor] Removed mybatis-flex, easy-query, and jpa extension packages; these are now independent projects maintained by dedicated personnel
*   \[refactor] Entity class and DAO retrieval switched to reflection to decouple from the orm-core package
*   \[refactor] Refactored method to get previous nodes: NodeService.previousNodeList
*   \[fix] Fixed issue where other pending tasks were not deleted during return
*   \[fix] Fixed issue where returning to a target node before a parallel gateway prevented generating pending tasks
*   \[fix] Fixed issue where the presence of `|` in conditional expressions caused incorrect splitting
*   \[fix] Fixed incorrect judgment of the same line key when drawing flowcharts
*   \[fix] Fixed issue where end nodes still executed listener creation
*   \[remove] Removed DefService flowchart API; replaced by chartIns and chartDef in ChartService
*   \[remove] Removed frontend log printing
*   \[remove] Removed Oracle and PostgreSQL upgrade scripts; only MySQL upgrade scripts will be provided henceforth. Users must convert other upgrade scripts themselves from the full scripts provided.

## Project Introduction

**Dromara Warm-Flow is a domestic workflow engine, characterized by its simplicity, lightweight design, and extensibility. It is a workflow that can integrate a designer via JAR.**

1.  Supports common approval functions, listeners and process variables, conditional expressions, assignee variable expressions.
2.  Built-in flowchart and process designer.
3.  Rich and extensible ecosystem.
4.  Comprehensive documentation.

![](/assets/img/news/Warm-Flow-1.6.6-0.png)

## Demo Address

*   admin/admin123

Demo: http://www.hhzai.top

## Official Website

https://warm-flow.dromara.org/

## Demo Images

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

About Dromara

Dromara is an open-source community composed of top domestic open-source project authors. It provides a series of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, scheduling orchestration, etc. The technology stack is fully open-source and co-built, maintaining community neutrality, and is committed to providing global users with microservices cloud-native solutions. Let every participating open-source enthusiast experience the joy of open source.

The Dromara open-source community currently has 10+ GVP projects, with a total star count of over 100,000, building an open-source community of tens of thousands of people, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/news/Warm-Flow-1.6.6-6.webp)