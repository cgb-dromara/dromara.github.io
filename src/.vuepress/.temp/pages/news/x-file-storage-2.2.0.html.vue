<template><div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="/assets/img/news/x-file-storage-2.2.0-0.svg" alt=""></span></a></h3>
<p>The X Spring File Storage is now donated to dromara open source organizations.</p>
<p>x-file-storage.dromara.org | x-file-storage.xuyanwu.cn | spring-file-storage.xuyanwu.cn</p>
<h1 id="📚introduction" tabindex="-1"><a class="header-anchor" href="#📚introduction"><span>📚Introduction</span></a></h1>
<p>One line of code stores files to local, FTP, SFTP, WebDAV, Aliyun OSS, Huawei Cloud OBS, Qiniu Cloud Kodo, Tengxun Cloud COS, Baidu Cloud BOS, Youpai Cloud USS, MinIO, Amazon S3, GoogleCloud Storage, FastDFS, Azure Blob Storage, Cloudflare R2, Jinshan Cloud KS3, Meituan Cloud MSS, jingdong cloud OSS, Tianyi Cloud OOS, Mobile Netease Cloud EOS, Woyun OSS number of sails NOS, Ucloud US3, Qingyun QingStor, Ping An Cloud OBS, First Cloud OSS, IBM COS, and other S3 protocol-compatible storage platforms. View all supported storage platforms</p>
<p>💡After connecting to Alist through WebDAV, you can use common storage services such as Baidu Network Disk, Tianyi Cloud Disk, Ali Cloud Disk, and Xunlei Network Disk to view the storage platforms supported by Alist.</p>
<p>🚚You can migrate files between different storage platforms. For more information, see the migration file.</p>
<p>GitHub:https://github.com/dromara/x-file-storage Gitee:https://gitee.com/dromara/x-file-storage</p>
<p>Document 1:https://x-file-storage.dromara.org Document 2:https://x-file-storage.xuyanwu.cn Document 3:https://spring-file-storage.xuyanwu.cn</p>
<hr>
<h1 id="📜update-content" tabindex="-1"><a class="header-anchor" href="#📜update-content"><span>📜Update Content</span></a></h1>
<ul>
<li>
<p>Added acquisition file</p>
</li>
<li>
<p>Added enumerated documents</p>
</li>
<li>
<p>Refactoring pre-signed URL supports client upload, download, delete and other operations</p>
</li>
<li>
<p>Added Solon plug-in, can be more convenient to use in Solon</p>
</li>
<li>
<p>Upgrading the Hutool version</p>
</li>
<li>
<p>Optimization of manual multipart upload and increased support for GoogleCloud Storage</p>
</li>
<li>
<p>Optimized thumbnail exception handling</p>
</li>
<li>
<p>Optimized code structure</p>
</li>
<li>
<p>Fix hash value consistency in sharding scenarios</p>
</li>
<li>
<p>Fix occasional errors in Minio multipart upload</p>
</li>
<li>
<p>Fix the problem that static resource access to local storage does not take effect.</p>
</li>
<li>
<p>...</p>
</li>
</ul>
<h1 id="📦use" tabindex="-1"><a class="header-anchor" href="#📦use"><span>📦Use</span></a></h1>
<p>Click Quick Start to see how to use all storage platforms!</p>
<h4 id="🔧configuration" tabindex="-1"><a class="header-anchor" href="#🔧configuration"><span>🔧Configuration</span></a></h4>
<p>Take Alibaba Cloud OSS as an example. 'pom.xml' is introduced into this project. The default environment is 'SpringBoot'. Other environments can be used separately from the SpringBoot.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;!-- 引入本项目 --></span></span>
<span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>org.dromara.x-file-storage&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>x-file-storage-spring&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>2.2.0&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span>
<span class="line"><span>&#x3C;!-- 引入 阿里云 OSS SDK，如果使用其它存储平台，就引入对应的 SDK  --></span></span>
<span class="line"><span>&#x3C;dependency></span></span>
<span class="line"><span>    &#x3C;groupId>com.aliyun.oss&#x3C;/groupId></span></span>
<span class="line"><span>    &#x3C;artifactId>aliyun-sdk-oss&#x3C;/artifactId></span></span>
<span class="line"><span>    &#x3C;version>3.16.1&#x3C;/version></span></span>
<span class="line"><span>&#x3C;/dependency></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>application.yml</code> Add the following basic configuration to the configuration file</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>dromara:</span></span>
<span class="line"><span>  x-file-storage: #文件存储配置</span></span>
<span class="line"><span>    default-platform: aliyun-oss-1 #默认使用的存储平台</span></span>
<span class="line"><span>    aliyun-oss:</span></span>
<span class="line"><span>      - platform: aliyun-oss-1 # 存储平台标识</span></span>
<span class="line"><span>        enable-storage: true  # 启用存储</span></span>
<span class="line"><span>        access-key: ??</span></span>
<span class="line"><span>        secret-key: ??</span></span>
<span class="line"><span>        end-point: ??</span></span>
<span class="line"><span>        bucket-name: ??</span></span>
<span class="line"><span>        domain: ?? # 访问域名，注意“/”结尾，例如：https://abc.oss-cn-shanghai.aliyuncs.com/</span></span>
<span class="line"><span>        base-path: test/ # 基础路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🔨encoding" tabindex="-1"><a class="header-anchor" href="#🔨encoding"><span>🔨Encoding</span></a></h4>
<p>Add the '@ EnableFileStorage' annotation to the startup class</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@EnableFileStorage</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class SpringFileStorageTestApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(SpringFileStorageTestApplication.class,args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="✨start-upload" tabindex="-1"><a class="header-anchor" href="#✨start-upload"><span>✨Start Upload</span></a></h4>
<p>File, MultipartFile, byte, InputStream, URL, URI, String, and HttpServletRequest are supported. Large files are automatically uploaded in parts. If you want to support more ways, please read the file adapter chapter.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class FileDetailController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private FileStorageService fileStorageService;//注入实列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传文件</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping("/upload")</span></span>
<span class="line"><span>    public FileInfo upload(MultipartFile file) {</span></span>
<span class="line"><span>        //只需要这一行代码即可上传成功</span></span>
<span class="line"><span>        return fileStorageService.of(file).upload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传文件，成功返回文件 url</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping("/upload2")</span></span>
<span class="line"><span>    public String upload2(MultipartFile file) {</span></span>
<span class="line"><span>        FileInfo fileInfo = fileStorageService.of(file)</span></span>
<span class="line"><span>                .setPath("upload/") //保存到相对路径下，为了方便管理，不需要可以不写</span></span>
<span class="line"><span>                .setObjectId("0")   //关联对象id，为了方便管理，不需要可以不写</span></span>
<span class="line"><span>                .setObjectType("0") //关联对象类型，为了方便管理，不需要可以不写</span></span>
<span class="line"><span>                .putAttr("role","admin") //保存一些属性，可以在切面、保存上传记录、自定义存储平台等地方获取使用，不需要可以不写</span></span>
<span class="line"><span>                .upload();  //将文件上传到对应地方</span></span>
<span class="line"><span>        return fileInfo == null ? "上传失败！" : fileInfo.getUrl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传图片，成功返回文件信息</span></span>
<span class="line"><span>     * 图片处理使用的是 https://github.com/coobird/thumbnailator</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping("/upload-image")</span></span>
<span class="line"><span>    public FileInfo uploadImage(MultipartFile file) {</span></span>
<span class="line"><span>        return fileStorageService.of(file)</span></span>
<span class="line"><span>                .image(img -> img.size(1000,1000))  //将图片大小调整到 1000*1000</span></span>
<span class="line"><span>                .thumbnail(th -> th.size(200,200))  //再生成一张 200*200 的缩略图</span></span>
<span class="line"><span>                .upload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传文件到指定存储平台，成功返回文件信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping("/upload-platform")</span></span>
<span class="line"><span>    public FileInfo uploadPlatform(MultipartFile file) {</span></span>
<span class="line"><span>        return fileStorageService.of(file)</span></span>
<span class="line"><span>                .setPlatform("aliyun-oss-1")    //使用指定的存储平台</span></span>
<span class="line"><span>                .upload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 直接读取 HttpServletRequest 中的文件进行上传，成功返回文件信息</span></span>
<span class="line"><span>     * 使用这种方式有些注意事项，请查看文档 基础功能-上传 章节</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping("/upload-request")</span></span>
<span class="line"><span>    public FileInfo uploadPlatform(HttpServletRequest request) {</span></span>
<span class="line"><span>        return fileStorageService.of(request).upload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎨other-operations" tabindex="-1"><a class="header-anchor" href="#🎨other-operations"><span>🎨Other operations</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>//手动构造文件信息，可用于其它操作</span></span>
<span class="line"><span>FileInfo fileInfo = new FileInfo()</span></span>
<span class="line"><span>        .setPlatform("huawei-obs-1")</span></span>
<span class="line"><span>        .setBasePath("test/")</span></span>
<span class="line"><span>        .setPath("aa/")</span></span>
<span class="line"><span>        .setFilename("image.png")</span></span>
<span class="line"><span>        .setThFilename("image.png.min.jpg");</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//文件是否存在</span></span>
<span class="line"><span>boolean exists = fileStorageService.exists(fileInfo);</span></span>
<span class="line"><span>//下载</span></span>
<span class="line"><span>byte[] bytes = fileStorageService.download(fileInfo).bytes();</span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>fileStorageService.delete(fileInfo);</span></span>
<span class="line"><span>//其它更多操作</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the file record is saved to the database, it can be more convenient to operate according to the URL. For details, please read the section on saving the upload record.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>//直接从数据库中获取 FileInfo 对象，更加方便执行其它操作</span></span>
<span class="line"><span>FileInfo fileInfo = fileStorageService.getFileInfoByUrl("https://abc.def.com/test/aa/image.png");</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//文件是否存在</span></span>
<span class="line"><span>boolean exists = fileStorageService.exists("https://abc.def.com/test/aa/image.png");</span></span>
<span class="line"><span>//下载</span></span>
<span class="line"><span>byte[] bytes = fileStorageService.download("https://abc.def.com/test/aa/image.png").bytes();</span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>fileStorageService.delete("https://abc.def.com/test/aa/image.png");</span></span>
<span class="line"><span>//其它更多操作</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Click the Quick Start https://x-file-storage.xuyanwu.cn to see how to use all storage platforms!</p>
<hr>
<p>About Dromara</p>
<p>Dromara is an open source community composed of top domestic open source project authors. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts participate in the joy of open source.</p>
<p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p>
<p>**Welcome to the knowledge planet and I interact * *</p>
<figure><img src="/assets/img/news/x-file-storage-2.2.0-1.webp" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


