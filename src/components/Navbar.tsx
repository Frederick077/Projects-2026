import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// Custom designed vector brand-identical logo matching the user's official uploaded Chaka Safaris identity
const BrandLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mountains silhouette in logo warm earthy brown #8D5A34 */}
    <path d="M42 68 L53 52 L62 64 L72 49 L84 68 H42 Z" fill="#8D5A34" />
    <path d="M53 52 L59 66 M72 49 L79 66" stroke="#0E251D" strokeWidth="1.2" opacity="0.32" />

    {/* Elegant Acacia Tree in logo forest green #0E251D */}
    <path d="M68 64 V44" stroke="#0E251D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M68 53 C64 50, 60 50, 58 51" stroke="#0E251D" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M68 50 C72 47, 76 48, 78 49" stroke="#0E251D" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M68 46 C65 42, 62 43, 60 44" stroke="#0E251D" strokeWidth="2" strokeLinecap="round" />

    {/* Acacia flat-top canopy leaf blocks */}
    <rect x="54" y="49" width="9" height="2" rx="1" fill="#0E251D" />
    <rect x="74" y="47" width="9" height="2" rx="1" fill="#0E251D" />
    <rect x="57" y="42" width="11" height="2.2" rx="1.1" fill="#0E251D" />
    <rect x="68" y="41" width="12" height="2.2" rx="1.1" fill="#0E251D" />
    <rect x="62" y="37" width="14" height="2.5" rx="1.2" fill="#0E251D" />

    {/* Crescent Moon matching the logo logo above the tree */}
    <path d="M66 26 C68.5 26, 70 24.5, 70.5 23 C68.8 24.2, 67.2 24, 66.5 22.8 C65.8 21.6, 66.5 19.8, 68 19.5 C65.8 19.5, 64 21.5, 64 23.5 C64 25.5, 65 26, 66 26 Z" fill="#0E251D" />

    {/* Majestic Standing Proud Lion in logo forest green #0E251D */}
    <path d="M16 57 C15 54, 14.5 48, 17 44 C19 41, 19.5 37, 18 35 C16.5 33, 14 34, 12 30 C11 28.5, 12 26.5, 14 28 C15.5 29, 17.5 30.5, 19 29 C20.5 27.5, 19.5 24, 21 21 C22.5 18, 25.5 17, 27 19 C28.5 21, 28 23.5, 29.5 25 C31 26.5, 34 26, 36 28 C37.8 29.6, 38 31.8, 39 34 C39.8 35.8, 41.5 36.5, 43 36 C44.5 35.5, 45 36.5, 44 38.5 C43 40.5, 41 40, 40 41.5 C39 43, 39.5 45.5, 38 47.5 C36.5 49.5, 34 50, 34 51.5 C34 53, 35.2 53.5, 35 55 C34.8 56.5, 31 56, 30.5 58.5 C30 61, 29.2 63, 29.5 68 H26.5 L26 62 C25.8 60, 24 59.8, 24 61.5 L24.2 68 H21.2 L20.5 59 C20.2 55, 18.2 54.5, 18 57.5 L17.5 68 H14.5 L15 59 C15 58, 15.5 58, 16 57 Z" fill="#0E251D" />
    
    {/* Underline/Base from the logo (#8D5A34) */}
    <path d="M12 68 H88" stroke="#8D5A34" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

interface NavbarProps {
  onOpenBooking: (packageType?: string, packageName?: string) => void;
  currentView: string;
  onChangeView: (view: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ onOpenBooking, currentView, onChangeView, darkMode, onToggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    { label: t('nav.home'), view: 'home' },
    { label: t('nav.about'), view: 'about' },
    { label: t('nav.kilimanjaro'), view: 'kilimanjaro' },
    { label: t('nav.safaris'), view: 'safaris' },
    { label: t('nav.contact'), view: 'contact' },
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
            ? 'bg-[#0E251D] shadow-md border-b border-[#8D5A34]/30 py-3'
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
            <div className="bg-[#EFECE3] dark:bg-stone-900 p-1 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 duration-350 shadow-sm">
              <BrandLogo className="w-10 h-10" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-white tracking-wider leading-none">
                CHAKA
              </span>
              <span className="block text-[9px] text-[#8D5A34] tracking-[0.25em] font-mono leading-none mt-1 font-bold">
                SAFARIS & HIKING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-4 xl:gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.view}`}
                  onClick={(e) => handleNavClick(e, item.view)}
                  className={`text-sm font-medium transition-all hover:translate-y-[-1px] duration-200 uppercase tracking-widest text-[11px] ${
                    currentView === item.view
                      ? 'text-[#8D5A34] font-bold border-b-2 border-[#8D5A34] pb-1'
                      : 'text-[#EFECE3]/90 hover:text-[#8D5A34]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Dark Mode Switch Button */}
            <div className="flex items-center border-l border-white/20 pl-4">
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-xl text-stone-200 hover:text-[#8D5A34] hover:bg-white/15 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? (
                  <Sun className="w-4.5 h-4.5 text-[#8D5A34]" />
                ) : (
                  <Moon className="w-4.5 h-4.5" />
                )}
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 border-l border-white/20 pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-mono font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#8D5A34] text-white'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                EN
              </button>
              <span className="text-white/30 text-xs">|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-xs font-mono font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === 'fr'
                    ? 'bg-[#8D5A34] text-white'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Switcher on Mobile inline */}
            <div className="flex items-center bg-white/5 rounded-lg p-1 mr-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all duration-150 cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#8D5A34] text-white'
                    : 'text-stone-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all duration-150 cursor-pointer ${
                  language === 'fr'
                    ? 'bg-[#8D5A34] text-white'
                    : 'text-stone-300'
                }`}
              >
                FR
              </button>
            </div>

            {/* Dark Mode Toggle on Mobile */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-stone-200 hover:text-[#8D5A34] hover:bg-white/10 transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4.5 h-4.5 text-[#8D5A34]" />
              ) : (
                <Moon className="w-4.5 h-4.5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#8D5A34] p-1.5 focus:outline-none"
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
            className="fixed inset-x-0 top-[70px] z-45 bg-[#0E251D]/98 backdrop-blur-md shadow-2xl border-b border-[#8D5A34]/30 lg:hidden py-6 px-4 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-2 mb-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.view}`}
                  onClick={(e) => handleNavClick(e, item.view)}
                  className={`bg-white/5 active:bg-[#8D5A34]/20 text-center py-3 rounded-lg text-xs font-semibold border uppercase tracking-wider transition-all duration-200 ${
                    currentView === item.view
                      ? 'text-[#8D5A34] border-[#8D5A34]'
                      : 'text-[#EFECE3] hover:text-[#8D5A34] border-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
