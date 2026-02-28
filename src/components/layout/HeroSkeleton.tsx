import { Skeleton } from "@/components/shared/Skeleton"

export default function HeroSkeleton() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh]">
      <Skeleton className="absolute inset-0 rounded-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-6 w-96 max-w-full" />
        <Skeleton className="h-12 w-40 rounded-full" />
      </div>
    </div>
  )
}