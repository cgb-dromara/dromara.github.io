<template><div><h2 id="sms4j-2-0-全新来袭" tabindex="-1"><a class="header-anchor" href="#sms4j-2-0-全新来袭"><span>sms4j 2.0 全新来袭</span></a></h2>
<p>即 sms-aggregation 成功加入 dromara 之后，很多人向我们反应了项目名称太长不好记，也太绕口， 在经过了有奖名称征集之后，我们定名为 sms4j 并伴随着大版本更新一同发布。这次更新不仅仅改变了项目名称，启用了新的 logo，还调整了项目结构，加入了更多新特性，下面我们一起来简单的看一下吧！</p>
<figure><img src="/assets/img/news/sms4j-cover.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h2 id="首先是-maven-的变化" tabindex="-1"><a class="header-anchor" href="#首先是-maven-的变化"><span>首先是 maven 的变化</span></a></h2>
<p>老版本中，groupId 为作者的个人网站，同时也是项目的官网，在新的版本中统一改为了 Dromara 的地址</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>     &#x3C;groupId>org.dromara.sms4j&#x3C;/groupId></span></span>
<span class="line"><span>     &#x3C;artifactId>sms4j-spring-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>     &#x3C;version> 最新版本请查看gitee或官网 &#x3C;/version></span></span>
<span class="line"><span> &#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其次是功能的调整" tabindex="-1"><a class="header-anchor" href="#其次是功能的调整"><span>其次是功能的调整</span></a></h2>
<p>在 1.X 版本中，（前名称 sms-aggregatio）只支持单家运营商的使用，不能同时使用多家厂商，对于厂商的切换也只能依靠配置文件的改变，可以说是功能及其单一，但是在新版本中，添加了多厂商支持和并用，同时配置方式也发生了变化</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>sms:</span></span>
<span class="line"><span>    alibaba:</span></span>
<span class="line"><span>      #阿里云的accessKey</span></span>
<span class="line"><span>      accessKeyId: 您的accessKey</span></span>
<span class="line"><span>      #阿里云的accessKeySecret</span></span>
<span class="line"><span>      accessKeySecret: 您的accessKeySecret</span></span>
<span class="line"><span>      #短信签名</span></span>
<span class="line"><span>      signature: 测试签名</span></span>
<span class="line"><span>      #模板ID 用于发送固定模板短信使用</span></span>
<span class="line"><span>      templateId: SMS_215125134</span></span>
<span class="line"><span>      #模板变量 上述模板的变量</span></span>
<span class="line"><span>      templateName: code</span></span>
<span class="line"><span>      #请求地址 默认为dysmsapi.aliyuncs.com 如无特殊改变可以不用设置</span></span>
<span class="line"><span>      requestUrl: dysmsapi.aliyuncs.com</span></span>
<span class="line"><span>    huawei:</span></span>
<span class="line"><span>      #华为短信appKey</span></span>
<span class="line"><span>      appKey: 5N6fvXXXX920HaWhVXXXXXX7fYa</span></span>
<span class="line"><span>      #华为短信appSecret</span></span>
<span class="line"><span>      app-secret: Wujt7EYzZTBXXXXXXEhSP6XXXX</span></span>
<span class="line"><span>      #短信签名</span></span>
<span class="line"><span>      signature: 华为短信测试</span></span>
<span class="line"><span>      #通道号</span></span>
<span class="line"><span>      sender: 8823040504797</span></span>
<span class="line"><span>      #模板ID 如果使用自定义模板发送方法可不设定</span></span>
<span class="line"><span>      template-id: acXXXXXXXXc274b2a8263479b954c1ab5</span></span>
<span class="line"><span>      #华为回调地址，如不需要可不设置或为空</span></span>
<span class="line"><span>      statusCallBack:</span></span>
<span class="line"><span>       #华为分配的app请求地址</span></span>
<span class="line"><span>      url: https://XXXXX.cn-north-4.XXXXXXXX.com:443</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping("/test/")</span></span>
<span class="line"><span>public class DemoController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 测试发送固定模板短信</span></span>
<span class="line"><span>   @RequestMapping("/")</span></span>
<span class="line"><span>   public void doLogin(String username, String password) {</span></span>
<span class="line"><span>        //阿里云向此手机号发送短信</span></span>
<span class="line"><span>       SmsFactory.createSmsBlend(SupplierType.ALIBABA).sendMessage("18888888888","123456");</span></span>
<span class="line"><span>       //华为短信向此手机号发送短信</span></span>
<span class="line"><span>       SmsFactory.createSmsBlend(SupplierType.HUAWEI).sendMessage("16666666666","000000");</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上仅仅只是示例，在实际的实用中可以同时支持更多的厂商。</p>
<h2 id="其他的方面" tabindex="-1"><a class="header-anchor" href="#其他的方面"><span>其他的方面</span></a></h2>
<p>sms4j 还添加了数据库配置的支持，开发者可以通过在数据库添加配置来替代配置文件，做到动态切换厂商</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>sms:</span></span>
<span class="line"><span>  # 告诉框架要读取的厂商配置来源，此处为枚举形式</span></span>
<span class="line"><span>  config-type: sql_config</span></span>
<span class="line"><span>  sql:</span></span>
<span class="line"><span>    # JDBC驱动</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>    # 要链接的数据库名称</span></span>
<span class="line"><span>    database-name: dev</span></span>
<span class="line"><span>    # 连接字符串</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306</span></span>
<span class="line"><span>    # 数据库账号</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    # 数据库密码</span></span>
<span class="line"><span>    password: 123456</span></span>
<span class="line"><span>    # 配置所在表名</span></span>
<span class="line"><span>    table-name: config_info</span></span>
<span class="line"><span>    # 厂商名称存储字段</span></span>
<span class="line"><span>    supplier-field-name: user_name</span></span>
<span class="line"><span>    # 配置所在字段</span></span>
<span class="line"><span>    config-name: pay_psw</span></span>
<span class="line"><span>    # 配置启用标识字段</span></span>
<span class="line"><span>    start-name: state</span></span>
<span class="line"><span>    # 配置启用值  此处意思为 当字段state值为1时，则启用这个配置</span></span>
<span class="line"><span>    is-start: 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的新特性和功能不在这里一 一介绍了，具体的可以查看官方文档或者 gitee 仓库</p>
<p><strong>官方文档</strong> <strong>https://wind.kim/</strong></p>
<p><strong>gitee 仓库</strong> <strong>https://gitee.com/dromara/sms4j</strong></p>
<p><strong>您的支持是我们前进的动力，如果我们的项目对您产生了帮助或者您觉得还不错，请为我们点上一颗 star</strong></p>
</div></template>


