import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import storyImg from '../assets/images/story_chocolate_interior_1790398346682.jpg';
import { Heart, Sparkles } from 'lucide-react';

interface Props {
  lang: Language;
}

export const Story: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" aria-label="Our Story" className="py-24 sm:py-32 bg-[#140D09] text-[#F6EEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3D281C] shadow-2xl shadow-black/40 group">
              <img
                src={storyImg}
                alt="Winston Maison Chocolate Café warm boutique ambiance in Bangkok"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100A07]/90 via-transparent to-transparent opacity-80" />
              
              {/* Overlay Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1A110B]/85 backdrop-blur-md border border-[#3D281C]/70">
                <p className="text-xs uppercase tracking-[0.16em] text-[#C59B27] font-semibold mb-1">
                  Bangkok Sanctuary
                </p>
                <p className="text-sm font-serif italic text-[#FAF7F2]">
                  Warm amber lights, velvety chocolate aromas, and intimate café corners.
                </p>
              </div>
            </div>

            {/* Decorative warm aura */}
            <div 
              aria-hidden="true" 
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none"
            />
          </div>

          {/* Right Column: Storytelling Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Eyebrow */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C59B27] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.story.eyebrow}</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal leading-tight mb-6 text-balance">
              {t.story.title}
            </h2>

            {/* Core Quote (Strict adherence to prompt) */}
            <blockquote className="border-l-2 border-[#C59B27] pl-4 sm:pl-6 my-2 text-lg sm:text-xl font-serif italic text-[#EDD28E] leading-relaxed">
              "{t.story.quote}"
            </blockquote>

            {/* Natural Story Narrative */}
            <div className="space-y-4 text-base text-[#DEC5A7]/90 leading-relaxed font-light mt-6">
              <p>{t.story.paragraph1}</p>
              <p>{t.story.paragraph2}</p>
            </div>

            {/* Unboxed Highlights (Zero-Pill discipline) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#2C1D14]">
              {t.story.highlights.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#C59B27]/90 font-medium mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-[#FAF7F2]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                onClick={() => handleScrollTo('chocolate-spotlight')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#22160F] hover:bg-[#2C1D14] text-[#EDD28E] border border-[#3D281C] hover:border-[#C59B27] transition-all text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                <span>{t.story.exploreButton}</span>
                <Heart className="w-3.5 h-3.5 text-[#C59B27]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
