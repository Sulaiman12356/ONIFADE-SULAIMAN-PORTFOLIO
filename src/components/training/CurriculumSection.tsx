import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface CurriculumSectionProps {
  onRegisterClick: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onRegisterClick }) => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    {
      day: 1,
      tag: 'DAY 01 • THURSDAY',
      date: 'Thursday 10th September, 2026',
      time: '8:30 PM – 10:00 PM (WAT)',
      title: 'Canva Interface & The Rules of Clean Design',
      focus:
        'Setting up your workspace on mobile or laptop, understanding dimensions, overcoming beginner overwhelm, and mastering fundamental typography and layout rules.',
      topics: [
        'Navigating the Canva dashboard on smartphone vs. laptop',
        'Canvas dimensions for Instagram, WhatsApp status, and Facebook',
        'The Golden Rules of Font Pairing (How to look like a pro instantly)',
        'Spacing, padding, alignment & margin math: Why amateur designs look messy',
        'Choosing clean 3-color palettes with high-contrast legibility',
      ],
      practicalProject: 'Build your first minimalist, high-authority quote poster from scratch.',
      badgeColor: 'bg-blue-50 text-[#0B5ED7] border-blue-200',
    },
    {
      day: 2,
      tag: 'DAY 02 • FRIDAY',
      date: 'Friday 11th September, 2026',
      time: '8:30 PM – 10:00 PM (WAT)',
      title: 'Commercial Social Media & Promotional Flyers',
      focus:
        'Transitioning from basic posters to real commercial marketing assets that businesses pay for: event flyers, product promo ads, and multi-slide carousels.',
      topics: [
        'Anatomy of a high-converting promotional flyer',
        'Creating striking visual contrast with backgrounds and lighting effects',
        'Clean background removal and framing subject photos with style',
        'Designing multi-slide carousel frameworks that get saved and shared',
        'Call-to-Action (CTA) placement that drives real clicks and inquiries',
      ],
      practicalProject: 'Design a full commercial business flyer ready for client delivery.',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      day: 3,
      tag: 'DAY 03 • SATURDAY',
      date: 'Saturday 12th September, 2026',
      time: '8:30 PM – 10:00 PM (WAT)',
      title: 'Animation, Video Creatives & Monetizing Your Skills',
      focus:
        'Adding subtle animations and video transitions to your designs, exporting in print-ready quality, and practical steps to start earning with Canva immediately.',
      topics: [
        'Simple animation presets that make flyers look like motion graphics',
        'Exporting correctly: PNG vs. SVG vs. PDF Print (No blurry designs)',
        'How to package editable templates for clients as an extra service',
        'Pricing your design services (Charging ₦15,000 to ₦50,000+ per project)',
        'Where to find your first 5 design clients (even without a huge following)',
      ],
      practicalProject: 'Produce an animated Instagram promo graphic and client presentation mockups.',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section id="curriculum" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B5ED7] font-bold text-xs uppercase tracking-wider border border-blue-100 mb-4">
            STEP-BY-STEP AGENDA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight uppercase">
            THE 3-DAY <span className="text-[#0B5ED7]">PRACTICAL CURRICULUM.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Each evening session runs for 90 minutes. You won't just sit and watch slides — you will
            open Canva, follow along, and finish each day with a complete portfolio piece.
          </p>
        </div>

        {/* Day Selector Pills for Mobile & Quick Toggling */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 max-w-xl mx-auto">
          {days.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`flex-1 py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center cursor-pointer border ${
                activeDay === item.day
                  ? 'bg-[#0B1930] text-white border-[#0B1930] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>Day {item.day}</span>
              <span className="hidden sm:inline text-xs opacity-75 ml-1">
                ({item.day === 1 ? 'Thu' : item.day === 2 ? 'Fri' : 'Sat'})
              </span>
            </button>
          ))}
        </div>

        {/* Active Day Detailed Spotlight Card */}
        {days
          .filter((d) => d.day === activeDay)
          .map((item) => (
            <div
              key={item.day}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left Column: Overview & Schedule */}
                <div className="lg:w-5/12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${item.badgeColor}`}>
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] leading-tight mb-4">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {item.focus}
                    </p>
                  </div>

                  {/* Practical Project Deliverable Box */}
                  <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5ED7] mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
                      <span>Hands-On Project Delivered Today</span>
                    </div>
                    <p className="text-sm font-semibold text-[#062B63]">
                      {item.practicalProject}
                    </p>
                  </div>
                </div>

                {/* Right Column: Step-by-Step Lesson Topics */}
                <div className="lg:w-7/12 w-full bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-5">
                    WHAT WE WILL COVER STEP-BY-STEP:
                  </h4>
                  <ul className="space-y-3.5">
                    {item.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 text-[#0B5ED7] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold text-xs">
                          {index + 1}
                        </div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 text-center sm:text-left">
                      Join live via Google Meet / Zoom + WhatsApp VIP Cohort Support
                    </div>
                    <button
                      onClick={onRegisterClick}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 cursor-pointer"
                    >
                      <span>Reserve Your Seat</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* 3 Day Overview Grid preview below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {days.map((d) => (
            <div
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeDay === d.day
                  ? 'bg-white border-[#0B5ED7] ring-2 ring-blue-500/20 shadow-md'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                <span>DAY 0{d.day}</span>
                <span className="text-[#0B5ED7]">{d.day === 1 ? 'Thu' : d.day === 2 ? 'Fri' : 'Sat'}</span>
              </div>
              <h5 className="font-bold text-[#0B1F3A] text-sm mb-1 line-clamp-1">{d.title}</h5>
              <p className="text-xs text-slate-500 line-clamp-2">{d.practicalProject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
