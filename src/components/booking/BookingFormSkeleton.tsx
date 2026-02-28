import { Skeleton } from "@/components/shared/Skeleton"

export default function BookingFormSkeleton() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Skeleton className="h-6 w-48" />

      <Skeleton className="h-12 w-full rounded-xl" />
      <Skeleton className="h-12 w-full rounded-xl" />

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 14 }).map((_, i) => (
          <Skeleton key={i} className="h-10 rounded-lg" />
        ))}
      </div>

      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  )
}