import { Skeleton } from "@/components/shared/Skeleton";

export default function HelpLoading() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-36 rounded-lg" />
        <Skeleton className="h-4 w-64 rounded" />
      </div>
      <div className="neu-flat rounded-2xl p-8 flex flex-col items-center gap-4">
        <Skeleton className="w-14 h-14 rounded-2xl" />
        <Skeleton className="h-6 w-52 rounded" />
        <Skeleton className="h-3 w-72 rounded" />
        <Skeleton className="w-full max-w-md h-12 rounded-xl" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="neu-flat rounded-2xl p-5 flex flex-col gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-4 w-24 rounded" />
              <Skeleton className="h-3 w-32 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="neu-flat rounded-2xl p-6 flex flex-col gap-3">
        <Skeleton className="h-4 w-52 rounded mb-2" />
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
