import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("GiteeRepo", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/GiteeRepo.vue")))
    
      app.component("GitHubStars", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/GitHubStars.vue")))
    
      app.component("HomePage", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/HomePage.vue")))
    
      app.component("HonorComp", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/HonorComp.vue")))
    
      app.component("LogoAnimation", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/LogoAnimation.vue")))
    
      app.component("PageFooter", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/PageFooter.vue")))
    
      app.component("ProjectsPage", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/ProjectsPage.vue")))
    
      app.component("SiteSection", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/SiteSection.vue")))
  },
}
