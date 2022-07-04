<template>
    <div>
        <div class="songComment"> 
            <div class="commentTitle">
                    <svg class="icon" aria-hidden="true" @click="display(item.id)">
                        <use xlink:href = '#icon-a-1'></use>                       
                    </svg> 
                    <p>
                        热门评论
                    </p>
            </div>
            <hr>
                    
            <a-list item-layout="horizontal" :data-source="songComment">
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
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'songComment',
    data() {
        return {
            songComment:[]
        }
    },
    created() {
        axios.get('/comment/music?id='+this.$route.params.id+'&limit=1').then(res => {
            console.log(res);
            this.songComment = res.data.hotComments
            console.log(this.songComment);
        })
    },
}
</script>

<style lang='less'>
.songComment{
    width: 800px;
    height: 400px;
    margin-top: 70px;
    .commentTitle{
        width: 800px;
        height: 100px;
        // border: 1px solid red;
        margin-bottom: 10px;
         .icon{
                width: 60px;
                height: 60px;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
                margin-left: 10px;
                float: left;                
        }
        p{
            font-family: 'STCaiyun';
            font-size: 35px;
            margin-top: 10px;
            margin-left: 100px;
            text-align: left;
        }
    }
}
</style>