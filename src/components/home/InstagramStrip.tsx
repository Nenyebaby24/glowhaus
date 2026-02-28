import { Instagram } from "lucide-react"

const images = Array.from({ length: 6 }).map(
  (_, i) =>
    `https://source.unsplash.com/400x400/?beauty,hair,nails&sig=${i}`
)

export default function InstagramStrip() {
  return (
    <section className="bg-[#FDF8EE] py-16 px-6">
      <div className="container mx-auto">

        {/* Image Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="Instagram"
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-sm">
                <Instagram className="mb-2" />
                Follow Us @GLOWHAUS
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-[#D4AF37] font-medium">
            <Instagram />
            Follow us on Instagram @GLOWHAUS
          </button>
        </div>
      </div>
    </section>
  )
}