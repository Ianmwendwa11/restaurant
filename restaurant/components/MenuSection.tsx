"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Sparkles, Leaf, UtensilsCrossed } from "lucide-react"

// Edit or add your custom dishes, descriptions, and KES prices right here!
const MENU_CATEGORIES = [
  {
    id: "starters",
    label: "Starters & Dim Sum",
    items: [
      {
        name: "Crispy Spring Rolls (4 pcs)",
        price: "KES 650",
        description: "Golden fried pastry rolls stuffed with shredded seasonal vegetables and glass noodles.",
        badge: "Vegetarian",
      },
      {
        name: "Pan-Fried Pork Dumplings (Gyoza)",
        price: "KES 950",
        description: "Handmade dumplings seared until crispy on the bottom, served with ginger-soy dipping sauce.",
        badge: "Chef's Choice",
      },
      {
        name: "Crispy Salt & Pepper Prawns",
        price: "KES 1,450",
        description: "Wok-tossed king prawns seasoned with toasted Sichuan pepper, garlic, and fresh chilies.",
        badge: "Spicy",
      },
      {
        name: "Hot & Sour Soup",
        price: "KES 750",
        description: "Rich, comforting broth balanced with white pepper, black vinegar, tofu, and bamboo shoots.",
        badge: "Spicy",
      },
    ],
  },
  {
    id: "mains",
    label: "Sizzling Platters & Mains",
    items: [
      {
        name: "Sizzling Chili Honey Beef",
        price: "KES 1,650",
        description: "For You's signature crispy beef strips glazed in a sticky, sweet-and-spicy chili honey sauce on a hot iron plate.",
        badge: "House Favorite",
      },
      {
        name: "Peking Duck (Half / Whole)",
        price: "KES 2,800",
        description: "Crispy roasted duck served with steamed pancakes, spring onions, cucumber, and hoisin sauce.",
        badge: "Built For Sharing",
      },
      {
        name: "Kung Pao Chicken",
        price: "KES 1,450",
        description: "Diced chicken breast stir-fried with roasted peanuts, dried red chilies, and bell peppers.",
        badge: "Spicy",
      },
      {
        name: "Sweet & Sour Pork",
        price: "KES 1,500",
        description: "Tender crispy pork bites tossed with fresh pineapple chunks, peppers, and tangy house glaze.",
        badge: "Classic",
      },
    ],
  },
  {
    id: "noodles",
    label: "Noodles & Fried Rice",
    items: [
      {
        name: "Special Yangzhou Fried Rice",
        price: "KES 1,100",
        description: "Generous family-style wok-fried rice loaded with shrimp, diced chicken, egg, and green peas.",
        badge: "Built For Sharing",
      },
      {
        name: "Beef Chow Mein",
        price: "KES 1,250",
        description: "Hand-pulled egg noodles tossed over high heat with tender beef slices, bean sprouts, and dark soy.",
        badge: "Popular",
      },
      {
        name: "Singapore Rice Noodles",
        price: "KES 1,300",
        description: "Thin vermicelli noodles wok-tossed with aromatic curry spices, prawns, chicken, and crisp veggies.",
        badge: "Spicy",
      },
      {
        name: "Vegetable Hakka Noodles",
        price: "KES 950",
        description: "Smoky wok-charred noodles tossed with bok choy, carrots, cabbage, and sesame oil.",
        badge: "Vegetarian",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Drinks",
    items: [
      {
        name: "Complimentary House Ice Cream",
        price: "FREE",
        description: "Our legendary Nairobi tradition—enjoy a complimentary scoop of vanilla or strawberry ice cream after your meal.",
        badge: "For You Tradition",
      },
      {
        name: "Caramelized Banana Fritters",
        price: "KES 750",
        description: "Crispy batter-fried bananas drizzled with warm golden honey and toasted sesame seeds.",
        badge: "Sweet",
      },
      {
        name: "Jasmine Green Tea Pot",
        price: "KES 450",
        description: "Fragrant loose-leaf Chinese green tea infused with fresh jasmine blossoms.",
        badge: "Refillable",
      },
      {
        name: "Fresh Passion & Mint Cooler",
        price: "KES 500",
        description: "Chilled Kenyan passion fruit juice muddled with garden mint and sparkling water.",
        badge: "Refreshing",
      },
    ],
  },
]

export function MenuSection() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id)

  const currentCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0]

  return (
    <section
      id="menu"
      className="relative bg-[#1c1615] py-24 px-6 text-zinc-100 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            Generous Portions • Made For Sharing
          </span>
          <h2 className="font-serif text-4xl italic tracking-wide text-white sm:text-5xl">
            Our Signature Menu
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8c3b2b]" />
        </motion.div>

        {/* Interactive Animated Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeTab === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 sm:text-sm ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#8c3b2b] shadow-md"
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Animated Dish Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {currentCategory.items.map((dish, index) => (
              
<motion.div
  key={dish.name}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    delay: index * 0.07,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -6,
    transition: { duration: 0.25 },
  }}
  whileTap={{ scale: 0.985 }}
  className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/3 p-6 transition-colors duration-500 hover:border-[#9B493B]/70 hover:bg-white/6"
>
  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#8c3b2b]/9 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <div className="relative z-10">
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-serif text-xl font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-[#E9A99A]">
        {dish.name}
      </h3>

      <span className="shrink-0 font-mono text-sm font-bold text-red-400 transition-transform duration-300 group-hover:scale-105">
        {dish.price}
      </span>
    </div>

    <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
      {dish.description}
    </p>
  </div>

  {dish.badge && (
    <div className="relative z-10 mt-4 flex items-center gap-1.5 border-t border-white/5 pt-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
      {dish.badge === "Spicy" && (
        <Flame className="h-3.5 w-3.5 text-red-500" />
      )}

      {dish.badge === "Vegetarian" && (
        <Leaf className="h-3.5 w-3.5 text-green-400" />
      )}

      {(dish.badge === "House Favorite" ||
        dish.badge === "For You Tradition") && (
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
      )}

      {dish.badge !== "Spicy" &&
        dish.badge !== "Vegetarian" &&
        dish.badge !== "House Favorite" &&
        dish.badge !== "For You Tradition" && (
          <UtensilsCrossed className="h-3.5 w-3.5 text-red-400" />
        )}

      <span>{dish.badge}</span>
    </div>
  )}
</motion.div>

            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500">
            All main dishes are prepared fresh to order and sized for family-style Lazy Susan sharing.
          </p>
        </div>
      </div>
    </section>
  )
}
