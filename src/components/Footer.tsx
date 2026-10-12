import React, { useState } from 'react';
import { Instagram, MessageCircle, MapPin, ExternalLink, ArrowUp, Truck, Phone, Copy, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

export const Footer: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BRAND_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-24 md:pb-16 text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand info (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-slate-900 flex items-center justify-center font-display font-black text-xl tracking-tighter text-white shadow-xs">
                <span>P</span>
                <span className="text-[#FACC15]">P</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-base tracking-wider uppercase block text-[#0F172A]">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold tracking-wider">
                  Established 2015 · Purwokerto, Banyumas
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Layanan profesional cuci sepatu, repair, repaint, dan restorasi di Purwokerto. Menjaga sepatu kesayangan Anda tetap bersih, wangi, dan awet.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[#0F172A] transition-colors border border-slate-200 flex items-center gap-2 text-xs font-semibold shadow-xs"
              >
                <Instagram className="w-4 h-4 text-[#FF3864]" />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[#0F172A] transition-colors border border-slate-200 flex items-center gap-2 text-xs font-semibold shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>

              {/* Copy Number Button */}
              <button
                type="button"
                onClick={handleCopyPhone}
                title="Salin nomor WhatsApp ke clipboard"
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[#0F172A] transition-all border border-slate-200 hover:border-slate-400 flex items-center gap-1.5 text-xs font-semibold shadow-xs cursor-pointer active:scale-95"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Salin Nomor</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Nav Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
              Navigasi Layanan
            </span>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Shoe Cleaning (Fast & Deep Clean)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Shoe Repair & Sole Reglue
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Repaint & Recolor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Midsole Unyellowing & Whitening
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-black transition-colors">
                  Before & After Hasil Pengerjaan
                </a>
              </li>
              <li>
                <a href="#pickup" className="hover:text-black transition-colors">
                  Gratis Antar-Jemput Purwokerto
                </a>
              </li>
            </ul>
          </div>

          {/* Operational & Address info (col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
              Lokasi & Operasional
            </span>
            <div className="text-xs text-slate-600 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-medium">{BRAND_INFO.location}</span>
              </p>
              <p className="text-slate-900 font-bold">
                {BRAND_INFO.operatingHours} (Buka Setiap Hari)
              </p>
              <div className="pt-2">
                <a
                  href={BRAND_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:underline"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar styled matching PANPIN poster footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-700" />
            <span>Free pickup and delivery area Purwokerto · © {new Date().getFullYear()} {BRAND_INFO.name}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer font-bold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
