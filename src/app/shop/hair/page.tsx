import CategoryLayout from "@/components/catalogue/CategoryLayout"
import { products } from "@/lib/dummy-data/products"

export default function HairPage() {
  const hairProducts = products.filter(p => p.category === "hair")

  return (
    <CategoryLayout
      title="Hair"
      bannerImage="/images/hair-banner.jpg"
      products={hairProducts}
    />
  )
}