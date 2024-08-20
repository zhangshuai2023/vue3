<script setup>
import HelloEmits from './components/HelloEmits.vue';
import HelloWorld from './components/HelloWorld.vue'
import test from "./components/testdefineprops.tsx"
import test1 from "./components/testpropscomponent.tsx"
import test0 from "./components/test.tsx"
import {provide, ref} from "vue"
import helloReuseDiv from "./components/helloReuseDiv.vue"
let hello = ref("hello");
provide("hello", hello); // 将 hello 提供给所有的子组件
function setupSon(msg){
  console.log(msg);
}
function tsxSon(msg){
  console.log(msg);
}
function setupTsxSon(msg){
  console.log(msg);
}
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

  <test0> </test0>
  
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

