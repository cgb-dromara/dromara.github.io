---
title: Forest v1.7 发布！前方高能，一大波新特性来袭！
author: Forest
date: 2025-07-01
cover: /assets/img/news/Forest-v1.7-0.png
head:
  - - meta
    - name: 新闻
---

##   

![](/assets/img/news/Forest-v1.7-0.png)

## Forest介绍

Forest 是一个开源的 Java HTTP 客户端框架，它能够将 HTTP 的所有请求信息（包括 URL、Header 以及 Body 等信息）绑定到您自定义的 Interface 方法上，能够通过调用本地接口方法的方式发送 HTTP 请求

### 简单的栗子

*   **声明式接口**
    

创建一个 interface，并用`@Get`注解修饰接口方法。

```
public interface MyClient {
    @Get("http://localhost:8080/hello")
    String hello();
}
```

通过`@Get`注解，将上面的 MyClient 接口中的`simpleRequest()`方法绑定了一个 HTTP 请求， 其 URL 为`http://localhost:8080/hello`，并默认使用 GET 方式，且将请求响应的数据以 String 的方式返回给调用者

*   **编程式接口**
    

```
Forest.get("http://localhost:8080/hello").execute();
```

编程式接口则更为简单直接

## v1.7 版本升级

本次发布包含了很多重大更新内容，我们对字符串模板的语法进行了增强，支持了空安全语法和深度变量引用，并提供了更友好的报错信息；在Cookie方面也进行了增强，提供了Cookie自动保存和读取的机制，并添加了更完善的API接口；我们也对拦截器进行了优化改进，不再建议直接使用`Interceptor`接口和它的`onSuccess`方法，取而代之的是`ForestInterceptor`和`onResponse`方法，它们要比前者更安全，性能也更好；除此之外，此次更新对请求的性能进行了全面的优化，在默认使用编程式接口、不打印日志的情况下，可以达到和 hutool 的 HttpUtil 差不多的耗时。

## v1.7 新增的一大波特性

*   空安全语法
    
*   Elvis 表达式
    
*   深度引用
    
*   嵌套字符串模板
    
*   更安全的拦截器
    
*   请求级别日志开关
    

#### 空安全语法

在原来版本，如果在字符串模板中引用一个没定义过的变量会支持报错。现在用空安全语法可以让它不再报错，而是直接返回 null 值。

```
// 没定义过 testVar 变量，通过 ? 一样可以正常引用
Forest.get("/test/{testVar?}");
```

或者，引用了一个不存在或值为 null 的变量后，再用点`.`访问它的属性，这在老版本中自然是直接报错的。现在，可以通过`?.`符号自动判断是否为空。

```
// 会先判断 testVar 是否为空，然后 testVar.a 是否为空，其中一个为空就会直接返回 null
// 不会报错
Forest.get("/test/{testVar?.a?.name}");
```

#### Elvis 表达式

新版本支持使用 Elvis 操作符`??`，也称为是空值合并操作符。简单来说就是在一个变量或一个表达式后面追加两个问号(`??`)，并在它的右边再跟上一个表达式作为左边变量或表达式为空的情况下所返回的默认值。

```
// 如果变量 a 为空或未定义，则返回字符串 ok
// 最后 URL 为 http://localhost:8080/ok
// 若变量 a 不为空，则返回它自己的值
Forest.get("http://localhost:8080/{a ?? 'ok'}")
```

Elvis 表达式也可以和空安全属性访问操作符`?.`相结合

```
// 如果变量 a 为空或未定义，则返回字符串 ok，不会再继续读取 a.b 
// 最后 URL 为 http://localhost:8080/ok
Forest.get("http://localhost:8080/{a?.b ?? 'ok'}")
```

#### 深度引用

在原来版本中，字符串模板中的变量只能引用到第一层，如果该变量的值是引用其他的变量，字符串模板并不会进行解析。而现在，不管引用了多少层变量，都可以解析到底。

```
forest:
  variables:
    var1: "{user.name}"
    var2: "{user.password}"
    user:
      name: foo
      password: bar
```

在Java代码中直接引用

```
// 最终 URL 为: /test/foo/bar
Forest.get("/test/{var1}/{var2}");
```

如果不想进行深度引用，可以使用深度引用停止语法，即在变量后加上`!`符号，那么就只会引用一层该变量的值，至于该变量的值是否会包含其他字符串模板的内容，就不会再进行解析了。

