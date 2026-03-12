"use client"

import useEmblaCarousel from "embla-carousel-react"
import ProductCard from "@/components/catalogue/ProductCard"
import { products } from "@/lib/dummy-data/products"

interface Props {
  category: string
  currentId: string
}

export default function RelatedProducts({ category, currentId }: Props) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true })

  const related = products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 6)

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif">
          You May Also Like
        </h2>

        <a href={`/category/${category}`} className="text-sm underline">
          View All {category} →
        </a>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {related.map(product => (
            <div key={product.id} className="flex-[0_0_80%] md:flex-[0_0_30%]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}