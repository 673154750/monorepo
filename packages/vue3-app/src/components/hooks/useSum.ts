import { computed, onMounted, ref } from "vue";
export default function () {
  let sum = ref(0);

  // 计算属性
  let bigSum = computed(() => {
    return sum.value * 10;
  });

  function add() {
    sum.value += 1;
  }
//   生命周期钩子
  onMounted(() => {
    add();
  });
  return { sum, add, bigSum };
}
