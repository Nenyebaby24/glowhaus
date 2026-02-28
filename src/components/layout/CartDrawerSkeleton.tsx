import { Skeleton } from "@/components/shared/Skeleton"

export default function CartDrawerSkeleton() {
  return (
    <div className="p-6 space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="w-20 h-20 rounded-xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}

      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  )
}