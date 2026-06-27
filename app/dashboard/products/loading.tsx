import { Skeleton } from "@/components/shared/Skeleton";

export default function ProductsLoading() {
  return (
    <div className="animate-fade-in">
      {/* MenuTop skeleton */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-10 w-36 rounded-xl" />
      </div>

      {/* Table skeleton */}
      <div className="neu-inset rounded-xl p-5">
        {/* Header row */}
        <div className="flex gap-4 px-2 pb-4 border-b border-white/30">
          {[160, 180, 80, 100, 70, 70].map((w, i) => (
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
            {/* Image + title */}
            <div className="flex items-center gap-3" style={{ width: 160 }}>
              <Skeleton className="w-10 h-10 rounded-full shrink-0" />
              <Skeleton className="h-3 rounded flex-1" />
            </div>
            {/* Description */}
            <Skeleton className="h-3 rounded" style={{ width: 180 }} />
            {/* Price */}
            <Skeleton className="h-3 rounded" style={{ width: 80 }} />
            {/* Date */}
            <Skeleton className="h-3 rounded" style={{ width: 100 }} />
            {/* Stock */}
            <Skeleton className="h-3 rounded" style={{ width: 70 }} />
            {/* Actions */}
            <div className="flex gap-2">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-8 h-8 rounded-lg" />
            </div>
          </div>
        ))}

        {/* Pagination skeleton */}
        <div className="flex justify-center gap-2 pt-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-10 h-10 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}
