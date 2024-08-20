<script setup lang="ts"> // 在 setup 中，就相当于在 created 周期中
import { ref, reactive, onMounted, onUpdated, watch, watchEffect, computed, defineProps } from 'vue'

// -------------   生命周期  ------------
/*
const num1 = ref(1);

onMounted(()=>{
  console.log('mounted')
});
console.log('create');// 先输出 created 再输出 mounted
// create 周期 组件创建出来了，还没有被渲染出来
// 要获取渲染之后 div 中的内容, 要在 mount 周期中获取
onUpdated(()=>{ // updated 是监听 dom 的更新，只有在页面上显示的东西才监听
  console.log('updated')
});
setTimeout(()=>{
  num1.value = 999;
}, 1000)

*/

// -------------   watch 监听数据  ------------
/*
let num2 = ref(2);
let num3 = ref(3);
let stop = watch([num2,num3], ()=>{
  // 响应
  console.log(num2);
  console.log(num3);
  if(num2.value >= 4){
    stop(); // 到一定值就停止监听
  }
}, {
  flush:"post",
  onTrack: ()=>{},// 监听的对象，使用的时候才会触发
  onTrigger: ()=>{}, // 监听的对象，更改的时候触发
  // 调配一下监听的触发时机，在开发模式下有用
});// flush: "post" 默认是 pre, 在dom 更新之后执行, 更新之前执行
// 要获取到dom更新之后的内容，要改成 post
setInterval(()=>{ // 不断累加
  num2.value +=1 ;
  num3.value = 888;
}, 1000)
watchEffect(()=>{
  console.log(num2.value);
}); // 不指定具体的跟踪对象，会根据依赖自动跟踪
// 有依赖的, 一个地方使用了 num2, num2 改变时会跟踪
// watchEffect 在 最开始初始化的时候就会执行一次
*/

// -------------   获取计算值  ------------
/*
let num1 = ref(1);
let num2 = ref(2);
function f1(){
  return num1.value + 1;
}; // 引用 num2 的dom 发生改变，页面重新渲染，会再次调用 f1(), 所以会重新计算

let num1add2=computed(()=>{
  return num1.value + 2;
}); // computed 不会重新计算，只有依赖的数据发生改变才会重新计算
// computed 会缓存依赖的数据，只有依赖的数据发生改变才会重新计算
// 更适合做计算属性
*/

// -------------   父子组件传值 ------------
defineProps({
  // 父组件可能传递过来的 props
  toSetUpSon: String,
});

</script>

<template>
  <h1>{{ toSetUpSon }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
