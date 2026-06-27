import { transactionData } from "@/mock/transactions";
import { productMock } from "@/mock/products";
import { usersMock } from "@/mock/user";
import { StatusPieChart, StockBarChart } from "./ReportsCharts";
import {
  MdCheckCircle,
  MdPending,
  MdCancel,
  MdPeople,
  MdOutlineInventory2,
  MdWarning,
} from "react-icons/md";

export const metadata = { title: "Reports" };

const ROLE_COLORS: Record<string, string> = {
  admin:   "#7878ec",
  manager: "#22c55e",
  user:    "#f59e0b",
  guest:   "#ef4444",
};

export default function ReportsPage() {
  /* ── Transaction stats ── */
  const done      = transactionData.filter((t) => t.status === "done").length;
  const pending   = transactionData.filter((t) => t.status === "pending").length;
  const cancelled = transactionData.filter((t) => t.status === "cancelled").length;
  const total     = transactionData.length;
  const successRate = Math.round((done / total) * 100);

  const statusData = [
    { name: "Completed", value: done,      color: "#22c55e" },
    { name: "Pending",   value: pending,   color: "#f59e0b" },
    { name: "Cancelled", value: cancelled, color: "#ef4444" },
  ];

  /* ── Product stats ── */
  const lowStock     = productMock.filter((p) => p.stock <= 10).length;
  const topProducts  = [...productMock]
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 8)
    .map((p) => ({ title: p.title.length > 14 ? p.title.slice(0, 14) + "…" : p.title, stock: p.stock }));

  /* ── User stats ── */
  const roleCounts = usersMock.reduce<Record<string, number>>((acc, u) => {
    acc[u.role] = (acc[u.role] ?? 0) + 1;
    return acc;
  }, {});
  const roleList = Object.entries(roleCounts).sort((a, b) => b[1] - a[1]);
  const activeUsers   = usersMock.filter((u) => u.status === "active").length;
  const inactiveUsers = usersMock.filter((u) => u.status === "inactive").length;

  const statCards = [
    {
      label: "Success Rate",
      value: `${successRate}%`,
      icon: MdCheckCircle,
      color: "#22c55e",
      sub: `${done} of ${total} transactions`,
    },
    {
      label: "Total Users",
      value: usersMock.length,
      icon: MdPeople,
      color: "var(--color-primary)",
      sub: `${activeUsers} active · ${inactiveUsers} inactive`,
    },
    {
      label: "Total Products",
      value: productMock.length,
      icon: MdOutlineInventory2,
      color: "#f59e0b",
      sub: `${lowStock} low in stock`,
    },
    {
      label: "Low Stock Alert",
      value: lowStock,
      icon: MdWarning,
      color: "#ef4444",
      sub: "products ≤ 10 units",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-up" style={{ animationFillMode: "both" }}>

      {/* ── Header ── */}
      <div>
        <h1 className="font-black text-2xl">Reports</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Aggregated insights across transactions, products, and users.
        </p>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className="neu-flat rounded-2xl p-5 flex flex-col gap-3 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <div
              className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center"
              style={{ color: card.color }}
            >
              <card.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: "#999" }}>{card.label}</p>
              <p className="text-xl font-black mt-0.5">{card.value}</p>
              <p className="text-xs mt-1" style={{ color: "#bbb" }}>{card.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Charts row ── */}
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Status Pie */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="mb-2">
            <p className="font-bold text-sm">Transaction Status</p>
            <p className="text-xs mt-0.5" style={{ color: "#999" }}>
              Distribution across {total} transactions
            </p>
          </div>
          <StatusPieChart data={statusData} />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {statusData.map((s) => (
              <div key={s.name} className="neu-inset rounded-xl p-3 text-center">
                <p className="text-lg font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>{s.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Bar */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="mb-2">
            <p className="font-bold text-sm">Stock Levels</p>
            <p className="text-xs mt-0.5" style={{ color: "#999" }}>
              Top 8 products by available stock
            </p>
          </div>
          <StockBarChart data={topProducts} />
        </div>
      </div>

      {/* ── User role breakdown + low stock ── */}
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Role breakdown */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <p className="font-bold text-sm mb-5">User Roles</p>
          <div className="flex flex-col gap-3">
            {roleList.map(([role, count]) => (
              <div key={role} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold capitalize">{role}</span>
                  <span style={{ color: "#999" }}>
                    {count} user{count > 1 ? "s" : ""} · {Math.round((count / usersMock.length) * 100)}%
                  </span>
                </div>
                <div className="h-2 rounded-full neu-inset overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(count / usersMock.length) * 100}%`,
                      background: ROLE_COLORS[role] ?? "var(--color-primary)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low stock list */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="flex items-center gap-2 mb-5">
            <MdWarning style={{ color: "#ef4444" }} />
            <p className="font-bold text-sm">Low Stock Products</p>
          </div>
          {productMock
            .filter((p) => p.stock <= 10)
            .sort((a, b) => a.stock - b.stock)
            .map((p, i) => (
              <div
                key={p.id}
                className="flex items-center justify-between py-2.5 border-b animate-fade-in"
                style={{ borderColor: "var(--border)", animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
              >
                <span className="text-sm font-medium truncate mr-3">{p.title}</span>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-lg shrink-0"
                  style={{
                    background: p.stock <= 5 ? "#ef444415" : "#f59e0b15",
                    color: p.stock <= 5 ? "#ef4444" : "#f59e0b",
                  }}
                >
                  {p.stock} left
                </span>
              </div>
            ))}
          {productMock.filter((p) => p.stock <= 10).length === 0 && (
            <p className="text-xs text-center py-6" style={{ color: "#bbb" }}>
              All products are well stocked ✓
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
