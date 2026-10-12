import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_DATA, BRAND_INFO } from '../data/panpinData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            06. PERTANYAAN UMUM (FAQ)
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F172A] tracking-tight [text-wrap:balance]">
            Hal yang Sering Ditanyakan
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto [text-wrap:balance]">
            Informasi lengkap seputar layanan, biaya konsultasi, durasi pengerjaan, dan ketentuan antar-jemput sepatu di Purwokerto.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#0F172A] hover:text-black transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-slate-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#0F172A]">Masih punya pertanyaan lain?</div>
            <p className="text-xs text-slate-500 mt-0.5">
              Admin kami aktif setiap hari pukul 09.00–21.00 WIB untuk menjawab pertanyaan Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-black rounded-xl transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#FACC15]" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
