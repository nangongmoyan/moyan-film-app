import dayjs from 'dayjs'
import { store } from "@/store"
import { get } from "lodash"


/**
 * 
 * @param key 
 * @param callback 
 * @param timestamp 
 * @returns 
 */
export const dataIsFailure = (
  key:string, 
  callback:(property:any, subTimestamp:boolean)=>boolean,
  timestamp =  24 * 60 * 1000
  )=> {
  /** 从store中获取相关属性 */
  const property = get(store.state, key)
  /** 获取当前时间戳 */
  const curTimestamp = dayjs().valueOf()

  /** 获取属性里面上次请求的时间戳 */
  const resTimestamp = get(property,'resTimestamp', 0)

  /** 计算时间戳的差值是否大于24小时 */
  const subTimestamp = curTimestamp - resTimestamp > timestamp
  return callback(property, subTimestamp) as boolean
}