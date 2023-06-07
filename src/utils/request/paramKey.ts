import { store } from "@/store"
import dayjs from "dayjs"

export const generateKey = () =>{
  let random = Math.random().toString()
  if(random.startsWith('0')){
    random = Math.random().toString()
  }

  const paramKey = Number(random.slice(2, 9))
  store.commit('setParamKey', { resTimestamp: dayjs().valueOf() , paramKey })
  return paramKey
}