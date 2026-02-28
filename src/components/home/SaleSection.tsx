"use client"

import useEmblaCarousel from "embla-carousel-react"
import CountdownTimer from "@/components/ui/CountdownTimer"
import { products } from "@/lib/dummy-data/products"
import BestsellerCard from "./BestsellerCard"
import { Button } from "@/components/ui/Button"

export default function SaleSection() {
  const saleProducts = products.filter(p => p.isSale)

  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <section className="bg-[#111111] py-24 px-6 text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h2 className="font-serif text-5xl">
            UP TO 40% OFF — End of Season Sale
          </h2>

          <CountdownTimer />

          <Button variant="primary">
            Shop the Sale →
          </Button>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {saleProducts.slice(0, 3).map(product => (
              <div key={product.id} className="flex-[0_0_80%]">
                <div className="text-white">
                  <BestsellerCard product={product} />
                  <p className="mt-2 text-sm line-through text-gray-400">
                    ${product.originalPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}