import React, { useState } from 'react';
import { 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Cpu, 
  Code2, 
  GraduationCap, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

interface ValueCard {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  theme: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    accentGlow: string;
    icon: React.ReactNode;
  };
}

interface ValueAddSectionProps {
  onSelectService: (areaName: string) => void;
}

export const ValueAddSection: React.FC<ValueAddSectionProps> = ({ onSelectService }) => {
  const [selectedCard, setSelectedCard] = useState<ValueCard | null>(null);

  const cards: ValueCard[] = [
    {
      id: 'digital-marketing',
      number: '01',
      title: 'DIGITAL MARKETING & GROWTH',
      description: 'I can help organizations develop and execute digital marketing campaigns across Meta and TikTok, improve audience targeting, develop compelling campaign creatives and optimize campaigns based on performance data.',
      capabilities: [
        'Meta Ads',
        'Facebook Ads',
        'Instagram Ads',
        'TikTok Ads',
        'Campaign Strategy',
        'Audience Targeting',
        'Lead Generation',
        'Conversion Optimization',
        'WhatsApp Marketing',
        'Campaign Analysis',
      ],
      theme: {
        badgeBg: 'bg-blue-50',
        badgeText: 'text-[#0B5ED7]',
        badgeBorder: 'border-blue-200',
        accentGlow: 'hover:border-blue-500/50',
        icon: <TrendingUp className="w-6 h-6 text-[#0B5ED7]" />,
      },
    },
    {
      id: 'graphics-visual',
      number: '02',
      title: 'GRAPHICS & VISUAL COMMUNICATION',
      description: 'I create professional visual assets that help organizations communicate their products, services and ideas clearly.',
      capabilities: [
        'Canva Design',
        'Social Media Graphics',
        'Marketing Creatives',
        'Brand Assets',
        'Flyers',
        'Presentations',
        'Business Materials',
        'Campaign Visuals',
        'Visual Storytelling',
        'Basic Adobe Creative workflows',
      ],
      theme: {
        badgeBg: 'bg-emerald-50',
        badgeText: 'text-emerald-600',
        badgeBorder: 'border-emerald-200',
        accentGlow: 'hover:border-emerald-500/50',
        icon: <Palette className="w-6 h-6 text-emerald-600]" />,
      },
    },
    {
      id: 'data-analytics',
      number: '03',
      title: 'DATA ANALYSIS & BUSINESS INSIGHTS',
      description: 'I can transform raw information into understandable insights that support better decision-making.',
      capabilities: [
        'Data Cleaning',
        'Data Analysis',
        'Excel',
        'SQL',
        'Power BI',
        'Data Visualization',
        'Dashboard Development',
        'Reporting',
        'Business Insights',
        'Basic Python for Data Analysis',
      ],
      theme: {
        badgeBg: 'bg-purple-50',
        badgeText: 'text-purple-600',
        badgeBorder: 'border-purple-200',
        accentGlow: 'hover:border-purple-500/50',
        icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      },
    },
    {
      id: 'ai-automation',
      number: '04',
      title: 'AI & AUTOMATION',
      description: 'I explore practical applications of AI and automation to improve productivity, research, content creation and business workflows.',
      capabilities: [
        'AI Tools',
        'Prompt Engineering',
        'AI-assisted Research',
        'AI Content Workflows',
        'Workflow Automation',
        'Productivity Automation',
        'AI for Marketing',
        'AI for Design',
        'AI-assisted Data Workflows',
      ],
      theme: {
        badgeBg: 'bg-amber-50',
        badgeText: 'text-amber-600',
        badgeBorder: 'border-amber-200',
        accentGlow: 'hover:border-amber-500/50',
        icon: <Cpu className="w-6 h-6 text-amber-600" />,
      },
    },
    {
      id: 'tech-projects',
      number: '05',
      title: 'TECHNOLOGY & DIGITAL PROJECTS',
      description: 'My Computer Science background allows me to understand digital products beyond their visual appearance.',
      capabilities: [
        'Web Projects',
        'Product Concepts',
        'Digital Platforms',
        'UX/UI Thinking',
        'Technical Research',
        'Technology Innovation',
        'Digital Product Development',
        'AI/ML Exploration',
      ],
      theme: {
        badgeBg: 'bg-cyan-50',
        badgeText: 'text-cyan-700',
        badgeBorder: 'border-cyan-200',
        accentGlow: 'hover:border-cyan-500/50',
        icon: <Code2 className="w-6 h-6 text-cyan-700" />,
      },
    },
    {
      id: 'training-leadership',
      number: '06',
      title: 'TRAINING, COMMUNICATION & LEADERSHIP',
      description: 'I can communicate technical and digital concepts clearly and help teams, students and communities understand and apply new tools.',
      capabilities: [
        'Digital Skills Training',
        'Canva Training',
        'Digital Marketing Training',
        'Public Speaking',
        'Community Building',
        'Mentorship',
        'Team Collaboration',
        'Leadership',
        'Presentation',
      ],
      theme: {
        badgeBg: 'bg-rose-50',
        badgeText: 'text-rose-600',
        badgeBorder: 'border-rose-200',
        accentGlow: 'hover:border-rose-500/50',
        icon: <GraduationCap className="w-6 h-6 text-rose-600" />,
      },
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
            <span>CROSS-FUNCTIONAL EXPERTISE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-3">
            How I Can Add Value to Your Organization
          </h2>
          
          <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
            &ldquo;I don&apos;t just bring skills. I bring a problem-solving mindset.&rdquo;
          </p>
        </div>

        {/* Six Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`value-card-${card.id}`}
              className={`bg-[#F8FAFC] rounded-2xl p-7 sm:p-8 border border-[#E5EAF1] ${card.theme.accentGlow} hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative`}
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs ${card.theme.badgeBg} ${card.theme.badgeBorder}`}>
                    {card.theme.icon}
                  </div>
                  <span className="text-xs font-black tracking-wider text-slate-400 group-hover:text-[#0B5ED7] transition-colors">
                    CARD {card.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Capabilities list */}
                <div className="pt-4 border-t border-[#E5EAF1] mb-6">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#062B63] block mb-3">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {card.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#0B1F3A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5EAF1] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCard(card)}
                  className="text-xs font-bold text-[#062B63] hover:text-[#0B5ED7] transition-colors flex items-center gap-1"
                >
                  <span>Quick Overview</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(card.title)}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white hover:bg-[#0B5ED7] hover:text-white border border-[#E5EAF1] text-xs font-bold text-[#0B5ED7] transition-all shadow-xs"
                >
                  <span>Engage</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for In-depth Card View */}
      {selectedCard && (
        <div 
          id="value-card-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5EAF1] relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${selectedCard.theme.badgeBg} ${selectedCard.theme.badgeBorder}`}>
                {selectedCard.theme.icon}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B5ED7]">
                  {selectedCard.number} • VALUE PILLAR
                </span>
                <h3 className="text-xl font-black text-[#062B63] leading-tight">
                  {selectedCard.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed mb-6 bg-[#F8FAFC] p-4 rounded-xl border border-[#E5EAF1]">
              &ldquo;{selectedCard.description}&rdquo;
            </p>

            <div className="mb-6">
              <span className="text-xs font-black uppercase text-[#062B63] tracking-wider block mb-3">
                Included Capabilities &amp; Workflows:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {selectedCard.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-[#E5EAF1] text-xs font-semibold text-[#0B1F3A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5EAF1]">
              <button
                onClick={() => setSelectedCard(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = selectedCard.title;
                  setSelectedCard(null);
                  onSelectService(title);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-md transition-all"
              >
                <span>Inquire About {selectedCard.title.split('&')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
