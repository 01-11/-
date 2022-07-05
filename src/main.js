// 执行代码时 先执行所有的import
// 入口文件 引入

import { createApp } from 'vue'

import App from './App.vue'
import router from './router/router'
import store from './store'
// import Vuex from 'vuex'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import {Carousel} from 'element-plus'
// import {CarouselItem,Carousel} from 'element-plus'
// import {ElCarousel} from 'element-plus'
import '../src/iconfont'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import "@/styles/index.css"; // 引入初始化css
import "@/styles/element-#C20C0C/index.css"; // 引入自定义elementUI主题


// 设置baseUrl
import axios from 'axios'

// import { Vue } from '@vueuse/core/node_modules/vue-demi'
// import { Vue } from '@vueuse/core/node_modules/vue-demi'
axios.defaults.baseURL = "http://localhost:3000"
// app.prototype.axios = axios;

axios.prototype.HOST = '/api'
// 使用
// use(Vuex)，那么创建vm，就可以创建store配置项
// 注：在vue3中没有Vue.use() ，这是vue2的，应使用如下
// createApp(App).use(router).use(store).use(ElementPlus).use(Vuex).use(Antd).mount('#app')

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Antd)
app.mount('#app')
// app.prototype.$bus = this
// app.prototype.$API = API

// const vm = new Vue({
    // el:'#app',
    // render:h => h(App),
    // store:'hello'
// })
// console.log('222');
