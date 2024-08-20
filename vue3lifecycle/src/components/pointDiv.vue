<script setup lang="ts">
import { useSlots } from 'vue'

// 函数组件的复用
// 用到一种函数组合的方案


function move(event: any){
  console.log(event.clientX);
}
console.log(useSlots().one, useSlots().two);// 检测用的插槽，插槽有没有使用
</script>

<template>
  <div @mousemove="move" class="div">
    <slot name="one"></slot>
    <slot name="two"></slot>
  </div>
</template>

<style scoped>
.div {
  background-color:red;
  width:500px;
  height:500px;
}
</style>