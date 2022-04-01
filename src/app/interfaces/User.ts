import { Role } from "./Role";

export interface User{
    uuid: number;
    userId: number;
    password: string;
    status: number;
    role: Role
}