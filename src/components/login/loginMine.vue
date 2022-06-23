<template>
  <div>
    <h1>我是登录</h1>
    请输入手机号<input type="text" id="username" v-model="username"><br>
    请输入密码 <input type="password" id="password" v-model="password"><br>
    <input type="submit" value="提交" @click = "register()">
    <!--  -->
    
  </div>
  
  
</template>
<script>
// const { popScopeId }=require("@vue/runtime-core")
import axios from 'axios'
export default {
  data() {
    return {
      // username:"",
      // password:""
      loginMine:[]
    }
  },
    setup() {
        
    },
    created() {
      axios.get('/login/cellphone?phone/'+this.username+'&password'+this.password).then((res) => {
        console.log('我是res');
        // console.log(res)
        // console.log(this.username)
        // console.log(this.$route.params);
       
      })
      // axios.get('/login/cellphone?phone=18635205312&password=r123456789').then((res) => {
      //   console.log(res)
       
      // })
    },
    methods: {
      // axios.get('/login/cellphone?phone/'+this.username+'&password/'+this.password).then((res) => {
      //   console.log(res)
        // console.log(this.username)
       
      // })
      register(){
        window.console.log('手机号是'+this.username)
        window.console.log('密码是'+this.password)
      }

     
    },
}
  

  
</script>
<style scoped>

</style>
