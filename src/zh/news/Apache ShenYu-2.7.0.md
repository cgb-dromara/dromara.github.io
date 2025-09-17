---
title: Apache ShenYu 2.7.0 Released！Apache ShenYu 2.7.0 发布！
author: 刘宏宇
date: 2025-02-13
cover: /assets/img/news/Apache ShenYu-2.7.0-0.png
head:
  - - meta
    - name: 新闻
---

  

  

关于Apache ShenYu  关于 Apache ShenYu

**Apache ShenYu** 一款使用 **Java Reactor** 开发的响应式**API** 网关。以其高性能，动态灵活的流量管控，热插拔，易部署等特性，开箱即用为用户提供整套全生命周期的 **API**网关，包含 **API**注册、服务代理、协议转换、**API**文档与 **API**治理等功能。

  

官网: https://shenyu.apache.org  
官网： https://shenyu.apache.org

GitHub: https://github.com/apache/shenyu  
GitHub： https://github.com/apache/shenyu

  


  

版本预览

时隔一年，**Apache ShenYu**发布了2.7.0版本，该版本共计提交了254+个 Pull Request,新增约17+个新特性，新增了若干增强，重构了若干功能，并且修复了若干个bug。共计61位贡献者参与其中，累计贡献者达350+位。

  

版本记录：

https://github.com/apache/shenyu/compare/v2.6.0...v2.7.0

  

  

新特性

  

1\. 升级 Dockerfile java 版本从 jdk8 升级到 jdk17

pr: https://github.com/apache/shenyu/pull/5374  
公关： https://github.com/apache/shenyu/pull/5374

  

2\. 升级 SpringBoot 版本到 3.x

pr: https://github.com/apache/shenyu/pull/5583  
公关： https://github.com/apache/shenyu/pull/5583

  

3\. 支持 ShenYu Admin 集群模式

pr:   公关：

https://github.com/apache/shenyu/pull/5544

https://github.com/apache/shenyu/pull/5592

  

4\. 升级 checkstyle 插件版本到 3.4.0

pr: https://github.com/apache/shenyu/pull/5614  
公关： https://github.com/apache/shenyu/pull/5614

  

5\. 数据源支持 OceanBase

pr: https://github.com/apache/shenyu/pull/5617  
公关： https://github.com/apache/shenyu/pull/5617

  

6\. 支持批量修改 选择器\\规则 的状态

pr: https://github.com/apache/shenyu/pull/5499  
公关： https://github.com/apache/shenyu/pull/5499

  

7\. 支持批量修改 AppAuth 的状态

pr: https://github.com/apache/shenyu/pull/5488  
公关： https://github.com/apache/shenyu/pull/5488

  

8\. 升级 apache dubbo 的版本

pr: https://github.com/apache/shenyu/pull/5527  
公关： https://github.com/apache/shenyu/pull/5527

  

9\. 支持 Gitpod 开发

pr: https://github.com/apache/shenyu/pull/5610  
公关： https://github.com/apache/shenyu/pull/5610

  

10\. 支持配置的导入和导出

pr: https://github.com/apache/shenyu/pull/5474  
公关： https://github.com/apache/shenyu/pull/5474

  

11\. 增加 shenyu 客户端心跳上报功能

pr: https://github.com/apache/shenyu/pull/5659  
公关： https://github.com/apache/shenyu/pull/5659

  

12\. 增加 Namespace 功能

pr:   公关：

https://github.com/apache/shenyu/pull/5584

https://github.com/apache/shenyu/pull/5715

https://github.com/apache/shenyu/pull/5716

https://github.com/apache/shenyu/pull/5719

https://github.com/apache/shenyu/pull/5729

https://github.com/apache/shenyu/pull/5734

https://github.com/apache/shenyu/pull/5735

https://github.com/apache/shenyu/pull/5740

https://github.com/apache/shenyu/pull/5746

https://github.com/apache/shenyu/pull/5757

https://github.com/apache/shenyu/pull/5760

https://github.com/apache/shenyu/pull/5765

https://github.com/apache/shenyu/pull/5769

https://github.com/apache/shenyu/pull/5771

https://github.com/apache/shenyu/pull/5779

https://github.com/apache/shenyu/pull/5786

https://github.com/apache/shenyu/pull/5787

https://github.com/apache/shenyu/pull/5790

https://github.com/apache/shenyu/pull/5798

https://github.com/apache/shenyu/pull/5799

https://github.com/apache/shenyu/pull/5823

https://github.com/apache/shenyu/pull/5847

https://github.com/apache/shenyu/pull/5857

  

13\. 支持 k8s 动态扩缩容

