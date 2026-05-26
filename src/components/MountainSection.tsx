/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface MountainSectionProps {
  onOpenBooking?: (packageType: string, packageName: string) => void;
}

// Custom high-fidelity brand green WhatsApp icon SVG
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const routesData = [
  {
    id: "route-machame",
    name: "Machame Route",
    emoji: "🌿",
    duration: "6–7 Days",
    badge: "⭐ Best Seller",
    price: 2100,
    image: "https://images.unsplash.com/photo-1589553460730-dfbeb39ef32e?w=800&auto=format&fit=crop&q=80",
    description: "The most popular and scenic path to the summit, famed for beautiful ridge walks, Shira Plateau, and the Barranco Wall."
  },
  {
    id: "route-lemosho",
    name: "Lemosho Route",
    emoji: "🌄",
    duration: "7–8 Days",
    badge: "🔝 Premium",
    price: 2300,
    image: "https://images.unsplash.com/photo-1609137144813-7d84803af977?w=800&auto=format&fit=crop&q=80",
    description: "Undeniably gorgeous with low crowds and optimized high-altitude acclimatization profile."
  },
  {
    id: "route-marangu",
    name: "Marangu Route",
    emoji: "🏠",
    duration: "5–6 Days",
    badge: null,
    price: 1900,
    image: "https://images.unsplash.com/photo-1544885935-98dd33bc2a6b?w=800&auto=format&fit=crop&q=80",
    description: "Conical peaks. Sleep comfortably in solid mountain huts away from tents and winds."
  },
  {
    id: "route-rongai",
    name: "Rongai Route",
    emoji: "🌅",
    duration: "6 Days",
    badge: null,
    price: 2000,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
    description: "Approaching from the dry north close to Kenya border, ideal choice for wilderness camping lovers."
  },
  {
    id: "route-umbwe",
    name: "Umbwe Route",
    emoji: "⚡",
    duration: "6 Days",
    badge: "💪 Challenge",
    price: 1950,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    description: "A steep, rapid, and physically demanding approach for seasoned climbers who love a wild challenge."
  }
];

