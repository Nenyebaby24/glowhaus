"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useStore } from "@/store/useStore"
import TopBar from "./TopBar"
import MainNav from "./MainNav"
import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"
import CartDrawer from "./CartDrawer"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const mobileMenuOpen = useStore((s) => s.mobileMenuOpen)
  const cartOpen = useStore((s) => s.cartOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "#FAF7F2" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full z-50 ${
          scrolled ? "border-b border-yellow-700/30" : ""
        }`}
      >
        <TopBar />
        <MainNav setActiveMenu={setActiveMenu} />
        <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </motion.nav>

      <AnimatePresence>{mobileMenuOpen && <MobileMenu />}</AnimatePresence>
      <AnimatePresence>{cartOpen && <CartDrawer />}</AnimatePresence>
    </>
  )
}