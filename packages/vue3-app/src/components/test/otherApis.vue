<template>
  <div>
    <h2>其他API</h2>
    <h3>
      shallowRef 与 shallowReactive
      绕开深度响应式，避免深层次每一个对象内部属性都做响应式多带来的性能成本。提高性能
    </h3>
    shallowRef: 浅层的ref
    只会处理第一层的响应式，对象里的属性是不管的（对象很大、很深的时候，如果只需要整个对象修改，而不关心里面修改，建议使用shallowRef，提高效率）<br />
    shallowReactive reactive数据只会处理对象第一层属性
    <hr />
    <h3>readonly 与 shallowReadonly</h3>
    readonly：用于创建一个对象的深只读副本，不能直接修改
    用于创建一个对象的深只读副本。对数据的一种保护
    <hr />
    shallowReadonly：只读只限制顶层属性，只有第一层不能修改，第二层以及更深层可以修改
    <hr />
    <h3>toRaw 与 markRaw</h3>
    toRaw：用于获取一个响应式对象的原始对象， toRaw 返回的对象不再是响应式的，不会触发视图更新 <br />
    使用场景，如果响应式数据作为参数传入一个方法，需要基于参数做修改，但又不想修改原有数据，就可以使用toRaw转化为原始数据，保护现有响应式数据不被修改
    markRaw：标记一个对象，使其永远不会成为响应式
    <hr>
    <h3>customRef 自定义ref</h3>
    <CustomRef/>

  </div>
</template>

<script setup lang="ts" name="">
import { readonly, ref } from "vue";
import CustomRef from "./customRef.vue";

const original = ref(1);
// 23行会使readOnlyCopy和original产生关联关系，一旦original修改，readonlyCope也会修改，但直接修改readOnlyCope是不行的
const readOnlyCopy = readonly(original);
</script>

<style scoped lang="less"></style>
