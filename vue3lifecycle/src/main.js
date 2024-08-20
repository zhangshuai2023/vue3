import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);// 创建根实例
app.mount('#app')

// app 是根实例, 全局的父组件
// 很多的全局 api 都是在这个 app 上使用的

// 每个组件打开的时候，请求以下后端，后端统计一下每个组件打开的次数
// 提取为一个单独的模块
