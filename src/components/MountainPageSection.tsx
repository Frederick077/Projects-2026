/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, CheckCircle, Flame, Star, Compass, ArrowRight, CornerDownRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

// Custom clean WhatsApp icon SVG
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

interface MountainPageSectionProps {
  onOpenBooking?: (packageType: string, packageName: string) => void;
}

export default function MountainPageSection({ onOpenBooking }: MountainPageSectionProps) {
  const { language } = useLanguage();
  return (
    <div id="mountain-page" className="scroll-mt-20">
      
      {/* HEADER SECTION */}
      <div className="relative bg-[#0E251D] text-white py-16 sm:py-20 overflow-hidden rounded-b-3xl shadow-lg border-b border-stone-200/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589553460730-dfbeb39ef32e?w=1920&auto=format&fit=crop&q=85"
            alt="Majestic high altitude mountains"
            className="w-full h-full object-cover opacity-25 filter grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-[#0E251D]/90 to-[#0E251D]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 shadow-md mb-4">
            <Compass className="w-4 h-4 text-[#8D5A34]" />
            <span className="font-mono text-[10px] text-[#EFECE3] font-bold uppercase tracking-widest">
              {language === 'fr' ? 'Sommets & Sentiers de Tanzanie' : 'Tanzania Peaks & Trails'}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#EFECE3] tracking-tight leading-none mb-3">
            {language === 'fr' ? 'Expériences de Montagne' : 'Mountain Experiences'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base font-mono uppercase tracking-widest max-w-xl text-center">
            {language === 'fr' ? 'Mont Kilimandjaro • Mont Meru • Randonnées d’un Jour' : 'Mount Kilimanjaro • Mount Meru • Day Hikes'}
          </p>
        </div>
      </div>

      {/* CORE MOUNTAIN CONTENT */}
      <section className="py-16 bg-[#EFECE3] dark:bg-[#121c17] text-[#2B2B2B] dark:text-[#EFECE3] transition-colors duration-350">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* SECTION 1: MOUNT KILIMANJARO CLIMBING */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#1a2b23] rounded-2xl border border-stone-200 dark:border-white/10 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">🌄</span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E251D] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'Ascension du Mont Kilimandjaro' : 'Mount Kilimanjaro Climbing'}
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9B6338]" />
                    <span>{language === 'fr' ? 'Lieu : Mont Kilimandjaro' : 'Location: Mount Kilimanjaro'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2 mb-6">
              <span className="block text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase tracking-wider font-bold">
                {language === 'fr' ? 'Aperçu' : 'Overview'}
              </span>
              <p className="text-[#2B2B2B]/95 dark:text-stone-300 text-base leading-relaxed">
                {language === 'fr'
                  ? 'Grimpez sur le plus haut sommet d’Afrique et vivez l’une des aventures les plus emblématiques de la planète. Notre équipe professionnelle vous guidera en toute sécurité jusqu’au sommet.'
                  : 'Climb the highest mountain in Africa and experience one of the world’s most iconic adventures. Our professional team will guide you safely to the summit.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Routes */}
              <div>
                <span className="block text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase tracking-wider font-bold mb-3">
                  {language === 'fr' ? 'Voies Disponibles' : 'Routes Available'}
                </span>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/5 text-sm font-semibold text-[#0E251D] dark:text-stone-200">
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#9B6338]" />
                      {language === 'fr' ? 'Voie Machame (6-7 jours)' : 'Machame Route (6–7 days)'}
                    </span>
                    <span className="text-[10px] bg-[#8D5A34]/20 text-[#0E251D] dark:text-[#8D5A34] rounded px-2 py-0.5 uppercase tracking-wider font-bold py-1 flex items-center gap-1 font-mono">
                      ⭐ {language === 'fr' ? 'populaire' : 'popular'}
                    </span>
                  </li>
                  <li className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/5 text-sm font-semibold text-[#0E251D] dark:text-stone-200">
                    <span className="flex items-center gap-2">
                       <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                      {language === 'fr' ? 'Voie Marangu (5-6 jours)' : 'Marangu Route (5–6 days)'}
                    </span>
                  </li>
                  <li className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/5 text-sm font-semibold text-[#0E251D] dark:text-stone-100">
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#9B6338]" />
                      {language === 'fr' ? 'Voie Lemosho (7-8 jours)' : 'Lemosho Route (7–8 days)'}
                    </span>
                    <span className="text-[10px] bg-teal-500/10 text-teal-800 dark:text-teal-400 rounded px-2 py-0.5 uppercase tracking-wider font-bold py-1 flex items-center gap-1 font-mono">
                      ⭐ {language === 'fr' ? 'panoramique' : 'scenic'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Inclusions */}
              <div className="bg-[#0E251D]/5 dark:bg-white/5 border border-[#0E251D]/10 dark:border-white/10 rounded-xl p-5">
                <span className="block text-stone-500 dark:text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold mb-3">
                  {language === 'fr' ? 'Ce qui est inclus' : 'What’s Included'}
                </span>
                <ul className="space-y-2">
                  {(language === 'fr' ? [
                    "Guides professionnels, porteurs et cuisinier",
                    "Tous les frais de parc national",
                    "Hébergement en tente de camping ou refuge",
                    "Repas complets durant la marche",
                    "Transferts depuis et vers l'hôtel"
                  ] : [
                    "Professional guides, porters & cook",
                    "All park fees",
                    "Camping / hut accommodation",
                    "Meals during the trek",
                    "Transfers from/to hotel"
                  ]).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#0E251D] dark:text-stone-200">
                      <span className="text-[#8D5A34] font-semibold text-sm select-none">✔</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquire CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-stone-100 dark:border-white/10 pt-6 mt-8 gap-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-mono">
                <span className="text-[#9B6338] font-semibold">👉 {language === 'fr' ? 'Recommandé pour :' : 'Best for:'}</span>
                <span className="font-bold uppercase tracking-wider text-[#0E251D] dark:text-stone-300">
                  {language === 'fr' ? 'Passionnés d’aventure, grands randonneurs' : 'Adventure seekers, serious hikers'}
                </span>
              </div>

              <a
                href="https://wa.me/255703432513?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%252520am%252520interested%252520in%252520Mount%252520Kilimanjaro%252520Climbing%252520packages."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>{language === 'fr' ? 'S’informer sur WhatsApp' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>
          </motion.div>

          {/* SECTION 2: MOUNT MERU TREK */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#1a2b23] rounded-2xl border border-stone-200 dark:border-white/10 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">🌋</span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E251D] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'Trek du Mont Meru' : 'Mount Meru Trek'}
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9B6338]" />
                    <span>{language === 'fr' ? 'Lieu : Mont Meru' : 'Location: Mount Meru'}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-stone-400 dark:text-stone-500 font-mono uppercase tracking-wider font-bold">
                  {language === 'fr' ? 'Durée' : 'Duration'}
                </span>
                <span className="text-[#0E251D] dark:text-[#8D5A34] font-bold text-sm bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded px-2.5 py-1 inline-block font-mono">
                  {language === 'fr' ? '3–4 Jours' : '3–4 Days'}
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2 mb-6">
              <span className="block text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase tracking-wider font-bold">
                {language === 'fr' ? 'Aperçu' : 'Overview'}
              </span>
              <p className="text-[#2B2B2B]/95 dark:text-stone-300 text-base leading-relaxed">
                {language === 'fr'
                  ? 'Une alternative parfaite au Kilimandjaro avec moins d’affluence et d’incroyables rencontres avec la faune sauvage au sein du parc national d’Arusha.'
                  : 'A perfect alternative to Kilimanjaro with fewer crowds and amazing wildlife views inside Arusha National Park.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What to Expect */}
              <div>
                <span className="block text-stone-400 dark:text-stone-500 font-mono text-[10px] uppercase tracking-wider font-bold mb-3">
                  {language === 'fr' ? 'À quoi s’attendre' : 'What to Expect'}
                </span>
                <ul className="space-y-2.5">
                  {(language === 'fr' ? [
                    "Trekking avec guide expérimenté",
                    "Rencontres animalières sauvages (girafes, buffles)",
                    "Points de vue splendides au lever du soleil"
                  ] : [
                    "Guided trekking",
                    "Wildlife encounters (giraffes, buffaloes)",
                    "Stunning sunrise views"
                  ]).map((exp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-[#0E251D] dark:text-stone-200">
                      <span className="text-[#8D5A34] mt-1 select-none">✦</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Profile Details */}
              <div className="bg-[#0E251D]/5 dark:bg-white/5 border border-[#0E251D]/10 dark:border-white/10 rounded-xl p-5">
                <span className="block text-stone-500 dark:text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold mb-3">
                  {language === 'fr' ? 'Détails de l’Ascension' : 'Climb Specifications'}
                </span>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between border-b border-stone-200/55 dark:border-white/10 pb-2 text-sm text-stone-700 dark:text-stone-300">
                    <span className="font-semibold text-[#0E251D] dark:text-[#F5F1E8]">
                      {language === 'fr' ? 'Altitude' : 'Elevation'}
                    </span>
                    <span className="font-bold text-[#9B6338]">4,562m (14,967 ft)</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-700 dark:text-stone-300 pt-1">
                    <span className="font-semibold text-[#0E251D] dark:text-[#F5F1E8]">
                      {language === 'fr' ? 'Style de Route' : 'Route Style'}
                    </span>
                    <span className="font-bold text-[#0E251D] dark:text-[#8D5A34]">{language === 'fr' ? 'Refuges de montagne' : 'Alpine huts'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-stone-100 dark:border-white/10 pt-6 mt-8 gap-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-mono">
                <span className="text-[#9B6338] font-semibold">👉 {language === 'fr' ? 'Idéal pour :' : 'Best for:'}</span>
                <span className="font-bold uppercase tracking-wider text-[#0E251D] dark:text-stone-300">
                  {language === 'fr' ? 'Aventure express, acclimatation' : 'Short adventure, acclimatization'}
                </span>
              </div>

              <a
                href="https://wa.me/255703432513?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%252520am%252520interested%252520in%252520Mount%252520Meru%252520Trek."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>{language === 'fr' ? 'S’informer sur WhatsApp' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>
          </motion.div>

          {/* SECTION 3: DAY HIKES */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#1a2b23] rounded-2xl border border-stone-200/85 dark:border-white/10 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all"
          >
            <div className="border-b border-stone-100 dark:border-white/10 pb-5 mb-6 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">🥾</span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E251D] dark:text-[#F5F1E8]">
                  {language === 'fr' ? 'Randonnées d’un Jour (Sommets Courts & Sentiers)' : 'Day Hikes (Short Mountains & Trails)'}
                </h2>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                  {language === 'fr' ? 'Excursions d’exploration d’une journée au départ d’Arusha' : 'Single-day exploratory excursions out of Arusha'}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: language === 'fr' ? "Randonnée au Village de Materuni" : "Materuni Village Hike", icon: "🌿", location: language === 'fr' ? "Chutes de Materuni" : "Materuni Waterfalls", duration: language === 'fr' ? "1 Jour" : "1 Day" },
                { name: language === 'fr' ? "Randonnée aux Chutes de Napuru" : "Napuru Waterfalls Hike", icon: "🌄", location: language === 'fr' ? "Chutes de Napuru" : "Napuru Waterfalls", duration: language === 'fr' ? "1 Jour" : "1 Day" },
                { name: language === 'fr' ? "Randonnée d'un Jour Marangu" : "Marangu Day hiking", icon: "🌋", location: "Marangu Gate", duration: language === 'fr' ? "1 Jour" : "1 Day" },
                { name: language === 'fr' ? "Randonnée d'un Jour Machame" : "machame day hiking", icon: "🥾", location: "Machame Gate", duration: language === 'fr' ? "1 Jour" : "1 Day" },
                { name: language === 'fr' ? "Randonnée d'un Jour Lomoshu" : "Lomoshu Day hiking", icon: "🌲", location: "Lomoshu / Lemosho", duration: language === 'fr' ? "1 Jour" : "1 Day" }
              ].map((hike, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 dark:bg-white/5 border border-stone-200/60 dark:border-white/10 hover:border-[#8D5A34]/40 dark:hover:border-[#8D5A34]/40 shadow-xs transition-colors">
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl select-none">{hike.icon}</span>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#0E251D] dark:text-[#F5F1E8]">
                        {hike.name}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#9B6338]" />
                        <span>{language === 'fr' ? 'Lieu :' : 'Location:'} {hike.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-200/50 dark:border-white/10 mt-2 sm:mt-0 gap-3">
                    <div className="text-left sm:text-right">
                      <span className="block text-[9px] text-[#9B6338] font-bold uppercase tracking-wider font-mono">
                        {language === 'fr' ? 'Durée' : 'Duration'}
                      </span>
                      <span className="text-sm font-bold text-[#0E251D] dark:text-[#8D5A34] font-mono">
                        {hike.duration}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/255703432513?text=Hi%2520Chaka%2520Safaris%2520and%2520Hiking!%2520I%252520am%252520interested%252520in%252520booking%252520the%252520${encodeURIComponent(hike.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>{language === 'fr' ? 'S’informer' : 'Inquire Hike'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
