<template>
  <div class="person">
    <!--向单项绑定属性v-bind:,简写:，由数据流向页面，不能由页面流回数据 -->
    姓：<input type="text" v-bind:value="firstName" /><br />
    名：<input type="text" :value="lastName" /><br />
    <!-- 双向绑定 -->
    姓：<input type="text" v-model="firstName" /><br />
    名：<input type="text" v-model="lastName" /><br />
    全名：<span>{{ firstName }}-{{ lastName }}</span
    ><br />
    <!-- 首字母大写 -->
    全名：<span
      >{{ firstName.slice(0, 1).toUpperCase() + firstName.slice(1) }}-{{
        lastName
      }}</span
    ><br />
    全名：<span>{{ fullName }}</span>
  </div>
</template>
<script setup lang="ts">
/**
 * 计算属性,在vue2中是一个配置项，vue3中改为一个函数
 * 引入computed
 */
import { computed, onMounted, onUnmounted, ref } from "vue";

let firstName = ref("zhang");
let lastName = ref("san");

// 计算属性有缓存，同一个计算在模板中引用多次时，只会执行一次（依赖的变量发生变化时在重新计算），
// 方法没缓存用几次，就调用几次
// 这么一个计算属性时只读的，不可修改
// fullName:computedRefImpl响应式数据
// let fullName = computed(() => {
//     return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1) + "-" +lastName.value
// });
// fullName.value = 'aaa'; // 报错 无法为“value”赋值，因为它是只读属性

// 如何变成可读可写
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});
fullName.value = "li-si"; // 使用get set，fullName变成了可读可写属性，执行赋值，会触发set方法

onMounted(() => {
  console.log('计算属性挂载');
  
});
onUnmounted(() => {
  console.log('计算属性卸载');
  
});
</script>

<style scoped></style>
