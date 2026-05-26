/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, MapPin, Sparkles } from 'lucide-react';
import { dayTrips } from '../data';
import { motion } from 'motion/react';

interface DayTripsSectionProps {
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

export default function DayTripsSection({ onOpenBooking }: DayTripsSectionProps) {
  return (
    <section id="day-trips" className="py-20 bg-[#F5F1E8] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
            Excursions & Transfers 🌴
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
            Short Adventures from Arusha
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed">
            Short on time? Discover incredible waterfalls, therapeutic hot springs, ethical wildlife feeding sanctuaries, or culture city walks surrounding the mountain town of Arusha.
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dayTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C9A227]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Photo Area */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-[#1F4D3A]/90 text-white backdrop-blur-md text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                  <span className="truncate max-w-[150px]">{trip.location}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/95 text-[#1F4D3A] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-[#C96B2C]" />
                  <span>{trip.duration}</span>
                </div>

                {/* Overlaid Best For Option */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] text-[#C9A227] font-mono tracking-widest uppercase font-bold mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C9A227]" /> {trip.bestFor.split(',')[0]}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
                    {trip.name}
                  </h3>
                </div>
              </div>

              {/* Text Layout */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Description (Overview) */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                  {trip.description}
                </p>

                {/* Best For Tagline */}
                <div className="mb-5 bg-stone-50 border border-stone-200/60 rounded-xl p-3 text-xs flex flex-wrap gap-1.5 items-center">
                  <span className="font-bold text-[#1F4D3A] font-mono text-[10px] uppercase tracking-wide shrink-0">
                    🎯 Best For:
                  </span>
                  <span className="text-stone-700 font-medium">
                    {trip.bestFor}
                  </span>
                </div>

                {/* What to Expect Bullets */}
                <div className="mb-6">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#C96B2C] font-bold mb-2.5">
                    What to Expect:
                  </span>
                  <ul className="space-y-2">
                    {trip.included.map((item, idx) => (
                      <li key={idx} className="text-stone-600 text-xs flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#C9A227] select-none text-[11px] mt-0.5 shrink-0">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-stone-100 w-full my-4 mt-auto" />

                {/* Bottom Row - Price & direct WhatsApp Inquire */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="block font-sans text-[10px] text-stone-400 font-semibold uppercase tracking-wider">All-Inclusive</span>
                    <div className="flex items-baseline">
                      <span className="font-serif text-2xl font-bold text-[#1F4D3A]">
                        ${trip.price}
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono ml-1 font-semibold">USD</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20visited%2520your%20website%20and%20want%2520to%20plan%20and%20inquire%20about%20the%20${encodeURIComponent(trip.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4.5 rounded-lg shadow-sm hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#25D366]/10 shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
