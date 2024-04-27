// 引入mitt
import mitt from "mitt";

// 调用mitt得到emitter，emitter能绑定事件，触发事件
const emitter = mitt();

/* // 接收数据的组件中 绑定事件 订阅
emitter.on("test1", () => {
  console.log("test1被调用");
});
emitter.on("test2", () => {
  console.log("test2被调用");
});

// 提供数据的组件 必定触发事件 发布
setInterval(() => {
  // 触发事件
  emitter.emit("test1");
  emitter.emit("test2");
}, 2000);

setTimeout(() => {
  // 解绑事件
  emitter.off("test1");
  emitter.off("test2");
}, 5000);

// 清空所有事件
emitter.all.clear(); */

// 暴露
export default emitter;
