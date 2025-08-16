<script setup lang="ts">
import GitHubStars from "../components/GitHubStars.vue";
import { Layout } from "vuepress-theme-hope/client";
import {
  noGiteeProjects,
  noGithubProjects,
  noImageProject,
  useProjectsData,
} from "../composables/index.js";
import { onMounted } from "vue";
import TextEllipsisHover from "../components/hidden-text/TextEllipsisHover.vue";
const { projectLocale, projectItems } = useProjectsData();

const convertToUpperCamelCase = (name: string): string =>
  name
    .replace(/-([a-z])/g, (letter: string) => letter.toUpperCase())
    .replace(/^([a-z])/, (letter: string) => letter.toUpperCase());

let webCn: boolean = false;
onMounted(() => {
  webCn = document.location.host.includes("dromara.org.cn");
  const orgAds = document.getElementById("wwadsadsorg");
  if (orgAds) {
    orgAds.innerHTML = webCn
      ? '<div class="wwads-cn wwads-horizontal" data-id="339" style="max-width:350px"></div>'
      : '<div class="wwads-cn wwads-horizontal" data-id="127" style="max-width: 500px"></div>';
  }
});
</script>

<template>
  <layout>
    <div class="projects-page">
      <div class="bg-default">
        <div class="project-container">
          <h1 class="title">{{ projectLocale.PROJECTS }}</h1>
          <p class="description">
            {{ projectLocale.DESCRIPTION }}
          </p>
        </div>
      </div>
      <div id="wwadsadsorg" style="max-width: 500px"></div>
    </div>
    <main class="project-main">
      <div
        v-for="item in projectItems"
        :key="item.groupName"
        class="project-group"
      >
        <h2 class="group-name">{{ item.groupName }}</h2>
        <div class="project-card">
          <div class="project" v-for="obj in item.projects" :key="obj.name">
            <div class="flex-container">
              <div class="top-container">
                <div class="logo-container">
                  <img
                    v-if="!noImageProject.includes(obj.name)"
                    class="project-title"
                    :src="`/assets/img/logo/${obj.name}.webp`"
                    :alt="obj.name"
                  />
                  <div v-else class="project-title text">
                    {{ convertToUpperCamelCase(obj.name) }}
                  </div>
                </div>
                <div class="text-container">
                  <TextEllipsisHover
                    :text="obj.description"
                    :max-lines="3"
                    class="project-content"
                  />
                  <p v-if="obj.sponsor">
                    {{ projectLocale.PROJECT_SPONSOR }}：{{ obj.sponsor }}
                  </p>
                  <p v-if="obj.date">
                    {{ projectLocale.JOINING_DATE }}：{{ obj.date }}
                  </p>
                </div>
                <p v-html="obj.link" class="badge-img"></p>
              </div>

              <div class="project-buttons">
                <a
                  class="project-button primary"
                  target="_blank"
                  :href="obj.website"
                >
                  {{ projectLocale.START_UP }}
                </a>
                <a
                  v-if="!noGiteeProjects.includes(obj.name)"
                  class="project-button"
                  target="_blank"
                  :href="`https://gitee.com/dromara/${obj.name}`"
                  >Gitee</a
                >
                <a
                  v-if="!noGithubProjects.includes(obj.name)"
                  class="project-button"
                  target="_blank"
                  :href="`https://github.com/dromara/${obj.name}`"
                  >Github</a
                >
                <div class="gitstar">
                  <template v-if="lang == 'zh-CN' || lang == '/zh/'">
                    <a
                      v-if="!noGiteeProjects.includes(obj.name)"
                      :href="`https://gitee.com/dromara/${obj.name}/stargazers`"
                      target="_blank"
                      ><img
                        :src="`https://gitee.com/dromara/${obj.name}/badge/star.svg?theme=gvp`"
                    /></a>
                  </template>
                  <template v-else>
                    <GitHubStars
                      v-if="!noGithubProjects.includes(obj.name)"
                      :project="obj.name"
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </layout>
</template>

<style scoped lang="scss">
.projects-page {
  padding-top: var(--navbar-height);
  min-width: 380px;
  background: linear-gradient(to bottom, #030513, #030516);
  @media (min-width: 1440px) {
  }
  .bg-default {
    background: linear-gradient(to bottom, #030513, #030516);
  }
}

.project-container {
  height: 422px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  @media (min-width: 960px) {
    padding-left: 5rem;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: 44px;
    font-weight: 900;
    text-align: center;
    max-width: 1400px;
  }

  .description {
    max-width: 700px;
    color: #61687c;
    font-size: 16px;
    line-height: 28px;
  }
}

.project-main {
  background-color: #f9fbff;
  padding: 30px 15vw;
  background: linear-gradient(to bottom, #030516, #051454);
  @media (max-width: 1440px) {
    padding: 30px 2vw;
    // padding-left: 16rem;
  }

  .project-group {
    padding: 50px 0 30px;
  }
  .text-container {
    margin: 30px 0;
    transition: all 0.4s ease;
    .project-content {
      font-weight: 700;
      // margin: 8px 0;
    }
    p {
      margin: 0;
    }
  }
  .group-name {
    font-weight: 700;
    margin: 0;
    border: none;
    text-align: center;
    margin-bottom: 50px;
  }

  .project-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: center;

    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    @media (min-width: 1220px) and (max-width: 1439px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .project {
    border: 1px solid #fff3;
    display: flex;
    min-width: 300px;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: #ffffff0f;
    height: 450px;
    text-align: center;
    &:hover .logo-container {
      transform: scale(1.05);
      img {
        transform: scale(1.1);
      }
    }
    &:hover .text-container {
      margin-top: 15px;
    }
    .flex-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .top-container {
        margin-top: 15px;
        justify-items: center;
      }
      .badge-img {
        // text-align: left;
        opacity: 0;
        pointer-events: none;
        max-height: 0;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        margin-bottom: 0;
      }
      &:hover .badge-img {
        opacity: 1;
        pointer-events: auto;
        max-height: 150px;
      }
    }
  }

  .logo-container {
    overflow: hidden;
    height: 100px;
    width: 100px;
    flex-shrink: 0;
    background-image: linear-gradient(142deg, #20262e 2%, #0f141c 99%);
    box-shadow:
      0 2px 2px #3e495f,
      inset 0 2px 3px #0006;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease;
  }

  .project-title {
    width: 100%;
    height: 100%;
    object-fit: contain;

    &.text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
    }
  }

  .project-description {
    margin-top: 16px;
    position: sticky;
    z-index: 1000;
  }

  .hiding-detail {
    min-height: 150px;
    overflow: hidden;
    margin-top: -150px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    position: sticky;
    z-index: -1000;
  }

  .project-buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 16px;

    .project-button {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      color: #2e64fe;
      background-color: #f8fbff;
      border-radius: 4px;
      text-align: center;

      &.primary {
        background-color: #2274de;
        color: #fff;
      }
    }
  }
}
</style>
