
<template>
<div>


   <div class="songList"  >
       <table class="layui-table" >
            <colgroup >
                <col width="100">                
                <col width="200">
                <col width="200">
                <col width="400">
            </colgroup>
            <thead >
                <tr>
                <th>播放</th>                
                <th>歌曲名称</th>
                <th>歌手</th>
                <th>专辑</th>
                </tr> 
            </thead>
            <tbody v-for="item in allSongs" :key="item.id" class="songTbody">
                <tr>
                    <td>  
                        <router-link :to="'/playMusic/'+item.id">  
                        <svg class="icon" aria-hidden="true" @click="display(item.id)">
                            <use xlink:href = '#icon-pindaobofang'></use>                       
                        </svg>
                        </router-link>
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.ar[0].name}}</td>
                    <td>{{item.al.name}}</td>
                </tr>                
            </tbody>
        </table>
       <!-- <play-music></play-music> -->
      
        <!-- <div v-for="item in allSongs" :key="item.id" >
           <router-link :to="'/playMusic/'+item.id">  
                <div class="songSvg">
                    <svg class="icon" aria-hidden="true" @click="display(item.id)">
                        <use xlink:href = '#icon-pindaobofang'></use>                       
                    </svg>
                    <span> {{item.name}}</span>  
                    <span> {{item.ar[0].name}}</span>
                </div>                           
                
                <span class="songName">
                   
                </span> 
               
            </router-link>                    
              
               
       </div>  -->
                   <!-- <el-table-column label="歌手">
                           获取多个歌手 
                         <template #default="allSongs">
                            <span
                                 class="row_po" v-for="(item, index) in allSongs.row.ar" :key="item.id" @click="getSingerId(item.id)">
                                 {{ item.name}}
                            <i v-if="index === allSongs.row.ar.length - 1 ? 0 : 1">& </i>
                            </span > 
                      </template> 
                    </el-table-column>     -->
                      <!-- <playMusic :allSongsVal="allSongsVal"></playMusic>   -->
   </div>  

    
   <footer-music/>
     <!-- </router-link> -->
    <!-- <footerMusic/> -->
   </div>
  
</template>
<script>


import axios from 'axios'
import playMusic from './playMusic.vue'
import footerMusic from '@/components/footer/footerMusic.vue'
export default{
    name:'allSongs',
    components:{
        playMusic,
       footerMusic
    },
    data() {
        return {   
            // name:'ssss'        ,
            // data:this.allSongs.name,
           
            allSongs:[],
            allSongsVal:{}
            //  val:this.allSongs,
        }
    },
   methods: {
    //    play(){
    //        console.log('我是play')
    //        alert('没有版权')
    //     //    console.log(this.$route.params.id);
    //    }
   },
    created() {
        axios.get('/playlist/track/all?id='+this.$route.params.id).then(res => {
            console.log('wwww');
            console.log(res);
            this.allSongs = res.data.songs
            console.log(this.allSongs);
            this.allSongsVal = res.data.songs
            console.log('11111111');
            console.log(this.allSongsVal);
            
        })
       
    }
}
</script>


<style scoped lang='less'>
.songList{
    width: 800px;
  
    margin: auto;
    table{
        // border: 1px solid red;
    }
    colgroup{
       
    }
    .songTbody{        
        svg{
              
            margin-left: 50px;
        }
    }
    span{
        margin-right:60px;
    }
}
    .bofang{
    width: 20px;
    height: 20px;
    }
    .list img{
        width: 20px;
        height: 20px;
    }
    .elTable{
        width: 800px;
        background-color: snow;
        border: 1px solid red;
        margin: auto;
    }
    a{
        text-decoration: none;
        color: black;
    }
    
 .icon{
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        /* border: 1px solid blue; */
        margin-right: 50px;        
        } 

</style>