<script setup>
import autofit from "autofit.js";
import { onMounted } from "vue";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Main from "@/components/main.vue";
onMounted(() => {
  autofit.init({
    designHeight: 1080,
    designWidth: 1920,
    renderDom: "#app",
    resize: true,
  });
});
</script>

<template>
  <div class="page">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.page {
  height: 100%;
  width: 100%;
}
</style>
