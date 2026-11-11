"use client"

import { useState } from "react"
import { CalendarIcon, CheckCircle2, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ReservationModalProps {
  isScrolled?: boolean
}

export function ReservationModal({ isScrolled = false }: ReservationModalProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [guests, setGuests] = useState("4 Guests")
  const [seating, setSeating] = useState("Garden Patio")
  const [time, setTime] = useState("7:30 PM")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const RESTAURANT_WHATSAPP = "254735536090"

  
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (!date || !name.trim() || !phone.trim()) return

  const formattedDate = date.toDateString()

  const message = [
    "Hello For You Chinese Restaurant! I'd like to request a table reservation:",
    "",
    `*Name:* ${name.trim()}`,
    `*Phone:* ${phone.trim()}`,
    `*Date:* ${formattedDate}`,
    `*Time:* ${time}`,
    `*Party Size:* ${guests}`,
    `*Seating:* ${seating}`,
    "",
    "Please confirm availability. Thank you!",
  ].join("\n")

  const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`

  window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  setSubmitted(true)
}


  const handleReset = () => {
    setSubmitted(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val)
      if (!val) setSubmitted(false)
    }}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          className={`font-semibold tracking-wide transition-all duration-300 ${
            isScrolled 
              ? "bg-red-700 text-white shadow-md hover:bg-red-800" 
              : "bg-white text-zinc-900 shadow-lg hover:bg-white/90"
          }`}
        >
          Reservations
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-120 max-h-[90vh] overflow-y-auto bg-[#fafafa] border-zinc-200 text-zinc-900 shadow-2xl">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl italic text-[#8c3b2b]">
                Book a Table
              </DialogTitle>
              <DialogDescription className="text-zinc-500">
                Reserve your spot at For You Chinese Restaurant on Gitanga Road.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g. Ian Mwangi" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number (KE)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="0712 345 678" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[#8c3b2b]" />
                      {date ? date.toDateString() : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(day) => day < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Time (12 PM – 10 PM)</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="12:30 PM">12:30 PM (Lunch)</SelectItem>
                      <SelectItem value="1:30 PM">1:30 PM (Lunch)</SelectItem>
                      <SelectItem value="6:30 PM">6:30 PM (Dinner)</SelectItem>
                      <SelectItem value="7:30 PM">7:30 PM (Dinner)</SelectItem>
                      <SelectItem value="8:30 PM">8:30 PM (Dinner)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Party Size</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="bg-white">
                      <Users className="mr-2 h-4 w-4 text-[#8c3b2b]" />
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="2 Guests">2 Guests</SelectItem>
                      <SelectItem value="4 Guests">4 Guests</SelectItem>
                      <SelectItem value="6 Guests">6 Guests (Lazy Susan)</SelectItem>
                      <SelectItem value="8+ Large Group">8+ Large Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Seating Preference</Label>
                <Select value={seating} onValueChange={setSeating}>
                  <SelectTrigger className="bg-white">
                    <Utensils className="mr-2 h-4 w-4 text-[#8c3b2b]" />
                    <SelectValue placeholder="Where would you like to sit?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Garden Patio">Lush Garden Patio (Outdoor)</SelectItem>
                    <SelectItem value="Main Dining Room">Main Indoor Dining Room</SelectItem>
                    <SelectItem value="Near Kids Play Area">Garden Table Near Kids Play Area</SelectItem>
                    <SelectItem value="Private Family Room">Private Family Room (Groups)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-[#8c3b2b] hover:bg-[#a34634] text-white font-semibold py-5 mt-2">
                Confirm Table Request
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
           <h3 className="font-serif text-3xl italic text-[#8c3b2b]">
  Request Sent!
</h3>

<p className="mx-auto max-w-sm text-sm leading-relaxed text-zinc-600">
  Asante,{" "}
  <span className="font-semibold text-zinc-900">{name}</span>!
  Your reservation request for{" "}
  <span className="font-semibold text-zinc-900">{guests}</span>{" "}
  on{" "}
  <span className="font-semibold text-zinc-900">
    {date?.toDateString()}
  </span>{" "}
  at{" "}
  <span className="font-semibold text-zinc-900">{time}</span>{" "}
  has been prepared in WhatsApp.
</p>

<p className="text-xs leading-relaxed text-zinc-500">
  Your table is not confirmed until the restaurant responds.
  We'll be in touch via WhatsApp or SMS.
</p>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Asante, <span className="font-semibold text-zinc-900">{name}</span>! We have logged your request for{" "}
              <span className="font-semibold text-zinc-900">{guests}</span> ({seating}) on{" "}
              <span className="font-semibold text-zinc-900">{date?.toDateString()}</span> at{" "}
              <span className="font-semibold text-zinc-900">{time}</span>.
            </p>
            <p className="text-xs text-zinc-400">
              We will confirm via SMS/WhatsApp on {phone}.
            </p>
            <Button onClick={handleReset} variant="outline" className="mt-4">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
