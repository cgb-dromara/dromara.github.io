---
title: RuoYi-Vue-Plus 发布 5.3.0 新春版 warm-flow 强强联合
author: 2025年01月25日 09:20
date: 2025-01-25
cover: /assets/img/news/RuoYi-Vue-Plus-5.3.0-0.png
head:
  - - meta
    - name: 新闻
---

![](/assets/img/news/RuoYi-Vue-Plus-5.3.0-0.png)

* * *

# 更新日志

### 重大更新

*   重构数据权限实现逻辑 支持任意mapper方法标注注解 无需再找真实mapper标注
    
*   重写工作流模块 接入warm-flow工作流 移除flowable工作流(过于复杂 用不明白的人太多)
    

### 依赖升级

*   update springboot 3.2.11 => 3.4.1
    
*   update springboot-admin 3.2.3 => 3.4.1
    
*   update mybatis-plus 3.5.8 => 3.5.9
    
*   update snailjob 1.1.2 => 1.3.0(感谢 dhb52)
    
*   update springdoc 2.6.0 => 2.8.3
    
*   update redisson 3.37.0 => 3.43.0
    
*   update justauth 1.16.6 => 1.16.7 支持多种登录方式 不限于三方登录
    
*   update mybatis-plus 3.5.9 => 3.5.10
    
*   update hutool 5.8.31 => 5.8.35
    
*   update mapstruct-plus 1.4.5 => 1.4.6
    
*   update lombok 1.18.34 => 1.18.36
    
*   update anyline 20241022 => 20250101
    

### 功能更新

*   update 优化 查询oss图片url接口改为query标识符
    
*   update 优化 绑定三方与解绑三方校验token是否存在
    
*   update 优化 OSS私有桶的临时URL获取方法(感谢 秋辞未寒)
    
*   update 优化 ws模块替换session的时候关闭session连接
    
*   update 优化 数据权限 判断当前注解不满足模板则跳过
    
*   update 优化 使用request存储动态租户 避免单请求多次查询redis获取
    
*   update 优化 修改部门信息增加事务(感谢 AprilWind)
    
*   update 优化 增加菜单选择拓展参数(感谢 玲娜贝er)
    
*   update 优化 jdk21环境开启虚拟线程时的定时任务池(感谢 秋辞未寒)
    
*   update 优化 sse 如果获取token列表为空 删除userid对应的存储
    
*   update 优化 数据权限处理器 增加默认值处理 针对于表达式变量与注解不对应或者表达式变量为null的情况
    
*   update 优化 关闭sse后 使用工具报错
    
*   update 优化 增加mybatis-plus一键开启/关闭逻辑删除功能
    
*   update 优化 修改日志时间展示颜色(感谢 疯狂的牛子Li)
    
*   update 适配 TOPIAM 2.0 单点登录(感谢 马铃薯头)
    
*   update 优化 完善微信小程序登录接口逻辑
    
*   update 优化 重构DateUtils工具类 更加实用
    
*   update 优化 为部门角色岗位用户增加一些常用查询方法
    
*   update 优化 登录用户增加岗位数据
    
*   update 优化 去除部门查询状态校验 改为前端过滤 便于查看禁用部门下的其他数据
    
*   update 优化 部门树增加禁用标志位
    
*   update 优化 workflow 模块增加接口文档生成功能
    
*   update 优化 代码生成 增加buildQueryWrapper默认排序规则
    
*   update 优化 代码生成 创建更新时间被覆盖问题
    
*   update 优化 代码生成排序问题(感谢 AprilWind)
    
*   update 优化 在线用户查询 优先查询租户下数据 减少数据量
    
*   update 优化 租户域名使用忽略大小写匹配
    
*   update 优化 代码生成器 将数据库字段默认转为小写 避免某些数据库大写出现的问题
    
*   update 优化 由于sse重试机制导致经常输出认证失败日志过多 将sse失败改为debug
    
*   update 优化 有界队列销毁方式 应该使用特殊销毁方法
    
