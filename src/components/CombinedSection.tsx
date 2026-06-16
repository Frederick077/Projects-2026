/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Calendar, ArrowRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

interface CombinedSectionProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function CombinedSection({ onOpenBooking }: CombinedSectionProps) {
  const { language, t, getCombinedPackages } = useLanguage();
  const packages = getCombinedPackages();
  return (
    <section id="combined" className="py-20 bg-white text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8D5A34] uppercase block mb-3 font-mono">
            {language === 'fr' ? 'Forfaits Combinés Tout En Un 🗺️' : 'Combined Package Bundles 🗺️'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] mb-4">
            {language === 'fr' ? 'L’Expérience Ultime en Tanzanie' : 'Ultimate Tanzania Experiences'}
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed">
            {language === 'fr'
              ? 'Maximisez votre voyage en combinant l’ascension de sommets alpins avec des safaris magiques ou de relaxantes excursions d’un jour, le tout regroupé dans un seul magnifique itinéraire.'
              : 'Maximize your African journey by combining active alpine conquests with magical wildlife drives or relaxing nature day trips, all consolidated into a single premium planned itinerary.'}
          </p>
        </div>

        {/* Bundle Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
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
                    <span>{language === 'fr' ? 'Meilleure Vente' : 'Best Seller'}</span>
                  </div>
                )}
              </div>

              {/* Right Content details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  
                  {/* Duration Capsule */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#9B6338] font-semibold mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{language === 'fr' ? pkg.duration.replace('Days', 'Jours').replace('Day', 'Jour') : pkg.duration}</span>
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
                  <span className="text-[#0E251D] text-xs font-mono font-semibold border border-[#0E251D]/15 rounded-lg px-2.5 py-1.5 bg-[#0E251D]/5">
                    {language === 'fr' ? '✨ Tout Inclus' : '✨ All-Inclusive'}
                  </span>

                  <a
                    href={`https://wa.me/255703432513?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20combined%20adventure.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>{language === 'fr' ? 'S’informer' : 'Inquire'}</span>
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Feature photographer camera banner */}
        <div className="bg-[#0E251D] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-[#8D5A34]/40">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#8D5A34] p-3 text-white rounded-2xl shadow-md shrink-0">
                <Camera className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#EFECE3]">
                  {language === 'fr' ? 'Nous immortalisons vos plus beaux souvenirs' : 'Capturing your best travel moments'}
                </h4>
                <p className="text-xs sm:text-sm text-[#EFECE3]/75">
                  {language === 'fr'
                    ? 'Nos guides experts sont de brillants photographes de voyage. Nous sommes équipés d’appareils photos haut de gamme afin de capturer vos plus beaux exploits, que ce soit à l’ascension du toit de l’Afrique, lors de plongeons dans les sources bleues ou au milieu des prédateurs en safari, vous permettant de conserver des souvenirs inoubliables. 📸'
                    : 'Our professional guides are skilled travel photographers. We carry premium cameras to take pristine action edits of your mountain climbs, hot springs rope swings, and predator safaris so you store memories forever. 📸'}
                </p>
              </div>
            </div>
            
            <span className="shrink-0 font-mono text-[10px] sm:text-xs uppercase bg-[#8D5A34]/15 text-[#8D5A34] rounded-full border border-[#8D5A34]/40 px-5 py-2.5 tracking-wider font-bold">
              {language === 'fr' ? 'Inclus Gratuitement Dans Nos Forfaits' : 'Included Free In All Premium Bookings'}
            </span>
          </div>

          {/* Underlay glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#9B6338]/20 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
