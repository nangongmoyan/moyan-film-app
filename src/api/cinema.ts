import { headers } from "@/const";
import { TicketFlag } from "@/types/cinema";
import { clientRequest } from "@/utils/request";
import { CinemaListResponse } from "./types/cinema";
import { store } from "@/store";

/**影院相关接口 */
export const cinemaApi = {
  cinemaList :function(ticketFlag:TicketFlag) :Promise<CinemaListResponse> {
    return clientRequest.get('/gateway',{
      headers:headers.cinemaList,
      params: {
        type: ticketFlag,
        cityId: store.state.currentCity.cityId
      },
    })
  }
}