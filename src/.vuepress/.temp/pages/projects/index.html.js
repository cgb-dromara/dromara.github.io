import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"layout\":\"projects\"},\"readingTime\":{\"minutes\":0.17,\"words\":51},\"filePathRelative\":\"projects/README.md\"}")
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
