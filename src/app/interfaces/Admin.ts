import { User } from "./User";

export interface Admin {
    uuid: number;
    firstName:string;
    lastName:string;
    mobileNo:number;
    pincode:number;
    email:string;
    gender:string;
    admin: User;
    name:string;
  }
    