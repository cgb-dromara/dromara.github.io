import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { viteBundler } from "@vuepress/bundler-vite";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { getAllFrontmatter } from "./getAllFrontmatter.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",
  head: [
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "max-age=3600, must-revalidate",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "Non-profit organization where open-source enthusiasts gather.",
      },
    ],
    ["script", { src: "https://cdn.wwads.cn/js/makemoney.js", async: true }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      description: "A official website for dromara",
    },
    "/zh/": {
      lang: "zh-CN",
      description: "dromara的官网文档",
    },
  },

  theme: hopeTheme(
    {
      hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
      logo: "/Dlogo.svg",
      repo: "dromara",
      docsDir: "src",

      breadcrumb: false,
      darkmode: "enable",
      editLink: false,

      // 修复：将 icon 改为 plugins.icon.assets
      plugins: {
        icon: {
          assets: "fontawesome-with-brands", // 原 icon 配置迁移到这里
        },
        // 修复：移除 mdEnhance.figure，迁移到顶层 markdown.figure
        // mdEnhance: {
        //   // 保留其他可能的 mdEnhance 配置（如果有）
        // },
        photoSwipe: false,
      },

      // 新增：将 figure 配置迁移到顶层 markdown
      markdown: {
        figure: true, // 原 mdEnhance.figure 迁移到这里
      },

      navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "GiteeRepo", "Repo", "Outlook", "Search"],
      },
      sidebarSorter: ["date-desc"],

      locales: {
        "/": {
          navbar: enNavbar,
          sidebar: false,
        },
        "/zh/": {
          navbar: zhNavbar,
          sidebar: false,
        },
      },
    },
    { custom: true },
  ),

  plugins: [
    // Search
    // searchProPlugin({
    //   indexContent: true
    // }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    getAllFrontmatter,
  ],

  alias: {
    // 新版本存储地址修改 多了一个/home
    "@theme-hope/components/home/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
    "@theme-hope/components/base/PageFooter": path.resolve(
      __dirname,
      "./components/PageFooter.vue",
    ),
    // "@MembersPage": path.resolve(__dirname, "./components/MembersPage.vue"),
    "@ProjectsPage": path.resolve(__dirname, "./components/ProjectsPage.vue"),
    "@HonorComp": path.resolve(__dirname, "./components/HonorComp.vue"),
    "@SiteSection": path.resolve(__dirname, "./components/SiteSection.vue"),
  },

  shouldPrefetch: false,
});
