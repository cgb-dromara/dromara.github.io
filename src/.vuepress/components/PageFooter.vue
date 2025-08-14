<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import { type ThemeHomePageFrontmatter } from "vuepress-theme-hope/client";
import GlareHover from "./GlareHover.vue";

import { useFooterLocale } from "../composables/index.js";
let webCn: boolean = false;
const frontmatter = usePageFrontmatter<ThemeHomePageFrontmatter>();
const footerLocale = useFooterLocale();

onMounted(() => {
  webCn = document.location.host.includes("dromara.org.cn");
  const element = document.getElementById("footer-bt");
  if (element) {
    element.innerText = webCn ? " | 京ICP备2024091971号" : "";
  }
});
const linkOption = computed(() => [
  {
    title: footerLocale.value.RESOURCES,
    links: [
      { name: "Github", href: "https://github.com/dromara" },
      { name: "Gitee", href: "https://gitee.com/dromara" },
    ],
  },
  {
    title: footerLocale.value.INVOLVED,
    links: [
      {
        name: footerLocale.value.BLOG,
        href: "https://dromara.org/zh/blog",
      },
      {
        name: footerLocale.value.About,
        href: "https://dromara.org/zh/about",
      },
    ],
  },
  // 删除页脚的Document
  // {
  //   title: footerLocale.value.DOCUMENT,
  //   links: [
  //     {
  //       name: "Hmily",
  //       href: "https://gitee.com/dromara/hmily"
  //     },
  //     {
  //       name: "Raincat",
  //       href: "https://gitee.com/dromara/Raincat"
  //     },
  //     {
  //       name: "Myth",
  //       href: "https://gitee.com/dromara/myth"
  //     }
  //   ]
  // }
]);

const qrcodeOption = computed(() => [
  { title: footerLocale.value.DONATE, name: "donate" },
  { title: footerLocale.value.WECHAT, name: "qrcode_wx" },
  { title: footerLocale.value.KNOWLEDGE_PLANET, name: "qrcode_zsxq" },
  { title: footerLocale.value.Email, name: "Email" },
]);
</script>

