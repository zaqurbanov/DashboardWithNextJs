import { Skeleton } from "@/components/shared/Skeleton";

export default function TeamsLoading() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-20 rounded-lg" />
        <Skeleton className="h-4 w-72 rounded" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="neu-flat rounded-2xl p-5 flex flex-col gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-7 w-12 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="neu-flat rounded-2xl p-6">
        <Skeleton className="h-4 w-28 rounded mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="neu-inset rounded-2xl p-5 flex flex-col gap-3">
              <Skeleton className="w-10 h-10 rounded-xl" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-3 w-16 rounded" />
                <Skeleton className="h-3 w-24 rounded" />
              </div>
              <Skeleton className="h-1.5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {[1, 2].map((i) => (
          <div key={i} className="neu-flat rounded-2xl p-6 flex-1 flex flex-col gap-4">
            <Skeleton className="h-4 w-20 rounded" />
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="flex items-center gap-3">
                <Skeleton className="w-9 h-9 rounded-full shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <Skeleton className="h-3 w-28 rounded" />
                  <Skeleton className="h-2.5 w-36 rounded" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
