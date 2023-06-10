import { OrderStatus } from "@/types/order";

export const convertStatus = (status:OrderStatus)=> {
  let statusName = '',icon=''

  switch(status){
    case OrderStatus.ToBePay:
      icon ='paid'
      statusName = '待支付'
      break
    case OrderStatus.Complete:
      icon ='passed'
      statusName = '已完成'
      break
    case OrderStatus.Cancel:
      icon ='close'
      statusName = '已取消'
      break
  }

  return { icon, statusName }
}