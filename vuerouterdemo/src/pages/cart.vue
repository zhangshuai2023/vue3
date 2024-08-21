<script setup>
import { useCartStore } from '../store/cart.js'
const cartData = useCartStore(); // 引入一个方法

function add(item) {
  cartData.addCartNum(item);
}
function minus(id) {
  cartData.minusCartNum(id);
}
</script>

<template>
  <div> 总数: {{ cartData.allNum }}</div>
  <div class="listContent" v-for="item in cartData.cartList">
    <div>{{ item.name }}</div>
    <div>
      <span class="button" @click="minus(item.id)">-</span>
      <span>{{ item.num }}</span>
      <span class="button" @click="add(item)">+</span>
    </div>
  </div>
</template>

<style scoped>
.button {
  padding: 5px;
  border: 1px solid red;
  cursor: pointer;
}
</style>