<template>
  <footer class="page-footer">
    <div v-if="frontmatter.home" class="container">
      <div class="links">
        <template v-for="item in linkOption" :key="item.title">
          <div class="cate">
            <h2 class="cate-title">{{ item.title }}</h2>
            <a
              class="link"
              v-for="link in item.links"
              :key="link.name"
              :href="link.href"
              >{{ link.name }}</a
            >
          </div>
        </template>
      </div>
      <div class="qrcode">
        <div v-for="item in qrcodeOption" :key="item.name">
          <!-- 支持社区 -->
          <a
            v-if="item.title === footerLocale.DONATE"
            class="qrcode-desc"
            href="//assets/img/donate.webp"
            target="_blank"
          >
            <img class="qrcode_img" src="../public/assets/img/donation.webp" />
            <GlareHover
              width="60px"
              height="60px"
              background="#171824"
              border-radius="13px"
              glare-color="#ffffff"
              :glare-opacity="0.3"
              :glare-size="300"
              :transition-duration="800"
              :play-once="false"
              class="icon-box"
            >
              <div class="text-center text-5xl font-black text-white">
                <svg
                  t="1755005905238"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                >
                  <path
                    d="M84.924461 441.197617a42.664889 42.664889 0 0 0-42.451564-43.006208c-23.423024 0-42.4089 19.412524-42.4089 43.006208v539.710845C0.021332 1004.758135 18.921878 1023.957335 42.686221 1023.957335c23.551019 0 42.664889-19.412524 42.622224-43.006208l-0.426648-539.710845zM256.863964 938.627557h569.021624c6.911712 0 18.132578-9.087621 19.497854-15.786009l90.065581-431.683346c8.106329-38.910379-12.330153-63.997333-52.435149-63.912004h-20.137827c-19.28453 0.08533-38.825049 0.08533-57.170951 0.08533-30.846715 0-54.184409-0.127995-67.410525-0.298654l-124.240157-1.877255 46.33407-115.28053c14.378068-35.795842 22.484396-73.170285 22.484396-110.075414 0-80.423316-33.875922-114.512562-70.055747-114.085913-27.689513 0.341319-43.944836 15.914004-43.731512 58.664222-4.778468 171.086205-131.919837 323.570518-312.221657 338.4179V938.627557zM739.574518 341.703096l90.662889 0.298654c28.7988 0 52.520478-0.08533 52.520478-0.08533 94.460064-0.127995 155.42819 74.748885 136.228991 166.691721l-90.022916 431.683347C919.236365 986.497563 873.20095 1023.957335 825.842923 1023.957335H214.497729a43.091538 43.091538 0 0 1-42.963543-42.963543V441.581601c0-23.721678 19.11387-42.963543 42.750219-42.963543h13.652764c160.889296 0 252.576143-137.423607 255.861339-256.629308-0.597308-97.531936 64.637307-140.879463 127.994667-141.647431 63.400025-0.767968 156.409483 50.771218 156.409483 199.415691 0 19.625849-1.706596 38.611725-4.693138 56.744302l-23.935002 85.159119z"
                    fill="#ffffff"
                    p-id="3791"
                  ></path>
                </svg>
              </div>
            </GlareHover>

            <p class="qrcode-desc">{{ item.title }}</p>
          </a>
          <!-- 微信 -->
          <a
            v-if="item.title === footerLocale.WECHAT"
            class="qrcode-desc"
            href="//assets/img/qrcode_wx.webp"
            target="_blank"
          >
            <img class="qrcode_img" src="../public/assets/img/qrcode_wx.webp" />
            <GlareHover
              width="60px"
              height="60px"
              background="#171824"
              border-radius="13px"
              glare-color="#ffffff"
              :glare-opacity="0.3"
              :glare-size="300"
              :transition-duration="800"
              :play-once="false"
              class="icon-box"
            >
              <div class="text-center text-5xl font-black text-white">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.8 18.003 32.5 18C25.732 18 20 22.798 20 29c0 1.007.151 1.976.433 2.894A17.64 17.64 0 0 1 18.5 32c-1.809 0-3.54-.274-5.137-.775-.394-.123-1.828.696-3.039 1.389-.927.53-1.724.986-1.824.886-.094-.094.169-.718.476-1.448.446-1.06.986-2.346.664-2.552C6.21 27.305 4 23.866 4 20c0-6.627 6.492-12 14.5-12 7.186 0 13.151 4.326 14.3 10.003ZM16 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44 29c0 3.362-1.908 6.336-4.833 8.149-.13.08.169.858.446 1.583.237.618.459 1.196.387 1.268-.075.075-.802-.327-1.571-.752-.829-.458-1.706-.942-1.871-.888-1.262.413-2.63.64-4.058.64C26.149 39 21 34.523 21 29s5.149-10 11.5-10S44 23.477 44 29Zm-6-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28.5 27a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </GlareHover>

            <p class="qrcode-desc">{{ item.title }}</p>
          </a>
          <!-- 知识星球 -->
          <a
            v-if="item.title === footerLocale.KNOWLEDGE_PLANET"
            class="qrcode-desc"
            href="https://wx.zsxq.com/group/51128441181284"
            target="_blank"
          >
            <img
              class="qrcode_img"
              src="../public/assets/img/qrcode_zsxq.webp"
            />
            <GlareHover
              width="60px"
              height="60px"
              background="#171824"
              border-radius="13px"
              glare-color="#ffffff"
              :glare-opacity="0.3"
              :glare-size="300"
              :transition-duration="800"
              :play-once="false"
              class="icon-box"
            >
              <div class="text-center text-5xl font-black text-white">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39 25c0 8.837-7.163 16-16 16S7 33.837 7 25 14.163 9 23 9"
                    stroke="#fff"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <circle cx="34.5" cy="13.5" r="4.5" fill="#fff" />
                </svg>
              </div>
            </GlareHover>

            <p class="qrcode-desc">{{ item.title }}</p>
          </a>
          <!-- email -->
          <a
            v-if="item.title === footerLocale.Email"
            class="qrcode-desc"
            href="mailto:xiaoyu@dromara.org"
          >
            <p class="mail">xiaoyu@dromara.org</p>
            <GlareHover
              width="60px"
              height="60px"
              background="#171824"
              border-radius="13px"
              glare-color="#ffffff"
              :glare-opacity="0.3"
              :glare-size="300"
              :transition-duration="800"
              :play-once="false"
              class="icon-box"
            >
              <div class="text-center text-5xl font-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  t="1722434866328"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  p-id="5233"
                  width="48"
                  height="48"
                  fill="#fff"
                >
                  <path
                    d="M869.12 832H154.88A74.88 74.88 0 0 1 80 757.12V266.88A74.88 74.88 0 0 1 154.88 192h714.24A74.88 74.88 0 0 1 944 266.88v490.24A74.88 74.88 0 0 1 869.12 832zM154.88 256A10.88 10.88 0 0 0 144 266.88v490.24A10.88 10.88 0 0 0 154.88 768h714.24A10.88 10.88 0 0 0 880 757.12V266.88A10.88 10.88 0 0 0 869.12 256z"
                    p-id="5234"
                  />
                  <path
                    d="M880 241.28l-386.24 278.4L144 249.92v80.96l329.6 254.08a32 32 0 0 0 19.52 6.72A32 32 0 0 0 512 585.6L880 320z"
                    p-id="5235"
                  />
                </svg>
              </div>
            </GlareHover>

            <p class="qrcode-desc">{{ item.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright &copy;2018-{{ new Date().getFullYear() }}&nbsp;<a href="/"
          >@dromara. org. All Rights Reserved</a
        ><a id="footer-bt" href="" target="_blank"></a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  background-color: #030412;

  a {
    color: inherit;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 32px 24px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-wrap: wrap;

    > .cate {
      margin-right: 70px;
    }
  }

  .cate-title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 12px 0;
  }

  .link {
    display: block;
    margin-right: 24px;
    margin-bottom: 10px;
    color: #e2e5ea;
    font-size: 14px;

    @media (max-width: 568px) {
      display: inline-block;
    }
  }

  a:hover .qrcode_img,
  a:hover .mail {
    display: block;
    z-index: 10;
  }

  .qrcode_img,
  .mail {
    position: absolute;
    z-index: 1;
    bottom: 80px;
    width: 180px;
    height: auto;
    display: none;
    transform: translate(-45px, -90px);
    color: #fff;
  }
  .icon-box {
    position: relative;
    width: 60px;
    height: 60px;
    background-color: #171824;
    border: 1px solid#424351;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .qrcode {
    position: relative;
    text-align: center;
    padding-right: 100px;
    border-right: none;
    margin-right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 719px) {
      flex-direction: column;
    }

    > div {
      width: 100px;
    }

    .qrcode-img {
      width: 100%;
    }

    .qrcode-desc {
      text-align: center;
      padding-right: 8px;
      padding-left: 8px;
      margin: 8px 0 16px;
      font-size: 14px;
      color: #fff;
    }
  }

  .copyright {
    padding: 12px;

    > p {
      margin: 12px;
      text-align: center;
      font-size: 12px;
      color: #d5d7dc;
    }
  }
}
</style>
