import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  ExternalLink, 
  Share2, 
  Clock, 
  Info,
  Check
} from 'lucide-react';

interface Props {
  lang: Language;
}

export const LocationContact: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [socialModalInfo, setSocialModalInfo] = useState<string | null>(null);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0925412733');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Winston+Maison+One+Bangkok+Parade';

  const handleSocialClick = (platform: string) => {
    setSocialModalInfo(
      isEn
        ? `Official ${platform} account link placeholder. Verified channel will be connected upon store confirmation.`
        : `ลิงก์ ${platform} ทางการอยู่ระหว่างการเชื่อมโยงระบบ จะพร้อมใช้งานหลังการยืนยันจากทางร้าน`
    );
  };

  return (
    <section id="location" aria-label="Location & Contact" className="py-24 bg-[#140D09] text-[#F6EEE3] border-t border-[#22160F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.location.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal mb-4 text-balance">
            {t.location.title}
          </h2>
          <p className="text-base text-[#DEC5A7]/85 font-light leading-relaxed text-balance">
            {t.location.subtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Business Card */}
            <div className="bg-[#170E09] border border-[#2C1D14] rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/20">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C59B27] font-semibold block mb-2">
                Bangkok Destination
              </span>
              <h3 className="text-2xl font-serif text-[#FAF7F2] mb-1">
                Winston Maison Chocolate Café
              </h3>
              <p className="text-xs text-[#DEC5A7]/70 mb-6">
                Chocolate Café · Dessert Café · Specialty Coffee
              </p>

              {/* Address detail with verified One Bangkok location */}
              <div className="flex items-start gap-3 mb-6 p-3.5 rounded-xl bg-[#1E130D] border border-[#3D281C]/60">
                <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#DEC5A7] font-medium">
                    {t.location.addressTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FAF7F2] mt-0.5 font-medium">
                    One Bangkok, Parade Zone, 3rd Floor
                  </p>
                  <p className="text-[11px] text-[#DEC5A7]/80 mt-0.5">
                    Lumpini, Pathum Wan, Bangkok, Thailand
                  </p>
                  <p className="text-[11px] text-[#EDD28E] mt-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C59B27]" />
                    <span>{t.location.hoursNotice}</span>
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1E130D] border border-[#3D281C]/60">
                <Phone className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#DEC5A7] font-medium">
                    {t.location.phoneTitle}
                  </h4>
                  <a
                    href="tel:0925412733"
                    className="text-lg font-serif text-[#EDD28E] hover:text-white transition-colors block mt-0.5 tracking-wide"
                  >
                    092 541 2733
                  </a>
                  <p className="text-[11px] text-[#DEC5A7]/70 mt-0.5">
                    {isEn ? 'Direct line for reservations and table inquiries' : 'เบอร์โทรตรงสำหรับสอบถามข้อมูลและโต๊ะว่าง'}
                  </p>
                </div>
                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="px-2.5 py-1 rounded bg-[#241710] hover:bg-[#2C1D14] text-xs text-[#DEC5A7] border border-[#3D281C] transition-colors self-center"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : (isEn ? 'Copy' : 'คัดลอก')}
                </button>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div id="contact" className="bg-[#170E09] border border-[#2C1D14] rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/20 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-semibold">
                {t.contact.title}
              </h4>
              <p className="text-xs text-[#DEC5A7]/80">
                {t.contact.callPrompt}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* Call Now */}
                <a
                  href="tel:0925412733"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#C59B27] hover:bg-[#EDD28E] text-[#100A07] font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#100A07]" />
                  <span>{t.location.actions.callNow}</span>
                </a>

                {/* Google Maps */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#22160F] hover:bg-[#2C1D14] text-[#FAF7F2] border border-[#3D281C] hover:border-[#C59B27] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Google Maps</span>
                </a>
              </div>

              {/* Direct Facebook Campaign Banner */}
              <a
                href="https://www.facebook.com/share/194uoTj5Q4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#1C130D] hover:bg-[#251912] border border-[#3D281C] hover:border-[#C59B27]/60 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2B1B12] border border-[#C59B27]/40 flex items-center justify-center text-[#EDD28E]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold text-[#FAF7F2] block group-hover:text-[#EDD28E] transition-colors">
                      {isEn ? 'View Facebook Ad & Campaign' : 'ดูโฆษณาและโพสต์บน Facebook'}
                    </span>
                    <span className="text-[11px] text-[#DEC5A7]/70">
                      facebook.com/share/194uoTj5Q4
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C59B27] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Social Channels with direct Facebook campaign link */}
              <div className="pt-3 border-t border-[#2C1D14] flex items-center justify-between text-xs">
                <span className="text-[#DEC5A7]/60">Social Channels:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/194uoTj5Q4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EDD28E] hover:text-white transition-colors cursor-pointer text-xs underline underline-offset-4 decoration-[#C59B27]/40 flex items-center gap-1 font-medium"
                  >
                    <span>Facebook Campaign</span>
                    <ExternalLink className="w-3 h-3 text-[#C59B27]" />
                  </a>
                  <span aria-hidden="true" className="text-[#3D281C]">·</span>
                  <button
                    onClick={() => handleSocialClick('Instagram')}
                    className="text-[#DEC5A7]/75 hover:text-white transition-colors cursor-pointer text-xs underline underline-offset-4 decoration-[#C59B27]/40"
                  >
                    Instagram
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bangkok Map Concept Visualizer */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-[#170E09] border border-[#2C1D14] rounded-2xl overflow-hidden shadow-xl shadow-black/30 flex flex-col relative min-h-[380px] sm:min-h-[460px]">
              
              {/* Map Header */}
              <div className="p-4 bg-[#1E130D] border-b border-[#2C1D14] flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-[#C59B27]" />
                  <span className="font-medium text-[#FAF7F2]">Bangkok, Thailand</span>
                  <span className="text-[#DEC5A7]/60">· Winston Maison Concept Pin</span>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#C59B27] text-[#100A07] hover:bg-[#EDD28E] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3 h-3 text-[#100A07]" />
                  <span>{t.location.actions.getDirections}</span>
                </a>
              </div>

              {/* Styled Interactive Dark Map Canvas Placeholder */}
              <div className="relative flex-1 bg-[#120B08] overflow-hidden flex items-center justify-center p-6">
                
                {/* Visual Map Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, #C59B27 1px, transparent 1px),
                      linear-gradient(to right, #3D281C 1px, transparent 1px),
                      linear-gradient(to bottom, #3D281C 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px, 64px 64px, 64px 64px'
                  }}
                />

                {/* Simulated Bangkok Chao Phraya River Curve line */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 300">
                  <path d="M 0,220 C 120,240 180,140 220,100 C 260,60 330,80 400,20" fill="none" stroke="#EDD28E" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 50,0 C 90,80 150,120 200,160 C 250,200 320,220 400,280" fill="none" stroke="#543827" strokeWidth="3" />
                </svg>

                {/* Center Pulse Pin */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 rounded-full bg-[#C59B27]/20 animate-ping absolute inset-0" />
                    <div className="w-14 h-14 rounded-full bg-[#1F140E] border-2 border-[#C59B27] flex items-center justify-center shadow-xl shadow-[#C59B27]/20 relative z-10">
                      <MapPin className="w-7 h-7 text-[#EDD28E]" />
                    </div>
                  </div>

                  <div className="bg-[#170E09]/95 backdrop-blur-md border border-[#3D281C] rounded-xl p-4 shadow-xl">
                    <h5 className="font-serif text-lg text-[#FAF7F2] mb-0.5">
                      Winston Maison Chocolate Café
                    </h5>
                    <p className="text-xs text-[#C59B27] mb-2">
                      Bangkok, Thailand
                    </p>
                    <p className="text-[11px] text-[#DEC5A7]/80 leading-relaxed mb-3">
                      {isEn
                        ? 'Nestled in central Bangkok. Click below to launch navigation directly in Google Maps.'
                        : 'ตั้งอยู่ใจกลางกรุงเทพมหานคร กดปุ่มด้านล่างเพื่อเปิดการนำทางบน Google Maps'}
                    </p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-[#22160F] hover:bg-[#2C1D14] border border-[#3D281C] text-xs font-semibold text-[#EDD28E] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.location.actions.getDirections}</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Left Map watermark */}
                <div className="absolute bottom-3 left-4 text-[10px] text-[#DEC5A7]/40 font-mono">
                  BANGKOK · 13.7563° N, 100.5018° E
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Social Notice Modal / Alert */}
      {socialModalInfo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSocialModalInfo(null)}
        >
          <div
            className="bg-[#170E09] border border-[#3D281C] rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#22160F] border border-[#C59B27]/40 flex items-center justify-center mx-auto mb-3 text-[#C59B27]">
              <Info className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif text-[#FAF7F2] mb-2">
              {isEn ? 'Social Media Notice' : 'ข้อมูลโซเชียลมีเดีย'}
            </h4>
            <p className="text-xs text-[#DEC5A7]/90 leading-relaxed mb-5">
              {socialModalInfo}
            </p>
            <button
              onClick={() => setSocialModalInfo(null)}
              className="w-full py-2.5 rounded-xl bg-[#C59B27] text-[#100A07] text-xs uppercase tracking-wider font-semibold hover:bg-[#EDD28E] transition-colors"
            >
              {isEn ? 'Understood' : 'รับทราบ'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
