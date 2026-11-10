"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Utensils, Sparkles, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#120d0c] px-6 pt-20 text-center text-white"
    >
      {/* 1. Cinematic Slow-Breathing Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: [1.08, 1.02, 1.08], opacity: 0.6 }}
        transition={{
          opacity: { duration: 1.4, ease: "easeOut" },
          scale: { duration: 24, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="For You Chinese Restaurant warm dining room"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. Cozy Warm Lantern Vignette & Atmospheric Overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/75 via-[#1a0f0d]/45 to-[#120d0c]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.14),transparent_65%)]" />

      {/* 3. Main Editorial Content */}
      <div className="relative z-20 mx-auto max-w-4xl space-y-6">
        {/* Ornamental Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-amber-400/60 sm:w-12" />
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-300/90 sm:text-xs">
            Nairobi&apos;s Favorite Chinese Tradition
          </p>
          <span className="h-px w-8 bg-amber-400/60 sm:w-12" />
        </motion.div>

        {/* Hero Title with Warm Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="font-serif text-6xl font-normal italic tracking-wide text-[#faf6f0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-8xl md:text-9xl"
        >
          For you
        </motion.h1>

        {/* Cozy, Welcoming Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto max-w-xl text-sm font-normal leading-relaxed text-zinc-200/90 sm:text-base"
        >
          Generous family-style platters, sizzling wok specialties, and tranquil
          garden dining tucked away on Gitanga Road.
        </motion.p>

        {/* Dual Sleek Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="w-full rounded-none bg-[#8c3b2b] px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(140,59,43,0.45)] transition-all hover:bg-[#a34634] sm:w-auto"
          >
            <a href="#menu" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Explore Menu
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-none border-white/25 bg-white/5 px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-zinc-900 sm:w-auto"
          >
            <a href="#gallery">View Gallery</a>
          </Button>
        </motion.div>
      </div>

      {/* 4. Grounding Glass Info Strip at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-20 mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-white/10 bg-black/45 px-6 py-2.5 text-[11px] font-medium tracking-wider text-zinc-300 backdrop-blur-md sm:mt-16 sm:text-xs"
      >
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-amber-400" />
          Gitanga Rd, Lavington
        </span>
        <span className="hidden text-white/20 sm:inline">|</span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-amber-400" />
          Open Daily 12 PM – 10 PM
        </span>
        <span className="hidden text-white/20 sm:inline">|</span>
        <span className="flex items-center gap-1.5 text-amber-200">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          Complimentary House Ice Cream
        </span>
      </motion.div>
    </section>
  )
}
