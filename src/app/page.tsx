import Hero from "@/components/layout/Hero"
import CategoryShowcase from "@/components/home/CategoryShowcase"
import BestsellersCarousel from "@/components/home/BestsellersCarousel"
import NewArrivals from "@/components/home/NewArrivals"
import SaleSection from "@/components/home/SaleSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import TrustSection from "@/components/home/TrustSection"
import InstagramStrip from "@/components/home/InstagramStrip"


export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <BestsellersCarousel />
      <NewArrivals />
      <SaleSection />
      <TestimonialsSection />
      <TrustSection />
      <InstagramStrip />
    </>
  )
}