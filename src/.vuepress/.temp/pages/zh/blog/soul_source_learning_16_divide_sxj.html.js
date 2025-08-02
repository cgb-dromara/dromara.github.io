import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/blog/soul_source_learning_16_divide_sxj.html.vue"
const data = JSON.parse("{\"path\":\"/zh/blog/soul_source_learning_16_divide_sxj.html\",\"title\":\"Soul网关学习divide插件源码解读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Soul网关学习divide插件源码解读\",\"author\":\"沈祥俊\",\"tag\":[\"Soul\"],\"date\":\"2021-02-01T00:00:00.000Z\",\"cover\":\"/assets/img/activite/soul-xmind.png\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Soul网关学习divide插件源码解读\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/activite/soul-xmind.png\\\"],\\\"datePublished\\\":\\\"2021-02-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"沈祥俊\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/soul_source_learning_16_divide_sxj.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Soul网关学习divide插件源码解读\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"插件概述 插件定位 divide 插件是一个 http 正向代理插件，所有的 http 请求都由该插件进行负载均衡处理（具体的负载均衡策略在规则中指定）。 生效时机 当请求头的 rpcType = http 且插件开启时，它将根据请求参数匹配规则，最终交由下游插件进行响应式代理调用。 插件处理流程 1）先回顾下请求处理类插件的通用流程（Abstract...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/activite/soul-xmind.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/activite/soul-xmind.png\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Soul网关学习divide插件源码解读\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"沈祥俊\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Soul\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-02-01T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/soul_source_learning_16_divide_sxj.html\"}],[\"meta\",{\"name\":\"博客\"}]],\"description\":\"插件概述 插件定位 divide 插件是一个 http 正向代理插件，所有的 http 请求都由该插件进行负载均衡处理（具体的负载均衡策略在规则中指定）。 生效时机 当请求头的 rpcType = http 且插件开启时，它将根据请求参数匹配规则，最终交由下游插件进行响应式代理调用。 插件处理流程 1）先回顾下请求处理类插件的通用流程（Abstract...\"},\"readingTime\":{\"minutes\":6.29,\"words\":1886},\"filePathRelative\":\"zh/blog/soul_source_learning_16_divide_sxj.md\",\"autoDesc\":true}")
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
