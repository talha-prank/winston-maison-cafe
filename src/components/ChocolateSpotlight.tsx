import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import pourImg from '../assets/images/chocolate_signature_pour_1790398363205.jpg';
import { Flame, Droplet, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
  onExploreChocolate: () => void;
}

export const ChocolateSpotlight: React.FC<Props> = ({ lang, onExploreChocolate }) => {
  const isEn = lang === 'en';

  return (
    <section 
      id="chocolate-spotlight" 
      aria-label="Artisanal Chocolate Spotlight"
      className="py-24 bg-[#140D09] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'The Art of Molten Chocolate' : 'ศิลปะแห่งช็อกโกแลตเข้มข้น'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal leading-tight mb-6 text-balance">
              {isEn 
                ? 'Handcrafted with Pure Cacao, Tempered to Perfection' 
                : 'คัดสรรโกโก้แท้บริสุทธิ์ ผ่านกระบวนการเทมเพอริ่งอย่างพิถีพิถัน'}
            </h2>

            <p className="text-base text-[#DEC5A7]/90 font-light leading-relaxed mb-8">
              {isEn
                ? 'At Winston Maison, chocolate is approached with culinary reverence. We melt, infuse, and balance single-origin cacao to create luscious drinking chocolates, silky ganaches, and crisp hand-painted bonbons that delight the senses.'
                : 'ที่ Winston Maison เราให้ความสำคัญกับช็อกโกแลตดั่งผลงานศิลปะ เราหลอม ละลาย และปรับสมดุลรสชาติของโกโก้พันธุ์พิเศษ เพื่อรังสรรค์ช็อกโกแลตร้อนเนื้อนุ่ม กานาชละมุนลิ้น และบงบงเคลือบเงางามที่พร้อมสร้างความสุขในทุกคำ'}
            </p>

            {/* Chocolate Pillars */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C120C] border border-[#2C1D14]">
                <Droplet className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#FAF7F2]">
                    {isEn ? 'Signature Drinking Chocolate' : 'ช็อกโกแลตร้อนเข้มข้นสูตรเฉพาะ'}
                  </h4>
                  <p className="text-xs text-[#DEC5A7]/80 mt-0.5">
                    {isEn 
                      ? 'Thick, velvety, and deeply aromatic—served warm for mindful sipping.' 
                      : 'เนื้อสัมผัสเข้มข้น นุ่มละมุน และหอมกรุ่น เสิร์ฟอุ่นเพื่อการดื่มด่ำอย่างแท้จริง'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C120C] border border-[#2C1D14]">
                <Flame className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#FAF7F2]">
                    {isEn ? 'Single-Origin Cacao Profiles' : 'รสชาติโกโก้แท้จากแหล่งปลูกคัดสรร'}
                  </h4>
                  <p className="text-xs text-[#DEC5A7]/80 mt-0.5">
                    {isEn 
                      ? 'Tasting notes ranging from wild red berries to toasted hazelnuts and earth.' 
                      : 'เอกลักษณ์กลิ่นหอมและรสชาติตั้งแต่โทนเบอร์รี่สดชื่นไปจนถึงถั่วอบและคาราเมล'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Menu Trigger */}
            <button
              onClick={onExploreChocolate}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-xs uppercase tracking-wider hover:bg-[#EDD28E] transition-all cursor-pointer shadow-md shadow-[#C59B27]/10"
            >
              <span>{isEn ? 'View Chocolate Creations' : 'ดูเมนูช็อกโกแลตทั้งหมด'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#3D281C] shadow-2xl shadow-black/50 group">
              <img
                src={pourImg}
                alt="Silky molten rich dark chocolate pouring smoothly into a ceramic mug"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100A07]/80 via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#120B08]/90 backdrop-blur-md border border-[#2C1D14] flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C59B27] font-medium">
                    {isEn ? 'Signature Hot Chocolate' : 'ช็อกโกแลตร้อนซิกเนเจอร์'}
                  </p>
                  <p className="text-sm font-serif text-[#FAF7F2]">
                    {isEn ? 'Velvet Molten Dark Pour' : 'สัมผัสดาร์กช็อกโกแลตละลายอุ่น'}
                  </p>
                </div>
                <span className="text-xs text-[#DEC5A7]/70 font-mono italic">
                  74% Cacao
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
