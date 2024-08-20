<script setup lang="ts">
import pointDiv from "./pointDiv.vue"
import {  useSlots, ref } from 'vue';

</script>

<template>
  <pointDiv>
    <template #one>
      <h1>hello</h1>
    </template>    
  </pointDiv>
</template>

<style scoped>

</style>