<template>
<div class="allDetails">
    <div class="songDetails" >      
       <div class="detailsPic">
           <img :src="songDetails.coverImgUrl" alt="">
       </div>
       <div class="detailsRight">
            <div class="detailsTitle">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href = '#icon-yangge'></use>                       
                </svg>   
                <span>{{songDetails.name}}</span>
            </div>
            <div class="detailsIcon">
                
                     <svg class="icon" aria-hidden="true" @click="playAll">
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
            <div class="detailsDesc">
                <span>介绍</span>
                <p>
                    {{songDetails.description}}
                </p>
            </div>            
       </div>      
    </div>
    <allSongs></allSongs>
    
</div>
<!-- <footer-music/> -->

</template>

<script  >

import axios from 'axios'
import allSongs from '@/components/music/allSongs.vue'
// import footerMusic from '@/components/footer/footerMusic.vue'
// import { mapMutations } from 'vuex'

export default {
    name:'songDetails',
    // props:[
    //     'itemId'
    // ],   
    components:{
        allSongs,
        // footerMusic
       
    } , 
    data() {
        return {
            songDetails:[],
            // fold:true
        }
    },
    computed:{
        // playAll(){
        //     console.log('我是播放所有')
        // }
    },
    methods: {
        handleFold(){
            // this.fold = !this.fold
        },
        // playAll(){
        //     console.log('我是methods的playAll');
        //     this.updatePlayList(this.allSongs)
        // },

        // ...mapMutations(['updatePlayList'])
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
            console.log(this.$route.params.id);
            this.songDetails = res.data.playlist
          
            console.log(res)
            console.log(this.songDetails);
        
        })
    },
   
}
</script>


<style scoped lang = 'less'>
.allDetails{
    width: 800px;
    /* height: 800px; */
    margin: auto;
    /* border: 1px solid blue; */
        .songDetails{
            width: 800px;
            height: 350px;
            /* background-color: 	#F0FFFF; */
            /* border:1px solid red; */
            /* margin: auto; */
            display: flex;
            .detailsPic{
                width: 300px;
                height:300px;
                /* border: 1px solid green; */
                margin:20px ;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .detailsRight{
                width: 500px;
                height: 350px;
                /* border: 1px solid yellow; */
                .detailsTitle{
                    width:400px;
                    height: 50px;
                    /* border: 1px solid blue; */
                    margin:20px;
                    span{
                        font-size: 20px;
                        font-weight: bold;
                    }
                    
                }
                .detailsIcon{
                    width: 400px;
                    height: 30px;
                    /* border: 1px solid pink; */
                    margin: 0 0 20px 20px;
                    text-align: right;
                    
                }
                .detailsDesc{
                    width: 400px;
                    height: 150px;
                    /* border: 1px solid black; */
                    background-color: snow;
                    margin-left: 20px;
                    span{
                        display: flex;
                        font-weight: bold;
                    }
                    p{
                        font-size: 14px;
                            margin-top: 1px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 5;
                            -webkit-box-orient: vertical;
                            color: gray;
                    }
                }
            }
        
        }   
        .icon{
                width: 30px;
                height: 30px;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
               margin-left: 10px;
        }
}

</style>