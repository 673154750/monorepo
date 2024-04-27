// 整个项目的配置文件 可以配置插件、代理等

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 可以使组件定义name
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VueSetupExtend()
  ],
});
