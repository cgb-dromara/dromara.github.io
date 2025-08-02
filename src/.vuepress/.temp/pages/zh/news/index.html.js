import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/news/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/news/\",\"title\":\"新闻\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新闻\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"新闻\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"新闻\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/news/\"}]]},\"readingTime\":{\"minutes\":0.24,\"words\":72},\"filePathRelative\":\"zh/news/README.md\"}")
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
