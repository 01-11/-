<template>
    <div>
        <!-- <el-input placeholder="张杰" v-model="search" class="searchAll"> -->
        <input type="text" v-model="search" name="search" placeholder="张杰">
        <button @click="searchHandler">搜搜</button>        
        <!-- </el-input> -->
        <!-- <el-button @click="searchHandler">搜索</el-button> -->
        <!-- <div v-for="item in search" :key="item.id">
            {{item.name}}
        </div> -->

         <table >
        <thead>
            <tr>
                <th>PLAY</th>
                <th>歌曲名称</th>
                <th>歌手</th>
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
                     <td>{{item.artists.name}}</td>  
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
            search:[],           
        }
    },
    methods: {
        searchHandler(){        
            axios.get('/search?keywords='+this.search).then(res => {            
                console.log('sousou');
                console.log(res);
                this.search = res.data.result.songs
                console.log(this.search);      
                //  this.searchAll = ""                        
            }) 
            
           
        },
        // 搜索后进行播放
        updateIndex(item){
            // 名字不一样，所以更换
            item.al = item.album
            item.al.picUrl = item.al.artist.img1v1Url
            item.ar = item.artists
            // store
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
</style>