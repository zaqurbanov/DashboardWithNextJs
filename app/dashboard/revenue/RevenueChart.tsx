"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MonthlyRevenue } from "@/mock/revenue";

export default function RevenueChart({ data }: { data: MonthlyRevenue[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border, #d1d9e6)" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fill: "#999" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#999" }}
          axisLine={false}
          tickLine={false}
          width={48}
          tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
        />
        <Tooltip
          contentStyle={{
            background: "var(--neu-bg, #f0f2f5)",
            border: "1px solid var(--border, #d1d9e6)",
            borderRadius: 12,
            boxShadow: "4px 4px 10px var(--neu-s1, #d1d9e6), -4px -4px 10px var(--neu-s2, #ffffff)",
            fontSize: 12,
            color: "var(--text, #1a1a1a)",
          }}
          formatter={(value) => [`$${(value ?? 0).toLocaleString()}`, "Revenue"]}
        />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#999", paddingTop: 8 }}
        />
        <Bar
          dataKey="revenue"
          name="Revenue"
          fill="#7878ec"
          radius={[6, 6, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
