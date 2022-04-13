import { User } from "./User";

export interface PM {
    uuid: number;
    firstName:string;
    lastName:string;
    mobileNo:number;
    pincode:number;
    email:string;
    gender:string;
    pm: User;
  }
    