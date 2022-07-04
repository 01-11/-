<template>
    <div>
        我是我的
    </div>
</template>

<script>
import axios from 'axios'
import {loginMine} from '@/components/api/login'
export default {
    setup() {
        
    },
    mounted() {
        console.log('我是个人中心')
    },
    methods: {
        getMyMusic(){
            let res = loginMine(this.$store.state.profile.userId)
            console.log(res);
        }
    },
    created() {
        // axios.get('/user/detail?uid='+this.data.bindings.userId).then(res => {
        //     console.log(res)
            
        // })
       
    },
}
</script>