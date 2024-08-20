<script lang="ts"> // 删掉 setup
import { ref, reactive, defineComponent } from 'vue' //引入 defineComponent
export default defineComponent({ // 需要暴露出去
  setup(){
    const num1 = ref(1);
    const arr = reactive([1,2,3]);
    const obj = reactive({
      c: 333,
      d: 444
    });
    setTimeout(()=>{
      num1.value = 99;
    }, 1000);

    console.log(num1);
    console.log(obj);

    return {
      num1,
      arr,
      obj
    }
  }
})

</script>

<template>
  <h1>{{ num1 }}</h1>
  <h2 v-for="item in arr">{{ item }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
