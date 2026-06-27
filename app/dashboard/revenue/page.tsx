import Image from "next/image";
import { transactionData } from "@/mock/transactions";
import { monthlyRevenue } from "@/mock/revenue";
import StatusBadge from "@/components/shared/StatusBadge";
import RevenueChart from "./RevenueChart";
import {
  MdAttachMoney,
  MdCheckCircle,
  MdPending,
  MdCancel,
  MdTrendingUp,
} from "react-icons/md";

export const metadata = { title: "Revenue" };

export default function RevenuePage() {
  /* ── Stats ── */
  const done      = transactionData.filter((t) => t.status === "done");
  const pending   = transactionData.filter((t) => t.status === "pending");
  const cancelled = transactionData.filter((t) => t.status === "cancelled");

  const totalRevenue    = done.reduce((s, t) => s + t.amount, 0);
  const pendingRevenue  = pending.reduce((s, t) => s + t.amount, 0);
  const cancelledRevenue = cancelled.reduce((s, t) => s + t.amount, 0);
  const avgTransaction  = Math.round(totalRevenue / (done.length || 1));

  /* ── Currency breakdown ── */
  const byCurrency = transactionData
    .filter((t) => t.status === "done")
    .reduce<Record<string, number>>((acc, t) => {
      acc[t.amountType] = (acc[t.amountType] ?? 0) + t.amount;
      return acc;
    }, {});

  const currencyList = Object.entries(byCurrency).sort((a, b) => b[1] - a[1]);
  const maxCurrency  = currencyList[0]?.[1] ?? 1;

  /* ── Year total for YoY ── */
  const yearTotal = monthlyRevenue.reduce((s, m) => s + m.revenue, 0);

  const statCards = [
    {
      label: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: MdAttachMoney,
      color: "var(--color-primary)",
      sub: `${done.length} completed`,
    },
    {
      label: "Avg Transaction",
      value: `$${avgTransaction.toLocaleString()}`,
      icon: MdTrendingUp,
      color: "#22c55e",
      sub: "per completed tx",
    },
    {
      label: "Pending",
      value: `$${pendingRevenue.toLocaleString()}`,
      icon: MdPending,
      color: "#f59e0b",
      sub: `${pending.length} transactions`,
    },
    {
      label: "Cancelled",
      value: `$${cancelledRevenue.toLocaleString()}`,
      icon: MdCancel,
      color: "#ef4444",
      sub: `${cancelled.length} transactions`,
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-up" style={{ animationFillMode: "both" }}>

      {/* ── Header ── */}
      <div>
        <h1 className="font-black text-2xl">Revenue</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Financial overview based on all recorded transactions.
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

      {/* ── Chart + Currency ── */}
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Bar chart */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold text-sm">Monthly Revenue</p>
              <p className="text-xs mt-0.5" style={{ color: "#999" }}>2025 full year</p>
            </div>
            <p className="text-sm font-black" style={{ color: "var(--color-primary)" }}>
              ${yearTotal.toLocaleString()}
            </p>
          </div>
          <RevenueChart data={monthlyRevenue} />
        </div>

        {/* Currency breakdown */}
        <div className="neu-flat rounded-2xl p-6 lg:w-64 shrink-0 flex flex-col gap-4">
          <div>
            <p className="font-bold text-sm">By Currency</p>
            <p className="text-xs mt-0.5" style={{ color: "#999" }}>Completed only</p>
          </div>
          <div className="flex flex-col gap-4">
            {currencyList.map(([currency, amount]) => (
              <div key={currency} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold">{currency}</span>
                  <span style={{ color: "#999" }}>${amount.toLocaleString()}</span>
                </div>
                <div className="h-2 rounded-full neu-inset overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(amount / maxCurrency) * 100}%`,
                      background: "var(--color-primary)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Recent transactions ── */}
      <div className="neu-flat rounded-2xl p-6">
        <p className="font-bold text-sm mb-5">Recent Transactions</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                {["Customer", "Date", "Amount", "Currency", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left pb-3 px-2 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#aaa" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactionData.map((tx, i) => (
                <tr
                  key={tx.id}
                  className="border-t animate-fade-in"
                  style={{
                    borderColor: "#e8eaed",
                    animationDelay: `${i * 30}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={tx.image}
                        alt={tx.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover shrink-0"
                      />
                      <span className="font-medium">
                        {tx.name} {tx.surname}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2" style={{ color: "#999" }}>{tx.date}</td>
                  <td className="py-3 px-2 font-bold">${tx.amount.toLocaleString()}</td>
                  <td className="py-3 px-2">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-lg neu-inset"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {tx.amountType}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <StatusBadge type={tx.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
