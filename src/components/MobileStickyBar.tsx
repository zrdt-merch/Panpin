import React from 'react';
import { MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/panpinData';

interface MobileStickyBarProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBookingModal }) => {
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Admin PANPIN Shoe Treatment,\n\nSaya ingin konsultasi treatment cuci/repair sepatu. Boleh minta info estimasi dan penjemputan gratis di Purwokerto? Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${BRAND_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Aksi Cepat Mobile" className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct WA Action */}
        <button
          onClick={handleDirectWhatsApp}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-[#0F172A] border border-slate-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Chat WhatsApp</span>
        </button>

        {/* Modal Booking Wizard */}
        <button
          onClick={onOpenBookingModal}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-black text-white shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <span>Pilih Treatment ↗</span>
        </button>
      </div>
    </aside>
  );
};
