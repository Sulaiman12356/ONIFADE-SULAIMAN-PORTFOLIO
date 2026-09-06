import React from 'react';
import { TrendingUp, Sparkles, ShieldCheck, Award, Zap, Target, BarChart3, Users } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/portfolioData';

export const WhyHireMe: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <TrendingUp className="w-6 h-6 text-[#0B5ED7]" />;
      case 1:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 3:
      default:
        return <Award className="w-6 h-6 text-amber-600" />;
    }
  };

  const getBadgeStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-50 border-blue-200';
      case 1:
        return 'bg-purple-50 border-purple-200';
      case 2:
        return 'bg-emerald-50 border-emerald-200';
      case 3:
      default:
        return 'bg-amber-50 border-amber-200';
    }
  };

  return (
    <section id="why-hire-me" className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-[#E5EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3">
          <span>THE MR. CLARITY ADVANTAGE</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-4">
          WHY CHOOSE <span className="text-[#0B5ED7]">SULAIMAN?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mb-14">
          Four foundational pillars that ensure your campaigns, graphics, and data initiatives succeed predictably.
        </p>

        {/* 4 Pillars Grid matching template cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {VALUE_PROPOSITIONS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E5EAF1] hover:bg-white hover:border-[#0B5ED7] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border shadow-xs ${getBadgeStyle(idx)}`}>
                  {getIcon(idx)}
                </div>
                <h3 className="text-lg font-extrabold text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5EAF1]/70 flex items-center gap-1.5 text-xs font-bold text-[#062B63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]"></span>
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