pr: https://github.com/apache/shenyu/pull/5686

  

14\. 从新登录之后使之前的token失效

pr: https://github.com/apache/shenyu/pull/5600

  

15\. divide 插件支持灰度发布功能

pr: https://github.com/apache/shenyu/pull/5763

  

16\. 支持 Kubernetes 注册中心

pr: https://github.com/apache/shenyu/pull/5679

  

  

增强

  

1\. 添加 RocketMQ 日志 e2e 测试

pr: https://github.com/apache/shenyu/pull/5439

  

2\. 增强速率限制器的指标收集

pr: https://github.com/apache/shenyu/pull/5461

  

3\. 增强 Sentinel、Resilience4j 和 Hystrix 的指标收集

pr: https://github.com/apache/shenyu/pull/5468

  

4\. 整理 sofa-common-tools 的依赖

pr: https://github.com/apache/shenyu/pull/5609

  

5\. 添加缺失的许可证

pr: https://github.com/apache/shenyu/pull/5503

  

6\. 为 Kafka 消息发送设置回调

pr: https://github.com/apache/shenyu/pull/5748

  

7\. 使用 Dubbo 元数据中的负载均衡配置

pr: https://github.com/apache/shenyu/pull/5806

  

8\. 为从选择出获取的Upstream添加非空验证

pr: https://github.com/apache/shenyu/pull/5804

  

9\. 将规则处理中的超时设置到 Dubbo RPC 上下文

pr: https://github.com/apache/shenyu/pull/5778

  

10\. 在启用选择器和规则时发布事件

pr: https://github.com/apache/shenyu/pull/5762

  

11\. 从命名空间会话映射中移除已关闭的会话

pr: https://github.com/apache/shenyu/pull/5734

  

12\. 为 ShenyuClientURIExecutorSubscriber 添加测试用例

pr: https://github.com/apache/shenyu/pull/5413

  

13\. 为 ShenyuClientIllegalArgumentException 添加测试用例

pr: https://github.com/apache/shenyu/pull/5408

  

14\. 为 ShenyuClientRegisterEventPublisher 添加测试用例

pr: https://github.com/apache/shenyu/pull/5417

  

15\. 为 ShenyuClientMetadataExecutorSubscriber 添加测试用例

pr: https://github.com/apache/shenyu/pull/5404

  

16\. 为 AbstractWasmPluginDataHandler 添加测试用例

pr: https://github.com/apache/shenyu/pull/5451

  

17\. 为 ShenyuClientRegisterRepositoryFactoryTest 添加测试用例

pr: https://github.com/apache/shenyu/pull/5443

  

18\. 为 AbstractWasmDiscoveryHandler 添加测试用例

pr: https://github.com/apache/shenyu/pull/5453

  

19\. 升级 SOFA RPC 版本支持

pr: https://github.com/apache/shenyu/pull/5526

  

20\. 将签名插件的请求头键添加到跨域过滤器配置中

pr: https://github.com/apache/shenyu/pull/5627

  

21\. 加密密码

pr: https://github.com/apache/shenyu/pull/5436

  

22\. 添加 AbstractShenyuWasmPlugin 测试用例

pr: https://github.com/apache/shenyu/pull/5450

  

23\. 重写插件/上下文路径插件支持跨应用和插件

pr: https://github.com/apache/shenyu/pull/5438

  

24\. 移除重复路径检查

pr: https://github.com/apache/shenyu/pull/5514

  

25\. 移除 Alibaba Dubbo 相关依赖

pr: https://github.com/apache/shenyu/pull/5500

  

26\. 支持通过 Docker 环境变量设置 HTTP 路径

pr: https://github.com/apache/shenyu/pull/5833

  

27\. 添加代码重构改进

pr: https://github.com/apache/shenyu/pull/5613

  

28\. 支持从 cookie、header、param 中获取令牌

pr: https://github.com/apache/shenyu/pull/5547

  

29\. 调整使得ShenyuDubboService注解的默认值与 DubboService 注解保持一致

pr: https://github.com/apache/shenyu/pull/5816

  

30\. 将数据库脚本添加到管理包中

pr: https://github.com/apache/shenyu/pull/5724

  

31\. 清理无用代码并进行改进

pr: 

https://github.com/apache/shenyu/pull/5849

  

https://github.com/apache/shenyu/pull/5803

  

https://github.com/apache/shenyu/pull/5789

  

  

32\. 优化 MotanServiceEventListener 测试用例

pr: https://github.com/apache/shenyu/pull/5745

  

33\. 删除 shenyu-registry-eureka.xml 中重复的 Maven 配置

