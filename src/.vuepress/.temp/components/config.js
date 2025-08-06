import { hasGlobalComponent } from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_4f1e5edff9ece87815e2be66b09b269e/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/vuepress-plugin-components@_7838e5f01e062a0f2985604b85cbc487/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "E:/code/newstudy/new/dromara.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_4f1e5edff9ece87815e2be66b09b269e/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
