<template>
  <div class="componentBox">
    <p>
      <br />
      1、props 可以实现父传子、父传子 <br />
      子传父实现之前需要父给子提供一个方法，子借助方法传给父<br />
      <hr>
      <!-- <Father /> -->

      2、自定义事件custom-event 专门用于子传父 test为自定义事件 testCallBack为事件回调<br />
      只要test事件被触发，就会调用testCallBack回调 自定义事件test建议使用kebab-case方式命名
      如何触发test:在子组件中声明这个函数 用defineEmits
      <hr>
      <!-- <Father @test="testCallBack" /> -->
      
      3、mitt 可以实现任意组件通信  （pubsub、$bus、mitt） 安装npm i mitt <br>
      是个工具，新建utils/emitter.ts文件 引入mitt,调用mitt()生成emitter,暴露emitter <br>
      <!-- <Father /> -->
      <hr>
      4、v-modal 用在组件标签上<br>
      底层是使用的$event.target.value <br>
      对于原生事件，$event就是事件对象===能.target <br>
      对于自定义事件，$event就是触发事件时所传递的数据=== 不能.target <br>
      :modelValue 是父传子 <br>
      @update:modelValue 是子传父
      <hr>
      <!-- <Father /> -->
      5、_$attr 用于祖传孙   
      父组件传给子组件多个参数，子组件只接收一个的时候，剩余的参数都会跑到attrs当中 <br>
      在子组件中可以通过$attrs获取剩余参数，是个对象例如：{b:2,c:3,d:4},
      在子组件中只需要引用孙子组件时，v-bind='$attrs' 孙组件用defineProps接收即可 <br>
      <!-- <Father :a='1':b='2':c='3':d="4" /> ===>等价 <Father v-bind="{a:1,b:2,c:3,d:4}"/> -->
      <hr>
      6、$refs:获取所有子组件的实例 父传子、$parent: 获取父组件实例，子传父 <br>
      <!-- <Father /> -->
      <hr>
      7、_provide:提供数据  inject:接收数据 实现祖孙组件直接通讯<br>
      从vue中引入provide,祖组件中向后台提供数据 <br>
        祖 ---》孙<br>
      祖：provide('car',car); provide('toy',toy) <br>
      孙：let x = inject('car','默认值'); let y = inject('toy'，{brand:'默认值'，price:0}) <br>
      通过默认值帮助孙组件推断数据类型，放置ts报错 <br>
        孙 ---》祖 通过自定义事件
      在祖组件中声明一个方法 function chageCar(){} <br>
      祖：provide('car',{car,changeCar})<br>
      孙：let {car, changeCar} = inject('car', '默认值')<br>
      <hr>
      8、pinia <br>
      <hr>
      9、slot 插槽 占位 <br> 
      默认插槽: <br>
      具名的插槽 <br>
      作用域插槽:  数据在子组件手里，但是根据数据生成的结构却由父亲决定
      <hr>
      <slotFather />
    </p>
  </div>
</template>

<script setup lang="ts" name="Componentcommu">
import Father from "./father.vue";
import slotFather from './slot/father.vue'

// function testCallBack(value: string) {
//   console.log("已触发", value);
// }
</script>

<style scoped lang="less">
.componentBox{
}
</style>
