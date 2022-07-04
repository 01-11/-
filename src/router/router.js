// to
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import login from '@/components/home/login.vue'
// import allsongList from '@/components/music/allsongList.vue'
import songDetails from '@/components/music/songDetails.vue'
// import allSongs from '@/components/music/allSongs.vue'
// import allRank from '@/components/rank/allRank.vue'
// import loginMine from '@/components/login/loginMine.vue'
import discDetails from '@/components/disc/discDetails.vue'
// import allSinger from '@/components/singer/allSinger.vue'
// import discMore from '@/components/disc/discMore.vue'
// import playMusic from '@/components/music/playMusic.vue'
// import songIndex from '@/components/music/songIndex.vue'
import songLyric from '@/components/music/songLyric.vue'
import loginMine from '@/components/home/loginMine.vue'
import store from '@/store'
import radioHome from '@/components/radio/radioHome.vue'
import search from '@/components/home/search.vue'

// 引入nprogress #一款页面加载时进度条
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const routes = [
  // {
  //   path: '/AboutView',
  //   name: 'AboutView',
  //   component: AboutView
  // },

  // 登录
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/loginMine',
    name: 'loginMine',
    component: loginMine
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  // 首页
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  // {
  //   path: '/allsongList',
  //   name: 'allsongList',
  //   component:allsongList
  // },
  // {
  //   path:'/allSongs/:id',
  //   name:'allSongs',
  //   component:allSongs
  // }, 
  // {
  //   path:'/playMusic/:id',
  //   name:'playMusic',
  //   component:playMusic
  // }, 
  {
    // 传参，要在携带id的路由上传id
    path:'/songDetails/:id',
    name:'songDetails',
    component:songDetails
  },
  {
    // 传参，要在携带id的路由上传id
    path:'/songLyric/:id',
    name:'songLyric',
    component:songLyric
  },
  // allSinger
  // {
  //   // 传参，要在携带id的路由上传id
  //   path:'/allSinger',
  //   name:'allSinger',
  //   component:allSinger
  // },
  {
      path:'/radioHome',
      name:radioHome,
      component:radioHome
  },
  // {
  //   path:'/songIndex/:id',
  //   name:'songIndex',
  //   component:songIndex
  // },
  // {
  //   path:'/allRank',
  //   name:'allRank',
  //   component:allRank
  // },
  // {
  //   path:'/loginMine/:id',
  //   name:'loginMine',
  //   component:loginMine
  // },
  {
    path:'/discDetails/:id',
    name:'discDetails',
    component:discDetails
  },
  // 排行榜
  // {
  //   // 排行榜页面
  //   path: "/toplist",
  //   name: "toplist",
  //   component: () => import("@/components/Toplist/Toplist"),
  //   meta: { title: "排行榜" },
  // },
  // {
  //   path:'/discMore/',
  //   name:'discMore',
  //   component:discMore
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // 跳转路由时页面滚到顶部
    return { x: 0, y: 0 };
  },
})

// const router = new VueRouter({
//   routes,
//   scrollBehavior() {
//     // 跳转路由时页面滚到顶部
//     return { x: 0, y: 0 };
//   },
// });

/**
 * 全局路由守卫  用来监控页面的
 * 
 */


router.beforeEach((to,from) => {
  console.log(to);
  if(to.path == '/login'){
    store.state.isFooterMusic = false
  } else {
    store.state.isFooterMusic = true
  }
})

// const router = new VueRouter({
//   routes,
//   scrollBehavior() {
//     // 跳转路由时页面滚到顶部
//     return { x: 0, y: 0 };
//   },
// });

// // 路由跳转前钩子函数中 - 执行进度条开始加载
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   if (to.query.title) {
//     document.title = to.query.title;
//   }
//   NProgress.start();
//   next();
// });

// // 路由跳转后钩子函数中 - 执行进度条加载结束
// router.afterEach(() => {
//   NProgress.done();
// });
export default router
