/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (packageType?: string, packageName?: string) => void;
  currentView: string;
  onChangeView: (view: string) => void;
}

export default function Navbar({ onOpenBooking, currentView, onChangeView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'CHAKA SAFARIS & HIKING', view: 'kilimanjaro' },
    { label: 'MOUNTAIN PAGE', view: 'safaris' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Testimonials', view: 'testimonials' },
    { label: 'FAQ', view: 'faq' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onChangeView(view);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1F4D3A] shadow-md border-b border-[#C9A227]/30 py-3'
            : 'bg-black/45 backdrop-blur-xs border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-brand"
          >
            <div className="bg-[#C9A227] p-2 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
              <Compass className="w-6 h-6 text-[#1F4D3A] stroke-[2.5]" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-white tracking-wider leading-none">
                CHAKA
              </span>
              <span className="block text-[9px] text-[#C9A227] tracking-[0.25em] font-mono leading-none mt-1">
                SAFARIS & HIKING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.view}`}
                onClick={(e) => handleNavClick(e, item.view)}
                className={`text-sm font-medium transition-all hover:translate-y-[-1px] duration-200 uppercase tracking-widest text-[11px] ${
                  currentView === item.view
                    ? 'text-[#C9A227] font-bold border-b-2 border-[#C9A227] pb-1'
                    : 'text-[#F5F1E8]/90 hover:text-[#C9A227]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Button Group */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20booking%20a%2520tour%2520with%2520you."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#F5F1E8] hover:text-[#C9A227] transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4 text-[#C9A227]" />
              <span className="font-mono text-xs">+255 714 998 804</span>
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#C9A227] p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-45 bg-[#1F4D3A]/98 backdrop-blur-md shadow-2xl border-b border-[#C9A227]/30 lg:hidden py-6 px-4 flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-3 mb-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.view}`}
                  onClick={(e) => handleNavClick(e, item.view)}
                  className={`bg-white/5 active:bg-[#C9A227]/20 text-center py-3 rounded-lg text-xs font-semibold border uppercase tracking-wider transition-all duration-200 ${
                    currentView === item.view
                      ? 'text-[#C9A227] border-[#C9A227]'
                      : 'text-[#F5F1E8] hover:text-[#C9A227] border-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="h-[1px] bg-white/15 my-1" />

            <div className="flex items-center justify-center px-2 pt-2">
              <a
                href="https://wa.me/255714998804?text=Hello%20Chaka%20Safaris%20and%20Hiking!%20I%20am%20interested%20in%20booking%20a%20tour."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#F5F1E8] py-1"
              >
                <PhoneCall className="w-4 h-4 text-[#C9A227]" />
                <span className="font-mono text-xs">+255 714 998 804</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
