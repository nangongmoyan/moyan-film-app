import { CinemaItem } from "@/types/cinema";
import { MoYanResponse } from "./response";

export interface CinemaListResponse extends MoYanResponse {
  data: {cinemas:CinemaItem[]};
}