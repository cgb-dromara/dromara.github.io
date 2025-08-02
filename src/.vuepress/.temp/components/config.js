import { hasGlobalComponent } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_76ed21532a9bd23aaa502f86fa1877bd/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-plugin-components@_f1ce8ba6821affd6c4e43d7953b08004/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_76ed21532a9bd23aaa502f86fa1877bd/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
