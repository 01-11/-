
import axios from 'axios'


{

}

export function loginMine(id) {
    return request({
        url:'/user/detail',
        params:{
            uid:id
        }
    })
}


