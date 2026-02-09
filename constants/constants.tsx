import { MdDashboard, MdHelp, MdOutlineProductionQuantityLimits, MdPeople, MdReceipt, MdReport, MdSettings } from "react-icons/md";

export interface Menu {
  title: string;
  list: MenuItem[]

}
export interface MenuItem {
  title: string;
  path: string ;
  icon: React.ReactNode;
  id:string;
}

export const menu: Menu[] = [
  {
    title: "Pages",
    list:[
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
        id:"1"
      },
       {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdPeople />,
        id:"2"
      },
       {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdOutlineProductionQuantityLimits />,
        id:"3"
      },
    ]
  },
    {
    title: "Analytics",
    list:[
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdReceipt />,
        id:"4"
      },
         {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdReport />,
        id:"5"
      },
         {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
        id:"6"
      },
    ]
  },
  {
    title: "Users",
    list:[
    
      {
        title: "Settings",
        path: "/dashboard/users/settings",
        icon: <MdSettings />,
        id:"7"
      },
        {
        title: "Help",
        path: "/dashboard/users/help",
        icon: <MdHelp />,
        id:"8"
      },
    ]
  },

];