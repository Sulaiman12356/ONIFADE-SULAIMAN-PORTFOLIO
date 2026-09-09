import React from 'react';
import { Type, Palette, Layout, Smartphone, Share2, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhatYoullLearnProps {
  onRegisterClick: () => void;
}

export const WhatYoullLearnSection: React.FC<WhatYoullLearnProps> = ({ onRegisterClick }) => {
  const learningOutcomes = [
    {
      id: 'typography',
      icon: Type,
      title: 'Typography & Text Hierarchy',
      description:
        'Learn the exact 2-font rule, spacing, and optical alignment so your headlines scream authority and your body text stays effortless to read.',
      badge: 'Design Fundamentals',
      points: ['Font pairing formulas that work', 'Fixing cramped or floating text', 'Creating instant visual hierarchy'],
    },
    {
      id: 'color',
      icon: Palette,
      title: 'Color Psychology & Contrast',
      description:
        'Stop using painful rainbow combinations. Discover how to build clean 3-color palettes with 100% readable contrast ratios.',
      badge: 'Brand Aesthetics',
      points: ['60-30-10 color proportion rule', 'High-contrast backgrounds', 'Color emotion in marketing'],
    },
    {
      id: 'flyers',
      icon: Layout,
      title: 'High-Converting Flyers & Posters',
      description:
        'Design business promo flyers, webinar banners, event posters, and church graphics that stop people mid-scroll on Instagram and WhatsApp.',
      badge: 'Marketing Creatives',
      points: ['Eye-stopping focal points', 'Clear Call-to-Action placement', 'Balancing photos and text'],
    },
    {
      id: 'carousels',
      icon: Share2,
      title: 'Engaging Carousels & Decks',
      description:
        'Master multi-slide educational carousels and pitch presentation slides that build viral engagement and position you as an authority.',
      badge: 'Content Strategy',
      points: ['Seamless slide-to-slide transitions', 'Bite-sized micro-copy layout', 'Presentation template setup'],
    },
    {
      id: 'mobile-laptop',
      icon: Smartphone,
      title: 'Smartphone + Laptop Mastery',
      description:
        'Whether you only have a budget Android/iPhone or a laptop, you will learn the exact practical shortcuts to design fast anywhere.',
      badge: 'Cross-Device Skill',
      points: ['Canva mobile touchscreen tricks', 'Laptop precision keyboard shortcuts', 'Cloud sync across your devices'],
    },
    {
      id: 'monetization',
      icon: DollarSign,
      title: 'Monetization & Client Delivery',
      description:
        'How to package your Canva skills, export print-ready PDFs and crisp PNGs, and get paying clients who respect your creative work.',
      badge: 'Income Generation',
      points: ['High-res export without blurriness', 'Delivering editable templates', 'Pricing your first design packages'],
    },
  ];

  return (
    <section id="what-youll-learn" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B5ED7] font-bold text-xs uppercase tracking-wider border border-blue-100 mb-4">
            CORE SKILLS BREAKDOWN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight uppercase">
            PRACTICAL SKILLS YOU WILL <br className="hidden sm:inline" />
            <span className="text-[#0B5ED7]">MASTER IN 3 DAYS.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            No fluff, no boring academic theory. Every lesson is designed so you can open Canva,
            apply the principles immediately, and create graphics you're truly proud of.
          </p>
        </div>

        {/* 6 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {learningOutcomes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 hover:border-[#0B5ED7]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center group-hover:bg-[#0B5ED7] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0B1F3A] mb-3 group-hover:text-[#0B5ED7] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Fast Registration */}
        <div className="mt-14 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-blue-50/70 border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-black text-[#062B63]">
              Ready to learn all 6 skills with hands-on mentoring?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Reserve your seat today before the next cohort fills up. 100% free access.
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 whitespace-nowrap cursor-pointer hover:scale-105 transition-all"
          >
            <span>Register Free Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
