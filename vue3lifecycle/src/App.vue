<script setup>
import HelloWorld from './components/HelloWorld.vue'
import test from "./components/testdefineprops.tsx"
import test1 from "./components/testpropscomponent.tsx"
</script>

<template>
  <div> script setup</div>
  <HelloWorld toSetUpSon="a" />
  <div>tsx</div>
  <test toTxsSon="b" />
  <div>tsx setup</div>
  <test1 toSetupTxsSon="c" />
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

