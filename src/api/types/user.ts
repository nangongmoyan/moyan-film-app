import { User } from "@/types/user";
import { MoYanResponse } from "./response";

export interface GetUserInfoResponse extends MoYanResponse {
  data: User;
}
