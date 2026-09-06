import React, { useState } from 'react';
import { Play, Film, X, ExternalLink, Sparkles, Clock, MonitorPlay } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { VideoContentItem } from '../types';

interface VideoGallerySectionProps {
  onOpenHireMe?: () => void;
}

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({ onOpenHireMe }) => {
  const { videoItems } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoContentItem | null>(null);

  const categories = [
    'All',
    'Short-form videos',
    'Reels',
    'TikTok videos',
    'Promotional videos',
  ];

  const filteredVideos = activeCategory === 'All'
    ? videoItems
    : videoItems.filter((v) => v.category === activeCategory);

  return (
    <section id="video-content" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>DYNAMIC DIRECT-RESPONSE MOTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            VIDEO &amp; CONTENT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Fast-paced short-form video creatives, Instagram reels, and TikTok ads engineered with scroll-stopping hooks, kinetic typography, and direct response persuasion. Primary editing engine: <strong>CapCut Pro</strong>.
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
                    : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with Play Overlay */}
                <div
                  className="relative aspect-[9/14] overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-75"
                    loading="lazy"
                  />

                  {/* Top Badge: Platform */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white border border-white/10">
                    {video.platform}
                  </div>

                  {/* Top Badge: Tool */}
                  <div className="absolute top-3 right-3 bg-[#0B5ED7] text-white px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">
                    {video.primaryTool || 'CapCut'}
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#062B63] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0B5ED7] group-hover:text-white transition-all">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Duration Badge */}
                  {video.duration && (
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  )}
                </div>

                {/* Video Info Body */}
                <div className="p-4 sm:p-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0B5ED7] mb-1">
                    {video.category}
                  </div>
                  <h3 className="text-sm font-bold text-[#062B63] line-clamp-2 mb-2 group-hover:text-[#0B5ED7] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 sm:p-5 pt-0 pb-4 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="text-[#0B5ED7] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <MonitorPlay className="w-3.5 h-3.5" /> Play Video
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
              <Film className="w-4 h-4" />
              <span>Need High-Converting Video Ads? Let's Collaborate</span>
            </button>
          </div>
        )}

      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          id="video-player-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#0B1F3A] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700 text-white">
              <div className="truncate pr-4">
                <span className="text-xs font-bold text-[#60A5FA] mr-2">
                  [{selectedVideo.primaryTool || 'CapCut'}]
                </span>
                <span className="text-sm font-bold truncate">
                  {selectedVideo.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full max-h-[70vh] object-contain"
              >
                Your browser does not support video playback.
              </video>
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-[#0F2744] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
                <div className="mt-1 text-[11px] text-slate-400">
                  Format: {selectedVideo.category} • Platform: {selectedVideo.platform} • Edited in: {selectedVideo.primaryTool || 'CapCut'}
                </div>
              </div>
              {onOpenHireMe && (
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    onOpenHireMe();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-xs shrink-0"
                >
                  Order Video Creatives →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
