<script setup>
import { ref } from "vue"
import router from "../router"
let account = ref("");
let password = ref("");
function login() {
  if(account.value == "admin" && password.value == "123456"){
    router.push("/");//跳转到首页
  }else{
    alert("账号或密码错误");
  }
}
</script>

<template>
<div>
  <div>
    <label>账号</label>
    <input type="text" v-model="account"/>
  </div>
  <div>
    <label>密码</label>
    <input type="password" v-model="password"/>
  </div>
  <div>
    <button @click="login">登录</button>
  </div>
</div>
</template>

<style scoped>

</style>