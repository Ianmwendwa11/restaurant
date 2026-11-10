"use client"

import { useState } from "react"
import { Menu, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
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
            <nav className="mt-8 flex flex-col space-y-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold tracking-wide text-zinc-800 transition-colors hover:text-[#8c3b2b]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
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
                +254 712 345 678
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
