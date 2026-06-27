import { Skeleton } from "@/components/shared/Skeleton";

export default function ReportsLoading() {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-24 rounded-lg" />
        <Skeleton className="h-4 w-80 rounded" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="neu-flat rounded-2xl p-5 flex flex-col gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-6 w-16 rounded" />
              <Skeleton className="h-2.5 w-32 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {[1, 2].map((i) => (
          <div key={i} className="neu-flat rounded-2xl p-6 flex-1">
            <Skeleton className="h-4 w-40 rounded mb-1" />
            <Skeleton className="h-3 w-28 rounded mb-4" />
            <Skeleton className="w-full rounded-xl" style={{ height: 240 }} />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {[1, 2].map((i) => (
          <div key={i} className="neu-flat rounded-2xl p-6 flex-1 flex flex-col gap-3">
            <Skeleton className="h-4 w-28 rounded mb-2" />
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-16 rounded" />
                  <Skeleton className="h-3 w-20 rounded" />
                </div>
                <Skeleton className="h-2 rounded-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
