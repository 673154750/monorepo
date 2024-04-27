<template>
  <div>
    添加路由步骤：<br />
    一、导航区、展示区<br />
    二、加入路由<br />
    三、制定路由具体规则（什么路径对应什么组件）<br />
    四、开发路由对应的组件<br />
    <p>路由开发模式</p>
    Vue2:mode:'history', <br />
    Vue3:history:createWebHistory()<br />
    React:BrowserRouter<br />
    <p style="color: red">
      No match found for location with path "history" ---
      path配置子路由的时候要带上父级路由完整的内容，或者直接使用name
    </p>
    <div class="main-box">
      <!-- 嵌套导航，导航区 -->
      <div class="left">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <button @click="showDetails(item, index)">点击查看详情</button>
            <!-- 路由前进后退，push replace属性(不能退回去) -->
            <!-- <RouterLink replace :to="{ path: item.path }" active-class="active">{{
              item.content
            }}</RouterLink> -->

            <!-- 路由传参 query参数 第一种-字符串  第二种-对象-->
            <!-- <RouterLink to="/router/history?a=1&b=2&c=3">?-query传参</RouterLink> -->
            <!-- <RouterLink :to="`/router/history?content=${list1.content}&path=${list1.path}`"></RouterLink> -->
            <RouterLink
              :to="{
                name: 'history',
                query: { id: index, title: index, content: item.content },
              }"
              active-class="active"
              >{{ item.content }}</RouterLink
            >

            <!-- 路由传参 params参数  需要在路由规则里面配置占位history/:a/:b/:c(abc只是代表，可以是有含义的参数)-->
            <!-- <RouterLink to="/router/history/11/22/33">?-query传参</RouterLink> -->
            <!-- <RouterLink :to="`/router/history/${item.content}/${index}/${index}`">?-query传参</RouterLink> -->

            <!-- 传对象的时候只能用name,不能用path params中的value不能传对象和数组-->
            <!-- <RouterLink
              :to="{
                name: 'history',
                params: { id: index, title: item.path, content: item.content },
              }"
              >?-query传参</RouterLink
            > -->
          </li>
        </ul>
      </div>
      <!-- 内容区 -->
      <div class="right">
        <RouterView></RouterView>
      </div>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { reactive } from "vue";
/**
 * 安装路由
 * npm i vue-router
 * 创建一个router路由管理文件，并创建一个路由器，暴露出去
 * RouterLink实现跳转 实际里层是a标签
 * RouterView 实现试图渲染
 */

/**
 * 路由起名，配置name,:to="{name:'zhuye'}"
 */

/**
 * 路由嵌套
 */

/**
 * 路由规则的props配置
 */

let list = reactive([
  { content: "history模式", path: "/router/history" },
  //   { content: "history模式aaaaaa", path: "/router/history" },
  { content: "hash模式", path: "/router/hash" },
]);

/**
 * 编程式路由导航  脱离RouterLink实现路由跳转  可以添加判断条件
 */
// import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// onMounted(() => {
//   setTimeout(() => {
//     // 三秒后跳转到/watch
//     router.push("/watch");
//   }, 3000);
// });

function showDetails(item: any, index: number) {
  // push的参数与RouterLink的to参数一样，可以传对象，也可以传字符串
  router.push({
    path: "/router/history",
    query: { id: index, title: index, content: item.content },
  });
}

/**
 * 路由重定向 路由规则配置文件中最后一个对象配置重定向规则
 * {
 *    path:'/',
 *    redirect:'/computedProp'
 *  },
 */
</script>

<style scoped lang="less">
.main-box {
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  .left {
    margin-right: 10px;
    li {
      min-width: 200px;
      height: 24px;
      line-height: 24px;
    }
    .active {
      color: purple;
    }
  }
}
</style>
