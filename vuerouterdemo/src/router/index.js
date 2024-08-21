import { createRouter, createWebHistory } from "vue-router"
import index from "../pages/index.vue"
import login from "../pages/login.vue"  
import cart from "../pages/cart.vue"
// 核心是配置路由
const routes = [
  {
    path: "/",
    name: "index",
    component: index //component 不是 components

  },
  {
    path: "/login",
    name: "login",
    component: login

  },
  {
    path: "/cart",
    name: "cart",
    component: cart

  },

];
// 嵌套路由、动态路由

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// 路由拦截、路由导航守卫
router.beforeEach((to, from, next)=>{
  console.log(to, from, next);
  next();
});


export default router;

// 与 vue-router 4 的区别
// 1. 采用 组合式 api , vue2 是选项式 api
// 2. 指定里面的配置项，也采用 ts 语法 import 