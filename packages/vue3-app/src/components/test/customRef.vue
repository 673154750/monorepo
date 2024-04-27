<template>
  <div>
    创建一个自定义的ref，并对其依赖项跟踪(track())和更新触发(trigger())进行逻辑控制
    封装成一个hooks复用
    <hr />

    <p>数据更新要求不同时，输入框修改后2秒，再进行更新：{{ msg }}</p>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="">
import useMsgRef from "../hooks/useMsgRef";

let { msg } = useMsgRef("nihao", 2000);
</script>

<style scoped lang="less"></style>
