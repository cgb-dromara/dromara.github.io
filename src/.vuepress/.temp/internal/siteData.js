export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"http-equiv\":\"Cache-Control\",\"content\":\"max-age=3600, must-revalidate\"}],[\"meta\",{\"name\":\"description\",\"content\":\"Non-profit organization where open-source enthusiasts gather.\"}],[\"script\",{\"src\":\"https://cdn.wwads.cn/js/makemoney.js\",\"async\":true}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"description\":\"A official website for dromara\"},\"/zh/\":{\"lang\":\"zh-CN\",\"description\":\"dromara的官网文档\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
