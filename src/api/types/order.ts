import { OrderDetail, OrderListItem } from "@/types/order";
import { MoYanResponse, PageResponse } from "./response";

export interface  OrderListResponse extends MoYanResponse {
  data: {
    page: PageResponse;
    list: OrderListItem[];
  };
}
export interface  OrderDetailResponse extends MoYanResponse {
  data: OrderDetail;
}