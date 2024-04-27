<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <!-- 插槽 组件的起始结束标签中间夹带的html结构会渲染到子组件的slot中，如果没夹杂其他内容，则会渲染默认内容 -->
    <!-- 默认插槽 也有名字 name = defalut -->
    <!-- <slot>默认内容</slot> -->
    <!-- 具名插槽 -->
    <slot name="slot1"></slot>
    <!-- slot穿的参数都会被使用插槽的模板或组件接收 -->
    <slot name="slot2" :games="games" x="1" ,y="2"></slot>
  </div>
</template>

<script setup lang="ts" name="Category">
import { reactive } from "vue";

let games = reactive([
  { id: "01", name: "王者" },
  { id: "02", name: "穿越" },
  { id: "03", name: "飞车" },
]);
defineProps(["title"]);
</script>

<style scoped lang="less">
.category {
  width: 150px;
  height: 200px;
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 0 10px;
  padding: 10px;
  // position: fixed;
  // top: 20px;
  // left: 50%;
  // margin-left: -75px;
}
</style>
