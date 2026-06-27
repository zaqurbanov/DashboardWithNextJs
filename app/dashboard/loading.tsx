import { Skeleton } from "@/components/shared/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col md:flex-row gap-2 animate-fade-in">
      {/* Main column */}
      <div className="md:flex-3 flex flex-col gap-5">
        {/* Stat cards */}
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="neu-inset rounded-xl p-4 flex gap-4 items-start min-w-52 flex-1 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-3 w-24 rounded" />
                <Skeleton className="h-5 w-16 rounded" />
                <Skeleton className="h-3 w-32 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Transaction table */}
        <div className="neu-inset rounded-xl p-5">
          <Skeleton className="h-4 w-36 rounded mb-5" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-3 border-b border-white/20 last:border-0"
            >
              <Skeleton className="w-9 h-9 rounded-full shrink-0" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-3 w-32 rounded" />
                <Skeleton className="h-2.5 w-20 rounded" />
              </div>
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-6 w-16 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <Skeleton className="neu-inset rounded-xl" style={{ height: 260 }} />
      </div>

      {/* Right bar */}
      <div className="md:flex-1 flex flex-col gap-4">
        <Skeleton className="h-4 w-28 rounded" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="neu-inset rounded-xl p-4 flex gap-3 items-center">
            <Skeleton className="w-10 h-10 rounded-full shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className="h-3 w-28 rounded" />
              <Skeleton className="h-2.5 w-20 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
