<template>
    <!-- <h1>我是mv详情</h1> -->
    <!-- <div v-for="item in discDetails" :key="item.id">
        <img :src="discDetails.url" alt=""> -->
        <div class="disc">
             
             <video :src="discDetails.url" controls>
             </video> 
             
             
        </div>
        
        <!-- <discComment/> -->
    <!-- </div> 
     <div v-for="item in discDetails" :key="item.id"> -->
        <!-- <video controls >
            <source :src="discDetails.url">           
        </video> -->
        <!-- {{item.id}} -->
    <!-- </div> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import axios from 'axios'

export default {
    components:{
        // discComment
    },
    setup() {
        
    },
    data() {
        return {
            discDetails:[]
        }
    },
     click(){
            console.log('我是点击')
        //    console.log(this.discDetails);
        },
    created() {
        // this.mvid = this.id
        axios.get('/mv/url?id='+this.$route.params.id).then(res =>{
            this.discDetails = res.data.data
            this.id = this.$route.params.id
            // console.log(this.id);
            console.log(res);
            console.log('我是play的');
            console.log(this.discDetails);
            // console.log('res')
            // console.log();
        })
    },
}
</script>

<style lang='less'>
    .disc{
        width: 800px;
        height: 400px;
        margin:auto;
        border: 1px solid orange;
        background-color: black;
        video{
            width: 100%;
            height: 100%;
        }
    }
</style>