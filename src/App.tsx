import React, { useState } from 'react';
import { Language, MenuCategory } from './types';
import { ConceptNoticeBanner } from './components/ConceptNoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Experience } from './components/Experience';
import { ChocolateSpotlight } from './components/ChocolateSpotlight';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const handleExploreChocolate = () => {
    setActiveCategory('chocolate');
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#100A07] text-[#F6EEE3] flex flex-col font-sans ${lang === 'th' ? 'font-thai' : ''}`}>
      {/* Top Unofficial Concept Disclaimer Notice */}
      <ConceptNoticeBanner lang={lang} />

      {/* Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <main className="flex-1">
        {/* Cinematic Hero Section */}
        <Hero lang={lang} />

        {/* Story Section */}
        <Story lang={lang} />

        {/* The Winston Maison Experience */}
        <Experience lang={lang} />

        {/* Artisanal Chocolate Spotlight */}
        <ChocolateSpotlight
          lang={lang}
          onExploreChocolate={handleExploreChocolate}
        />

        {/* Interactive Menu Section */}
        <Menu
          lang={lang}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Masonry Gallery with Fullscreen Lightbox */}
        <Gallery lang={lang} />

        {/* On-Page Reservation Section */}
        <ReservationSection lang={lang} />

        {/* Bangkok Location & Contact Section */}
        <LocationContact lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Floating Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
      />

      {/* Sticky Mobile Bar (< 15% mobile viewport cap) */}
      <MobileStickyBar
        lang={lang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Back To Top Action */}
      <BackToTop />
    </div>
  );
}
