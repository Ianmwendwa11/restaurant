"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Expand } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

// Update or add your photos in the public/ folder right here

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Main dining hall and reception",
    caption: "Warm Interior Dining",
    tag: "Atmosphere",
    detail:
      "Classic wooden accents, warm lantern lighting, and comfortable seating inside our converted Lavington home.",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Dining hall with warm lighting and wooden furniture",
    caption: "Main Dining Hall",
    tag: "Interior",
    detail:
      "Experience a welcoming dining atmosphere with warm lighting, elegant wooden furniture, and a relaxed setting.",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Handmade crispy-bottom dumplings",
    caption: "Handmade Dumplings",
    tag: "Culinary",
    detail:
      "Handmade dumplings seared until crispy on the bottom, served with ginger-soy dipping sauce.",
  },
  {
    id: 5,
    src: "/gallery-5.jpg",
    alt: "Fried rice served with individual portion plates and condiments",
    caption: "Fried Rice",
    tag: "Culinary",
    detail:
      "Fragrant fried rice served alongside individual portion plates, dipping sauces, and condiments for a complete dining experience.",
  },
  {
    id: 6,
    src: "/gallery-6.jpg",
    alt: "Sizzling beef or chicken with fresh vegetables",
    caption: "Sizzling Wok Dishes",
    tag: "Signature Dishes",
    detail:
      "A sizzling wok creation featuring beef or chicken, tossed with onions, carrots, and bell peppers, served on a hot cast-iron plate.",
  },
  {
    id: 7,
    src: "/gallery-7.jpg",
    alt: "Restaurant entrance gate",
    caption: "Welcome to For You",
    tag: "First Impressions",
    detail:
      "Discover our welcoming entrance on Gitanga Road, where a memorable dining experience begins.",
  },
  {
    id: 8,
    src: "/gallery-8.jpg",
    alt: "Outdoor water fountain feature",
    caption: "Garden Fountain",
    tag: "Garden Patio",
    detail:
      "A peaceful outdoor water feature that adds a relaxing touch to our lush garden surroundings.",
  },
]


export function GallerySection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[number] | null>(null)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="gallery" className="relative bg-[#ebe5de] py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-3xl px-6 text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#8c3b2b]/50" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8c3b2b]">
            Inside &amp; Out
          </span>
          <span className="h-px w-8 bg-[#8c3b2b]/50" />
        </div>
        <h2 className="font-serif text-4xl italic tracking-wide text-zinc-900 sm:text-5xl">
          Our Gallery
        </h2>
        <p className="text-sm text-zinc-600">
          Click any photo to view full-screen details of our dining rooms, garden, and signature dishes.
        </p>
      </motion.div>

      {/* Cozy Rich Crimson & Espresso Carousel Band */}
      <div className="relative w-full bg-[#6e2c20] py-14 px-4 sm:px-12 shadow-[inset_0_4px_24px_rgba(0,0,0,0.35)]">
        <div className="mx-auto max-w-7xl relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {GALLERY_IMAGES.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group relative block aspect-4/3 w-full overflow-hidden border border-amber-200/20 bg-zinc-950 text-left shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Always-visible subtle bottom vignette for readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Top-right expand pill */}
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <Expand className="h-3 w-3 text-amber-300" />
                      <span>View</span>
                    </div>

                    {/* Bottom Caption & Tag */}
                    <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">
                        {item.tag}
                      </span>
                      <p className="mt-1 font-serif text-xl italic tracking-wide text-white">
                        {item.caption}
                      </p>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 h-11 w-11 rounded-full border border-amber-200/40 bg-black/60 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#6e2c20] sm:-left-5" />
            <CarouselNext className="right-2 h-11 w-11 rounded-full border border-amber-200/40 bg-black/60 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#6e2c20] sm:-right-5" />
          </Carousel>

          {/* Interactive Slide Progress Dots & Counter */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="font-mono text-xs text-amber-200/80">
              0{current + 1} / 0{GALLERY_IMAGES.length}
            </span>
            <div className="flex items-center gap-2">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-8 bg-amber-300"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal when a photo is clicked */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl border-white/10 bg-[#181211] p-0 overflow-hidden text-white">
          {selectedImage && (
            <div>
              <div className="relative aspect-16/10 w-full bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                  {selectedImage.tag}
                </span>
                <DialogTitle className="font-serif text-2xl italic text-white">
                  {selectedImage.caption}
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-300 leading-relaxed">
                  {selectedImage.detail}
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
