import { CommonUser } from "./user";

export interface LoginResult extends CommonUser{
  token: string;
  isRegiest: number;
  operatorId: number;
  platformType: number;
}