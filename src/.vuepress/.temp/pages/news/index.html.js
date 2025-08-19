import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/news/index.html.vue"
const data = JSON.parse("{\"path\":\"/news/\",\"title\":\"News\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"News\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"layout\":\"siteLayout\"},\"readingTime\":{\"minutes\":0.24,\"words\":73},\"filePathRelative\":\"news/README.md\"}")
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