*   update 优化 redis序列化 支持更快的apache二进制跨语言序列化方案
    
*   update 优化 租户日志模块名
    
*   update 优化 增加默认数据权限 "部门及以下或本人数据权限" 选项
    
*   update 优化 代码生成器 pg数据库 主键获取不精确问题
    
*   update 优化 代码生成器类型获取
    
*   update 优化 个人中心强退设备接口路径
    
*   update 优化 Dockerfile 消除warn警告
    
*   update 优化 补充客户端工具类注释(感谢 AprilWind)
    
*   update 优化 补充Undertow自定义配置信息注释(感谢 AprilWind)
    
*   update 优化 拦截爬虫跟踪等垃圾请求
    
*   update 优化 将Log记录异常长度改为5000
    
*   update 优化 将Log记录参数长度扩充为5000更符合实际需求
    
*   update 优化 xss包装器 Parameter 处理 兼容某些容器不允许改参数的情况
    
*   update 优化 支持脱敏传多角色多权限标识
    
*   update 优化 角色删除清理缓存
    
*   update 优化 使用ObjectUtils新增方法封装代码
    
*   update 优化 数据权限查询增加缓存
    
*   update 优化 代码生成器数字类别判断
    
*   update 优化 逻辑删除状态改为1 避免误解
    
*   update 重构 将UserConstants改为SystemConstants 统一常量使用 降低使用难度避免误解
    
*   update 优化 封装部门基于父id查询方法
    
*   update 优化 不传用户id不校验数据权限
    
*   update 优化 部门树多基点展示问题 支持相同名称节点并排展示
    
*   update 优化 去除OSS桶检测 桶不存在自然会报错无需额外检测
    
*   update 优化 限流注解增加固定清理时间
    
*   update 优化 sys\_social表 租户id增加默认值
    
*   update 优化 jackson 过期方法
    
*   update 优化 多租户插件初始化流程
    
*   update 优化 去除GenUtils设置createby逻辑 统一走自动注入设置
    
*   update 优化 替换RedisUtils中的废弃方法getKeysStreamByPattern及trySetRate(感谢 Lucien\_Lu)
    
*   update 优化 删除桶自动创建代码逻辑(云厂商限制不允许操作桶)
    
*   update 优化 角色清理在线用户代码逻辑
    

### 功能新增

*   add 新增 导出模板必填、备注注解实现(感谢 liyang)
    
*   add 新增 基于Redisson的发号器工具(感谢 秋辞未寒)
    
*   add 新增 validation支持枚举校验(感谢 秋辞未寒)
    
*   add 新增 validation支持枚举校验(感谢 秋辞未寒)
    
*   add 新增 对象工具类(感谢 秋辞未寒)
    
*   add 增加 邮件多附件demo
    

### 问题修复

*   fix 修复 文件下载 设置content-length无效问题
    
*   fix 修复 satoken dao层获取timeout为秒导致丢失毫秒进度问题(临时修复 等satoken官方解决)
    
*   fix 修复 postgresql的表元数据没有创建时间这个东西(好奇葩) 只能new Date代替
    
*   fix 修复 数据权限 多角色多注解包含忽略权限标识符逻辑不正确问题
    
*   fix 修复 未开启sse 找不到bean问题
    
*   fix 修复 数据权限导致的个人中心的修改头像和修改密码接口错误(感谢 QianRj)
    
*   fix 修复 部门数据权限缓存错误(感谢 QianRj)
    
*   fix 修复 三方授权工具部分网站授权缺失参数问题
    
*   fix 修复 代码生成 表名中间带有特殊字符被过滤问题 改为开头过滤
    
*   fix 修复 字段长度超出数据库限制问题
    
*   fix 修复 过滤器正则错误
    
*   fix 修复 monitor 设置 context-path 导致退出重新登录404问题
    
*   fix 修复 数据权限多角色与权限标识符共用导致的问题 https://gitee.com/dromara/RuoYi-Vue-Plus/issues/IB4CS4
    
