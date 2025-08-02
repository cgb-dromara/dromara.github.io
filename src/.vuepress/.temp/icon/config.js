import { hasGlobalComponent } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vueuse+core@13.6.0_vue@3.5.18/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_8116c128475c1f004dd1a7f30741a6b4/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "fontawesome",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
