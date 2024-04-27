<template>
  <div>
    <div>{{ current }}</div>
    <ul>
        接收一个列表，渲染出来
      <li v-for="item in list" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface contentInter {
  id: number;
  content: string;
  router: string;
  check?: boolean;
}
import { defineProps } from "vue";
// obj是一个proxy(Object)对象类型
// 只接收
// let obj = defineProps(["current", "currentVal", "list"]);
// console.log(obj.current, obj.currentVal, obj.list);

// 接收list+限制类型
// defineProps<{ list: contentInter[] }>();
// console.log(list);

// 接收list + 限制类型 + 限制必要性? + 指定默认值(withDefaults)
// widthDefaults接收两个参数，第二个参数时一个对象，key是接收的属性，值是一个函数返回一个值
const props = withDefaults(defineProps<{ current?: string; list?: contentInter[] }>(), {
  list: () => {
    return [{ id: 1, content: "计算属性", router: "/computed" }];
  },
});
console.log(props.current,props.list);

</script>

<style scoped></style>
