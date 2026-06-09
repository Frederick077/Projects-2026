/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Sparkles, MapPin, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface TopToursProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function TopTours({ onOpenBooking }: TopToursProps) {
  const { language, t } = useLanguage();

  const topTours = [
    {
      id: 'top-materuni',
      emoji: '🌿',
      name: language === 'fr' ? 'Chute de Materuni & Atelier Café' : 'Materuni Waterfalls & Coffee Tour',
      desc: language === 'fr' 
        ? 'Visitez les superbes chutes de Materuni, profitez d\'une randonnée guidée et participez à un atelier traditionnel de fabrication de café avec les communautés locales.' 
        : 'Visit the stunning Materuni Waterfalls, enjoy a guided hike, and experience a traditional coffee-making tour with local communities.',
      perfectFor: language === 'fr' ? 'Amoureux de la nature & expériences culturelles' : 'Nature lovers & cultural experiences',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-chemka',
      emoji: '💧',
      name: language === 'fr' ? 'Sources Chaudes de Chemka' : 'Chemka Hot Springs',
      desc: language === 'fr' 
        ? 'Nagez dans les eaux cristallines des sources chaudes de Kikuletwa, entourées d\'un paysage naturel paisible.' 
        : 'Swim in the crystal-clear waters of Kikuletwa Hot Springs, surrounded by peaceful natural scenery.',
      perfectFor: language === 'fr' ? 'Détente & baignade' : 'Relaxation & swimming',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-serval',
      emoji: '🦁',
      name: language === 'fr' ? 'Expérience Animalière Serval' : 'Serval Wildlife Experience',
      desc: language === 'fr' 
        ? 'Approchez de très près de magnifiques animaux à Serval Wildlife, comme les lions, girafes, zèbres et singes.' 
        : 'Get close to wildlife at Serval Wildlife, including lions, giraffes, and other animals.',
      perfectFor: language === 'fr' ? 'Amoureux des animaux & photographie' : 'Animal lovers & photography',
      image: 'https://images.unsplash.com/photo-1518887570146-0612132dd618?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-arusha',
      emoji: '🌄',
      name: language === 'fr' ? 'Safari au Parc National d\'Arusha' : 'Arusha National Park Safari',
      desc: language === 'fr' 
        ? 'Profitez d\'un safari classique au parc national d\'Arusha avec des paysages à couper le souffle et une faune diversifiée.' 
        : 'Enjoy a classic safari in Arusha National Park with breathtaking landscapes and diverse wildlife.',
      perfectFor: language === 'fr' ? 'Premier safari en Afrique' : 'First-time safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-napuru',
      emoji: '🥾',
      name: language === 'fr' ? 'Randonnée la Cascade de Napuru' : 'Napuru Waterfalls Hike',
      desc: language === 'fr' 
        ? 'Découvrez la beauté cachée de la cascade de Napuru au cours d\'une randonnée pittoresque en pleine jungle.' 
        : 'Discover hidden beauty at Napuru Waterfalls with a scenic hiking experience.',
      perfectFor: language === 'fr' ? 'Amateurs d\'aventure sauvage' : 'Adventure seekers',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#121c17] text-[#2B2B2B] dark:text-[#EFECE3] transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8D5A34] uppercase block mb-3 font-mono">
            {language === 'fr' ? 'Expériences les Plus Aimées ⭐' : 'Most Loved Experiences ⭐'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] dark:text-[#F5F1E8] mb-4">
            {language === 'fr' ? 'Nos Plus Beaux Circuits' : 'Our Top Tours'}
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 dark:text-stone-300">
            {language === 'fr' 
              ? 'Formules de voyage tanzaniennes hautement recommandées et plébiscitées partout dans le monde.' 
              : 'Highly recommended and top-rated travel packages in Tanzania, loved by adventure seekers worldwide.'}
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#EFECE3]/70 dark:bg-[#1a2b23] border border-[#0E251D]/10 hover:border-[#8D5A34]/50 dark:border-white/10 dark:hover:border-[#8D5A34]/50 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Card Body - Header Emoji & Name Row */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-white dark:bg-[#0E251D] border border-[#0E251D]/10 dark:border-[#8D5A34]/20 w-12 h-12 rounded-xl flex items-center justify-center shadow-xs font-sans text-2xl shrink-0 transition-transform group-hover:scale-105 duration-300">
                  {tour.emoji}
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0E251D] dark:text-[#F5F1E8] leading-snug group-hover:text-[#9B6338] dark:group-hover:text-[#8D5A34] transition-colors duration-200">
                    {tour.name}
                  </h3>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono tracking-widest uppercase mt-0.5 block">
                    {language === 'fr' ? 'Expérience en Tanzanie' : 'Tanzania Experience'}
                  </span>
                </div>
              </div>

              {/* Text details and perfect for */}
              <div className="flex flex-col flex-grow">
                <p className="text-xs sm:text-sm text-[#2B2B2B]/85 dark:text-stone-300 leading-relaxed mb-6 flex-grow">
                  {tour.desc}
                </p>

                {/* Perfect For Segment */}
                <div className="bg-[#0E251D]/5 dark:bg-white/5 rounded-xl p-4 mb-6 border-l-4 border-[#8D5A34] shadow-2xs">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#9B6338] dark:text-[#8D5A34] mb-1 font-bold">
                    {language === 'fr' ? 'Idéal pour :' : 'Perfect for:'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0E251D] dark:text-[#F5F1E8]/90">
                    {tour.perfectFor}
                  </span>
                </div>

                <div className="h-[1px] bg-[#0E251D]/10 dark:bg-white/10 w-full mb-4 mt-auto" />

                {/* Card Action Link or Button */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                    {language === 'fr' ? '✨ Succès local garanti' : '✨ Bestseller Local Adventure'}
                  </span>
                  <span className="text-[#8D5A34] font-mono text-xs font-bold uppercase tracking-wider">
                    {language === 'fr' ? 'Excursion Arusha' : 'Arusha Outing'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