```
// 最终 URL 为: /test/{user.name}/{user.password}
// 变量 var1 和 var2 的值直接返回字符串，而不会进行任何解析
Forest.get("/test/{var1!}/{var2!}");
```

#### 嵌套字符串模板

用两个反引号`` ` ``将要拼接的字符串内容包裹起来(如 `` `字符串模板内容` ``)，并且当中可以使用`` `#{配置属性}` ``、`` `${表达式}` ``、`` `{表达式}` ``等嵌套表达式语法

```
// 如果 a 为空，则返回 b 和 c 用斜杠拼接后的字符串
// 若 a 为空, b 为 foo，c 为 bar，则 URL 为 /foo/bar
Forest.get("/{a ?? `{b}/{c}`}")

// 任何一种形态内容都可以，可以理解为就是一种字符串，一种在表达式内部可动态拼接的字符串
Forest.get("/{a ?? `?b={b}&c={c}`}")

```

#### 更安全的拦截器

本次版本更新后，不再建议使用`Interceptor`(当然要用也可以用，不影响以前的老代码)，同时引入了更安全的`ForestInterceptor`接口

```
public class MyInterceptor implements ForestInterceptor {


    @Override
    public ResponseResult onResponse(ForestRequest request, ForestResponse response) {
        if (response.isError()) {
            // 返回错误标志
            return error(response.getException());
        }
        // 通过 response.getResult() 或 response.get(数据类型.class) 来获取响应数据

        // 返回继续执行标志
        return proceed();
    }
}

```

#### 请求级别日志开关

不再需要 new 一个 LogConfiguration 对象，直接在 ForestRequest 的链式调用中即可设置日志开关

```
Forest.post("/test")
        .logEnabled(true) // 请求日志总开关
        .logRequest(true) // 请求内容日志开关
        .logRequestHeaders(true) // 请求头日志开关
        .logRequestBody(true)  // 请求体日志开源
        .logResponseStatus(true) // 响应状态日志开关
        .logResponseHeaders(true) // 响应头日志开关
        .logResponseContent(false) // 响应体内容日志开关
        .execute();
```

## 官网和仓库地址

> #### 官网地址:
> 
> http://forest.dtflyx.com
> 
> #### Gitee 仓库地址:
> 
> https://gitee.com/dromara/forest
> 
> #### Github 仓库地址:
> 
> https://github.com/dromara/forest

## 本次更新内容

*   feat: 字符串模板支持空安全语法
    
*   feat: 更友好的字符串模板错误消息
    
*   feat: 字符串模板`{`、`${`等符号支持转义`\\{`、`\\${`
    
*   feat: 字符串模板支持深度变量引用
    
*   feat: 字符串模板支持停止深度引用的语法
    
*   feat: 支持嵌套字符串模板
    
*   feat: 新增更安全的 Forest 拦截器接口 ForestInterceptor
    
*   feat: 通过配置自定义异步线程池拒绝策略
    
*   feat: 支持Bear 认证器
    
*   feat: 支持`@Var`作为方法和类的变量绑定注解
    
*   feat: 新增 ForestRequest 级别的日志开关接口
    
*   feat: 增强 Cookie 相关 API 接口
    
*   feat: 后台自动清理过期 Cookie
    
*   feat: 支持 Cookie 自动化存取机制
    
*   fix: 和老版本forest冲突时，新版本Forest类缺乏get(url)、post(url)等方法签名，造成错误 (#IC7LIH)
    
*   fix: body log在部分环境中文乱码
    
*   fix: 修改接口中常量的命名，避免用户在其与只有大小写区别的方法之间产生混淆
    
*   fix: 调用声名式接口的 hashCode() 方法会死循环
    
*   fix: 以 ForestResponse 为返回类型时，T 的子类匹配问题
    
*   fix: 重复读取响应流时报错
    
*   fix: 嵌套json字符串无法正常解析
    
*   refactor: 重构URL解析过程
    
*   refactor: 重构变量作用域
    
*   refactor: 重构 Forest 变量体系
    
*   refactor: ForestCookie 不再依赖 OkHttp
    
*   refactor: ForestCookie.parse() 接口
    
*   refactor: 添加键值对类型请求体删除接口 ForestBody.removeNameValueBody
    
*   optimize: 优化请求性能
    
*   optimize: 根据 Response 类型动态判断响应是否自动关闭
    
*   optimize: 默认后端改为 httpclient
    
*   optimize: 拦截器优化