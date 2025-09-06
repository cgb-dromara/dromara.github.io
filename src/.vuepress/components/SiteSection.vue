<script setup lang="ts">
import { ref, reactive, watchEffect, computed, onMounted } from "vue";
import {
  type ActivityOption,
  type GroupedSectionPage,
  type GroupedSectionPages,
  enActivityOption,
  enBlogOption,
  enNewsOption,
  zhActivityOption,
  zhBlogOption,
  zhNewsOption,
} from "../composables/index.js";
import HoverLight from "./hover-light/HoverLight.vue";
import { useClientData } from "vuepress/client";
const { siteData } = useClientData();

const allPagesFrontmatter = (siteData as any).value.frontmatter;

const props = defineProps({ title: String });

let option: ActivityOption = reactive({
  DESC: "",
});

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

const selectedTags = ref<string[]>([]);
let sectionDetail: GroupedSectionPage[] = reactive([]);

const options = {
  News: enNewsOption,
  新闻: zhNewsOption,
  Activity: enActivityOption,
  活动: zhActivityOption,
  Blog: enBlogOption,
  博客: zhBlogOption,
};
// 初始化分组对象
const groupedPages: GroupedSectionPages = {
  新闻: [],
  News: [],
  博客: [],
  Blog: [],
  活动: [],
  Activity: [],
};

for (const frontmatter of allPagesFrontmatter) {
  if (frontmatter?.head.length > 0) {
    const headName = frontmatter.head[frontmatter.head.length - 1][1].name; // 拿到每篇md文章frontmatter下meta的name属性
    // 如果是新闻、博客或活动，则添加到相应的数组中
    if (groupedPages[headName] !== undefined) {
      groupedPages[headName].push({
        cover: frontmatter.cover,
        tag: frontmatter.tag,
        title: frontmatter.title,
        url:
          extractPathFromURL(
            frontmatter.head
              .flat()
              .find(
                (item: { property: string; content: string }) =>
                  item.property === "og:url",
              ).content,
          ) ?? "", // head的一个数组对象中包含url
        author: frontmatter.author,
        date: formatDate(frontmatter.date),
      });
    }
  }
}
for (const key in groupedPages) {
  groupedPages[key].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

type LangMapping = Record<string, "英文" | "中文">;

const TAGS = [
  "fastRequest",
  "HertzBeat",
  "Dante-Cloud",
  "LiteFlow",
  "MaxKey",
  "hmily",
  "Soul",
  "EasyAI",
  "TestHub",
  "Skyeye",
];

const LANG_MAPPING: LangMapping = {
  News: "英文",
  Activity: "英文",
  Blog: "英文",
  新闻: "中文",
  活动: "中文",
  博客: "中文",
};

const langMapping = computed(() => LANG_MAPPING[props.title ?? ""] ?? "中文");

const filteredSectionDetail = computed(() => {
  // 如果没有选中任何标签，显示全部内容
  if (selectedTags.value.length === 0) {
    return sectionDetail;
  }
  // 如果有选中的标签，筛选包含任一选中标签的内容
  return sectionDetail.filter((obj: GroupedSectionPage) =>
    selectedTags.value.some((tag) => obj.tag?.includes(tag)),
  );
});

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    selectedTags.value.splice(index, 1);
  } else {
    selectedTags.value.push(tag);
  }
};

watchEffect(() => {
  if (props.title !== undefined) {
    option = options[props.title as keyof typeof options];
    sectionDetail = groupedPages[props.title];
  }
});

function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// 从框架提供的url中拿到跳转路径
function extractPathFromURL(url: string): string | null {
  const match = url.match(/\/([^/]+\.html)$/);

  return match?.[1] ?? null;
}

// 跳转到博客详情
function goBlogDetail(url: string): void {
  location.href = url;
}
</script>

