
"use client"

import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollExperience() {
  const { scrollY, scrollYProgress } = useScroll()
  const [showTop, setShowTop] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 500)
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    })
  }

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-100 h-0.75 origin-left bg-[#9B3D32]"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.9 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.9 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="fixed bottom-6 right-6 z-90 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B98A]/40 bg-[#3B1718] text-[#F7EBDD] shadow-xl transition-colors hover:bg-[#9B3D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B98A] focus-visible:ring-offset-2"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