pr: https://github.com/apache/shenyu/pull/5836

  

34\. 更新 JWT 依赖

pr: https://github.com/apache/shenyu/pull/5480

  

35\. 打印插件执行时间

pr: https://github.com/apache/shenyu/pull/5437

  

36\. Admin 中的本地发现支持 upstream 健康检查

pr: https://github.com/apache/shenyu/pull/5596

  

37\. 关闭规则缓存

pr: https://github.com/apache/shenyu/pull/5589

  

38\. 减少并发

pr: https://github.com/apache/shenyu/pull/5587

  

39\. 优化逻辑以避免 "orElse" 执行，更新 VersionTwoExtractor

pr: https://github.com/apache/shenyu/pull/5415

  

  

重构

  

  

1\. 使用 spring-integration-jdbc 实现 Admin 分布式锁

pr: https://github.com/apache/shenyu/pull/5457

  

2\. 重构 beanUtils

pr: https://github.com/apache/shenyu/pull/5497

  

3\. 移除 macOS CI

pr: https://github.com/apache/shenyu/pull/5559

  

4\. 更新日志插件中已弃用的 DataBuffer 方法

pr: https://github.com/apache/shenyu/pull/5620

  

5\. 将 e2e k8s 测试修改为 docker compose

pr: https://github.com/apache/shenyu/pull/5710

  

6\. 将 Admin swagger 从 springfox 迁移到 springdoc

pr: https://github.com/apache/shenyu/pull/5630

  

7\. 重构 springcloud 插件

pr: https://github.com/apache/shenyu/pull/5695

  

8\. 重构部分代码

pr: https://github.com/apache/shenyu/pull/5568

  

9\. 删除 SO\_SNDBUF 和 SO\_RCVBUF

pr: https://github.com/apache/shenyu/pull/5502

  

10\. 将日志 %s 替换为 {}

pr: https://github.com/apache/shenyu/pull/5465

  

11\. 优化节点类型监听器

pr: https://github.com/apache/shenyu/pull/5435

  

12\. 重构插件生命周期

pr: https://github.com/apache/shenyu/pull/5432

  

13\. 调整代码顺序并移除无效的输入参数

pr: https://github.com/apache/shenyu/pull/5397

  

  

修复

  

  

1\. 修复请求插件的重复请求头问题

pr: https://github.com/apache/shenyu/pull/5846

  

2\. 修复删除 divide 选择器时代理选择器和发现未删除的问题

pr: https://github.com/apache/shenyu/pull/5845

  

3\. 修复日志插件错误日志捕获问题

pr: https://github.com/apache/shenyu/pull/5842

  

4\. 修复日志插件示例 bug

pr: https://github.com/apache/shenyu/pull/5429

  

5\. 修复内存溢出问题

pr: https://github.com/apache/shenyu/pull/5407

  

6\. 修复rewrite集成测试

pr: https://github.com/apache/shenyu/pull/5445

  

7\. 修复 AbstractWasmPluginDataHandlerTest

pr: https://github.com/apache/shenyu/pull/5464

  

8\. 修复 sql-script/h2/schema.sql 中缺少主键的问题

pr: https://github.com/apache/shenyu/pull/5481

  

9\. 修复数据字典页面数据排序异常

pr: https://github.com/apache/shenyu/pull/5483

  

10\. 修复文档错误

pr: https://github.com/apache/shenyu/pull/5505

  

11\. 解决仪表盘路由与上下文路径更新不匹配的问题

pr: https://github.com/apache/shenyu/pull/5510

  

12\. 修复 etcd 同步配置问题

pr: https://github.com/apache/shenyu/pull/5535

  

13\. 修复 consul 同步问题

pr: https://github.com/apache/shenyu/pull/5546

  

14\. 修复未注册无法查询的错误

pr: https://github.com/apache/shenyu/pull/5578

  

15\. 修正插件 ID 查询和更新数据类型

pr: https://github.com/apache/shenyu/pull/5622

  

16\. 修复 AdminConstants 类拼写错误

pr: https://github.com/apache/shenyu/pull/5637

  

17\. 修复 shenyu-examples-springmvc 启动失败问题

pr: https://github.com/apache/shenyu/pull/5664

  

18\. 修复仪表盘菜单子项排序不生效问题

pr: https://github.com/apache/shenyu/pull/5691

  

19\. ShenyuApacheDubboXmlProviderApplication 配置修复

pr: https://github.com/apache/shenyu/pull/5811

  

20\. 修复proxy\_selector和discovery的数据同步 ID 不唯一问题

pr: https://github.com/apache/shenyu/pull/5783

  

