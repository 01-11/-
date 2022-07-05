// 用于创建vuex的store

// 引入
// import { fa } from 'element-plus/es/locale'
import { createStore } from 'vuex'

// 创建一个新的store实例
export default createStore({
  // state 用于存储数据
  state: {
    // 刚打开，先显示固定的歌曲播放功能
      playList:[{
          al:{
            id: 2064204,
            name: "Clint Eastwood",
            pic: 109951166712106000,
            picUrl: "https://p1.music.126.net/HFrae6t7NB3a0anQimL7jA==/109951166712106001.jpg",
            pic_str: "109951166712106001"
          },
          id: 22542887,
          name: "Clint Eastwood",
          ar:{
            name: "Gorillaz"
          },
          
      }],
          
      // ar:0,
      playListIndex:0,//默认下标为0
      isbtnShow:true, //暂停按钮的显示
     
      currentTime:0 , //当前时间
      isFooterMusic:true,  //判断底部组件是否显示
      login:false ,  //默认登录为false
      user:'' , //用户信息
      

      
  },
  
 
  // 用于响应组件中的动作
  /**
   * 为什么要把逻辑写在actions中?????
   *  更好地实现复用~~
   */
  actions: {
    login(context,value){
      console.log('actions中的login被调用了',context,value);                     
    },
    user(context,value){
        console.log('actions中的user被调用了',context,value);
    },    
  },
  /***
   * 用于操作数据(state) 
   * mutations：会拿到2个东西，一个是state，一个是传来的数据
   * 改变状态
   */ 
   mutations: {
    
    //  更改登录
    updateIsLogin(state,val){
        console.log('我是updateLogin',state,val);
        state.login = true   //若登录成功，那么login就为true
    },
    // 暂停按钮
    updateIsbtnShow(state,val) {
      console.log('我是updateIsbtnShow',state,val);
        state.isbtnShow = val  
        // 可以改变 按钮的图标
    },
    // 列表
    updatePlayList(state,val) {
      console.log('我是updatePlayList');
      console.log(state,'val',val);
      // val是整个歌曲列表   把val给state.playList
        state.playList = val 
    },
    // 列表索引
    updatePlayListIndex(state,val){
      console.log('我是updatePlayListIndex',state,val);
      state.playListIndex = val  
      // 把传来的值给state.playListIndex
    },
    //  搜索 
    pushPlayList(state,val){
      console.log('我是pushPlayList',state,val);
      state.playList.push(val)
    },
    // 监听实践的改变
    updateCurrentTime(state,val){
      console.log('我是updateCurrentTime');
      console.log(state.currentTime);
      state.currentTime = val
    },

    
    // userDetailsIndex(){
    //     console.log('我是userDetailsIndex');
    // },
    // 在mutations
    
    
  },
// 准备getters --- 用于将state中的数据进行加工
  getters: {
   
  },
  modules: {
  }
})
