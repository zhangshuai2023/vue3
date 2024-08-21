<script setup lang="ts">
import HelloEmits from './components/HelloEmits.vue';
import HelloWorld from './components/HelloWorld.vue'
import test from "./components/testdefineprops"
import test1 from "./components/testpropscomponent"
import test0 from "./components/test"
import {onMounted, provide, ref, Component} from "vue"
import helloReuseDiv from "./components/helloReuseDiv.vue"
let hello = ref("hello");
provide("hello", hello); // 将 hello 提供给所有的子组件
function setupSon(msg: string){
  console.log(msg);
}
function tsxSon(msg: string){
  console.log(msg);
}
function setupTsxSon(msg: string){
  console.log(msg);
}

let helloWorldDom = ref({} as Component);
onMounted(()=>{
  console.log(helloWorldDom.value.a); // 获取 a 变量
  console.log(helloWorldDom.value.f1);
});

</script>

<template>
  <!--
  <div> script setup</div>
  <HelloWorld toSetUpSon="a" />
  <div>tsx</div>
  <test @tsxSon="tsxSon"  toTxsSon="b" />
  <div>tsx setup</div>
  <test1 @setupTxsSon="setupTsxSon" toSetupTxsSon="c" />
  <div> script setup son to father emite</div>
  <HelloEmits @setupSon="setupSon" />
  -->

  <!--
  <helloReuseDiv></helloReuseDiv>
  -->

  <!--
  <test0> </test0>
  -->

  <HelloWorld ref="helloWorldDom"></HelloWorld>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

