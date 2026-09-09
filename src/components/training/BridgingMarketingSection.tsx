import React from 'react';
import { ArrowRight, Download, Compass, Target, Layout, Sparkles, Cpu, ExternalLink } from 'lucide-react';
import sulaimanImg from '../../assets/images/onifade.jpg';

interface BridgingMarketingSectionProps {
  onOpenHireMe: () => void;
  onOpenCv: () => void;
  onViewMoreApproach?: () => void;
}

export const BridgingMarketingSection: React.FC<BridgingMarketingSectionProps> = ({
  onOpenHireMe,
  onOpenCv,
  onViewMoreApproach,
}) => {
  return (
    <section id="marketing-philosophy" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header matching brighing.png */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            Bridging Marketing Psychology, <br className="hidden sm:inline" />
            Design & AI Technology.
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Known professionally as <strong className="text-[#0B1F3A] font-bold">Mr. Clarity</strong>, I help
            forward-thinking companies, startups, and founders cut through the digital noise and turn traffic into
            predictable commercial revenue.
          </p>
        </div>

        {/* Content Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Portrait with Ad Spend Stats and Academy Tag */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-[4/5]">
                <img
                  src={sulaimanImg}
                  alt="Onifade Sulaiman - Mr. Clarity"
                  className="w-full h-full object-cover object-top"
                />

                {/* Overlaid stats pill at bottom of photo matching brighing.png */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/80 shadow-md flex items-center justify-between text-left">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      AD SPEND MANAGED
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#0B1F3A]">
                      ₦500,000+
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      AVERAGE ROAS
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#0B5ED7]">
                      4.5x Return
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Academy Tag Box */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#062B63] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                  CDA
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#062B63]">
                    Founder, Clarity Digital Academy
                  </div>
                  <div className="text-xs text-slate-500">
                    Empowered 500+ students in practical design and digital skills.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Growth Architect Narrative & 4 Unification Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight">
                  Not Just a Marketer. A Digital Growth Architect.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  In today's hyper-competitive digital landscape, running ads without a high-converting landing page
                  is wasted money. Designing pretty graphics without marketing psychology fails to convert. And building
                  software without an acquisition funnel leaves products unnoticed.
                </p>
                <p className="mt-3 text-sm sm:text-base font-semibold text-[#0B1F3A]">
                  My work eliminates these silos by unifying the entire commercial chain:
                </p>
              </div>

              {/* 4 Pillars Grid (2x2) matching marketer.png */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* 1. Paid Meta & TikTok Ads */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0B5ED7] flex items-center justify-center mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-1.5">
                    Paid Meta & TikTok Ads
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Architecting profitable multi-stage acquisition funnels, targeting high-intent audiences, and scaling ad spend profitably.
                  </p>
                </div>

                {/* 2. High-Converting Landing Pages */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0B5ED7] flex items-center justify-center mb-3">
                    <Layout className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-1.5">
                    High-Converting Landing Pages
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designing fast, conversion-optimized landing pages with direct-response copywriting that turn clicks into qualified leads.
                  </p>
                </div>

                {/* 3. Brand Identity & Visual Authority */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0B5ED7] flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-1.5">
                    Brand Identity & Visual Authority
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Crafting distinctive visual identities, logos, and high-impact social media assets that position brands as category leaders.
                  </p>
                </div>

                {/* 4. AI Systems & Workflow Automation */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0B5ED7] flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-1.5">
                    AI Systems & Workflow Automation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Building instant lead nurture sequences, CRM automations, and custom AI tools to accelerate operations and lower costs.
                  </p>
                </div>
              </div>

              {/* Action Buttons matching brighing.png */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  id="bridging-hire-me-btn"
                  onClick={onOpenHireMe}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <span>Hire Mr. Clarity</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="bridging-view-cv-btn"
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#062B63] font-bold text-sm border border-slate-200 shadow-xs cursor-pointer"
                >
                  <span>View Full CV</span>
                  <Download className="w-4 h-4" />
                </button>

                {onViewMoreApproach && (
                  <button
                    onClick={onViewMoreApproach}
                    className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0B5ED7] transition-colors inline-flex items-center gap-1 cursor-pointer ml-auto"
                  >
                    <span>Read more about my approach →</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
