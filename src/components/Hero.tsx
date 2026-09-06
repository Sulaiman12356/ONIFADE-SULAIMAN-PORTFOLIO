import React, { useState } from 'react';
import { ArrowRight, Download, CheckCircle2, ShieldCheck, Zap, Target, BarChart3, Users, Send, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenHireMe: () => void;
  onOpenCv: () => void;
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireMe, onOpenCv, onDownloadCv }) => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: 'Digital Marketing & Paid Ads',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Mr. Clarity! My name is ${quickForm.name || 'Client'}. I'm interested in ${quickForm.service}. WhatsApp: ${quickForm.whatsapp}, Email: ${quickForm.email}. Let's work together!`
    );
    window.open(`https://wa.me/2348061234567?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden bg-[#08183A] text-white"
    >
      {/* Background ambient lighting matching canvadesigntraining.vercel.app */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0B5ED7]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle background tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Main Pitch & Core Value */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top pill badge matching template */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00D2FF]/40 text-xs font-bold tracking-wider text-[#00D2FF] uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
                <span>VERIFIED PRO • 3+ YEARS • DIGITAL GROWTH &amp; AI</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-bold text-emerald-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            {/* Hero Headline with Cyan Highlight matching template */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Elevate Your Brand &amp; Scale Revenue With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#60A5FA]">
                Mr. Clarity
              </span>
            </h1>

            {/* Sub-headline / Identity */}
            <div className="text-sm sm:text-base font-semibold text-slate-300 flex flex-wrap items-center gap-2">
              <span className="text-white font-bold">Onifade Sulaiman</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#00D2FF]">Digital Marketer</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#00D2FF]">Graphics Designer</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#00D2FF]">Data Analyst</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#00D2FF]">AI Innovator</span>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              I combine technology, creative design, and data analytics to help ambitious businesses communicate with clarity, scale digital marketing ROI, and make smarter commercial decisions.
            </p>

            {/* 4 Feature Pills matching the 4 template bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#0B5ED7]/30 flex items-center justify-center text-[#00D2FF] flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">$500K+ Ad Spend Managed</div>
                  <div className="text-slate-300 text-[11px]">Meta &amp; TikTok Ads Expert</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#0B5ED7]/30 flex items-center justify-center text-[#00D2FF] flex-shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">4.8x Average ROAS</div>
                  <div className="text-slate-300 text-[11px]">High-Converting Ad Campaigns</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#0B5ED7]/30 flex items-center justify-center text-[#00D2FF] flex-shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Power BI &amp; SQL Dashboards</div>
                  <div className="text-slate-300 text-[11px]">Automated Business Insights</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#0B5ED7]/30 flex items-center justify-center text-[#00D2FF] flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">500+ Trained &amp; 50+ Projects</div>
                  <div className="text-slate-300 text-[11px]">Founder, Clarity Digital Academy</div>
                </div>
              </div>
            </div>

            {/* Template Punchy Bar with Yellow Highlight */}
            <div className="p-3.5 rounded-xl bg-[#0B2554] border border-white/15 text-xs sm:text-sm text-slate-200">
              <span className="font-bold tracking-wide">
                PROVEN STRATEGIES THAT CAN{' '}
                <span className="text-[#FFB800] font-black uppercase underline decoration-[#FFB800]/50 decoration-2 underline-offset-4">
                  TRANSFORM YOUR BUSINESS
                </span>{' '}
                FOREVER.
              </span>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-hire-me-btn"
                onClick={onOpenHireMe}
                className="bg-gradient-to-r from-[#0B5ED7] to-[#2563EB] hover:from-[#2563EB] hover:to-[#00D2FF] text-white px-8 py-4 rounded-xl font-bold flex items-center shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-[0.98] text-base"
              >
                <span>Hire Me Now</span>
                <span className="ml-2">→</span>
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={onDownloadCv}
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white px-7 py-4 rounded-xl font-bold flex items-center transition-all active:scale-[0.98] text-base"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 ml-2 text-[#00D2FF]" />
              </button>

              <a
                id="hero-view-work-link"
                href="#projects"
                className="text-[#00D2FF] hover:text-white font-bold underline underline-offset-8 transition-colors text-sm py-2 px-2"
              >
                View Case Studies →
              </a>
            </div>

            {/* Work Arrangements Strip */}
            <div className="pt-3 flex flex-wrap gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest border-t border-white/10">
              <span>Full-time</span>
              <span>•</span>
              <span>Part-time</span>
              <span>•</span>
              <span>Freelance</span>
              <span>•</span>
              <span>Remote Worldwide</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Conversion Form Card + Portrait Mockup matching template */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Template Lead Capture Card: "SECURE YOUR CONSULTATION" */}
            <div className="w-full bg-white text-[#0B1F3A] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-white/90 relative overflow-hidden">
              {/* Header inside the form */}
              <div className="mb-5 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08183A] text-[#00D2FF] text-[11px] font-black tracking-widest uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SECURE YOUR CONSULTATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#062B63] tracking-tight">
                  Work Directly With Mr. Clarity
                </h3>
                <p className="text-xs text-[#64748B] mt-1 font-medium">
                  Enter your details for immediate response via WhatsApp &amp; Email.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold text-[#062B63] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      placeholder="e.g. John Doe / Acme Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/15 outline-none text-[#0B1F3A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#062B63] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/15 outline-none text-[#0B1F3A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#062B63] mb-1">
                      WhatsApp Number (For Instant Chat) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quickForm.whatsapp}
                      onChange={(e) => setQuickForm({ ...quickForm, whatsapp: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/15 outline-none text-[#0B1F3A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#062B63] mb-1">
                      Service / Role Needed *
                    </label>
                    <select
                      value={quickForm.service}
                      onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/15 outline-none text-[#0B1F3A] bg-white font-medium"
                    >
                      <option value="Digital Marketing & Paid Ads">Digital Marketing &amp; Meta/TikTok Ads</option>
                      <option value="Canva & Brand Identity Design">Canva &amp; Brand Graphics Design</option>
                      <option value="Data Analytics & Power BI">Data Analytics &amp; Power BI Dashboards</option>
                      <option value="AI Workflow & Automations">AI Tools &amp; Workflow Automation</option>
                      <option value="Full-time / Fractional Growth Lead">Full-time / Fractional Growth Lead</option>
                      <option value="Canva Corporate Masterclass">Canva Corporate Masterclass / Training</option>
                    </select>
                  </div>

                  {/* High-conversion CTA button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#062B63] via-[#0B5ED7] to-[#2563EB] hover:from-[#0B5ED7] hover:to-[#00D2FF] text-white font-black text-sm tracking-wide uppercase shadow-lg shadow-blue-900/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                  >
                    <span>YES! I WANT TO WORK WITH SULAIMAN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#64748B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your information is 100% confidential &amp; protected</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-[#062B63]">
                    Inquiry Submitted!
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Opening WhatsApp to connect with Mr. Clarity directly. You can also view the full online CV or review featured projects below.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#062B63] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

              {/* Portrait & Credentials Mini-Bar at bottom of card */}
              <div className="mt-5 pt-4 border-t border-[#E5EAF1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Onifade Sulaiman"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#0B5ED7]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#062B63]">
                      Onifade Sulaiman
                    </div>
                    <div className="text-[10px] font-semibold text-[#0B5ED7]">
                      Mr. Clarity • OOU Computer Science
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-[#64748B]">
                    Rating
                  </div>
                  <div className="text-xs font-black text-amber-500">
                    ★ 4.9 / 5.0
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
