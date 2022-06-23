<template>
    <div class="e">          
       <div v-for="item in songIndex" :key="item.id" class="songVal">
           <img :src="item.al.picUrl" alt="">
       </div>   
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            songIndex:[]
        }
    },
    created() {
        axios.get('/playlist/track/all?id='+this.$route.params.id).then(res => {
            console.log('sss'); 
            console.log('我是res');
            console.log(res);
            this.songIndex = res.data.songs
            console.log(this.songIndex);
        })
    },
    setup() {
        
    },
}
</script>

<style lang='less'>
.e{
    width: 800px;
    height: 360px;
    border: 1px solid blue;
}
.songVal{
    width: 350px;
    height: 350px;
    img{
        width: 100%;
        height:100%
    }
}

    div{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>