import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, Sparkles, MapPin, Instagram, Truck } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

interface FinalCtaBannerProps {
  onOpenBookingModal: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-sm">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
            <span>PANPIN SHOE TREATMENT PURWOKERTO</span>
            <span aria-hidden="true">·</span>
            <span>EST. 2015</span>
          </div>

          {/* Heading with PANPIN signature typography */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0F172A] tracking-tight leading-[1.05] [text-wrap:balance]">
            Ready to Refresh <br />
            <span className="text-emerald-800">
              Your Kicks?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
            Balik bersih, fresh, siap dipakai lagi! Konsultasikan kondisi sepatumu sekarang. Tim teknisi PANPIN siap membantu dan menjadwalkan penjemputan gratis.
          </p>

          {/* CTA Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#FACC15]" />
              <span>Konsultasi via WhatsApp (0857-4062-6298) ↗</span>
            </button>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-black bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#FF3864]" />
              <span>Follow @panpinst_pwt</span>
            </a>
          </div>

          {/* Reassurance note */}
          <div className="pt-4 text-xs text-slate-500 font-semibold flex items-center justify-center gap-4 flex-wrap">
            <span>✓ Konsultasi foto gratis</span>
            <span aria-hidden="true">·</span>
            <span>✓ Gratis jemput Purwokerto & sekitarnya</span>
            <span aria-hidden="true">·</span>
            <span>✓ Buka setiap hari 09.00–21.00 WIB</span>
          </div>
        </div>
      </div>
    </section>
  );
};
