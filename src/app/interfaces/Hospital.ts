import { Level } from "./Level";

export interface Hospital {
    hospitalId:number;
    city:string;
    district:string;
    hospitalName:string;
    pincode:number;
    state:string;
    level:Level;
  }