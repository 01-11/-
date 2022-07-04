<template>
    <div class="discComment">       
        <a-list item-layout="horizontal" :data-source="discComment">
            <template #renderItem="{item}">
            <a-list-item>
                <a-list-item-meta :description="item.content" style="textAlign:left">                  
                        <template #title>
                            <div class="discName">
                                <p>{{item.user.nickname}}</p>
                            </div>                            
                        </template>
                        <template #avatar>
                            <div class="discPic">
                                <a-avatar :src="item.user.avatarUrl"  style="width:80px;height:80px"/>
                            </div>                        
                        </template>                        
                            <div>
                                <a>{{item.timeStr}}</a>
                            </div>                                                                     
                </a-list-item-meta>
            </a-list-item>
            </template>
        </a-list>
    </div>
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
.discComment{
    width: 800px;
    // height: 1200px;
    // border: 1px solid red;
    margin: auto;
    .discName{
        width: 300px;
        height: 50px;
        // border: 1px solid black;
        p{
            font-size: 15px;
        }
    }
    .discPic{
        width: 100px;
        // border: 1px solid green;
        height: 100px;
        aAvatar{
           width: 100%;
           height: 100%;
        }
    }
}    
</style>