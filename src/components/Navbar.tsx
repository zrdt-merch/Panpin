import React, { useState } from 'react';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

interface NavbarProps {
  onOpenBookingModal: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark (Clean Black Monogram & Typography) */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-slate-900 flex items-center justify-center font-display font-black text-xl tracking-tighter text-white shadow-sm">
            <span className="text-white">P</span>
            <span className="text-[#FACC15]">P</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg tracking-wider text-[#0F172A] uppercase whitespace-nowrap">
              PANPIN
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">
              Shoe Treatment
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#services"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Layanan
          </a>
          <a
            href="#suede"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Suede Care
          </a>
          <a
            href="#before-after"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Before & After
          </a>
          <a
            href="#pickup"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Gratis Antar-Jemput
          </a>
          <a
            href="#location"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Store Depan UNSOED
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Black Button matching the posters) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBookingModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-md transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#FACC15]" />
            <span>Booking WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenBookingModal()}
            className="p-2 text-white bg-[#0F172A] rounded-md text-xs font-bold flex items-center justify-center cursor-pointer"
            aria-label="Booking WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#FACC15]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-black rounded-md bg-slate-100 border border-slate-200 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-black border-b border-slate-100"
            >
              Layanan & Treatment
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-black border-b border-slate-100"
            >
              Before & After Hasil Treatment
            </a>
            <a
              href="#suede"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-black border-b border-slate-100"
            >
              Suede Care Khusus
            </a>
            <a
              href="#pickup"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-black border-b border-slate-100"
            >
              Gratis Antar-Jemput Purwokerto
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-black border-b border-slate-100"
            >
              Store Depan UNSOED & Jam Buka
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] rounded-md shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#FACC15]" />
              <span>Konsultasi & Booking WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
