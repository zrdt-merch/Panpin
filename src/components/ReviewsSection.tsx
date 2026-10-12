import React from 'react';
import { Star, ExternalLink, CheckCircle, MessageSquare, Instagram, Heart } from 'lucide-react';
import { REVIEWS_DATA, BRAND_INFO } from '../data/panpinData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">
              04. BUKTI KEPUASAN & VIRAL STORIES
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight [text-wrap:balance]">
              Dipercaya Warga, Mahasiswa & Netizen.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl [text-wrap:balance]">
              Dari mahasiswa UNSOED, pecinta sneaker, hingga cerita lucu pelanggan yang viral di Instagram Reels @panpinst_pwt.
            </p>
          </div>

          {/* Google Maps Score Badge Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-5 shrink-0 shadow-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-4xl text-[#0F172A] tabular-nums">
                  {BRAND_INFO.ratingScore}
                </span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold mt-0.5">Google Maps Verified</span>
                </div>
              </div>
              <span className="text-xs text-slate-700 font-medium mt-1">
                Berdasarkan <strong>{BRAND_INFO.totalReviews}+ Ulasan</strong> di Google Maps
              </span>
            </div>

            <a
              href={BRAND_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] transition-colors border border-slate-200 self-center shadow-xs"
              aria-label="Lihat ulasan di Google Maps"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                review.highlight
                  ? 'bg-amber-50/40 border-amber-200 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                {/* Header: Rating stars + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {review.highlight ? (
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> VIRAL DI REELS
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">{review.date}</span>
                  )}
                </div>

                {/* Treatment Type Mention */}
                <div className="text-xs font-bold text-[#0F172A] mb-2.5">
                  Treatment: {review.treatment}
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#0F172A] flex items-center gap-1.5">
                    <span>{review.author}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">{review.role}</div>
                </div>

                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  {review.highlight ? '@panpinst_pwt' : 'Google Maps'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors shadow-xs"
          >
            <span>Buka 616+ Ulasan di Google Maps</span>
            <ExternalLink className="w-4 h-4 text-slate-600" />
          </a>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#FF3864]" />
            <span>Lihat Komentar & Testimoni di Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
