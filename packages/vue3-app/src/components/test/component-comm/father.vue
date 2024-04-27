<template>
  <div class="father">
    <p>父组件</p>
    <p>汽车：{{ car }}</p>
    <p v-if="toy">儿子给的玩具: {{ toy }}</p>
    <Child :car="car" :sendToy="getToy" ref="component1" />
    <Brother ref="component2" />
    <Vmodal />
    <button @click="getAllChild($refs)">获取子组件</button>
  </div>
</template>

<script setup lang="ts" name="">
import { onMounted, ref } from "vue";
import Child from "./child.vue";
import Brother from "./brother.vue";
import Vmodal from "./Vmodal.vue";
let component1 = ref();
let component2 = ref();

let car = ref("奔驰");
let toy = ref("");
 
/**
 * 
 * @param refs 所有被ref标识的子组件对象
 * 修改子组件值的时候，需要经过子组件同意，要向外暴露defineExpose({ toy });
 */
function getAllChild(refs: { [key: string]: any }) {
  console.log(refs);
  for (const key in refs) {
    refs[key].toy = "新玩具";
  }
}

function getToy(value: string) {
  // 如果不传参数的时候，value表示事件对象poniterEvent
  // 如果有参数传入，仍然想要获取事件对象，可以在传参的时候使用 $event 占位
  toy.value = value;
  console.log(value);
}
// 触发事件
const emit = defineEmits(["test"]);

onMounted(() => {
  setTimeout(() => {
    // emit("test");
    emit("test", "params");
  }, 3000);
});
defineExpose({car})
</script>

<style scoped lang="less">
.father {
  width: 500px;
  padding: 10px;
  background-color: gray;
  border-radius: 5px;
}
</style>
