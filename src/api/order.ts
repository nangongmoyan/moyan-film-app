import { clientRequest } from "@/utils/request"
import { OrderDetailResponse, OrderListResponse } from "./types/order"
import { headers } from "@/const"

export const orderApi = {

  /**
   * 订单列表
   * @param param0 
   * @returns 
   */
  orderList:function({ pageNum=1, pageSize=10}):Promise<OrderListResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.orderList,
      params:{ pageNum, pageSize, type: 9999, sortKey: 2, sortType: 1}
    })
  },
  
  /**
   * 订单详情
   * @param orderId 
   * @returns 
   */
  orderDetail:function(orderId:string):Promise<OrderDetailResponse>{
    return clientRequest.get('/gateway',{
      headers:headers.orderDetail,
      params:{ orderId, type: 2 }
    })
  }
}