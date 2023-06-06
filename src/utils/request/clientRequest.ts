
import { store } from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

export const clientRequest = axios.create({
  baseURL: 'https://m.maizuo.com',
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16851707595903716016193537"}'
  }
})

/** 请求拦截器 */
clientRequest.interceptors.request.use((config)=>{
  let unToast = false
  if (config.params) {
    const { unToast: toastValue = false, ...restParams } = config.params
    unToast = toastValue
    restParams && Object.assign(config, { params:restParams })
  }

  !config.headers?.['X-Host'] &&     Object.assign(config, { baseURL: '' })

  const { user } = store.state
  
  if (user && user.token) {
    Object.assign(config.headers, { 'X-Token': user.token })
  }

  if (!unToast) {
    // Toast.loading({
    //   message: '玩命加载...',
    //   forbidClick: true,
    //   loadingType: 'spinner',
    //   duration: 0
    // })
  }

  return config
}, error=>{
  // Toast.fail('加载失败，请稍后重试')
  return Promise.reject(error)
})


/** 响应拦截器 */
clientRequest.interceptors.response.use((response)=>{
  /** 状态码为 2xx 都会进入这里 */
  // Toast.clear()
  return response.data
}, error=>{
  // setTimeout(() => Toast.clear(), 1000)
  // Toast.fail('加载失败，请稍后重试')
  return Promise.reject(error)
})