*   fix 修复 排除websocket包内包含的tomcat依赖(导致一些问题)
    
*   fix 修复 PageQuery 转json报错问题
    
*   fix 修复 sse 关闭接口无法断连问题
    
*   fix 修复 PlusSmsDao#clean 方法书写错误
    
*   fix 修复 excel级联下拉框数据错误(感谢 Emil.Zhang)
    
*   fix 修复 某些模块不存在 mp 依赖导致方法报错问题
    
*   fix 修复 新版本mp默认使用最新 sqlserver 语法导致代码生成分页报错问题
    
*   fix 修复 OssClient 回滚错误修改
    
*   fix 修复 注册日志记录状态错误
    

### 前端改动

*   update typescript 5.4.5 => 5.7.2
    
*   update vite 5.2.12 => 5.4.11
    
*   update vue 3.4.34 => 3.5.13
    
*   update element-plus 2.7.8 => 2.8.8
    
*   update eslint 升级v9版本(感谢 玲娜贝er)
    
*   update vue-i18n 10.0.5
    
*   update 优化 parseTime 提示报错问题
    
*   update 优化 国际化 变量提示
    
*   update 优化 重写工作流相关页面
    
*   update 优化 主题色在深色模式下显示亮度(感谢 LiuHao)
    
*   update 优化 hasRoles 方法增加超管判断
    
*   update 优化 用户页面 增加导入到处权限标识
    
*   update 优化 TopNav内链菜单点击没有高亮
    
*   update 优化 新增编辑用户 过滤禁用的部门
    
*   update 优化 白名单增加正则匹配示例
    
*   update 优化 白名单支持对通配符路径匹配
    
*   update 优化 i18n $t方法支持ts类型提示(感谢 玲娜贝er)
    
*   update 优化 登录页多语言按钮样式
    
*   update 优化 补充登录页与注册页的国际化内容并添加切换语言按钮(感谢 QianRj)
    
*   update 优化 eslint升级v9版本 & 更新一些不符合校验规则的代码(感谢 玲娜贝er)
    
*   update 优化 全代码规范化处理
    
*   update 优化 代码生成导入下拉框默认值处理
    
*   update 优化 菜单面包屑导航支持多层级显示
    
*   update 优化 参数键值更换为多行文本
    
*   update 优化 增加默认数据权限 "部门及以下或本人数据权限" 选项
    
*   update 优化 permission loadView避免整个modules循环 允许view中间有views文件夹(感谢 admin\_lijinfu)
    
*   update 优化 个人中心强退设备接口路径
    
*   update 优化 直接从@/lang/\*.ts后缀的i18n文件中读取各国语言包信息(感谢 QianRj)
    
*   update 优化 将同步字典功能迁移到租户管理内
    
*   update 优化 重构操作日志详情样式(感谢 玲娜贝er)
    
*   update 优化 字典缓存使用Map代替Array更高效(感谢 月夜)
    
*   update 优化 校检文件名是否包含特殊字符
    
*   update 优化 getTenantList 接口动态决定是否传token
    
*   fix 修复 切换租户 tabs过多导致卡住问题
    
*   fix 修复 用户管理界面修改按钮权限字符串错误(感谢 QianRj)
    
*   fix 修复 oss配置页 展示配置key 隐藏主键id
    
*   fix 修复 页面api过期警告
    
*   fix 修复 代码生成列表加载问题你
    
*   fix 修复 修复默认关闭Tags-Views时，内链页面打不开
    
*   fix 修复 用户选择组件 id类型不统一问题
    
*   fix 修复 代码生成 编辑之后查两遍列表的问题
    
*   fix 修复 登录无redirect参数404问题
    
*   fix 修复 monitor 设置 context-path 导致退出重新登录404问题
    
*   fix 修复 手动登出与token过期登出跳转行为不一致问题
    
*   fix 修复 关闭sse功能 登出还是会发送sse关闭请求导致报错问题
    
