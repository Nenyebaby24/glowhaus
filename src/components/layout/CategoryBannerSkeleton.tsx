import { Skeleton } from "@/components/shared/Skeleton"

export default function CategoryBannerSkeleton() {
  return (
    <div className="w-full h-40 md:h-56">
      <Skeleton className="w-full h-full rounded-none" />
    </div>
  )
}