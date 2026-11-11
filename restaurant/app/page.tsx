"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Check, Copy, Mail, MapPin, Phone, Clock } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { ReservationModal } from "@/components/ReservationModal"
import { MenuSection } from "@/components/MenuSection"
import { MobileNav } from "@/components/MobileNav"
import { HeroSection } from "@/components/HeroSection"
import { GallerySection } from "@/components/GallerySection"
import { ScrollExperience } from "@/components/ScrollExperience"
import { Reveal } from "@/components/Reveal"


// Gallery images should be placed in the public/ directory.
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Main dining hall and reception",
    caption: "Warm Interior Dining",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Dining hall with warm lighting and wooden furniture",
    caption: "Main Dining Hall",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Dumplings",
    caption: "Handmade dumplings seared until crispy on the bottom, served with ginger-soy dipping sauce.",
  },
  
  {
    id: 5,
    src: "/gallery-5.jpg",
    alt: "Family table set for sharing",
    caption: "Fried Rice (served alongside individual portion plates, dipping sauces, and condiments).",
  },

   {
    id: 6,
    src: "/gallery-6.jpg",
    alt: "Family table set for sharing",
    caption: "A Sizzling Wok Dish (such as Sizzling Beef or Sizzling Chicken with vegetables like onions, carrots, and bell peppers served on a hot cast-iron plate).",
  },

   {
    id: 7,
    src: "/gallery-7.jpg",
    alt: "Family table set for sharing",
    caption: "restaurant entrance gate",
  },

   {
    id: 8,
    src: "/gallery-8.jpg",
    alt: "Family table set for sharing",
    caption: "outdoor water fountain feature",
  },
]

const PHONE_NUMBER = "+254 712 345 678"
const EMAIL_ADDRESS = "Foryourestaurant@gmail.com"
const INSTAGRAM_HANDLE = "@ForyouChineseRestaurant"
const INSTAGRAM_URL = "https://www.instagram.com/ForyouChineseRestaurant/"
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=For+You+Chinese+Restaurant+Gitanga+Road+Lavington+Nairobi"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch (error) {
      console.error("Could not copy the phone number:", error)
      setCopied(false)
    }
  }

  return (
    <main className="min-h-screen scroll-smooth bg-[#fafafa] font-sans text-zinc-900">
      <ScrollExperience />
      <motion.header
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderBottomColor: isScrolled
            ? "rgba(228, 228, 231, 0.5)"
            : "rgba(228, 228, 231, 0)",
          boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.05)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <a href="#about" className="flex flex-col" aria-label="For You home">
            <span
              className={`font-serif text-2xl italic tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-red-700" : "text-white"
              }`}
            >
              For you
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                isScrolled ? "text-zinc-500" : "text-zinc-300"
              }`}
            >
              Chinese Restaurant
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className={`hidden space-x-10 text-sm font-semibold tracking-wide transition-colors duration-300 md:flex ${
              isScrolled ? "text-zinc-700" : "text-white/90"
            }`}
          >
           
            <a href="#gallery" className="transition-colors hover:text-red-500">
              Gallery
            </a>
            <a href="#menu" className="transition-colors hover:text-red-500">
              Menu
            </a>
            <a href="#location" className="transition-colors hover:text-red-500">
              Location
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ReservationModal isScrolled={isScrolled} />
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </motion.header>

      {/* Hero banner */}
     <HeroSection />


     <GallerySection />


      <MenuSection />



{/* Garden patio and contact footer */}
<footer
  id="location"
  className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-zinc-950 text-white"
>
  <div className="absolute inset-0 z-0">
    <Image
      src="/garden-bg.jpg"
      alt="For You Chinese Restaurant garden patio"
      fill
      quality={90}
      sizes="100vw"
      className="object-cover opacity-65"
    />
  </div>

  <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/45 to-black/30" />

  <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-2 lg:px-8">

    {/* Restaurant introduction */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-5 self-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="inline-block rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-md"
      >
        Gitanga Road, Lavington · Nairobi
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.65 }}
        className="font-serif text-5xl italic tracking-wide sm:text-6xl"
      >
        For you
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-red-300"
      >
        Chinese Restaurant
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="max-w-xl text-base leading-7 text-white/80"
      >
        Escape the Nairobi rush. Enjoy generous family-style platters in
        our converted Lavington home or unwind under the trees in our
        spacious garden patio.
      </motion.p>
    </motion.div>

    {/* Contact card */}
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-6 self-center rounded-xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur-md sm:p-8"
    >
      <h3 className="text-lg font-semibold tracking-wide">
        Get in touch
      </h3>

      {/* Email */}
      <div className="group flex items-start gap-3">
        <Mail className="mt-1 h-5 w-5 shrink-0 text-red-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/60">Email</p>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="break-all text-white transition-colors duration-300 hover:text-red-300"
          >
            {EMAIL_ADDRESS}
          </a>
        </div>
      </div>

      {/* Instagram */}
      <div className="group flex items-start gap-3">
        <FaInstagram className="mt-1 h-5 w-5 shrink-0 text-red-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/60">Instagram</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white transition-colors duration-300 hover:text-red-300"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="group flex items-start gap-3">
        <Phone className="mt-1 h-5 w-5 shrink-0 text-red-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/60">Phone / Delivery</p>
          <a
            href="tel:+254735536090"
            className="text-white transition-colors duration-300 hover:text-red-300"
          >
            {PHONE_NUMBER}
          </a>

          <button
            type="button"
            onClick={handleCopyPhone}
            className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-white"
            aria-label="Copy phone number"
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy phone number"}
          </button>

          {copied && (
            <p role="status" className="mt-1 text-xs text-green-300">
              Copied to clipboard!
            </p>
          )}
        </div>
      </div>

      {/* Opening hours */}
      <div className="group flex items-start gap-3">
        <Clock className="mt-1 h-5 w-5 shrink-0 text-red-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/60">Opening hours</p>
          <p className="text-white">Open Daily</p>
          <p className="text-white/80">12:00 PM – 10:00 PM</p>
        </div>
      </div>

      {/* Location */}
      <div className="group flex items-start gap-3">
        <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/60">Find us</p>
          <p className="text-white">
            Gitanga Road, near Valley Arcade, Nairobi
          </p>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-red-300 transition-colors duration-300 hover:text-white"
          >
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Copyright */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative z-20 border-t border-white/10 px-6 py-5 text-center text-xs text-white/60"
  >
    © {new Date().getFullYear()} For You Chinese Restaurant Nairobi. All
    rights reserved.
  </motion.div>
      </footer>
    </main>
  )
}
  
  