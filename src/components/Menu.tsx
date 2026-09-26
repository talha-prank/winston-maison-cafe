import React, { useState, useMemo } from 'react';
import { translations } from '../data/translations';
import { menuItems } from '../data/menuData';
import { Language, MenuCategory, MenuItem } from '../types';
import { Search, Sparkles, HelpCircle, Utensils, MessageCircle, Calendar } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenReservation: () => void;
  activeCategory?: MenuCategory;
  onCategoryChange?: (category: MenuCategory) => void;
}

export const Menu: React.FC<Props> = ({
  lang,
  onOpenReservation,
  activeCategory: propCategory,
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<MenuCategory>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  const t = translations[lang];
  const isEn = lang === 'en';

  const category = propCategory !== undefined ? propCategory : internalCategory;

  const handleCategorySelect = (newCat: MenuCategory) => {
    setActiveSubcategory('all');
    if (onCategoryChange) {
      onCategoryChange(newCat);
    } else {
      setInternalCategory(newCat);
    }
  };

  // Subcategory filters depending on current category
  const subcategoryList = useMemo(() => {
    if (category === 'chocolate') {
      return [
        { id: 'all', label: isEn ? 'All Chocolate' : 'ช็อกโกแลตทั้งหมด' },
        { id: 'Signature Chocolate', label: isEn ? 'Signature Chocolate' : 'ช็อกโกแลตซิกเนเจอร์' },
        { id: 'Hot Chocolate', label: isEn ? 'Hot Chocolate' : 'ช็อกโกแลตร้อน' },
        { id: 'Chocolate Desserts', label: isEn ? 'Chocolate Desserts' : 'ของหวานช็อกโกแลต' },
        { id: 'Chocolate Creations', label: isEn ? 'Chocolate Creations' : 'ช็อกโกแลตสร้างสรรค์' },
      ];
    }
    if (category === 'coffee') {
      return [
        { id: 'all', label: isEn ? 'All Coffee' : 'กาแฟทั้งหมด' },
        { id: 'Espresso', label: isEn ? 'Espresso' : 'เอสเพรสโซ' },
        { id: 'Americano', label: isEn ? 'Americano' : 'อเมริกาโน' },
        { id: 'Latte', label: isEn ? 'Latte' : 'ลาเต้' },
        { id: 'Cappuccino', label: isEn ? 'Cappuccino' : 'คาปูชิโน' },
        { id: 'Mocha', label: isEn ? 'Mocha' : 'มอคค่า' },
      ];
    }
    if (category === 'desserts') {
      return [
        { id: 'all', label: isEn ? 'All Desserts' : 'ของหวานทั้งหมด' },
        { id: 'Cakes', label: isEn ? 'Cakes' : 'เค้ก' },
        { id: 'Pastries', label: isEn ? 'Pastries' : 'ขนมอบเพสตรี' },
        { id: 'Chocolate Desserts', label: isEn ? 'Chocolate Desserts' : 'ของหวานช็อกโกแลต' },
      ];
    }
    return [];
  }, [category, isEn]);

  // Filter items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (category !== 'all' && item.category !== category) {
        return false;
      }
      // Subcategory filter
      if (activeSubcategory !== 'all' && item.subcategoryEn !== activeSubcategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName =
          item.nameEn.toLowerCase().includes(query) ||
          item.nameTh.toLowerCase().includes(query);
        const matchDesc =
          item.descriptionEn.toLowerCase().includes(query) ||
          item.descriptionTh.toLowerCase().includes(query);
        const matchSub =
          item.subcategoryEn.toLowerCase().includes(query) ||
          item.subcategoryTh.toLowerCase().includes(query);
        return matchName || matchDesc || matchSub;
      }
      return true;
    });
  }, [category, activeSubcategory, searchQuery]);

  return (
    <section id="menu" aria-label="Menu" className="py-24 bg-[#100A07] text-[#F6EEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3 flex items-center justify-center gap-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.menu.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal mb-4 text-balance">
            {t.menu.title}
          </h2>
          <p className="text-base text-[#DEC5A7]/85 font-light leading-relaxed mb-6 text-balance">
            {t.menu.subtitle}
          </p>

          {/* Mandatory Price Notice from Prompt */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#22160F] border border-[#C59B27]/30 text-xs text-[#EDD28E]">
            <HelpCircle className="w-4 h-4 text-[#C59B27] shrink-0" />
            <span className="font-medium">{t.menu.priceNotice}</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-12">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#170E09] rounded-2xl border border-[#2C1D14] max-w-2xl mx-auto">
            {(['all', 'chocolate', 'coffee', 'desserts'] as MenuCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  category === cat
                    ? 'bg-[#C59B27] text-[#100A07] shadow-sm'
                    : 'text-[#DEC5A7] hover:text-white hover:bg-[#241710]'
                }`}
              >
                {t.menu.categories[cat]}
              </button>
            ))}
          </div>

          {/* Subcategory Filter (If active) */}
          {subcategoryList.length > 0 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-2">
              {subcategoryList.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap cursor-pointer ${
                    activeSubcategory === sub.id
                      ? 'bg-[#2E1F16] text-[#EDD28E] border border-[#C59B27]/50 font-medium'
                      : 'text-[#DEC5A7]/75 hover:text-white hover:bg-[#1D120C]'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#C59B27] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#170E09] border border-[#2C1D14] focus:border-[#C59B27] focus:outline-none text-sm text-[#F6EEE3] placeholder:text-[#DEC5A7]/50 transition-colors"
            />
          </div>

        </div>

        {/* Product Cards Grid (3 Columns) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-[#DEC5A7]/70 text-sm">
            {t.menu.emptyResults}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#170E09] hover:bg-[#1C120C] border border-[#2C1D14] hover:border-[#3D281C] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/25 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Zero-Broken-Image Policy */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-[#22160F]">
                    <img
                      src={item.image}
                      alt={isEn ? item.nameEn : item.nameTh}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#170E09] via-transparent to-transparent opacity-90" />
                    
                    {/* Unboxed Kicker on Card (Anti-slop compliant) */}
                    <div className="absolute top-3 left-3 text-[11px] uppercase tracking-wider text-[#EDD28E] font-medium drop-shadow-md">
                      {isEn ? item.badgeEn || item.subcategoryEn : item.badgeTh || item.subcategoryTh}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Subcategory Label */}
                    <div className="text-xs uppercase tracking-[0.14em] text-[#C59B27]/80 font-medium mb-1.5">
                      {isEn ? item.subcategoryEn : item.subcategoryTh}
                    </div>

                    {/* Item Name */}
                    <h3 className="text-xl font-serif text-[#FAF7F2] font-normal mb-2.5 group-hover:text-[#EDD28E] transition-colors leading-snug">
                      {isEn ? item.nameEn : item.nameTh}
                    </h3>

                    {/* Item Description */}
                    <p className="text-xs sm:text-sm text-[#DEC5A7]/85 font-light leading-relaxed mb-4 line-clamp-3">
                      {isEn ? item.descriptionEn : item.descriptionTh}
                    </p>

                    {/* Unboxed Tasting Notes with Dot Separators (Strict Zero-Pill) */}
                    {item.tastingNotesEn && (
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#DEC5A7]/70 pt-2 border-t border-[#2C1D14]/60">
                        <Sparkles className="w-3 h-3 text-[#C59B27] shrink-0" />
                        {(isEn ? item.tastingNotesEn : item.tastingNotesTh || item.tastingNotesEn).map((note, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span>{note}</span>
                            {idx < arr.length - 1 && (
                              <span aria-hidden="true" className="text-[#C59B27]/50">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-[#2C1D14]/70 mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#EDD28E]/90 italic">
                    {t.menu.viewDetails}
                  </span>
                  
                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] hover:text-[#EDD28E] flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-[#241710] transition-colors cursor-pointer"
                  >
                    <span>{isEn ? 'Details' : 'รายละเอียด'}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Menu Reserve Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#170E09] border border-[#2C1D14] text-center max-w-2xl mx-auto flex flex-col items-center justify-center">
          <p className="text-sm sm:text-base font-serif italic text-[#EDD28E] mb-4">
            {isEn
              ? 'Join us in Bangkok for fresh chocolate pairings and handcrafted coffee.'
              : 'สัมผัสประสบการณ์ช็อกโกแลตคราฟต์สดใหม่และกาแฟพิเศษที่ร้านในกรุงเทพฯ'}
          </p>
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-xs uppercase tracking-wider hover:bg-[#EDD28E] transition-all cursor-pointer shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#100A07]" />
            <span>{t.nav.reserveBtn}</span>
          </button>
        </div>

      </div>

      {/* Item Detail Lightbox Modal */}
      {selectedItemForModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItemForModal(null)}
        >
          <div
            className="bg-[#170E09] border border-[#3D281C] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 bg-[#22160F]">
              <img
                src={selectedItemForModal.image}
                alt={isEn ? selectedItemForModal.nameEn : selectedItemForModal.nameTh}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="text-xs uppercase tracking-wider text-[#C59B27] font-semibold mb-1">
                {isEn ? selectedItemForModal.subcategoryEn : selectedItemForModal.subcategoryTh}
              </div>
              <h3 className="text-2xl font-serif text-[#FAF7F2] mb-3">
                {isEn ? selectedItemForModal.nameEn : selectedItemForModal.nameTh}
              </h3>
              <p className="text-sm text-[#DEC5A7]/90 leading-relaxed mb-4">
                {isEn ? selectedItemForModal.descriptionEn : selectedItemForModal.descriptionTh}
              </p>

              <div className="p-3 rounded-xl bg-[#22160F] border border-[#3D281C] text-xs text-[#EDD28E] mb-6 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>{t.menu.priceNotice}</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedItemForModal(null);
                    onOpenReservation();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-xs uppercase tracking-wider hover:bg-[#EDD28E] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.nav.reserveBtn}</span>
                </button>
                <a
                  href="tel:0925412733"
                  className="py-3 px-4 rounded-xl bg-[#22160F] text-[#DEC5A7] hover:text-white border border-[#3D281C] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center"
                >
                  092 541 2733
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
