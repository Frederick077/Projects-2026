/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Compass, Facebook, Instagram, Twitter } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: (packageType?: string, packageName?: string) => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-[#EFECE3] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9B6338] uppercase block mb-3 font-mono">
            Get In Touch 📍
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] mb-4">
            Contact Chaka Safaris
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75">
            Connect directly with or visit our office team in Arusha, Tanzania to plan your classic trek or bespoke safari holiday.
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
                Chaka Safaris Office
              </h3>
              <span className="text-[10px] text-[#9B6338] font-mono tracking-widest uppercase">
                Arusha, Tanzania
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
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Headquarters Location</span>
                <strong className="block text-sm sm:text-base text-[#0E251D] mt-0.5">Saba Saba Road, Arusha, Tanzania</strong>
                <span className="text-xs text-gray-500 block mt-0.5">Opposite Arusha Cultural Museum (Gate #3)</span>
              </div>
            </li>

            {/* WhatsApp Phone */}
            <li className="flex items-start gap-4">
              <div className="bg-[#0E251D]/5 text-[#0E251D] p-3 rounded-xl border border-[#0E251D]/5 shrink-0">
                <Phone className="w-5 h-5 text-[#8D5A34]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">WhatsApp and Mobile Call</span>
                <a
                  href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%2520am%2520interested%2520in%2520booking%2520a%2520tour."
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base sm:text-lg text-[#0E251D] font-extrabold hover:text-[#9B6338] mt-0.5 transition-colors font-mono"
                >
                  +255 714 998 804
                </a>
                <span className="text-xs text-gray-500 block mt-0.5">Call active 24/7 (Local Arusha timezone)</span>
              </div>
            </li>

            {/* Email Address */}
            <li className="flex items-start gap-4">
              <div className="bg-[#0E251D]/5 text-[#0E251D] p-3 rounded-xl border border-[#0E251D]/5 shrink-0">
                <Mail className="w-5 h-5 text-[#0E251D]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Official Email handles</span>
                <a
                  href="mailto:info@chakasafaris.com"
                  className="block text-[#0E251D] font-bold hover:text-[#9B6338] mt-0.5 transition-colors text-sm sm:text-base"
                >
                  info@chakasafaris.com
                </a>
                <span className="text-xs text-gray-500 font-mono block mt-0.5">booking@chakasafaris.com</span>
              </div>
            </li>
          </ul>

          <div className="h-[1px] bg-gray-100 my-8" />

          {/* Social Channels */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Our Social Channels</span>
              <span className="text-xs text-gray-500">Follow our daily hiking moments</span>
            </div>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' }
              ].map((s, idx) => {
                const SvgIcon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    className="bg-[#0E251D] hover:bg-[#8D5A34] text-white hover:text-[#0E251D] p-3 rounded-xl transition-all duration-200 border border-black/5 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm"
                    aria-label={s.label}
                  >
                    <SvgIcon className="w-4 h-4" />
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
