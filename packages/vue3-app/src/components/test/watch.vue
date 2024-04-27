<template>
  <div>
    求和：{{ sum }}
    <button @click="getSum">加-</button>
    <div>
      姓名：{{ persion.name }}<br />
      年龄：{{ persion.age }}
      <button @click="changeName">修改名字</button>
      <button @click="changeage">修改年龄</button>
      <button @click="changePersion">修改persion</button>
    </div>
    <div>
      姓名：{{ persion1.name }}<br />
      年龄：{{ persion1.age }}
      <button @click="changeName1">修改名字</button>
      <button @click="changeage1">修改年龄</button>
      <button @click="changePersion1">修改persion</button>
    </div>
    <div>
      姓名：{{ persion2.name }}<br />
      年龄：{{ persion2.age }} 汽车：{{ persion2.car.c1 }}、{{ persion2.car.c2
      }}<br />
      <button @click="changeName2">修改名字</button>
      <button @click="changeage2">修改年龄</button>
      <button @click="changeCar1">修改第一台车</button>
      <button @click="changeCar2">修改第二台车</button>
      <button @click="changeCar">修改整个车</button>
    </div>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";
/**
 * watch 监听数据的变化，vue2与vue3作用一致
 * vue3中的watch只能监听以下四种数据
 * ref、reactive定义的数据，函数返回一个值（getter函数）、一个包含上述内容的数组
 */

// 情况一 监视ref定义的基本类型，
let sum = ref(0);
function getSum() {
  sum.value += 1;
}
/**
 * 监视函数
 * prop 监视对象（是一个ref定义的数据，所以是不取value的） 回调函数
 */
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log("sum变了", newVal, oldVal);
  if (newVal > 10) {
    // 解除监视
    stopWatch();
  }
});

/**
 * 情况二、ref定义的对象类型数据
 */
let persion = ref({
  name: "张三",
  age: 20,
});

function changeName() {
  persion.value.name += "~";
}
function changeage() {
  // watch不设置deep,不触发watch
  persion.value.age += 1;
}
function changePersion() {
  persion.value = { name: "lisi", age: 10 };
}
/**
 * 箭头函数里面只有一个参数时，表示newVal
 * watch第一个参数，被监视的数据
 * watch第二个参数，监视的回调
 * watch第三个参数，配置对象（deep、immediate等。。。）
 */
watch(
  persion,
  (newVal, oldVal) => {
    // 监视的是ref定义的对象类型数据，监视的是地址值，若想监视对象内部属性的变化，需要开启深度监视。
    // deep为true是深度监视，immediate立即监视，初始化就会执行，oldVal为undefined
    // 深度监视的时候，只修改某个属性后，newVal与oldVal都是新值，因为是同一个对象（同一个地址）
    // 若修改整个ref定义的对象，newVal是新值，oldval是旧值，因为不是同一个对象
    console.log(newVal, oldVal);
  },
  { deep: true, immediate: true }
);

/**
 * 情况三、reactive定义的对象类型数据，默认开启深度监视
 * reactive定义的对象类型不能整体修改，如果要更新，可以使用Object.assign,地址不变，值替换
 */
let persion1 = reactive({
  name: "张三",
  age: 20,
});

function changeName1() {
  persion1.name += "~";
}
function changeage1() {
  persion1.age += 1;
}
function changePersion1() {
  // persion1 = { name: "lisi", age: 10 }; 没有修改
  Object.assign(persion1, { name: "lisi", age: 11 });
}

// watch如果监听的是reactive创建的对象，会隐式创建深度监听，默认深度监视并且无法关闭
// 修改某个属性也是新值旧值相同，地址不变
watch(persion1, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

/**
 * 情况四、监听ref或者reactive定义的对象类型数据中的某个属性
 */
let persion2 = reactive({
  name: "zhangsan",
  height: 50,
  age: 18,
  car: {
    c1: "benci",
    c2: "baoma",
  },
});

function changeName2() {
  persion2.name += "~";
}
function changeage2() {
  persion2.age += 1;
}
function changeCar1() {
  persion2.car.c1 = "car1";
}
function changeCar2() {
  persion2.car.c2 = "car2";
}
function changeCar() {
  persion2.car = { c1: "aaa", c2: "bbb" };
}
// 如果只想监视某个属性，监视对象是一个函数返回一个值即getter函数，如此新值旧值不同
// 监视某个属性时，若该属性不是对象类型，需要写成函数形式；
watch(
  () => {
    return persion2.name;
  },
  (newVal, oldVal) => {
    console.log("persion2.name变了", newVal, oldVal);
  }
);

// 若监听该属性是对象类型，可直接编，也可写成函数，建议写成函数
// 修改car中的某个属性时，会触发监听，但是修改整个car时，不触发监听
watch(persion2.car, (newVal, oldVal) => {
  console.log("car中某个属性变了", newVal, oldVal);
});

// 监视对象属性，最终方案：函数返回方式
// 使用函数返回值方式时，修改整个car才会触发，但是单个属性不会触发
// 若是函数返回方式结合deep:true,可以监听全部任意改变
watch(
  () => persion2.car,
  (newVal, oldVal) => {
    console.log("car整个变了", newVal, oldVal);
  },
  { deep: true }
);

/**
 * 情况五、简述上述多个数据
 * 监听多个属性，传一个数组，并添加深度监视
 */
watch(
  [() => persion2.name, () => persion2.car.c1],
  (newVal, oldVal) => {
    // newVal、oldVal的值是数组形式
    console.log(newVal, oldVal);
  },
  { deep: true }
);

/**
 * watchEffect 立即运行，同时响应式的追踪其依赖，并在依赖更新时重新执行该函数
 * 不用明确指出监听数据，函数中用到哪些属性，那就监听哪些属性
 */

watchEffect(() => {
  if (persion2.age >= 20 || persion2.height >= 100) {
    console.log("条件到达");
  }
});
</script>

<style scoped></style>
