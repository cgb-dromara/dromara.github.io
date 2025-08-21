<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import SiteSection from "../components/SiteSection.vue";
import { usePageFrontmatter } from "vuepress/client";
import type { ThemeHomePageFrontmatter } from "vuepress-theme-hope";

const frontmatter = usePageFrontmatter<ThemeHomePageFrontmatter>();
</script>

<template>
  <Layout>
    <template #content>
      <div class="theme-hope-content">
        <SiteSection :title="frontmatter.title" />
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="scss">
.theme-hope-content {
  margin: 0;
  padding: 0;
  height: 100%;
  max-width: none;
  position: relative;
  z-index: 1;
  top: -161px;
}
</style>
