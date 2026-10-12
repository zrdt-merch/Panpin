import React from 'react';
import { MessageCircle, ArrowDownRight, Star, Clock, MapPin, Truck, ChevronDown, Instagram, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200 bg-[#FFFFFF]">
      {/* Background airy subtle gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-slate-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition, Hero Poster Headline & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Top Brand Tag (from PANPIN Poster) */}
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-[#0F172A] uppercase">
                PANPIN SHOE TREATMENT
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                EST. {BRAND_INFO.estYear} · PURWOKERTO
              </span>
            </div>

            {/* Dominant Poster Headline directly adopting Image 1 */}
            <div className="space-y-1">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl italic text-[#0F172A] tracking-tighter leading-none">
                  GRATIS
                </span>
                {/* Motorbike courier icon from the poster */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>DOORSTEP COURIER</span>
                </div>
              </div>

              <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0F172A] tracking-tight uppercase leading-tight [text-wrap:balance]">
                ANTAR & JEMPUT SEPATU KAMU!
              </h1>
            </div>

            {/* Signature PANPIN Outline Pill directly from the poster */}
            <div className="inline-flex">
              <div className="px-6 py-2.5 rounded-full border-2 border-[#0F172A] bg-white text-[#0F172A] text-xs sm:text-sm font-extrabold tracking-wide shadow-sm">
                Berlaku untuk area Purwokerto dan sekitarnya
              </div>
            </div>

            {/* Value Proposition Body */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed [text-wrap:balance]">
              Kamu fokus dengan aktivitasmu, biar PANPIN yang merawat sepatu kesayanganmu. Mulai dari deep cleaning, unyellowing, perbaikan sol lepas, hingga restorasi suede.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                <span>Booking via WhatsApp ↗</span>
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
              >
                <span>Pilih Treatment</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Authentic Poster Bottom Strip (matching Image 1 & 2 footer) */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Free pickup and delivery area Purwokerto</span>
              </div>
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 text-[#0F172A] hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-slate-700" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean White Studio Tote Bag Visual (Image 1) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-xl group">
              <div className="aspect-[3/4] w-full relative rounded-xl overflow-hidden bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/white_hero_delivery_tote_1791769042044.jpg`}
                  alt="Tas kanvas pengantaran sepatu bersih gratis antar jemput PANPIN Purwokerto"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Floating Clean Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-[11px] font-bold text-[#0F172A] tracking-wide">
                    Siap Diantar ke Kosan/Rumah
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Door-to-Door Service</div>
                    <div className="text-[11px] text-slate-500">Purwokerto & Sekitarnya</div>
                  </div>
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    GRATIS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip below hero split in clean white cards */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Metric 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-500 shrink-0 shadow-xs">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="font-display font-black text-2xl text-[#0F172A] tracking-tight tabular-nums">
                4.6 <span className="text-sm font-medium text-slate-400">/ 5.0</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                616+ Ulasan Google Maps
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-black text-2xl text-[#0F172A] tracking-tight tabular-nums">
                10+ <span className="text-sm font-medium text-slate-400">Tahun</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Berdiri Sejak 2015
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-black text-xl text-[#0F172A] tracking-tight">
                Gratis Jemput
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Area Purwokerto & Sekitar
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-black text-xl text-[#0F172A] tracking-tight">
                Depan UNSOED
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Buka Tiap Hari 09.00–21.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
