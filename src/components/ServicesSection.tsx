import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Info, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO } from '../data/panpinData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeDetailModal, setActiveDetailModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
              01. PILIH TREATMENT SEPATU
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight [text-wrap:balance]">
              Perawatan Presisi Sesuai Kebutuhan.
            </h2>
            <div className="mt-3">
              <span className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 tracking-wider uppercase bg-slate-50">
                CLEANING · REPAIR · REPAINT · UNYELLOWING
              </span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md [text-wrap:balance]">
            Setiap pasang sepatu memiliki karakteristik bahan dan kebutuhan berbeda. Tim teknisi PANPIN menggunakan metode aman dan teruji sejak 2015.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header Row: Editorial Number + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl text-[#0F172A] tracking-tight">
                    {service.number}
                  </span>
                  {service.popular && (
                    <span className="text-[11px] font-bold text-emerald-800 border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Paling Populer
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A] group-hover:text-black transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {service.shortDesc}
                </p>

                {/* Inclusions checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Cakupan Pengerjaan:
                  </div>
                  {service.inclusions.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                  {service.inclusions.length > 3 && (
                    <button
                      onClick={() => setActiveDetailModal(service)}
                      className="text-xs text-[#0F172A] hover:underline font-bold pt-1 flex items-center gap-1 cursor-pointer"
                    >
                      + Lihat detail lengkap ({service.inclusions.length - 3} lainnya)
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom Row: Duration & Action */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{service.estimatedDuration}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <span>Konsultasi WA</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FACC15]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Guarantee Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#0F172A]">
                Standar Keamanan Material 100%
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                Setiap pasang sepatu ditangani dengan formula pH seimbang, sikat premium bulu kuda khusus, dan proses pengeringan suhu ruang tanpa terpapar terik matahari langsung yang bisa membuat lem getas.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('konsultasi')}
            className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-black px-4 py-2.5 rounded-lg border border-slate-300 hover:border-slate-500 bg-white transition-colors whitespace-nowrap self-end md:self-center cursor-pointer shadow-xs"
          >
            Tanya Kondisi Sepatu ke Teknisi ↗
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Detail Layanan {activeDetailModal.number}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#0F172A] mt-1">
                  {activeDetailModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveDetailModal(null)}
                className="text-slate-400 hover:text-black p-1.5 rounded-lg bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs text-slate-600">
              <p className="text-sm leading-relaxed text-slate-800">
                {activeDetailModal.fullDesc}
              </p>

              <div>
                <span className="font-bold text-[#0F172A] uppercase tracking-wider block mb-2">
                  Proses & Tahapan Pengerjaan:
                </span>
                <ul className="space-y-2">
                  {activeDetailModal.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-[#0F172A] block mb-1">Cocok Untuk:</span>
                <p className="text-slate-600">{activeDetailModal.recommendedFor}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-[#0F172A] block mb-1">Estimasi Pengerjaan:</span>
                <p className="text-emerald-700 font-bold">{activeDetailModal.estimatedDuration}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveDetailModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-black cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const id = activeDetailModal.id;
                  setActiveDetailModal(null);
                  onSelectService(id);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black rounded-xl cursor-pointer"
              >
                Konsultasi WhatsApp ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
