<script setup lang="ts">
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

              <ul class="button-container">
                <li class="icon-content">
                  <a
                    :href="obj.website"
                    target="_blank"
                    aria-label="Start"
                    data-social="start"
                  >
                    <div class="filled"></div>
                    <svg
                      t="1755440213823"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6550"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M305.031716 195.566094c0-15.954367 10.718109-21.556968 23.818475-12.45159l456.459033 317.265854c13.100366 9.105379 13.100366 24.00574 0 33.111119l-456.459033 317.263807c-13.100366 9.105379-23.818475 3.502777-23.818475-12.45159L305.031716 195.566094z"
                        fill="currentColor"
                        p-id="6551"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">{{ projectLocale.START_UP }}</div>
                </li>

                <li
                  v-if="!noGiteeProjects.includes(obj.name)"
                  class="icon-content"
                >
                  <a
                    target="_blank"
                    :href="`https://gitee.com/dromara/${obj.name}`"
                    aria-label="Gitee"
                    data-social="gitee"
                  >
                    <div class="filled"></div>
                    <svg
                      t="1755441516642"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7574"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199Q79 221 150 150T313 40q95-40 199-40t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m259-569H480q-10 0-17.5 7.5T455 480v64q0 10 7.5 17.5T480 569h177q11 0 18.5 7.5T683 594v13q0 31-22.5 53.5T607 683H367q-11 0-18.5-7.5T341 657V417q0-31 22.5-53.5T417 341h354q11 0 18-7t7-18v-63q0-11-7-18t-18-7H417q-38 0-72.5 14T283 283q-27 27-41 61.5T228 417v354q0 11 7 18t18 7h373q46 0 85.5-22.5t62-62Q796 672 796 626V480q0-10-7-17.5t-18-7.5z"
                        p-id="7575"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">Gitee</div>
                </li>
                <li
                  v-if="!noGithubProjects.includes(obj.name)"
                  class="icon-content"
                >
                  <a
                    target="_blank"
                    :href="`https://github.com/dromara/${obj.name}`"
                    aria-label="GitHub"
                    data-social="github"
                  >
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">GitHub</div>
                </li>
                <li class="icon-content">
                  <a href="#" aria-label="Star" data-social="star">
                    <div class="filled"></div>
                    <svg
                      t="1755442961165"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="8618"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M536.9344 860.3136c-26.8288-14.7968-70.5024-14.6944-97.1776 0L251.2384 964.096c-53.6064 29.5424-88.7808 2.56-78.5408-59.8016l35.9936-219.8016c5.12-31.3344-8.448-74.752-30.0544-96.768L26.1632 431.9744c-43.4176-44.288-29.696-87.6544 30.0032-96.768l210.7392-32c30.0032-4.608 65.28-31.5392 78.6432-59.8528L439.808 43.4176c26.8288-56.8832 70.4512-56.6784 97.1264 0l94.208 199.9872c13.4656 28.4672 48.896 55.296 78.6944 59.8528l210.7392 32.0512c60.0064 9.1136 73.216 52.5824 30.0544 96.7168l-152.5248 155.648c-21.7088 22.1696-35.1232 65.6896-30.0544 96.8192l35.9936 219.8016c10.24 62.5664-25.1392 89.1904-78.5408 59.8016l-188.5696-103.7824z"
                        fill="currentColor"
                        p-id="8619"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">star</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </layout>
</template>

<style scoped lang="scss">
.projects-page {
  min-width: 380px;
  background: linear-gradient(to bottom, #030513, #030516);
  @media (min-width: 1440px) {
  }
  .bg-default {
    padding-top: var(--navbar-height);

    background: linear-gradient(to bottom, #030513, #030516);
  }
}

.project-container {
  min-height: 422px;
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
  }

  .project-group {
    padding: 50px 0 30px;
  }
  .text-container {
    margin-top: 30px;
    transition: all 0.4s ease;
    .project-content {
      font-weight: 700;
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
    border-radius: 30px;
    background: #ffffff0f;
    height: 420px;
    text-align: center;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 30px;
      box-shadow: 0 0 20px #0632b8;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    &:hover::before {
      opacity: 1;
    }
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
        margin-top: 5px;
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
    ul {
      list-style: none;
    }

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 15px;
      padding-left: 0px;
      .icon-content {
        margin: 0 10px;
        position: relative;

        .tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          opacity: 0;
          visibility: hidden;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        &:hover .tooltip {
          opacity: 1;
          visibility: visible;
          top: -50px;
        }

        a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          color: #e8e8e9;
          border: 2px solid #ffffff30;
          transition: all 0.3s ease-in-out;

          &:hover {
            box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
            color: white;
          }

          svg {
            position: relative;
            z-index: 1;
            width: 23px;
          }

          .filled {
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background-color: #000;
            transition: all 0.3s ease-in-out;
          }

          &:hover .filled {
            height: 100%;
          }

          // 社交平台特定样式
          &[data-social="start"] {
            .filled,
            ~ .tooltip {
              background-color: #2274de;
            }
          }

          &[data-social="github"] {
            .filled,
            ~ .tooltip {
              background-color: #fff;
              color: #000;
            }
            &:hover {
              color: #000;
            }
          }

          &[data-social="star"] {
            .filled,
            ~ .tooltip {
              background-color: #daa520;
            }
          }

          &[data-social="gitee"] {
            .filled,
            ~ .tooltip {
              background-color: #ff0000;
            }
          }
        }
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
