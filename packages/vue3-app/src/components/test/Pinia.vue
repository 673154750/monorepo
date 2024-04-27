<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <div>{{ addr }}</div>
  <button @click="changeName">修改</button>
</template>

<script setup lang="ts" name="">
import { getUuid } from "@test/utils";
/**
 * 集中式状态（数据）管理 redux vuex pinia  多组件需要共享的数据才使用集中式的管理
 * 搭建pinia环境
 * 1、npm i pinia
 * 2、main.ts中引入pinia createPinia 提供pinia环境
 * 创建store文件夹 存取仓库
 */
const uuid = getUuid(8);
console.log(uuid);

import { useUserStore } from "../../store/user";
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
// 读数据
const userStore = useUserStore();
// 以下两种取值都可以
// 响应式对象内的ref的响应式对象不需要再.value，会直接被解析出来
// console.log(userStore.name.value); x
console.log(userStore.name);
console.log(userStore.$state.name);
// 如此解构后使用toRefs会将store中每一项包括各种方法都变成响应式对象，没必要
// const { name, age, addr } = toRefs(userStore);
// storeToRefs可以直接将store中的值 name,age,addr直接挑出来变成响应式，只会关注数据
const { name, age, addr } = storeToRefs(userStore);

// 修改pinia中的数据 三种方式
function changeName() {
  // 第一种 直接修改
  //   userStore.name += "~";

  //   第二种 数据很多的时候避免一个一个修改 批量修改
  //   触发三次mutation set
  //   userStore.name += "~";
  //   userStore.age += 1;
  //   userStore.addr = "河南";

  //   触发一次mutation set 修改
  //   userStore.$patch({
  //     name: "zhangsan",
  //     age: 20,
  //     addr: "河南",
  //   });

  //   第三种修改  在store文件中配置action
  //   虽然写action相对于麻烦，但是利于复用，也可以添加一些判断等业务逻辑
  userStore.changeName("lisi");
}
/**
 *订阅监听store的改变
 * mutate 本次修改的信息
 * state 真正的数据
 */
userStore.$subscribe((mutate, state) => {
  console.log("userStore中的数据发生了变化", mutate, state);
  //   订阅到数据发生改变的时候，可以存入本地存储，达到刷新数据不丢失的情况
//   localStorage.setItem("user", JSON.stringify(state));
});
</script>

<style scoped lang="less"></style>
