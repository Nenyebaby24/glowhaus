// app/layout.tsx
import SearchHotkey from "@/components/search/SearchHotkey"
import SearchOverlay from "@/components/search/SearchOverlay"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "react-hot-toast"


import "@fontsource/playfair-display/400.css"
import "@fontsource/playfair-display/700.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/700.css"

import "./globals.css"

export const metadata: Metadata = {
  title: "GlowHaus | Luxury Interior Lighting",
  description: "Illuminate your space with bespoke glow.",
}



   
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-noir text-taupe">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <Toaster  
         position="bottom-right"
         gutter={8}
         containerStyle={{
         bottom: 24,
         right: 24,
         }}
        toastOptions={{
        duration: 3500,
        ariaProps: {
         role: "status",
         "aria-live": "polite",
         },
        }}/>
        <SearchHotkey />
        <SearchOverlay />
      </body>
    </html>
  )
}