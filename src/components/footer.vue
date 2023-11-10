<script setup>
import { getImageUrl } from "@/assets/js/index.js";

const dataList = [
  {
    name: "版权保护",
    url: "http://meeb.sz.gov.cn/fzlm/bqbh/content/post_10947019.html",
  },
  {
    name: "隐私声明",
    url: "http://meeb.sz.gov.cn/fzlm/yssm/content/post_10947036.html",
  },
  {
    name: "网站导航",
    url: "http://meeb.sz.gov.cn/fzlm/wzdt/index.html",
  },
  {
    name: "联系我们",
    url: "http://meeb.sz.gov.cn/fzlm/lxwm/content/post_10947016.html",
  },
  {
    name: "网站帮助",
    url: "http://meeb.sz.gov.cn/fzlm/wzbz/content/post_10947155.html",
  },
];
const iconList = [
  {
    imgUrl: "dzjgLogo.png",
    clickUrl:
      "https://bszs.conac.cn/sitename?method=show&id=07CCA3589BC67534E053012819AC9B1F",
    style: {
      width: "29px",
      height: "34px",
    },
    isClick: true,
  },
  {
    imgUrl: "jiucuo.png",
    clickUrl:
      "https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=4403000050&url=http%3A%2F%2Fmeeb.sz.gov.cn%2Fxxgk%2Fztzl%2Findex.html",
    style: {
      width: "60px",
      height: "30px",
    },
    isClick: true,
  },
  {
    imgUrl: "accessibility.png",
    clickUrl: "",
    style: {
      width: "60px",
      height: "30px",
    },
    isClick: false,
  },
];
const handlerClickLi = (item) => {
  window.open(item.url, "_self");
};
const handlerClickPolic = () => {
  window.open(
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402002944",
    "_self"
  );
};
const handlerClickIconList = (item) => {
  if (item.isClick) {
    window.open(item.clickUrl, "_self");
  }
};
</script>

<template>
  <div class="footer">
    <div class="footer_mian">
      <ul class="ulList">
        <li
          class="liStyle"
          v-for="(item, index) in dataList"
          :key="index"
          @click="handlerClickLi(item)"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul class="detailsUl">
        <li class="detailsLi">
          主办单位:深圳市生态环境局通讯地址:深圳市福田区红荔西路8007号土地房产交易大厦
        </li>
        <li class="detailsLi">热线(投诉)电话:0755-12369、0755-12345</li>
        <li class="detailsLi">
          制作维护单位:
          深圳市生态环境智能管控中心版权所有@粤ICP备10096639号网站标识码4403000050
        </li>
        <li class="detailsLi">电子邮箱;jls@meeb.sz.gov.cn</li>
        <li class="detailsLi">
          生态环境执法投诉举报电话:
          0755-83590648(工作日:9:00-12:00，14:00-18:00)
        </li>
        <li class="detailsLi">
          网站标识码4403000050@ &nbsp;
          <span style="cursor: pointer" @click="handlerClickPolic"
            ><i class="iconBg"></i> 粤公网安备44030402002944号</span
          >
        </li>
      </ul>
      <div class="iconList">
        <img
          v-for="(item, index) in iconList"
          :key="index"
          :src="getImageUrl(item.imgUrl)"
          alt=""
          :style="{
            ...item.style,
            cursor: item.isClick ? 'pointer' : 'default',
          }"
          @click="handlerClickIconList(item)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  height: 200px;
  width: 100%;
  background: #e8e8e8;
  position: relative;
  display: flex;
  justify-content: center;
  .footer_mian {
    box-sizing: border-box;
    position: absolute;
    min-width: 1200px;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    .ulList {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      .liStyle {
        margin-right: 20px;
        font-size: 16px;
        color: #727171;
        cursor: pointer;
      }
      .liStyle:hover {
        color: #0e0d0d;
        font-weight: 600;
      }
    }
    .detailsUl {
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      align-items: center;
      grid-gap: 0 30px;
      color: #727171;
      margin-left: 130px;
      .detailsLi {
        display: flex;
        align-items: center;
        span {
          display: flex;
          align-items: center;
          .iconBg {
            display: inline-block;
            height: 20px;
            width: 20px;
            background: url("@/assets/images/icon_ga.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
    .iconList {
      height: 34px;
      display: flex;
      justify-content: flex-end;
      margin-right: 475px;
      img {
        cursor: pointer;
      }
    }
  }
}
</style>
