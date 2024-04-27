<template>
  <div class="vue3-ex-layout">
    <header>
      <!-- v-beauty自定义指令 -->
      <h1 v-beauty="'-你好'">{{ title }}</h1>
    </header>
    <main class="main-content">
      <Home />
    </main>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts" name="Layout">
import { ref } from "vue";
import Home from "../views/Home.vue";
let title = ref("vue3");
</script>

<style scoped lang="scss">
.vue3-ex-layout {
  display: flex;
  flex-direction: column;
}
header {
  h1 {
    height: 50px;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 50px;
  }
}
main {
  grid-row: 1;
}
footer {
  height: 30px;
  border-top: 1px solid #ddd;
  text-align: center;
  line-height: 30px;
}
</style>
