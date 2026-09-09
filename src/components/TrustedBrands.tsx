import React from 'react';
import { BrandIcon } from './BrandIcons';

export const TrustedBrands: React.FC = () => {
  const brands = [
    { name: 'Meta Ads', brandKey: 'meta' as const, badge: 'Paid Ads' },
    { name: 'Canva', brandKey: 'canva' as const, badge: 'Brand Design' },
    { name: 'CapCut', brandKey: 'capcut' as const, badge: 'Video Editing' },
    { name: 'TikTok', brandKey: 'tiktok' as const, badge: 'Short-Form' },
    { name: 'Google', brandKey: 'google' as const, badge: 'Analytics' },
    { name: 'WhatsApp', brandKey: 'whatsapp' as const, badge: 'Lead Routing' },
    { name: 'Firebase', brandKey: 'firebase' as const, badge: 'Cloud DB' },
  ];

  return (
    <section id="trusted-brands-section" className="py-8 bg-white border-y border-[#E5EAF1]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-black tracking-widest text-[#64748B] uppercase mb-6">
          PLATFORMS, TOOLS &amp; ECOSYSTEMS I WORK WITH
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center gap-2.5 text-slate-700 hover:text-[#0B5ED7] transition-all group cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:border-[#0B5ED7]/40 transition-colors shadow-2xs">
                <BrandIcon name={b.brandKey} size={16} className="text-slate-700 group-hover:text-[#0B5ED7] transition-colors" />
              </div>
              <span className="font-extrabold text-sm sm:text-base text-[#062B63] tracking-tight group-hover:text-[#0B5ED7] transition-colors">
                {b.name}
              </span>
              <span className="text-[10px] uppercase font-bold text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                {b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
