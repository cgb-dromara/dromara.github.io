import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/zh/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/projects/\",\"title\":\"项目\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"layout\":\"projects\"},\"readingTime\":{\"minutes\":0.17,\"words\":52},\"filePathRelative\":\"zh/projects/README.md\"}")
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
