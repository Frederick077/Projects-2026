/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Mountain, Sparkles, Heart, ShieldCheck, Camera, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Local Guides',
      desc: 'Our certified, English-speaking guides are native Tanzanians who know every secret animal pathway and mountain slope.',
    },
    {
      icon: Mountain,
      title: 'High Summit Success Rate',
      desc: 'With safety-first protocols, pulse checks, and structured pacing, we guide hundreds of climbers happily to Uhuru Peak.',
    },
    {
      icon: Sparkles,
      title: 'Affordable & Flexible',
      desc: 'Premium customizable itineraries and flexible payment plans tailored perfectly to your individual budget limits.',
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      desc: 'From initial call to safari wrap-up, you will be accompanied by genuine Tanzanian hospitality (Karibu Sana!).',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Reliable Transport',
      desc: 'We maintain our own luxury customized 4x4 open-roof safari Land Cruisers and secure private transfers 24/7.',
    },
    {
      icon: Camera,
      title: 'Authentic Experiences',
      desc: 'Cultural integrations, traditional Chagga coffee-making chants, and ethical wild encounters that touch your soul.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#F5F1E8] to-[#eae5da] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header - Centered & Clean (No Image) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] leading-tight mb-6">
            Your Local Experts in Safari & Hiking Adventures
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#2B2B2B]/80 leading-relaxed">
            <p>
              <strong>Chaka Safaris & Hiking</strong> is a locally owned tour company based in Arusha, Tanzania. We specialize in providing authentic and memorable travel experiences for visitors from around the world.
            </p>
            <p className="text-sm sm:text-base text-[#2B2B2B]/75">
              Our team is passionate about nature, adventure, and hospitality. Whether you want to hike to beautiful waterfalls, relax in natural hot springs, or explore Tanzania’s wildlife, we are here to make your journey safe, enjoyable, and unforgettable.
            </p>
          </div>
        </div>

        {/* Compressed Why Choose Us Layout */}
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#1F4D3A]/5 shadow-sm mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3A] text-center mb-6">
            Why Travelers Choose Chaka Safaris
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-xl hover:bg-white/80 transition-all duration-300"
                >
                  <div className="bg-[#1F4D3A]/5 text-[#1F4D3A] p-2.5 rounded-lg shrink-0">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="font-sans font-semibold text-xs sm:text-sm text-[#1F4D3A] text-center sm:text-left leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
}
