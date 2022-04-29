import { Hospital } from "./Hospital";
import { User } from "./User";

export interface Doctor {
  uuid: number;
  doctor: User;
  city:string;
  district:string;
  email:string;
  firstName:string;
  gender:string;
  hospital:Hospital;
  lastName:string;
  mobileNo:number;
  pincode:number;
  state:string;
  name:string;
}
  