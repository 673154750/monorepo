/**
 * 路由组件通常存放在pages或views文件夹中，一般组件通常存放在components文件夹中
 * 通过点击路由导航，视觉上消失的路由组件，默认是被卸载的，需要的时候在去挂载
 */

// 创建一个路由器并暴露出去

// 第一步 引入createRouter
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// 引入需要呈现的路由对应组件  用路由渲染出来的组件为路由组件，其他嵌套的组件为一般组件
import computedProp from "../components/test/computed-prop.vue";
import ResponsiveData from "../components/test/responsive-data.vue";
import Watch from "../components/test/watch.vue";
import Ref from "../components/test/ref.vue";
import Props from "../components/test/props.vue";
import Hooks from "../components/test/hooks.vue";
import Routers from "../components/test/routers.vue";
import History from "../components/test/router-detail/history.vue";
import Hash from "../components/test/router-detail/hash.vue";
import Pinia from "../components/test/Pinia.vue";
import ComponentCommu from "../components/test/component-comm/index.vue";
import OtherApis from "../components/test/otherApis.vue";
import NewComponents from "../components/test/newComponents.vue";
import NewChange from "../components/test/newChange.vue";

// 第二步 创建路由器规则
const router = createRouter({
  // 路由的工作模式:history  hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  //   路由规则
  routes: [
    {
      name: "NewChange",
      path: "/NewChange",
      component: NewChange,
    },
    {
      name: "computedProp",
      path: "/computed",
      component: computedProp,
    },
    {
      name: "ResponsiveData",
      path: "/reactive",
      component: ResponsiveData,
    },
    {
      path: "/watch",
      component: Watch,
    },
    {
      path: "/ref",
      component: Ref,
    },
    {
      path: "/props",
      component: Props,
    },
    {
      path: "/hooks",
      component: Hooks,
    },
    {
      path: "/router",
      component: Routers,
      children: [
        {
          // 子集不用带"/"
          name: "history",
          // 后面带?的参数可传可不传
          path: "history", // query参数不用占位
          // path: "history/:id/:title/:content?", // params
          component: History,

          // 用于路由组件传参，非一般组件
          // 第一种写法，搭配params 将路由收到的所有params参数作为props传给路由组件
          //props为true就相当于 <History id="" title="" content=""></History>,组件里使用defineProps
          // props: true,

          // 第二种写法 函数 搭配query 可以自己决定将什么作为props传给组件
          props(route) {
            console.log(route);
            return route.query;
          },

          // 不建议 第三种写法：写死 对象写法 可以自己决定将什么作为props参数传给路由组件
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
        {
          path: "hash",
          component: Hash,
        },
      ],
    },
    {
      path: "/pinia",
      component: Pinia,
    },
    {
      // name:'ComponentCommu',
      path: "/componentCommu",
      component: ComponentCommu,
    },
    {
      path: "/otherApis",
      component: OtherApis,
    },
    {
      path: "/newComponents",
      component: NewComponents,
    },
    {
      // 路由重定向 初始化
      path: "/",
      redirect: "/computed",
    },
  ],
});

// 全部暴露出去，也可以部分暴露， 再main.ts中引入
export default router;
