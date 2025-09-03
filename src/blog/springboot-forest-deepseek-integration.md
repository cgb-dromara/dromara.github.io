---
title: How to Use Forest to Easily and Quickly Integrate DeepSeek in a SpringBoot Project
author: March 7, 2025 09:58
date: 2025-03-07
cover: /assets/img/blog/springboot-forest-deepseek-integration-0.png
head:
  - - meta
    - name: Blog
---

## 1. Environment Requirements

*   JDK 8 / 17
*   SpringBoot 2.x / 3.x
*   Forest 1.6.4+
*   Fastjson2

### Dependency Configuration

In addition to basic frameworks like SpringBoot and Lombok, add dependencies for Forest and Fastjson2.

```xml
<!-- Forest Framework -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring-boot-starter</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- Fastjson2 -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>2.0.53</version>
</dependency>
```

## 2. Apply for a DeepSeek API Key

Visit the DeepSeek website and navigate to the API Key management page (https://platform.deepseek.com/api_keys) to find your API Key.

If you don't have a KEY yet, click the `Create API Key` button at the bottom of the page.

![](/assets/img/blog/springboot-forest-deepseek-integration-0.png)
API Keys Page

After creation, a dialog will pop up displaying your newly generated API Key string. Copy and save it to a secure location immediately.

## 3. Configure the Project

Open the SpringBoot configuration file `application.yml` and add the following code:

```yaml
# Forest Framework Configuration
forest:
  connect-timeout: 10000      # Request connection timeout (ms)
  read-timeout: 3600000       # Request data read timeout (ms), longer is better
  variables:
    apiKey: YOUR_API_KEY      # Replace with your obtained API Key
    model: deepseek-reasoner  # Model supported by DeepSeek, the R1 model
```

## 4. Create a Declarative Interface

Forest supports sending HTTP requests declaratively. The following code defines the DeepSeek API request as a declarative interface.

```java
public interface DeepSeek {
    
    @Post(
            url = "https://api.deepseek.com/chat/completions",
            contentType = "application/json",
            headers = "Authorization: Bearer {apiKey}",
            data = "{\"messages\":[{\"content\":\"{content}\",\"role\":\"user\"}],\"model\":\"{model}\",\"stream\":true}")
    ForestSSE completions(@Var("content") String content);
}
```

The meaning of the above code is clear: calling this interface method will send a `POST` request to the URL https://api.deepseek.com/chat/completions.

Here, `{apiKey}` and `{model}` read the `apiKey` and `model` fields from the configuration file, while `{content}` reads the parameter modified by the `@Var("content")` annotation. The request body data is the JSON string provided in the official documentation, and the desired parameters are concatenated using string template placeholders like `{variable name}`.

The return type of the interface method is `ForestSSE`, a built-in type provided by the Forest framework primarily used to receive and process SSE (Server-Sent Events) stream messages.

## 5. Call the Interface

After creating the declarative interface, you can inject an instance of this interface into the startup class using Spring's `@Resource` annotation. The Forest framework will use the dynamic proxy pattern to automatically generate the corresponding interface proxy class instance and inject it into the class where you need to make the call.

```java
@Resource
private DeepSeek deepSeek;
```

You can then call the interface to send the request and set a Lambda expression to receive and process the returned SSE stream event messages.

```java
@SpringBootApplication
public class DeepSeekExampleApplication implements CommandLineRunner {

    // DeepSeek declarative interface
    @Resource
    private DeepSeek deepSeek; 

    @Override
    public void run(String... args) {
        // Call the declarative interface method
        deepSeek.completions("Hello, who are you?")
                .setOnMessage(event -> {
                    // Receive and process SSE events
                    try {
                        // Get the message data and deserialize it into the DeepSeekResult class
                        DeepSeekResult result = event.value(DeepSeekResult.class);
                        // Print the message content from the DeepSeekResult object
                        System.out.print(result.content());
                    } catch (Exception e) {
                    }
                })
                .listen(SSELinesMode.SINGLE_LINE); // Listen for SSE and set to single-line message mode
    }

    public static void main(String[] args) {
        try {
            SpringApplication.run(DeepSeekExampleApplication.class, args);
        } catch (Throwable th) {
            th.printStackTrace();
        }
    }
}
```

Here, `DeepSeekResult` is a data class defined according to the returned message format. The specific code is as follows:

```java
@Data
public class DeepSeekResult {

    private String id;

    private String object;

    private Integer created;

    private String model;

    @JSONField(name = "system_fingerprint")
    private String systemFingerprint;

    private List<JSONObject> choices;

    // Get the choices[0].delta.content from the message
    public String content() {
        List<JSONObject> choices = getChoices();
        if (CollectionUtil.isNotEmpty(choices)) {
            JSONObject chooseJson = choices.get(0);
            DeepSeekResultChoice choice = chooseJson.toJavaObject(DeepSeekResultChoice.class);
            return choice.getDelta().getContent();
        }
        return "";
    }
}
```

Other data classes, including `DeepSeekResultChoice`, are similar. The specific code can be found in the code repository address provided at the end of the article.

## 6. Response Test

After writing the calling method, we can run the code and see the results. After clicking Run, you can see the console log printing the following content:

![](/assets/img/blog/springboot-forest-deepseek-integration-1.png)
Test Log

The upper part of the log, such as `POST https://api.deepseek.com/chat/completions HTTPS [SSE]`, is the Forest request log, which tells you the data and parameters in the outgoing HTTP request.

The lower part, "Hello! I am an intelligent assistant developed by China's DeepSeek company, DeepSeek-R1..." is naturally DeepSeek's response.

## 7. Chain of Thought

The above code example only returns DeepSeek's answer content, not its thinking process, even if the model is `DeepSeek-R1`. To print the chain of thought, the code needs to be modified.

First, modify the `content()` method in the `DeepSeekResult` class.

```java
@Data
public class DeepSeekResult {

    private String id;

    private String object;

    private Integer created;

    private String model;

    @JSONField(name = "system_fingerprint")
    private String systemFingerprint;

    private List<JSONObject> choices;

    // Get the choices[0].delta.reasoning_content
    // or choices[0].delta.content from the message
    // Identify if it's reasoning content via the DeepSeekContent.isReasoning flag
    public DeepSeekContent content() {
        List<JSONObject> choices = getChoices();
        if (CollectionUtil.isNotEmpty(choices)) {
            JSONObject chooseJson = choices.get(0);
            DeepSeekResultChoice choice = chooseJson.toJavaObject(DeepSeekResultChoice.class);
            String reasoningContent = choice.getDelta().getReasoningContent();
            // Check if reasoningContent exists. If it does, it's chain of thought content; otherwise, it's the pure answer content.
            if (StringUtils.isNotEmpty(reasoningContent)) {
                return new DeepSeekContent(true, reasoningContent);
            }
            return new DeepSeekContent(false, choice.getDelta().getContent());
        }
        return new DeepSeekContent();
    }
}
```

Add the `DeepSeekContent` class.

```java
@Data
public class DeepSeekContent {
    // Whether it is reasoning process content
    private boolean reasoning = false;
    // The specific content of DeepSeek's response
    private String content = "";

    public DeepSeekContent() {
    }

    public DeepSeekContent(boolean reasoning, String content) {
        this.reasoning = reasoning;
        this.content = content;
    }
}
```

Finally, modify the interface calling part.

```java
@SpringBootApplication
public class DeepSeekExampleApplication implements CommandLineRunner {

    // DeepSeek declarative interface
    @Resource
    private DeepSeek deepSeek; 

    @Override
    public void run(String... args) {
        // Flag: whether it is the first time receiving reasoning content
        AtomicBoolean isFirstReasoning = new AtomicBoolean(false);
        // Call the declarative interface method
        deepSeek.completions("What is 1+1?")
                .setOnMessage(event -> {
                    try {
                        DeepSeekResult result = event.value(DeepSeekResult.class);
                        DeepSeekContent content = result.content();
                        // Use CAS to check if it's the first time receiving reasoning content
                        // If yes, print the <Chain of Thought> tag
                        if (content.isReasoning() && isFirstReasoning.compareAndSet(false, true)) {
                            System.out.println("<Chain of Thought>");
                            System.out.print(content.getContent());
                        } else if (!content.isReasoning() && isFirstReasoning.compareAndSet(true, false)) {
                            // When isFirstReasoning changes from true to false
                            // it indicates the message is switching from reasoning content to the formal answer content
                            System.out.print(content.getContent());
                            System.out.println("\n</Chain of Thought>\n");
                        } else {
                            // Print normal reasoning or formal answer content
                            System.out.print(Opt.ofBlankAble(content.getContent()).orElse(""));
                        }
                    } catch (Exception e) {
                    }
                })
                .listen(SSELinesMode.SINGLE_LINE);
    }

    public static void main(String[] args) {
        try {
            SpringApplication.run(DeepSeekExampleApplication.class, args);
        } catch (Throwable th) {
            th.printStackTrace();
        }
    }
}
```

## 8. Chain of Thought Message Test

Now you can run the program to test whether the log contains the chain of thought process.

![](/assets/img/blog/springboot-forest-deepseek-integration-2.png)
Chain of Thought Log.png

From the log, it can be seen that the program ran normally. The part enclosed between the `<Chain of Thought>` and `</Chain of Thought>` tags is the thinking process explained by DeepSeek. The text after the `</Chain of Thought>` closing tag is its formal answer content.

## 9. Error Handling

The case in this article calls the official DeepSeek API. For reasons well known, network errors such as `401` are highly likely to occur when calling the interface.

To handle such requests, simply add an interceptor.

```java
// Forest's SSE request interceptor
public class DeepSeekInterceptor implements SSEInterceptor {

    // This method is automatically called when a request response is received
    @Override
    public ResponseResult onResponse(ForestRequest request, ForestResponse response) {
        // Check if the request encountered an error, such as 401, 404, etc.
        if (response.isError()) {
            // If there is an error, print "The server is busy, please try again later."
            System.out.println("The server is busy, please try again later.");
            return success();
        }
        return proceed();
    }
}
```

Then, bind the interceptor to the interface.

```java
// Bind the interceptor to the entire interface
@BaseRequest(interceptor = DeepSeekInterceptor.class)
public interface DeepSeek {
    
    @Post(
            url = "https://api.deepseek.com/chat/completions",
            contentType = "application/json",
            headers = "Authorization: Bearer {apiKey}",
            data = "{\"messages\":[{\"content\":\"{content}\",\"role\":\"user\"}],\"model\":\"{model}\",\"stream\":true}")
    ForestSSE completions(@Var("content") String content);
}
```

## 10. Summary

As can be seen, using Forest's declarative approach to integrate with the DeepSeek API offers many obvious advantages over OkHttp and HttpClient. Besides concise code and ease of implementation, the declarative code is naturally more decoupled. The code in this article naturally achieves decoupling between parameter configuration, HTTP request parameters, and the business logic of interface calls. If you need to change the API Key or model, simply modify the configuration file. If you need to change the HTTP URL or parameters, you can directly modify the declarative interface without affecting the business code that calls the interface. Moreover, it naturally allows unifying the HTTP code for the DeepSeek API into a single interface class for easy management, and the URL, headers, and request body parameters in the request are all clear at a glance.

**Code Repository Address**: https://gitee.com/dromara/forest/tree/master/forest-examples/example-deepseek