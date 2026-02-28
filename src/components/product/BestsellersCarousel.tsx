"use client"

import { useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/dummy-data/products"
import ProductCard from "@/components/catalogue/ProductCard"
import Link from "next/link"

export default function BestsellersCarousel() {
  // Filter bestseller products
  const bestsellerProducts = products.filter(
    (product) => product.isBestseller
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Auto scroll
  const startAutoplay = useCallback(() => {
    if (!emblaApi) return

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    startAutoplay()
    return () => stopAutoplay()
  }, [emblaApi, startAutoplay, stopAutoplay])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm tracking-widest text-rose-500 mb-2">
              ✦ CUSTOMER FAVOURITES
            </p>

            <h2 className="font-serif text-4xl mb-3">
              Our Bestsellers
            </h2>

            <p className="text-gray-600">
              The products our clients keep coming back for.
            </p>
          </div>

          <Link
            href="/catalogue"
            className="hidden md:block text-gold font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {bestsellerProducts.map((product) => (
                <div
                  key={product.id}
                  className="
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_25%]
                    px-3
                  "
                >
                  <ProductCard product={product} />
                </div>
              ))}

            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-5 top-1/2 -translate-y-1/2 
                       bg-gold text-white w-12 h-12 
                       rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-5 top-1/2 -translate-y-1/2 
                       bg-gold text-white w-12 h-12 
                       rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* MOBILE VIEW ALL */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/catalogue"
            className="text-gold font-medium underline"
          >
            View All →
          </Link>
        </div>

      </div>
    </section>
  )
}