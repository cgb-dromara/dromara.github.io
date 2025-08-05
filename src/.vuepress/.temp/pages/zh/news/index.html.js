import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/news/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/news/\",\"title\":\"新闻\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新闻\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false},\"readingTime\":{\"minutes\":0.26,\"words\":77},\"filePathRelative\":\"zh/news/README.md\"}")
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
