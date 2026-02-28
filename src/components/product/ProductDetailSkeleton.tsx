import { Skeleton } from "@/components/shared/Skeleton"

export default function ProductDetailSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4">
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  )
}