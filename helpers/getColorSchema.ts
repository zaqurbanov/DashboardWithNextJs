import { StatusType } from "@/types/statusBadge";
import { text } from "stream/consumers";

export const colorSchema = (type: StatusType) => {
  let color = {
    text: "",
    bg: "",
    shadow1: "",
    shadow2: "",
  };
  switch (type) {


        case "done":
      color = {
        bg: "#618118",
        text: "#618118",
        shadow1: "#768558",
        shadow2: "#7f8573",
      };
      break;
    case "cancelled":
      color = {
        bg: "#701414",
        text: "#701414",
        shadow1: "#6a3737",
        shadow2: "#6a3737",
      };
      break;


    case "pending":
      color = {
        bg: "#618118",
        text: "#d6e26e",
        shadow1: "#f0f2f5",
        shadow2: "#f0f2f5",
      };
      break;

    case "default":
      color = {
        bg: "#585252",
        text: "#f0f2f5",
        shadow1: "#f0f2f5",
        shadow2: "#f0f2f5",
      };
      break;

    default:
      break;
  }

  return color;
};
