/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Mountain, Sparkles, Heart, ShieldCheck, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  
  const whyChooseUs = [
    {
      icon: Users,
      title: t('about.why.guides'),
    },
    {
      icon: Mountain,
      title: t('about.why.success'),
    },
    {
      icon: Sparkles,
      title: t('about.why.flexible'),
    },
    {
      icon: Heart,
      title: t('about.why.service'),
    },
    {
      icon: ShieldCheck,
      title: t('about.why.transport'),
    },
    {
      icon: Camera,
      title: t('about.why.authentic'),
    },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#EFECE3] to-[#eae5da] dark:from-[#121c17] dark:to-[#16221c] text-[#2B2B2B] dark:text-[#F5F1E8] scroll-mt-20 transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header - Centered & Clean (No Image) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-[#9B6338] dark:text-[#8D5A34] uppercase block mb-3 font-mono">
            {t('about.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] dark:text-[#F5F1E8] leading-tight mb-6">
            {t('about.title')}
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#2B2B2B]/80 dark:text-stone-300 leading-relaxed">
            <p>
              <strong className="text-[#0E251D] dark:text-[#8D5A34]">{t('nav.home') === 'Home' ? 'Chaka Safaris & Hiking' : 'Chaka Safaris & Hiking'}</strong> {t('about.lead1').replace('Chaka Safaris & Hiking ', '')}
            </p>
            <p className="text-sm sm:text-base text-[#2B2B2B]/75 dark:text-stone-300/80">
              {t('about.lead2')}
            </p>
          </div>
        </div>

        {/* Compressed Why Choose Us Layout */}
        <div className="max-w-4xl mx-auto bg-white/60 dark:bg-[#1a2b23] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#0E251D]/5 dark:border-white/10 shadow-sm mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E251D] dark:text-[#F5F1E8] text-center mb-6">
            {t('about.chooseTitle')}
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-xl hover:bg-white/85 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <div className="bg-[#0E251D]/5 dark:bg-white/5 text-[#0E251D] dark:text-[#8D5A34] p-2.5 rounded-lg shrink-0">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="font-sans font-semibold text-xs sm:text-sm text-[#0E251D] dark:text-[#F5F1E8] text-center sm:text-left leading-tight">
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
