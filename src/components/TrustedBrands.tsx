import React from 'react';
import { TRUSTED_BRANDS } from '../data/portfolioData';

export const TrustedBrands: React.FC = () => {
  return (
    <section id="trusted-brands-section" className="py-8 bg-white border-y border-[#E5EAF1]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-widest text-[#64748B] uppercase mb-6">
          Trusted by brands, startups, and organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16 opacity-85">
          {/* Canva */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-[#0B5ED7] transition-colors cursor-default">
            <span className="font-extrabold text-xl tracking-tight italic font-serif">Canva</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Expert</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-[#0B5ED7] transition-colors cursor-default">
            <span className="font-extrabold text-xl tracking-tighter">∞ Meta</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Certified</span>
          </div>

          {/* TikTok */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-[#0B5ED7] transition-colors cursor-default">
            <span className="font-extrabold text-xl tracking-normal">TikTok</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Ads</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-1.5 text-slate-700 hover:text-[#0B5ED7] transition-colors cursor-default">
            <span className="font-bold text-xl tracking-tight">Google</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Analytics</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-[#0B5ED7] transition-colors cursor-default">
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <span className="bg-red-500 rounded-[1px]"></span>
              <span className="bg-emerald-500 rounded-[1px]"></span>
              <span className="bg-blue-500 rounded-[1px]"></span>
              <span className="bg-amber-500 rounded-[1px]"></span>
            </div>
            <span className="font-bold text-lg tracking-tight">Microsoft</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Power BI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
