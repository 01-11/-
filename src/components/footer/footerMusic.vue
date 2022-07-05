<template>
    <div class="footer">                
        <!-- <h1>我是底部组件</h1> -->
        <div class="footerLeft">
            <router-link :to="'/songLyric/'+playList[playListIndex].id">
            <div class="leftImg">
                <!-- 点击播放，根据下标，playListIndex -->
                <img :src="playList[playListIndex].al.picUrl" alt="" 
                > 
            </div> </router-link> 
            <div class="leftName">                
                    <span>{{playList[playListIndex].name}}</span>   
                <span style="color:grey">{{playList[playListIndex].ar.name}}</span>
            </div>  
                
        </div>
         <div class="footerRight">             
                <svg class="icon" aria-hidden="true"  @click="last">
                    <use xlink:href = '#icon-shangyishou' ></use>                       
                </svg>
               <svg class="icon" aria-hidden="true"  @click="play" v-if="isbtnShow">
                    <use xlink:href = '#icon-bofangqi' ></use>                       
                </svg>
                <svg class="icon" aria-hidden="true" @click="play" v-else>
                    <use xlink:href = '#icon-yuanxingbofang' ></use>                       
                </svg> 
                 <svg class="icon" aria-hidden="true"  @click="next">
                    <use xlink:href = '#icon-xiayishou' ></use>                       
                </svg>          
         </div>
         <div class="footerMiddle">
            <!-- ${} 模板字符串是 ES6语法  将字符串变量用${} 包起来，拼接
                controls 显示 播放的显示器 
                通过ref 定义属性，然后$refs 找到所定义的属性
            -->
            <audio controls 
                class="playAudio"  ref='audio' 
                :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `">
                <!--  
                    根据id的改变进行播放
                        说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url,
                        调用此接口, 传入的音乐 id,可以获取对应的音乐的 url,
                 -->               
                
            </audio>
        </div>          
   
    </div>
</template>
<script>

import {mapMutations, mapState} from 'vuex'

export default {   
    data() {
        return {           
            //初始定时器为0   
            interVal:0
        }
    },   
    mounted() {
        console.log('我是$refs',this.$refs)
        // 可知 autoplay 为 true 即 播放 
    },
    components:{
       
    },
    watch:{
        // 监听下标，若下标发生改变，则自动播放音乐
      
        playListIndex(){
            // 若下标切换，则自动播放  通过mounted的log(this.$refs) 可得当 音频播放时，autoplay为true
            this.$refs.audio.autoplay = true  //监听下标，下标发生改变，则 播放
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
         * ... ES6语法  进行解构
        */ 
        ...mapState(['playList','playListIndex','isbtnShow'])
    },     
    methods: {
    //   给按钮实现点击功能

        play(){
            // 判断音乐暂停则播放，否则就暂停
            if(this.$refs.audio.paused){
                //audio里面有这俩  play播放 和 pause 暂停  
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()   //播放就调用函数进行传值
            } else {
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)   //暂停就清除定时器
            }           
        },
        last(){
            console.log('我是上一个');
            this.$store.commit('updatePlayListIndex',this.$store.state.playListIndex - 1)
            if(this.playListIndex < 0 ) {
                this.$store.commit('updatePlayListIndex',this.$store.state.playList.length - 1)
            }
        },
        next(){
            console.log('我是下一个');
            this.$store.commit('updatePlayListIndex',this.$store.state.playListIndex + 1)
            if(this.playListIndex === this.$store.state.playList.length) {
              this.$store.commit('updatePlayListIndex',this.$store.state.playListIndex = 0)
            }
        },
        //改变时间
        updateTime(){
            this.interVal = setInterval(() => {
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },        
        ...mapMutations(['updateIsbtnShow','updateCurrentTime']), 
             
      
    },   
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
    // display: flex;
   
    .footerLeft{
        width: 300px;
        height: 80px;
        // border: 1px solid red;       
        margin: 10px;
        display: flex;
        float: left;         
        .leftImg{
            width: 70px;
            height: 70px;
            margin-left: 50px;                            
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
   
    .footerRight{
            width: 400px;
            height: 40px;
            margin-top: 10px;
            margin-left: 460px;
            // border: 1px solid red;
            // float: left;
            
            // background-color: yellow;
            .icon{
                width: 40px;
                height: 40px;
                margin-left: 20px;
                // border: 1px solid blue; 
                text-align: left;
                
            } 
        }
         .footerMiddle{
            width: 800px;
            height:20px;
            // border: 1px solid red;
            margin-top: 10px;
            // margin-top: 10px;               
            display: flex;             
            margin-left: 300px;        
     }
}

 

audio{
    width: 800px;
    height: 10px;
}
// 播放按钮隐藏
audio::-webkit-media-controls-play-button {
        display: none;
}
//观看的当前时间
audio::-webkit-media-controls-current-time-display{
    display: none;            
}
//剩余时间
audio::-webkit-media-controls-time-remaining-display {
    display: none;            
}
    //音量按钮
audio::-webkit-media-controls-mute-button {
    display: none;            
}
    
</style>

