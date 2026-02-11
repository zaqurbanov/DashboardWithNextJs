import { StatusType } from "@/types/statusBadge";

export   const colorSchema = (type:StatusType)=>{
    let color = ""
    switch (type) {
      case "cancelled":
        color= "bg-red-400"
        break;
          case "done":
        color= "bg-green-400"
        break;

          case "pending":
        color= "bg-lime-400"
        break;

          case "default":
        color= "bg-grey-400"
        break;

    
      default:
        break;
    }

    return color
  }