/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Compass, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenBooking?: (packageType?: string, packageName?: string) => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#EFECE3] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9B6338] uppercase block mb-3 font-mono">
            {t('contact.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Centered Chaka Safaris Office Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/60 shadow-lg">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-5">
            <div className="bg-[#0E251D] p-2 rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#8D5A34] stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#0E251D] leading-none mb-1">
                {t('contact.card.title')}
              </h3>
              <span className="text-[10px] text-[#9B6338] font-mono tracking-widest uppercase">
                {t('contact.card.loc')}
              </span>
            </div>
          </div>
          
          <ul className="space-y-8">
            {/* Location */}
            <li className="flex items-start gap-4">
              <div className="bg-[#0E251D]/5 text-[#0E251D] p-3 rounded-xl border border-[#0E251D]/5 shrink-0">
                <MapPin className="w-5 h-5 text-[#9B6338]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">{t('contact.label.loc')}</span>
                <strong className="block text-sm sm:text-base text-[#0E251D] mt-0.5">{t('contact.val.loc')}</strong>
                <span className="text-xs text-gray-500 block mt-0.5">{t('contact.val.loc_sub')}</span>
              </div>
            </li>

            {/* WhatsApp Phone */}
            <li className="flex items-start gap-4">
              <div className="bg-[#0E251D]/5 text-[#0E251D] p-3 rounded-xl border border-[#0E251D]/5 shrink-0">
                <Phone className="w-5 h-5 text-[#8D5A34]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">{t('contact.label.phone')}</span>
                <a
                  href="https://wa.me/255703432513?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%2520am%2520interested%2520in%2520booking%2520a%2520tour."
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base sm:text-lg text-[#0E251D] font-extrabold hover:text-[#9B6338] mt-0.5 transition-colors font-mono"
                >
                  +255 703 432 513
                </a>
                <span className="text-xs text-gray-500 block mt-0.5">
                  {language === 'fr' ? 'Ligne active 24h/24 et 7j/7 (fuseau horaire d\'Arusha)' : 'Call active 24/7 (Local Arusha timezone)'}
                </span>
              </div>
            </li>

            {/* Email Address */}
            <li className="flex items-start gap-4">
              <div className="bg-[#0E251D]/5 text-[#0E251D] p-3 rounded-xl border border-[#0E251D]/5 shrink-0">
                <Mail className="w-5 h-5 text-[#0E251D]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">{t('contact.label.email')}</span>
                <a
                  href="mailto:safarischaka@gmail.com"
                  className="block text-[#0E251D] font-bold hover:text-[#9B6338] mt-0.5 transition-colors text-sm sm:text-base"
                >
                  safarischaka@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <div className="h-[1px] bg-gray-100 my-8" />

          {/* Social Channels */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">
                {language === 'fr' ? 'Nos Réseaux Sociaux' : 'Our Social Channels'}
              </span>
              <span className="text-xs text-gray-500">
                {language === 'fr' ? 'Suivez nos randonnées quotidiennes' : 'Follow our daily hiking moments'}
              </span>
            </div>
            <div className="flex gap-2.5">
              {[
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg viewBox="0 0 16 16" className="fill-current" xmlns="http://www.w3.org/2000/svg" {...props}>
                      <path d="M8.667 3.333c.333 0 .667-.333.667-.667s-.333-.667-.667-.667H7.333C4.133 2 1.6 4.533 1.6 7.733v.534C1.6 11.467 4.133 14 7.333 14h1.334c2.867 0 5.2-2.333 5.2-5.2V7.733c0-.333-.333-.667-.667-.667s-.667.333-.667.667v1.067C12.533 11 10.2 12.667 7.333 12.667H7.33v.001c-2.133 0-3.867-1.733-3.867-3.867V8.533C3.467 6.4 5.2 4.667 7.333 4.667h1.334v1.066c0 .334.333.667.667.667s.667-.333.667-.667V3.333z"/>
                      <path d="M8.667 8.533V7.733C8.667 6.4 7.333 5 6 5s-2.667 1.4-2.667 2.733v.8c0 1.334 1.334 2.733 2.667 2.733s2.667-1.4 2.667-2.733zm-4-1.6c0-.533.533-1.066 1.333-1.066S7.333 6.4 7.333 6.933V8c0 .533-.533 1.067-1.333 1.067S4.667 8.533 4.667 8V6.933z"/>
                    </svg>
                  ), 
                  href: 'https://www.threads.net/@chaka_safari_and_hiking', 
                  label: 'Threads' 
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => <Instagram {...props} />, 
                  href: 'https://www.instagram.com/chaka_safari_and_hiking', 
                  label: 'Instagram' 
                },
                { 
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" {...props}>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.17 1.22 1.34 2.97 2.13 4.76 2.24v3.91c-1.4-.04-2.77-.45-3.95-1.19-.78-.49-1.46-1.14-1.99-1.89v5.99c-.04 2.06-.61 4.11-1.74 5.8-1.57 2.31-4.14 3.8-6.94 3.93-2.91.13-5.83-.98-7.75-3.18-2.07-2.31-2.93-5.59-2.27-8.62.59-2.75 2.45-5.18 5-6.42 1.15-.56 2.41-.85 3.69-.85.34 0 .68.02 1.02.05V9.11c-.32-.05-.66-.08-1-.08-1.61-.01-3.21.65-4.32 1.83-1.12 1.18-1.66 2.82-1.46 4.43.19 1.59 1.1 3.02 2.47 3.8 1.41.81 3.19.86 4.65.12 1.36-.68 2.22-2.11 2.25-3.64l.01-15.55z" strokeWidth="0" />
                    </svg>
                  ), 
                  href: 'https://www.tiktok.com/@safarischaka', 
                  label: 'TikTok' 
                }
              ].map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0E251D] hover:bg-[#8D5A34] text-white hover:text-[#0E251D] p-3 rounded-xl transition-all duration-200 border border-black/5 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm"
                    aria-label={s.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
