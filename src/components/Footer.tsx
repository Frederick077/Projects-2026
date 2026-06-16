/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Mail, Phone, MapPin, Heart, ShieldAlert, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#0E251D] text-stone-300 pt-16 pb-8 border-t border-[#8D5A34]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Column 1: Contact Us Details */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-white text-xl tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-[#8D5A34] rounded-full" />
              {language === 'fr' ? 'CONTACTEZ-NOUS' : 'CONTACT US'}
            </h4>
            
            <ul className="space-y-4 text-base text-stone-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8D5A34] shrink-0 mt-0.5" />
                <span>Arusha, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8D5A34] shrink-0" />
                <a href="https://wa.me/255703432513" target="_blank" rel="noreferrer" className="hover:text-[#8D5A34] transition-colors font-semibold">
                  {language === 'fr' ? 'Tél / WhatsApp : +255 703 432 513' : 'Phone / WhatsApp: +255 703 432 513'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8D5A34] shrink-0" />
                <a href="mailto:safarischaka@gmail.com" className="hover:text-[#8D5A34] transition-colors font-semibold">
                  safarischaka@gmail.com
                </a>
              </li>
            </ul>

            <div className="bg-[#0E251D]/40 border border-[#8D5A34]/20 rounded-xl p-4 inline-block">
              <p className="text-xs text-stone-200 font-medium font-sans flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#8D5A34]" /> {language === 'fr' ? 'Nous sommes à votre écoute 24h/24 et 7j/7.' : 'We are available 24/7 to assist you.'}
              </p>
            </div>
          </div>

          {/* Column 2: CTA Block */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="font-serif font-bold text-white text-2xl mb-3">
                {language === 'fr' ? 'Prêt à Explorer la Tanzanie ?' : 'Ready to Explore Tanzania?'}
              </h4>
              <p className="text-stone-300/90 text-base leading-relaxed max-w-md">
                {language === 'fr' ? 'Laissez Chaka Safaris & Hiking guider votre prochaine aventure d’exception.' : 'Let Chaka Safaris & Hiking guide your next adventure.'}
              </p>
              <p className="text-[#8D5A34] font-serif italic text-lg mt-2 font-bold">
                {language === 'fr' ? 'Contactez-nous aujourd’hui' : 'Contact Us Today'}
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/255703432513?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20visited%20your%20website%20and%20want%20to%20plan%20a%20tour%20to%20Tanzania."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#8D5A34] hover:bg-[#724522] active:scale-95 text-white font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-lg shadow-xl cursor-pointer transition-all duration-300"
              >
                <span>{language === 'fr' ? '👉 Commencez Votre Voyage' : '👉 Start Your Journey Now'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Gray separator */}
        <div className="h-[1px] bg-white/10 w-full my-8" />

        {/* Copyright and safety certifications row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>{language === 'fr' ? `© ${currentYear} Chaka Safaris & Hiking. Tous droits réservés. Basé à Arusha, Tanzanie.` : `© ${currentYear} Chaka Safaris & Hiking. All rights reserved. Based in Arusha, Tanzania.`}</p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-lg py-1.5 px-3">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C96B2C]" />
            <span className="text-[10px] leading-none uppercase font-mono tracking-wider">{language === 'fr' ? 'Garanties Nature 100% Sécurisées' : '100% Secure Wilderness Guarantees'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
