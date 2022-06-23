<template>
<div id="pages">
    <div class="pages">
        <div class="classInfo" v-for="(item,index) in currentPageData" :key="index">
            {{item}}
        </div>
        <div class="img1" @click="prevPage()"></div>
        <div class="img2" @click="nextPage()"></div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            totalPage: 1, //所有页数，默认为1
            currentPage: 1, // 当前页数，默认为1
            pageSize: 9, //每页显示条数
            classInfo: [11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,5,6,11,7,8,9,5,4,5,4,5],  //页面数据
            currentPageData: []  // 当前页显示内容
        }
    },
    mounted(){
        // 计算一共有几页
        this.totalPage = Math.ceil(this.classInfo.length / this.pageSize)
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1:this.totalPage
        this.setCurrentPageData();
    },
    methods: {
        // 设置当前页面数据
        setCurrentPageData(){
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            // console.log(begin)
            // console.log(end)
            this.currentPageData = this.classInfo.slice(
                begin,
                end
            )
            // console.log(this.currentPageData)
        },
        // 上一页
        prevPage(){
            // console.log(this.currentPage)
            if(this.curentPage == 1) return
            this.currentPage--;
            this.setCurrentPageData();
        },
        // 下一页
        nextPage(){
            // console.log(this.currentPage)
            if(this.curentPage == this.totalPage) return

            this.currentPage++
            this.setCurrentPageData()
        }
    }
}
</script>
<style lang="less" scoped>
#pages{
    // background-color: #fff;
    .pages{
        margin: 0 auto;
        width: 600px;
        height: 600px;
        // background-color: rgb(64, 180, 80);
        z-index: 999;
        .classInfo{
            font-size: 25px;
            color: aliceblue;
            z-index: 999;
        }
        .img1{
            width: 150px;
            height: 50px;
            background-color: rgb(189, 111, 111);
        }
        .img2{
            width: 150px;
            height: 50px;
            background-color: rgb(41, 94, 110);
        }
    }
}
</style>

