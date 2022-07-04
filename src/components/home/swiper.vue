<template>
<div>
    <el-carousel :interval="3000" type="card" height="200px">

            <div class="swiper">
                <el-carousel-item v-for="image in images" :key="image">
                    <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                    <!-- <router-link :to="'/swiperDetails/'+image.targetId"> -->
                    <img :src="image.imageUrl">
                    <!-- </router-link> -->
                </el-carousel-item>
            </div>
            
    </el-carousel> 
</div>
    
                                      
</template>

<script>
import axios from 'axios'
// import {defineComponent} from 'vue'


export default {
    name:'swiper',
    components:{
       
    },
    data() {
        return {                                          
            images:[]
        }
    },
    created() {
    //    用axios来获取
        axios.get('/banner?type=0').then((res)=>{
            console.log('轮播图');
            console.log(res)
            this.images = res.data.banners
            // console.log('---------');
            // console.log(this.images)             
        })  
        // return {}     
    },
    // methods: {
    
    // },

    
   

    
    // setup() {
        
    // },
}
</script>

<style scoped lang = "less">
.el-carousel{
    width: 100%;
    height: 300px;
    margin-top: 30px;
    /* border: 1px solid red; */
}
.swiper{
    width: 100%;
    height: 300px;
    /* background-color: yellow; */
    .el-carousel__item{
        /* border: 1px solid blue; */
        height: 250px;
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
        img{
            width: 100%;
            height:100%
        }
    }
}


.el-carousel__item:nth-child(2n) {
  background-color: black;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: black;
}
</style>
