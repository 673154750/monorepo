<template>
  <div class="fatherBox">
    <h3>插槽-father</h3>
    <div class="box">
      <!-- v-slot只能放在component或者template上 -->
      <!-- <Category v-sl:slot1 title="游戏">
        <ul>
          <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
      </Category> -->
      <!-- 具名插槽，写在template上，顺序根据子组件的插槽定 -->
      <!-- 语法糖 #代替v-slot -->
      <!-- <Category>
        <template v-slot:slot2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
        <template #slot1>
          <h2>游戏</h2>
        </template>
      </Category> -->
      <Category>
        <template v-slot:slot2="content">
          <!-- <template #slot2="content"> -->
          <ul>
            <li v-for="game in content.games" :key="game.id">
              {{ game.name }}
            </li>
          </ul>
        </template>
        <!-- content可以直接结构 v-slot="{games, x, y}" -->
        <template #slot1>
          <h2>游戏</h2>
        </template>
      </Category>

      <Category title="美食">
        <img :src="imageUrl" alt="" />
      </Category>
      <!-- 作用域插槽 数据在子组件中，父组件用的时候拿不到，可以通过插槽传参 -->
      <Category title="影视">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="slotFather">
import { reactive } from "vue";
import Category from "./Category.vue";

let imageUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4.jpg";
let videoUrl = "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
</script>

<style scoped lang="less">
.fatherBox {
  // filter会影响子组件的绝对定位
  // filter: saturate(200%);
  .box {
    display: flex;
    // 间隔均分
    justify-content: space-evenly;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
}
</style>
