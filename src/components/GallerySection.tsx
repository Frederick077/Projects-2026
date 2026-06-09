/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, MapPin, Compass } from 'lucide-react';
import { galleryItems } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function GallerySection({ onOpenBooking }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous les Moments' : 'All Moments' },
    { id: 'wildlife', name: language === 'fr' ? 'Vie Sauvage 🦁' : 'Wildlife 🦁' },
    { id: 'kilimanjaro', name: language === 'fr' ? 'Kilimandjaro 🌋' : 'Kilimanjaro 🌋 font-bold' },
    { id: 'waterfalls', name: language === 'fr' ? 'Cascades 💦' : 'Waterfalls 💦' },
    { id: 'hot springs', name: language === 'fr' ? 'Sources Chaudes 🌴' : 'Hot Springs 🌴' },
    { id: 'safari moments', name: language === 'fr' ? 'Instants Safari 🌅' : 'Safari Moments 🌅' },
    { id: 'happy travelers', name: language === 'fr' ? 'Voyageurs Heureux 🎒' : 'Happy Travelers 🎒' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (itemIndex: number) => {
    // Find matching true index in the filtered items array
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#EFECE3] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9B6338] uppercase block mb-3 font-mono">
            {language === 'fr' ? 'Instants Magiques ✨' : 'Memories Capture ✨'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] mb-4">
            {language === 'fr' ? 'Notre Galerie d’Aventure' : 'Our Adventure Gallery'}
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed">
            {language === 'fr'
              ? 'Retrouvez les plus beaux clichés capturés en direct. Filtrez pour contempler la richesse des parcs nationaux et la joie sincère de nos voyageurs.'
              : 'Real action moments captured live on tour by our teams. Filter through categories to explore Tanzanian scenic beauty and authentic traveler happiness.'}
          </p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider font-sans transition-all duration-300 uppercase cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0E251D] text-[#8D5A34] shadow-md border-b-2 border-[#8D5A34]'
                  : 'bg-white text-[#0E251D] hover:bg-[#0E251D]/5 border border-gray-200/80 hover:border-[#0E251D]/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl aspect-4/3 group cursor-zoom-in bg-stone-200 border border-black/5"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#8D5A34] tracking-wider uppercase font-mono font-bold mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg mb-1 leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-gray-300 mb-2">
                    <MapPin className="w-3 h-3 text-red-400" />
                    <span>{item.location}</span>
                  </div>

                  <span className="self-start text-[9px] uppercase tracking-wider bg-white/10 backdrop-blur-xs py-1 px-3 rounded-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    {language === 'fr' ? 'Agrandir' : 'View Detail'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-6"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/15 hover:bg-white/35 text-white rounded-full p-2.5 transition-colors duration-200 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Central Box */}
              <div
                className="max-w-4xl w-full flex flex-col items-center gap-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo frame */}
                <div className="relative max-h-[65vh] w-full flex justify-center items-center overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-[65vh] object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Left arrow button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 bg-black/55 hover:bg-[#8D5A34] hover:text-[#0E251D] text-white p-2.5 rounded-full transition-colors cursor-pointer"
                    aria-label="Previous pic"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Right arrow button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-3 bg-black/55 hover:bg-[#8D5A34] hover:text-[#0E251D] text-white p-2.5 rounded-full transition-colors cursor-pointer"
                    aria-label="Next pic"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Subtitle and Dynamic Reservation Actions inside the lightbox */}
                <div className="text-white mt-1 max-w-2xl px-2">
                  <span className="text-[10px] sm:text-xs font-mono uppercase font-bold tracking-[0.2em] text-[#8D5A34]">
                    {language === 'fr' ? 'Catégorie :' : 'Category:'} {currentItem.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-[#EFECE3]">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{currentItem.location}</span>
                  </p>
                  
                  {/* High Quality quick CTA inside Lightbox */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <button
                      onClick={closeLightbox}
                      className="bg-[#8D5A34] hover:bg-[#724522] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
                    >
                      {language === 'fr' ? 'Fermer la Galerie' : 'Close Viewer'}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
