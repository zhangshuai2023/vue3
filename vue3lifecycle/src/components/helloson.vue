<script setup lang="ts">
import { inject, ref, nextTick } from 'vue';
console.log(inject('hello'))
const num1 = ref(1);
const h1Dom = ref({} as HTMLElement);
function getInner(){
  console.log(h1Dom.value.innerHTML);
  console.log(h1Dom.value);
} // 代表 create 生命周期，要在 dom 渲染完成之后执行

// 异步操作，要获得更新，需要用 nextTick
setTimeout(()=>{
  num1.value = 999;
  nextTick(()=>{
    getInner();
  });
}, 1000);
</script>

<template>
  <h1>i am hello son</h1>
  <h1 ref="h1Dom">{{ num1 }}</h1>
  <button @click="getInner">获取</button>


</template>

<style scoped>
.read-the-docs{
  color:#888;
}
</style>