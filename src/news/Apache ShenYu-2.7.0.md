---
title: Apache ShenYu 2.7.0 Released!
author: Liu Hongyu
date: 2025-02-13
cover: /assets/img/news/Apache ShenYu-2.7.0-0.png
head:
  - - meta
    - name: News
---

About Apache ShenYu

**Apache ShenYu** is a reactive **API** gateway developed using **Java Reactor**. With its high performance, dynamic and flexible traffic management, hot-pluggable, and easy deployment features, it provides users with a full lifecycle **API** gateway out-of-the-box, including **API** registration, service proxy, protocol conversion, **API** documentation, and **API** governance.

Official Website: https://shenyu.apache.org

GitHub: https://github.com/apache/shenyu


Version Preview

After a year, **Apache ShenYu** has released version 2.7.0. This version includes a total of 254+ Pull Requests, approximately 17+ new features, several enhancements, numerous refactorings, and several bug fixes. A total of 61 contributors participated, with cumulative contributors reaching 350+.

Version Record:
https://github.com/apache/shenyu/compare/v2.6.0...v2.7.0

New Features

1. Upgrade Dockerfile Java version from JDK8 to JDK17
   pr: https://github.com/apache/shenyu/pull/5374

2. Upgrade SpringBoot version to 3.x
   pr: https://github.com/apache/shenyu/pull/5583

3. Support ShenYu Admin cluster mode
   pr:
   https://github.com/apache/shenyu/pull/5544
   https://github.com/apache/shenyu/pull/5592

4. Upgrade checkstyle plugin version to 3.4.0
   pr: https://github.com/apache/shenyu/pull/5614

5. Data source support for OceanBase
   pr: https://github.com/apache/shenyu/pull/5617

6. Support batch modification of selector/rule status
   pr: https://github.com/apache/shenyu/pull/5499

7. Support batch modification of AppAuth status
   pr: https://github.com/apache/shenyu/pull/5488

8. Upgrade Apache Dubbo version
   pr: https://github.com/apache/shenyu/pull/5527

9. Support Gitpod development
   pr: https://github.com/apache/shenyu/pull/5610

10. Support configuration import and export
   pr: https://github.com/apache/shenyu/pull/5474

11. Add Shenyu client heartbeat reporting function
    pr: https://github.com/apache/shenyu/pull/5659

12. Add Namespace functionality
    pr:
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

13. Support k8s dynamic scaling
    pr: https://github.com/apache/shenyu/pull/5686

14. Invalidate previous token after re-login
    pr: https://github.com/apache/shenyu/pull/5600

15. Divide plugin supports canary release functionality
    pr: https://github.com/apache/shenyu/pull/5763

16. Support Kubernetes registry
    pr: https://github.com/apache/shenyu/pull/5679

Enhancements

1. Add RocketMQ log e2e test
   pr: https://github.com/apache/shenyu/pull/5439

2. Enhance rate limiter metric collection
   pr: https://github.com/apache/shenyu/pull/5461

3. Enhance Sentinel, Resilience4j, and Hystrix metric collection
   pr: https://github.com/apache/shenyu/pull/5468

4. Organize sofa-common-tools dependency
   pr: https://github.com/apache/shenyu/pull/5609

5. Add missing licenses
   pr: https://github.com/apache/shenyu/pull/5503

6. Set callback for Kafka message sending
   pr: https://github.com/apache/shenyu/pull/5748

7. Use load balancing configuration from Dubbo metadata
   pr: https://github.com/apache/shenyu/pull/5806

8. Add non-null validation for Upstream obtained from selector
   pr: https://github.com/apache/shenyu/pull/5804

9. Set timeout from rule processing into Dubbo RPC context
   pr: https://github.com/apache/shenyu/pull/5778

10. Publish events when enabling selectors and rules
   pr: https://github.com/apache/shenyu/pull/5762

11. Remove closed sessions from namespace session map
    pr: https://github.com/apache/shenyu/pull/5734

12. Add test cases for ShenyuClientURIExecutorSubscriber
    pr: https://github.com/apache/shenyu/pull/5413

13. Add test cases for ShenyuClientIllegalArgumentException
    pr: https://github.com/apache/shenyu/pull/5408

14. Add test cases for ShenyuClientRegisterEventPublisher
    pr: https://github.com/apache/shenyu/pull/5417

15. Add test cases for ShenyuClientMetadataExecutorSubscriber
    pr: https://github.com/apache/shenyu/pull/5404

16. Add test cases for AbstractWasmPluginDataHandler
    pr: https://github.com/apache/shenyu/pull/5451

17. Add test cases for ShenyuClientRegisterRepositoryFactoryTest
    pr: https://github.com/apache/shenyu/pull/5443

18. Add test cases for AbstractWasmDiscoveryHandler
    pr: https://github.com/apache/shenyu/pull/5453

19. Upgrade SOFA RPC version support
    pr: https://github.com/apache/shenyu/pull/5526

20. Add signature plugin request header keys to CORS filter configuration
    pr: https://github.com/apache/shenyu/pull/5627

