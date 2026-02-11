import { StatusType } from "../statusBadge";

export interface CardItem{
  id:string,
  title:string,
  decription:string,
  image?:string,
  status:StatusType
}