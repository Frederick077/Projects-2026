/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Compass, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenBooking: (packageType?: string, packageName?: string) => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your name and email.');
      return;
    }
    // Simulate API delivery
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#eae5da] text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
            Get In Touch 📍
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F4D3A] mb-4">
            Book Your Adventure Today
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75">
            Plan your custom climb or custom safari directly with our team based in Arusha. We reply to all digital inquiries within 12 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates and Forms */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-md">
              <h3 className="font-serif text-xl font-bold text-[#1F4D3A] mb-6">
                Chaka Safaris Office
              </h3>
              
              <ul className="space-y-6">
                {/* Location */}
                <li className="flex items-start gap-4">
                  <div className="bg-[#1F4D3A]/5 text-[#1F4D3A] p-3 rounded-xl border border-[#1F4D3A]/5 shrink-0">
                    <MapPin className="w-5 h-5 text-[#C96B2C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Headquarters Location</span>
                    <strong className="block text-sm sm:text-base text-[#1F4D3A] mt-0.5">Saba Saba Road, Arusha, Tanzania</strong>
                    <span className="text-xs text-gray-500">Opposite Arusha Cultural Museum (Gate #3)</span>
                  </div>
                </li>

                {/* WhatsApp Phone */}
                <li className="flex items-start gap-4">
                  <div className="bg-[#1F4D3A]/5 text-[#1F4D3A] p-3 rounded-xl border border-[#1F4D3A]/5 shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">WhatsApp and Mobile Call</span>
                    <a
                      href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20a%20tour."
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm sm:text-base text-[#1F4D3A] font-bold hover:text-[#C96B2C] mt-0.5 transition-colors"
                    >
                      +255 714 998 804
                    </a>
                    <span className="text-xs text-gray-500">Call active 24/7 (Local Arusha timezone)</span>
                  </div>
                </li>

                {/* Email Address */}
                <li className="flex items-start gap-4">
                  <div className="bg-[#1F4D3A]/5 text-[#1F4D3A] p-3 rounded-xl border border-[#1F4D3A]/5 shrink-0">
                    <Mail className="w-5 h-5 text-[#1F4D3A]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400">Official Email handles</span>
                    <a
                      href="mailto:info@chakasafaris.com"
                      className="block text-sm sm:text-base text-[#1F4D3A] font-bold hover:text-[#C96B2C] mt-0.5 transition-colors"
                    >
                      info@chakasafaris.com
                    </a>
                    <span className="text-xs text-gray-500 font-mono">booking@chakasafaris.com</span>
                  </div>
                </li>
              </ul>

              <div className="h-[1px] bg-gray-100 my-6" />

              {/* Social Channels */}
              <div>
                <span className="block text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-3">Our Social Channels:</span>
                <div className="flex gap-2">
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
                        className="bg-[#1F4D3A] hover:bg-[#C9A227] text-white hover:text-[#1F4D3A] p-2.5 rounded-lg transition-colors border border-black/5"
                        aria-label={s.label}
                      >
                        <SvgIcon className="w-4.5 h-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Action CTA Box */}
            <div className="bg-[#1F4D3A] text-white p-6 rounded-2xl border border-[#C9A227]/30 shadow-md">
              <h4 className="font-serif text-lg font-bold mb-2 text-[#C9A227]">Instant Tailor-Made Requests</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Have specific dates, dietary targets, group size, or routes? Our local booking managers will layout a printable PDF custom price itinerary completely free.
              </p>
              <a
                href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20want%20to%20request%20a%20custom%20tailor-made%20itinerary."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-block text-center bg-[#C9A227] hover:bg-[#b08b1f] text-[#1F4D3A] py-3 rounded-lg font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer"
              >
                Inquire Tailor-Made
              </a>
            </div>
          </div>

          {/* Right Column: Web form and simulated custom vector safari map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* INLINE QUICK INQUIRY STREAM */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-md">
              <h3 className="font-serif text-xl font-bold text-[#1F4D3A] mb-4">
                Send Direct Message
              </h3>
              
              {submitted ? (
                <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                  <h4 className="font-sans font-bold text-green-800 text-lg mb-2">Message Sent Successfully!</h4>
                  <p className="text-xs text-green-700 max-w-sm mx-auto">
                    Thank you. Your message has reached Sabasaba Road, Arusha. Our specialists are reviewing your request now. (Karibu Tanzania)
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 text-xs font-bold text-[#1F4D3A] hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">WhatsApp or Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                      placeholder="+33 6 12345678"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">How can we help you?</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C9A227] transition-all text-[#2B2B2B]"
                      placeholder="List details of Kilimanjaro routes, safari duration, budget level or any personal wishes here..."
                    />
                  </div>

                  <div className="flex justify-end items-center pt-2">
                    <button
                      type="submit"
                      className="bg-[#1F4D3A] hover:bg-[#C9A227] hover:text-[#1F4D3A] text-white py-3 px-6 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Query</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Simulated Tanzanian custom vector routes map */}
            <div className="bg-[#1F4D3A] text-white rounded-2xl p-6 border border-white/5 relative overflow-hidden h-80 flex flex-col justify-between group shadow-xl">
              {/* Map Canvas Underlay Mock */}
              <div className="absolute inset-0 bg-[#133024] opacity-80" />
              
              {/* Visual custom-art styling for simulated Map */}
              <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-10">
                {/* Mount Kili plot */}
                <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                  <div className="bg-[#C9A227] w-3 h-3 rounded-full animate-ping absolute" />
                  <div className="bg-[#C9A227] w-3.5 h-3.5 rounded-full border border-white z-10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[#1F4D3A] rounded-full" />
                  </div>
                  <span className="font-serif text-[10px] sm:text-xs font-bold text-[#F5F1E8] tracking-wider mt-1 drop-shadow-md">MT. KILIMANJARO (5,895m)</span>
                  <span className="text-[8px] text-[#C9A227] font-mono leading-none">Uhuru Peak Peak</span>
                </div>

                {/* Serengeti Safari plot */}
                <div className="absolute top-1/3 left-1/5 flex flex-col items-center">
                  <div className="bg-white/40 w-3 h-3 rounded-full absolute" />
                  <div className="bg-white w-2.5 h-2.5 rounded-full border border-black z-10" />
                  <span className="font-serif text-[10px] text-gray-200 tracking-wider mt-1 drop-shadow-md">Serengeti Savanna Plains</span>
                  <span className="text-[8px] text-[#C96B2C] font-mono leading-none">Safari Hot Air Balloon</span>
                </div>

                {/* Ngorongoro crater plot */}
                <div className="absolute top-1/2 left-2/5 flex flex-col items-center">
                  <div className="bg-white w-2.5 h-2.5 rounded-full border border-black z-10" />
                  <span className="font-serif text-[10px] text-gray-200 tracking-wider mt-1 drop-shadow-md">Ngorongoro Caldera Rim</span>
                </div>

                {/* Saba Saba Arusha Office Plot */}
                <div className="absolute bottom-1/4 right-1/3 flex flex-col items-start translate-x-4">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-[#C96B2C] w-4 h-4 rounded-lg flex items-center justify-center z-12 animate-pulse border border-white">
                      <Compass className="w-2.5 h-2.5 text-white animate-spin" />
                    </div>
                    <span className="font-mono text-[9px] bold text-[#C9A227] bg-[#1F4D3A]/90 px-1.5 py-0.5 rounded border border-[#C9A227]/30">CHAKA SAFARIS HQ</span>
                  </div>
                </div>

                {/* Connective Route vectors */}
                <svg className="absolute inset-0 w-full h-full text-[#C9A227]/40 pointer-events-none stroke-[2]" fill="none">
                  {/* Serengeti to Ngorongoro */}
                  <path d="M 120 110 Q 180 120 220 160" strokeDasharray="4,4" />
                  {/* Ngorongoro to Arusha */}
                  <path d="M 220 160 Q 250 190 280 190" strokeDasharray="4,4" />
                  {/* Arusha to Kili */}
                  <path d="M 280 190 Q 300 130 350 90" strokeDasharray="4,4" />
                </svg>
              </div>

              {/* Map Footer Overlay Text */}
              <div className="relative z-10 mt-auto bg-[#1F4D3A]/90 p-4 rounded-xl border border-white/5 backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="block font-mono text-[10px] text-[#C9A227] font-semibold uppercase tracking-wider">Tanzania Adventure Grid</span>
                  <span className="block text-[11px] sm:text-xs text-stone-300 mt-0.5">Explore our custom overland routes originating from Arusha</span>
                </div>
                <a
                  href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20Please%20send%20me%20your%20safari%20and%20trekking%20routes."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C9A227] text-[#1F4D3A] text-[9px] font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-lg flex items-center gap-1 hover:bg-white transition-colors duration-200 border border-white/10 shrink-0"
                >
                  <MessageSquare className="w-3 h-3 fill-current" />
                  Chat Map
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
