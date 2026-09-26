import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Sparkles, Coffee, Cake, HeartHandshake } from 'lucide-react';

interface Props {
  lang: Language;
}

export const Experience: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C59B27]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#C59B27]" />;
      case 'Cake':
        return <Cake className="w-6 h-6 text-[#C59B27]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C59B27]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C59B27]" />;
    }
  };

  return (
    <section 
      aria-label="The Winston Maison Experience" 
      className="py-24 bg-[#100A07] border-y border-[#22160F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3">
            {t.experience.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4 text-balance">
            {t.experience.title}
          </h2>
          <p className="text-base text-[#DEC5A7]/85 font-light leading-relaxed text-balance">
            {t.experience.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.experience.features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-[#170E09] hover:bg-[#1D120C] border border-[#2C1D14] hover:border-[#C59B27]/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#241710] border border-[#3D281C] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#C59B27]/50 transition-all">
                  {getIcon(feature.iconName)}
                </div>

                {/* Index & Title */}
                <div className="text-xs text-[#C59B27]/70 font-mono mb-2">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-serif text-[#FAF7F2] mb-3 group-hover:text-[#EDD28E] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#DEC5A7]/80 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Quiet hairline footer indicator */}
              <div className="mt-8 pt-4 border-t border-[#2C1D14]/70 flex items-center justify-between text-[11px] text-[#DEC5A7]/60 tracking-wider uppercase font-medium">
                <span>Winston Craft</span>
                <span className="text-[#C59B27] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
