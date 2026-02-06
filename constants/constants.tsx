import { MdDashboard, MdHelp, MdOutlineProductionQuantityLimits, MdPeople, MdReceipt, MdReport, MdSettings } from "react-icons/md";

export interface Menu {
  title: string;
  list: MenuItem[]

}
export interface MenuItem {
  title: string;
  path: string ;
  icon: React.ReactNode;
}

export const menu: Menu[] = [
  {
    title: "Pages",
    list:[
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
       {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdPeople />,
      },
       {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdOutlineProductionQuantityLimits />,
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
      },
         {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdReport />,
      },
         {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
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
      },
        {
        title: "Help",
        path: "/dashboard/users/help",
        icon: <MdHelp />,
      },
    ]
  },

];