import { headers } from "@/const"
import { clientRequest } from "@/utils/request"
import { FilmListResponse } from "./types/film"

/** 电影相关接口 */
export const filmApi ={
  /**
   * 正在热映电影列表
   * @param param0 
   * @returns 
   */
  filmList:function({pageNum=1, type='1', pageSize = 10}):Promise<FilmListResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.filmList,
      params:{
        type,
        pageNum,
        pageSize,
        k: 2530325,
        cityId: 440300,
        unToast: pageNum > 1
      }
    })
  }
}