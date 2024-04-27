<template>
  <div>
    <!-- <p>父组件传入的query参数route.query.content {{ query.content }}</p> -->
    <p>{{ id }}</p>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
    <!-- <p>{{ params.id }}</p>
    <p>{{ params.title }}</p>
    <p>{{ params.content }}</p> -->
    history模式：<br />
    优点：URL比较美观，不带#，更加接近传统网站的URL，<br />缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会404错误
    后端nginx配置：try_files $uri/ /index.html
  </div>
</template>

<script setup lang="ts" name="">
// import { toRefs } from "vue";
// import { useRoute } from "vue-router";
/**
 * 路由传参 接收参数
 */

// let route = useRoute();
// console.log(route);
// // query 传参
// console.log(route.query);
// // params 传参
// console.log(route.params);
// // 直接从响应式数据里解构的数据会丢失响应式，需要加toRefs
// let { query } = toRefs(route);
// let { params } = toRefs(route);

defineProps(["id", "title", "content"]);

</script>

<style scoped lang="less"></style>
