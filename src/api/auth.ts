import { headers } from "@/const"
import { LoginResponse } from "./types/auth"
import { clientRequest } from "@/utils/request"

/** 登录相关接口 */
export const authApi = {

  /**
   * 发送登录验证码
   * @param data 
   * @returns 
   */
  sendSmsCode:function(data:{mobile:string, type:string}){
    return clientRequest.post('/gateway', data, {
      headers:headers.smsCodeSend,
    })
  },

  /**
   * 短信登录
   * @param data 
   * @returns 
   */
  loginBySms:function(data:{mobile:string, smsCode:string}):Promise<LoginResponse>{
    return clientRequest.post('/gateway', data, {
      headers:headers.smsCodeLogin,
    })
  }
}