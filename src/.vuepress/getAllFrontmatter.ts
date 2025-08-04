import { type PluginObject } from "vuepress";

// .vuepress/getAllFrontmatter.js
export const getAllFrontmatter: PluginObject = {
  name: "get-all-frontmatter",

  onInitialized: (app) => {
    // 在 app.siteData 上添加 frontmatter 数组
    app.siteData.frontmatter = app.pages.map(page => page.frontmatter);
  },

  // 可选：在页面更新时同步更新 frontmatter 数据
  onPrepared: (app) => {
    // 重新收集所有页面的 frontmatter
    app.siteData.frontmatter = app.pages.map(page => page.frontmatter);
  }
};