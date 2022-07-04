<template>
    <div class="footer">       
       
        <!-- <h1>我是底部组件</h1> -->
        <div class="footerLeft">
            <router-link :to="'/songLyric/'+playList[playListIndex].id">
            <div class="leftImg">
                <!-- 点击播放，根据下标，playListIndex -->
                <img :src="playList[playListIndex].al.picUrl" alt=""> 
            </div> </router-link> 
            <div class="leftName">                
                    <span>{{playList[playListIndex].name}}</span>   
                <span style="color:grey">{{playList[playListIndex].ar.name}}</span>
            </div>  
                
        </div>
         <div class="footerRight">
                <svg class="icon" aria-hidden="true"  @click="play" v-if="isbtnShow">
                    <use xlink:href = '#icon-a-zanting_huaban1' ></use>                       
                </svg>
                <svg class="icon" aria-hidden="true" @click="play" v-else>
                    <use xlink:href = '#icon-a-bofang_huaban1' ></use>                       
                </svg>            
             </div>
        <div class="footerMiddle">
            
            <audio controls 
                class="playAudio"  ref='audio'
                :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `">
                <!-- 根据id的改变进行播放
                        说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url,
                        调用此接口, 传入的音乐 id,可以获取对应的音乐的 url,

                 -->
                 <!-- ref 传递 -->
                <!-- <source ref='audio' :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `">            -->
            </audio>
        </div>
        <!-- <div class="footerRight">
            <svg class="icon" aria-hidden="true"  @click="play" v-if="isbtnShow">
                <use xlink:href = '#icon-a-zanting_huaban1' ></use>                       
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href = '#icon-a-bofang_huaban1' ></use>                       
            </svg>            
        </div> -->
        <div class="footerShow" v-show="isShow">
           
             <!-- <song-lyric/> -->
           
        </div>
   
    </div>
</template>
<script>
// import songLyric from '@/components/music/songLyric.vue'
import {mapMutations, mapState} from 'vuex'

export default {   
    data() {
        return {
            msg:'我是一个msg',
            isShow:true,
            // 
            interVal:0
        }
    },   
    components:{
        // songLyric
        // songIndex
    },
    watch:{
        // 监听下标，若下标发生改变，则自动播放音乐
        playListIndex(){
            // 若下标切换，则自动播放  这个是通过mounted的log(this.$refs) 看出来的
            this.$refs.audio.autoplay = true
            // paused 是已经暂停了
            if (this.$refs.audio.paused){
                // 若是暂停状态，则图标改变
                this.updateIsbtnShow(false)
            }
        }
    },
    computed:{
        /** mapState 辅助函数
         * 当一个组件需要获取多个状态的时候，可以使用mapState辅助函数帮助我们生成计算属性
        */ 
        ...mapState(['playList','playListIndex','isbtnShow'])
    },
    updated() {
        
    },
    mounted() {
        // console.log('refs');
        // console.log(this.$refs)

        // this.updateTime()  //当底部播放时也需要调用此函数
    },
    // components:{allSongs},
    created() {
      //获取歌词信息，id为歌曲id
          

    },
    methods: {
    //   给按钮实现点击功能
        play(){
            // 判断音乐暂停则播放，否则就暂停
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()   //播放就调用函数进行传值
            } else {
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)   //暂停就清除定时器
            }           
        },

        //改变时间
        updateTime(){
            this.interVal = setInterval(() => {
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },        
        ...mapMutations(['updateIsbtnShow','updateCurrentTime']),
        song(){
            // 点击显示,点击隐藏
            this.isShow = !this.isShow
        }
    },
    // props:['pic']
}
 </script>
<style scoped lang='less'>
.footer{
    width: 100%;
    height: 100px;
    background-color: snow;
    position: fixed;
    bottom: 0;
  
    border: 1px solid black;
    display: flex;
    .footerLeft{
        width: 300px;
        height: 80px;
        // border: 1px solid red;
        margin: 10px;
        display: flex;
        // float: left;
        .leftImg{
            width: 70px;
            height: 70px;
            margin-left: 50px;
            // border: 1px solid black;
            
        //    float: left;
            img{
                border-radius: 50%;
                width: 70px;
                height: 70px; 
            }
        } 
        .leftName{
            width: 500px;
            height: 100px;
            // background-color: yellow;
            margin-left: 0px;
            text-align: left;
            span{
                color:black;
                font-size: 15px;
                    // border: 1px solid pink;
                    // margin: 20px 0 40px 0px;
                    margin-left: 20px;
                   
            }
        }        
    }
    .footerMiddle{
        width: 550px;
        height: 80px;
        // border: 1px solid red;
        margin-top: 10px;           
    }
    .footerRight{
            width: 40px;
            height: 80px;
            margin-top: 10px;
            margin-left: 120px;
            // border: 1px solid red;
            float: left;
            .icon{
                width: 40px;
                height: 40px;
                // border: 1px solid blue; 
                text-align: left;
                
            } 
        }
}


audio{
    width: 500px;
}
audio::-webkit-media-controls-play-button {
        display: none;
}
</style>

