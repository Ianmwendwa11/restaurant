
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Track window scroll position to trigger the glassmorphism header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-zinc-900">
      
      {/* 1. FLOATING GLASS HEADER */}
      <motion.header 
        animate={{ 
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderBottomColor: isScrolled ? "rgba(228, 228, 231, 0.4)" : "rgba(228, 228, 231, 0)",
          boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.05)" : "0 0 #000"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo Branding */}
          <div className="flex flex-col">
            <span className={`text-2xl font-serif italic tracking-wide transition-colors duration-300 ${isScrolled ? "text-red-600" : "text-white"}`}>
              For you
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-zinc-400" : "text-zinc-300"}`}>
              Chinese Restaurant
            </span>
          </div>
          
          {/* Nav Links */}
          <nav className={`hidden space-x-10 text-sm font-semibold tracking-wide md:flex transition-colors duration-300 ${isScrolled ? "text-zinc-600" : "text-white/90"}`}>
            <a href="#about" className="transition-colors hover:text-red-500">About</a>
            <a href="#gallery" className="transition-colors hover:text-red-500">Gallery</a>
            <a href="#menu" className="transition-colors hover:text-red-500">Menu</a>
            <a href="#blog" className="transition-colors hover:text-red-500">Blog</a>
          </nav>

          {/* Action CTA */}
          <div>
            <Button 
              size="sm" 
              className={`font-semibold tracking-wide transition-all duration-300 ${
                isScrolled 
                  ? "bg-red-600 text-white hover:bg-red-700 shadow-md" 
                  : "bg-white text-zinc-900 hover:bg-white/90 shadow-lg"
              }`}
            >
              Reservations
            </Button>
          </div>
        </div>
      </motion.header>

      {/* 2. HERO BANNER SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 text-center text-white">
        {/* Background Image Layer (Matches your Canva mockup image positioning) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-lighten"
          style={{ 
            backgroundImage: "url('https://unsplash.com')" 
          }} 
        />
        {/* Warm red accent overlay glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_70%)]" />

        {/* Animated Text Content wrapper */}
        <div className="relative max-w-4xl space-y-6">
          {/* Subtitle animation */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 sm:text-sm"
          >
            Nairobi&apos;s Favorite Chinese Tradition
          </motion.p>
          
          {/* Main Title animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-6xl font-normal italic tracking-wide sm:text-8xl md:text-9xl drop-shadow-sm text-zinc-50"
          >
            For you
          </motion.h1>

          {/* Call to Action buttons animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-6"
          >
            <a href="#gallery">
              <Button variant="outline" className="border-white/20 px-8 py-6 text-sm font-semibold tracking-widest uppercase hover:bg-white/10 text-white rounded-none transition-all">
                Explore Gallery
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Tiny smooth animated indicator showing you can scroll down */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50"
        >
          <div className="h-9 w-5 rounded-full border-2 border-white flex justify-center p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 3. TEMPORARY PLACEHOLDER SECTIONS */}
      <section id="gallery" className="min-h-screen flex items-center justify-center border-b border-zinc-200 bg-white">
        <h2 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest">Our Gallery Content Will Go Here</h2>
      </section>
      
      <section id="menu" className="min-h-screen flex items-center justify-center bg-zinc-900 text-zinc-400">
        <h2 className="text-2xl font-bold uppercase tracking-widest">Menu Page Section Placeholder</h2>
      </section>

    </div>
  )
}
