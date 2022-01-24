import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import router from '@/router'
import { removeItem } from './storage'
import { TOKEN } from '@/constant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(
  (config) => {
    console.log(config)

    config.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded;charset=UTF-8'
    console.log(store.getters.token)
    if (store.getters.token) {
      config.headers.Authorization = `${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const { code, msg } = response.data
    // 需要判断当前请求是否成功
    if (code === 200) {
      return response.data
    } else if (code === 401) {
      removeItem(TOKEN)
      router.push({
        path: '/login'
      })
    } else {
      // 成功返回解析后得数据
      ElMessage.error(msg)
      return Promise.reject(new Error(msg))
    }
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
