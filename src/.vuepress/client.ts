import { defineClientConfig } from "vuepress/client";

import projects from "./layouts/projects.vue";
import members from "./layouts/members.vue";
import siteLayout from "./layouts/siteLayout.vue";

import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueViewer);
  },
  layouts: {
    members,
    projects,
    siteLayout,
  },
});
