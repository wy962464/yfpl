<script setup>
import { ref } from "vue";
import { getImageUrl } from "@/assets/js/index.js";

const inputRef = ref(null);
const handlerClick = () => {
  const href = `https://www-app.gdeei.cn/gdeepub/front/dal/ent/list?entName=${inputRef.value.value}&creditCode=${inputRef.value.value}&areaCode=440300&entType=&inputYear=`;
  window.open(href, "_self");
  console.log(inputRef.value.value);
};
const handlerClickLi = (item) => {
  window.open(item.clickUrl, "_self");
};
const dataList = [
  {
    name: "政策文件",
    imgUrl: "icon4.png",
    clickUrl: "https://gdee.gd.gov.cn/yfplzcfgbz/",
  },
  {
    name: "企业名单",
    imgUrl: "icon5.png",
    clickUrl:
      "https://www-app.gdeei.cn/gdeepub/front/dal/ent/list?entName=&creditCode=&areaCode=440300&entType=&inputYear=",
  },
  {
    name: "信息披露",
    imgUrl: "icon6.png",
    clickUrl:
      "https://www-app.gdeei.cn/gdeepub/front/dal/report/list?entName=&areaCode=440300&entType=&reportDateStartStr=&reportDateEndStr=",
  },
  {
    name: "通知公告",
    imgUrl: "icon7.png",
    clickUrl: "https://www-app.gdeei.cn/gdeepub/front/dal/announce/list",
  },
];
</script>

<template>
  <div class="main">
    <div class="box">
      <div class="input">
        <input
          ref="inputRef"
          type="text"
          placeholder="请输入企业名称、统一社会信用代码查询"
        />
        <button @click="handlerClick">
          <i></i>
        </button>
      </div>
      <ul class="box_ul">
        <li
          class="box_li"
          v-for="(item, index) in dataList"
          :key="index"
          @click="handlerClickLi(item)"
        >
          <img :src="getImageUrl(item.imgUrl)" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  height: calc(100% - 202px - 200px);
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  .box {
    margin-top: 20px;
    box-sizing: border-box;
    position: absolute;
    width: 1185px;
    height: calc(100% - 40px);
    border: 4px solid #179d7e;
    margin-bottom: 20px;
    padding: 0 24px 24px;
    .input {
      width: 80%;
      display: flex;
      align-content: center;
      margin: 70px auto 20px auto;
      border: 4px solid #179d7e;
      border-radius: 5px;
      input {
        border: none;
        width: 100%;
        height: 56px;
        font-size: 20px;
        padding: 0 12px;
      }
      button {
        box-sizing: border-box;
        height: auto;
        width: 62px;
        line-height: 38px;
        border: 1px solid transparent;
        padding: 0 18px;
        background-color: #179d7e;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border-radius: 0;
        cursor: pointer;
        transition: all 0.3s;
        i {
          display: block;
          width: 23px;
          height: 24px;
          background: url("@/assets/images/search.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      button:hover {
        opacity: 0.8;
        filter: alpha(opacity=80);
        color: #fff;
      }
    }
    .box_ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 95px;
      .box_li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 150px;
        width: 150px;
        background: #e3f6f3;
        border-radius: 100px;
        color: #079d7a;
        cursor: pointer;
        p {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
