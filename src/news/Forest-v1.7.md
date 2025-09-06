---
title: Forest v1.7 Released! High Energy Ahead, A Wave of New Features is Coming!
author: Forest
date: 2025-07-01
cover: /assets/img/news/Forest-v1.7-0.png
head:
  - - meta
    - name: News
---

##   

![](/assets/img/news/Forest-v1.7-0.png)

## Introduction to Forest

Forest is an open-source Java HTTP client framework. It can bind all the information of an HTTP request (including URL, Header, Body, etc.) to your custom interface methods, allowing you to send HTTP requests by calling local interface methods.

### A Simple Example

*   **Declarative Interface**


Create an interface and annotate the interface method with `@Get`.

```java
public interface MyClient {
    @Get("http://localhost:8080/hello")
    String hello();
}
```

Through the `@Get` annotation, the `simpleRequest()` method in the MyClient interface above is bound to an HTTP request. Its URL is `http://localhost:8080/hello`, it uses the GET method by default, and returns the response data as a String to the caller.

*   **Programmatic Interface**


```java
Forest.get("http://localhost:8080/hello").execute();
```

The programmatic interface is more straightforward and simple.

## v1.7 Version Upgrade

This release includes many significant updates. We have enhanced the string template syntax, supporting null-safe syntax and deep variable references, and provided more user-friendly error messages. Enhancements have also been made to Cookies, providing a mechanism for automatic Cookie saving and reading, along with more comprehensive API interfaces. We have also optimized and improved interceptors; directly using the `Interceptor` interface and its `onSuccess` method is no longer recommended. Instead, `ForestInterceptor` and the `onResponse` method are provided, which are safer and offer better performance than the former. Additionally, this update includes comprehensive optimizations to request performance. When using the programmatic interface by default and not printing logs, the time consumption can be similar to that of hutool's HttpUtil.

## A Wave of New Features in v1.7

*   Null-safe syntax
*   Elvis expressions
*   Deep references
*   Nested string templates
*   Safer interceptors
*   Request-level log switch

#### Null-safe Syntax

In previous versions, referencing an undefined variable in a string template would result in an error. Now, with null-safe syntax, it will no longer throw an error but directly return a null value.

```java
// The testVar variable was never defined, but it can be referenced normally using ?
Forest.get("/test/{testVar?}");
```

Alternatively, if you reference a variable that doesn't exist or is null and then try to access its properties with a dot `.`, it would directly throw an error in older versions. Now, you can use the `?.` symbol to automatically check for null.

```java
// It will first check if testVar is null, then if testVar.a is null. If any is null, it directly returns null.
// No error will be thrown.
Forest.get("/test/{testVar?.a?.name}");
```

#### Elvis Expressions

The new version supports the Elvis operator `??`, also known as the null coalescing operator. Simply put, you append two question marks (`??`) after a variable or an expression, and follow it with another expression on the right, which serves as the default value returned if the left-side variable or expression is null.

```java
// If variable a is null or undefined, return the string 'ok'
// The final URL will be http://localhost:8080/ok
// If variable a is not null, return its own value
Forest.get("http://localhost:8080/{a ?? 'ok'}")
```

Elvis expressions can also be combined with the null-safe property access operator `?.`.

```java
// If variable a is null or undefined, return the string 'ok', and it won't continue to read a.b
// The final URL will be http://localhost:8080/ok
Forest.get("http://localhost:8080/{a?.b ?? 'ok'}")
```

#### Deep References

In previous versions, variables in string templates could only reference the first layer. If the value of that variable referenced other variables, the string template would not parse them. Now, no matter how many layers of variables are referenced, they can be parsed to the bottom.

```yaml
forest:
  variables:
    var1: "{user.name}"
    var2: "{user.password}"
    user:
      name: foo
      password: bar
```

Reference directly in Java code:

```java
// Final URL is: /test/foo/bar
Forest.get("/test/{var1}/{var2}");
```

If you don't want deep references, you can use the deep reference stop syntax by adding a `!` symbol after the variable. Then it will only reference the value of that variable for one layer. Whether the value of that variable contains content from other string templates will not be parsed further.

