import ProductGridSkeleton from "@/components/product/ProductGridSkeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      
      {/* Page Title Skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-40 bg-blush/70 rounded-lg animate-shimmer" />
        <div className="h-4 w-64 bg-blush/70 rounded-lg animate-shimmer" />
      </div>

      {/* Filters Bar Skeleton */}
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-28 bg-blush/70 rounded-full animate-shimmer"
          />
        ))}
      </div>

      {/* Product Grid */}
      <ProductGridSkeleton />

    </div>
  )
}