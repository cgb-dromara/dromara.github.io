import comp from "E:/code/newstudy/new/dromara.github.io/src/.vuepress/.temp/pages/members/index.html.vue"
const data = JSON.parse("{\"path\":\"/members/\",\"title\":\"Members\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Members\",\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false},\"readingTime\":{\"minutes\":0.16,\"words\":49},\"filePathRelative\":\"members/README.md\"}")
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
