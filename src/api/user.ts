import { headers } from "@/const"
import { clientRequest } from "@/utils/request"
import { GetUserInfoResponse } from "./types/user"

/** 用户相关的接口 */
export const userApi = {

  /**
   * 获取用户信息
   * @returns 
   */
  getUserInfo:function():Promise<GetUserInfoResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.userInfoGet,
    })
  }
}