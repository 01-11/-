<template>
    <div class="footer">       
        <!-- <allSongs/> -->
        <h1>我是底部组件</h1>
       <song-index/>
    </div>
</template>
 <script>
//  import songIndex from '../music/songIndex.vue'
export default {   
    data() {
        return {
            
        }
    },
    components:{
        // songIndex
    },
    
    // components:{allSongs},
    created() {
       
    },
    methods: {
      
    },
    props:['pic']
}
 </script>
<style scoped lang='less'>
.footer{
    width: 100%;
    height: 200px;
    background-color: snow;
    position: fixed;
    bottom: 0;
    border: 1px solid black;
}
</style>

