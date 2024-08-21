<script setup>
import { useCartStore } from '../store/cart.js'
import { ref, reactive } from 'vue';
const cartData = useCartStore(); // 引入一个方法
const goodList = reactive([
  {
    name:"电脑",
    id:"1"
  },
  {
    name:"手机",
    id:"2"
  },
  {
    name:"桌子",
    id:"3"
  }
]);

function addCart(item){
  cartData.addCartNum(item);
}
</script>

<template>
  <div v-for="item in goodList">
    <div>{{ item.name }}</div>
    <button @click="addCart(item)">加入购物车</button>
  </div>
</template>

<style scoped>

</style>