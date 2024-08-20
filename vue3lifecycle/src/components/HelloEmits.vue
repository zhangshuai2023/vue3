<script setup lang="ts">
import { ref, reactive, defineEmits } from 'vue'
const emit = defineEmits(['setupSon',]);
emit("setupSon", "i am setupson"); // 触发事件, 向父组件发送数据
</script>

<template>

</template>