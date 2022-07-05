<template>
    <div class='search'>    
        <input type="text" v-model="keyWord" name='search' placeholder="张杰">        
        <svg class="icon" aria-hidden="true"  @click="searchHandler">
            <use xlink:href = '#icon-sousuo'></use>                       
        </svg>               
        <table>
        <thead>
            <tr>
                <th>PLAY</th>
                <th>歌曲名称</th>                
                <th>专辑</th>
            </tr>
        </thead>    
        <tbody v-for="(item,i) in search" :key="i">
            <tr>                
                    <td style="width:50px" @click="updateIndex(item)">
                        <svg class="icon" aria-hidden="true" >
                            <use xlink:href = '#icon-shoucang'></use>                       
                        </svg>
                    </td>                
                    <td style="width:230px">{{item.name}}</td>                    
                     <!-- <td>{{item.artists.name}}</td>   -->
                    <td>{{item.album.name}}</td>                               
            </tr>    
        </tbody>
    </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'search',
    data() {
        return {
            keyWord:[], 
            search:''          
        }
    },
    methods: {
        searchHandler(){        
            axios.get('/search?keywords='+this.keyWord).then(res => {            
                console.log('sousou');
                console.log(res);
                this.search = res.data.result.songs
                console.log(this.search);                             
            })                        
        },
        // 搜索后进行播放
        updateIndex(item){
            // 名字不一样，所以更换
            item.al = item.album
            item.al.picUrl = item.al.artist.img1v1Url
            item.ar = item.artists
            // store   mutations
            this.$store.commit('pushPlayList',item)
            this.$store.commit('updatePlayListIndex',this.$store.state.playList.length-1)
        },
    },
  
  
    created() {
       
    },
    setup() {
        
    },
}
</script>

<style lang='less'>
table{
    width: 800px;
    margin: auto;
}
th{
    border-bottom: 1px solid gainsboro;
    height: 60px;
    // width: 200px;
    text-align: center;
   
}
tr:hover {background-color: #f5f5f5;}


 .icon{
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        /* border: 1px solid blue; */
        margin-right: 50px;        
        } 
.search{
    width:800px;
    height:60px;
    // border:1px solid red;
    margin:auto;
    text-align:right;
    input{
        width:200px;
        // border-radius: 10%;
        color: gray;
        // position: fixed;
        // float: left;
        
    }
    // .icon{
    //     width: 40px;
    //     height: 40px;
    // }
}
</style>