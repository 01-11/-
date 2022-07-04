<template>
    <div class="details">
       
        <span class="discName">
            {{discDetails.name}}
        </span>
        <span class="discArtist">
            {{discDetails.artistName}}
        </span>
     
       <playDisc></playDisc>
       <div class="discIcon">
            <svg class="icon" aria-hidden="true" @click="good">
                <use xlink:href = '#icon-tubiaozhizuomoban'></use>                       
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href = '#icon-pinglun'></use>                       
            </svg>  
            <svg class="icon" aria-hidden="true">
                <use xlink:href = '#icon-xiazai'></use>                       
            </svg> 
       </div>
      
        <!-- <div class="discDesc" >
           <span style="fontSize:15px;color:black">介绍 </span>  
            {{discDetails.desc}}
        </div> -->
        <disc-comment/>
    </div>
   <!-- <div v-for="item in discDetails" :key="item.id"> -->
      
      
   <!-- </div> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
import playDisc from '@/components/disc/playDisc.vue'
import discComment from './discComment.vue'
export default {
    components:{
        playDisc,
        discComment
    },
    setup() {
        
    },
    data() {
        return {
            discDetails:[],
            // name:[]
        }
    },
    methods: {
        // click(){
        //     console.log('我是点击')
        //    console.log(this.discDetails);
        // }
        good(){
            console.log('点赞');
        }
    },
    created() {     
        axios.get('/mv/detail?mvid='+this.$route.params.id).then(res =>{
            console.log(this.$route.params.id);
            this.discDetails = res.data.data
            this.id = this.$route.params.id           
            console.log('-----------');
            console.log(res);
            console.log(this.discDetails);                     
        })       
    },
}
</script>

<style lang='less'>
.details{
    // border: 1px solid red;
    height: 50px;
    .discName{
        font-size: 40px;
        font-family: 'STHupo';
        color:black 	;
        text-align: left;
        // border: 1px solid red;                
        }
        .discArtist{
            margin-left: 20px;

        }
    
}
.discIcon{
    width: 200px;
    // margin: auto;
    // text-align: right;
    // margin-left: 700px;
    margin :10px 0px 10px 700px;
    // border: 1px solid blue;
    .icon{
        width: 50px;
        height: 50px;                   
        }
            
}

</style>