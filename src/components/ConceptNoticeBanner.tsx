import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Info, X } from 'lucide-react';

interface Props {
  lang: Language;
}

export const ConceptNoticeBanner: React.FC<Props> = ({ lang }) => {
  const [dismissed, setDismissed] = useState(false);
  const t = translations[lang];

  if (dismissed) return null;

  return (
    <aside 
      aria-label="Concept Disclaimer" 
      className="bg-[#241710] border-b border-[#C59B27]/20 text-[#EBDCC9] text-xs py-2 px-4 relative z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-wide">
          <Info className="w-3.5 h-3.5 text-[#C59B27] shrink-0" aria-hidden="true" />
          <span className="font-medium text-[#EDD28E]">{t.badgeConcept}</span>
          <span className="hidden md:inline text-[#dec5a7]/80" aria-hidden="true">—</span>
          <span className="hidden md:inline text-[#EBDCC9]/90">{t.conceptNotice}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#EBDCC9]/70 hover:text-white p-1 rounded transition-colors shrink-0"
          aria-label="Dismiss disclaimer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
