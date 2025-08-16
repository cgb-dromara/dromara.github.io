import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("GiteeRepo", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/GiteeRepo.vue")))
    
      app.component("GitHubStars", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/GitHubStars.vue")))
    
      app.component("GlareHover", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/GlareHover.vue")))
    
      app.component("HomePage", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/HomePage.vue")))
    
      app.component("HonorComp", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/HonorComp.vue")))
    
      app.component("LogoAnimation", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/LogoAnimation.vue")))
    
      app.component("PageFooter", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/PageFooter.vue")))
    
      app.component("ProjectsPage", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/ProjectsPage.vue")))
    
      app.component("SiteSection", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/SiteSection.vue")))
    
      app.component("banner-Galaxy", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/banner/Galaxy.vue")))
    
      app.component("banner-LightRays", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/banner/LightRays.vue")))
    
      app.component("hidden-text-TextEllipsisHover", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/hidden-text/TextEllipsisHover.vue")))
    
      app.component("hover-light-HoverLight", defineAsyncComponent(() => import("E:/code/newstudy/new/dromara.github.io/src/.vuepress/components/hover-light/HoverLight.vue")))
  },
}
