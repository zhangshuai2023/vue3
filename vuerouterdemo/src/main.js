import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from "pinia"

const app = createApp(App);
app.use(router); // 使用路由对象

const store=createPinia();
app.use(store);

app.mount('#app');


// 状态管理，vue2 用 vuex，vue3 推荐用 pinia
// vue2-vuex 状态管理 state, action, getter
// new StorageEvent({
//   state:{},
//   mutation:{},
//   action:{}
// });

// pinia 状态管理 state, action, getter
//先在 main.js 中注册，再到 xxx.js 中 写具体的数据、状态、方法