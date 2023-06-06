import { LoginResult } from "@/types/auth";
import { MoYanResponse } from "./response";

export interface LoginResponse extends MoYanResponse {
  data: LoginResult;
}