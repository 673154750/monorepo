import { customRef } from "vue";

export default function (initValue: string, delay: number) {
  let msg = customRef((track, trigger) => {
    let timer:number;
    return {
      get() {
        track(); // 告诉Vue数据msg很重要，要对msg持续关注，一旦变化就更新
        return initValue;
      },
      set(value) {
        clearTimeout(timer); // 防抖
        // 调用window.setTimeout可以确保返回值是number
        timer = window.setTimeout(() => {
          initValue = value;
          trigger(); //通知Vue数据msg变化了
        }, delay);
        console.log(typeof timer)
      },
    };
  });
  return { msg };
}