<template>
  <div class="news-activity-blog-section">
    <div class="bg-default">
      <div class="news-activity-blog-container">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ option.DESC }}</p>
      </div>
    </div>
    <div id="wwadsadsorg" style="max-width: 500px"></div>
  </div>
  <main class="news-activity-blog-main">
    <div class="tag-container">
      <h2 class="tag">{{ langMapping === "中文" ? "标签:" : "Tag:" }}</h2>

      <!-- 修改后：复选框结构 -->
      <div class="checkboxes">
        <div v-for="item in TAGS" :key="item" class="checkbox-item">
          <input
            type="checkbox"
            :id="item"
            :value="item"
            :checked="selectedTags.includes(item)"
            @change="toggleTag(item)"
            class="checkbox-input"
          />
          <label :for="item" class="checkbox-label">
            {{ item }}
          </label>
        </div>
      </div>
    </div>

    <template v-if="filteredSectionDetail.length">
      <div class="cards">
        <HoverLight
          v-for="obj in filteredSectionDetail"
          :key="obj.title"
          class="card"
          @click="goBlogDetail(obj.url)"
        >
          <div class="picture-container">
            <img class="cover" :src="obj.cover" :alt="obj.title" />
          </div>
          <div class="content-container">
            <a class="title">{{ obj.title }}</a>
            <div class="author-info">
              <div class="author-name">
                <svg
                  t="1755742850209"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9598"
                  width="16"
                  height="16"
                >
                  <path
                    d="M588 855.4H436c-64.5 0-125.5 0-169.8-6.8-21.6-3.3-87.3-13.4-87.3-67.2v-14.9c0-139.7 115.4-253.3 257.2-253.3h152c141.8 0 257.2 113.6 257.2 253.3v14.9c0 52.6-65.7 63-87.2 66.5-44 7-103 7.5-170.1 7.5zM436 556.5c-117.9 0-213.9 94.2-213.9 210v14.9c0 13.7 27.5 20.8 50.6 24.4 41.1 6.3 100.4 6.3 163.2 6.3h152c65.2 0 122.5-0.5 163.1-7 15.3-2.4 50.7-9.6 50.7-23.7v-14.9c0-115.8-96-210-213.9-210H436z m75.4-83.9c-112.5 0-204-90.2-204-201s91.5-201 204-201 204 90.2 204 201-91.5 201-204 201z m0-358.7c-88.6 0-160.7 70.7-160.7 157.7 0 87 72.1 157.7 160.7 157.7s160.7-70.7 160.7-157.7c0-87-72.1-157.7-160.7-157.7z"
                    p-id="9599"
                    fill="#ffffff"
                  ></path>
                </svg>
                {{ obj.author }}
              </div>
              <div class="time">
                <svg
                  t="1755743737723"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10752"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
                    fill="#ffffff"
                    p-id="10753"
                  ></path>
                  <path
                    d="M718.367347 538.122449h-208.979592c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h208.979592c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z"
                    fill="#ffffff"
                    p-id="10754"
                  ></path>
                  <path
                    d="M509.387755 538.122449c-11.493878 0-20.897959-9.404082-20.897959-20.897959V256c0-11.493878 9.404082-20.897959 20.897959-20.897959s20.897959 9.404082 20.897959 20.897959v261.22449c0 11.493878-9.404082 20.897959-20.897959 20.897959z"
                    fill="#ffffff"
                    p-id="10755"
                  ></path>
                </svg>
                {{ obj.date }}
              </div>
              <div class="tag-items">
                <div v-for="tag in obj.tag" :key="tag" class="tag-item">
                  #{{ tag }}
                </div>
              </div>
            </div>
          </div>
        </HoverLight>
      </div>
    </template>
    <div v-else class="no-data" style="">
      {{
        langMapping === "中文"
          ? "这是一个待开发的领域，欢迎加入我们共同创造！"
          : "This is a field that awaits development, welcome to join us and innovate!"
      }}
    </div>
  </main>
</template>

<style scoped lang="scss">
.news-activity-blog-section {
  // padding-top: var(--navbar-height);
  min-width: 320px;
  background: var(--vp-c-bg);
  @media (min-width: 1440px) {
    padding-left: 16rem;
  }
}

.news-activity-blog-container {
  height: 422px;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  // background: linear-gradient(to bottom, #030513, #030924);

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
  }

  .description {
    max-width: 700px;
    text-align: center;
    color: #61687c;
    font-size: 16px;
    line-height: 28px;
  }
}

.news-activity-blog-main {
  padding: 80px 2vw;
  padding-top: 0;
  padding-right: 0;
  // background: var(--vp-c-bg);
  // background: linear-gradient(to bottom, #040a27, #041149);

  @media (min-width: 1440px) {
    padding-left: 16rem;
  }
  .tag-container {
    display: flex;
    border-radius: 8px;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding: 15px;
    flex-wrap: wrap;
    margin-bottom: 36px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    .tag {
      font-size: 20px;
      font-weight: 700;
      border: none;
      margin: 0;
      margin-left: 8px;
      padding: 0;
    }

    .checkboxes {
      display: flex;
      padding-right: 0px;
      align-items: center;
      flex-wrap: wrap;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 10px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .checkbox-input {
      appearance: none;
      -webkit-appearance: none;
      border: 1px solid #9ca3af; /* 默认边框颜色 */
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
      accent-color: #2d74ff;
      &:hover {
        border-color: #2d74ff;
      }
      &:checked {
        background-color: #2d74ff;
        border-color: #2d74ff;
      }
      &:checked::after {
        content: "";
        position: absolute;
        left: 4px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    .checkbox-label {
      color: #4e5969;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      margin: 0;
      &:hover {
        color: #2d74ff;
      }
    }
    .checkbox-item:has(.checkbox-input:checked) {
      .checkbox-label {
        color: #2d74ff;
        font-weight: 500;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 10vw;
    }

    @media (min-width: 840px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .no-data {
    font-size: 22px;
    color: #2c3e50;
    font-weight: bold;
    text-align: center;
    margin: 120px 20px 0;
  }

  .card {
    // padding: 16px;
    display: flex;
    flex-direction: column; /* 垂直方向排列 */
    border-radius: 8px;
    background: var(--vp-c-bg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    // gap: 16px;
    min-width: 0;
    cursor: pointer;
  }
  .picture-container {
    height: 190px;
    overflow: hidden;
    display: flex;
    flex-direction: column; /* 垂直排列：图片在上，文字在下 */
    align-items: center; /* 水平居中 */
    text-align: center;
    background: #fff;
    border-radius: 8px 8px 0 0;
    .cover {
      width: 100%;
      // align-self: stretch;
      border-radius: 8px;
      // object-fit: contain;
      flex: 1;
      // object-fit: cover;
      object-position: center;
    }
  }
  .content-container {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      display: block;
      margin-bottom: 8px;
      &:hover {
        color: #2d74ff;
      }
    }
    .author-info {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      svg {
        vertical-align: middle;
      }
      .tag-items {
        display: flex;
        gap: 10px;
        color: #2d74ff;
        font-size: 17px;
        font-weight: 600;
      }
    }
  }

  .desc {
    color: #61687c;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  .author {
    display: flex;
    gap: 10px;
    height: 72px;
    padding: 13px 16px;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: #f2f4f7;
  }

  .avatar {
    width: 44px;
    border-radius: 12px;
  }
}
</style>