```java
// Final URL is: /test/{user.name}/{user.password}
// The values of variables var1 and var2 are returned directly as strings, without any parsing.
Forest.get("/test/{var1!}/{var2!}");
```

#### Nested String Templates

Use two backticks `` ` `` to wrap the string content to be concatenated (like `` `string template content` ``), and you can use nested expression syntax such as `` `#{config property}` ``, `` `${expression}` ``, `` `{expression}` `` inside.

```java
// If a is null, return the string spliced with b and c separated by a slash
// If a is null, b is foo, c is bar, then the URL is /foo/bar
Forest.get("/{a ?? `{b}/{c}`}")

// Any form of content is acceptable. It can be understood as a string, a dynamically concatenable string inside an expression.
Forest.get("/{a ?? `?b={b}&c={c}`}")
```

#### Safer Interceptors

After this version update, using `Interceptor` is no longer recommended (though it can still be used, it won't affect old code), and the safer `ForestInterceptor` interface is introduced.

```java
public class MyInterceptor implements ForestInterceptor {

    @Override
    public ResponseResult onResponse(ForestRequest request, ForestResponse response) {
        if (response.isError()) {
            // Return error flag
            return error(response.getException());
        }
        // Use response.getResult() or response.get(Data Type.class) to get the response data

        // Return continue execution flag
        return proceed();
    }
}
```

#### Request-Level Log Switch

No longer need to create a new LogConfiguration object. The log switch can be set directly in the chain call of ForestRequest.

```java
Forest.post("/test")
        .logEnabled(true)  // Master switch for request logging
        .logRequest(true)  // Request content log switch
        .logRequestHeaders(true)  // Request headers log switch
        .logRequestBody(true)   // Request body log switch
        .logResponseStatus(true)  // Response status log switch
        .logResponseHeaders(true)  // Response headers log switch
        .logResponseContent(false)  // Response body content log switch
        .execute();
```

## Official Website and Repository Addresses

> #### Official Website:
>
> http://forest.dtflyx.com
>
> #### Gitee Repository:
>
> https://gitee.com/dromara/forest
>
> #### Github Repository:
>
> https://github.com/dromara/forest

## This Update's Content

*   feat: String templates support null-safe syntax
*   feat: More user-friendly string template error messages
*   feat: String template `{`, `${`, etc., symbols support escaping `\\{`, `\\${`
*   feat: String templates support deep variable references
*   feat: String templates support syntax to stop deep references
*   feat: Support for nested string templates
*   feat: Added the safer Forest interceptor interface ForestInterceptor
*   feat: Configure custom async thread pool rejection policy
*   feat: Support Bear authenticator
*   feat: Support `@Var` as a variable binding annotation for methods and classes
*   feat: Added ForestRequest-level log switch interface
*   feat: Enhanced Cookie-related API interfaces
*   feat: Background automatic cleanup of expired Cookies
*   feat: Support automatic Cookie storage and retrieval mechanism
*   fix: Conflict with older forest versions, new version Forest class lacks method signatures like get(url), post(url), causing errors (#IC7LIH)
*   fix: Body log Chinese garbled characters in some environments
*   fix: Modified constant names in interfaces to avoid user confusion between them and methods that only differ in case
*   fix: Calling the hashCode() method on a declarative interface causes an infinite loop
*   fix: Issue with subclass matching when using ForestResponse as the return type
*   fix: Error when reading the response stream repeatedly
*   fix: Nested JSON strings cannot be parsed correctly
*   refactor: Refactored URL parsing process
*   refactor: Refactored variable scope
*   refactor: Refactored Forest variable system
*   refactor: ForestCookie no longer depends on OkHttp
*   refactor: ForestCookie.parse() interface
*   refactor: Added key-value pair type request body deletion interface ForestBody.removeNameValueBody
*   optimize: Optimized request performance
*   optimize: Dynamically determine if the response closes automatically based on the Response type
*   optimize: Default backend changed to httpclient
*   optimize: Interceptor optimization