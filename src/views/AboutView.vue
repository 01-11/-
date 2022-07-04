<template>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍后为：{{bigSum}}</h3>
    <h5>我在{{school}},学习{{subject}}</h5>
    <!--1 v-model双向绑定 -->
    <select v-model="n">
        <!-- 3、若不需要这么麻烦的话，就是  select v-model:number='n' 
                这个的意思是 强制转换为数字
         -->
        <!--2、 加 ： 代表把value中的当成js表达式来解析===解析成纯粹的数字 -->
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>      
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为偶数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,
            
        }
    }, 
    computed:{
        // 靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },       
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        /**
          *... (ES6语法)就是把对象依次取出,放在computed中
                借助mapState生成计算属性,从state中读取数据. (对象写法)
         */                     
        // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性,从state中读取数据.  数组写法
        ...mapState(['sum','school','subject']),


        //  bigSum(){
        //     return this.$store.getters.bigSum
        // }

        // 借助mapGetters生成计算属性,从getters中读取数据.  数组写法
        ...mapGetters(['bigSum'])
    },
    methods: {
        // increment(){
        //     // 进行dispatch('要进行的动作','数据')
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.n)
        // },

        // 借助mapMutations 生成对应的方法,方法中会调用commit去联系 mutations (对象写法)
        // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

         // 借助mapMutations 生成对应的方法,方法中会调用commit去联系 mutations (数组写法)
        ...mapMutations(['JIA','JIAN']),
        /******************************************************* */

        // incrementOdd(){            
        //     this.$store.dispatch('jiaOdd',this.n)            
        // },
        // incrementWait(){            
        //     this.$store.dispatch('jiaWait',this.n)           
        // },

        // 借助mapActions 生成对应的方法,方法中会调用 dispatch 去联系 actions (对象写法)
        // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

        // 借助mapActions 生成对应的方法,方法中会调用 dispatch 去联系 actions (数组写法)
        ...mapActions(['jiaOdd','jiaWait'])
    },
    mounted() {
        // console.log('Count',this.$store)
        // const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        // console.log(x);
    },
}
</script>
<style>

</style>