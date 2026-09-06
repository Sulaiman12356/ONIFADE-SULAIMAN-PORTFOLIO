import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Target, 
  Palette, 
  Cpu, 
  TrendingUp, 
  Award, 
  Users, 
  Sparkles,
  Layout
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenCv: () => void;
  onOpenHireMe: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv, onOpenHireMe }) => {
  const { profile } = usePortfolio();
  const portraitSrc = profile.profilePhoto || PERSONAL_INFO.portraitImage;
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);

  const corePillars = [
    {
      title: 'Paid Meta & TikTok Ads',
      desc: 'Architecting profitable multi-stage acquisition funnels, targeting high-intent audiences, and scaling ad spend profitably.',
      icon: <Target className="w-5 h-5 text-[#0B5ED7]" />,
    },
    {
      title: 'High-Converting Landing Pages',
      desc: 'Designing fast, conversion-optimized landing pages with direct-response copywriting that turn clicks into qualified leads.',
      icon: <Layout className="w-5 h-5 text-[#0B5ED7]" />,
    },
    {
      title: 'Brand Identity & Visual Authority',
      desc: 'Crafting distinctive visual identities, logos, and high-impact social media assets that position brands as category leaders.',
      icon: <Palette className="w-5 h-5 text-[#0B5ED7]" />,
    },
    {
      title: 'AI Systems & Workflow Automation',
      desc: 'Building instant lead nurture sequences, CRM automations, and custom AI tools to accelerate operations and lower costs.',
      icon: <Cpu className="w-5 h-5 text-[#0B5ED7]" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <span>ABOUT ONIFADE SULAIMAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            Bridging Marketing Psychology, Design &amp; AI Technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Known professionally as <span className="font-bold text-[#062B63]">Mr. Clarity</span>, I help forward-thinking companies, startups, and founders cut through the digital noise and turn traffic into predictable commercial revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Portrait Image with Rounded Cards & Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#F8FAFC] border-2 border-[#E2E8F0] shadow-xl p-2">
                <img
                  src={portraitSrc}
                  alt="Onifade Sulaiman (Mr. Clarity)"
                  className="w-full h-auto aspect-4/5 object-cover object-top rounded-xl"
                />

                {/* Floating Metric Badge 1 */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E2E8F0] shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                      Ad Spend Managed
                    </div>
                    <div className="text-xl font-black text-[#062B63]">
                      $500,000+
                    </div>
                  </div>
                  <div className="h-8 w-px bg-[#E2E8F0]" />
                  <div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                      Average ROAS
                    </div>
                    <div className="text-xl font-black text-[#0B5ED7]">
                      4.8x Return
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Tag */}
              <div className="mt-4 p-4 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#062B63] text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                  CDA
                </div>
                <div>
                  <div className="text-xs font-bold text-[#062B63]">
                    Founder, Clarity Digital Academy
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Empowered 500+ students in practical design and digital skills.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Journey & Core Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-base text-[#0F172A] leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
                Not Just a Marketer. A Digital Growth Architect.
              </h3>
              
              <p className="text-[#64748B]">
                In today&apos;s hyper-competitive digital landscape, running ads without a high-converting landing page is wasted money. Designing pretty graphics without marketing psychology fails to convert. And building software without an acquisition funnel leaves products unnoticed.
              </p>

              <p className="text-[#0F172A] font-medium">
                My work eliminates these silos by unifying the entire commercial chain:
              </p>
            </div>

            {/* 4 Pillars in Card-Based Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B5ED7]/40 hover:bg-[#EFF6FF]/40 transition-all space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 shadow-xs">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-[#062B63]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Expandable Philosophy */}
            {isMoreAboutOpen && (
              <div className="p-5 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/25 text-sm text-[#062B63] space-y-3 animate-in fade-in">
                <h4 className="font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
                  <span>The "Mr. Clarity" Philosophy</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Clarity is the ultimate competitive advantage in business. When your messaging is clear, your audience pays attention. When your offer is clear, prospects convert. When your visual identity is cohesive, your perceived value skyrockets. Everything I create is rooted in mathematical clarity, rapid iteration, and verifiable business ROI.
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenHireMe}
                className="bg-[#062B63] hover:bg-[#0B5ED7] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-md shadow-[#062B63]/15 transition-all text-sm active:scale-[0.98]"
              >
                <span>Hire Mr. Clarity</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCv}
                className="bg-white hover:bg-[#EFF6FF] border-2 border-[#0B5ED7] text-[#0B5ED7] px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition-all text-sm shadow-xs"
              >
                <span>View Full CV</span>
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMoreAboutOpen(!isMoreAboutOpen)}
                className="text-xs font-bold text-[#64748B] hover:text-[#062B63] underline underline-offset-4 py-2"
              >
                {isMoreAboutOpen ? 'Show less' : 'Read more about my approach →'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
