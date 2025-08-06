import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_07d63941902df585edab46da288f05e9/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+plugin-catalog@2._05114881720c9d64e6be494cf6fa34b8/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_4f1e5edff9ece87815e2be66b09b269e/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_4f1e5edff9ece87815e2be66b09b269e/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_4f1e5edff9ece87815e2be66b09b269e/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_07d63941902df585edab46da288f05e9/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
