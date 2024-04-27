<template>
  <div class="main">
    <div class="left-menu">
      <Menu />
      <!-- NewComponents是个异步组件，需要包在Suspense里面，并且包一层template,底层是用插槽实现的 -->
      <!-- 里面有两个结构 异步完成default出现，异步没完成fallback出现 -->
      <!-- <Suspense>
        <template v-slot:default>
          <NewComponents />
        </template>
        <template v-slot:fallback>加载中 </template>
      </Suspense> -->
    </div>
    <div class="right-content">
      <!-- 在menu文件中使用routerLink匹配 -->

      <!-- 父传子，如果参数是变量，使用:+变量名 -->
      <!-- <Props current="父传子的数据" currentVal="father" :list="contentArray" /> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { Suspense } from 'vue';
import Menu from './menu.vue';
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue';
// import NewComponents from '../components/test/newComponents.vue';
/**
 * 组件的生命周期函数（钩子） 创建、挂载、更新、销毁
 * 调用特定的函数
 */

/**
 * vue3 周期函数
 * 创建  创建前+创建完毕 setup
 * 挂载  挂载前、挂载完毕
 * 更新  更新前、更新完毕
 * 卸载  卸载前、卸载完毕
 */
// vue3中在setup中的逻辑就是创建的阶段，所以没有beforeCreate和created
console.log('创建');

/**
 * 挂载前
 */
onBeforeMount(() => {
  console.log('挂载前');
});

/**
 * 挂载完毕 常用
 */
onMounted(() => {
  // 父子组件 子组件会优先挂载完，再继续解析父组件（App组件是最后挂载的）
  console.log('挂载完毕');
});

/**
 * 更新前
 */
onBeforeUpdate(() => {
  console.log('更新前');
});

/**
 * 更新完毕 常用
 */
onUpdated(() => {
  console.log('更新完毕');
});

/**
 * 销毁前 常用
 */
onBeforeUnmount(() => {
  console.log('卸载前');
});

/**
 * 销毁后
 */
onUnmounted(() => {
  console.log('卸载完毕');
});
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
.left-menu {
  padding: 10px;
  height: 100%;
}
.right-content {
  padding: 10px;
  height: 420px;
  overflow-y: scroll;
  flex-grow: 1;
}
</style>
