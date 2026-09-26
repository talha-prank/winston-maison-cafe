import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="hidden sm:flex fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1C120C]/90 hover:bg-[#2C1D14] text-[#FAF7F2] border border-[#3D281C] hover:border-[#C59B27] shadow-xl shadow-black/40 items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 text-[#EDD28E]" />
    </button>
  );
};
