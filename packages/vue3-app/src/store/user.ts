import { defineStore } from "pinia";
// import { reactive } from "vue";
// 变量命名讲究，类似hooks的命名规则use
/**
 * defineStore
 */

export const useUserStore = defineStore("user", {
  // 选项式配置
  //  action里面放置的是一个一个的方法，用于相应组件中的动作
  actions: {
    changeName(value: string) {
      // this是当前的state
      this.name = value;
    },
  },
  //   真正存储数据的地方
  state() {
    return {
      name: "aaa",
      age: 10,
      addr: "中国",
    };
    // user: JSON.parse(localStorage.getItem("user") as string) || [];
  },
  // 类似计算属性，加工数据
  getters: {
    addAge(state) {
      return state.age * 2;
    },
    // 如果不用this，可以写成箭头函数
    // addAge:state=>state.age * 2,

    // 有一个隐式的返回值类型检查，给一个类型
    upperName(): string {
      return this.name.toUpperCase();
    },
  },
});

/**
 * 组合式store 推荐
 */
/* export const useUserStore = defineStore("user", () => {
  // user相当于state
  let user = reactive({
    name: "aaa",
    age: 10,
    addr: "中国",
  });
  // function 相当于action
  function changeName(value: string) {
    // this是当前的state
    user.name = value;
  }
  // 返回出去
  return { user, changeName };
}); */
