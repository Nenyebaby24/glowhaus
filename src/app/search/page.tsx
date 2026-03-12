"use client"

import { useSearchParams } from "next/navigation"
import { products } from "@/lib/dummy-data/products"
import ProductCard from "@/components/catalogue/ProductCard"
import EmptyState from "@/components/ui/EmptyState"
import SearchIllustration from "@/components/ui/SearchIllustration"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase() || ""

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  )

  if (results.length === 0) {
    return (
      <EmptyState
        icon={<SearchIllustration />}
        title={`No results for "${query}"`}
        description="Try searching for 'Wigs', 'Gel Kits', or 'Silk'."
        ctaLabel="Back to Shop"
        ctaHref="/shop"
      />
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-2">Search Results</h2>
      <h1 className="text-4xl font-serif mb-12">Showing results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}