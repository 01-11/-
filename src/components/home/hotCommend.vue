<template>
    <div class="hotCommend">
       
        <div class="text">
            <p class="h">
                 <svg class="icon" aria-hidden="true">
                        <use xlink:href = '#icon-tubiaozhizuomoban'></use>                       
                </svg> 
               <span >热门推荐</span>
            </p>
            <router-link to="" class="more">查看更多</router-link>
        </div>              
        <div class="demo-image">           
            <div v-for="item in songList" :key="item.id" class="block" >
                 <router-link :to="'/songDetails/'+item.id" class="a" >
                        <!-- <img src="@/components/images/bofang.png" alt="" class="bofang"> {{changeCount(item.playCount)}} -->
                        <div class="imgbox">
                                <el-image class='elImage' style="width: 100px; height: 100px" :src="item.picUrl"  />
                                <div class="viewCount">
                                    <img src="@/components/images/bofang.png" alt="" class="bofang">
                                    {{changeCount(item.playCount)}} 
                                </div>
                        </div>           
                        <span class="demonstration">                            
                            {{item. name}}                              
                        </span>                                                                     
                 </router-link>
                   
            </div>           
       </div>        

    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
export default {
    name:'hotCommend',
    
    components:{},
    data() {
        return {
            // limit:1,
          
            songList:[]
        }
    },
    
    created() {
        axios.get('/personalized?limit=10').then((res)=>{
            console.log('我是热门歌单')
            // console.log('我是歌单')
            console.log(res)
            this.songList = res.data.result
            console.log(this.songList)
            
        })
        // axios.get('/top/playlist/highquality').then((res)=>{
        //     console.log('我是热门歌单')
        //     // console.log('我是歌单')
        //     console.log(res)
        //     this.songList = res.data.playlists
        //     console.log(this.songList)
        // })
    },
    methods: {
            changeCount(num){
            if(num>100000000){
                return (num/100000000).toFixed(2)+"亿"
            } else if(num>10000) {
                return (num/10000) .toFixed(2) +'万'
            }
        },
    },
    setup() {
        
    },
}
</script>

<style scoped lang='less' type='text/css'>
.hotCommend{
    // margin-left: 120px ;
    // margin-right: 620px;
    
    width: 800px;
    height: 550px;
    border: 1px solid green;
    margin: auto;
    .text{
        
        width: 800px;
        height: 80px;
        // border: 1px solid blue;
        display: flex;
        .h{
            width: 70%;
            height:50px;
            // border: 1px solid yellow;
            margin-left: 10px;
            text-align: left;            
            border-bottom: 2px solid black;
            span{                
                font-family: 'STCaiyun';
                font-size: 35px;
               
            }           
            .icon{
                width: 50px;
                height: 50px;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
                // margin-top:10px ;
                //  border: 1px solid blue; 
                margin-right: 10px;           
                float: left;

            }
        }
        .more{
            width: 200px;
            // text-align: right; 
            // border: 1px solid green;  
            height: 30px;         
            margin-left: 450px;
            // font-size: 10px;
            margin-right: 50px;
            margin-top: 14px;
            // padding-left: px;
            border: 1px solid gray;
            color: grey;
            border-radius: 20%;
        }
    }
    .demo-image{
        // border: 1px solid red;
        .block {
            padding: 30px 0;
            text-align: center;
            border-right: solid 1px var(--el-border-color);
            display: inline-block;
            width: 20%;
            box-sizing: border-box;
            vertical-align: top;
            // border: 1px solid orange;
            .a{
                text-decoration: none;
                .imgbox{
                    width: 100px;
                    height: 100px;
                    // border: 1px solid red;                    
                    .elImage{
                        position: absolute;
                        opacity: 0.8;
                        z-index: -2;
                        //  border: 1px solid blue;
                         margin-left: -20px;
                         border-radius: 50%;
                        
                    }
                    .viewCount{
                        width: 100px;
                        z-index: 1;
                        position: absolute;
                        opacity: 0.6;
                        color: black;
                        font-weight: bolder;
                        text-align: left;
                        font-size: 15px;
                        background-color: #C0C0C0;
                        margin-top: 80px;
                        margin-left: 30px;
                        
                    }
                     .bofang{                         
                        width: 15px;
                        height: 15px;
                        margin-top:4px ;
                        // display: flex;
                        float: left;
                        margin-left: 10px;
                    }
                }
                
                
            }
           
        }
        .block:last-child {
            border-right: none;
        }
        
        .demonstration {
            display: block;
            // color: var(--el-text-color-secondary);
            font-size: 14px;
            // margin-bottom: 20px;
            margin-top: 10px;
            color:black;
             font-family: "Microsoft YaHei", cursive, serif, sans-serif;
            // .bofang{
                
            //     width: 15px;
            //     height: 15px;
            //     margin-top:4px ;
            //     // display: flex;
            //     float: left;
            //     margin-left: 10px;
            // }
             
            
                // width: inherit;
                
                // position: absolute;
       
                
            
        }
}
    
    // .space{
    //     border: 1px solid black;
    // }
    // .songList{
    //     width:60% ;
    //     height: 200px;
    //     border: 1px solid green;
    // }
}

 
</style>



