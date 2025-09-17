---
title: "Milvus × EasyAi: How to Build a Face Recognition Application from Scratch with Java"
author: December 26, 2024, 08:36
date: 2024-12-26
cover: /assets/img/blog/milvus-easyai-face-java-0.webp
head:
  - - meta
    - name: Blog
---

![](/assets/img/blog/milvus-easyai-face-java-0.webp)

![](/assets/img/blog/milvus-easyai-face-java-1.png)

**How to build a face recognition application from scratch? Try the combination of native Java artificial intelligence algorithms: EasyAi + Milvus**.

**The software and tools used in this article include**:

*   EasyAi: Face feature vector extraction
*   Milvus: Vector database for efficient storage and retrieval of data.

**01**.

**EasyAi: The Most Popular Java AI Algorithm Framework in China**

As a pure Java framework for developing AI applications, EasyAi has no dependencies. It is a native Java artificial intelligence algorithm framework. First, it can be seamlessly integrated into our Java project via Maven with one click, requiring no additional environment configuration or dependencies, making it ready to use out of the box. Furthermore, it includes pre-packaged modules for image target detection and AI customer service, as well as underlying algorithm tools for deep learning, machine learning, reinforcement learning, heuristic learning, matrix operations, derivative functions, partial derivative functions, and more. With minimal learning, developers can deeply customize micro-models that fit their business needs.

**02**.

**EasyAi-Face: A Face Recognition Application Based on Easy-Ai**

**1. Generate an average human face**: Scale all face samples to a uniform size, crop excess parts from the top and bottom, pad zeros where insufficient, sum all pixel channels, calculate the average, and output the average face.

**2. Use a pre-trained face localization fastYolo model** to locate faces in the target photo, setting a threshold so that only detections with confidence above this threshold are considered faces.

**3. Obtain the face bounding box with the highest confidence in the target photo** and perform a secondary correction on the face position based on this bounding box.

_Secondary correction solution:_

*   Use particle swarm optimization with four feature dimensions to seek the optimal solution: the x and y coordinates of the top-left corner of the face and the width and height. The adaptive function returns the value set to minimize for optimality. The activity range of the xy and width-height four-dimensional particles is adjusted, with upper and lower limits set to ±50 pixels around the coordinates and dimensions from the initial localization (adjustable).
*   The adaptation function calculation process involves cropping the face based on the coordinates locked by the four-dimensional particles, scaling it to a specified smaller size using the same scaling method as before, and converting their grayscale channels into probability distributions via softMax for the entire matrix.
*   Compare the Euclidean distance between the average face and the grayscale probability image of the face locked by the particles at this moment, and return it. Let the particles explore (within a specified number of iterations) for the minimum optimal solution.

**4. Extract facial features**: Obtain the optimal coordinates found by the particles, crop the image based on these coordinates, and take the top 70% of the height (discarding the mouth area, as it is less stable). Extract the LBP (Local Binary Pattern) texture features of the resulting image.

**03**.

**Building a Face Recognition Application with EasyAi-Face + Milvus**

**3.1 Extracting Facial Features**

**Add Dependency**
```xml
<dependency>  
    <groupId>org.dromara.easyai</groupId>  
    <artifactId>seeFace</artifactId>  
    <version>1.0.5</version>  
</dependency>
```
**Initialize Face**
```java
@Bean  
public Face face(FaceConfig faceConfig ){  
    if (StringUtils.isNotBlank(faceConfig.getAvgFace()) && StringUtils.isNotBlank(faceConfig.getFaceModel())){  
        return FaceFactory.getFace(faceConfig.getAvgFace(), faceConfig.getFaceModel());  
    }  
    return FaceFactory.getFace();  
}
```
**Extract Facial Features**
```java
private List<Float> getFloats(InputStream inputStream) {  
    ThreeChannelMatrix m = Picture.getThreeMatrix(inputStream, false);  
    ErrorMessage errorMessage = face.look(m, idWorker.nextId(), 30);  
    final Matrix feature = errorMessage.getFaceMessage().getFeature();  
    return MatrixUtil.matrixToFloatList(feature);  
}
```
**3.2 Store in Vector Database**
```java
public void initUserVector(UserDTO userDTO, List<Float> features) {  
    List<String> names = Collections.singletonList(userDTO.getUserName());  
    List<Long> userIds = Collections.singletonList(userDTO.getUserId());  
    List<String> getFaceUrl = Collections.singletonList(userDTO.getFaceUrl());  
    List<String> getFaceFeatureUrl = Collections.singletonList(userDTO.getFaceFeatureUrl());  
    List<List<Float>> vectors = Collections.singletonList(features);  
    List<Field> fields = new ArrayList();  
    fields.add(new Field("vector", vectors));  
    fields.add(new Field("face_url", getFaceUrl));  
    fields.add(new Field("face_feature_url", getFaceFeatureUrl));  
    fields.add(new Field("user_id", userIds));  
    fields.add(new Field("user_name", names));  
    InsertParam insertParam = InsertParam.newBuilder().withCollectionName(milvusConfig.getCollectionName()).withFields(fields).build();  
    this.milvusClient.insert(insertParam);  
}
```
**3.3 [Recognize Faces] L2 Similarity Search for Facial Features**
```java
public List<UserDTO> search(List<Float> floatList, Integer topK) {  
    final List<SearchResultsWrapper.IDScore> idScoreList = vectorService.search(floatList, topK);  
    List<UserDTO> list = new ArrayList<>();  
    idScoreList.forEach(idScore -> {  
        UserDTO imageDTO = new UserDTO();  
        final float score = idScore.getScore();  
        final Map<String, Object> fieldValues = idScore.getFieldValues();  
        imageDTO.setAutoId(Long.valueOf(String.valueOf( fieldValues.getOrDefault("Auto_id", "-1"))));  
        imageDTO.setUserId(Long.valueOf(String.valueOf( fieldValues.getOrDefault("user_id", "-1"))));  
        imageDTO.setUserName(String.valueOf((fieldValues.getOrDefault("user_name", ""))));  
        imageDTO.setFaceUrl(String.valueOf((fieldValues.getOrDefault("face_url", ""))));  
        imageDTO.setFaceFeatureUrl(String.valueOf((fieldValues.getOrDefault("face_feature_url", ""))));  
        imageDTO.setScore(Math.sqrt(score));  
        list.add(imageDTO);  
    });  
    return list;  
}
```
**04**.

**Conclusion**

This article demonstrates how to build a face recognition application using **EasyAi and Milvus**. By leveraging the strengths of the Java ecosystem's EasyAi and Milvus's vector search capabilities, we can quickly set up our own face recognition project using Java. We hope this article has been helpful. At the same time, we encourage you to use EasyAi and vector search in your own projects to explore more possibilities. The code involved in this article can be obtained via **Gitee**: Easy-Ai-Face_(https://gitee.com/fushoujiang/easy-ai-face)_.

**Recommended Reading**

[![](/assets/img/blog/milvus-easyai-face-java-2.png)](https://mp.weixin.qq.com/s?__biz=MzUzMDI5OTA5NQ==&mid=2247507230&idx=1&sn=3dc46b15f39e6ac1666614bb7aa338d6&scene=21#wechat_redirect)

[![](/assets/img/blog/milvus-easyai-face-java-3.png)](https://mp.weixin.qq.com/s?__biz=MzUzMDI5OTA5NQ==&mid=2247507157&idx=1&sn=0ac4343d81b7ef655e358e49c496e37b&scene=21#wechat_redirect)

![](/assets/img/blog/milvus-easyai-face-java-4.webp)

![](/assets/img/blog/milvus-easyai-face-java-5.webp)