<template>
  <div>
    <p>
      Hooks:将同一处理逻辑的变量与方法放在一起，统一导出，代码封装，利于维护,把模块化运用到极致
    </p>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="add">点我加一</button>
    <br />
    <img v-for="(item, index) in dogList" :src="item" :key="index" />
    <br />
    <button @click="addDog">添加一张dog</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import useDog from "../hooks/useDog";
import useSum from "../hooks/useSum";
// 解构数据
const { sum, add } = useSum();
const { dogList, addDog } = useDog();
// hooks可以使用钩子函数
</script>

<style scoped>
img {
  height: 150px;
  margin: 10px;
}
</style>
