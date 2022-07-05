<template>
<div class="allSongs"> 
    <div class="songsSvg">
        <svg class="icon" aria-hidden="true" @click="display(item.id)">
                <use xlink:href = '#icon-DJ'></use>                       
        </svg>        
    </div>            
   <table >
        <thead>
            <tr>
                <th>PLAY</th>
                <th>标题</th>
                <th>歌手</th>
                <th>专辑</th>
            </tr>
        </thead>    
        <tbody v-for="(item,i) in allSongs" :key="i">
            <tr>                        
                <!-- 传参  每一首歌对应的下标索引 -->
                    <td style="width:50px" @click="playmusic(i)">
                        <svg class="icon" aria-hidden="true" >
                            <use xlink:href = '#icon-shoucang'></use>                       
                        </svg>
                    </td>                
                    <td style="width:230px">{{item.name}}</td>
                    <td>{{item.ar[0].name}}</td>
                    <!-- <router-link :to="'/songLyric/'+item.id"> -->
                     <td>{{item.al.name}}</td>               
                    <!-- </router-link> -->
            </tr>    
        </tbody>
    </table>
   </div>            
</template>
<script>
import axios from 'axios'
import hotCommend from '@/components/home/hotCommend.vue'
import { mapMutations } from 'vuex'

export default{
    name:'allSongs',
    components:{
      
        hotCommend,
    
    },
    data() {
        return {  
          
            allSongs:{} ,
               
        }
    },
   methods: {
    // 点击图标，可播放
       playmusic(i){
           console.log('我是playmusic'); 
        //    把整个歌曲的列表传过来
           this.updatePlayList(this.allSongs) 
        //    根据下标切换 进行播放
           this.updatePlayListIndex(i)       
                    
       },

    // 当 进入 歌曲列表后 ，把整个歌曲传给updatePlayList  ，传下标
      ...mapMutations(['updatePlayList','updatePlayListIndex'])
      
   },
    
    created() {
        axios.get('/playlist/track/all?id='+this.$route.params.id).then(res => {
            console.log('我是所有歌曲');
            console.log(res);
            this.allSongs = res.data.songs
            // this.songPic = this.allSongs[0].al.picUrl
            // console.log(this.allSongs[0].al.picUrl); 
            
        })
       
    }
}
</script>


<style scoped lang='less'>
table{
    width: 800px;
    margin: auto;
}
th{
    border-bottom: 1px solid gainsboro;
    height: 60px;
    // width: 200px;
    text-align: center;
}
tr:hover {background-color: #f5f5f5;}
 
.allSongs{
    width: 800px;
    height: 400px;
    // border: 1px solid red;
    .songsSvg{
        width:100px;
        height: 100px;
        // border: 1px solid red;
        svg{
            width: 100%;
            height: 100%;
            transform: rotate(320deg);
            display: inline-block;
            
        }
    }
    .songsList{
        width: 800px;
        // height: 400px;
        // border: 1px solid green;
    }
    .songSvg{
        width: 800px;
        height: 40px;
        border: 1px solid red;
        display: flex;
        svg{
            width: 40px;
            height: 40px;
            // border: 1px solid rebeccapurple;
            // margin-right: 40px;
        }
    }
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