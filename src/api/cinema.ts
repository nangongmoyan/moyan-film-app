import { headers } from "@/const";
import { TicketFlag } from "@/types/cinema";
import { clientRequest } from "@/utils/request";

/**影院相关接口 */
export const cinemaApi = {
  cinemaList :function(ticketFlag:TicketFlag){
    return clientRequest.get('/gateway',{
      headers:headers.cinemaList,
      params: {
        k: 5291942,
        type: ticketFlag,
        cityId: 440300
      },
    })
  }
}