import { Skeleton } from "./Skeleton"

export default function GalleryGridSkeleton() {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton
          key={i}
          className="w-full rounded-2xl break-inside-avoid aspect-[3/4]"
        />
      ))}
    </div>
  )
}