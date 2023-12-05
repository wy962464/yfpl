import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routers/index.js";
// 清除浏览器默认样式
import '@/assets/css/clearDefault.scss';
let app = createApp(App)
app.use(router).mount('#app')
