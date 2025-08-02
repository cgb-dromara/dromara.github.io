<template><div><figure><img src="/assets/img/news/Newcar-2.0.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Newcar在经历了原生Canvas -&gt; Skia的进展过程将会在2.0.0版本结束，至此Newcar已重构完毕，相比于1.0, newcar用更优雅，性能更高的方式实现了内核的重写以及API的重设计</p>
<p><strong>https://newcar.js.org/</strong></p>
<h2 id="reactivity-响应式的按需更新" tabindex="-1"><a class="header-anchor" href="#reactivity-响应式的按需更新"><span>Reactivity --- 响应式的按需更新</span></a></h2>
<p>我们模仿了Vue的响应式设计，并把它用在Newcar的按需更新上，让程序运行更加的高效</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>const widget = new Widget()</span></span>
<span class="line"><span>widget.x.value = 100</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：需要使用 <code v-pre>.value</code> 进行值的访问和修改</p>
<h2 id="setup语法糖" tabindex="-1"><a class="header-anchor" href="#setup语法糖"><span>Setup语法糖</span></a></h2>
<p>传统的动画需要一个一个进行animate,而且修改单个值特别麻烦，有了setup语法糖，就可以通过生成器函数逐个逐个的调用动画</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>widget.setup(w => {</span></span>
<span class="line"><span>     yield 3 // 等待3秒</span></span>
<span class="line"><span>     console.log('Hello world!')</span></span>
<span class="line"><span>     // 执行动画</span></span>
<span class="line"><span>     yield create().withAttr({ duration: 3 })</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件系统" tabindex="-1"><a class="header-anchor" href="#事件系统"><span>事件系统</span></a></h2>
<p>Newcar相比于Manim最大的好处就是可以进行交互，这也是前端的一大优势</p>
<h2 id="交互" tabindex="-1"><a class="header-anchor" href="#交互"><span>交互</span></a></h2>
<p>新版本增加了交互系统，如 <code v-pre>scalable</code>, 可以让用户自由缩放组件</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>new Widget({</span></span>
<span class="line"><span>    dragable: true,</span></span>
<span class="line"><span>    scalable: true,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[https://github.com/dromara/newcar](https://github.com/dromara/newcar)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公告" tabindex="-1"><a class="header-anchor" href="#公告"><span>公告</span></a></h2>
<p>因为Newcar团队的高中生占了80%，开学后无法连续长时间维护项目，所以发布此条公告，希望能找到人来长期维护。</p>
<figure><img src="/assets/img/news/Newcar-2.0.0-1.jfif" alt="" tabindex="0"><figcaption></figcaption></figure>
<figure><img src="/assets/img/news/Newcar-2.0.0-2.jfif" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


