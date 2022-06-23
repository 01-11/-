<template>
        <div class="playMusic" >
              <song-index/>
            <!-- <song-index></song-index> -->
            <div v-for="item in playMusic" :key="item.id"  >
                <audio controls class="playAudio" >
                    <source :src="item.url">           
                </audio>
                <!-- {{item.al.name}} -->
                {{item.id}}  
                <!-- {{item.expi}}            -->
            </div>
            <!-- {{val}} -->
          
            <!-- <span
                  class="row_po" v-for="item in playMusic" :key="item.id" @click="getSingerId(item.id)">
                 
                  <a>{{ item.name}}</a>
              
            </span >   -->
            
            <!-- <footerMusic/> -->
            
        </div>
        
</template>

<script>
import axios from 'axios'

import songIndex from '@/components/music/songIndex.vue'
// import footerMusic from '@/components/footer/footerMusic.vue'


export default {
    name:'playMusic',
    components:{
        songIndex
    },
    data() {
        return {
            playMusic:[],            
        }
    },   
       
    created() {
        axios.get('/song/url?id=' + this.$route.params.id).then(res =>{
            console.log('id'+this.$route.params.id);
            console.log(res)
            console.log('我是播放哦');
            this.playMusic = res.data.data
            // console.log('我是传来的'+this.val);
            // console.log('我时playmusic'+this.playMusic);
        })
    },
    setup() {        
    },
}
</script>

<style lang='less'>
.playMusic{
    width: 800px;
    height: 400px;
    border: 1px solid red;
    margin: auto;   
    .playAudio{
        border: 1px solid orange;
        // margin-top: 300px;
        source{
            width: 500px;
        }
    }
}
</style>