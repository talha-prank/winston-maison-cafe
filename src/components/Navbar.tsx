import React, { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Menu as MenuIcon, X, Calendar, Globe, Phone } from 'lucide-react';

interface Props {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<Props> = ({
  lang,
  onLanguageChange,
  onOpenReservation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.chocolate, href: '#chocolate-spotlight' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.visit, href: '#location' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#120B08]/95 backdrop-blur-md border-b border-[#3D281C] shadow-lg shadow-black/20 py-3.5'
            : 'bg-[#100A07]/80 backdrop-blur-sm border-b border-[#2C1D14]/80 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-2xl sm:text-3xl font-serif tracking-[0.08em] text-[#F6EEE3] hover:text-[#EDD28E] transition-colors whitespace-nowrap uppercase font-medium"
          >
            Winston Maison
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-xs tracking-[0.14em] uppercase text-[#DEC5A7] font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#EDD28E] transition-colors underline-offset-8 hover:underline decoration-[#C59B27]/60 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#22160F] p-0.5 rounded-lg border border-[#3D281C]">
              <button
                onClick={() => onLanguageChange('en')}
                aria-label="Switch to English"
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-[#C59B27] text-[#120B08] shadow-sm font-semibold'
                    : 'text-[#DEC5A7] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('th')}
                aria-label="เปลี่ยนเป็นภาษาไทย"
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  lang === 'th'
                    ? 'bg-[#C59B27] text-[#120B08] shadow-sm font-semibold'
                    : 'text-[#DEC5A7] hover:text-white'
                }`}
              >
                ไทย
              </button>
            </div>

            {/* Desktop Reserve Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#C59B27] text-[#100A07] hover:bg-[#EDD28E] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#100A07]" />
              <span>{t.nav.reserveBtn}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-[#F6EEE3] hover:text-[#EDD28E] hover:bg-[#22160F] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[65px] z-30 bg-[#100A07]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#2C1D14]"
        >
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-semibold border-b border-[#2C1D14] pb-2">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-lg font-serif tracking-wider text-[#F6EEE3] hover:text-[#EDD28E] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#2C1D14] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-sm uppercase tracking-wider hover:bg-[#EDD28E] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.reserveBtn}</span>
            </button>

            <a
              href="tel:0925412733"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#22160F] text-[#DEC5A7] hover:text-white border border-[#3D281C] text-sm"
            >
              <Phone className="w-4 h-4 text-[#C59B27]" />
              <span>092 541 2733</span>
            </a>

            <a
              href="https://www.facebook.com/share/194uoTj5Q4/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#1A110B] text-[#EDD28E] hover:text-white border border-[#3D281C] text-xs font-medium"
            >
              <span>{lang === 'en' ? 'View Facebook Ad & Updates' : 'ดูโฆษณาและข่าวสารบน Facebook'}</span>
              <span>→</span>
            </a>

            <div className="flex items-center justify-between text-xs text-[#DEC5A7]/70 pt-2">
              <span>Bangkok, Thailand</span>
              <span>Winston Maison</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
