import { SubCityItem } from "@/types/city";
import { MoYanResponse } from "./response";

export interface CityListResponse extends MoYanResponse {
  data: { cities:SubCityItem[] };
}
