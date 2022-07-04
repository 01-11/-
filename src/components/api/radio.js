import axios from 'axios'
import main from '@/main'
export function getRadioBanner() {
    return main({
        methods: 'GET',
        url:'/dj/banner'
    })
}