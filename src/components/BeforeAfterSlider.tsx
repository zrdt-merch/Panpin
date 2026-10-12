import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle, Sparkles, MessageCircle, Eye, Instagram } from 'lucide-react';
import { BEFORE_AFTER_CASES, BRAND_INFO } from '../data/panpinData';

interface BeforeAfterSliderProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBookingModal }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  // Drag interaction handler
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) handleMove(e.touches[0].clientX);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header styled adopting PANPIN Image 4 (Unyellowing & Whitening style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
              REAL RESULTS · PANPIN SHOE TREATMENT
            </div>

            {/* Inverted Black/White Block style from Image 4 */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="bg-[#0F172A] text-white font-display font-black text-2xl sm:text-4xl px-4 py-1.5 rounded-md uppercase tracking-tight">
                Before
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-slate-400">
                &
              </span>
              <span className="bg-white border-2 border-[#0F172A] text-[#0F172A] font-display font-black text-2xl sm:text-4xl px-4 py-1 rounded-md uppercase tracking-tight shadow-xs">
                After
              </span>
            </div>

            <p className="text-sm sm:text-base font-bold text-slate-700 mt-2">
              Kenali bedanya sebelum salah treatment!
            </p>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md [text-wrap:balance]">
            Bukan sekadar bersih di permukaan. Kami merestorasi serat asli, mengembalikan rona putih, dan merekatkan sol sepatu kembali kokoh.
          </p>
        </div>

        {/* Case Study Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-black border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Split Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Slider Container (col-span-8) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={handleContainerClick}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-xl bg-white"
            >
              {/* After Image (Background - Clean) */}
              <img
                src={currentCase.afterImage}
                alt={`Hasil sesudah treatment: ${currentCase.title}`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Foreground Clipped - Dirty/In Treatment) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={`Kondisi sebelum treatment: ${currentCase.title}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Central Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#0F172A] shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#0F172A] flex items-center justify-center text-[#0F172A] shadow-md pointer-events-auto cursor-ew-resize">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Permanent Labels */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm">
                  BEFORE (KOTOR)
                </span>
              </div>
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="bg-[#0F172A] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm border border-white/20">
                  AFTER (HASIL PANPIN)
                </span>
              </div>

              {/* Bottom Instruction Bar */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-slate-700 font-bold border border-slate-200 shadow-xs">
                  ← Geser untuk membandingkan →
                </div>
                <div className="bg-[#0F172A] px-2.5 py-1 rounded-md text-[11px] font-mono text-white font-bold">
                  {Math.round(sliderPosition)}%
                </div>
              </div>
            </div>

            {/* Quick Position Preset Toggles */}
            <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold">
              <span className="text-slate-400">Tampilan Cepat:</span>
              <button
                onClick={() => setSliderPosition(100)}
                className={`px-2.5 py-1 rounded transition-colors ${sliderPosition === 100 ? 'bg-[#0F172A] text-white' : 'text-slate-600 hover:text-black'}`}
              >
                Full Before
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-2.5 py-1 rounded transition-colors ${sliderPosition === 50 ? 'bg-[#0F172A] text-white' : 'text-slate-600 hover:text-black'}`}
              >
                Split 50:50
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setSliderPosition(0)}
                className={`px-2.5 py-1 rounded transition-colors ${sliderPosition === 0 ? 'bg-[#0F172A] text-white' : 'text-slate-600 hover:text-black'}`}
              >
                Full After
              </button>
            </div>
          </div>

          {/* Details & Case Explanation (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {currentCase.categoryLabel}
                </div>
                <h3 className="font-display font-black text-2xl text-[#0F172A]">
                  {currentCase.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Bahan: {currentCase.shoeType}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  Treatment Diterapkan:
                </div>
                {currentCase.treatmentDetails.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBookingModal(currentCase.category)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                  <span>Konsultasi Sepatu Serupa ↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Tools Flatlay Showcase matching Image 2 & 3 */}
        <div className="mt-16 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[280px] bg-slate-50">
            <img
              src={`${import.meta.env.BASE_URL}images/white_flatlay_tools_1791769054252.jpg`}
              alt="Peralatan sneaker clinic dan flatlay restorasi sepatu PANPIN"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              WORKSHOP SNEAKER CLINIC
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Standar Peralatan Profesional & Formula Khusus
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Setiap langkah kecil diperhatikan secara seksama: sikat bulu kuda asli, pembersih pH seimbang anti-merusak material, dan pengeringan ruang sirkulasi tanpa jemuran matahari langsung yang bisa merusak lem.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-700 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Sikat bulu kuda asli
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Formula cleaner ramah sepatu
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Anti-bakteri & wangi tahan lama
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
