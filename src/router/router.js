// to
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import allsongList from '@/components/music/allsongList.vue'
import songDetails from '@/components/music/songDetails.vue'
import allSongs from '@/components/music/allSongs.vue'
import allRank from '@/components/rank/allRank.vue'
import loginMine from '@/components/login/loginMine.vue'
import discDetails from '@/components/disc/discDetails.vue'
import playMusic from '@/components/music/playMusic.vue'
import songIndex from '@/components/music/songIndex.vue'
const routes = [
  // {
  //   path: '/AboutView',
  //   name: 'AboutView',
  //   component: AboutView
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allsongList',
    name: 'allsongList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:allsongList
  },
  {
    path:'/allSongs/:id',
    name:'allSongs',
    component:allSongs
  }, 
  {
    path:'/playMusic/:id',
    name:'playMusic',
    component:playMusic
  }, 
  {
    // 传参，要在携带id的路由上传id
    path:'/songDetails/:id',
    name:'songDetails',
    component:songDetails
  },
  {
    path:'/songIndex/:id',
    name:'songIndex',
    component:songIndex
  },
  {
    path:'/allRank',
    name:'allRank',
    component:allRank
  },
  {
    path:'/loginMine/:id',
    name:'loginMine',
    component:loginMine
  },
  {
    path:'/discDetails/:id',
    name:'discDetails',
    component:discDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
