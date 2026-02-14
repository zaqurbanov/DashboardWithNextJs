import { RoleType } from "./roleType";

export interface UserInterface{
    id:string,
    image:string,
    name:string,
    email:string,
    role:RoleType,
    createdAt:string,
    status:string
}