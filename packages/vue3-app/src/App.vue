<!-- 根组件，在main.ts中导入并创建为应用 -->
<template>
  <div>
    <Layout />
    <!-- <CBtn msg="hello" @confirm="onclick" /> -->
  </div>
</template>

<script setup lang="ts">
/**
 * setup语法糖
 * 组合式API，变量、方法等逻辑可以在同一个方法中处理，
 * 不必配置data、methods、watch等，且默认return出所有的变量和方法
 */
// export为vue2语法，在vue3的setup中不可用
import Layout from "./layout/index.vue";

// vue2语法
// export default {
//   name: "App",
//   components: { Home, computedProp, watch, Ref },
// };

// import { getUser } from "@test/apis";
// import Axios from "@test/apis/axios";
// import { test01 } from "@test/utils";
// import { CBtn } from "@test/components";

// console.log(getUser);
// getUser("http://localhost:3000/users").then((res) => {
//   console.log(res);
// });
// Axios.post(
//   "/users",
//   { name: "张aa", age: 22, addr: "四川省成都市" },
//   { baseURL: "http://localhost:3000/" }
// )
//   .then((res) => {
//     console.log(test01("test01-test"));
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// editUser('http://localhost:3000/users',{id: 2, name: '张三', age: 22, addr: '四川省成都市'})
// const onclick = (msg: string) => {
//   console.log(msg);
// };
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
