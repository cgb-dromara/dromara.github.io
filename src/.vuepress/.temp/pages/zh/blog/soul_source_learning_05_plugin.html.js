import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/blog/soul_source_learning_05_plugin.html.vue"
const data = JSON.parse("{\"path\":\"/zh/blog/soul_source_learning_05_plugin.html\",\"title\":\"Soul网关学习插件链与负载均衡解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Soul网关学习插件链与负载均衡解析\",\"author\":\"朱明\",\"date\":\"2021-01-15T00:00:00.000Z\",\"tag\":[\"Soul\"],\"cover\":\"/assets/img/architecture/soul-framework.png\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Soul网关学习插件链与负载均衡解析\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/01.png\\\",\\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/02.png\\\"],\\\"datePublished\\\":\\\"2021-01-15T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"朱明\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/soul_source_learning_05_plugin.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Soul网关学习插件链与负载均衡解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"插件链总结 从一个类关系图说起: plugin关系图plugin关系图 其中两个最基本的插件类: SoulPlugin: 定义插件职责的接口, 重点方法execute() 被上层调用, skip() 方法可以使某些插件在某些请求中被跳过. AbstractPlugin: 抽象类, 实现接口的 execute(), 定义一套通用的执行流程, 并使用模板方...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Soul网关学习插件链与负载均衡解析\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"朱明\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Soul\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-01-15T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/soul_source_learning_05_plugin.html\"}],[\"meta\",{\"name\":\"博客\"}]],\"description\":\"插件链总结 从一个类关系图说起: plugin关系图plugin关系图 其中两个最基本的插件类: SoulPlugin: 定义插件职责的接口, 重点方法execute() 被上层调用, skip() 方法可以使某些插件在某些请求中被跳过. AbstractPlugin: 抽象类, 实现接口的 execute(), 定义一套通用的执行流程, 并使用模板方...\"},\"readingTime\":{\"minutes\":10.87,\"words\":3261},\"filePathRelative\":\"zh/blog/soul_source_learning_05_plugin.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
