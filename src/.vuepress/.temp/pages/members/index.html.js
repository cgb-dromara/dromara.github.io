import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/members/index.html.vue"
const data = JSON.parse("{\"path\":\"/members/\",\"title\":\"Members\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Members\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Members\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/members/\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Members\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/members/\"}]]},\"readingTime\":{\"minutes\":0.16,\"words\":49},\"filePathRelative\":\"members/README.md\"}")
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
