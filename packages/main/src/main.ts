import "./assets/main.css";
// createApp 创建应用
import { createApp } from "vue";
// 跟组件
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

app.use(router);
// 注册子应用
// // 当匹配到activeRule的时候，请求获取entry资源，渲染到container中
// registerMicroApps([
//   {
//     name: "vue3-app", // app name registered
//     entry: "//localhost:7100", //子应用的html入口
//     container: "#yourContainer", //子应用渲染的容器
//     activeRule: "/yourActiveRule", //路由匹配规则
//   },
//   {
//     name: "angular-app",
//     entry: { scripts: ["//localhost:7100/main.js"] },
//     container: "#yourContainer2",
//     activeRule: "/yourActiveRule2",
//   },
// ]);

// // 启动微前端系统
// start({
//   sandbox: {},
// });
app.mount("#app");
