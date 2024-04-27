<!-- ref、reactive响应数据 -->
<template>
  <div>
    <div>{{ version }}-home主页</div>
    <button @click="changeVersion">修改版本</button>
    <div>一辆手机{{ mobal.brand }}价格是{{ mobal.price }}</div>
    <button @click="changeMPrice">修改手机价格</button>
    <div>一辆车{{ car.brand }}价格是{{ car.price }}万</div>
    <button @click="changePrice">修改价格</button>
    <button @click="changeAll">修改全部</button>
    <br />
    <h2>游戏：</h2>
    <ul>
      <li v-for="item in games" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeName">修改第一个游戏的名字</button>
  </div>
</template>
<script setup lang="ts">
/**
 * 1、vue3中使用setup的语法糖的环境是没有this的，this的值为undefined
 * 2、
 *
 */

/**
 * vue2: data中的数据自动是响应式的，背后做的数据代理和数据劫持
 * vue3: 数据响应式需要定义，用到ref和reactive
 * ref：ref可以定义基本类型、对象类型的响应式数据，层次深的时候建议使用reactive
 * reactive：只能定义对象类型的响应式数据,响应式是深层次的，
 * reactive重新分配一个对象时，会失去响应式
 */

// 导入ref,reactive, 创建基本类型响应式的数据
import { ref, reactive, toRefs, toRef, defineExpose } from "vue";

// 使用ref包裹的数据为响应式数据
let version = ref("vue3");

// ref可以定义对象类型响应式数据应为它底层还是用reactive实现的
let mobal = ref({
  brand: "huawei",
  price: 100,
});
let car = reactive({
  brand: "tank",
  price: 100,
});

let games = reactive([
  {
    id: "1",
    name: "game1",
  },
  {
    id: "2",
    name: "game2",
  },
  {
    id: "3",
    name: "game3",
  },
]);

/**
 * 修改版本
 */
function changeVersion() {
  // RefImpl()
  // 用ref包裹的数据返回的是一个RefImpl对象，其属性value为实际的值，模板中引用的时候不需要加.value,vue3自动取了value属性
  // 但是在ts中修改变量值的时候，需要修改.value
  version.value = "vue3-1";
  // version = ref('vue333') //这种赋值方式无效
}

function changeMPrice() {
  // reactive包裹的对象是一个Proxy(Object)（原生js提供的代理，window上就有，原生内置的函数）
  mobal.value.price += 10;
  console.log(mobal.value.price);

  // ref定义的对象类型的响应式数据，car被重新赋值后，不会失去响应式
  // mobal.value = { brand: "aaaa", price: 10 };
}
function changePrice() {
  // reactive包裹的对象是一个Proxy(Object)（原生js提供的代理，window上就有，原生内置的函数）
  car.price += 10;
  console.log(car.price);
  // let { brand, price } = car; 直接结构出来的值是非响应式的
  // 使用toRefs把reactive对象每一个属性值都变成ref对象，brand,price变成了响应式数据，修改结构后数据，原数据也会变化
  let { brand, price } = toRefs(car);
  let price1 = toRef(car, "price"); // toRef把其中一个属性变成一个响应式数据
  console.log(brand, price, price1.value);
}
function changeAll() {
  // reactive定义的响应式数据：car被重新赋值后，失去响应式，再次修改原有属性界面不会改动
  // car = { brand: "aa", price: 100 };
  Object.assign(car, { brand: "aa", price: 10 });
  console.log(car);
}

function changeName() {
  // games:Proxy(Array)
  games[0].name = "game123";
  console.log(games);
}

// 带define开头的函数一般是宏函数，vue3中一般可以不引入直接使用
defineExpose({ mobal, car });
</script>
<style scoped></style>
