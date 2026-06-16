/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Star, Car, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

interface SafariSectionProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function SafariSection({ onOpenBooking }: SafariSectionProps) {
  const { language, t, getWildlifePackages } = useLanguage();
  const packages = getWildlifePackages();

  const highlights = [
    { 
      tag: language === 'fr' ? '🛞 Flotte Privée' : '🛞 Private Fleet', 
      value: language === 'fr' 
        ? 'Véhicules 4x4 Land Cruiser privés équipés d’un toit ouvrant pour une photographie animalière parfaite.' 
        : 'Private Custom 4x4 Land Cruiser with open pop-up roof for unmatched 360° game photography.' 
    },
    { 
      tag: language === 'fr' ? '👨‍🏫 Guide Certifié' : '👨‍🏫 Certified Guide', 
      value: language === 'fr' 
        ? 'Chauffeur guide naturaliste local agréé francophone avec des décennies d’expérience de traque.' 
        : 'Highly licensed, fluent local safari naturalist driver with decades of animal behavior tracking expertise.' 
    },
    { 
      tag: language === 'fr' ? '⛺ Logements de Charme' : '⛺ Premium Lodgings', 
      value: language === 'fr' 
        ? 'Choisissez entre le camping authentique au milieu de la savane ou des écologites haut de gamme.' 
        : 'Choose from authentic wild camping setups under the stars to fully catered organic wilderness standard lodges.' 
    }
  ];

  return (
    <section id="safaris" className="py-20 bg-gradient-to-b from-[#0E251D] to-[#143328] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8D5A34] uppercase block mb-3 font-mono">
            {language === 'fr' ? 'Safaris d’Exception en Savane 🦁' : 'Unrivaled Wilderness Safari 🦁'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'fr' ? 'Découvrez la Faune Tanzanienne' : 'Discover Tanzania’s Wildlife'}
          </h2>
          <p className="text-base sm:text-lg text-[#EFECE3]/75 leading-relaxed">
            {language === 'fr'
              ? 'Partez sur les traces des légendaires "Big Five" (lion, léopard, éléphant, buffle, rhinocéros) au cœur des plus beaux parcs mondiaux de conservation.'
              : 'Experience the legendary Big Five (Lion, Leopard, Elephant, Buffalo, Rhino) inside world-famous heritage conservation parks.'}
          </p>
        </div>

        {/* Global Key Highlights row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {highlights.map((hl, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <span className="block font-sans font-bold text-[#8D5A34] text-sm tracking-wider uppercase mb-2">
                {hl.tag}
              </span>
              <p className="text-xs sm:text-sm text-[#EFECE3]/80 leading-relaxed">
                {hl.value}
              </p>
            </div>
          ))}
        </div>

        {/* Wildlife Package List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col bg-white text-[#2B2B2B] rounded-2xl overflow-hidden border border-[#8D5A34]/20 hover:border-[#8D5A34]/60 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              
              {/* Cover Image Block */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Transparent Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Popularity ribbon flag */}
                {pkg.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#9B6338] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>{language === 'fr' ? 'Très Populaire' : 'Most Popular'}</span>
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Parks highlights */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9B6338] block mb-2">
                    {language === 'fr' ? 'Destinations :' : 'Destinations:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.parks.map((park, i) => (
                      <span
                        key={i}
                        className="bg-[#0E251D]/5 text-[#0E251D] text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#0E251D]/5"
                      >
                        <MapPin className="w-3 h-3 text-[#9B6338]" />
                        {park}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Features list */}
                <div className="mb-5 flex-grow">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9B6338] block mb-2">
                    {language === 'fr' ? 'Points Forts du Safari :' : 'Wildlife Focus:'}
                  </span>
                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-xs text-[#2B2B2B]/75 leading-relaxed flex items-start gap-1.5">
                        <span className="text-[#8D5A34] mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9B6338] block mb-2">
                    {language === 'fr' ? 'Éléments Inclus :' : 'Package Inclusions:'}
                  </span>
                  <ul className="space-y-1 lg:space-y-1.5">
                    {pkg.included.slice(0, 4).map((inc, i) => (
                      <li key={i} className="text-xs text-[#2B2B2B]/85 leading-relaxed flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0E251D] shrink-0 mt-0.5" />
                        <span>{language === 'fr' ? (
                          inc.includes('Private') || inc.includes('4x4') ? 'Véhicule 4x4 de Safari privé et chauffeur' :
                          inc.includes('Entrance') || inc.includes('fees') ? 'Frais d’entrées de parcs d\'observation' :
                          inc.includes('Lodge') || inc.includes('hospitality') ? 'Hébergement de charme en pension complète' :
                          inc.includes('water') || inc.includes('Water') ? 'Eau minérale fraîche à volonté à bord' : inc
                        ) : inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-gray-200 w-full my-4 mt-auto" />

                {/* Booking strip */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#0E251D] text-xs font-mono font-semibold border border-[#0E251D]/15 rounded-lg px-2.5 py-1.5 bg-[#0E251D]/5">
                    {language === 'fr' ? '🦁 Safari Privé' : '🦁 Private Safari'}
                  </span>

                  <a
                    href={`https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20wildlife%20safari.`}
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

      </div>
    </section>
  );
}
