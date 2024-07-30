// 1. 引入
import axios from 'axios'
import router from './src/router/RouterList.js'

// 3. 配置信息
const config = {
  // 每次请求的协议、IP地址。  设置该配置后，每次请求路径都可以使用相对路径，例如"/admin/login"
  baseURL: 'http://mockjs',
  // 请求超时时间
  timeout: 10000,
  // 每次请求携带cookie
  withCredentials: true
}

// 2. 创建实例
const instance = axios.create(config)
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = window.localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  if (response.data.code === 999) {
    router.replace('/')
  }
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 4. 导出
export default instance
