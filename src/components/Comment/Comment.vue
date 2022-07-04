<template>
  <div id='Comment'>
    <div>
      <h3 style='display: inline-block'>评论</h3>
      <span style='font-size: 12px;margin-left: 10px'> 共{{ goodComments.totalCount }}条评论</span>
    </div>
    <hr color='#C20C0C'>
    <!--接收用户输入评论-->
    <div class='iptarea'>
      <div class='head'><img src='https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50'></div>
      <div class='txtwrap'>
        <em>◆</em>
        <span>◆</span>
        <textarea placeholder='评论'></textarea>
      </div>
    </div>

    <!-- 推荐评论 -->
    <div class='goodComments' v-if='pageNo === 1'>
      <h5>精彩评论</h5>
      <hr size='1px'>
      <ul>
        <li v-for='comment in goodComments.comments' :key='comment.commentId'>
          <div class='head'><img :src='`${comment.user.avatarUrl}?param=50y50`'>
          </div>
          <div class='user_cmmt'>
            <span>{{ comment.user.nickname }} ： </span>
            <span>{{ comment.content }}</span>
            <div class='bottom'>
              <div style='color: #999999'>{{ comment.timeStr }}</div>
              <div>
                <el-button type='text' size='mini' icon='el-icon-thumb'></el-button>
                <span>({{ comment.likedCount }}) | </span>
                <a href=''>回复</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 最新评论 -->
    <div class='newComments'>
      <h5>最新评论</h5>
      <hr size='1px'>
      <ul>
        <li v-for='comment in newComments.comments' :key='comment.commentId'>
          <div class='head'><img :src='`${comment.user.avatarUrl}?param=50y50`'>
          </div>
          <div class='user_cmmt'>
            <span>{{ comment.user.nickname }} ： </span>
            <span>{{ comment.content }}</span>
            <div class='bottom'>
              <div style='color: #999999'>{{ comment.timeStr }}</div>
              <div>
                <el-button type='text' size='mini' icon='el-icon-thumb'></el-button>
                <span>({{ comment.likedCount }}) | </span>
                <a href=''>回复</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页器 -->
    <el-pagination
      background
      layout='prev, pager, next'
      :current-page='pageNo'
      :page-size='pageSize'
      :pager-count='9'
      :total='goodComments.totalCount'
      style='margin-top: 20px;text-align: center'
      @current-change='handleCurrentChange'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {
      pageNo: 1,
      cursor: undefined,
      goodComments: {},
      newComments: {},
    }
  },
  props: {
    id: { required: true },
    type: { required: true, type: Number },
    // 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
    pageSize: { default: 20 }, // 最新评论条数
    goodCommentSize: { default: 20 }, // 精彩评论条数
  },
  methods: {
    async getCommentData() {
      const { id, type, pageNo, pageSize, cursor } = this
      if (pageNo !== 1) {
        let result = await this.$API.reqComment({ id, type, pageNo, pageSize, sortType: 3, cursor })
        if (result.data.code === 200) {
          this.newComments = result.data.data
        }
      } else {
        // 获取精彩评论
        let result = await this.$API.reqComment({ id, type, pageNo, pageSize, sortType: 2 })
        if (result.data.code === 200) {
          this.goodComments = result.data.data
        }

        // 获取最新评论
        let result2 = await this.$API.reqComment({ id, type, pageNo, pageSize, sortType: 3 })
        if (result2.data.code === 200) {
          this.newComments = result2.data.data
        }
      }

    },
    handleCurrentChange(curPage) {
      this.pageNo = curPage
      if (curPage !== 1) { // sortType = 3 pageNo不等于1是需要设置cursor 有bug
        this.cursor = this.newComments.comments[this.pageSize - 1].time
      }
      this.getCommentData()
    },
  },
  mounted() {
    this.getCommentData()
  },
  watch:{
    // 监听路由信息，如果路由发生变化，则重新获取数据
    '$route' () {
      this.getCommentData()
    }
  }
}
</script>

<style scoped lang='less'>
#Comment {
  margin-top: 10px;

  .iptarea {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 20px;

    .head {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .txtwrap {
    width: 600px;
    margin-left: 10px;
    position: relative;

    em {
      color: #cdcdcd;
      position: absolute;
      left: -4px;
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
      height: 10px;
      line-height: normal;
    }

    span {
      position: absolute;
      left: -2px;
      color: #FFFFFF;
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
      height: 10px;
      line-height: normal;
    }

    textarea {
      height: 60px;
      padding: 10px;
      width: 100%;
      resize: none;
      display: block;
      border-color: #cdcdcd;
    }

  }

  .goodComments {
    margin-top: 20px;
  }

  .newComments {
    margin-top: 50px;
  }

  ul {
    li {
      display: flex;
      flex-flow: row nowrap;
      padding: 15px 0 5px 0;
      width: 100%;
      border-bottom: 1px solid #cccccc;

      .head {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .user_cmmt {
        margin-left: 10px;
        font-size: 12px;
        width: 100%;

        span:first-child {
          color: #0c73c2;
        }

        .bottom {
          display: flex;
          flex-flow: nowrap;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>