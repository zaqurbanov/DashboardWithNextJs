"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const tooltipStyle = {
  background: "var(--neu-bg, #f0f2f5)",
  border: "1px solid var(--border, #d1d9e6)",
  borderRadius: 12,
  boxShadow: "4px 4px 10px var(--neu-s1, #d1d9e6), -4px -4px 10px var(--neu-s2, #ffffff)",
  fontSize: 12,
  color: "var(--text, #1a1a1a)",
};

/* ── Status Pie ── */
export function StatusPieChart({
  data,
}: {
  data: { name: string; value: number; color: string }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number, name: string) => [v, name]}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: 12, color: "#999" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

/* ── Stock Bar ── */
export function StockBarChart({
  data,
}: {
  data: { title: string; stock: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 12, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border, #d1d9e6)" horizontal={false} />
        <XAxis
          type="number"
          tick={{ fontSize: 10, fill: "#999" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="title"
          type="category"
          width={110}
          tick={{ fontSize: 10, fill: "#666" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => [v, "Stock"]}
        />
        <Bar dataKey="stock" fill="#7878ec" radius={[0, 6, 6, 0]} maxBarSize={18} />
      </BarChart>
    </ResponsiveContainer>
  );
}
