import React from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Target, 
  TrendingUp, 
  Cpu, 
  Sparkles, 
  Palette, 
  Layout, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Zap,
  Layers,
  Award
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import portraitImg from '../assets/images/portrait.jpg';

interface HeroProps {
  onOpenHireMe: () => void;
  onOpenCv: () => void;
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireMe, onOpenCv, onDownloadCv }) => {
  const { profile } = usePortfolio();
  const portraitSrc = profile.profilePhoto || portraitImg;

  const availableWorkTypes = [
    'Full-Time',
    'Freelance',
    'Contract',
    'Remote',
    'Consulting',
    'Collaboration',
  ];

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Background Ambience: Light blue glow and subtle geometric lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B5ED7]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#062B63]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Positioning, Exact Headlines & Conversion CTAs
              ======================================================== */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Badge: HELLO, I'M */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black tracking-wider text-[#0B5ED7] uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>HELLO, I'M</span>
            </div>

            {/* MAIN HEADING:
                ONIFADE SULAIMAN
                (MR. CLARITY)
            */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-black tracking-tight text-[#062B63] leading-[1.08] uppercase">
              ONIFADE SULAIMAN<br />
              <span className="text-[#0B5ED7]">
                (MR. CLARITY)
              </span>
            </h1>

            {/* PROFESSIONAL TITLE:
                Digital Marketer | Meta Ads Specialist | AI Digital Solutions Expert
            */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-black text-[#0B5ED7] uppercase tracking-wide">
              <span>Digital Marketer</span>
              <span className="text-slate-300 font-normal">|</span>
              <span>Meta Ads Specialist</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-[#062B63]">AI Digital Solutions Expert</span>
            </div>

            {/* DESCRIPTION:
                I help businesses attract customers, generate leads and build stronger digital brands through Meta Ads, AI-powered landing pages, social media, branding and automation.
            */}
            <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal max-w-2xl">
              I help businesses attract customers, generate leads and build stronger digital brands through Meta Ads, AI-powered landing pages, social media, branding and automation.
            </p>

            {/* Availability Indicator & Work Types */}
            <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              {/* Availability Indicator: ● AVAILABLE FOR WORK */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-700">
                  AVAILABLE FOR WORK
                </span>
              </div>

              {/* Available for list: Full-Time, Freelance, Contract, Remote, Consulting, Collaboration */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[#E2E8F0]">
                <span className="text-xs font-bold text-[#64748B] mr-1">Available for:</span>
                {availableWorkTypes.map((type) => (
                  <span
                    key={type}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#062B63] hover:border-[#0B5ED7] hover:bg-[#EFF6FF] transition-colors"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Three CTAs:
                Primary CTA: HIRE ME →
                Secondary CTA: VIEW MY WORK →
                Third CTA: DOWNLOAD CV ↓
            */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <button
                id="hero-primary-hire-me-btn"
                onClick={onOpenHireMe}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-white bg-[#0B5ED7] hover:bg-[#1D4ED8] shadow-lg shadow-[#0B5ED7]/25 hover:shadow-xl transition-all active:scale-[0.98] text-sm sm:text-base tracking-wide cursor-pointer"
              >
                <span>HIRE ME</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-secondary-view-work-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-black text-[#062B63] bg-white hover:bg-[#EFF6FF] border-2 border-[#062B63] shadow-xs hover:border-[#0B5ED7] hover:text-[#0B5ED7] transition-all active:scale-[0.98] text-sm sm:text-base tracking-wide cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Third CTA */}
              <button
                id="hero-third-download-cv-btn"
                onClick={onDownloadCv}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-[#0B5ED7] bg-[#EFF6FF] hover:bg-blue-100 border border-[#0B5ED7]/30 shadow-xs transition-all active:scale-[0.98] text-sm sm:text-base tracking-wide cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Immediate Proof Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-[#64748B]">
              <div className="flex items-center gap-1.5 text-[#062B63]">
                <ShieldCheck className="w-4 h-4 text-[#0B5ED7]" />
                <span>$500K+ Ad Spend Managed</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-[#062B63]">
                <TrendingUp className="w-4 h-4 text-[#0B5ED7]" />
                <span>4.8x Campaign ROAS</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-[#062B63]">
                <Award className="w-4 h-4 text-[#0B5ED7]" />
                <span>500+ Students Mentored</span>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT SIDE: Professional Portrait with Premium Visual Composition
              • White background
              • Navy blue shape
              • Light blue glow
              • Subtle graphical elements
              • Digital marketing icons
              • AI/technology elements
              • Communicates: DIGITAL MARKETING + AI + DESIGN
              ======================================================== */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* 1. Light Blue Glow (Backdrop ambient diffusion) */}
              <div 
                className="absolute -inset-4 sm:-inset-6 bg-[#0B5ED7]/25 rounded-[3rem] blur-3xl -z-20 pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -top-10 -right-10 w-72 h-72 bg-[#EFF6FF] rounded-full blur-2xl -z-20 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* 2. Royal Blue Geometric Shape (Stylized geometric backdrop shape) */}
              <div 
                className="absolute inset-2 sm:inset-3 bg-gradient-to-tr from-[#0B5ED7] via-[#0B5ED7] to-[#1D4ED8] rounded-3xl transform rotate-3 sm:rotate-4 shadow-2xl transition-transform duration-500 hover:rotate-2 -z-10" 
                aria-hidden="true"
              >
                {/* Subtle graphical grid inside royal blue backdrop */}
                <div className="w-full h-full opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl" />
              </div>

              {/* 3. White Background Composition Container */}
              <div className="relative bg-white rounded-3xl p-3.5 sm:p-4 shadow-2xl border-2 border-[#E2E8F0] overflow-visible">
                
                {/* Top Badge communicating: DIGITAL MARKETING + AI + DESIGN */}
                <div className="mb-3 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-white">
                      DIGITAL MARKETING + AI + DESIGN
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#EFF6FF]">
                    <Target className="w-3.5 h-3.5 text-cyan-200" />
                    <Cpu className="w-3.5 h-3.5 text-cyan-200" />
                    <Palette className="w-3.5 h-3.5 text-cyan-200" />
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] sm:aspect-[3/4] max-h-[500px] w-full border border-[#E2E8F0] group">
                  <img
                    src={portraitSrc}
                    alt="Onifade Sulaiman (Mr. Clarity) - Digital Marketer & AI Specialist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Gradient Shadow Overlay for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B63] via-[#062B63]/25 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Overlay Bottom Identity & Verified Mark */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-[#0B5ED7] text-[10px] font-black tracking-widest uppercase">
                        VERIFIED EXPERT
                      </span>
                      <span className="text-[11px] text-slate-200 font-semibold">
                        Founder, Clarity Digital Academy
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {profile.name || PERSONAL_INFO.name}
                    </div>
                    <div className="text-xs font-bold text-[#EFF6FF] flex items-center gap-1.5 mt-0.5">
                      <span>({profile.brandName || PERSONAL_INFO.brandName})</span>
                      <span>•</span>
                      <span>Meta Ads &amp; AI Digital Solutions</span>
                    </div>
                  </div>

                  {/* Subtle Graphical Elements: Tech Crosshairs in Corners */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none" />
                </div>

                {/* Floating Elements Around the Composition */}
                
                {/* Floating Badge 1: Digital Marketing (Meta Ads & ROAS) */}
                <div 
                  id="hero-floating-badge-marketing"
                  className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-[#E2E8F0] flex items-center gap-3 z-20 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/25 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#0B5ED7]" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#062B63] flex items-center gap-1">
                      <span>Meta &amp; TikTok Ads</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-[11px] font-bold text-[#64748B]">
                      $500K+ Spend • 4.8x ROAS
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: AI & Technology Elements */}
                <div 
                  id="hero-floating-badge-ai"
                  className="absolute -top-4 -right-3 sm:-right-6 bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-white/20 flex items-center gap-3 z-20 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 text-white">
                    <Cpu className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white flex items-center gap-1">
                      <span>AI Digital Solutions</span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                    </div>
                    <div className="text-[11px] font-semibold text-blue-100">
                      Workflows, LLMs &amp; Funnels
                    </div>
                  </div>
                </div>

                {/* Subtle Graphical Floating Pill: Brand & Creative Design */}
                <div 
                  id="hero-floating-badge-design"
                  className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border border-[#E2E8F0] hidden sm:flex items-center gap-2 z-20"
                >
                  <Palette className="w-4 h-4 text-[#0B5ED7]" />
                  <div className="text-[11px] font-black text-[#062B63] whitespace-nowrap">
                    Brand Design &amp; Systems
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