*   fix 修复 内嵌页面数据缓存导致与外部页面不一致问题
    

## 平台简介

> RuoYi-Vue-Plus 是重写 RuoYi-Vue 针对 `分布式集群与多租户` 场景全方位升级(不兼容原框架)

> 项目代码、文档 均开源免费可商用 遵循开源协议在项目中保留开源协议文件即可  
> 活到老写到老 为兴趣而开源 为学习而开源 为让大家真正可以学到技术而开源

> 系统演示: https://plus-doc.dromara.org/#/common/demo\_system

> 前端项目地址: https://gitee.com/JavaLionLi/plus-ui  
> 成员前端项目地址: 基于vben5 https://gitee.com/dapppp/ruoyi-plus-vben5

> 文档地址: https://plus-doc.dromara.org

# 本框架与RuoYi的功能差异

以下是修复后的Markdown表格，优化了格式对齐、去除了冗余空行，并确保表头与内容对应清晰，可读性大幅提升：

| 功能                 | 本框架                                                         | RuoYi                                                         |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| 前端项目             | 采用 Vue3 + TS + ElementPlus 重写                              | 基于Vue2/Vue3 + JS                                            |
| 后端项目结构         | 采用插件化 + 扩展包形式，结构解耦，易于扩展                     | 模块相互注入耦合严重，难以扩展                                 |
| 后端代码风格         | 严格遵守Alibaba规范与项目统一配置的代码格式化                   | 代码书写与常规结构不同，阅读障碍大                             |
| Web容器              | 采用 Undertow（基于 XNIO 的高性能容器）                         | 采用 Tomcat                                                   |
| 权限认证             | 采用 Sa-Token、Jwt，静态使用功能齐全，低耦合、高扩展             | Spring Security 配置繁琐，扩展性极差                           |
| 权限注解             | 采用 Sa-Token 支持多类型校验（登录/角色/权限等），支持 `AND/OR` 等复杂表达式 | 只支持是否存在匹配                                           |
| 三方鉴权             | 采用 JustAuth 第三方登录组件，支持微信、钉钉等数十种三方认证     | 无                                                             |
| 关系数据库支持       | 原生支持 MySQL/Oracle/PostgreSQL/SQLServer，可异构切换（支持达梦、金仓等） | 支持 MySQL、Oracle，不支持同时使用、不支持异构切换             |
| 缓存数据库           | 支持 Redis 5-7，支持分布式限流、分布式队列等新特性               | Redis 仅支持简单 get/set 操作                                  |
| Redis客户端          | 采用 Redisson（Redis官方推荐），支持多模式，底层优化规避不当用法  | Lettuce + RedisTemplate，支持模式少，连接池（common-pool）Bug多 |
| 缓存注解             | 基于 Spring-Cache 扩展，支持过期时间、最大空闲时间等，注解化实现 | 需手动编写Redis代码逻辑                                       |
| ORM框架              | 采用 MyBatis-Plus，基于对象操作无需手写SQL，插件丰富             | 采用 MyBatis，基于XML需手写SQL                                |
| SQL监控              | 采用 p6spy，可输出完整SQL与执行时间监控                         | log输出需手动拼接SQL与参数，调试困难                           |
| 数据分页             | 基于 MyBatis-Plus 扩展，支持多排序、复杂传参                     | 采用 PageHelper，仅支持单查询分页、单排序，扩展性差             |
| 数据权限             | 基于 MyBatis-Plus 插件，无感式过滤，支持自定义规则               | 基于注解+AOP，仅支持部门角色，SQL兼容性差，扩展受限             |
| 数据脱敏             | 注解 + jackson 序列化脱敏，支持多策略（身份证/手机号等），可扩展  | 无                                                             |
| 数据加解密           | 注解 + mybatis 拦截器，支持 BASE64/AES/RSA/SM2/SM4 等            | 无                                                             |
| 接口传输加密         | 动态 AES + RSA 加密请求body，每次请求秘钥不同                   | 无                                                             |
| 数据翻译             | 注解 + jackson 序列化翻译，支持映射/直接翻译等，可扩展           | 无                                                             |
| 多数据源框架         | 采用 dynamic-datasource，yml配置管理，支持spel表达式切换         | 基于 druid 手动配置，配置繁琐，支持性差                         |
| 多数据源事务         | 采用 dynamic-datasource，支持异构数据库事务回滚                 | 不支持                                                         |
| 数据库连接池         | 采用 HikariCP（Spring官方内置），配置简单，性能稳定               | 采用 druid，社区维护差，配置繁琐，性能一般                     |
| 数据库主键           | 采用雪花ID，有序唯一，适配分库分表                               | 采用数据库自增ID，不支持多数据源主键唯一                       |
| WebSocket协议        | 基于 Spring 封装，扩展Token鉴权与分布式会话同步                  | 无                                                             |
| SSE推送              | 采用 Spring SSE 实现，扩展Token鉴权与分布式会话同步              | 无                                                             |
| 序列化               | 采用 Jackson（Spring官方内置），稳定可靠                         | 采用 fastjson，Bug较多                                         |
| 分布式幂等           | 参考美团GTIS防重系统简化实现                                    | 手动编写注解基于AOP实现                                       |
| 分布式锁             | 采用 Lock4j（底层基于 Redisson）                                | 无                                                             |
| 分布式任务调度       | 采用 SnailJob，支持分布式、DAG任务流等                           | 采用 Quartz，基于数据库锁性能差，集群配置复杂                   |
| 文件存储             | 采用 Minio 分布式存储，支持权限管理、加密存储                     | 采用本机文件存储，易丢失泄漏，无集群支持                       |
| 云存储               | 采用 AWS S3 协议客户端，支持七牛、阿里、腾讯等云厂商             | 不支持                                                         |
| 短信                 | 采用 sms4j 融合包，支持数十种厂商，yml配置即可使用               | 不支持                                                         |
| 邮件                 | 采用 mail-api 通用协议，支持大部分邮件厂商                       | 不支持                                                         |
| 接口文档             | 采用 SpringDoc + javadoc，无注解零入侵（基于Java注释生成）        | 采用 Springfox（已停止维护），需编写大量注解                   |
| 校验框架             | 采用 Validation，支持注解/工具类校验，注解支持国际化             | 仅支持注解，且不支持国际化                                     |
| Excel框架            | 采用 Alibaba EasyExcel，扩展自动合并、字典翻译等功能             | 基于 POI 手写实现，功能有限，扩展性差                           |
| 工作流支持           | 支持审批、转办、会签等复杂流程操作                               | 无                                                             |
| 工具类框架           | 采用 Hutool + Lombok，覆盖90%需求，注解简化代码（get/set等）      | 手写工具稳定性差，数量有限，代码臃肿需手动编写get/set           |
| 监控框架             | 采用 SpringBoot-Admin，基于actuator，扩展在线日志监控             | 无                                                             |
| 链路追踪             | 采用 Apache SkyWalking，实时查看请求节点与问题定位               | 无                                                             |
| 代码生成器           | 一键生成CRUD代码与页面，适配MP/SpringDoc，支持多数据源生成        | 仅支持单数据源，生成原生结构代码                               |
| 部署方式             | 支持 Docker 编排，一键搭建环境                                   | 原生jar部署，其他环境需手动搭建                                 |
| 项目路径修改         | 提供详细方案文档，修改简单                                       | 需大量改造，文档说明有限                                       |
| 国际化               | 基于请求头动态返回多语种，支持注解国际化，开发难度低             | 仅提供基础功能，需自行扩展                                     |
| 代码单例测试         | 提供单例测试方法与maven多环境单测插件                           | 仅提供基础功能，需自行扩展                                     |
| Demo案例             | 单独模块提供完整功能使用案例                                     | 无                                                             |