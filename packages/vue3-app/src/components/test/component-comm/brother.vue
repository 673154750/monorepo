<template>
  <div class="brother">
    子组件2
    <p>brother的玩具：{{ toy }}</p>
    <button @click="emitter.emit('send-toy', toy)">玩具给child组件</button>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from "vue";
import emitter from "../../../utils/emitter";

let toy = ref("飞机");
defineExpose({ toy });
</script>

<style scoped lang="less">
.brother {
  background-color: aquamarine;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
