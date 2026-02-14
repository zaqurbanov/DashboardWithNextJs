import { usersMock } from "@/mock/user"
    type Props ={
      page:number | string,
      limit:number|string
    }
    export const getUsers = async (page:number,limit:number)=>{

        const start = (Number(page) - 1) * Number(limit)
        const end  = start + Number(limit)

        const result = await usersMock.slice(start,end)
      return    {
        users:result,
        total:usersMock.length
      }
    }