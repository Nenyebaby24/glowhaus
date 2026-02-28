"use client"

import { useState, useMemo } from "react"
import { gallery } from "@/lib/dummy-data/gallery"
import GalleryFilters from "@/components/gallery/GalleryFilters"
import MasonryGrid from "@/components/gallery/MasonryGrid"
import Lightbox from "@/components/gallery/Lightbox"
import SubmitCTA from "@/components/gallery/SubmitCTA"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredGallery = useMemo(() => {
    if (activeFilter === "all") return gallery
    return gallery.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="min-h-screen bg-[#FDF8EE] pt-32 pb-20">
      <div className="container mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif mb-4">
            The GlowHaus Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            Real results from real clients
          </p>
        </div>

        {/* FILTERS */}
        <GalleryFilters
          active={activeFilter}
          onChange={setActiveFilter}
        />

        {/* GRID */}
        <MasonryGrid
          items={filteredGallery}
          onOpen={(index: number) => setLightboxIndex(index)}
        />

        {/* LIGHTBOX */}
        {lightboxIndex !== null && (
          <Lightbox
            items={filteredGallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            setIndex={setLightboxIndex}
          />
        )}

        {/* CTA */}
        <SubmitCTA />

      </div>
    </main>
  )
}