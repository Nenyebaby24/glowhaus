import { Skeleton } from "./Skeleton"

export default function ReviewCardSkeleton() {
  return (
    <div className="space-y-4 p-6 border border-gold/20 rounded-2xl">
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />

      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-sm" />
        ))}
      </div>
    </div>
  )
}