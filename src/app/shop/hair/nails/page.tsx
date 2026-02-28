import { Product } from "@/types/index"; // Import your type
import CategoryLayout from "@/components/catalogue/CategoryLayout"
import { products } from "@/lib/dummy-data/products"

export default function NailsPage() {
  const nailsProducts = products.filter(p => p.category === "nails")

  return (
    <CategoryLayout
      title="Nails"
      bannerImage="/images/nails-banner.jpg"
      products={nailsProducts}
    />
  )
}