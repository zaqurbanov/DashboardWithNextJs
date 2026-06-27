export interface MonthlyRevenue {
  month: string;
  revenue: number;
  count: number;
}

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "Jan", revenue: 3200,  count: 8  },
  { month: "Feb", revenue: 4100,  count: 11 },
  { month: "Mar", revenue: 5600,  count: 14 },
  { month: "Apr", revenue: 4800,  count: 12 },
  { month: "May", revenue: 6200,  count: 16 },
  { month: "Jun", revenue: 7100,  count: 18 },
  { month: "Jul", revenue: 5900,  count: 15 },
  { month: "Aug", revenue: 6800,  count: 17 },
  { month: "Sep", revenue: 7500,  count: 19 },
  { month: "Oct", revenue: 8200,  count: 21 },
  { month: "Nov", revenue: 9430,  count: 24 },
  { month: "Dec", revenue: 10684, count: 27 },
];
