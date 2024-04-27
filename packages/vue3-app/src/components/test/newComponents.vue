<template>
  <div>
    <h3>Teleport 传送门</h3>
    Teleport 是一种能够将我们的**组件html结构**移动到指定位置的技术。
    <!-- teleport里面的内容会插进body中显示，也可以是"#"、"."等元素选择-->
    <teleport to="body">
      <h2>我是一个弹窗 被teleport塞到了body里</h2>
    </teleport>
    <hr />
    <h3>Suspense</h3>
    等待异步组件时渲染一些额外内容，让应用有更好的用户体验 <br />
    如果组件中有异步请求，let a = await axios.get(....)
    ,不能向方法那样在变量前面加async，在setup语法糖下，不用在加async，顶层自动加async
    <br />
    但是如果直接使用let xx = await axios的时候，vue会抛出警告:
    <span style="color: yellow"
      >setup function returned a promise，but no '<'Suspense'>' boundary was
      found in the parent component tree. A component with async setup() must be
      nested in a '<'Suspense'>' in order to be rendered.</span
    ><br />
    可能会造成页面卡死
    <hr />
    <h3>全局API转移到应用对象</h3>
    <ol>
      <li>
        app.component：注册全局组件，在main.ts
        中引入并使用app.component('Hello',Hello)全局注册，在其他组件中可直接使用，不用再import
      </li>
      <!-- vue2的时候使用Vue.prototype.a = 9,往原型链上加属性可以全局用，现在在app上加 -->
      <li>
        app.config：全局配置属性 app.config.globalProperties.a = 9,<br />
        在引用的时候，ts检测会报错，找不见，可以在main.ts中添加一个declare声明，参考官网
        但此方式不建议使用，不好维护
      </li>
      <li>app.directive：定义指令</li>
      <li>app.mount：挂载app</li>
      <li>app.unmount: 卸载app</li>
      <li>app.use：全局使用</li>
      vue2中的Vue.xxx全部变为app.xxx
    </ol>
  </div>
</template>

<script setup lang="ts" name="newComponents">
import axios from "axios";

// 如下写是一个异步组件，引用时需要用Suspense包裹，否则加载不出来
// let aa = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");
// 如下写就不需要用Suspense包裹，可以正常展示
// async function aaa() {
//   let aa = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");
//   console.log(aa);
// }
</script>

<style scoped lang="less"></style>