export default function MountainSection({ onOpenBooking }: MountainSectionProps) {
  return (
    <div id="kilimanjaro-page" className="scroll-mt-20">
      
      {/* 1. KILIMANJARO PAGE HERO BANNER */}
      <div className="relative bg-stone-900 text-white py-24 sm:py-32 overflow-hidden rounded-b-3xl shadow-lg border-b border-stone-200/10">
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="https://images.unsplash.com/photo-1589553460730-dfbeb39ef32e?w=1920&auto=format&fit=crop&q=85"
            alt="Majestic ice-capped peak of Mount Kilimanjaro rising above Tanzania plains"
            className="w-full h-full object-cover scale-102 filter brightness-[0.45]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-[#133024]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 shadow-md mb-6">
            <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
            <span className="font-mono text-xs text-[#F5F1E8] font-bold uppercase tracking-widest">
              Arusha, Tanzania
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-4 text-balance">
            Explore Tanzania Like Never Before
          </h1>

          {/* Core Categories Banner */}
          <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-widest font-mono uppercase bg-[#1F4D3A]/80 border border-[#C9A227]/20 px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 mb-6 backdrop-blur-sm">
            <span>Safari</span>
            <span className="text-white/40">•</span>
            <span>Kilimanjaro</span>
            <span className="text-white/40">•</span>
            <span>Day Trips</span>
          </div>

          {/* Subheading / Tagline */}
          <p className="text-stone-200 max-w-2xl text-base sm:text-xl font-medium tracking-wide flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C9A227] shrink-0" />
            <span>Unforgettable Adventures Await You</span>
            <Sparkles className="w-5 h-5 text-[#C9A227] shrink-0" />
          </p>
        </div>
      </div>

      {/* 2. ABOUT US & WHY CHOOSE US SECTION */}
      <section className="py-20 bg-[#F5F1E8] text-[#2B2B2B] border-b border-stone-200/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core About Us Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block font-mono">
                Who We Are 🌍
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F4D3A] tracking-tight">
                About Us
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#2B2B2B]/85 leading-relaxed">
                <p className="font-semibold text-[#1F4D3A]">
                  Chaka Safaris & Hiking is a professional tour company based in Arusha, Tanzania.
                </p>
                <p className="text-sm sm:text-base text-stone-600">
                  We specialize in unforgettable safari adventures, Kilimanjaro climbing, and authentic local experiences.
                </p>
              </div>
              
              <div className="pt-6 border-t border-stone-300/40">
                <p className="font-serif italic text-[#C96B2C] text-lg sm:text-xl font-bold leading-relaxed">
                  "We don’t just offer tours — we create lifetime experiences."
                </p>
              </div>
            </div>

            {/* Right Column: Why Choose Us checklist card (PLAIN MENTIONED ONLY) */}
            <div className="lg:col-span-5 bg-white border border-stone-200/85 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#C9A227] shrink-0" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3A]">
                  Why Choose Us
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Experienced local guides",
                  "High summit success rate",
                  "Affordable & flexible packages",
                  "Personalized customer service"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3.5 items-center">
                    <span className="bg-[#1F4D3A]/5 text-[#1F4D3A] p-1.5 rounded-lg shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1F4D3A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLIMB MOUNT KILIMANJARO ROUTES & PRICES */}
      <section className="py-20 bg-white text-[#2B2B2B] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
              🌋 Climb Mount Kilimanjaro
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
              Climb Mount Kilimanjaro
            </h2>
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-semibold">
              Take on Africa’s highest peak with our expert team.
            </p>
            <div className="inline-flex items-center gap-2 text-stone-500 font-mono text-xs uppercase tracking-wider bg-stone-100 px-4 py-1.5 rounded-full font-bold mt-3">
              <span>Safe</span>
              <span>•</span>
              <span>Professional</span>
              <span>•</span>
              <span>High success rate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Popular Routes & Prices Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 mb-6 border-b border-stone-200 pb-3">
                <Sparkles className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3A]">
                  Popular Routes & Prices
                </h3>
              </div>

              <div className="space-y-4">
                {routesData.map((route, idx) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F5F1E8]/45 border border-[#1F4D3A]/5 hover:border-[#C9A227]/40 shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm border border-stone-200/80 select-none shrink-0">
                        {route.emoji}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-serif text-lg font-bold text-[#1F4D3A]">
                            {route.name} ({route.duration})
                          </h4>
                          {route.badge && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#C96B2C]/10 text-[#C96B2C]">
                              {route.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500 leading-relaxed max-w-md">
                          {route.description}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-200/60 mt-2 sm:mt-0 gap-3">
                      <div>
                        <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Prices From</span>
                        <span className="text-lg font-bold text-[#1F4D3A] font-mono">
                          ${route.price.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider ml-1">per person</span>
                      </div>
                      
                      <a
                        href={`https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20visited%2520your%20website%20and%20want%2520to%20plan%20and%20inquire%20about%20climbing%20via%20the%20${encodeURIComponent(route.name)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: reduced in size "What's Included" card (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1F4D3A] to-[#133024] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/5 relative overflow-hidden">
              <span className="text-[#C9A227] font-mono text-[9px] tracking-widest uppercase font-bold block mb-2">
                All-Inclusive Plan
              </span>
              <h3 className="font-serif text-lg font-bold mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                <span>✔</span> What’s Included
              </h3>

              <ul className="space-y-2.5 mb-5">
                {[
                  "Park fees",
                  "Professional guides & porters",
                  "Meals & accommodation",
                  "Transfers"
                ].map((incItem, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="text-[#C9A227] text-sm font-bold select-none shrink-0">✔</span>
                    <span className="text-stone-100 font-medium text-xs sm:text-sm leading-none">{incItem}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-[11px] text-stone-300/90 leading-normal">
                  Expert assistance with planning. Chat directly with us!
                </p>
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520planning%2520to%2520climb%2520Mount%2520Kilimanjaro.%2520Please%2520send%2520me%2520custom%2520route%2520itineraries."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#C9A227] hover:bg-[#b08b1f] text-[#1F4D3A] font-bold text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#1F4D3A]" />
                  <span>Start Plan on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WILDLIFE SAFARIS SECTION */}
      <section className="py-20 bg-[#F5F1E8] text-[#2B2B2B] scroll-mt-20 border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
              🦁 Discover Tanzania’s Wildlife
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
              Discover Tanzania’s Wildlife
            </h2>
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-medium">
              Experience the Big Five in world-famous parks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Popular Safari Packages (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 mb-6 border-b border-stone-200 pb-3">
                <Sparkles className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3A]">
                  🔥 Popular Safari Packages
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Package 1: 2 Days Safari */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-2xl bg-white border border-[#1F4D3A]/5 hover:border-[#C9A227]/40 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-[#C96B2C] bg-[#C96B2C]/10 px-2.5 py-1 rounded-md uppercase">
                      2 Days Safari
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-3 mb-4">
                      Tarangire National Park & Ngorongoro Crater
                    </h4>
                    <div className="space-y-2 text-sm text-stone-600 mb-6">
                      <p className="flex items-center gap-2">
                        <span className="text-[#C9A227]">🐾</span> Tarangire National Park
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-[#C9A227]">🐾</span> Ngorongoro Crater
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Prices From</span>
                      <span className="text-lg font-bold text-[#1F4D3A] font-mono">
                        $600
                      </span>
                      <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider ml-1">per person</span>
                    </div>

                    <a
                      href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20the%202%20Days%20Safari%20(Tarangire%20%26%20Ngorongoro)."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </motion.div>

                {/* Package 2: 3 Days Safari */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#C9A227] shadow-md transition-all flex flex-col justify-between relative"
                >
                  <div className="absolute top-4 right-4 bg-[#C9A227] text-[#1F4D3A] text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                    Most Popular ⭐
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-[#1F4D3A] bg-[#1F4D3A]/10 px-2.5 py-1 rounded-md uppercase">
                      3 Days Safari
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-3 mb-4">
                      Serengeti National Park & Ngorongoro Crater
                    </h4>
                    <div className="space-y-2 text-sm text-stone-600 mb-6">
                      <p className="flex items-center gap-2">
                        <span className="text-[#C9A227]">🐾</span> Serengeti National Park
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-[#C9A227]">🐾</span> Ngorongoro Crater
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Prices From</span>
                      <span className="text-lg font-bold text-[#1F4D3A] font-mono">
                        $1,000
                      </span>
                      <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider ml-1">per person</span>
                    </div>

                    <a
                      href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20the%203%20Days%20Safari%20(Serengeti%20%26%20Ngorongoro)."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </motion.div>

                {/* Package 3: 5 Days Safari */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-white border border-[#1F4D3A]/5 hover:border-[#C9A227]/40 shadow-sm transition-all flex flex-col justify-between md:col-span-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold font-mono tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md uppercase">
                        5 Days Safari
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3A] mt-2">
                        5 Days Safari Experience
                      </h4>
                    </div>
                    <div className="sm:text-right">
                      <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Prices From</span>
                      <span className="text-2xl font-bold text-[#1F4D3A] font-mono">
                        $1,700
                      </span>
                      <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider ml-1 font-mono">per person</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-stone-100 pt-4 mt-auto">
                    <p className="text-xs text-stone-500 max-w-md leading-relaxed">
                      Our most comprehensive immersive tour covering epic game drives in Tarangire, Lake Manyara, Serengeti plains, and the legendary Ngorongoro crater floor.
                    </p>
                    <a
                      href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%252520in%252520the%2525205%252520Days%252520Safari%252520Experience."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire 5 Days Package</span>
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Right Column: reduced in size Wildlife Safari Inclusions card (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1F4D3A] to-[#133024] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/5 relative overflow-hidden">
              <span className="text-[#C9A227] font-mono text-[9px] tracking-widest uppercase font-bold block mb-2">
                Premium Standard
              </span>
              <h3 className="font-serif text-lg font-bold mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                <span>✔</span> What’s Included
              </h3>

              <ul className="space-y-2.5 mb-5">
                {[
                  "Private safari vehicle",
                  "Professional guide",
                  "Lodge / camping options"
                ].map((incItem, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="text-[#C9A227] text-sm font-bold select-none shrink-0">✔</span>
                    <span className="text-stone-100 font-medium text-xs sm:text-sm leading-none">{incItem}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-[11px] text-stone-300 leading-normal">
                  Impeccable local transport. Direct updates on WhatsApp!
                </p>
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520want%2520to%252520plan%2520a%252520custom%252520wildlife%252520safari%252520trip%252520to%252520Tanzania."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#C9A227] hover:bg-[#b08b1f] text-[#1F4D3A] font-bold text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#1F4D3A]" />
                  <span>Inquire Safari Now</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DAY TRIPS SECTION */}
      <section className="py-20 bg-white text-[#2B2B2B] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
              🌿 Day Trips
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
              Short Adventures from Arusha
            </h2>
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-semibold">
              Perfect for quick experiences and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Popular Day Trips (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {[
                { name: "Kikuletwa Hot Springs", icon: "💧", price: 100 },
                { name: "Materuni Waterfalls", icon: "🌿", price: 100 },
                { name: "Serval Wildlife", icon: "🦁", price: 120 },
                { name: "Napuru Waterfalls", icon: "🥾", price: 70 }
              ].map((trip, idx) => {
                return (
                  <motion.div
                    key={trip.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#F5F1E8]/35 border border-stone-200/60 hover:border-[#C9A227]/40 shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl select-none">{trip.icon}</span>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#1F4D3A]">
                          {trip.name}
                        </h4>
                        <p className="text-xs text-stone-500">
                          One day custom driver exploration surrounding Arusha.
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-200/50 mt-2 sm:mt-0 gap-3">
                      <div>
                        <span className="block text-[9px] text-stone-400 font-bold uppercase tracking-wider">Starting from</span>
                        <span className="text-lg font-bold text-[#1F4D3A] font-mono">
                          ${trip.price}
                        </span>
                      </div>

                      <a
                        href={`https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520${encodeURIComponent(trip.name)}%2520Day%2520Trip.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Right Column: reduced in size Day Trips Inclusions card (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1F4D3A] to-[#133024] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/5 relative overflow-hidden">
              <span className="text-[#C9A227] font-mono text-[9px] tracking-widest uppercase font-bold block mb-2">
                Daily Tours
              </span>
              <h3 className="font-serif text-lg font-bold mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                <span>✔</span> What’s Included
              </h3>

              <ul className="space-y-2.5 mb-5">
                {[
                  "Transport included",
                  "Local guide",
                  "Lunch included"
                ].map((incItem, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="text-[#C9A227] text-sm font-bold select-none shrink-0">✔</span>
                    <span className="text-stone-100 font-medium text-xs sm:text-sm leading-none">{incItem}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-[11px] text-stone-300 leading-normal">
                  Hassle-free day trip bookings. Direct updates on WhatsApp!
                </p>
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520want%2520to%252520book%2520a%2520Day%2520Trip%2520for%2520my%252520group."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#C9A227] hover:bg-[#b08b1f] text-[#1F4D3A] font-bold text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#1F4D3A]" />
                  <span>Book Day Trip now</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. COMBINED PACKAGES SECTION */}
      <section className="py-20 bg-[#F5F1E8] text-[#2B2B2B] scroll-mt-20 border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
              🔥 COMBINED PACKAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
              Ultimate Tanzania Experiences
            </h2>
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-semibold">
              👉 More value • More adventure • One trip
            </p>
          </div>

          {/* Grid of Combined Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Promo Card 1: ⭐ Kilimanjaro + Safari */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border-2 border-[#C9A227] rounded-2xl p-6 shadow-md relative flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 bg-[#C9A227] text-[#1F4D3A] text-[9.5px] font-bold uppercase py-1 px-2.5 rounded-full tracking-wider">
                Best Seller
              </div>

              <div>
                <span className="text-2xl select-none">⭐</span>
                <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-2 mb-4">
                  Kilimanjaro + Safari (Best Seller)
                </h4>
                
                <ul className="space-y-2 mb-6">
                  <li className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <span className="text-[#C9A227]">🌋</span> Mount Kilimanjaro
                  </li>
                  <li className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <span className="text-[#C9A227]">🦁</span> Serengeti National Park
                  </li>
                  <li className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <span className="text-[#C9A227]">🦓</span> Ngorongoro Crater
                  </li>
                </ul>

                <div className="space-y-1.5 text-xs text-stone-500 font-mono">
                  <p className="flex items-center gap-1.5">
                    <span>📅</span> 9–12 Days
                  </p>
                  <p className="flex items-start gap-1.5 text-stone-600 font-bold text-xs">
                    <span>💰</span> <span>Starting from; depending on the root you choose</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-4 flex items-center justify-between">
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520Kilimanjaro%2520%2B%2520Safari%2520(Best%2520Seller)%2520combined%2520package."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire Now</span>
                </a>
              </div>
            </motion.div>

            {/* Promo Card 2: 🔥 Safari + Chemka */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl select-none">🔥</span>
                <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-2 mb-4">
                  Safari + Chemka Hot Springs
                </h4>

                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Combine multi-day wildlife safaris with restorative relaxation at the hidden palm oasis of Kikuletwa Hot Springs.
                </p>

                <div className="space-y-1.5 text-xs text-stone-500 font-mono">
                  <p className="flex items-center gap-1.5">
                    <span>📅</span> 3–4 Days
                  </p>
                  <p className="flex items-center gap-1.5 text-stone-600 font-bold">
                    <span>💰</span> Starting from $1,300
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-4">
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520Safari%2520%2B%2520Chemka%2520Hot%2520Springs%2520combined%2520package."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire Now</span>
                </a>
              </div>
            </motion.div>

            {/* Promo Card 3: 🌿 Kilimanjaro + Materuni */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl select-none">🌿</span>
                <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-2 mb-4">
                  Kilimanjaro + Materuni
                </h4>

                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Begin or reward your epic high-altitude trek with a relaxing waterfalls exploration and traditional organic coffee masterclass.
                </p>

                <div className="space-y-1.5 text-xs text-stone-500 font-mono">
                  <p className="flex items-center gap-1.5">
                    <span>📅</span> 7–9 Days
                  </p>
                  <p className="flex items-center gap-1.5 text-stone-600 font-bold">
                    <span>💰</span> Starting from $2,600
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-4">
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520Kilimanjaro%2520%2B%2520Materuni%2520combined%2520package."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire Now</span>
                </a>
              </div>
            </motion.div>

            {/* Promo Card 4: 🦁 Safari + Materuni */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl select-none">🦁</span>
                <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-2 mb-4">
                  Safari + Materuni
                </h4>

                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Pack immersive native culture activities alongside world-class game drives to the deep Crater and wildlife corridors.
                </p>

                <div className="space-y-1.5 text-xs text-stone-500 font-mono">
                  <p className="flex items-center gap-1.5">
                    <span>📅</span> 4–5 Days
                  </p>
                  <p className="flex items-center gap-1.5 text-stone-600 font-bold">
                    <span>💰</span> Starting from $1,500
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-4">
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520Safari%2520%2B%2520Materuni%2520combined%2520package."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire Now</span>
                </a>
              </div>
            </motion.div>

            {/* Promo Card 5: 🥾 Safari + Napuru */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1"
            >
              <div>
                <span className="text-2xl select-none">🥾</span>
                <h4 className="font-serif text-xl font-bold text-[#1F4D3A] mt-2 mb-4">
                  Safari + Napuru
                </h4>

                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Trek hidden canyon vistas and Arusha native homestead paths coupled with high-caliber private safari game drives.
                </p>

                <div className="space-y-1.5 text-xs text-stone-500 font-mono">
                  <p className="flex items-center gap-1.5">
                    <span>📅</span> 3–4 Days
                  </p>
                  <p className="flex items-center gap-1.5 text-stone-600 font-bold">
                    <span>💰</span> Starting from $1,250
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-stone-100 pt-4">
                <a
                  href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%2520am%2520interested%2520in%2520the%2520Safari%2520%2B%2520Napuru%2520combined%2520package."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire Now</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* 7. CAPTURING BEST MOMENTS PROMISE (LITERAL WORDS AS REQUESTED) */}
          <div className="mt-16 text-center max-w-2xl mx-auto bg-white/60 border border-[#1F4D3A]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="font-serif text-base sm:text-lg text-[#1F4D3A] leading-relaxed font-semibold">
              “We also capture your best moments during the trip 📸
            </p>
            <p className="font-serif text-base sm:text-lg text-[#1F4D3A] leading-relaxed font-semibold mt-2">
              So, you don’t just experience it — you keep it forever.
            </p>
            <p className="font-serif text-base sm:text-lg text-[#C96B2C] leading-relaxed font-bold mt-4">
              Would you like a Kilimanjaro + Safari package? 😊”
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/255714998804?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520Yes%2520I%2520would%2520love%2520the%2520Kilimanjaro%2520%2B%2520Safari%2520package%2520and%2520to%2520capture%2520our%2520best%2520moments."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-md hover:shadow-[#25D366]/20 transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Plan Your Ultimate Combo</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
