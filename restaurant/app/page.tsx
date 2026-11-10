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
      {/* Floating glass header */}
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


      {/* Gallery carousel */}
      <section id="gallery" className="bg-[#dcd5ce] py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-700">
            Our Gallery
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#8c3b2b]" />
        </motion.div>

        <div className="w-full bg-[#8c3b2b] px-4 py-12 shadow-inner sm:px-12">
          <div className="relative mx-auto max-w-7xl">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {GALLERY_IMAGES.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group relative aspect-4/3 w-full overflow-hidden border-2 border-white/10 bg-zinc-900 shadow-lg">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium tracking-wide text-white">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2 h-12 w-12 rounded-full border-2 border-white bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#8c3b2b] sm:-left-6" />
              <CarouselNext className="right-2 h-12 w-12 rounded-full border-2 border-white bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#8c3b2b] sm:-right-6" />
            </Carousel>
          </div>
        </div>
      </section>

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 self-center"
          >
            <span className="inline-block rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-md">
              Gitanga Road, Lavington · Nairobi
            </span>

            <h2 className="font-serif text-5xl italic tracking-wide sm:text-6xl">
              For you
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
              Chinese Restaurant
            </p>
            <p className="max-w-xl text-base leading-7 text-white/80">
              Escape the Nairobi rush. Enjoy generous family-style platters in
              our converted Lavington home or unwind under the trees in our
              spacious garden patio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 self-center rounded-xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <h3 className="text-lg font-semibold tracking-wide">
              Get in touch
            </h3>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="break-all text-white transition-colors hover:text-red-300"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaInstagram className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/60">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-colors hover:text-red-300"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/60">Phone / Delivery</p>
                <a
                  href="tel:+254712345678"
                  className="text-white transition-colors hover:text-red-300"
                >
                  {PHONE_NUMBER}
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
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

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/60">Opening hours</p>
                <p className="text-white">Open Daily</p>
                <p className="text-white/80">12:00 PM – 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-white/60">Find us</p>
                <p className="text-white">
                  Gitanga Road, near Valley Arcade, Nairobi
                </p>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-red-300 transition-colors hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 border-t border-white/10 px-6 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} For You Chinese Restaurant Nairobi. All
          rights reserved.
        </div>
      </footer>
    </main>
  )
}
  