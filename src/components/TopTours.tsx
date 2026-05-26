/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Sparkles, MapPin, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TopToursProps {
  onOpenBooking: (packageType: string, packageName: string) => void;
}

export default function TopTours({ onOpenBooking }: TopToursProps) {
  const topTours = [
    {
      id: 'top-materuni',
      emoji: '🌿',
      name: 'Materuni Waterfalls & Coffee Tour',
      desc: 'Visit the stunning Materuni Waterfalls, enjoy a guided hike, and experience a traditional coffee-making tour with local communities.',
      perfectFor: 'Nature lovers & cultural experiences',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-chemka',
      emoji: '💧',
      name: 'Chemka Hot Springs',
      desc: 'Swim in the crystal-clear waters of Kikuletwa Hot Springs, surrounded by peaceful natural scenery.',
      perfectFor: 'Relaxation & swimming',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-serval',
      emoji: '🦁',
      name: 'Serval Wildlife Experience',
      desc: 'Get close to wildlife at Serval Wildlife, including lions, giraffes, and other animals.',
      perfectFor: 'Animal lovers & photography',
      image: 'https://images.unsplash.com/photo-1518887570146-0612132dd618?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-arusha',
      emoji: '🌄',
      name: 'Arusha National Park Safari',
      desc: 'Enjoy a classic safari in Arusha National Park with breathtaking landscapes and diverse wildlife.',
      perfectFor: 'First-time safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'top-napuru',
      emoji: '🥾',
      name: 'Napuru Waterfalls Hike',
      desc: 'Discover hidden beauty at Napuru Waterfalls with a scenic hiking experience.',
      perfectFor: 'Adventure seekers',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C9A227] uppercase block mb-3 font-mono">
            Most Loved Experiences ⭐
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
            Our Top Tours
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75">
            Highly recommended and top-rated travel packages in Tanzania, loved by adventure seekers worldwide.
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
              className="bg-[#F5F1E8]/50 border border-[#1F4D3A]/5 hover:border-[#C9A227]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Cover Photo */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Large Emoji top-left badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs w-10 h-10 rounded-xl flex items-center justify-center shadow-md font-sans text-xl">
                  {tour.emoji}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F4D3A] mb-3 leading-snug group-hover:text-[#C96B2C] transition-colors duration-200">
                  {tour.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#2B2B2B]/85 leading-relaxed mb-6 flex-grow">
                  {tour.desc}
                </p>

                {/* Perfect For Segment */}
                <div className="bg-[#1F4D3A]/5 rounded-lg p-3.5 mb-6 border-l-4 border-[#C9A227]">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#C96B2C] mb-1 font-bold">
                    Perfect for:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#1F4D3A]">
                    {tour.perfectFor}
                  </span>
                </div>

                <div className="h-[1px] bg-[#1F4D3A]/10 w-full mb-4 mt-auto" />

                {/* Card Action Link or Button */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-stone-500 font-medium">✨ Bestseller Local Adventure</span>
                  <span className="text-[#C9A227] font-mono text-xs font-bold uppercase tracking-wider">Arusha Outing</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
