import { StatusType } from "../statusBadge";

export interface TransactionsInterface{
  id:string,
  image:string,
  name:string,
  surname:string,
  status:StatusType,
  date:string,
  amount:number,
  amountType:string
}