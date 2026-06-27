import { Skeleton } from "@/components/shared/Skeleton";

export default function RevenueLoading() {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-28 rounded-lg" />
        <Skeleton className="h-4 w-72 rounded" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="neu-flat rounded-2xl p-5 flex flex-col gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-6 w-24 rounded" />
              <Skeleton className="h-2.5 w-28 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <Skeleton className="h-4 w-36 rounded mb-1" />
          <Skeleton className="h-3 w-24 rounded mb-5" />
          <Skeleton className="w-full rounded-xl" style={{ height: 260 }} />
        </div>
        <div className="neu-flat rounded-2xl p-6 lg:w-64 shrink-0 flex flex-col gap-4">
          <Skeleton className="h-4 w-28 rounded" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <Skeleton className="h-3 w-10 rounded" />
                <Skeleton className="h-3 w-16 rounded" />
              </div>
              <Skeleton className="h-2 rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="neu-flat rounded-2xl p-6">
        <Skeleton className="h-4 w-40 rounded mb-5" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
            <Skeleton className="w-8 h-8 rounded-full shrink-0" />
            <Skeleton className="h-3 flex-1 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-3 w-12 rounded" />
            <Skeleton className="h-6 w-16 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
