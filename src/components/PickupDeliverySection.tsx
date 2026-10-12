import React, { useState } from 'react';
import { Truck, MapPin, Check, Search, MessageCircle, ArrowRight, ShieldCheck, Clock, Phone } from 'lucide-react';
import { PICKUP_AREAS, BRAND_INFO } from '../data/panpinData';

interface PickupDeliverySectionProps {
  onOpenBookingModal: () => void;
}

export const PickupDeliverySection: React.FC<PickupDeliverySectionProps> = ({ onOpenBookingModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // Filter areas based on search query
  const filteredAreas = PICKUP_AREAS.filter((area) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const matchName = area.name.toLowerCase().includes(q);
    const matchSub = area.subdistricts.some((s) => s.toLowerCase().includes(q));
    return matchName || matchSub;
  });

  const handleSendAreaWhatsApp = (areaName: string) => {
    const text = encodeURIComponent(
      `Halo Admin PANPIN Shoe Treatment,\n\nSaya ingin konfirmasi layanan Gratis Antar-Jemput untuk area:\n📍 ${areaName}\n\nApakah driver bisa jadwalkan jemput sepatu ke lokasi saya hari ini? Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${BRAND_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pickup" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold tracking-widest text-[#0F172A] uppercase flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-700" />
              <span>03. SELLING POINT UTAMA</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-[1.1] [text-wrap:balance]">
              Mager Keluar? <br />
              <span className="text-emerald-800">Biar Kami yang Jemput.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed [text-wrap:balance]">
              Nggak perlu meluangkan waktu buat antar sepatu ke store. Cukup booking lewat WhatsApp, konfirmasi area penjemputan, dan tim kurir PANPIN siap membantu proses antar-jemput sesuai rute harian.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-xs">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Gratis Area Purwokerto & Sekitarnya*</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-xs">
                <Clock className="w-4 h-4 text-slate-600" />
                <span>Driver Aktif Setiap Hari (09.00 – 21.00 WIB)</span>
              </div>
            </div>
          </div>

          {/* Right Image Visual with Green Tote Bag */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-lg group">
              <img
                src={`${import.meta.env.BASE_URL}images/white_hero_delivery_tote_1791769042044.jpg`}
                alt="Layanan gratis antar jemput sepatu PANPIN di Purwokerto"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Door-to-Door Courier</div>
                  <div className="text-[11px] text-slate-500">Purwokerto City Coverage</div>
                </div>
                <button
                  onClick={onOpenBookingModal}
                  className="px-4 py-2 text-xs font-bold bg-[#0F172A] text-white rounded-lg hover:bg-black transition-colors cursor-pointer"
                >
                  Jadwalkan Jemput
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Pickup Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            {
              step: '01',
              title: 'Chat & Kirim Foto',
              desc: 'Hubungi WhatsApp PANPIN, kirimkan foto kondisi sepatu dan lokasi penjemputanmu.',
            },
            {
              step: '02',
              title: 'Driver Jemput',
              desc: 'Kurir kami mengambil sepatu langsung di kosan, rumah, atau kantor sesuai jadwal.',
            },
            {
              step: '03',
              title: 'Proses Treatment',
              desc: 'Sepatu ditangani teknisi berpengalaman dengan metode dan formula khusus.',
            },
            {
              step: '04',
              title: 'Antar Kembali Bersih',
              desc: 'Sepatu diantar kembali dalam kondisi bersih, harum, terbungkus rapi siap pakai.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-2xl text-[#0F172A] block mb-2">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-lg text-[#0F172A] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pickup Area Checker */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0F172A]">
                Cek Cakupan Area Penjemputan
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Ketik nama kelurahan, kecamatan, atau area kosanmu di Purwokerto dan sekitarnya.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari area (misal: Grendeng, UNSOED)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Area List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {filteredAreas.length > 0 ? (
              filteredAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="font-display font-bold text-sm text-[#0F172A]">
                        {area.name}
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                          area.statusType === 'free'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-200 text-slate-800'
                        }`}
                      >
                        {area.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-500 mb-2">
                      {area.subdistricts.map((sub, sIdx) => (
                        <span key={sIdx} className="after:content-[','] last:after:content-[''] mr-1">
                          {sub}
                        </span>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-600 italic font-medium">
                      {area.etaNotes}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSendAreaWhatsApp(area.name)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black active:scale-[0.98] rounded-lg transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>Pesan Jemput di Sini</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-xs text-slate-500 font-medium">
                Area "<span className="text-black font-bold">{searchQuery}</span>" tidak tercantum? Hubungi WhatsApp kami langsung untuk konfirmasi rute driver ke lokasi Anda.
              </div>
            )}
          </div>

          {/* Direct CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              *Syarat & ketentuan gratis antar-jemput berlaku untuk minimal order / rute harian driver.
            </span>
            <button
              onClick={() => handleSendAreaWhatsApp('Konfirmasi Alamat Saya')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:underline cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Share Location langsung via WhatsApp (0857-4062-6298) ↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