21. Encrypt passwords
    pr: https://github.com/apache/shenyu/pull/5436

22. Add AbstractShenyuWasmPlugin test cases
    pr: https://github.com/apache/shenyu/pull/5450

23. Rewrite plugin/context path plugin supports cross-application and plugins
    pr: https://github.com/apache/shenyu/pull/5438

24. Remove duplicate path check
    pr: https://github.com/apache/shenyu/pull/5514

25. Remove Alibaba Dubbo related dependencies
    pr: https://github.com/apache/shenyu/pull/5500

26. Support setting HTTP path via Docker environment variables
    pr: https://github.com/apache/shenyu/pull/5833

27. Add code refactoring improvements
    pr: https://github.com/apache/shenyu/pull/5613

28. Support obtaining tokens from cookies, headers, and parameters
    pr: https://github.com/apache/shenyu/pull/5547

29. Adjust ShenyuDubboService annotation default values to align with DubboService annotation
    pr: https://github.com/apache/shenyu/pull/5816

30. Add database scripts to admin package
    pr: https://github.com/apache/shenyu/pull/5724

31. Clean up unused code and make improvements
    pr:
    https://github.com/apache/shenyu/pull/5849
    https://github.com/apache/shenyu/pull/5803
    https://github.com/apache/shenyu/pull/5789

32. Optimize MotanServiceEventListener test cases
    pr: https://github.com/apache/shenyu/pull/5745

33. Remove duplicate Maven configuration in shenyu-registry-eureka.xml
    pr: https://github.com/apache/shenyu/pull/5836

34. Update JWT dependency
    pr: https://github.com/apache/shenyu/pull/5480

35. Print plugin execution time
    pr: https://github.com/apache/shenyu/pull/5437

36. Admin local discovery supports upstream health checks
    pr: https://github.com/apache/shenyu/pull/5596

37. Disable rule cache
    pr: https://github.com/apache/shenyu/pull/5589

38. Reduce concurrency
    pr: https://github.com/apache/shenyu/pull/5587

39. Optimize logic to avoid "orElse" execution, update VersionTwoExtractor
    pr: https://github.com/apache/shenyu/pull/5415

Refactoring

1. Use spring-integration-jdbc to implement Admin distributed lock
   pr: https://github.com/apache/shenyu/pull/5457

2. Refactor beanUtils
   pr: https://github.com/apache/shenyu/pull/5497

3. Remove macOS CI
   pr: https://github.com/apache/shenyu/pull/5559

4. Update deprecated DataBuffer methods in log plugin
   pr: https://github.com/apache/shenyu/pull/5620

5. Modify e2e k8s test to docker compose
   pr: https://github.com/apache/shenyu/pull/5710

6. Migrate Admin swagger from springfox to springdoc
   pr: https://github.com/apache/shenyu/pull/5630

7. Refactor springcloud plugin
   pr: https://github.com/apache/shenyu/pull/5695

8. Refactor partial code
   pr: https://github.com/apache/shenyu/pull/5568

9. Delete SO_SNDBUF and SO_RCVBUF
   pr: https://github.com/apache/shenyu/pull/5502

10. Replace log %s with {}
   pr: https://github.com/apache/shenyu/pull/5465

11. Optimize node type listener
    pr: https://github.com/apache/shenyu/pull/5435

12. Refactor plugin lifecycle
    pr: https://github.com/apache/shenyu/pull/5432

13. Adjust code order and remove invalid input parameters
    pr: https://github.com/apache/shenyu/pull/5397

Fixes

1. Fix duplicate request header issue in request plugin
   pr: https://github.com/apache/shenyu/pull/5846

2. Fix issue where proxy selector and discovery are not deleted when deleting divide selector
   pr: https://github.com/apache/shenyu/pull/5845

3. Fix log plugin error log capture issue
   pr: https://github.com/apache/shenyu/pull/5842

4. Fix log plugin sample bug
   pr: https://github.com/apache/shenyu/pull/5429

5. Fix memory overflow issue
   pr: https://github.com/apache/shenyu/pull/5407

6. Fix rewrite integration test
   pr: https://github.com/apache/shenyu/pull/5445

7. Fix AbstractWasmPluginDataHandlerTest
   pr: https://github.com/apache/shenyu/pull/5464

8. Fix missing primary key in sql-script/h2/schema.sql
   pr: https://github.com/apache/shenyu/pull/5481

9. Fix abnormal data sorting on data dictionary page
   pr: https://github.com/apache/shenyu/pull/5483

10. Fix documentation errors
   pr: https://github.com/apache/shenyu/pull/5505

11. Resolve dashboard route and context path update mismatch issue
    pr: https://github.com/apache/shenyu/pull/5510

12. Fix etcd synchronization configuration issue
    pr: https://github.com/apache/shenyu/pull/5535

13. Fix consul synchronization issue
    pr: https://github.com/apache/shenyu/pull/5546

14. Fix error where unregistered cannot be queried
    pr: https://github.com/apache/shenyu/pull/5578

