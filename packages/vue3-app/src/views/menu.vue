<template>
  <div class="vue3-menu">
    <ul>
      <!-- 循环渲染时，最好加上key属性，否则渲染容易发生错乱 -->

      <!-- <li
        class="content-title"
        v-for="(item, index) in contentArray"
        :key="index"
        @click="viewDetails(item.router)"
      >
        {{ item.content }}
      </li> -->
      <!-- active-class是vue3路由激活样式 -->
      <li v-for="(item, index) in contentArray" :key="index">
        <RouterLink :to="{ path: item.router }" active-class="active">
          <div class="content-title">{{ item.content }}</div>
        </RouterLink>
        <!-- 路由的三中书写 字符串、对象path、对象name
        <RouterLink to="/home"> </RouterLink>
        <RouterLink :to="{ path: item.router }"> </RouterLink>
        <RouterLink :to="{ name: 'computedProp' }"> </RouterLink> -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

interface contentInter {
  id: number;
  content: string;
  router: string;
  check?: boolean;
}
// 若是reactive定义的数据，可以传泛型限制类型

// const contentArray1 = reactive<contentInter[]>([
//   { id: 1, content: "计算属性", router: "/computed" },
//   { id: 2, content: "响应式数据", router: "/reactive" },
// ]);

const contentArray: contentInter[] = [
  { id: 1, content: "计算属性", router: "/computed" },
  { id: 2, content: "响应式数据", router: "/reactive" },
  { id: 3, content: "数据监听", router: "/watch" },
  { id: 4, content: "ref", router: "/ref" },
  { id: 5, content: "props", router: "/props" },
  { id: 6, content: "hooks", router: "/hooks" },
  { id: 7, content: "路由", router: "/router" },
  { id: 8, content: "Pinia", router: "/pinia" },
  { id: 9, content: "组件通讯", router: "/componentCommu" },
  { id: 10, content: "其他API", router: "/otherApis" },
  { id: 11, content: "vue3新组件", router: "/newComponents" },
  { id: 12, content: "非兼容性改变", router: "/NewChange" },
];

// function viewDetails(router: string) {
//   console.log(router);
// }
</script>

<style scoped lang="scss">
.vue3-menu {
  height: 420px;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .content-title {
    cursor: pointer;
    min-height: 30px;
    width: 200px;
    background-color: #b3d1fa;
    line-height: 30px;
    padding: 0 10px;
    color: #000000;
    &:hover {
      color: #fff;
      background-color: #0067ff;
    }
  }
  .active .content-title {
    color: #fff;
    background-color: #0067ff;
  }
}
</style>
