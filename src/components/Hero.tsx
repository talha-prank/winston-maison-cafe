import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import heroImg from '../assets/images/hero_chocolate_latte_cafe_1790398329175.jpg';
import { ArrowDown, Compass, UtensilsCrossed } from 'lucide-react';

interface Props {
  lang: Language;
}

export const Hero: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#100A07]"
    >
      {/* Background Image with Layered Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Artisanal chocolate truffles, molten chocolate drink and specialty coffee at Winston Maison Bangkok"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[subtleZoom_20s_ease-out_infinite_alternate]"
          loading="eager"
        />
        {/* Measured Dark Chocolate Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100A07] via-[#100A07]/75 to-[#100A07]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#100A07_80%)] opacity-85" />
      </div>

      {/* Floating subtle ambient aroma glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none animate-pulse"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Unboxed Eyebrow */}
        <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EDD28E] font-medium mb-4 flex items-center gap-2">
          <span>Bangkok, Thailand</span>
          <span aria-hidden="true" className="text-[#C59B27]/60">·</span>
          <span>{t.hero.eyebrow}</span>
        </div>

        {/* Display Headline */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#FAF7F2] font-normal tracking-tight leading-[1.08] max-w-4xl mb-6 text-balance"
        >
          {t.hero.headline}
        </h1>

        {/* Refined Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#EBDCC9]/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          {t.hero.subheading}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-sm uppercase tracking-wider hover:bg-[#EDD28E] active:scale-[0.98] transition-all shadow-lg shadow-[#C59B27]/10 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#100A07]" />
            <span>{t.hero.exploreMenu}</span>
          </button>

          <button
            onClick={() => handleScrollTo('location')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1C120C]/80 hover:bg-[#2C1D14] text-[#F6EEE3] border border-[#3D281C] hover:border-[#C59B27]/50 font-medium text-sm uppercase tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-4 h-4 text-[#C59B27]" />
            <span>{t.hero.visitMaison}</span>
          </button>
        </div>

        {/* Ambient Badge */}
        <div className="mt-14 pt-8 border-t border-[#3D281C]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs tracking-wider text-[#DEC5A7]/75 uppercase">
          <span>Handcrafted Single-Origin</span>
          <span aria-hidden="true" className="text-[#C59B27]/40">·</span>
          <span>Boutique Roasts</span>
          <span aria-hidden="true" className="text-[#C59B27]/40">·</span>
          <span>Artisanal Desserts</span>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={() => handleScrollTo('story')}
        aria-label="Scroll to Our Story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-xs text-[#DEC5A7]/70 hover:text-[#EDD28E] transition-colors cursor-pointer group"
      >
        <span className="text-[11px] tracking-widest uppercase">{t.hero.scrollPrompt}</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C59B27]" />
      </button>
    </section>
  );
};
