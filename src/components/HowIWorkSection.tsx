import React from 'react';
import { Search, Compass, Layers, Rocket, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { HOW_I_WORK_STEPS } from '../data/portfolioData';

interface HowIWorkSectionProps {
  onOpenHireMe?: () => void;
}

export const HowIWorkSection: React.FC<HowIWorkSectionProps> = ({ onOpenHireMe }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#0B5ED7]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#0B5ED7]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#0B5ED7]" />;
      default:
        return <Search className="w-5 h-5 text-[#0B5ED7]" />;
    }
  };

  return (
    <section id="how-i-work" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <span>MY METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            HOW I WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            A systematic 6-stage process engineered to turn strategic ideas into revenue-generating campaigns, conversion-focused assets, and scalable digital systems.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HOW_I_WORK_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              id={`how-i-work-step-${index + 1}`}
              className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#0B5ED7]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Step Tag & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-white text-[#0B5ED7] border border-[#0B5ED7]/20 shadow-2xs group-hover:bg-[#0B5ED7] group-hover:text-white transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-2xs group-hover:border-[#0B5ED7]/30 transition-colors">
                    {getIcon(stepItem.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-black text-[#062B63] mb-2 tracking-tight group-hover:text-[#0B5ED7] transition-colors">
                  {stepItem.title}
                </h3>

                {/* Core Description */}
                <p className="text-sm text-[#0B1F3A] font-medium leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              {/* Focus Area Pill */}
              <div className="pt-4 border-t border-[#E2E8F0]/70 flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-semibold">{stepItem.focusArea}</span>
                <span className="text-[#0B5ED7] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Phase {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        {onOpenHireMe && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenHireMe}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Ready to Start with Step 01? Let's Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
