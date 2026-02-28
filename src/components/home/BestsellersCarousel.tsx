"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback } from "react"
import { products } from "@/lib/dummy-data/products"
import BestsellerCard from "./BestsellerCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BestsellersCarousel() {
  const bestsellerProducts = products.filter(p => p.isBestseller)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  })

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])

  // Auto scroll
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="py-24 px-6 bg-[#FDF8EE]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[#D4AF37] tracking-[0.2em] text-sm">
              ✦ CUSTOMER FAVOURITES
            </p>
            <h2 className="font-serif text-4xl">
              Our Bestsellers
            </h2>
            <p className="text-gray-600">
              The products our clients keep coming back for.
            </p>
          </div>

          <a href="/shop" className="text-[#D4AF37] font-medium">
            View All →
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {bestsellerProducts.map(product => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                >
                  <BestsellerCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-black w-10 h-10 rounded-full flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-black w-10 h-10 rounded-full flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}