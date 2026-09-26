import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Phone, Calendar } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenReservation: () => void;
}

export const MobileStickyBar: React.FC<Props> = ({ lang, onOpenReservation }) => {
  const t = translations[lang];

  return (
    <div
      aria-label="Mobile quick actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#120B08]/95 backdrop-blur-md border-t border-[#3D281C] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl shadow-black h-[54px]"
    >
      {/* Call button */}
      <a
        href="tel:0925412733"
        className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg bg-[#22160F] border border-[#3D281C] text-[#EDD28E] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
        <span>092 541 2733</span>
      </a>

      {/* Reservation CTA */}
      <button
        onClick={onOpenReservation}
        className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg bg-[#C59B27] text-[#100A07] text-xs font-semibold uppercase tracking-wider hover:bg-[#EDD28E] transition-colors active:scale-95 shadow-md shadow-[#C59B27]/20"
      >
        <Calendar className="w-3.5 h-3.5 text-[#100A07]" />
        <span>{t.nav.reserveBtn}</span>
      </button>
    </div>
  );
};
