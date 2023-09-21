// axios 二次封装
import axios from 'axios'
const request = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default request