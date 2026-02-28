import { notFound } from "next/navigation"
import { products } from "@/lib/dummy-data/products"
import ProductDetail from "@/components/catalogue/ProductDetail"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) return notFound()

  return <ProductDetail product={product} />
}