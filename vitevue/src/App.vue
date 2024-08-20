<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HelloDefineComponent from './components/HelloDefineComponent.vue';
import test from './components/test.tsx';
import test2 from './components/test2.tsx';
</script>

<template>

  <HelloWorld msg="Vite + Vue" />
  <div>
    <HelloDefineComponent msg="Vite + Vue" />
  </div>
  <div>
    <test2 />
  </div>

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
