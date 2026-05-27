/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Calendar, ArrowRight, Camera } from 'lucide-react';
import { combinedPackages } from '../data';
import { motion } from 'motion/react';

interface CombinedSectionProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function CombinedSection({ onOpenBooking }: CombinedSectionProps) {
  return (
    <section id="combined" className="py-20 bg-white text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8D5A34] uppercase block mb-3 font-mono">
            Combined Package Bundles 🗺️
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] mb-4">
            Ultimate Tanzania Experiences
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed">
            Maximize your African journey by combining active alpine conquests with magical wildlife drives or relaxing nature day trips, all consolidated into a single premium planned itinerary.
          </p>
        </div>

        {/* Bundle Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {combinedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="bg-[#EFECE3]/40 border border-[#0E251D]/5 hover:border-[#8D5A34]/30 hover:bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              
              {/* Left Photo Banner */}
              <div className="sm:w-2/5 relative h-56 sm:h-auto min-h-60 shrink-0 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/60 sm:hidden" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent sm:hidden" />

                {/* Best Seller Banner */}
                {pkg.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-[#9B6338] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Best Seller</span>
                  </div>
                )}
              </div>

              {/* Right Content details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  
                  {/* Duration Capsule */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#9B6338] font-semibold mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#0E251D] mb-3 leading-tight group-hover:text-[#9B6338] transition-colors duration-200">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                </div>

                {/* Bottom Row price/button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#0E251D]/5">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-sans">Starting from</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#0E251D]">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono ml-1">USD</span>
                  </div>

                  <span className="text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
                    All-Inclusive
                  </span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Feature photographer camera banner:
            "We capture your best travel moments 📸 so you keep memories forever." */}
        <div className="bg-[#0E251D] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-[#8D5A34]/40">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#8D5A34] p-3 text-white rounded-2xl shadow-md shrink-0">
                <Camera className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#EFECE3]">
                  Capturing your best travel moments
                </h4>
                <p className="text-xs sm:text-sm text-[#EFECE3]/75">
                  Our professional guides are skilled travel photographers. We carry premium cameras to take pristine action edits of your mountain climbs, hot springs rope swings, and predator safaris so you store memories forever. 📸
                </p>
              </div>
            </div>
            
            <span className="shrink-0 font-mono text-[10px] sm:text-xs uppercase bg-[#8D5A34]/15 text-[#8D5A34] rounded-full border border-[#8D5A34]/40 px-5 py-2.5 tracking-wider font-bold">
              Included Free In All Premium Bookings
            </span>
          </div>

          {/* Underlay glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#9B6338]/20 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
