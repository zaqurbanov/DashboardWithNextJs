import { Skeleton } from "@/components/shared/Skeleton";

export default function EditProductLoading() {
  return (
    <div className="mt-2 animate-fade-in">
      <div className="mb-6 flex flex-col gap-2">
        <Skeleton className="h-7 w-40 rounded-lg" />
        <Skeleton className="h-4 w-72 rounded" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image preview skeleton */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col items-center gap-5 lg:w-72 shrink-0">
          <Skeleton className="w-full rounded-xl" style={{ aspectRatio: "16/9" }} />
          <Skeleton className="h-9 w-36 rounded-xl" />
          <Skeleton className="h-4 w-28 rounded" />
        </div>

        {/* Form skeleton */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col gap-5 flex-1">
          <Skeleton className="h-6 w-36 rounded" />
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className={`rounded-xl ${i === 2 ? "h-20" : "h-11"}`} />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-5">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-14 rounded" />
                <Skeleton className="h-11 rounded-xl" />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            <Skeleton className="h-11 w-40 rounded-xl" />
            <Skeleton className="h-11 w-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
