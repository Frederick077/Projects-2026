/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Compass, MessageSquare, ArrowDown, MapPin, Calendar, Clock, Smile, ChevronDown, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Subcomponents imports
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import MountainSection from './components/MountainSection';
import MountainPageSection from './components/MountainPageSection';
import SafariSection from './components/SafariSection';
import DayTripsSection from './components/DayTripsSection';
import CombinedSection from './components/CombinedSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TopTours from './components/TopTours';

export default function App() {
  // Navigation active view state
  const [currentView, setCurrentView] = useState<string>('home');
  // Booking modal context states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('custom');
  const [modalPackage, setModalPackage] = useState<string>('');

  // Dark / Light Theme logic state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const openBookingForm = (packageType: string = 'custom', packageName: string = '') => {
    setModalType(packageType);
    setModalPackage(packageName);
    setIsBookingOpen(true);
  };

  const handleScrollDown = () => {
    const mainSection = document.querySelector('#main-content-start');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderActiveContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            {/* 1. CINEMATIC SCENIC HERO SECTION (Full Screen) */}
            <section
              id="home"
              className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-stone-900"
            >
              {/* Background photo underlay with elegant overlay tint */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=85"
                  alt="Cinematic African Safari Wilderness Sunset"
                  className="w-full h-full object-cover scale-102 transform duration-1000 animate-pulse-slow"
                  referrerPolicy="no-referrer"
                />
                {/* Custom luxury ambient black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
              </div>

              {/* Hero typography content with motion layouts */}
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-16">
                
                {/* Location details */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/25 shadow-md mb-6"
                >
                  <MapPin className="w-5 h-5 text-[#8D5A34] fill-current" />
                  <span className="font-mono text-xs text-[#EFECE3] font-bold uppercase tracking-widest leading-none">
                    Arusha, Tanzania
                  </span>
                </motion.div>

                {/* Core Master Headline */}
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#EFECE3] tracking-tight leading-tight sm:leading-none max-w-4xl"
                >
                  Explore Tanzania with <br className="hidden sm:block" />
                  <span className="text-[#8D5A34]">Chaka Safaris & Hiking</span>
                </motion.h1>

                {/* Core Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-stone-200 mt-6 max-w-3xl text-base sm:text-xl leading-relaxed text-balance"
                >
                  Unforgettable safari and hiking experiences in the heart of Tanzania. Discover waterfalls, wildlife, hot springs, and authentic local culture with trusted local guides.
                </motion.p>

                {/* Action CTAs Button row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
                >
                  {/* Primary Action */}
                  <button
                    onClick={handleScrollDown}
                    className="w-full sm:w-auto bg-[#8D5A34] hover:bg-[#724522] active:scale-95 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-lg shadow-xl hover:shadow-[#8D5A34]/25 transition-all duration-300 cursor-pointer"
                  >
                    Explore Our Tours
                  </button>

                  {/* WhatsApp Callout Action */}
                  <a
                    href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20visited%2520your%20website%20and%20want%20to%20plan%20a%20tour%20to%20Tanzania."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-transparent hover:bg-white/10 active:scale-95 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-lg border-2 border-white/40 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </motion.div>

              </div>

              {/* Animated Slide-down Anchor indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
                <button
                  onClick={handleScrollDown}
                  className="text-[#EFECE3]/70 hover:text-white transition-colors p-2.5 animate-bounce hover:bg-white/5 rounded-full"
                  aria-label="Scroll down to content"
                >
                  <ArrowDown className="w-6 h-6 text-[#8D5A34]" />
                </button>
              </div>
            </section>

            <div id="main-content-start">
              {/* 2. ABOUT US SECTION - Team, Why Choose Us */}
              <AboutSection />

              {/* 3. OUR TOP TOURS SECTION */}
              <TopTours onOpenBooking={openBookingForm} />

              {/* 4. SIGNATURE QUOTE BLOCK */}
              <div className="py-12 bg-gradient-to-b from-[#EFECE3] to-[#eae5da] dark:from-[#121c17] dark:to-[#16221c] transition-colors duration-350">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#0E251D] to-[#1B3B2F] dark:from-[#1a2b23] dark:to-[#13201a] text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#8D5A34]/40"
                  >
                    <span className="font-serif text-3xl sm:text-5xl text-[#8D5A34] leading-none block mb-4">“</span>
                    <h4 className="font-serif text-xl sm:text-2xl md:text-3xl italic font-bold max-w-4xl mx-auto leading-tight mb-6 text-white text-balance">
                      “We don’t just offer tours — we create lifetime experiences.”
                    </h4>
                    <div className="w-20 h-1 bg-[#8D5A34] mx-auto mb-4" />
                    <p className="text-[#EFECE3]/70 font-mono uppercase text-xs tracking-[0.25em]">
                      Chaka Safaris & Hiking Team • Arusha, Tanzania
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* 5. GALLERY SECTION */}
              <GallerySection onOpenBooking={openBookingForm} />

              {/* 6. HOW TO BOOK SECTION */}
              <section id="how-to-book" className="py-20 bg-gradient-to-b from-[#eae5da] to-[#EFECE3] dark:from-[#16221c] dark:to-[#121c17] text-[#2B2B2B] dark:text-[#EFECE3] transition-colors duration-350">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-[#9B6338] dark:text-[#8D5A34] uppercase inline-flex items-center gap-2 mb-3 font-mono">
                      <Map className="w-4 h-4 text-[#9B6338] dark:text-[#8D5A34]" /> Smooth Process
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E251D] dark:text-[#F5F1E8] mb-4">
                      How to Book
                    </h2>
                    <p className="text-base sm:text-lg text-[#2B2B2B]/75 dark:text-stone-300">
                      Booking your trip with us is simple:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* Visual progress line for desktop */}
                    <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-[#0E251D]/10 dark:bg-white/10 -z-0" />

                    {/* Step 1 */}
                    <div className="bg-white/60 dark:bg-[#1a2b23] backdrop-blur-xs rounded-xl p-6 border border-[#0E251D]/5 dark:border-white/10 shadow-sm text-center relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#0E251D]/5 dark:bg-[#0E251D] text-[#8D5A34] flex items-center justify-center relative mb-4 border border-[#8D5A34]/20 shadow-xs">
                        <Compass className="w-7 h-7 stroke-[1.8]" />
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0E251D] dark:bg-[#8D5A34] text-white dark:text-[#0E251D] text-xs font-mono font-bold flex items-center justify-center">1</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#0E251D] dark:text-[#EFECE3] text-base mb-2">Choose your favorite tour</h3>
                      <p className="text-xs text-[#2B2B2B]/75 dark:text-stone-300">Pick from our curated waterfalls, wild safaris, local hikes or customize one!</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white/60 dark:bg-[#1a2b23] backdrop-blur-xs rounded-xl p-6 border border-[#0E251D]/5 dark:border-white/10 shadow-sm text-center relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#0E251D]/5 dark:bg-[#0E251D] text-[#8D5A34] flex items-center justify-center relative mb-4 border border-[#8D5A34]/20 shadow-xs">
                        <MessageSquare className="w-7 h-7 stroke-[1.8]" />
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0E251D] dark:bg-[#8D5A34] text-white dark:text-[#0E251D] text-xs font-mono font-bold flex items-center justify-center">2</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#0E251D] dark:text-[#EFECE3] text-base mb-2">Contact us via WhatsApp or Email</h3>
                      <p className="text-xs text-[#2B2B2B]/75 dark:text-stone-300">Send us a direct message with your group details and preferred tour dates.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white/60 dark:bg-[#1a2b23] backdrop-blur-xs rounded-xl p-6 border border-[#0E251D]/5 dark:border-white/10 shadow-sm text-center relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#0E251D]/5 dark:bg-[#0E251D] text-[#8D5A34] flex items-center justify-center relative mb-4 border border-[#8D5A34]/20 shadow-xs">
                        <Calendar className="w-7 h-7 stroke-[1.8]" />
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0E251D] dark:bg-[#8D5A34] text-white dark:text-[#0E251D] text-xs font-mono font-bold flex items-center justify-center">3</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#0E251D] dark:text-[#EFECE3] text-base mb-2">Confirm your booking</h3>
                      <p className="text-xs text-[#2B2B2B]/75 dark:text-stone-300">We will finalize all travel plans, equipment, transfers and lock in dates.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white/60 dark:bg-[#1a2b23] backdrop-blur-xs rounded-xl p-6 border border-[#0E251D]/5 dark:border-white/10 shadow-sm text-center relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#9B6338]/10 dark:bg-[#9B6338] text-[#9B6338] dark:text-[#EFECE3] flex items-center justify-center relative mb-4 border border-[#9B6338]/30 shadow-xs">
                        <Smile className="w-7 h-7 stroke-[1.8]" />
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#9B6338] text-white text-xs font-mono font-bold flex items-center justify-center">4</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#0E251D] dark:text-[#EFECE3] text-base mb-2">Enjoy your adventure!</h3>
                      <p className="text-xs text-[#2B2B2B]/75 dark:text-stone-300">Pack your bags and meet our friendly professional local guides in Arusha.</p>
                    </div>
                  </div>

                  {/* Direct Action */}
                  <div className="mt-12 text-center">
                    <a
                      href="https://wa.me/255714998804?text=Hi%20Chaka%20Safaris%20and%20Hiking!%20I%20want%20to%20book%20a%20tour%20with%20you."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-lg shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5 fill-current" />
                      <span>👉 Book Now via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* 7. TESTIMONIALS SECTION */}
              <TestimonialsSection />
            </div>
          </>
        );
      case 'about':
        return (
          <div className="pt-24 min-h-[60vh]">
            <AboutSection />
          </div>
        );
      case 'kilimanjaro':
        return (
          <div className="pt-24 min-h-[60vh]">
            <MountainSection onOpenBooking={openBookingForm} />
          </div>
        );
      case 'safaris':
        return (
          <div className="pt-24 min-h-[60vh]">
            <MountainPageSection onOpenBooking={openBookingForm} />
          </div>
        );
      case 'day-trips':
        return (
          <div className="pt-24 min-h-[60vh]">
            <DayTripsSection onOpenBooking={openBookingForm} />
          </div>
        );
      case 'combined':
        return (
          <div className="pt-24 min-h-[60vh]">
            <CombinedSection onOpenBooking={openBookingForm} />
          </div>
        );
      case 'gallery':
        return (
          <div className="pt-24 min-h-[60vh]">
            <GallerySection onOpenBooking={openBookingForm} />
          </div>
        );
      case 'testimonials':
        return (
          <div className="pt-24 min-h-[60vh]">
            <TestimonialsSection />
          </div>
        );
      case 'faq':
        return (
          <div className="pt-24 min-h-[60vh]">
            <FAQSection />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24 min-h-[60vh]">
            <ContactSection onOpenBooking={openBookingForm} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#EFECE3] dark:bg-[#121c17] text-[#2B2B2B] dark:text-[#EFECE3] min-h-screen font-sans selection:bg-[#8D5A34] selection:text-white overflow-x-hidden transition-colors duration-350">
      
      {/* Sticky header navbar */}
      <Navbar
        onOpenBooking={openBookingForm}
        currentView={currentView}
        onChangeView={setCurrentView}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Dynamic Main Body Content */}
      <main>
        {renderActiveContent()}
      </main>

      {/* 11. PRIMARY FOOTER */}
      <Footer onOpenBooking={() => openBookingForm('custom', 'Custom Holiday Planner')} />


      {/* PERSISTENT FLOATING WHATSAPP BUTTON (Lower Right corner) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20would%20like%20to%20receive%20brochures%2520on%20safaris%20and%20hiking%20in%20Tanzania."
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl relative flex items-center justify-center group transform hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Live WhatsApp chat in Arusha"
        >
          {/* Underlay radar ping indicator */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
          
          <MessageSquare className="w-7 h-7 fill-current" />
          
          {/* Help pop-up hover flag */}
          <span className="absolute right-14 bg-[#0E251D] text-[#EFECE3] text-[10px] font-mono tracking-wider uppercase font-semibold py-1 px-3 rounded-md shadow-lg border border-[#8D5A34]/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Speak Live in Arusha 💬
          </span>
        </a>
      </div>


    </div>
  );
}
