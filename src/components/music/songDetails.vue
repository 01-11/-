<template>
    <div class="songDetails" >
        <!-- <allSong></allSong> -->
        <!-- 我是歌单详情 -->
        <!-- <div v-for="item in songDetails" :key=item.id></div> -->
        <div class="header">            
                <img :src="songDetails.coverImgUrl" alt="" class="image">
                 <div class="headerTitle">
                        
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href = '#icon-yangge'></use>                       
                            </svg> 
                       
                        <span class="headerName">
                            {{songDetails.name}}
                        </span>                                                   
                 </div>
                 <div class="iconfont">
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href = '#icon-a-bofang_huaban1'></use>                       
                    </svg> 
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href = '#icon-a-hunxiang_huaban1'></use>                       
                    </svg> 
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href = '#icon-pinglun'></use>                       
                    </svg> 
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href = '#icon-xiazai'></use>                       
                    </svg>                                        
                 </div>
                   
                 <div class="intro">
                     <span class="tag">
                         <span class="tagTitle">标签 :</span>
                         <p>{{songDetails.tags}} </p>
                     </span>
                    <br>
                     <span class="desc">
                         <span style="color:black;font-size:16px">介绍 &nbsp;&nbsp;</span>                         
                             <p>{{songDetails.description}} </p>
                             <!-- <div class="show" @click="handleFold" v-show="fold">展开</div>
                             <div class="show" @click="handleFold" v-show="!fold">收起</div>                            -->
                     </span>                     
                 </div>                                     
        </div> 
         
    </div>
    <allSongs></allSongs>
</template>

<script  >
// console.log('我是歌单详情')
import axios from 'axios'
// import allSongs from '@/components/music/allSongs.vue'
import allSongs from '../music/allSongs.vue'

// import { defineComponent } from '@vue/composition-api'

export default {
    name:'songDetails',
    // props:[
    //     'itemId'
    // ],   
    components:{
        allSongs
    } ,
    data() {
        return {
            songDetails:[],
            fold:true
        }
    },
    methods: {
        handleFold(){
            this.fold = !this.fold
        }
    },
    // setup() {
    //     onMounted(()=>{
    //         console.log(useRoute());
    //         console.log(this.id)
    //     })
    // },
    created() {
    
       
        axios.get('/playlist/detail?id='+this.$route.params.id).then(res => {
            console.log('我是res')   
            
            this.songDetails = res.data.playlist
          
            console.log(res)
        
        })
    },
   
}
</script>


<style scoped lang = 'less'>

*{
    /* background-color: yellow; */
}
.songDetails{
     width: 800px;
     height: 310px;
     border: 1px solid blue;
     /* background-color: snow; */
     margin: 0 auto;
     display: flex;
     
    .header{      
        width: 800px; 
        height: 290px;
        /* border: 1px solid red; */
        background-color: snow;         
        float: left;
        .image{
            margin: 20px 10px 0  20px;
            width:230px ;
            height:230px;
            /* text-align: left;  */
            margin: 10px  ;
            float: left;
            /* border: 1px solid black; */
        }
        .headerTitle {
            background-color: snow;    
            /* border: 1px solid orange; */
            text-align: left;
            width: 470px;
            /* background-color: yellow; */
            margin-top: 20px;
            margin-left: 350px;
            .headerName{
                /* background-color: snow;     */
                font-size: 25px;
                font-weight: bold;
                margin-left: -33px;
                /* border: 1px solid green; */
            }          
        }
        .intro{
             /* background-color: snow;     */
            width: 450px;
            height: 100px;
            /* border: 1px solid blue; */
            float: left;
            margin: 20px 20px 0 80px ;
                    
            .tag{
                 /* background-color: snow;     */
               text-align: left;   
               width: 450px;           
               font-size: 12px;
               /* border: 1px solid orange; */
               /* background-color: yellow; */
               /* margin-left: -250px; */
               float: left;  
               .tagTitle{
                    /* background-color: snow;     */
                    /* border: 1px solid black; */
                    float: left;
                }                                             
               p{
                    /* background-color: snow;     */
                    margin-left: 50px;
                    margin-top: 1px;
                    
                    /* border-radius: 20%; */
                    /* width: 40px; */
                    /* height: 20px; */
                    /* border: 1px solid grey; */
               } 
            }
            .desc{
                
                /* background-color: yellow; */
                widows: 400px;
                /* border: 1px solid black; */
                span{
                    /* border: 1px solid orange; */
                    float: left;
                     /* background-color: snow;     */
                }
                p{
                     /* background-color: snow;     */
                    width: 400px;

                    font-size: 14px;
                    margin-top: 1px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    color: gray;
                    /* border: 1px solid red;  */
                }
               
                }
            }
    }
    
}

 
.iconfont{
        /* border: 1px solid red; */
        margin-top: 30px;
        text-align: left;
        margin-left: 350px;
        /* width: 400px;         */
         /* background-color: snow;     */
       
    }
    .icon{
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        /* border: 1px solid blue; */
         /* background-color: snow;     */
        margin-right: 50px;        
        } 
</style>