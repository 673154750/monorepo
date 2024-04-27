<template>
  <div class="child">
    子组件
    <p>玩具：{{ toy }}</p>
    <p>父亲的汽车: {{ car }}</p>
    <button @click="sendToy(toy)">把玩具传给父亲</button>
    <button @click="getFatherData($parent)">获取父组件的数据</button>
    <!-- emitter 任意组件传参 -->
    <p>兄弟的的玩具: {{ broToy }}</p>
  </div>
</template>

<script setup lang="ts" name="">
import { onUnmounted, ref } from "vue";
import emitter from "../../../utils/emitter";

let toy = ref("奥特曼");
let broToy = ref("");

emitter.on("send-toy", (value: any) => {
  console.log("绑定send-toy, 等提供数据的组件触发", value);
  broToy.value = value;
});

function getFatherData(parent: any) {
  console.log(parent.car);
}

defineProps(["car", "sendToy"]);

/**
 * 组件卸载时要解绑send-toy事件
 */
onUnmounted(() => {
  emitter.off("send-toy");
});

defineExpose({ toy });
</script>

<style scoped lang="less">
.child {
  width: 400px;
  padding: 10px;
  background-color: pink;
  border-radius: 5px;
}
</style>
