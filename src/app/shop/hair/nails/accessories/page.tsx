import CategoryLayout from "@/components/catalogue/CategoryLayout"
import { products } from "@/lib/dummy-data/products"

export default function AccessoriesPage() {
  const accessoriesProducts = products.filter(
    p => p.category === "accessories"
  )

  return (
    <CategoryLayout
      title="Accessories"
      bannerImage="/images/accessories-banner.jpg"
      products={accessoriesProducts}
    />
  )
}