---
title: Milvus×EasyAi：如何用java从零搭建人脸识别应用
author: 2024年12月26日 08:36
date: 2024-12-26
cover: /assets/img/blog/milvus-easyai-face-java-0.webp
head:
  - - meta
    - name: 博客
---

![](/assets/img/blog/milvus-easyai-face-java-0.webp)

![](/assets/img/blog/milvus-easyai-face-java-1.png)

**如何从零搭建一个人脸识别应用？不妨试试原生Java人工智能算法：EasyAi + Milvus 的组合拳**。

**本文将使用到的软件和工具包括**：

*   EasyAi：人脸特征向量提取
    
*   Milvus：向量数据库用于高效存储和检索数据。
    

**01**.

**EasyAi：国内人气最高的Java人工智能算法框架**

作为纯java开发 Ai 应用的框架，EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用。再者，它既有一些我们已经封装好的图像目标检测及人工智能客服的模块，也提供各种深度学习，机器学习，强化学习，启发式学习，矩阵运算，求导函数，求偏导函数等底层算法工具。开发者可以通过简单的学习，就能完成根据自身业务，深度开发符合自己业务的小微模型。

**02**.

**EasyAi-Face：基于Easy-Ai的人脸识别应用**

**一，生成人类平均脸**，将所有人脸样本样本缩放到统一尺寸后，多余的上下截断，不足的进行补0，所有像素通道求和后获取平均数，将样本输出生成平均脸。

**二，通过事先训练好的人脸定位fastYolo模型**，对目标照片进行一次定位，并设置一个阈值，只有当可信度超过该阈值时才被认为是人脸。

**三，获取目标照片中可信度最高的人脸定位框**，基于该定位进行人脸位置的二次修正。

_二次修正方案：_

*   通过粒子群，设置四个特征维度寻求最优解，它们分别是人脸位置左上角的x与y坐标与宽高。自适应函数返回值设置为最小值最优。xy与宽高四维粒子调整活动范围，上下限制为一次定位坐标与宽高的+-50像素的范围（自行可调）。
    
*   适应函数计算流程为通过四个维度粒子锁定的坐标将人脸截取下来，将它与先前获取的平均脸按照之前的缩放方案，再次缩放到指定的一个更小的尺寸，并将它们的灰度通道通过softMax将整个矩阵的所有数值概率化。
    
*   对比平均脸与粒子此时锁定人脸灰度概率图像的欧式距离，并返回。让粒子探索（在指定迭代次数中）最小值最优解。
    

**四，获取人脸特征**，获取最后粒子寻找的最优坐标，根据该坐标将图像截取下来，并截取其从上到下高度的0.7倍的图像位置（将嘴部扔掉，嘴部的稳定性比较差），获取此时图像的LBP局部二值化纹理特征。

**03**.

**EasyAi-Face + Milvus搭建人脸识别应用**

**3.1 提取人脸特征**

**引入依赖**
```
        <dependency>  
            <groupId>org.dromara.easyai</groupId>  
            <artifactId>seeFace</artifactId>  
            <version>1.0.5</version>  
        </dependency>
```
**初始化Face**
```
    @Bean  
    public Face face(FaceConfig faceConfig ){  
  
        if (StringUtils.isNotBlank(faceConfig.getAvgFace()) && StringUtils.isNotBlank(faceConfig.getFaceModel())){  
            return FaceFactory.getFace(faceConfig.getAvgFace(), faceConfig.getFaceModel());  
  
        }  
        return FaceFactory.getFace();  
  
  
    }
```
**提取人脸特征**
```
    private List<Float> getFloats(InputStream inputStream) {  
        ThreeChannelMatrix m = Picture.getThreeMatrix(inputStream, false);  
        ErrorMessage errorMessage = face.look(m, idWorker.nextId(), 30);  
        final Matrix feature = errorMessage.getFaceMessage().getFeature();  
        return MatrixUtil.matrixToFloatList(feature);  
    }   
```
**3.2 存到向量库**
```
    public void initUserVector(UserDTO userDTO, List<Float> features) {  
        List<String> names = Collections.singletonList(userDTO.getUserName());  
        List<Long> userIds = Collections.singletonList(userDTO.getUserId());  
        List<String> getFaceUrl = Collections.singletonList(userDTO.getFaceUrl());  
        List<String> getFaceFeatureUrl = Collections.singletonList(userDTO.getFaceFeatureUrl());  
        List<List<Float>> vectors = Collections.singletonList(features);  
        List<Field> fields = new ArrayList();  
        fields.add(new Field("vector", vectors));  
        fields.add(new Field("face_url", getFaceUrl));  
        fields.add(new Field("face_feature_url", getFaceFeatureUrl));  
        fields.add(new Field("user_id", userIds));  
        fields.add(new Field("user_name", names));  
        InsertParam insertParam = InsertParam.newBuilder().withCollectionName(milvusConfig.getCollectionName()).withFields(fields).build();  
        this.milvusClient.insert(insertParam);  
    }
```
**3.3 【识别人脸】人脸特征L2相似性查找**
```
    public List<UserDTO> search(List<Float> floatList, Integer topK) {  
        final List<SearchResultsWrapper.IDScore> idScoreList = vectorService.search(floatList, topK);  
        List<UserDTO> list = new ArrayList<>();  
        idScoreList.forEach(idScore -> {  
            UserDTO imageDTO = new UserDTO();  
            final float score = idScore.getScore();  
            final Map<String, Object> fieldValues = idScore.getFieldValues();  
            imageDTO.setAutoId(Long.valueOf(String.valueOf( fieldValues.getOrDefault("Auto_id", "-1"))));  
            imageDTO.setUserId(Long.valueOf(String.valueOf( fieldValues.getOrDefault("user_id", "-1"))));  
            imageDTO.setUserName(String.valueOf((fieldValues.getOrDefault("user_name", ""))));  
            imageDTO.setFaceUrl(String.valueOf((fieldValues.getOrDefault("face_url", ""))));  
            imageDTO.setFaceFeatureUrl(String.valueOf((fieldValues.getOrDefault("face_feature_url", ""))));  
            imageDTO.setScore(Math.sqrt(score));  
            list.add(imageDTO);  
  
        });  
        return list;  
    }
```
**04**.

**总结**

本文展示了如何使用 **EasyAi 和 Milvus** 搭建一个人脸识别应用。通过结合Java生态EasyAi和Milvus向量搜索的优势，我们可以快速的使用java搭建自己的人脸识别的项目。我们希望这篇文章对您有所帮助。同时，我们鼓励您在自己的项目中使用EasyAi和向量搜索，探索更多可能性。本文涉及的代码可以通过 **Gitee** 获取：Easy-Ai-Face_(https://gitee.com/fushoujiang/easy-ai-face)_。

  

**推荐阅读**

[![](/assets/img/blog/milvus-easyai-face-java-2.png)](https://mp.weixin.qq.com/s?__biz=MzUzMDI5OTA5NQ==&mid=2247507230&idx=1&sn=3dc46b15f39e6ac1666614bb7aa338d6&scene=21#wechat_redirect)

[![](/assets/img/blog/milvus-easyai-face-java-3.png)](https://mp.weixin.qq.com/s?__biz=MzUzMDI5OTA5NQ==&mid=2247507157&idx=1&sn=0ac4343d81b7ef655e358e49c496e37b&scene=21#wechat_redirect)

  

![](/assets/img/blog/milvus-easyai-face-java-4.webp)

![](/assets/img/blog/milvus-easyai-face-java-5.webp)