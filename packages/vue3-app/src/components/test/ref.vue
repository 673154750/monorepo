<template>
  <div>
    <h2>ref: 放在元素标签上，给dom元素打标记，组件间相互隔离</h2>
    <h2>ref: 放在组件标签上，拿到的是组件实例对象</h2>
    <ResponsiveData ref="responsiveData" />
    <h3>中国</h3>
    <h3 id="title2">北京</h3>
    <h3 ref="title2">北京</h3>
    <h3>通天苑</h3>
    <button @click="consoleDom">点击输出h2</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ResponsiveData from "./responsive-data.vue";
// import { type PersonInter } from "@test/utils";
// 创建一个容器title2,用于标记存储ref标记的内容
let title2 = ref();
let responsiveData = ref();
// let person: PersonInter = { id: "sssss", name: "aaaa", age: 1 };
// // 泛型
// let personArray: Array<PersonInter> = [
//   { id: "sssss", name: "aaaa", age: 1 },
//   { id: "sssss", name: "aaaa", age: 1 },
// ];
// let personArray: PersonInter[] = [
//   { id: "sssss", name: "aaaa", age: 1 },
//   { id: "sssss", name: "aaaa", age: 1 },
// ];

function consoleDom() {
  // 通过id寻找元素容易冲突，与别的文件有同名id就会找先于渲染的同id的其他组件的元素
  console.log(document.getElementById("#title2"));
  // 只会找当前组件内的title2
  console.log(title2.value);
  //responsiveData.value是组件实例，如果想获取子组件实例中的变量，需要在子组件中使用defineExpose
  console.log(responsiveData.value);
}
</script>

<style scoped></style>
