"use client"

import CategoryCard from "./CategoryCard"
import { categories } from "@/lib/categoryData"

export default function CategoryShowcase() {
  return (
    <section className="py-20 px-6 bg-[#FDF8EE]">
      <div className="container mx-auto grid gap-10 md:grid-cols-3">
        {categories.map((cat, index) => (
          <CategoryCard
            key={cat.name}
            {...cat}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  )
}