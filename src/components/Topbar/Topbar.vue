<template>
  <div id='topbar'>
    <div class='top-nav1'>
      <!-- logo -->
      <div class='top-logo'>
        <i class='el-icon-headset' style='margin-right: 10px'></i>
        <span>MUSIC</span>
      </div>
      <!-- 导航栏 -->  
       <ul>
        <li>
          <router-link to="/">
          <a>
            <span>推荐</span>         
          </a>
          </router-link>
        </li>
        <li >
          <a>
            <span>排行榜</span>            
          </a>
        </li>
        <li>
          <a>
            <span>歌单</span>           
          </a>
        </li>
        <li>
          <a>
            <span>商城</span>       
          </a>
        </li>  
        <router-link to="/search">
        <li>
          <a>
            <span>搜索</span>       
          </a>
        </li>        
        </router-link>         
      </ul> 

      <!-- 搜索框-->
      <!-- <el-autocomplete placeholder='音乐/视频/电台/用户'  -->
        <!-- v-model='search'> -->
      <!-- </el-autocomplete>   -->
      
    </div>


    <!-- <div class='top-nav2' >
      <el-menu class='el-menu-demo' mode='horizontal' 
        text-color='#fff' active-text-color='#FFFFFF'>
        <el-menu-item index='home'>推荐</el-menu-item>
        <el-menu-item index="Toplist">排行榜</el-menu-item>
        <el-menu-item>歌单</el-menu-item>
         <el-menu-item>主播电台</el-menu-item>
         <el-menu-item>歌手</el-menu-item> 
         <el-menu-item>搜索</el-menu-item> 
         <el-menu-item>新碟上架</el-menu-item> 
      </el-menu>     
    </div>  -->

  </div>
</template>

<script>
import axios from 'axios'
export default ({
  name:'',
  data() {
    return {
      search:''
    }
  },
  methods: {
     searchHandler(){        
            axios.get('/search?keywords='+this.search).then(res => {            
                console.log('sousou');
                console.log(res);
                this.search = res.data.result.songs
                console.log(this.search);
                // this.search = ''
                this.$router.push('/search')
            }) 
            // this.search = ""
           
        },
  },
})

</script>

<style scoped lang='less'>
#topbar {
  width: 100%;
  background-color: snow;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .top-nav1 {
    height: 70px;
    width: 980px;
    color: black;
    display: flex;
    align-items: center;
    overflow: hidden;

    .top-logo {
      font-family:"FZShuTi";
      font-size: 30px;
      margin-right: 25px;
      width: 200px;

    }

    ul {
      display: flex;
      flex-flow: row nowrap;
      height: 100%;

      li {
        margin: 0 20px 0 0;
        width: 70px;
        height: 100%;
        color: black;
        text-align: center;
        cursor: pointer;

        a {
          position: relative;

          span {
            line-height: 70px;
          }

          .cor {
            width: 12px;
            height: 6px;
            background: url(../images/topbar.png) -226px 0px;
            position: absolute;
            top: 38px;
            left: 50%;
          }
        }
      }

      li:hover {
        color: black;
        font-size: 15px;
        // background-color: #000000;
      }
    }

    .login {
      margin-left: 20px;
      color: #606266;
    }
  }

  .top-nav2 {
    width: 100%;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    background-color: #C20C0C;

  }

  .shrinkNav {
    height: 5px;
    overflow: hidden;
  }
}

.my-autocomplete {
  li {

    .searchSuggest {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: start;


      .type {
        font-size: 12px;
        color: #b4b4b4;
        border-right: 1px #e6e6e6 solid;
        padding-right: 10px;
      }

      .data {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        border-top: 1px solid #e6e6e6;

        p {
          padding-left: 5px;
          display: block;
        }

        p:hover {
          background-color: #cacaca;
        }
      }
    }

  }
}
</style>
