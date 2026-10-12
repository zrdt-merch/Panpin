import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Sparkles, Check, Send, MapPin, AlertCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/panpinData';

interface TreatmentEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const TreatmentEstimatorModal: React.FC<TreatmentEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [shoeType, setShoeType] = useState('Sneakers (Nike / Adidas / Jordan / dll)');
  const [treatment, setTreatment] = useState(
    initialServiceId
      ? SERVICES_DATA.find((s) => s.id === initialServiceId)?.title || 'Shoe Cleaning'
      : 'Shoe Cleaning'
  );
  const [deliveryMode, setDeliveryMode] = useState<'pickup' | 'dropoff'>('pickup');
  const [clientName, setClientName] = useState('');
  const [locationArea, setLocationArea] = useState('');
  const [conditionNotes, setConditionNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (match) setTreatment(match.title);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  // Construct standard Indonesian polite WhatsApp text template
  const buildWhatsAppMessage = () => {
    let msg = `Halo Admin PANPIN Shoe Treatment,\n\n`;
    msg += `Saya mau konsultasi dan booking treatment sepatu:\n`;
    if (clientName.trim()) {
      msg += `• Nama: ${clientName.trim()}\n`;
    }
    msg += `• Jenis Sepatu: ${shoeType}\n`;
    msg += `• Layanan yang Dipilih: ${treatment}\n`;
    msg += `• Metode Layanan: ${deliveryMode === 'pickup' ? 'Gratis Antar-Jemput (Purwokerto)' : 'Antar Langsung ke Toko (Depan UNSOED)'}\n`;
    if (deliveryMode === 'pickup' && locationArea.trim()) {
      msg += `• Area/Alamat Penjemputan: ${locationArea.trim()}\n`;
    }
    if (conditionNotes.trim()) {
      msg += `• Catatan Kondisi: ${conditionNotes.trim()}\n`;
    }
    msg += `\nMohon informasi estimasi biaya pengerjaan dan konfirmasi jadwalnya ya min. Terima kasih! 🙏`;
    return encodeURIComponent(msg);
  };

  const handleOpenWhatsApp = () => {
    const encoded = buildWhatsAppMessage();
    const url = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto text-[#0F172A]">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
              <span>Konsultasi & Booking Cepat</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">WhatsApp 0857-4062-6298</span>
            </div>
            <h3 className="font-display font-black text-2xl text-[#0F172A]">
              Pilih Treatment Sepatumu
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Isi preferensimu di bawah, kami siapkan template pesan WhatsApp agar admin langsung paham kondisinya.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-black rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="py-6 space-y-6">
          {/* 1. Shoe Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Jenis Sepatu
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Sneakers (Nike/Adidas/Jordan)',
                'Bahan Suede / Nubuck (Sensitif)',
                'Canvas (Vans/Converse)',
                'Sepatu Kulit/Pantofel',
                'Sepatu Lari / Running',
                'Boots / Heels / Flat Shoes',
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setShoeType(item)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                    shoeType === item
                      ? 'bg-[#0F172A] border-[#0F172A] text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Treatment Needed */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Pilihan Layanan / Treatment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { title: 'Shoe Cleaning (Fast/Deep)', desc: 'Cuci bersih upper, insole, sole & bau' },
                { title: 'Special Suede Treatment', desc: 'Dry clean khusus bahan suede & nap revive' },
                { title: 'Shoe Repair & Reglue', desc: 'Sol copot, jahit sol, perbaikan lining' },
                { title: 'Midsole Unyellowing & Whitening', desc: 'Hilangkan noda kuning di sol karet putih' },
                { title: 'Repaint & Recolor', desc: 'Cat ulang warna pudar / ganti warna baru' },
                { title: 'Belum Yakin / Konsultasi Dulu', desc: 'Kirim foto sepatu agar dicek teknisi' },
              ].map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setTreatment(item.title)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    treatment === item.title
                      ? 'bg-slate-100 border-[#0F172A] text-[#0F172A]'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-[#0F172A]">{item.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Delivery Method */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Cara Penyerahan Sepatu
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setDeliveryMode('pickup')}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  deliveryMode === 'pickup'
                    ? 'bg-emerald-50/60 border-emerald-600'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">Gratis Antar-Jemput</span>
                  <span className="text-[10px] bg-emerald-800 text-white font-bold px-2 py-0.5 rounded-full">
                    PURWOKERTO
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Kurir kami jemput & antar kembali ke kosan/rumahmu.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMode('dropoff')}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  deliveryMode === 'dropoff'
                    ? 'bg-slate-100 border-[#0F172A]'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">Antar Sendiri ke Toko</span>
                  <span className="text-[10px] bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded-full">
                    STORE
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Drop langsung ke Jl. HR Bunyamin (Depan UNSOED).
                </p>
              </button>
            </div>
          </div>

          {/* 4. Name & Address Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Anda (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Dimas"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-black font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {deliveryMode === 'pickup' ? 'Alamat / Area Penjemputan' : 'Area Asal'}
              </label>
              <input
                type="text"
                placeholder="Contoh: Kos Grendeng / Purwokerto Utara"
                value={locationArea}
                onChange={(e) => setLocationArea(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-black font-medium"
              />
            </div>
          </div>

          {/* 5. Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Catatan Kondisi Sepatu (Opsional)
            </label>
            <input
              type="text"
              placeholder="Misal: Sol depan mangap, noda lumpur suede, atau midsole kuning"
              value={conditionNotes}
              onChange={(e) => setConditionNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-black font-medium"
            />
          </div>

          {/* Notice */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5 text-[11px] text-slate-600 font-medium">
            <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p>
              Setelah menekan tombol di bawah, aplikasi WhatsApp akan terbuka otomatis. Kirimkan juga foto sepatu Anda di chat agar admin PANPIN dapat mengonfirmasi estimasi harga & durasi secara akurat.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Tersambung langsung ke WhatsApp resmi PANPIN
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-black rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={handleOpenWhatsApp}
              className="w-2/3 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#FACC15]" />
              <span>Buka Chat WhatsApp ↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
