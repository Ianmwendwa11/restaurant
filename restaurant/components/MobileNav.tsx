"use client"

import { useState } from "react"
import { Menu, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ReservationModal } from "@/components/ReservationModal"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MobileNavProps {
  isScrolled?: boolean
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#menu", label: "Signature Menu" },
  { href: "#location", label: "Garden & Location" },
]

export function MobileNav({ isScrolled = false }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className={`transition-colors ${
              isScrolled
                ? "text-zinc-900 hover:bg-zinc-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-75 flex-col justify-between border-l-zinc-200 bg-[#fafafa] p-6 text-zinc-900"
        >
          <div>
            <SheetHeader className="border-b border-zinc-200 pb-4 text-left">
              <SheetTitle className="font-serif text-3xl italic text-[#8c3b2b]">
                For you
              </SheetTitle>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Chinese Restaurant • Nairobi
              </p>
            </SheetHeader>

            {/* Navigation Links */}
            
<nav className="mt-8 flex flex-col gap-6">
  {NAV_LINKS.map((link, index) => (
    <motion.a
      key={link.href}
      href={link.href}
      onClick={() => setOpen(false)}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
      }}
      whileTap={{ scale: 0.97 }}
      className="group flex items-center justify-between text-lg font-semibold tracking-wide text-zinc-800 transition-colors duration-300 hover:text-[#8c3b2b]"
    >
      {link.label}

      <span className="h-px w-0 bg-[#8c3b2b] transition-all duration-300 group-hover:w-8" />
    </motion.a>
  ))}
</nav>

<div className="mt-10">
  <ReservationModal />
</div>

          </div>

          {/* Quick Nairobi Info at Bottom of Drawer */}
          <div className="space-y-3 border-t border-zinc-200 pt-6 text-xs text-zinc-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#8c3b2b]" />
              <span>Open Daily: 12:00 PM – 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#8c3b2b]" />
              <span>Gitanga Road, Lavington</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#8c3b2b]" />
              <a href="tel:+254712345678" className="font-semibold text-zinc-900">
                +254735536090
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
