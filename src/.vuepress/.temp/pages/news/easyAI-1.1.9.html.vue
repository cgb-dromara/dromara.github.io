<template><div><figure><img src="/assets/img/news/easyAI-1.1.9-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface"><span>Preface</span></a></h2>
<p>The significance of EasyAi to Java is the same as that of spring in JavaWeb fields-to be an out-of-the-box application so that every developer can use EasyAi to develop small and micro models that meet their own artificial intelligence business needs, which is its mission!</p>
<h2 id="easyai-introduction" tabindex="-1"><a class="header-anchor" href="#easyai-introduction"><span>EasyAi Introduction</span></a></h2>
<p>EasyAi has no dependencies, it is a native Java artificial intelligence algorithm framework. First of all, * * it can be introduced into our Java project by Maven with one click without any additional environment configuration and dependency, so it can be used out of the box. **Furthermore, it not only has some modules for image target detection and artificial intelligence customer service that we have already packaged, but also provides a variety of deep learning, machine learning, reinforcement learning, heuristic learning, matrix operations, and other underlying algorithm tools. Through simple learning, developers can complete the in-depth development of small and micro models that meet their own business according to their own business.</p>
<ul>
<li>
<p>EasyAI Code Cloud Download Link: https://gitee.com/dromara/easyAi</p>
</li>
<li>
<p>EasyAI GitHub download link: https://github.com/lifejwang11/easyAi</p>
</li>
<li>
<p>EasyAI main technical document address: https://yhk.yhktech.com/easyai</p>
</li>
<li>
<p>EasyAI detailed video tutorial: https://www.bilibili.com/video/av89134035</p>
</li>
<li>
<p>JAVA Artificial Intelligence 0 Basic System Course: https://www.bilibili.com/cheese/play/ss17600</p>
</li>
</ul>
<h3 id="v1-1-9-update-content" tabindex="-1"><a class="header-anchor" href="#v1-1-9-update-content"><span>v1.1.9 Update Content</span></a></h3>
<ul>
<li>
<p>The stability of image target detection is increased, and adjustable parameters are added to balance performance and stability.</p>
</li>
<li>
<p>Complete the functions of the image recognition API, enhance the performance, optimize the engineering and algorithm links of YOLO, simplify the API steps, and make the call clear and simple.</p>
</li>
</ul>
<h3 id="image-recognition-fastyolo-effect-display" tabindex="-1"><a class="header-anchor" href="#image-recognition-fastyolo-effect-display"><span>Image recognition FastYolo effect display</span></a></h3>
<ul>
<li>Using EasyAi to realize the visual kernel of image settlement vending machine</li>
</ul>
<figure><img src="/assets/img/news/easyAI-1.1.9-1.jfif" alt="" tabindex="0"><figcaption></figcaption></figure>
<h3 id="sayorder-artificial-intelligence-customer-service" tabindex="-1"><a class="header-anchor" href="#sayorder-artificial-intelligence-customer-service"><span>sayOrder artificial intelligence customer service</span></a></h3>
<ul>
<li>
<p>sayOrder is an artificial intelligence customer service system that relies on EasyAi for encapsulation.</p>
</li>
<li>
<p>It can analyze the semantics of user input to identify user behavior, and distinguish user intent ID through typeID. And by capturing the keyword category set in its background, it can capture the content contained in the statement of the user concerned by the system, such as the time and place in the statement.</p>
</li>
<li>
<p>It can also interact with users to answer questions independently, answer questions independently or communicate with other intentions.</p>
</li>
<li>
<p>Project Link Address: https://gitee.com/dromara/sayOrder</p>
</li>
</ul>
<h3 id="demonstration-of-basic-business-process-for-sayorder-interaction" tabindex="-1"><a class="header-anchor" href="#demonstration-of-basic-business-process-for-sayorder-interaction"><span>Demonstration of Basic Business Process for sayOrder Interaction</span></a></h3>
<ul>
<li>
<p>The first time users make an input to express their ideas! <a href="/assets/img/news/easyAI-1.1.9-2.png"></a></p>
</li>
<li>
<p>SayOrder it is found that the user's description lacks the necessary information for the order, it will be asked. Users received SayOrder rhetorical questions and further added their own ideas! <a href="/assets/img/news/easyAI-1.1.9-3.png"></a></p>
</li>
<li>
<p>The information entered by the user for the second time still does not meet the key order information requirements of the background 14 classification legal consultation, continue to supplement the information, and finally complete the order information supplement to generate the order.! <a href="/assets/img/news/easyAI-1.1.9-4.png"></a></p>
</li>
<li>
<p>Users enter the questions they want to consult, and SayOrder independently answer the questions they ask! <a href="/assets/img/news/easyAI-1.1.9-5.png"></a></p>
</li>
</ul>
<h3 id="the-above-is-a-simple-case-demonstration-of-sayorder-based-on-easyai-engine-custom-business-interface-for-details-of-installation-and-deployment-please-download-it-from-its-homepage-https-gitee-com-dromara-sayorder" tabindex="-1"><a class="header-anchor" href="#the-above-is-a-simple-case-demonstration-of-sayorder-based-on-easyai-engine-custom-business-interface-for-details-of-installation-and-deployment-please-download-it-from-its-homepage-https-gitee-com-dromara-sayorder"><span>The above is a simple case demonstration of SayOrder (based on easyAI engine) custom business interface. For details of installation and deployment, please download it from its homepage: https://gitee.com/dromara/sayOrder</span></a></h3>
<h3 id="architecture-design" tabindex="-1"><a class="header-anchor" href="#architecture-design"><span>Architecture Design</span></a></h3>
<p>**Common underlying algorithm modules * *</p>
<ul>
<li>Basic matrix and line generation calculation module:</li>
</ul>
<ol>
<li>built-in matrix class and matrix calculation class, which can complete a series of apis such as four common matrix operations, parity, multiple linear regression, logistic regression, European distance, cosine similarity, im2col, inverse im2col, algebraic coform, inverse, adjoint matrix, inner product, differential, etc.</li>
</ol>
<p>2.RGB three-channel matrix, which can be used for image conversion, cutting, blocking, generating image matrix and other operations to facilitate subsequent calculations.</p>
<ul>
<li>Machine Learning-Clustering:</li>
</ul>
<p>k clustering, mixed Gaussian clustering, density clustering, learning vector quantization clustering, etc.</p>
<ul>
<li>
<p>Machine learning-classification and fitting: multilayer feedforward neural networks, multilayer recurrent neural networks, residual networks, multilayer residual recurrent neural networks, convolutional neural networks, decision trees, random forests, k-nearest neighbors, etc.</p>
</li>
<li>
<p>Heuristic algorithm: particle swarm, ant colony, simulated annealing</p>
</li>
<li>
<p>Reinforcement learning dynamic programming, Monte Carlo analysis, Markov, temporal difference</p>
</li>
</ul>
<p>**Common upper algorithm module * *</p>
<ul>
<li>
<p>Visual image: image recognition, image abstract, object detection</p>
</li>
<li>
<p>Natural language: semantic understanding, word splitting, reasoning sensitivity and key words, sentence completion, language communication</p>
</li>
<li>
<p>Game robot: autonomous strategy, autonomous action</p>
</li>
</ul>
<h3 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>Use</span></a></h3>
<ol>
<li>
<p>Download the project and package it into the local maven library.</p>
</li>
<li>
<p>Introduce the easyAi pom file into the address into the project.</p>
</li>
</ol>
<h3 id="concerned-about-the-project" tabindex="-1"><a class="header-anchor" href="#concerned-about-the-project"><span>Concerned about the project</span></a></h3>
<ul>
<li>If you have any ideas or suggestions and studies on the project, you can add my work WeChat! <a href="/assets/img/news/easyAI-1.1.9-6.png"></a></li>
</ul>
<p>About Dromara</p>
<p>Dromara is an open source community composed of top domestic open source project authors. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts participate in the joy of open source.</p>
<p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p>
<p>**Welcome to the knowledge planet and I interact * *</p>
<figure><img src="/assets/img/news/easyAI-1.1.9-7.webp" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


