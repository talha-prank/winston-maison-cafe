import React, { useState, useMemo } from 'react';
import { translations } from '../data/translations';
import { galleryItems } from '../data/galleryData';
import { GalleryItem, Language } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { Camera, Maximize2 } from 'lucide-react';

interface Props {
  lang: Language;
}

export const Gallery: React.FC<Props> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const t = translations[lang];
  const isEn = lang === 'en';

  const categories = [
    { id: 'all', label: t.gallery.categories.all },
    { id: 'chocolate', label: t.gallery.categories.chocolate },
    { id: 'coffee', label: t.gallery.categories.coffee },
    { id: 'desserts', label: t.gallery.categories.desserts },
    { id: 'atmosphere', label: t.gallery.categories.atmosphere },
    { id: 'moments', label: t.gallery.categories.moments },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" aria-label="Gallery" className="py-24 bg-[#140D09] text-[#F6EEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3 flex items-center justify-center gap-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal mb-4 text-balance">
            {t.gallery.title}
          </h2>
          <p className="text-base text-[#DEC5A7]/85 font-light leading-relaxed text-balance">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#C59B27] text-[#100A07] shadow-sm'
                  : 'bg-[#1C120C] text-[#DEC5A7] hover:text-white hover:bg-[#251811] border border-[#2C1D14]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Staggered Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className={`group relative rounded-2xl overflow-hidden border border-[#2C1D14] hover:border-[#C59B27]/50 bg-[#170E09] cursor-pointer shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 ${
                index % 3 === 1 ? 'sm:row-span-2' : ''
              }`}
            >
              <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={isEn ? item.titleEn : item.titleTh}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Measured Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100A07]/90 via-[#100A07]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                
                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#100A07]/80 backdrop-blur-sm border border-[#3D281C] text-[#FAF7F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#EDD28E]" />
                </div>

                {/* Bottom Caption on Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[11px] uppercase tracking-wider text-[#C59B27] font-medium block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif text-[#FAF7F2] font-normal leading-snug">
                    {isEn ? item.titleEn : item.titleTh}
                  </h3>
                  <p className="text-xs text-[#DEC5A7]/80 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isEn ? item.captionEn : item.captionTh}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet footnote regarding visual placeholders */}
        <div className="mt-8 text-center text-xs text-[#DEC5A7]/60 tracking-wider">
          <span>{t.gallery.tapToExpand}</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>Bangkok, Thailand</span>
        </div>

      </div>

      {/* Lightbox Component */}
      {activeItem && (
        <GalleryLightbox
          item={activeItem}
          lang={lang}
          onClose={() => setActiveItemIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={activeItemIndex!}
          totalItems={filteredItems.length}
        />
      )}
    </section>
  );
};
