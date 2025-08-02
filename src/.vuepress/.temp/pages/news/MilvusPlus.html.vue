<template><div><h1 id="milvusplus-vector-database-enhanced-operations-library" tabindex="-1"><a class="header-anchor" href="#milvusplus-vector-database-enhanced-operations-library"><span>MilvusPlus：Vector Database Enhanced Operations Library</span></a></h1>
<h2 id="project-profile" tabindex="-1"><a class="header-anchor" href="#project-profile"><span>Project Profile</span></a></h2>
<figure><img src="/assets/img/news/MilvusPlus-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>MilvusPlus</p>
<blockquote>
<blockquote>
<p>🔥🔥🔥MilvusPlus (MP for short) is a Milvus operation tool designed to simplify the interaction with Milvus vector database, provide developers with intuitive API similar to MyBatis-Plus annotation and method calling style, and improve efficiency.</p>
</blockquote>
</blockquote>
<h2 id="characteristics" tabindex="-1"><a class="header-anchor" href="#characteristics"><span>Characteristics</span></a></h2>
<ul>
<li>
<p><strong>No intrusion</strong>: only do enhancement without change, the introduction of it will not affect the existing project, as smooth as silk</p>
</li>
<li>
<p><strong>Small loss</strong>: Basic CURD will be automatically injected when starting, with basically no loss in performance and direct object-oriented operation</p>
</li>
<li>
<p>**Powerful CRUD operation **: Universal MilvusMapper, CRUD operation can be realized only through a small amount of configuration, and more powerful condition constructor to meet various use requirements</p>
</li>
<li>
<p>**Support Lambda call **: Use Lambda expressions to easily write various query conditions without worrying about incorrect field writing.</p>
</li>
<li>
<p><strong>Support automatic primary key generation</strong>: Perfect solution to primary key problem</p>
</li>
<li>
<p><strong>Support custom global common operations</strong>: Supports global common method injection</p>
</li>
<li>
<p><strong>Annotated configuration</strong>: Configure the entity model by using annotations similar to MyBatis-Plus.</p>
</li>
</ul>
<p><strong>Intuitive API</strong>: Direct API design simplifies database operations.</p>
<p><strong>Easy to scale</strong>: Core design focuses on extensibility.</p>
<p><strong>Type safety</strong>: Reduce errors with Java type safety.</p>
<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start"><span>Quick Start</span></a></h2>
<p>Custom extension support:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>io.github.javpower&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>milvus-plus-core&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>2.4.0-SNAPSHOT&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring application support:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>io.github.javpower&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>milvus-plus-boot-starter&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>2.4.0-SNAPSHOT&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Solon application support:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>io.github.javpower&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>milvus-plus-solon-plugin&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>2.4.0-SNAPSHOT&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="profile" tabindex="-1"><a class="header-anchor" href="#profile"><span>Profile</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>milvus:</span></span>
<span class="line"><span>  uri: https://in03-a5357975ab80da7.api.gcp-us-west1.zillizcloud.com</span></span>
<span class="line"><span>  token: x'x'x'x</span></span>
<span class="line"><span>  enable: true</span></span>
<span class="line"><span>  packages:</span></span>
<span class="line"><span>    - io.github.javpower.milvus.demo.model</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>'milvus': Defines the configuration related to the Milvus service.</p>
</li>
<li>
<p>'uri': The URI of the Milvus service through which the application communicates with the Milvus service.</p>
</li>
<li>
<p>'token': A token used for authentication and authorization to ensure the security of access to Milvus services.</p>
</li>
<li>
<p>'enable': A Boolean value that indicates whether the Milvus module should be enabled.</p>
</li>
<li>
<p>'packages': These packages contain Java classes for custom annotations.</p>
</li>
</ul>
<h2 id="application-scenarios" tabindex="-1"><a class="header-anchor" href="#application-scenarios"><span>Application Scenarios</span></a></h2>
<p><strong>Similarity Search</strong>: Quickly retrieve the most similar item to a given vector.</p>
<p>*** recommend system **: recommend relevant content based on user behavior and preferences.</p>
<ul>
<li>
<p><strong>Image Retrieval</strong>: Find the image that is most similar to the query image in a large-scale image library.</p>
</li>
<li>
<p><strong>Natural Language Processing</strong>: Convert text to vectors and perform semantic search.</p>
</li>
</ul>
<p><strong>Bioinformatics</strong>: Analyze and compare biological sequences, such as protein and genomic data.</p>
<h2 id="custom-annotation-details" tabindex="-1"><a class="header-anchor" href="#custom-annotation-details"><span>Custom annotation details</span></a></h2>
<p>Automating Milvus database integration with custom annotations provides the following significant benefits:</p>
<ul>
<li>
<ul>
<li>**Simplify the development process **: directly declare the database structure in the code through annotations, instead of manually creating collections, attributes, indexes, and partitions. The project is automatically built when it is started, reducing the need to manually write Milvus API calls.</li>
</ul>
</li>
<li>
<p><strong>Improve development efficiency</strong>: The annotation-driven approach makes the creation and management of the database structure faster and speeds up development.</p>
</li>
<li>
<p><strong>Enhance code readability</strong>: Closely integrate the database structure definition with the business logic code to improve the readability and maintainability of the code.</p>
</li>
<li>
<p><strong>Reduce errors</strong>: Automating the creation of the database structure reduces the possibility of human error and improves the stability of the system.</p>
</li>
<li>
<p><strong>Easy to maintain</strong>: The use of annotations makes changes to the database structure more centralized and clear, facilitating later maintenance and upgrades.</p>
</li>
</ul>
<h3 id="extraparam-annotation" tabindex="-1"><a class="header-anchor" href="#extraparam-annotation"><span>@ ExtraParam Annotation</span></a></h3>
<p><strong>Purpose</strong>: Define additional parameters for indexing or other custom functions.</p>
<ul>
<li>
<p>**Properties * *:</p>
</li>
<li>
<p>'key()': the key name of the parameter.</p>
</li>
<li>
<p>'value()': the value of the parameter.</p>
</li>
</ul>
<h3 id="milvuscollection-annotation" tabindex="-1"><a class="header-anchor" href="#milvuscollection-annotation"><span>@ MilvusCollection Annotation</span></a></h3>
<p><strong>Purpose</strong>: Defines a collection in the Milvus database.</p>
<ul>
<li>
<p>**Properties * *:</p>
</li>
<li>
<p>'name()': the name of the collection.</p>
</li>
</ul>
<h3 id="milvusfield-annotation" tabindex="-1"><a class="header-anchor" href="#milvusfield-annotation"><span>@ MilvusField Annotation</span></a></h3>
<p><strong>Purpose</strong>: Defines the fields in the Milvus collection.</p>
<ul>
<li>
<p>**Properties * *:</p>
</li>
<li>
<p>'name()': field name, default to Java field name.</p>
</li>
<li>
<p>'dataType()': the data type. The default value is FLOAT_VECTOR'.</p>
</li>
<li>
<p>'dimension()': vector dimension. The default value is -1.</p>
</li>
<li>
<p>'isPrimaryKey()': indicates whether it is a primary key. The default value is false.</p>
</li>
<li>
<p>'autoID()': indicates whether to automatically generate an ID. The default value is false.</p>
</li>
<li>
<p>'description()': field description. It is empty by default.</p>
</li>
<li>
<p>'elementType()': the element type. The default value is 'None'.</p>
</li>
<li>
<p>'maxLength()': maximum length, default is -1.</p>
</li>
<li>
<p>'maxCapacity()': maximum capacity, default is -1.</p>
</li>
<li>
<p>'isPartitionKey()': indicates whether it is a partition key. The default value is false.</p>
</li>
</ul>
<h3 id="milvusindex-annotation" tabindex="-1"><a class="header-anchor" href="#milvusindex-annotation"><span>@ MilvusIndex Annotation</span></a></h3>
<p><strong>Purpose</strong>: Defines an index in the Milvus collection.</p>
<ul>
<li>
<p>**Properties * *:</p>
</li>
<li>
<p>'indexType()': the index type. The default value is 'FLAT'.</p>
</li>
<li>
<p>'metricType()': the measurement type. The default value is 'L2'.</p>
</li>
<li>
<p>'indexName()': index name, empty by default.</p>
</li>
<li>
<p>'extraParams()': extra parameter, defined using the 'ExtraParam' annotation.</p>
</li>
</ul>
<h3 id="milvuspartition-annotation" tabindex="-1"><a class="header-anchor" href="#milvuspartition-annotation"><span>@ MilvusPartition Annotation</span></a></h3>
<p><strong>Purpose</strong>: Defines the partition of the Milvus collection.</p>
<ul>
<li>
<p>**Properties * *:</p>
</li>
<li>
<p>'name()': an array of names of partitions.</p>
</li>
</ul>
<p>With these annotations, developers can easily define and manage the structure of the Milvus database, achieving the goal of automatically building the required database structure at the start of the project.</p>
<h2 id="crud-module-introduction" tabindex="-1"><a class="header-anchor" href="#crud-module-introduction"><span>CRUD Module Introduction</span></a></h2>
<p>The CRUD module is the basic set of operations used to process data in an application, namely Create, Read, Update, and Delete. In this module, we encapsulate the CRUD operations that interact with the Milvus database through the abstract class 'BaseMilvusMapper(T)', providing a 1 type of safe and easy-to-use interface.</p>
<h3 id="abstract-class-basemilvusmapper-t" tabindex="-1"><a class="header-anchor" href="#abstract-class-basemilvusmapper-t"><span>Abstract class 'BaseMilvusMapper'(T)'</span></a></h3>
<p>'BaseMilvusMapper(T)'is an abstract class that implements the 'IAMService' interface and defines a series of methods for manipulating the Milvus database. This class is the base class for all the Mapper classes that interact with the Milvus database.</p>
<h3 id="abstract-method-getclient" tabindex="-1"><a class="header-anchor" href="#abstract-method-getclient"><span>Abstract method 'getClient()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Returns a 'MilvusClientV2' instance for communication with the Milvus database.</li>
</ul>
<h3 id="method-querywrapper" tabindex="-1"><a class="header-anchor" href="#method-querywrapper"><span>Method 'queryWrapper()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Creates and returns a'LambdaQueryWrapper (T)'instance for building query operations.</li>
</ul>
<h3 id="method-deletewrapper" tabindex="-1"><a class="header-anchor" href="#method-deletewrapper"><span>Method 'deleteWrapper()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Creates and returns a 'LambdaDeleteWrapper(T)'instance to build a delete operation.</li>
</ul>
<h3 id="method-updatewrapper" tabindex="-1"><a class="header-anchor" href="#method-updatewrapper"><span>Method 'updateWrapper()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Create and return a'LambdaUpdateWrapper (T)'instance for building update operations.</li>
</ul>
<h3 id="method-insertwrapper" tabindex="-1"><a class="header-anchor" href="#method-insertwrapper"><span>Method 'insertWrapper()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Creates and returns a'LambdaInsertWrapper (T)'instance to build the insert operation.</li>
</ul>
<h3 id="method-getbyid-serializable-ids" tabindex="-1"><a class="header-anchor" href="#method-getbyid-serializable-ids"><span>Method 'getById(Serializable ... ids)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: Query data based on the provided ID list.</p>
</li>
<li>
<p><strong>Parameters</strong>:'ids'-A serializable list of IDs.</p>
</li>
<li>
<p><strong>Return</strong>:'MilvusResp&lt;List&lt;MilvusResult(T)&gt;&gt; '-Response containing query results.</p>
</li>
</ul>
<h3 id="method-removebyid-serializable-ids" tabindex="-1"><a class="header-anchor" href="#method-removebyid-serializable-ids"><span>Method 'removeById(Serializable ... ids)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: Delete data based on the provided ID list.</p>
</li>
<li>
<p><strong>Parameters</strong>:'ids'-A serializable list of IDs.</p>
</li>
<li>
<p><strong>Return</strong>:'MilvusResp(DeleteResp)'-the response of the delete operation.</p>
</li>
</ul>
<h3 id="method-updatebyid-t-entity" tabindex="-1"><a class="header-anchor" href="#method-updatebyid-t-entity"><span>Method 'updateById(T ... entity)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: Update data based on the provided entity.</p>
</li>
<li>
<p><strong>Parameters</strong>:'entity'-a list of entity objects.</p>
</li>
<li>
<p><strong>Return</strong>:'MilvusResp(UpsertResp)'-the response of the update operation.</p>
</li>
</ul>
<h3 id="method-insert-t-entity" tabindex="-1"><a class="header-anchor" href="#method-insert-t-entity"><span>Method 'insert(T ... entity)'</span></a></h3>
<ul>
<li>
<p><strong>Feature</strong>: inserts the provided entity into the database.</p>
</li>
<li>
<p><strong>Parameters</strong>:'entity'-a list of entity objects.</p>
</li>
<li>
<p><strong>Return</strong>:'MilvusResp(InsertResp)'-the response of the insert operation.</p>
</li>
</ul>
<h3 id="method-lambda-wrapper-w-t-wrapper" tabindex="-1"><a class="header-anchor" href="#method-lambda-wrapper-w-t-wrapper"><span>Method 'lambda(Wrapper&lt;W, T&gt; wrapper)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: Create a general builder instance for different types of operations.</p>
</li>
<li>
<p><strong>Parameters</strong>:'wrapper'-a builder instance.</p>
</li>
</ul>
<p><strong>Return</strong>:'W'-Returns the builder instance.</p>
<h3 id="process-description" tabindex="-1"><a class="header-anchor" href="#process-description"><span>Process description</span></a></h3>
<ol>
<li>
<p><strong>Get client</strong>: Use the 'getClient()'method to get the client that communicates with the Milvus database.</p>
</li>
<li>
<p><strong>Create Builder</strong>: Use the 'queryWrapper()', 'deleteWrapper()', 'updateWrapper()', 'insertWrapper()' methods to create the corresponding action builder.</p>
</li>
<li>
<p><strong>Execute action</strong>: Use the builder to build a specific CRUD action and execute it.</p>
</li>
<li>
<p><strong>Get Collection Name</strong>: Get the collection name through the '@ MilvusCollection' annotation on the entity class.</p>
</li>
<li>
<p><strong>Initialize builder</strong>: Use the 'lambda()'method to initialize the builder, setting the collection name, client, conversion cache, and entity type.</p>
</li>
</ol>
<h3 id="advantages" tabindex="-1"><a class="header-anchor" href="#advantages"><span>Advantages</span></a></h3>
<ul>
<li><strong>Type safety</strong>: Use the generic 'T' to ensure data type consistency of operations.</li>
</ul>
<p><strong>Simplify operations</strong>: Encapsulates CRUD operations to simplify code writing and database interaction.</p>
<ul>
<li>
<p><strong>Easy to extend</strong>: The abstract class design makes it easy to extend new operations or custom behaviors.</p>
</li>
<li>
<p><strong>Annotation-driven</strong>: Use the '@ MilvusCollection' annotation to automatically obtain the collection name to reduce hard coding.</p>
</li>
</ul>
<p>Through the 'BaseMilvusMapper(T)'class, developers can easily interact with the Milvus database, improve development efficiency and reduce error rates.</p>
<h2 id="iamservice-interface-module-introduction" tabindex="-1"><a class="header-anchor" href="#iamservice-interface-module-introduction"><span>IAMService interface module introduction</span></a></h2>
<p>The 'IAMService' interface module provides a complete set of Identity and Access Management (IAM) functions for managing roles, users, and permissions in the Milvus database. This module allows developers to perform operations such as creation, query, deletion, permission grant and revocation of users and roles through simple method calls.</p>
<h3 id="method-getclient" tabindex="-1"><a class="header-anchor" href="#method-getclient"><span>Method 'getClient()'</span></a></h3>
<ul>
<li><strong>Function</strong>: Obtain the 'MilvusClientV2' instance to communicate with the Milvus service.</li>
</ul>
<h3 id="default-method-createrole-string-rolename" tabindex="-1"><a class="header-anchor" href="#default-method-createrole-string-rolename"><span>Default method 'createRole(String roleName)'</span></a></h3>
<p><strong>Feature</strong>: Create a new role.</p>
<ul>
<li><strong>Parameters</strong>:'roleName'-the name of the role to be created.</li>
</ul>
<h3 id="default-method-createuser-string-username-string-password" tabindex="-1"><a class="header-anchor" href="#default-method-createuser-string-username-string-password"><span>Default method 'createUser(String userName, String password)'</span></a></h3>
<p><strong>Feature</strong>: Create a new user.</p>
<ul>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'userName'-The name of the user to be created.</p>
</li>
<li>
<p>'password'-the user's password.</p>
</li>
</ul>
<h3 id="default-method-describerole-string-rolename" tabindex="-1"><a class="header-anchor" href="#default-method-describerole-string-rolename"><span>Default method 'describeRole(String roleName)'</span></a></h3>
<p><strong>Feature</strong>: You can call this operation to obtain the permissions of a specified role.</p>
<ul>
<li>
<p><strong>Parameter</strong>:'roleName'-the name of the role to be queried.</p>
</li>
<li>
<p><strong>Return</strong>:'DescribeRoleResp'-The object that contains the role permission information.</p>
</li>
</ul>
<h3 id="default-method-describeuser-string-username" tabindex="-1"><a class="header-anchor" href="#default-method-describeuser-string-username"><span>Default method 'describeUser(String userName)'</span></a></h3>
<ul>
<li>
<p><strong>Feature</strong>: You can call this operation to obtain detailed information about a specified user.</p>
</li>
<li>
<p><strong>Parameter</strong>:'userName'-the name of the user to be queried.</p>
</li>
<li>
<p><strong>Return</strong>:'DescribeUserResp'-An object that contains user details.</p>
</li>
</ul>
<h3 id="default-method-droprole-string-rolename" tabindex="-1"><a class="header-anchor" href="#default-method-droprole-string-rolename"><span>Default method 'dropRole(String roleName)'</span></a></h3>
<ul>
<li>
<p><strong>Feature</strong>: Deletes the specified custom role.</p>
</li>
<li>
<p><strong>Parameters</strong>:'roleName'-the name of the role to be deleted.</p>
</li>
</ul>
<h3 id="default-method-dropuser-string-username" tabindex="-1"><a class="header-anchor" href="#default-method-dropuser-string-username"><span>Default method 'dropUser(String userName)'</span></a></h3>
<ul>
<li>
<p><strong>Feature</strong>: Deletes the specified user.</p>
</li>
<li>
<p><strong>Parameter</strong>:'userName'-the user name to be deleted.</p>
</li>
</ul>
<h3 id="default-method-grantprivilege-string-rolename-string-objecttype-string-privilege-string-objectname" tabindex="-1"><a class="header-anchor" href="#default-method-grantprivilege-string-rolename-string-objecttype-string-privilege-string-objectname"><span>Default method 'grantPrivilege(String roleName, String objectType, String privilege, String objectName)'</span></a></h3>
<p><strong>Feature</strong>: Grant specific permissions to the role.</p>
<ul>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'roleName'-the name of the role to grant permissions.</p>
</li>
<li>
<p>'objectType'-The type of the permission object.</p>
</li>
<li>
<p>'privilege'-the name of the permission to be granted.</p>
</li>
<li>
<p>'objectName'-the name of the object to which the permission applies.</p>
</li>
</ul>
<h3 id="default-method-grantrole-string-rolename-string-username" tabindex="-1"><a class="header-anchor" href="#default-method-grantrole-string-rolename-string-username"><span>Default method 'grantRole(String roleName, String userName)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: grants the user a specific role.</p>
</li>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'roleName'-The role name to grant to the user.</p>
</li>
<li>
<p>'userName'-existing user name.</p>
</li>
</ul>
<h3 id="default-method-listroles" tabindex="-1"><a class="header-anchor" href="#default-method-listroles"><span>Default method 'listRoles()'</span></a></h3>
<p><strong>Feature</strong>: Lists all custom roles.</p>
<p><strong>Return</strong>: List of role names.</p>
<h3 id="default-method-listusers" tabindex="-1"><a class="header-anchor" href="#default-method-listusers"><span>Default method 'listUsers()'</span></a></h3>
<p><strong>Feature</strong>: Lists the usernames of all existing users.</p>
<p><strong>Return</strong>: List of user names.</p>
<h3 id="default-method-revikeprivilege-string-rolename-string-objecttype-string-privilege-string-objectname-string-databasename" tabindex="-1"><a class="header-anchor" href="#default-method-revikeprivilege-string-rolename-string-objecttype-string-privilege-string-objectname-string-databasename"><span>Default method 'revikePrivilege (String roleName, String objectType, String privilege, String objectName, String databaseName)'</span></a></h3>
<p><strong>Function</strong>: Revokes the permissions assigned to the role.</p>
<ul>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'roleName'-the name of the role from which the permission is to be revoked.</p>
</li>
<li>
<p>'objectType'-The type of the permission object.</p>
</li>
<li>
<p>'privilege'-the name of the permission to be revoked.</p>
</li>
<li>
<p>'objectName'-The name of the API whose permissions you want to revoke.</p>
</li>
<li>
<p>'databaseName'-optional database name.</p>
</li>
</ul>
<h3 id="default-method-revokerole-string-rolename-string-username" tabindex="-1"><a class="header-anchor" href="#default-method-revokerole-string-rolename-string-username"><span>Default method 'revokeRole(String roleName, String userName)'</span></a></h3>
<ul>
<li>
<p><strong>Function</strong>: revokes the user's role.</p>
</li>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'roleName'-the name of the role to be revoked.</p>
</li>
<li>
<p>'userName'-the username of an existing user.</p>
</li>
</ul>
<h3 id="default-method-updatepassword-string-username-string-password-string-newpassword" tabindex="-1"><a class="header-anchor" href="#default-method-updatepassword-string-username-string-password-string-newpassword"><span>Default method 'updatePassword(String userName, String password, String newPassword)'</span></a></h3>
<ul>
<li>
<p><strong>Feature</strong>: Updates the password of a specified user.</p>
</li>
<li>
<p>**Parameters * *:</p>
</li>
<li>
<p>'userName'-the username of an existing user.</p>
</li>
<li>
<p>'password'-the current password of the user.</p>
</li>
<li>
<p>'newPassword'-new password for the user.</p>
</li>
</ul>
<h3 id="advantages-1" tabindex="-1"><a class="header-anchor" href="#advantages-1"><span>Advantages</span></a></h3>
<ul>
<li>
<p><strong>Simplified management</strong>: Simplified management of users and roles through a unified interface.</p>
</li>
<li>
<p><strong>Type safety</strong>: The interface method uses clear parameter types to reduce errors.</p>
</li>
<li>
<p><strong>Easy to integrate</strong>: The default method makes implementation details easy to integrate into existing systems.</p>
</li>
<li>
<p><strong>Fine-grained control</strong>: Supports fine-grained permission control to enhance security.</p>
</li>
<li>
<p><strong>Exception Handling</strong>: The method includes an exception handling mechanism to ensure the stability of the operation.</p>
</li>
</ul>
<p>The 'IAMService' interface module is the foundation for building a secure, reliable and easy-to-manage Milvus database access control system.</p>
<h2 id="conditional-constructor" tabindex="-1"><a class="header-anchor" href="#conditional-constructor"><span>Conditional constructor</span></a></h2>
<p>The condition constructor module is an abstract base class 'ConditionBuilder(T)'for dynamically building query conditions'. It provides a rich set of methods to generate a variety of query conditions, thereby simplifying the construction of database queries.</p>
<h3 id="functional-overview" tabindex="-1"><a class="header-anchor" href="#functional-overview"><span>Functional Overview</span></a></h3>
<ul>
<li>
<p><strong>Dynamic Attribute Mapping</strong>: Automatically maps entity object attributes to query conditions.</p>
</li>
<li>
<p><strong>Multiple conditions are supported</strong>: equals, not equal, greater than, less than, range, null check, IN condition, LIKE condition, etc.</p>
</li>
<li>
<p><strong>Logical operation</strong>: supports AND, OR, and NOT logical operations to construct complex query conditions.</p>
</li>
<li>
<p><strong>Type safety</strong>: The generic 'T' ensures type safety during conditional construction.</p>
</li>
<li>
<p><strong>Easy to extend</strong>: The abstract class design allows developers to extend more conditional construction functions as needed.</p>
</li>
</ul>
<h3 id="main-methods" tabindex="-1"><a class="header-anchor" href="#main-methods"><span>Main methods</span></a></h3>
<h3 id="getpropertiesmap-t-t" tabindex="-1"><a class="header-anchor" href="#getpropertiesmap-t-t"><span>'getPropertiesMap(T t)'</span></a></h3>
<ul>
<li><strong>Function</strong>: Maps the attributes and values of an entity object to a map.</li>
</ul>
<h3 id="basic-condition-method" tabindex="-1"><a class="header-anchor" href="#basic-condition-method"><span>Basic condition method</span></a></h3>
<ul>
<li>'eq', 'ne', 'gt', 'ge', 'lt', 'le': used to add equal to, not equal to, greater than, greater than or equal to, less than, less than or equal to conditions respectively.</li>
</ul>
<h3 id="range-and-null-check" tabindex="-1"><a class="header-anchor" href="#range-and-null-check"><span>Range and null check</span></a></h3>
<ul>
<li>
<p>'between': Add a range condition.</p>
</li>
<li>
<p>'isNull', 'isNotNull': Add a null value check condition.</p>
</li>
</ul>
<h3 id="in-and-like-conditions" tabindex="-1"><a class="header-anchor" href="#in-and-like-conditions"><span>IN and LIKE conditions</span></a></h3>
<ul>
<li>
<p>'in': Add IN condition, used to match whether the field value is in the given list.</p>
</li>
<li>
<p>'like': Add a LIKE condition to perform a pattern matching query.</p>
</li>
</ul>
<h3 id="json-and-array-operations" tabindex="-1"><a class="header-anchor" href="#json-and-array-operations"><span>JSON and array operations</span></a></h3>
<ul>
<li>
<p>'jsonContains', 'jsonContainsAll', 'jsonContainsAny': used to process the inclusion check of JSON fields.</p>
</li>
<li>
<p>'arrayContains', 'arrayContainsAll', 'arrayContainsAny': used to check the inclusion of array fields.</p>
</li>
<li>
<p>'arrayLength': Check the length of the array field.</p>
</li>
</ul>
<h3 id="logical-operation" tabindex="-1"><a class="header-anchor" href="#logical-operation"><span>Logical operation</span></a></h3>
<ul>
<li>'and', 'or', 'not': Used to combine multiple condition constructor objects and perform logical AND, OR, and NOT operations.</li>
</ul>
<h3 id="auxiliary-method" tabindex="-1"><a class="header-anchor" href="#auxiliary-method"><span>Auxiliary method</span></a></h3>
<ul>
<li>
<p>'convertValue', 'convertValues': Used to convert the value to a format suitable for the query.</p>
</li>
<li>
<p>'wrapFieldName': used to wrap the field name, which may need to be adjusted according to the specific query language.</p>
</li>
</ul>
<h3 id="abstract-methods" tabindex="-1"><a class="header-anchor" href="#abstract-methods"><span>Abstract Methods</span></a></h3>
<ul>
<li>'buildFilters': the specific filter string construction logic that needs to be implemented by the subclass.</li>
</ul>
<h3 id="use-example" tabindex="-1"><a class="header-anchor" href="#use-example"><span>Use Example</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ConditionBuilder&#x3C;MyEntity> builder = new ConditionBuilder&#x3C;>();</span></span>
<span class="line"><span>builder.eq("name", "John").gt("age", 18).and(new ConditionBuilder&#x3C;MyEntity>().like("email", "example.com"));</span></span>
<span class="line"><span>String filters = builder.buildFilters();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detailed-explanation-of-index-and-measurement-types" tabindex="-1"><a class="header-anchor" href="#detailed-explanation-of-index-and-measurement-types"><span>Detailed explanation of index and measurement types</span></a></h2>
<h3 id="index-type-indextype" tabindex="-1"><a class="header-anchor" href="#index-type-indextype"><span>Index Type (IndexType)</span></a></h3>
<ul>
<li>
<p><strong>INVALID</strong>: Invalid index type, only for internal tags.</p>
</li>
<li>
<p><strong>FLAT</strong>: Brute force search for small datasets.</p>
</li>
<li>
<p><strong>IVF_FLAT</strong>: Inverted index flat mode, suitable for medium-sized data sets.</p>
</li>
<li>
<p><strong>IVF_SQ8</strong>: Inverted index quantization mode, suitable for large-scale data sets, sacrificing accuracy to improve speed.</p>
</li>
<li>
<p><strong>IVF_PQ</strong>: Inverted index product quantization mode, suitable for large-scale high-dimensional data sets, balancing speed and accuracy.</p>
</li>
<li>
<p><strong>HNSW</strong>: Hierarchical navigation small-world graph, which provides fast search and is suitable for large-scale data sets.</p>
</li>
</ul>
<p><strong>DISKANN</strong>: Disk-based approximate nearest neighbor search for large-scale data sets stored on disks.</p>
<ul>
<li>
<p><strong>AUTOINDEX</strong>: Automatically selects the optimal index type.</p>
</li>
<li>
<p><strong>SCANN</strong>: Speeds up the search using scans and tree structures.</p>
</li>
<li>
<p><strong>GPU_IVF_FLAT, GPU_IVF_PQ</strong>:GPU-accelerated indexes for GPU environments.</p>
</li>
<li>
<p><strong>BIN_FLAT, BIN_IVF_FLAT</strong>: Binary vector-specific index.</p>
</li>
<li>
<p><strong>TRIE</strong>: applies to the dictionary tree index of the string type.</p>
</li>
<li>
<p><strong>STL_SORT</strong>: Sorting index for scalar fields.</p>
</li>
</ul>
<h3 id="metric-type-metrictype" tabindex="-1"><a class="header-anchor" href="#metric-type-metrictype"><span>Metric Type (MetricType)</span></a></h3>
<p><strong>INVALID</strong>: Invalid metric type, only for internal tags.</p>
<ul>
<li>
<p><strong>L2</strong>: Euclidean distance, for floating-point vectors.</p>
</li>
<li>
<p><strong>IP</strong>: inner product, used to calculate the cosine similarity.</p>
</li>
<li>
<p><strong>COSINE</strong>: Cosine similarity, suitable for text and image search.</p>
</li>
</ul>
<p><strong>HAMMING</strong>: Hamming distance for binary vectors.</p>
<ul>
<li><strong>JACCARD</strong>: Jakard similarity coefficient, suitable for set similarity calculation.</li>
</ul>
<h2 id="use-case" tabindex="-1"><a class="header-anchor" href="#use-case"><span>Use Case</span></a></h2>
<p>The following is an example of a vector search using MilvusPlus:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@Data</span></span>
<span class="line"><span>@MilvusCollection(name = "face_collection") // 指定Milvus集合的名称</span></span>
<span class="line"><span>public class Face {</span></span>
<span class="line"><span>    @MilvusField(</span></span>
<span class="line"><span>            name = "person_id", // 字段名称</span></span>
<span class="line"><span>            dataType = DataType.Int64, // 数据类型为64位整数</span></span>
<span class="line"><span>            isPrimaryKey = true, // 标记为主键</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    private Long personId; // 人员的唯一标识符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @MilvusField(</span></span>
<span class="line"><span>            name = "face_vector", // 字段名称</span></span>
<span class="line"><span>            dataType = DataType.FloatVector, // 数据类型为浮点型向量</span></span>
<span class="line"><span>            dimension = 128, // 向量维度，假设人脸特征向量的维度是128</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @MilvusIndex(</span></span>
<span class="line"><span>            indexType = IndexParam.IndexType.IVF_FLAT, // 使用IVF_FLAT索引类型</span></span>
<span class="line"><span>            metricType = IndexParam.MetricType.L2, // 使用L2距离度量类型</span></span>
<span class="line"><span>            indexName = "face_index", // 索引名称</span></span>
<span class="line"><span>            extraParams = { // 指定额外的索引参数</span></span>
<span class="line"><span>                    @ExtraParam(key = "nlist", value = "100") // 例如，IVF的nlist参数</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    private List&#x3C;Float> faceVector; // 存储人脸特征的向量</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class FaceMilvusMapper extends MilvusMapper&#x3C;Face> {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class ApplicationRunnerTest implements ApplicationRunner {</span></span>
<span class="line"><span>    private final FaceMilvusMapper mapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ApplicationRunnerTest(FaceMilvusMapper mapper) {</span></span>
<span class="line"><span>        this.mapper = mapper;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run(ApplicationArguments args){</span></span>
<span class="line"><span>        Face face=new Face();</span></span>
<span class="line"><span>        List&#x3C;Float> vector = new ArrayList&#x3C;>();</span></span>
<span class="line"><span>        for (int i = 0; i &#x3C; 128; i++) {</span></span>
<span class="line"><span>            vector.add((float) (Math.random() * 100)); // 这里仅作为示例使用随机数</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        face.setPersonId(1l);</span></span>
<span class="line"><span>        face.setFaceVector(vector);</span></span>
<span class="line"><span>        //新增</span></span>
<span class="line"><span>        List&#x3C;Face> faces=new ArrayList&#x3C;>();</span></span>
<span class="line"><span>        for (int i = 1; i &#x3C; 10 ;i++){</span></span>
<span class="line"><span>            Face face1=new Face();</span></span>
<span class="line"><span>            face1.setPersonId(Long.valueOf(i));</span></span>
<span class="line"><span>            List&#x3C;Float> vector1 = new ArrayList&#x3C;>();</span></span>
<span class="line"><span>            for (int j = 0; j &#x3C; 128; j++) {</span></span>
<span class="line"><span>                vector1.add((float) (Math.random() * 100)); // 这里仅作为示例使用随机数</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            face1.setFaceVector(vector1);</span></span>
<span class="line"><span>            faces.add(face1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        MilvusResp&#x3C;InsertResp> insert = mapper.insert(faces.toArray(faces.toArray(new Face[0]))); log.info("insert--{}", JSONObject.toJSONString(insert));</span></span>
<span class="line"><span>        //id查询</span></span>
<span class="line"><span>        MilvusResp&#x3C;List&#x3C;MilvusResult&#x3C;Face>>> query = mapper.getById(9l);</span></span>
<span class="line"><span>        log.info("query--getById---{}", JSONObject.toJSONString(query));</span></span>
<span class="line"><span>        //向量查询</span></span>
<span class="line"><span>        MilvusResp&#x3C;List&#x3C;MilvusResult&#x3C;Face>>> query1 = mapper.queryWrapper()</span></span>
<span class="line"><span>                .vector(Face::getFaceVector, vector)</span></span>
<span class="line"><span>                .ne(Face::getPersonId, 1L)</span></span>
<span class="line"><span>                .topK(3)</span></span>
<span class="line"><span>                .query();</span></span>
<span class="line"><span>        log.info("向量查询 query--queryWrapper---{}", JSONObject.toJSONString(query1));</span></span>
<span class="line"><span>        //标量查询</span></span>
<span class="line"><span>        MilvusResp&#x3C;List&#x3C;MilvusResult&#x3C;Face>>> query2 = mapper.queryWrapper()</span></span>
<span class="line"><span>                .eq(Face::getPersonId, 2L)</span></span>
<span class="line"><span>                .limit(3)</span></span>
<span class="line"><span>                .query();</span></span>
<span class="line"><span>        log.info("标量查询   query--queryWrapper---{}", JSONObject.toJSONString(query2));</span></span>
<span class="line"><span>        //更新</span></span>
<span class="line"><span>        vector.clear();</span></span>
<span class="line"><span>        for (int i = 0; i &#x3C; 128; i++) {</span></span>
<span class="line"><span>            vector.add((float) (Math.random() * 100)); // 这里仅作为示例使用随机数</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        MilvusResp&#x3C;UpsertResp> update = mapper.updateById(face);log.info("update--{}", JSONObject.toJSONString(update));</span></span>
<span class="line"><span>        //id查询</span></span>
<span class="line"><span>        MilvusResp&#x3C;List&#x3C;MilvusResult&#x3C;Face>>> query3 = mapper.getById(1L);log.info("query--getById---{}", JSONObject.toJSONString(query3));</span></span>
<span class="line"><span>        //删除</span></span>
<span class="line"><span>        MilvusResp(DeleteResp) remove = mapper.removeById(1L);log.info("remove--{}", JSONObject.toJSONString(remove));</span></span>
<span class="line"><span>        //查询</span></span>
<span class="line"><span>        MilvusResp&#x3C;List&#x3C;MilvusResult&#x3C;Face>>> query4 = mapper.getById(1L);log.info("query--{}", JSONObject.toJSONString(query4));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="welcome-to-praise-the-project" tabindex="-1"><a class="header-anchor" href="#welcome-to-praise-the-project"><span>Welcome to praise the project！！</span></a></h2>
<p><strong>https://gitee.com/dromara/MilvusPlus</strong></p>
</div></template>


