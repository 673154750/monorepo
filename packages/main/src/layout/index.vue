<template>
  <el-contsiner>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>MICRO Frontends</el-header>
      <el-main>
        <!-- 主应用路由渲染出口 -->
        <router-view></router-view>
        <!-- 微前端子应用渲染出口 -->
        <div id="subapp-container"></div>
      </el-main>
    </el-container>
  </el-contsiner>
</template>
<script>
import AppMenu from "./AppMenu.vue";
export default {
  components: {
    AppMenu,
  },
};
</script>
