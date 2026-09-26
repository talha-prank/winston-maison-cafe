import React, { useEffect, useCallback } from 'react';
import { GalleryItem, Language } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Props {
  item: GalleryItem;
  lang: Language;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export const GalleryLightbox: React.FC<Props> = ({
  item,
  lang,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalItems,
}) => {
  const isEn = lang === 'en';

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-[#0C0705]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Top Bar */}
      <div
        className="flex items-center justify-between text-[#DEC5A7] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-[#FAF7F2]">Winston Maison</span>
          <span className="text-xs text-[#C59B27] font-mono">
            {currentIndex + 1} / {totalItems}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#1F140E] hover:bg-[#2C1D14] text-[#FAF7F2] border border-[#3D281C] transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image with Navigation Arrows */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:-left-12 p-3 rounded-full bg-[#170E09]/80 hover:bg-[#241710] text-[#FAF7F2] border border-[#3D281C] transition-all cursor-pointer z-10"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="max-h-[75vh] max-w-full overflow-hidden rounded-xl border border-[#3D281C] shadow-2xl flex items-center justify-center bg-[#140D09]">
          <img
            src={item.image}
            alt={isEn ? item.titleEn : item.titleTh}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain select-none transition-transform duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:-right-12 p-3 rounded-full bg-[#170E09]/80 hover:bg-[#241710] text-[#FAF7F2] border border-[#3D281C] transition-all cursor-pointer z-10"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Footer Caption */}
      <div
        className="text-center max-w-xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-lg font-serif text-[#FAF7F2] mb-1">
          {isEn ? item.titleEn : item.titleTh}
        </h4>
        <p className="text-xs sm:text-sm text-[#DEC5A7]/85 font-light">
          {isEn ? item.captionEn : item.captionTh}
        </p>
      </div>
    </div>
  );
};
