<template><div><figure><img src="/assets/img/news/Newcar-2.0.0-0.png" alt="" tabindex="0"><figcaption></figcaption></figure>
<p>Newcar's progress through native Canvas -&gt; Skia will end in version 2.0.0, so far Newcar has been refactored. compared with 1.0, newcar has rewritten the kernel and redesigned the API in a more elegant and high-performance way.</p>
<p><strong>https://newcar.js.org /</strong></p>
<h2 id="reactivity-responsive-on-demand-updates" tabindex="-1"><a class="header-anchor" href="#reactivity-responsive-on-demand-updates"><span>Reactivity --- Responsive on-demand updates</span></a></h2>
<p>We imitated Vue's responsive design and used it on Newcar's on-demand updates to make the program run more efficiently.</p>
<p>'''
const widget = new Widget()
widget.x.value = 100
'''</p>
<p>Disadvantages: Need to use '.value' for value access and modification</p>
<h2 id="setup-syntax-sugar" tabindex="-1"><a class="header-anchor" href="#setup-syntax-sugar"><span>Setup Syntax Sugar</span></a></h2>
<p>Traditional animation needs to be animate one by one, and it is particularly troublesome to modify a single value. With setup syntax sugar, animation can be called one by one through generator functions.</p>
<p>'''
widget.setup(w =&gt; {
yield 3 // wait 3 seconds
console.log('Hello world!')
// Execute the animation
yield create().withAttr({ duration: 3 })
})
'''</p>
<h2 id="event-system" tabindex="-1"><a class="header-anchor" href="#event-system"><span>Event System</span></a></h2>
<p>The biggest advantage of Newcar over Manim is that it can interact, which is also a big advantage of the front end.</p>
<h2 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction"><span>Interaction</span></a></h2>
<p>The new version adds an interactive system, such as 'scalable', which allows users to freely scale components.</p>
<p>'''
new Widget ({
dragable: true
scalable: true
})</p>
<p><a href="https://github.com/dromara/newcar" target="_blank" rel="noopener noreferrer">https://github.com/dromara/newcar</a>
'''</p>
<h2 id="announcement" tabindex="-1"><a class="header-anchor" href="#announcement"><span>Announcement</span></a></h2>
<p>Because the Newcar team has 80% of high school students and cannot maintain the project for a long time after school starts, this announcement is issued in the hope of finding someone to maintain it for a long time.
<img src="/assets/img/news/Newcar-2.0.0-1.jfif" alt=""></p>
<figure><img src="/assets/img/news/Newcar-2.0.0-2.jfif" alt="" tabindex="0"><figcaption></figcaption></figure>
</div></template>


