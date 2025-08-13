<script setup lang="ts">
import { useMembersLocale } from "../composables/index.js";
import { onMounted } from "vue";
import { Layout } from "vuepress-theme-hope/client";
import LightRays from "../components/banner/LightRays.vue";
const memberLocale = useMembersLocale();

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
    <div class="members-page">
      <div class="bg-default">
        <div class="member-container">
          <h1 class="title">{{ memberLocale.SLOGAN }}</h1>
          <p class="description">
            {{ memberLocale.DESCRIPTION }}
          </p>
          <div class="button">加入我们</div>
        </div>
        <div class="bg-container">
          <LightRays
            rays-origin="top-center"
            rays-color="#ffff"
            :rays-speed="1.5"
            :light-spread="0.5"
            :ray-length="1"
            :follow-mouse="true"
            :mouse-influence="0"
            :noise-amount="0"
            :distortion="0.05"
            class-name="custom-rays"
          />
        </div>
      </div>
      <div id="wwadsadsorg" style="max-width: 500px"></div>
      <main class="member-main">
        <div class="member-banner">
          <h2 class="title">{{ memberLocale.FUNDER_TITLE }}</h2>
          <div class="founder">
            <img class="photo" src="/assets/img/members/xiaoyu.webp" alt="" />
            <div class="info">
              <div class="name">{{ memberLocale.FOUNDER.name }}</div>
              <div class="role">{{ memberLocale.FOUNDER.role }}</div>
              <div class="desc">{{ memberLocale.FOUNDER.desc }}</div>
            </div>
          </div>
          <template
            v-for="item in memberLocale.MEMBERS_ITEM"
            :key="item.header"
          >
            <h2 class="title" v-if="item.header">{{ item.header }}</h2>
            <ul class="members">
              <li
                class="member"
                v-for="member in item.members"
                :key="member.name"
              >
                <div class="member-left">
                  <img
                    class="photo"
                    :src="member.photo"
                    :alt="member.name + ' photo'"
                  />
                  <div class="slider"></div>
                </div>
                <div class="info">
                  <div class="name">{{ member.name }}</div>
                  <div class="role">{{ member.role }}</div>
                  <div class="desc">{{ member.desc }}</div>
                </div>
              </li>
            </ul>
          </template>
        </div>
      </main>
    </div>
  </layout>
</template>

<style scoped lang="scss">
.members-page {
  min-width: 380px;
  overflow-x: hidden;
  background: linear-gradient(to bottom, #030513, #051555);
  .bg-default {
    position: relative;
    padding-top: var(--navbar-height);
    background-color: #fff0;
    .bg-container {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      top: 0;
    }
  }
}

.member-container {
  height: 422px;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;

  @media (min-width: 960px) {
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: 44px;
    font-weight: 900;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  .description {
    max-width: 700px;
    color: #61687c;
    font-size: 16px;
    text-align: center;
    line-height: 28px;
  }
  /* From Uiverse.io by KhaledMatalkah */
  @keyframes glowing-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  .button {
    position: relative;
    display: inline-block;
    background: linear-gradient(to right, #71b9fe, #0632b8);
    border: none;
    border-radius: 25px;
    color: white;
    padding: 10px 20px;
    font-size: 18px;
    text-transform: uppercase;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    animation: glowing-pulse 2s infinite;
    z-index: 2;
    margin-top: 25px;
    cursor: pointer;
  }

  .button::before {
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

  .button:hover::before {
    opacity: 1;
  }
}

.member-main {
  padding: 30px 10vw;

  .member-banner {
    font-weight: bold;

    .title {
      display: flex;
      justify-content: center;
      border: unset;
      font-size: 32px;
      color: #fff;
      font-weight: 600;
    }

    .founder {
      display: flex;
      margin-bottom: 48px;
      border-radius: 10px;
      background-image: linear-gradient(
        106deg,
        rgba(29, 32, 51, 0.7882352941),
        rgba(29, 32, 51, 0.7882352941)
      );
      .photo {
        height: 36vw;
        max-height: 240px;
        border-radius: 10px 0 0 10px;
        background: #096dd96e;
      }

      .info {
        margin-left: 32px;
        padding: 32px;
        border-radius: 0 10px 10px 0;
        box-sizing: border-box;
        .name {
          color: #2e64fe;
          font-size: 20px;
        }

        .role {
          font-size: 18px;
          margin-top: 8px;
        }

        .desc {
          font-size: 16px;
          margin-top: 8px;
          line-height: 24px;
          font-weight: 400;
        }
      }
    }

    .members {
      list-style: none;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .member {
        display: flex;
        gap: 20px;
        padding: 0 15px 15px 0;
        background-color: none;

        @media (max-width: 550px) {
          flex-direction: column;
        }

        .photo {
          width: 100%;
          border-radius: 4px;
          background: #096dd96e;
        }

        .info {
          font-size: 14px;
          font-weight: 400;
          margin: 10px 0;
        }

        .name {
          font-size: 20px;
          color: #2e64fe;
          font-weight: 500;
        }

        .role {
          color: #61687c;
          font-size: 14px;
        }

        .desc {
          font-size: 13px;
          opacity: 0;
          visibility: hidden;
          max-height: 0;
          overflow: hidden;
          transition:
            opacity 0.5s ease-in-out,
            visibility 0.5s ease-in-out,
            max-height 0.5s ease-in-out;
        }

        .member-left {
          width: 160px;
          height: 160px;
          flex-shrink: 0;
          position: relative;
        }
        .slider {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 32px;
          height: 32px;
          border-radius: 5%;
          background-color: #2e64fe;
          transition:
            top 0.7s ease,
            right 0.7s ease;
        }

        &:hover {
          // background-color: #f0f3f9;
          border-radius: 4px;
          .desc {
            opacity: 1;
            visibility: visible;
            max-height: 250px;
          }

          .slider {
            top: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
