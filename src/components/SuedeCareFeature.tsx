import React from 'react';
import { Sparkles, AlertTriangle, CheckCircle, MessageCircle, ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

interface SuedeCareFeatureProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const SuedeCareFeature: React.FC<SuedeCareFeatureProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="suede" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Suede Craft Demonstration */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl relative group">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/suede_brush_care_1791761368510.jpg`}
                  alt="Teknik menyikat sepatu suede menggunakan sikat crepe rubber khusus di PANPIN"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Tag from PANPIN IG post */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-md text-[#0F172A] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  Edukasi Perawatan Sepatu
                </span>
              </div>

              {/* In-image caption overlay */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-xs text-[#0F172A]">
                    Sikat Khusus Crepe Rubber & Brass
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    Menjaga Serat Nap Tetap Halus & Lembut
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">PANPIN LAB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>SPESIALIS MATERIAL SENSITIF</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.1]">
                JANGAN ASAL <br />
                <span className="text-slate-900">RAWAT SEPATU SUEDE!</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
              Banyak sepatu suede (Adidas Samba, Gazelle, Puma, Vans, New Balance) yang rusak kaku dan botak karena dicuci basah atau disikat dengan sikat kasar. Di PANPIN, sepatu suede ditangani dengan teknik dry cleaning standar internasional.
            </p>

            {/* Comparison Highlights */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Hindari Cuci Basah & Deterjen Keras
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Air berlebih membuat minyak alami kulit suede hilang, mengakibatkan warna luntur dan tekstur mengeras seperti amplas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Teknik Crepe Brush & Dry Cleansing PANPIN
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mengangkat kotoran debu dan noda oli pada pori-pori terdalam, lalu menyisir kembali serat halus suede agar tetap lembut dan berbulu alami.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBookingModal('cleaning')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                <span>Konsultasi Sepatu Suede via WA ↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
