// 入口文件 引入
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '../src/iconfont'

// import '../src/assets/color-thief'

import layui from 'layui'



// 设置baseUrl
import axios from 'axios'
// import { Vue } from '@vueuse/core/node_modules/vue-demi'
axios.defaults.baseURL = "http://localhost:3000"
// app.prototype.axios = axios;

axios.prototype.HOST = '/api'
// 使用

createApp(App).use(store).use(router).use(ElementPlus).use(layui).mount('#app')
