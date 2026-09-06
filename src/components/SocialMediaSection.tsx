import React, { useState } from 'react';
import { Share2, Instagram, Facebook, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { SocialMediaWorkItem } from '../types';

interface SocialMediaSectionProps {
  onOpenHireMe?: () => void;
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ onOpenHireMe }) => {
  const { socialMediaItems } = usePortfolio();
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'Instagram', 'Facebook', 'TikTok', 'Campaigns', 'Content'];

  const filteredItems = activeTab === 'All'
    ? socialMediaItems
    : socialMediaItems.filter((item) => {
        if (activeTab === 'Instagram') return item.platform === 'Instagram';
        if (activeTab === 'Facebook') return item.platform === 'Facebook';
        if (activeTab === 'TikTok') return item.platform === 'TikTok';
        if (activeTab === 'Campaigns') return item.category === 'Campaigns';
        if (activeTab === 'Content') return item.category === 'Content';
        return true;
      });

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#FDF2F8] text-[#DB2777] border border-[#FBCFE8]">
            <Instagram className="w-3 h-3" /> Instagram
          </span>
        );
      case 'Facebook':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            <Facebook className="w-3 h-3" /> Facebook
          </span>
        );
      case 'TikTok':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#0B1F3A] text-white border border-[#1E293B]">
            <span>♪</span> TikTok
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
            {platform}
          </span>
        );
    }
  };

  return (
    <section id="social-media" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>ORGANIC &amp; PAID SOCIAL MEDIA EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            SOCIAL MEDIA WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Content designs, high-retention carousels, platform-native reels, TikTok videos, and planned content calendars tailored to turn passive scrollers into active brand advocates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#062B63] text-white shadow-md shadow-[#062B63]/15'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {getPlatformBadge(item.platform)}
                  </div>
                  {item.metrics && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-black text-[#0B5ED7] border border-[#E2E8F0] shadow-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#10B981]" />
                      {item.metrics}
                    </div>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="text-[#0B5ED7]">{item.postType}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#062B63] mb-2 group-hover:text-[#0B5ED7] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="text-[#64748B] font-medium">Format: <strong>{item.postType}</strong></span>
                {onOpenHireMe && (
                  <button
                    onClick={onOpenHireMe}
                    className="text-[#0B5ED7] font-bold hover:underline"
                  >
                    Request Similar →
                  </button>
                )}
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
              <Share2 className="w-4 h-4" />
              <span>Scale Your Social Media Strategy &amp; Content</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
