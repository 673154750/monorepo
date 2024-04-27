<template>
  <div>
    ui组件库的底层逻辑是把v-model处理成接收一个参数和一个update事件，ui组件内部再根据原生input的:value与@input方式，将input的$event
    事件对象的值通过updata事件传给父组件
    <!-- 自定义ui组件  原始输入框 使用：value-->
    <!-- <input
      type="text"
      :value="modelValue"
      @input="
        emit('update:modelValue', (<HTMLInputElement>$event.target).value)
      "
    /> -->
    <input
      type="text"
      :value="name"
      @input="emit('update:name', (<HTMLInputElement>$event.target).value)"
    />
    <input
      type="text"
      :value="age"
      @input="emit('update:age', (<HTMLInputElement>$event.target).value)"
    />
  </div>
</template>

<script setup lang="ts" name="">
// 接收传入的参数modelValue
// defineProps(["modelValue"]);
defineProps(["name", "age"]);
// 接收组件传入的事件方法 向父组件传递最新的值
// const emit = defineEmits(["update:modelValue"]);
const emit = defineEmits(["update:name", "update:age"]);
</script>

<style scoped lang="less">
input {
  border: 2px #ddd solid;
  background-image: linear-gradient(45deg, red, blue, green);
  height: 20px;
  width: 150px;
  font-size: 20px;
  color: white;
}
</style>
