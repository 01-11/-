<template>
    <!-- <div> -->
        
        <div v-for="item in  discComment" :key="item.commentId" class="comment">
            <div class="imga">
                <img :src="item.user.avatarUrl" alt="">
            </div>
            <div class="commentName">
                <span >{{item.user.nickname}}: </span>
            </div>
           <div class="commentContent">
               <span > {{item.content}} </span>
           </div>
           <div class="commentTime">
              <span> {{item.timeStr}} </span>
           </div>
        </div> 
        
        <!-- <el-table :data="discComment" style="width: 100%">
            <el-table-column prop="date"  width="180"> </el-table-column>
            <el-table-column prop="user.nickname"  width="180"> </el-table-column>
            <el-table-column prop="content" > </el-table-column>
        </el-table> -->
    <!-- </div> -->
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            discComment:[]
        }
    },
    created() {
        axios.get('/comment/mv?id='+this.$route.params.id).then(res => {
            console.log(this.$route.params);
            console.log('我是评论的');
            console.log(res);
            this.discComment = res.data.hotComments
            console.log(this.discComment);
        })
    },
    setup() {
        
    },
}
</script>

<style lang='less'>
    .comment{
        width: 800px;
        height: 150px;
        margin:auto;
        border: 1px solid gray;
        margin-top:20px;
        .imga{
            width: 60px;
            height: 60px;
            // border: 1px solid red;
            float: left;            
            margin:10px 10px 10px 10px;
            img{
                width: 100%;
                height: 100%;                
            }
        }
        .commentName{
            font-size: 14px;
            text-align: left;
            // border: 1px solid red;
            width: 140px;
            height: 20px;
            float: left;
            margin-top:10px;
            // display: flex;
            span{
                width:100%;
                height:100%;
                margin-top:150px;
                // background-color: yellow;
                color:blue;
                // border: 1px solid orange;
            }
        }
        .commentContent{           
            font-size: 15px;
            margin-top:30px;
            // border:1px solid green;
            height: 100px;
        }
        .commentTime{
            text-align: right;
            // border:1px solid blue;
            // width:100px;
            margin-left: 80px;
            height:100px;
            
            bottom:0;
            // bottom:0;
            // position:relative;
            span{
               
                
            }

        }
    }
</style>