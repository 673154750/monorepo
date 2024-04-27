<template>
  <div class="button"  @click="showMsg">{{ msg }}</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  msg: string
}>()
const emits = defineEmits<{
  (e: 'confirm', msg: string): void
}>()

const showMsg = () => {
  emits('confirm', props.msg)
}
</script>
<style scoped>
.button {
  width: 30px;
  height: 15px;
  border: 1px solid red;
}
</style>