15. Correct plugin ID query and update data type
    pr: https://github.com/apache/shenyu/pull/5622

16. Fix spelling error in AdminConstants class
    pr: https://github.com/apache/shenyu/pull/5637

17. Fix shenyu-examples-springmvc startup failure issue
    pr: https://github.com/apache/shenyu/pull/5664

18. Fix dashboard menu sub-item sorting not taking effect issue
    pr: https://github.com/apache/shenyu/pull/5691

19. ShenyuApacheDubboXmlProviderApplication configuration fix
    pr: https://github.com/apache/shenyu/pull/5811

20. Fix non-unique data synchronization ID issue for proxy_selector and discovery
    pr: https://github.com/apache/shenyu/pull/5783

21. Filter disabled dictionary options
    pr: https://github.com/apache/shenyu/pull/5776

22. Fix SpringCloudParser metadata empty data issue
    pr: https://github.com/apache/shenyu/pull/5737

23. Fix client registration validation
    pr: https://github.com/apache/shenyu/pull/5764

24. Configure dubbo serialization check status as disabled
    pr: https://github.com/apache/shenyu/pull/5756

25. Fix sample TestApacheDubboXmlApplication startup failure issue
    pr: https://github.com/apache/shenyu/pull/5754

26. Fix nacos data synchronization model missing context path configuration
    pr: https://github.com/apache/shenyu/pull/5722

27. Fix SPI creating non-singleton objects in multi-threaded scenarios
    pr: https://github.com/apache/shenyu/pull/5713

28. Fix incorrect SQL syntax exception
    pr: https://github.com/apache/shenyu/pull/5707

29. Fix ListUtil->merge exception
    pr: https://github.com/apache/shenyu/pull/5642

30. Fix metadata disable not filtered issue
    pr: https://github.com/apache/shenyu/pull/5638

31. Fix divide log request method
    pr: https://github.com/apache/shenyu/pull/5607

32. Fix e2e chunk header error
    pr: https://github.com/apache/shenyu/pull/5593

33. Fix cookie error and SQL check
    pr: https://github.com/apache/shenyu/pull/5567

34. Fix null pointer exception issue
    pr:
    https://github.com/apache/shenyu/pull/5539
    https://github.com/apache/shenyu/pull/5530

35. Fix invalid path error
    pr: https://github.com/apache/shenyu/pull/5533

36. Fix hot reload issue
    pr: https://github.com/apache/shenyu/pull/5509

37. Fix e2e test case unable to run wget command
    pr: https://github.com/apache/shenyu/pull/5519

38. Fix downgrade issue
    pr: https://github.com/apache/shenyu/pull/5496

39. Resolve SQL error in rule-sqlmap.xml
    pr: https://github.com/apache/shenyu/pull/5644

40. Fix readYmlBuildRepository null pointer exception
    pr: https://github.com/apache/shenyu/pull/5819

41. Fix nacos unable to register in Shenyu-examples-SpringCloud project issue
    pr: https://github.com/apache/shenyu/pull/5825

42. Fix springCloud rule data path setting not used issue
    pr:
    https://github.com/apache/shenyu/pull/5841
    https://github.com/apache/shenyu/pull/5843

43. Fix shenyu-plugin-logging-elasticsearch: modify ElasticSearchLogConfig setIndexName
    pr: https://github.com/apache/shenyu/pull/5830

44. Fix issue where service is not taken offline from gateway first when stopping service
    pr: https://github.com/apache/shenyu/pull/5507

45. Fix k8s liveness probe unable to run wget command error
    pr: https://github.com/apache/shenyu/pull/5513

46. Fix AbstractNodeDataSyncService loading discoveryUpstream on startup issue
    pr: https://github.com/apache/shenyu/pull/5473

Contributors

Special thanks to the following contributors for their support and participation in the **2.7.0** version (in no particular order).

**0xmkzt**, **Divyansh200102**, **IceFoxs**, **JJellyfish**, **Misaya295**, **KerwinBryant**, **M.G.Ting**, **NanMu**, **QiXu**, **RayayChung**, **RiccoChen**, **Sinsy**, **VampireAchao**, **WindSearcher**, **Wweiei**, **YuSiheng**, **aias00**, **caaaaaat**, **crazyStar**, **crudboy**, **dragon-zhang**, **dyjxg4xygary**, **dyp314417995**, **eye-gu**, **frank**, **hdgaadd**, **hql0312**, **j@ckzh0u**, **jerbo99**, **loongs-zhang**, **mmengLong**, **moremind**, **po-168**, **tomsun28**, **ttfont**, **wlngo**, **wyfvsfy**, **xcsnx**, **xiangqianZ**, **xiaoyu**, **yunlongn**, **ywwana**, **zhengke zhou**, **zhengpeng**, **ywj1352**

Become a Contributor

We welcome every contributor to join ShenYu and encourage contributors to participate in ShenYu in the spirit of the Apache Way!

Contributor Guide:
https://shenyu.apache.org/zh/community/contributor-guide