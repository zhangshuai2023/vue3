<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const a = ref("hello");
const arr = reactive([1,2,3]);

</script>

<template>
  <h1>{{ a }}</h1>
  <p v-for="item in arr">{{ item }}</p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
