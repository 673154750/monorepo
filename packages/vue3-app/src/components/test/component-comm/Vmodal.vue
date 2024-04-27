<template>
  <div class="modal">
    {{ username }}
    {{ age }}
    <!-- v-modal实现双向绑定 -->
    <!-- <input type="text" v-model="username" /> -->
    <!-- v-model的底层原理 用input事件获取输入框的值赋值 HTMLInputElement断言非null,否则类型报错-->
    <!-- <input
      type="text"
      :value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    /> -->
    <!-- v-model用在组件标签上 -->
    <!-- <NewInput v-model="username" /> -->

    <!-- 自定义组件 v-model的本质 -->
    <!-- <NewInput :value = 'username' @input = 'username = $event'/> :value 与  @input vue2的写法-->
    <!-- update:modelValue是事件名，只是中间带:显的特殊  下面是vue3写法-->
    <!-- <NewInput :modelValue="username" @update:modelValue="username = $event" /> -->
    <!-- 修改modelValue的名字:  v-model:test = username  ui子组件接收是变成definProps(['test'])  事件也变成defineEmits(['update:test']) -->
    <!-- modelValue可以改名，那就可以传多个v-model -->
    <NewInput v-model:name="username" v-model:age="age" /> 
  </div>
</template>

<script setup lang="ts" name="Vmodal">
import { ref } from "vue";
import NewInput from "./newInput.vue";

let username = ref("zhangsan");
let age = ref(10);
</script>

<style scoped lang="less">
.modal {
  background-color: antiquewhite;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
