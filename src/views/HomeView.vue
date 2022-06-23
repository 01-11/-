
<template>
<!-- 首页 -->
  <div class="home">
    
    <login/>
    <Swiper/>
    <hotCommend/>
    <newDisc/>
    <rankList/>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

// HomeView属于首页
import Swiper from '@/components/home/swiper.vue'
import hotCommend from '@/components/home/hotCommend'
import newDisc from '@/components/disc/newDisc'
import rankList from '@/components/rank/rankList'
import login from '@/components/login/login.vue'



export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    
    login,
    Swiper,
    hotCommend,
    newDisc,
    rankList,
    
  }
}
</script>
