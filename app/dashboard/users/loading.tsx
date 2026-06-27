import { Skeleton } from "@/components/shared/Skeleton";

export default function UsersLoading() {
  return (
    <div className="animate-fade-in">
      {/* MenuTop skeleton */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>

      {/* Table skeleton */}
      <div className="neu-inset rounded-xl p-5">
        {/* Header row */}
        <div className="flex gap-4 px-2 pb-4 border-b border-white/30">
          {[140, 180, 100, 90, 80, 70].map((w, i) => (
            <Skeleton key={i} className="h-3 rounded" style={{ width: w }} />
          ))}
        </div>

        {/* Data rows */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-4 border-b border-white/20 last:border-0 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-3" style={{ width: 140 }}>
              <Skeleton className="w-10 h-10 rounded-full shrink-0" />
              <Skeleton className="h-3 rounded flex-1" />
            </div>
            {/* Email */}
            <Skeleton className="h-3 rounded" style={{ width: 180 }} />
            {/* Date */}
            <Skeleton className="h-3 rounded" style={{ width: 100 }} />
            {/* Role */}
            <Skeleton className="h-3 rounded" style={{ width: 90 }} />
            {/* Status */}
            <Skeleton className="h-6 w-16 rounded-lg" />
            {/* Actions */}
            <div className="flex gap-2">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-8 h-8 rounded-lg" />
            </div>
          </div>
        ))}

        {/* Pagination skeleton */}
        <div className="flex justify-center gap-2 pt-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="w-10 h-10 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}
