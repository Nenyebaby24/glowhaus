"use client"

import { useSearchParams } from "next/navigation"
import { products } from "@/lib/dummy-data/products"
import ProductCard from "@/components/catalogue/ProductCard"

export default function SearchPage() {
  const params = useSearchParams()
  const q = params.get("q")?.toLowerCase() || ""

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(q)
  )

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-serif mb-8">
        Search Results for "{q}"
      </h1>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl mb-4">No results found</p>
          <p className="text-gray-500">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}