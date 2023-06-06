
export interface CommonUser {
  accountName: string;
  birthday: string;
  gender: number;
  headIcon: string;
  mail: string;
  mobile: string;
  nickName: string;
  userId: number;
}

export interface User extends CommonUser {
  hasPayPwd:number
  haiPassword: number
  hasDefaultAddr:number
  thirdAccount: any[]
}