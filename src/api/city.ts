import { headers } from "@/const"
import { clientRequest } from "@/utils/request"
import { CityListResponse } from "./types/city"

/** 城市相关的接口 */
export const cityApi = {
  /**
   * 获取城市列表
   * @returns 
   */
  cityList:function():Promise<CityListResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.cityList
    })
  }
}