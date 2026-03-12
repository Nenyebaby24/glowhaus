import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDF8EE] text-center px-6">

      <div className="mb-6 text-3xl font-playfair text-gold">
        GlowHaus
      </div>

      <div className="w-24 h-[2px] bg-gold mb-8" />

      <h1 className="text-[120px] md:text-[160px] font-cormorant text-gold leading-none">
        404
      </h1>

      <p className="text-lg text-noir/70 mt-4">
        Oops! This page seems to have had a bad hair day. 😅
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          href="/"
          className="bg-gold text-noir px-6 py-3 rounded-full"
        >
          Back to Home
        </Link>

        <Link
          href="/collections"
          className="border border-gold text-gold px-6 py-3 rounded-full"
        >
          Browse Collections
        </Link>
      </div>
    </main>
  )
}