21\. 过滤禁用的字典选项

pr: https://github.com/apache/shenyu/pull/5776

  

22\. 修复 SpringCloudParser 元数据空数据问题

pr: https://github.com/apache/shenyu/pull/5737

  

23\. 修复客户端注册验证

pr: https://github.com/apache/shenyu/pull/5764

  

24\. 配置 dubbo 序列化检查状态为禁用

pr: https://github.com/apache/shenyu/pull/5756

  

25\. 修复示例 TestApacheDubboXmlApplication 启动失败问题

pr: https://github.com/apache/shenyu/pull/5754

  

26\. 修复 nacos 数据同步模型缺少上下文路径配置

pr: https://github.com/apache/shenyu/pull/5722

  

27\. 修复 SPI 在多线程场景下创建非单例对象问题

pr: https://github.com/apache/shenyu/pull/5713

  

28\. 修复错误的 SQL 语法异常

pr: https://github.com/apache/shenyu/pull/5707

  

29\. 修复 ListUtil->merge 异常

pr: https://github.com/apache/shenyu/pull/5642

  

30\. 修复元数据禁用未过滤问题

pr: https://github.com/apache/shenyu/pull/5638

  

31\. 修复 divide 日志请求方法

pr: https://github.com/apache/shenyu/pull/5607

  

32\. 修复 e2e chunk header 错误

pr: https://github.com/apache/shenyu/pull/5593

  

33\. 修复 cookie 错误和 SQL 检查

pr: https://github.com/apache/shenyu/pull/5567

  

34\. 修复空指针异常问题

pr: 

https://github.com/apache/shenyu/pull/5539

  

https://github.com/apache/shenyu/pull/5530

  

35\. 修复无效路径错误

pr: https://github.com/apache/shenyu/pull/5533

  

36\. 修复热加载问题

pr: https://github.com/apache/shenyu/pull/5509

  

37\. 修复 e2e 测试用例无法运行 wget 命令

pr: https://github.com/apache/shenyu/pull/5519

  

38\. 修复降级问题

pr: https://github.com/apache/shenyu/pull/5496

  

39\. 解决 rule-sqlmap.xml 中的 SQL 错误

pr: https://github.com/apache/shenyu/pull/5644

  

40\. 修复 readYmlBuildRepository 空指针异常

pr: https://github.com/apache/shenyu/pull/5819

  

41\. nacos 无法在 Shenyu-examples-SpringCloud 项目中注册的问题修复

pr: https://github.com/apache/shenyu/pull/5825

  

42\. 修复 springCloud 规则数据路径设置未使用问题

pr: 

https://github.com/apache/shenyu/pull/5841

  

https://github.com/apache/shenyu/pull/5843

  

43\. 修复 shenyu-plugin-logging-elasticsearch：修改 ElasticSearchLogConfig 的 setIndexName

pr: https://github.com/apache/shenyu/pull/5830

  

44\. 修复停止服务时未首先从网关下线问题

pr: https://github.com/apache/shenyu/pull/5507

  

45\. 修复 k8s 存活探针无法运行 wget 命令错误

pr: https://github.com/apache/shenyu/pull/5513

  

46\. 修复 AbstractNodeDataSyncService 启动时加载discoveryUpstream的问题

pr: https://github.com/apache/shenyu/pull/5473

  

  

贡献者

特别感谢以下贡献者对 **2.7.0** 版本的支持和参与（排名不分先后）。

  

**0xmkzt**,**Divyansh200102**,**IceFoxs**,**JJellyfish**,**Misaya295**,**KerwinBryant**,**M.G.Ting**,**NanMu**,**QiXu**,**RayayChung**,**RiccoChen**,**Sinsy**,**VampireAchao**,**WindSearcher**,**Wweiei**,**YuSiheng**,**aias00**,**caaaaaat**,**crazyStar**,**crudboy**,**dragon-zhang**,**dyjxg4xygary**,**dyp314417995**,**eye-gu**,**frank**,**hdgaadd**,**hql0312**,**j@ckzh0u**,**jerbo99**,**loongs-zhang**,**mmengLong**,**moremind**,**po-168**,**tomsun28**,**ttfont**,**wlngo**,**wyfvsfy**,**xcsnx**,**xiangqianZ**,**xiaoyu**,**yunlongn**,**ywwana**,**zhengke zhou**,**zhengpeng**,**ywj1352**

  

  

成为贡献者

  

我们欢迎每一位贡献者的加入ShenYu，欢迎贡献者以Apache Way的精神参与ShenYu！

  

贡献者指南请参考：

https://shenyu.apache.org/zh/community/contributor-guide