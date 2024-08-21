<script setup>
// 注意 script 必须 写 setup
  import { ref, reactive } from 'vue'
  let menuArr=reactive([
    {
      path: '/',
      name: '首页',
    },
    {
      path: '/cart',
      name: '购物车',
    },
    {
      path: '/login',
      name: '登陆',
    },
  ]);

</script>

<template>
  <div class="menu-content">
    <div class="menu-item" v-for="(item,index) in menuArr" :key="index">
      <router-link :to="item.path">{{item.name}}</router-link>
    </div>
  </div>
</template>

<style scoped>
.menu-content {
  display: flex; /* 使 .menu-content 成为 flex 容器 */
  justify-content: space-between; /* 使子元素在容器内水平分布 */
  align-items: center; /* 使子元素垂直居中对齐 */
  background-color: #f8f9fa; /* 设置背景颜色 */
  padding: 10px; /* 添加内边距 */

}

.menu-item {
  margin-right: 10px; /* 添加右侧外边距 */
}

/* 最后一个 .menu-item 移除右边距 */
.menu-item:last-child {
  margin-right: 0;
}
</style>