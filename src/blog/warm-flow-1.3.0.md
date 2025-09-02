---
title: A Workflow Engine with Built-in Process Designer
author: warm-flow
date: 2024-10-23
cover: /assets/img/blog/warm-flow-1.3.0-0.png
head:
  - - meta
    - name: Blog
---

# A Workflow Engine with a Built-in Process Designer

**Finally, the exciting version 1.3.0 is here! No more烦恼 (hassles) with integrating a designer. Follow the first four points below to quickly integrate it into your business system. Here’s how to use the designer:**

## 1. Add Dependency

```xml
<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-plugin-ui-sb-web</artifactId>
    <version>1.3.0</version>
</dependency>
```

## 2. Backend Path Permissions

> 1.  These two paths need to be permitted, otherwise access will be denied: `/warm-flow-ui/**`, `/warm-flow/**`
> 2.  The following is an example configuration for Spring Security:

```java
@Bean
protected SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception
{
    return httpSecurity
            .......
            // Annotate URLs allowed for anonymous access
            .authorizeHttpRequests((requests) -> {
                // Backend requests, static resources, accessible anonymously
                requests.antMatchers("/warm-flow-ui/**", "/warm-flow/**").permitAll()
                        // All requests other than the above require authentication
                        .anyRequest().authenticated();
            })
            ......
            .build();
}
```

## 3. Frontend Loads the Designer

> 1.  The designer page entry address is: `/warm-flow-ui/${definitionId}?disabled=${disabled}`
> 2.  The general idea is to proxy the frontend interface (e.g., port 80) to the backend interface (e.g., port 8080) to access this address; everything else remains the same.
> 3.  Alternatively, access this address directly through the backend interface, which might require handling CORS issues.
> 4.  The following is an Nginx proxy example:

```nginx
server {
    listen       80;
    server_name  localhost;

    location /warm-flow-ui/ {
        proxy_pass http://localhost:8080/warm-flow-ui/;
    }
}
```

## 4. Integrate Handler Permission Data for the Designer

> [!IMPORTANT] Implement an interface to provide the designer with data on which users have permissions to handle tasks set on task nodes.

### 4.1 Handler Permission Selection Modal

![](/assets/img/blog/warm-flow-1.3.0-0.png)

### 4.2 Implement the Interface to Fetch Handler Permission Data for the Above Page

#### 4.2.1 HandlerSelectService Interface

```java
/**
 * Process Designer - Interface for obtaining handler permission setting list
 *
 * @author warm
 */
public interface HandlerSelectService {

    /**
     * Get the list of tabs for handler permission settings, e.g., User, Role, Department, etc.
     * @return List of tab names
     */
    List<String> getHandlerType();

    /**
     * Get the result list for handler permission settings, e.g., user list, role list, department list, etc.
     * @param query Query parameters
     * @return Result list
     */
    List<HandlerSelectVo> getHandlerSelect(HandlerQuery query);
}
```

## 5. Project Introduction

> [!IMPORTANT] Warm-Flow is a domestic (Chinese) workflow engine 🎉. Its characteristics are simplicity, lightweight, feature-completeness, and extensibility. It is a workflow engine that can integrate a designer via JAR inclusion.

1.  Simple and Easy to Use: Only 7 tables, less code, quick to learn and integrate.
2.  Approval Functions: Support for Approve, Return, Arbitrary Jump, Transfer, Terminate, Countersign, Vote Sign, Delegate, Add/Sign, Mutex and Parallel Gateways.
3.  Listeners and Process Variables: Supports four types of listeners to handle different scenarios, flexible and extensible, parameter passing, dynamic permissions.
4.  Flowchart: The workflow engine comes with a flowchart and can be used without integrating a process designer.
5.  Process Designer: Can be quickly integrated into projects via JAR package, reducing tedious code copying and adaptation.
6.  Conditional Expressions: Built-in common and SpEL conditional expressions, and supports custom extensions.
7.  Handler Variable Expressions: Built-in expressions in `${handler}` and SpEL formats, meeting different scenarios, flexible and extensible.
8.  ORM Framework Extension: Currently supports MyBatis, Mybatis-Plus, Mybatis-Flex, and Jpa. Support for others will be provided by the community later; easy to extend.
9.  Database Support: Currently supports MySQL, Oracle, and PostgreSQL. Support for other databases or domestic databases will be added later.
10.  Multi-tenancy and Soft Delete: The workflow engine itself maintains implementations for multi-tenancy and soft delete, or you can use the implementation method of the corresponding ORM framework.
11.  Supports both Spring and Solon.
12.  Compatible with Java 8 and Java 17 (theoretically Java 11 should work too).
13.  Official practical project based on Ruoyi-Vue encapsulation provided.

## 6. Demo Address

*   admin / admin123

Demo: http://www.hhzai.top

## 7. Official Website

http://warm-flow.cn

---

About Dromara

Dromara is an open-source community composed of top open-source project authors in China. It provides a range of open-source products, solutions, consulting, technical support, and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, distributed logs, and scheduling orchestration. The technology stack is fully open-source and collaboratively built, maintaining community neutrality, and is dedicated to providing microservices cloud-native solutions for global users. It aims to allow every participating open-source enthusiast to experience the joy of open-source.

The Dromara open-source community currently boasts over 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open-source community of tens of thousands of members, with thousands of individuals and teams using Dromara's open-source projects.

**Welcome to the Knowledge Planet to interact with me**

![](/assets/img/blog/warm-flow-1.3.0-1.webp)