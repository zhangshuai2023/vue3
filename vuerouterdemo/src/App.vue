<script setup>
import Menu from './components/menu.vue'
// router 两个核心的东西
// router-view: 切换路由的时候
// router-link：跳转路由，点击时，跳转到相应的路由
</script>

<template>
  <Menu></Menu>
  <router-view></router-view><!--切换路由的时候，会渲染这个组件, 切换的页面显示在这里-->

</template>

<style scoped>

</style>
