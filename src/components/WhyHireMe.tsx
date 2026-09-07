import React from 'react';
import { 
  TrendingUp, 
  Palette, 
  Cpu, 
  Sparkles, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const WhyHireMe: React.FC = () => {
  // Exactly the 5 cards specified by the user
  const reasons = [
    {
      number: '01',
      title: 'RESULTS-FOCUSED',
      subtitle: 'Commercially Driven',
      description: 'I focus on business objectives, not just creating content or launching campaigns.',
      icon: <TrendingUp className="w-6 h-6 text-[#0B5ED7]" />,
      detail: 'Every dollar spent on ads and every design asset created is judged by actual business impact: leads, sales, and measurable growth.',
    },
    {
      number: '02',
      title: 'MARKETING + DESIGN',
      subtitle: 'Strategy Meets Creative',
      description: 'I understand both the strategy behind an advertisement and the creative that communicates the message.',
      icon: <Palette className="w-6 h-6 text-[#0B5ED7]" />,
      detail: 'Eliminating the disconnect between the copywriter, media buyer, and visual designer by engineering creatives that convert.',
    },
    {
      number: '03',
      title: 'MARKETING + TECHNOLOGY',
      subtitle: 'Full-Funnel Integration',
      description: 'I can connect advertising campaigns with landing pages, websites, tracking and digital systems.',
      icon: <Cpu className="w-6 h-6 text-[#0B5ED7]" />,
      detail: 'Setting up CAPI, Meta pixels, high-speed landing pages, and instant CRM hooks to prevent lead leakage across the funnel.',
    },
    {
      number: '04',
      title: 'AI-POWERED',
      subtitle: 'Speed & Leverage',
      description: 'I use modern AI tools to improve speed, creativity, research, automation and digital workflows.',
      icon: <Sparkles className="w-6 h-6 text-[#0B5ED7]" />,
      detail: 'Harnessing generative AI models and automation webhooks to deliver faster campaign turnarounds and continuous testing.',
    },
    {
      number: '05',
      title: 'BUSINESS-MINDED',
      subtitle: 'Market & Offer Savvy',
      description: 'I approach digital work with an understanding of audiences, offers, conversion and business growth.',
      icon: <Briefcase className="w-6 h-6 text-[#0B5ED7]" />,
      detail: 'Evaluating unit economics, value propositions, and customer retention to build lasting competitive advantage.',
    },
  ];

  return (
    <section id="why-hire-me" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B5ED7]" />
            <span>WHY HIRE ME?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            More Than a Marketer. A Digital Problem Solver.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Businesses do not just need another freelancer—they need an accountable growth partner who bridges marketing strategy, high-converting visual design, and technology.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 || idx === 4
                  ? 'bg-gradient-to-b from-[#F8FAFC] to-white border-[#0B5ED7]/30 shadow-xs hover:shadow-xl hover:border-[#0B5ED7]'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#0B5ED7]/45 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EFF6FF] transition-all shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-[#0B5ED7] px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20">
                    CARD {item.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-1 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-4">
                  {item.subtitle}
                </div>

                {/* Primary User Statement */}
                <p className="text-sm sm:text-base font-semibold text-[#0F172A] leading-relaxed mb-4">
                  &ldquo;{item.description}&rdquo;
                </p>

                {/* Supporting Practical Detail */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Commercial Verification */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#062B63]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>The Mr. Clarity Standard</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0B5ED7]" />
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Commercial Action Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B5ED7] via-[#0B5ED7] to-[#1D4ED8] text-white flex flex-col justify-between shadow-2xl shadow-[#0B5ED7]/30 border border-white/20 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-bold text-cyan-200 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S BUILD TOGETHER</span>
              </div>

              <h3 className="text-2xl font-black tracking-tight mb-3 text-white">
                Ready to Grow Your Business?
              </h3>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6">
                Whether you need a high-converting Meta Ads campaign, an AI landing page, or a complete brand overhaul, let&apos;s engineer a tailored strategy for your brand.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/20">
              <a
                href="#contact"
                className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-[#0B5ED7] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md group-hover:scale-[1.02]"
              >
                <span>Hire Mr. Clarity Now</span>
                <ArrowRight className="w-4 h-4 text-[#0B5ED7]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
