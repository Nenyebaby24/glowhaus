import HeroSkeleton from "@/components/layout/HeroSkeleton"
import CategoryBannerSkeleton from "@/components/layout/CategoryBannerSkeleton"
import ProductGridSkeleton from "@/components/product/ProductGridSkeleton"

export default function Loading() {
  return (
    <div className="space-y-16">
      <HeroSkeleton />

      <div className="container mx-auto px-4">
        <CategoryBannerSkeleton />
      </div>

      <div className="container mx-auto px-4">
        <ProductGridSkeleton />
      </div>
    </div>
  )
}