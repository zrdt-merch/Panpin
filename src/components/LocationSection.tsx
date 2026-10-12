import React, { useMemo, useState } from 'react';
import { MapPin, Clock, Phone, Instagram, ExternalLink, Navigation, Compass, MessageCircle, Copy, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(BRAND_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Compute live operating status based on WIB (UTC+7)
  const isCurrentlyOpen = useMemo(() => {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const wibHour = (utcHours + 7) % 24;
    return wibHour >= 9 && wibHour < 21;
  }, []);

  return (
    <section id="location" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location Info & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
                05. STORE & KONSULTASI LANGSUNG
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight [text-wrap:balance]">
                Kunjungi Workshop Kami di Depan UNSOED.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
              Ingin konsultasi langsung sebelum treatment? Drop sepatu sambil kuliah atau jalan-jalan santai. Lokasi workshop kami tepat di seberang gerbang utama kampus UNSOED Purwokerto.
            </p>

            {/* Live Operational Status Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#0F172A]">Jam Operasional</span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        isCurrentlyOpen
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isCurrentlyOpen ? 'BUKA SEKARANG (09.00–21.00 WIB)' : 'BUKA BESOK 09.00 WIB'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {BRAND_INFO.operatingHours} (Buka Setiap Hari Tanpa Libur)
                  </p>
                </div>
              </div>
            </div>

            {/* Address & Contact Items */}
            <div className="space-y-4">
              {/* Address item */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                    Alamat Workshop
                  </span>
                  <p className="text-sm text-slate-700 mt-0.5 font-medium">
                    {BRAND_INFO.location}
                  </p>
                  <span className="text-xs text-emerald-800 font-bold block mt-1">
                    Patokan: Tepat di depan seberang gerbang utama kampus UNSOED.
                  </span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 transition-colors flex items-center justify-between gap-2 shadow-xs">
                  <a
                    href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 min-w-0 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold truncate">
                        WhatsApp Resmi
                      </span>
                      <span className="text-xs font-bold text-[#0F172A] group-hover:text-black truncate block">
                        {BRAND_INFO.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Copy Number Button */}
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Salin nomor WhatsApp ke clipboard"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all border shrink-0 cursor-pointer bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-400 active:scale-95"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-extrabold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-black transition-colors flex items-center gap-3 group shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                      Instagram Resmi
                    </span>
                    <span className="text-xs font-bold text-[#0F172A]">
                      {BRAND_INFO.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-2">
              <a
                href={BRAND_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah di Google Maps ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Front Desk Photo & Interactive Map Preview */}
          <div className="lg:col-span-6 space-y-6">
            {/* Front Desk Consultation Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm relative group">
              <div className="aspect-[16/10] w-full relative rounded-xl overflow-hidden bg-slate-50">
                <img
                  src={`${import.meta.env.BASE_URL}images/store_counter_consultation_1791761395185.jpg`}
                  alt="Suasana meja konsultasi sepatu di store PANPIN Purwokerto"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">
                    Konsultasi Gratis di Meja Kasir
                  </span>
                  <span className="text-[10px] text-slate-600 font-bold font-mono">
                    Depan Kampus UNSOED
                  </span>
                </div>
              </div>
            </div>

            {/* Styled Landmark Road Grid Map in clean white */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                  <Compass className="w-4 h-4 text-emerald-700" />
                  <span>Jalur Akses: Jl. HR Bunyamin, Purwokerto Utara</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold font-mono">Banyumas</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="font-bold text-[#0F172A]">Gerbang Utama UNSOED</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">Sisi Barat Jalan</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F172A] text-white flex items-center justify-between font-bold shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>PANPIN SHOE TREATMENT</span>
                  </div>
                  <span className="text-[10px] bg-white text-[#0F172A] font-extrabold px-2.5 py-0.5 rounded-full">
                    Tepat Di Seberang
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
