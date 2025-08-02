import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_ae6bbef4ac743f440c9b5daf6b1f17ed/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+plugin-catalog@2._41cca97b2ab007ce64f1fdc90e69c7e0/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_ae6bbef4ac743f440c9b5daf6b1f17ed/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

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
