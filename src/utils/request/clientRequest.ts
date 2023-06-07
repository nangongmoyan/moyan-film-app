
import { store } from '@/store'
import axios from 'axios'
import { showLoadingToast, showFailToast, closeToast } from 'vant';
import { dataIsFailure } from '../store/dataIsFailure';
import { generateKey } from './paramKey';

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
    let paramKey = store.state.paramKey
    const { unToast: toastValue = false, ...restParams } = config.params
    unToast = toastValue
    if (dataIsFailure('paramKey', (_, subTimestamp) => subTimestamp, 60 * 1000)) {
      paramKey = generateKey()
      
    }
    restParams && Object.assign(config, { params:{...restParams, k: paramKey} })
  }

  !config.headers?.['X-Host'] &&     Object.assign(config, { baseURL: '' })

  const { user } = store.state
  
  if (user && user.token) {
    Object.assign(config.headers, { 'X-Token': user.token })
  }

  if (!unToast) {
    showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: '玩命加载...',
      loadingType: 'spinner',
    })
  }

  return config
}, error=>{
  closeToast()
  showFailToast('加载失败，请稍后重试')
  return Promise.reject(error)
})


/** 响应拦截器 */
clientRequest.interceptors.response.use((response)=>{
  /** 状态码为 2xx 都会进入这里 */
  closeToast()
  return response.data
}, error=>{
  setTimeout(() => closeToast(), 1000)
  showFailToast('加载失败，请稍后重试')
  return Promise.reject(error)
})

