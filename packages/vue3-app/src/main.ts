import "./assets/style.scss";
// createApp用于创建应用的，类似种植植物的花盆
import { createApp } from "vue";

// 跟组件，类似植物的根，其余组件都会挂载到根组件上
import App from "./App.vue";

// router 1 - 引入路由器
import router from "./router";

// pinia 1-引入pinia
import { createPinia } from "pinia";

// 创建一个app应用，将其挂载到id为app的DOM元素上（css选择器），此元素在入口文件index.html中
// createApp(App).mount('#app');
const app = createApp(App);

// pinia 2 - 在创建完app后创建pinia
const painia = createPinia();
// pinia 3 - 安装pinia
app.use(painia);

// router 2 - 使用路由器
app.use(router);

// 注册全局指令
app.directive("beauty", (element, { value }) => {
  element.innerText += value;
  element.style.color = "green";
});

// 挂载到整个应用到app容器中
app.mount("#app");

// 卸载app
// setTimeout(() => {
//   app.unmount();
// }, 2000);
