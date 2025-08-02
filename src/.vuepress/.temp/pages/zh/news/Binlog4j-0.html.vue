<template><div><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h2>
<p>Binlog4j 是一款提供宕机续读，高可用集群，数据转换的 Binlog 客户端。</p>
<h2 id="项目特性" tabindex="-1"><a class="header-anchor" href="#项目特性"><span>项目特性</span></a></h2>
<ul>
<li>集群模式, 通过集群部署的方式，保证服务高可用。</li>
<li>宕机续读, 避免宕机期间造成数据丢失。</li>
<li>数据转换, 基于泛型封装 BinlogEvent 的序列化数据。</li>
<li>兼容 传统项目 与 Spring Boot / Cloud 项目。</li>
<li>兼容 Spring Boot 2.x 与 Spring Boot 3.x 版本。</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<p>包括但不限于（1）数据同步（2）实时计算（3）数据审计（4）数据分析</p>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>   &#x3C;groupId>com.gitee.Jmysy&#x3C;/groupId></span></span>
<span class="line"><span>   &#x3C;artifactId>binlog4j-core&#x3C;/artifactId></span></span>
<span class="line"><span>   &#x3C;version>latest.version&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用"><span>简单使用</span></a></h2>
<p>通过 BinlogClient 创建客户端，IBinlogEventHandler 处理事件通知，该接口支持泛型，数据将遵循驼峰格式封装。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>public class BootStrap {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BinlogClientConfig clientConfig = new BinlogClientConfig();</span></span>
<span class="line"><span>        clientConfig.setHost("127.0.0.1");</span></span>
<span class="line"><span>        clientConfig.setPort(3306);</span></span>
<span class="line"><span>        clientConfig.setUsername("root");</span></span>
<span class="line"><span>        clientConfig.setPassword("taoren@123");</span></span>
<span class="line"><span>        clientConfig.setServerId(1990);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        IBinlogClient binlogClient = new BinlogClient(clientConfig);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        binlogClient.registerEventHandler("database", "table", new IBinlogEventHandler() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onInsert(BinlogEvent event) {</span></span>
<span class="line"><span>                System.out.println("插入数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onUpdate(BinlogEvent event) {</span></span>
<span class="line"><span>                System.out.println("修改数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onDelete(BinlogEvent event) {</span></span>
<span class="line"><span>                System.out.println("删除数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        binlogClient.connect();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级特性" tabindex="-1"><a class="header-anchor" href="#高级特性"><span>高级特性</span></a></h2>
<p>通过 Persistence 配置为 true 启用宕机续读功能, Binlog4j 会将 binlog 的 filename 与 position 记录到 redis, 同时你需要提供 Redis 配置。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>public class BootStrap {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RedisConfig redisConfig = new RedisConfig();</span></span>
<span class="line"><span>        redisConfig.setHost("127.0.0.1");</span></span>
<span class="line"><span>        redisConfig.setPort(6379);</span></span>
<span class="line"><span>        redisConfig.setPassword("taoren@123");</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BinlogClientConfig clientConfig = new BinlogClientConfig();</span></span>
<span class="line"><span>        clientConfig.setHost("127.0.0.1");</span></span>
<span class="line"><span>        clientConfig.setPort(3306);</span></span>
<span class="line"><span>        clientConfig.setUsername("root");</span></span>
<span class="line"><span>        clientConfig.setPassword("taoren@123");</span></span>
<span class="line"><span>        clientConfig.setServerId(1990);</span></span>
<span class="line"><span>        clientConfig.setRedisConfig(redisConfig);</span></span>
<span class="line"><span>        clientConfig.setPersistence(true);</span></span>
<span class="line"><span>        clientConfig.setMode(BinlogClientMode.cluster);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BinlogClient binlogClient = new BinlogClient(clientConfig);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        binlogClient.registerEventHandler("database", "table", new IBinlogEventHandler&#x3C;User>() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onInsert(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>                System.out.println("插入数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onUpdate(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>                System.out.println("修改数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onDelete(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>                System.out.println("删除数据:{}", event.getData());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        binlogClient.connect();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-spring-boot-集成" tabindex="-1"><a class="header-anchor" href="#在-spring-boot-集成"><span>在 Spring Boot 集成</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>com.gitee.Jmysy&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>binlog4j-spring-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>latest.version&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，在 application.yml 或 application.properties 中填写 Binlog4j 配置</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>spring:</span></span>
<span class="line"><span>  binlog4j:</span></span>
<span class="line"><span>    redis-config:</span></span>
<span class="line"><span>      host: 127.0.0.1</span></span>
<span class="line"><span>      port: 6379</span></span>
<span class="line"><span>      password: taoren@123</span></span>
<span class="line"><span>    client-configs:</span></span>
<span class="line"><span>      master:</span></span>
<span class="line"><span>        username: root</span></span>
<span class="line"><span>        password: taoren@123</span></span>
<span class="line"><span>        host: 127.0.0.1</span></span>
<span class="line"><span>        port: 3306</span></span>
<span class="line"><span>        serverId: 1990</span></span>
<span class="line"><span>      slave:</span></span>
<span class="line"><span>        username: root</span></span>
<span class="line"><span>        password: taoren@123</span></span>
<span class="line"><span>        host: 127.0.0.1</span></span>
<span class="line"><span>        port: 3306</span></span>
<span class="line"><span>        serverId: 1991</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单表监听" tabindex="-1"><a class="header-anchor" href="#单表监听"><span>单表监听</span></a></h2>
<p>使用 @BinlogSubscriber 注解, 指定 IBinlogEventHandler 需要注册到哪个客户端, 并且指定监听的 database 与 table。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@BinlogSubscriber(clientName = "master", database = "pear-admin", table ="sys_user")</span></span>
<span class="line"><span>public class UserEventHandler implements IBinlogEventHandler&#x3C;User> {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onInsert(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("插入数据：" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onUpdate(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("修改数据:" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onDelete(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("删除数据:" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂监听" tabindex="-1"><a class="header-anchor" href="#复杂监听"><span>复杂监听</span></a></h2>
<p>@BinlogSubscriber 注解 database 与 table 属性支持 Pattern 匹配, IBinlogEventHandler 在不指定泛型的情况下, event.getData() 为 Map&lt;String, Object&gt; 类型, 用于兼容不同表的数据结构。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@BinlogSubscriber(clientName = "master", database = "pear-admin", table ="sys_user")</span></span>
<span class="line"><span>public class UserEventHandler implements IBinlogEventHandler&#x3C;User> {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onInsert(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("插入数据：" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onUpdate(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("修改数据:" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onDelete(BinlogEvent&#x3C;User> event) {</span></span>
<span class="line"><span>        System.out.println("删除数据:" + event.getData());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接"><span>相关链接</span></a></h2>
<p>Gitee: https://gitee.com/dromara/binlog4j</p>
</div></template>


