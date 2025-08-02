import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/blog/soul_source_learning_02_http_client_register.html.vue"
const data = JSON.parse("{\"path\":\"/zh/blog/soul_source_learning_02_http_client_register.html\",\"title\":\"Soul网关学习(2-3)Http客户端接入源码解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Soul网关学习(2-3)Http客户端接入源码解析\",\"author\":\"范金鹏\",\"date\":\"2021-01-18T00:00:00.000Z\",\"tag\":[\"Soul\"],\"cover\":\"/assets/img/architecture/soul-framework.png\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Soul网关学习(2-3)Http客户端接入源码解析\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\\\"],\\\"datePublished\\\":\\\"2021-01-18T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"范金鹏\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/soul_source_learning_02_http_client_register.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Soul网关学习(2-3)Http客户端接入源码解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"HTTP 用户接入 Soul 网关注册逻辑分析 1. 注册入口 HTTP 用户接入 Soul 网关时，会调用 soul-admin 一个接口，把需要 Soul 网关管理的接口注册，今天就具体看看到底干了点儿啥。 先看下调用的接口信息如下： 2. springmvc-register 接口逻辑 全局搜索 \\\"springmvc-register\\\"，找到 s...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Soul网关学习(2-3)Http客户端接入源码解析\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"范金鹏\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Soul\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-01-18T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/soul_source_learning_02_http_client_register.html\"}],[\"meta\",{\"name\":\"博客\"}]],\"description\":\"HTTP 用户接入 Soul 网关注册逻辑分析 1. 注册入口 HTTP 用户接入 Soul 网关时，会调用 soul-admin 一个接口，把需要 Soul 网关管理的接口注册，今天就具体看看到底干了点儿啥。 先看下调用的接口信息如下： 2. springmvc-register 接口逻辑 全局搜索 \\\"springmvc-register\\\"，找到 s...\"},\"readingTime\":{\"minutes\":7.3,\"words\":2190},\"filePathRelative\":\"zh/blog/soul_source_learning_02_http_client_register.md\",\"autoDesc\":true}")
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
