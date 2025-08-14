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
          <div class="button">{{ memberLocale.BUTTON }}</div>
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
          <h2 class="top-title">{{ memberLocale.FUNDER_TITLE }}</h2>
          <div class="founder">
            <img class="photo" src="/assets/img/members/xiaoyu.webp" alt="" />
            <div class="info">
              <div class="name">{{ memberLocale.FOUNDER.name }}</div>
              <div class="role">{{ memberLocale.FOUNDER.role }}</div>
              <div class="desc">{{ memberLocale.FOUNDER.desc }}</div>
            </div>
          </div>
          <!-- 成员 -->
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
                <div class="member-avatar">
                  <img
                    class="photo"
                    :src="member.photo"
                    :alt="member.name + ' photo'"
                  />
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
    .top-title {
      display: flex;
      justify-content: center;
      border: unset;
      font-size: 32px;
      color: #fff;
      font-weight: 600;
      margin-bottom: 40px;
      @media (max-width: 1000px) {
        margin-bottom: 26.56px;
      }
    }
    .title {
      display: flex;
      justify-content: center;
      border: unset;
      font-size: 32px;
      color: #fff;
      font-weight: 600;
      margin-bottom: 120px;
      @media (max-width: 1000px) {
        margin-bottom: 26.56px;
      }
    }

    .founder {
      display: flex;
      margin-bottom: 48px;
      border-radius: 10px;
      background: #ffffff17;

      .photo {
        height: 100%;
        max-height: 240px;
        border-radius: 10px 0 0 10px;
        background: #096dd96e;
        @media (max-width: 600px) {
          border-radius: 20px;
        }
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
        @media (max-width: 600px) {
          margin-left: 0;
        }
      }
      @media (max-width: 600px) {
        padding-top: 32px;
        display: block;
        justify-items: center;
        text-align: center;
      }
    }

    .members {
      list-style: none;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 100px 24px;

      @media (max-width: 1000px) {
        list-style: none;
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .member {
        gap: 20px;
        padding: 90px 15px 15px 15px;
        border-radius: 10px;
        background-color: none;
        position: relative;
        justify-items: center;
        text-align: center;
        background: #ffffff17;
        @media (max-width: 1000px) {
          flex-direction: column;
          padding: 15px;
        }

        .photo {
          width: 100%;
          background: #123e78;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          @media (max-width: 1000px) {
            width: 100%;
            background: #096dd96e;
          }
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
          opacity: 1;

          max-height: 250px;
          overflow: hidden;
        }
        .member-avatar {
          width: 160px;
          height: 160px;
          position: absolute;
          top: -80px;
          @media (max-width: 1000px) {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            position: static;
          }
        }
      }
    }
  }
}
</style>
