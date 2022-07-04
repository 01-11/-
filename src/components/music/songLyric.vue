<template>
    <!-- <div v-for="(item,i) in songLyric" :key="i">  -->
         <!-- {{item.lrc.lyric}}  -->
         <!-- {{item.lyric}} -->
         <div class="songLyric">
             <div class="lyricLeft">
                 <div class="leftImg">
                    <!-- 点击播放，根据下标，playListIndex -->
                    <img :src="playList[playListIndex].al.picUrl" alt="">
                </div>                
             </div>
             <div class="lyricRight" ref="songLyric">
                 <!-- 获得歌词                          active:进行判断    毫秒--> 
                 <p v-for="item in lyric" :key="item" :class="{active:(currentTime)*1000 >= item.time && currentTime*1000 <item.pre}">
                     {{item.lrc}}
                 </p>
             </div>
                <!-- <div v-for="(item,i) in arr" :key="i" class="lyric">
                    {{item}}
                </div> -->
             <song-comment/>   
         </div>
        
    <!-- </div> -->
   
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import songComment from '@/components/music/songComment.vue'
export default {
    name:'songLyric',
    data() {
        return {
            songLyric:[],  
        }
    },
    components:{
        songComment
    },
    computed:{         
      ...mapState(['playList','playListIndex','currentTime']), 
      //设置时间部分
    lyric(){
        let arr ;
        if(this.songLyric) {
            // map循环，遍历函数
            arr = this.songLyric.split(/[(\r\n)\r\n]+/).map((item,i) => {
                let min = item.slice(1,3)  //slice包头不包尾   分
                let sec = item.slice(4,6)  //秒
                let mill = item.slice(7,10)  //毫秒
                let lrc = item.slice(11,item.length)   //歌词
                let time = parseInt(min)*60*1000 +parseInt(sec)*1000+parseInt(mill) //计算总毫秒
                

                // 判断如何mill是NaN的话 ,往前
                if(isNaN(Number(mill))){
                    mill = item.slice(7,9)
                    lrc = item.slice(10,item.length)
                    time = parseInt(min)*60*1000 +parseInt(sec)*1000+parseInt(mill)
                } 
                if(isNaN(Number(mill))) {
                     mill = item.slice(7,8)
                     lrc= item.slice(9,item.length)
                     time = parseInt(min)*60*1000 +parseInt(sec)*1000+parseInt(mill)
                }
                console.log(min,sec,Number(mill),lrc);
                return {min,sec,mill,lrc,time}
            })
            
        }

        // 拿下一句歌词的时间
        arr.forEach( (item,i) => {
            // 若已经到最后一个了，那么就不需要往下走了
            if(i === arr.length-1){
                item.pre = 0  //没有属性就添加，有属性就覆盖
            } else {
                // 有下一句歌词，
                item.pre = arr[i+1].time
            }
        });
        console.log('我是arr');
        console.log(arr);
        return arr
    }

     
    },
     mounted() {
        // console.log(this.songLyric);
    },
    created() {
        axios.get('/lyric?id='+this.$route.params.id).then(res => {
            console.log('我是歌词0 ');
            // console.log(res); 
            this.songLyric = res.data.lrc.lyric
            console.log(this.songLyric);
            // 把时间戳注掉
            // this.arr = this.songLyric.split((/\s*\n*\[.*?\]\s*/))
            // console.log(this.arr);            
            // console.log(this.songLyric.lrc.lyric);
        })
        
        
    },
    watch:{
        // 监听
        currentTime(){
            // 拿到正在显示的标签
            let p = document.querySelector("p.active")
            console.log([p]);
            if(p.offsetTop>350) {
                // 设置滚动条
               this.$refs.songLyric.scrollTop = p.offsetTop -350
            }
            console.log([ this.$refs.songLyric]);
        },
        
    },
    setup() {
        
    },
}
</script>

<style lang='less'>
.songLyric{
    width: 800px;
    height: 350px;
    // border: 1px solid red;
    margin: auto;
    .lyricLeft{
        width: 350px;
        height: 350px;
        float: left;
        // border: 1px solid pink;
        .leftImg{
        width: 290px;
        height: 290px;
        // border: 1px solid blue;        
        float: left;
        margin:20px 20px 20px 20px ;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            // float: left;

        }
    }
   
    }
    .lyricRight{
        width: 400px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        overflow:hidden ;  // 溢出隐藏
        
        p{
            margin-bottom: 20px;
        }
        .active{
            color:pink;
            font-size: 27px;
            font-weight: bold;
            
        }
        
    }
    ::webkit-scrollbar { 
        width: 0;
            // display: none;
    }
    
    .lyric{
        width: 300px;
        // border: 1px solid orange;
        // text-align: right;
        margin-left: 400px;
    }
}


</style>