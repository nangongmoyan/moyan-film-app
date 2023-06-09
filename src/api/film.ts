
import { store } from "@/store"
import { headers } from "@/const"
import { clientRequest } from "@/utils/request"
import { FilmBannerResponse, FilmDetailResponse, FilmListResponse } from "./types/film"

/** 电影相关接口 */
export const filmApi ={
  filmBanner: function ():Promise<FilmBannerResponse> {
    return clientRequest.get('/gateway', {
      headers:headers.filmFloatBanner,
      params: {
        cityId: store.state.currentCity.cityId
      },
   
    })
  },

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
        unToast: pageNum > 1,
        cityId: store.state.currentCity.cityId,
      }
    })
  },

  /**
   * 电影详情信息
   * @param {string} filmId 要查询的电影id
   * @returns 
   */
  filmInfo:function(filmId:string) :Promise<FilmDetailResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.filmInfo,
      params:{ filmId }
    })
  }
}