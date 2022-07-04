<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> 
   
      <router-link to='/login'>我的</router-link>

    </nav>
     <Topbar v-show="$store.state.isFooterMusic"/>
    <router-view/>
    <footer-music v-show="$store.state.isFooterMusic"/>
  </div>
  
</template>
<script>
import Topbar from '@/components/Topbar/Topbar'
import footerMusic from '@/components/footer/footerMusic.vue'
export default {
  components:{
    footerMusic,
    Topbar,
   
  },
  mounted() {
    console.log('App',this);
  },
  setup() {
    
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// html{
//   background-color: #FFCCCC;
// }
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
