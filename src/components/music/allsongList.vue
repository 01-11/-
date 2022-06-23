<template>
    <div class="hotCommend">
        <!-- <div> -->
             <p class="h">全部
                <el-col :span="8">
                    <!-- <span class="demonstration">click 激活</span> -->
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                           分类
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                            <el-dropdown-item icon="el-icon-plus"></el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-check" >蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>
            </p>
        <!-- </div> -->
       
        <!--  -->
        
        <!-- <p></p> -->
        
         <div class="demo-image">
           
            <div v-for="item in  allsongList" :key="item.id" class="block">
                 <router-link :to="'/songDetails/'+item.id" class="a">
                        
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
    name:'allsongList',
    components:{},
    data() {
        return {
            allsongList:[],
            // categories:[]
        }
    },
    created() {
        
         axios.get('/personalized?limit=50').then((res)=>{
            console.log('我是热门歌单')
            // console.log('我是歌单')
            console.log(res)
            this.allsongList = res.data.result
            console.log(this.allsongList)
        })
        // axios.get('/playlist/catlist').then( result => {
        //     console.log('我是分类')
        //     console.log(result)
        //     this.categories = result.data.sub
        //     console.log(this.categories)
        // })
       
    },

    // created() {
        
    // },
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

<style scoped lang='less'>
.hotCommend{
    margin-left: 120px ;
    margin-right: 420px;
    width: 1000px;
    height: 300px;
    
    .h{
        
        text-align: left;
        border-bottom: 1px solid black;
        display: flex;
    }
   
}

.demo-image {
    .block {
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
        .block:last-child {
            border-right: none;
        }
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
        
        .demonstration {
            display: block;
            color: var(--el-text-color-secondary);
            font-size: 14px;
            margin-bottom: 20px;
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

.el-dropdown-link {
    // width: 500px;
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>



