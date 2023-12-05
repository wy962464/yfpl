<script setup>
import { getImageUrl } from "@/assets/js/index.js";
import { onBeforeUnmount, onMounted, ref } from "vue";
import dayjs from "dayjs";

const timeList = {
  0: "星期天",
  1: "星期一",
  2: "星期二",
  3: "星期三",
  4: "星期四",
  5: "星期五",
  6: "星期六",
};
let currentTime = ref(` 
    ${dayjs().format("YYYY-MM-DD")}\xa0\xa0
    ${timeList[dayjs().format("d")]}\xa0\xa0
    ${dayjs().format("HH:mm:ss")}`);
let timer = ref(null);
const handlerBackClick = () => {
  const href = "http://meeb.sz.gov.cn/";
  window.open(href, "_self");
};
const handlerNavMenu = (item) => {
  if (item.name == "信息填报") {
    window.open(item.clickUrl, "_blank");
  } else {
    window.open(item.clickUrl, "_self");
  }
};
const navMenuList = [
  {
    name: "首页",
    imgUrl: "nav_icon1.png",
    clickUrl: "",
  },
  {
    name: "信息填报",
    imgUrl: "nav_icon2.png",
    clickUrl: "https://www-app.gdeei.cn/stfw/index",
  },
  {
    name: "政策文件",
    imgUrl: "nav_icon2.png",
    clickUrl: "https://gdee.gd.gov.cn/yfplzcfgbz/",
  },
  {
    name: "企业名单",
    imgUrl: "nav_icon3.png",
    clickUrl:
      "https://www-app.gdeei.cn/gdeepub/front/dal/ent/list?entName=&creditCode=&areaCode=440300&entType=&inputYear=",
  },
  {
    name: "披露报告",
    imgUrl: "nav_icon4.png",
    clickUrl:
      "https://www-app.gdeei.cn/gdeepub/front/dal/report/list?entName=&areaCode=440300&entType=&reportDateStartStr=&reportDateEndStr=",
  },
  {
    name: "通知公告",
    imgUrl: "nav_icon5.png",
    clickUrl: "https://www-app.gdeei.cn/gdeepub/front/dal/announce/list",
  },
];
onMounted(() => {
  timer.value = setInterval(() => {
    currentTime.value = ` 
    ${dayjs().format("YYYY-MM-DD")}\xa0\xa0
    ${timeList[dayjs().format("d")]}\xa0\xa0
    ${dayjs().format("HH:mm:ss")}`;
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="header">
    <div class="header_top">
      <div class="icon">
        <span>深圳市生态环境局</span>
      </div>
      <div class="back" @click="handlerBackClick">返回首页></div>
    </div>
    <div class="header_bg">
      <div class="systemName"></div>
      <div class="nav_bg">
        <ul class="navMenu">
          <li
            v-for="(item, index) in navMenuList"
            :key="index"
            @click="handlerNavMenu(item)"
            class="navMenuLi"
          >
            <div class="icon">
              <img :src="getImageUrl(item.imgUrl)" alt="" />
            </div>
            <div class="name">{{ item.name }}</div>
          </li>
        </ul>
        <div class="time">{{ currentTime }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header_top {
    height: 60px;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      height: 40px;
      width: 40px;
      background: url("@/assets/images/icon.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      span {
        position: absolute;
        color: #3a3a3a;
        top: 50%;
        left: 50px;
        transform: translate(0, -50%);
        white-space: nowrap;
      }
    }
    .back {
      color: #3a3a3a;
      cursor: pointer;
    }
  }
  .header_bg {
    width: 100%;
    height: 142px;
    background: url("@/assets/images/bg2.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .systemName {
      width: 568px;
      height: 64px;
      position: absolute;
      background: url("@/assets/images/systemName.png") no-repeat;
      background-size: 100% 100%;
      top: 20px;
      left: 20%;
    }
    .nav_bg {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .navMenu {
        max-width: 1200px;
        display: flex;
        line-height: 50px;
        font-size: 17px;
        color: #94dbd2;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial,
          sans-serif;
        overflow: hidden;
        .navMenuLi {
          box-sizing: border-box;
          min-width: 130px;
          padding: 0 25px;
          display: flex;
          align-items: center;
          cursor: pointer;
          .icon {
            width: 40px;
            height: 40px;
            margin-right: 6px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .navMenuLi:nth-child(1) {
          background: rgba(31, 197, 177, 0.5);
        }
      }
      .time {
        line-height: 50px;
        font-size: 17px;
        color: #94dbd2;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial;
      }
    }
  }
}
</style>
