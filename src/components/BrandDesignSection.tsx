import React, { useState } from 'react';
import { Palette, Eye, X, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { BrandDesignItem } from '../types';

interface BrandDesignSectionProps {
  onOpenHireMe?: () => void;
}

export const BrandDesignSection: React.FC<BrandDesignSectionProps> = ({ onOpenHireMe }) => {
  const { brandDesigns } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewItem, setPreviewItem] = useState<BrandDesignItem | null>(null);

  const categories = [
    'All',
    'Logos',
    'Flyers',
    'Social media graphics',
    'Brand identities',
    'Marketing materials',
    'Campaign designs',
    'Presentations',
  ];

  const filteredItems = activeCategory === 'All'
    ? brandDesigns
    : brandDesigns.filter((item) => item.category === activeCategory);

  return (
    <section id="brand-design" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>CREATIVE DIRECTION &amp; VISUAL CRAFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            BRAND DESIGN
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Strategic brand identities, high-converting social flyers, corporate presentations, and marketing collateral designed to command attention and build trust.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#062B63] text-white shadow-md shadow-[#062B63]/15'
                    : 'bg-white text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9] cursor-pointer"
                  onClick={() => setPreviewItem(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      <Eye className="w-4 h-4" /> Click to Inspect
                    </span>
                    <span className="text-white/80 text-xs font-medium">
                      {item.year || '2024'}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-[#062B63] border border-[#E2E8F0] shadow-2xs">
                    {item.category}
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#062B63] mb-1.5 group-hover:text-[#0B5ED7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tools Used Pills */}
                  {item.tools && item.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] text-[10px] font-bold border border-[#E2E8F0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-xs">
                <span className="text-[#64748B] font-medium truncate max-w-[150px]">
                  {item.client || 'Client Project'}
                </span>
                <button
                  onClick={() => setPreviewItem(item)}
                  className="text-[#0B5ED7] font-bold hover:underline inline-flex items-center gap-1"
                >
                  View Design →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {onOpenHireMe && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenHireMe}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Palette className="w-4 h-4" />
              <span>Need Brand Design or Marketing Assets? Request a Quote</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Preview Modal */}
      {previewItem && (
        <div
          id="brand-design-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-white">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-[#EFF6FF] text-[#0B5ED7] mr-2">
                  {previewItem.category}
                </span>
                <span className="text-sm font-bold text-[#062B63]">
                  {previewItem.title}
                </span>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-[#F8FAFC] flex items-center justify-center overflow-auto max-h-[65vh]">
              <img
                src={previewItem.imageUrl}
                alt={previewItem.title}
                className="max-h-full max-w-full rounded-lg object-contain shadow-md"
              />
            </div>

            <div className="p-6 bg-white border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
                  {previewItem.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-[#64748B]">
                  <span>Client: <strong>{previewItem.client || 'Corporate Client'}</strong></span>
                  <span>•</span>
                  <span>Tools: <strong>{previewItem.tools?.join(', ') || 'Canva Pro, Figma'}</strong></span>
                </div>
              </div>
              {onOpenHireMe && (
                <button
                  onClick={() => {
                    setPreviewItem(null);
                    onOpenHireMe();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0B5ED7] hover:bg-[#062B63] text-white font-bold text-xs shrink-0 transition-colors"
                >
                  Hire for Brand Design →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
