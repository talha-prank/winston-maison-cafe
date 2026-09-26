import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Phone, MapPin, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenReservation: () => void;
}

export const Footer: React.FC<Props> = ({ lang, onOpenReservation }) => {
  const t = translations[lang];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0704] text-[#DEC5A7] border-t border-[#22160F] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Brand & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#22160F]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl sm:text-3xl font-serif tracking-[0.1em] text-[#FAF7F2] uppercase block font-medium">
              Winston Maison
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-medium">
              {t.footer.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#DEC5A7]/80 font-light leading-relaxed max-w-sm">
              Discover artisanal chocolate, rich coffee, and peaceful sweet moments tucked away in Bangkok, Thailand.
            </p>
            
            <div className="pt-2 flex items-center gap-4 text-xs text-[#DEC5A7]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{t.footer.city}</span>
              </span>
              <span aria-hidden="true" className="text-[#3D281C]">·</span>
              <a
                href="tel:0925412733"
                className="flex items-center gap-1.5 hover:text-[#EDD28E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{t.footer.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDD28E] font-semibold mb-4">
              {t.footer.nav}
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs uppercase tracking-wider font-medium text-[#DEC5A7]/85">
              <button
                onClick={() => handleScrollTo('home')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => handleScrollTo('story')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.story}
              </button>
              <button
                onClick={() => handleScrollTo('menu')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.menu}
              </button>
              <button
                onClick={() => handleScrollTo('chocolate-spotlight')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.chocolate}
              </button>
              <button
                onClick={() => handleScrollTo('gallery')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => handleScrollTo('location')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.visit}
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="hover:text-[#EDD28E] transition-colors cursor-pointer"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#22160F] text-[#EDD28E] border border-[#3D281C] hover:border-[#C59B27] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                <span>{t.nav.reserveBtn}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Social and Hours */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDD28E] font-semibold mb-4">
              Connect & Visit
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="w-9 h-9 rounded-xl bg-[#170E09] border border-[#2C1D14] hover:border-[#C59B27] flex items-center justify-center text-[#DEC5A7] hover:text-[#EDD28E] transition-colors"
                aria-label="Instagram link placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/194uoTj5Q4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#170E09] border border-[#2C1D14] hover:border-[#C59B27] flex items-center justify-center text-[#DEC5A7] hover:text-[#EDD28E] transition-colors"
                aria-label="Facebook campaign ad post"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="tel:0925412733"
                className="w-9 h-9 rounded-xl bg-[#170E09] border border-[#2C1D14] hover:border-[#C59B27] flex items-center justify-center text-[#DEC5A7] hover:text-[#EDD28E] transition-colors"
                aria-label="Direct Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-xs text-[#DEC5A7]/70 pt-2">
              Phone: 092 541 2733
            </p>
            <p className="text-xs text-[#DEC5A7]/60">
              Bangkok, Thailand
            </p>
          </div>

        </div>

        {/* Mandatory Concept Disclaimer */}
        <div className="py-6 border-b border-[#22160F] text-center">
          <p className="text-xs sm:text-sm text-[#EDD28E]/90 font-serif italic max-w-2xl mx-auto">
            “{t.footer.disclaimer}”
          </p>
        </div>

        {/* Copyright and back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DEC5A7]/60">
          <p>© {new Date().getFullYear()} Winston Maison Chocolate Café. Concept Demo.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#EDD28E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
