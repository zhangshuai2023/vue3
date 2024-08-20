<script setup lang="ts">
import { ref, reactive } from 'vue'
const num1 = ref(1);
const arr = reactive([1,2,3]);
const obj = reactive({
  c: 333,
  d: 444
});
setTimeout(()=>{
  num1.value = 99;
}, 1000);

console.log(num1);
console.log(obj);

</script>

<template>
  <h1>{{ num1 }}</h1>
  <h2 v-for="item in arr">{{ item }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
