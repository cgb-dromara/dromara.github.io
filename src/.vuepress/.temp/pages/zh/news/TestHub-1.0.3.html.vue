<template><div><h1 id="自动化测试工具-testhub-v1-0-3-版本发布" tabindex="-1"><a class="header-anchor" href="#自动化测试工具-testhub-v1-0-3-版本发布"><span>自动化测试工具：TestHub V1.0.3 版本发布</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度还是其他自动化任务，TestHub 的插件式架构都能够满足您的无限扩展需求。</p>
<p>使用手册：http://nsrule.com/</p>
<p>演示环境：http://testhub.nsrule.com:11018/#/</p>
<p>Gitee 开源地址：https://gitee.com/dromara/TestHub</p>
<p>Gitub 开源地址：https://github.com/dromara/TestHub</p>
<p>演示视频：https://www.bilibili.com/video/BV1X94y1v7ak/</p>
<p>安装包：https://url37.ctfile.com/d/42659137-59604925-26bdd9?p=3710 (访问密码: 3710)</p>
<figure><img src="/assets/img/news/TestHub-1.0.2-1.jpg" alt="" tabindex="0"><figcaption></figcaption></figure>
<h2 id="_1-0-3-更新内容" tabindex="-1"><a class="header-anchor" href="#_1-0-3-更新内容"><span>1.0.3 更新内容</span></a></h2>
<ul>
<li>
<p>🪲🪲 修复 BUG🪲🪲</p>
</li>
<li>
<p>优化用例编辑器卡顿问题</p>
</li>
<li>
<p>修复 HTTP 不支持异步接口能问题</p>
</li>
<li>
<p>自动生成的 ID 和人工输入的 ID 可能会产生重复@magic(感谢大佬) #I8AZW1</p>
</li>
<li>
<p>👍👍 新增功能 👍👍</p>
</li>
<li>
<p>优化 Formula 表达式日志展示。使用说明</p>
</li>
<li>
<p>基于 antlr4 重构 Formula 表达式</p>
</li>
<li>
<p>支持操作 cookie #I8I89D</p>
</li>
<li>
<p>参数支持复制键入 #I8B27J</p>
</li>
<li>
<p>优化环境变量的使用 #I8CEPE</p>
</li>
</ul>
<h2 id="如何使用-formula-表达式" tabindex="-1"><a class="header-anchor" href="#如何使用-formula-表达式"><span>如何使用 Formula 表达式</span></a></h2>
<p><strong>❓ 为什么要基于 antlr4 重构 Formula 表达式 ❓</strong></p>
<p>ANTLR (ANother Tool for Language Recognition) 是一个强大的语法分析器生成工具，用于生成词法分析器和语法分析器。ANTLR4 是其最新版本，具有许多先进的功能，它有一些优势使其在一些情况下比 TestHub 之前版本手动解析更有优势，而且支持的语法更多。</p>
<p>Formula 表达式做为操作数是 TestHub 数据的最小操作单元,</p>
<p>我们用 FormulaNode 表示一个的操作数 - TestHub 中内置了 5 种基础操作数</p>
<ul>
<li>DataNode 表示固定值,是有配置人员手动指定的, 例如:<code v-pre>xxxx</code></li>
<li>PathNode 表示变量值,可以基于 jsonPath 从决策上下文中获取指定的变量值,标识为<code v-pre>${xxx.yyy}</code></li>
<li>FuncNode 表示方法型函数的调用,标识为<code v-pre>%{方法名(形参 1:操作数,......)}</code></li>
<li>ArithmeticNode 表示计算算数运算, 例如:<code v-pre>1+2+3*4/5%3</code></li>
<li>MixNode 表示混合表达式</li>
</ul>
<h3 id="操作对象" tabindex="-1"><a class="header-anchor" href="#操作对象"><span>操作对象</span></a></h3>
<p>后续介绍均以上下文中存在如下数据为前提</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>  "store": {</span></span>
<span class="line"><span>    "book": [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        "category": "reference",</span></span>
<span class="line"><span>        "author": "Nigel Rees",</span></span>
<span class="line"><span>        "title": "Sayings of the Century",</span></span>
<span class="line"><span>        "price": 8.95</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        "category": "fiction",</span></span>
<span class="line"><span>        "author": "Evelyn Waugh",</span></span>
<span class="line"><span>        "title": "Sword of Honour",</span></span>
<span class="line"><span>        "price": 12.99</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        "category": "fiction",</span></span>
<span class="line"><span>        "author": "Herman Melville",</span></span>
<span class="line"><span>        "title": "Moby Dick",</span></span>
<span class="line"><span>        "isbn": "0-553-21311-3",</span></span>
<span class="line"><span>        "price": 8.99</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        "category": "fiction",</span></span>
<span class="line"><span>        "author": "J. R. R. Tolkien",</span></span>
<span class="line"><span>        "title": "The Lord of the Rings",</span></span>
<span class="line"><span>        "isbn": "0-395-19395-8",</span></span>
<span class="line"><span>        "price": 22.99</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    "bicycle": {</span></span>
<span class="line"><span>      "color": "red",</span></span>
<span class="line"><span>      "price": 19.95</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  "expensive": 2</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<h4 id="固定值-datanode" tabindex="-1"><a class="header-anchor" href="#固定值-datanode"><span>固定值-DataNode</span></a></h4>
<p>data=&quot;root&quot;中的 我们写死的 root 其实就是 DataNode 类型的操作数</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;param code="password" name = "密码" dataType="STRING" data="root"/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>写法</th>
<th>例子</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>-1.0086</code></td>
<td>数字</td>
<td>-1.0086</td>
</tr>
<tr>
<td><code v-pre>{attr:{a:1},attr1:1}</code></td>
<td>json 对象</td>
<td>{&quot;attr&quot;:{&quot;a&quot;:1},&quot;attr1&quot;:1}</td>
</tr>
<tr>
<td><code v-pre>[${expensive},1]</code></td>
<td>列表 操作对象的 expensive 做为第一个元素，1 是第二个元素</td>
<td><code v-pre>[2,1]</code></td>
</tr>
</tbody>
</table>
<h4 id="变量值-pathnode" tabindex="-1"><a class="header-anchor" href="#变量值-pathnode"><span>变量值-PathNode</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">PathNode 几乎支持了所有 jsonPath 的语法,但是我们不支持 <code v-pre>$['store']['book'][0]['title']</code> 这种<code v-pre>[]</code>的写法 如果目前的语法满足不了你的测试过程，请于<code v-pre>gitee</code>仓库提 lssues，我们会优先支持。 jsonPath 语法学习 请参考 https://github.com/alibaba/fastjson/wiki/JSONPath</p>
</div>
<table>
<thead>
<tr>
<th>写法</th>
<th>例子</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>${expensive}</code></td>
<td>操作对象的 expensive 的值</td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>${store.book.price}</code></td>
<td>操作对象的 store 的每一个 book 的 price 值</td>
<td><code v-pre>[8.95, 12.99, 8.99, 22.99]</code></td>
</tr>
<tr>
<td><code v-pre>${store.book[-1].author}</code></td>
<td>操作对象的 store 的最后一个 book 的 author</td>
<td>J. R. R. Tolkien</td>
</tr>
<tr>
<td><code v-pre>${store.book[0:2].author}</code></td>
<td>操作对象的 store 的 0 到 2book 的 author</td>
<td>Nigel Rees,Sword of Honour,Herman Melville</td>
</tr>
<tr>
<td><code v-pre>${store.book[?(isbn)]}</code></td>
<td>操作对象的 store 的 book 中 isbn 属性不等于空的</td>
<td>Herman Melville,J. R. R. Tolkien</td>
</tr>
<tr>
<td><code v-pre>${store.book[author='Nigel Rees'].title}</code></td>
<td>操作对象的 store 的 book 中 author 等于 Nigel Rees 的 book 的 title</td>
<td>Sayings of the Century</td>
</tr>
</tbody>
</table>
<h4 id="内置方法-funcnode" tabindex="-1"><a class="header-anchor" href="#内置方法-funcnode"><span>内置方法-FuncNode</span></a></h4>
<table>
<thead>
<tr>
<th>写法</th>
<th>例子</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%{getNowTime()}</code></td>
<td>获取当前时间</td>
<td>看表</td>
</tr>
<tr>
<td><code v-pre>%{add(attr1:1,attr2:2)}</code></td>
<td>进行 1+2 ，key:val 的写法</td>
<td>3</td>
</tr>
<tr>
<td><code v-pre>%{add(1,2)}</code></td>
<td>进行 1+2 默认 key 为下标的写法</td>
<td>3</td>
</tr>
</tbody>
</table>
<p>内置函数是我们基于 SPI 机制提供的扩展点之一，目前我们实现了这些内置函数</p>
<p>如果有不满足你的可以按照一下方式扩展</p>
<ol>
<li>继承 FunctionHandler</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>package org.dromara.testhub.nsrule.core.executer.mode.base.function;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson.JSONObject;</span></span>
<span class="line"><span>import org.dromara.testhub.nsrule.core.executer.context.Context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface FunctionHandler {</span></span>
<span class="line"><span>    String getName();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Object execute(Context context, JSONObject data);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在 META-INF.services 路径下的 org.dromara.testhub.nsrule.core.executer.mode.base.function.FunctionHandler 配置的你扩展方法</li>
</ol>
<h4 id="算数运算-arithmeticnode" tabindex="-1"><a class="header-anchor" href="#算数运算-arithmeticnode"><span>算数运算-ArithmeticNode</span></a></h4>
<p>是的我们支持了手写算数运算的表达式</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>+</td>
<td>加</td>
</tr>
<tr>
<td>-</td>
<td>减</td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>乘</td>
</tr>
<tr>
<td>/</td>
<td>除</td>
</tr>
<tr>
<td>%</td>
<td>取余</td>
</tr>
<tr>
<td>()</td>
<td>优先级</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>写法</th>
<th>例子</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>1+2+3*4/5%3</code></td>
<td>计算<code v-pre>1+2+3*4/5%3</code></td>
<td>5.4</td>
</tr>
<tr>
<td><code v-pre>1+(2+3)*4/5%3</code></td>
<td>计算<code v-pre>1+(2+3)*4/5%3</code></td>
<td>2</td>
</tr>
</tbody>
</table>
<h4 id="混合表达式-mixnode" tabindex="-1"><a class="header-anchor" href="#混合表达式-mixnode"><span>混合表达式-MixNode</span></a></h4>
<p>用户组合所有 FormulaNode 最终结果返回字符串</p>
<table>
<thead>
<tr>
<th>写法</th>
<th>例子</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>http:${expensive}:10010/server/workerHeartbeat</code></td>
<td>将操作对象的 expensive 的值替换后返回字符串</td>
<td>http:2:10010/server/workerHeartbeat</td>
</tr>
</tbody>
</table>
<h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2>
<figure><img src="/assets/img/news/TestHub-1.0.3-1.jpg" alt="" tabindex="0"><figcaption></figcaption></figure>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8"?></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;rule code="RULE_0000000013" name="Formula操作数使用说明" model="flow" project="default"></span></span>
<span class="line"><span>    &#x3C;actions></span></span>
<span class="line"><span>        &#x3C;action code="getData" name="操作数据" type="CONST" dataType="MAP"></span></span>
<span class="line"><span>            &#x3C;bound></span></span>
<span class="line"><span>                {"store":{"book":[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99}],"bicycle":{"color":"red","price":19.95}},"expensive":2}</span></span>
<span class="line"><span>            &#x3C;/bound></span></span>
<span class="line"><span>        &#x3C;/action></span></span>
<span class="line"><span>    &#x3C;/actions></span></span>
<span class="line"><span>    &#x3C;flows></span></span>
<span class="line"><span>        &#x3C;flow code="flow1"></span></span>
<span class="line"><span>            &#x3C;execute code="stp1" name="获取基础操作数据" actionCode="getData"/></span></span>
<span class="line"><span>            &#x3C;execute code="stp2" name="固定值-DataNode" actionCode="check"></span></span>
<span class="line"><span>                &#x3C;checkItem code="check1" name="固定值数字" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="-1.0086" threshold="-1.0086"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check2" name="固定值字符串" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" cover="* 0/1 * * * ?" threshold="* 0/1 * * * ?"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check3" name="固定值列表" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" coverComplex="1" cover="[${stp1.expensive},1]" thresholdComplex="1" threshold="[2,1]"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>            &#x3C;/execute></span></span>
<span class="line"><span>            &#x3C;execute code="stp3" name="变量值-PathNode" actionCode="check"></span></span>
<span class="line"><span>                &#x3C;checkItem code="check1" name="操作对象的 expensive 的值" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="${stp1.expensive}" threshold="2"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check2" name="操作对象的 store 的每一个 book 的 price 值" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" coverComplex="1" cover="${stp1.store.book.price}" thresholdComplex="1" threshold="[8.95,12.99,8.99,22.99]"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check3" name="操作对象的 store 的最后一个 book 的 author" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" cover="${stp1.store.book[-1].author}" threshold="J. R. R. Tolkien"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check4" name="操作对象的 store 的 0 到 2book 的 author" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" coverComplex="1" cover="${stp1.store.book[0:2].author}" thresholdComplex="1" threshold="[Nigel Rees,Sword of Honour,Herman Melville]"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check5" name="操作对象的 store 的 book 中 isbn 属性不等于空的 的 author" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" coverComplex="1" cover="${stp1.store.book[?(isbn)].author}" thresholdComplex="1" threshold="[Herman Melville,J. R. R. Tolkien]"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check6" name="操作对象的 store 的 book 中 author 等于 Nigel Rees 的 book 的 title" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" cover="${stp1.store.book[author='Nigel Rees'].title}" threshold="Sayings of the Century"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>            &#x3C;/execute></span></span>
<span class="line"><span>            &#x3C;execute code="stp4" name="内置方法-FuncNode" actionCode="check"></span></span>
<span class="line"><span>                &#x3C;checkItem code="check1" name="参数key:val形式" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="%{add(attr1:1,attr2:2)}" threshold="3"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check2" name="参数,形式" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="%{add(1,2)}" threshold="3"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>            &#x3C;/execute></span></span>
<span class="line"><span>            &#x3C;execute code="stp5" name="算数运算-ArithmeticNode" actionCode="check"></span></span>
<span class="line"><span>                &#x3C;checkItem code="check1" name="计算1+2+3*4/5%3" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="1+2+3*4/5%3" threshold="5.4"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check2" name="计算1+(2+3)*4/5%3" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="NUMBER" cover="1+(2+3)*4/5%3" threshold="2"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>            &#x3C;/execute></span></span>
<span class="line"><span>            &#x3C;execute code="stp6" name="混合表达式-MixNode" actionCode="check"></span></span>
<span class="line"><span>                &#x3C;checkItem code="check1" name="store 的 book中第expensive+1个  的 author" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" cover="${stp1.store.book[%{add(${stp1.expensive},1)}].author}" threshold="J. R. R. Tolkien"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>                &#x3C;checkItem code="check2" name="store 的 book中第expensive+1个  的 author" msg=""></span></span>
<span class="line"><span>                    &#x3C;expression expressionType="relation" operationCode="eq" dataType="STRING" cover="${stp1.expensive}.1" threshold="2.1"/></span></span>
<span class="line"><span>                &#x3C;/checkItem></span></span>
<span class="line"><span>            &#x3C;/execute></span></span>
<span class="line"><span>        &#x3C;/flow></span></span>
<span class="line"><span>    &#x3C;/flows></span></span>
<span class="line"><span>&#x3C;/rule></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


