import React from 'react';
import { Download, Eye, Send, ArrowUpRight, ShieldCheck, Clock, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ResumeSectionProps {
  onOpenCv: () => void;
  onDownloadCv: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCv, onDownloadCv }) => {
  const {
    profile,
    activeCv,
    downloadActiveCv,
    openHireMe,
    experience,
    education,
    skills,
    setIsAdminOpen,
    setAdminActiveTab,
  } = usePortfolio();

  const handleRequestCv = () => {
    openHireMe('Collaboration', 'Formal CV & Professional Dossier Request');
  };

  const handleOpenAdminCvManager = () => {
    setAdminActiveTab('cv_manager');
    setIsAdminOpen(true);
  };

  return (
    <section id="cv" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative, Metadata & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>MY CV</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight leading-tight">
              Interested in Working With Me?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Review my track record, verified credentials, and strategic marketing expertise. Download the active CV directly or explore the full interactive version online.
            </p>

            {/* Dynamic CV Metadata Pills */}
            <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#062B63] font-bold">
                <Tag className="w-4 h-4 text-[#0B5ED7]" />
                <span>Active Version:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0B5ED7] font-black text-xs border border-[#0B5ED7]/20">
                  {activeCv?.version || 'v2.6'}
                </span>
              </div>

              <div className="h-4 w-px bg-[#E2E8F0] hidden sm:block" />

              <div className="flex items-center gap-2 text-[#062B63] font-medium">
                <Clock className="w-4 h-4 text-[#0B5ED7]" />
                <span className="text-[#64748B] font-normal">Updated:</span>
                <span className="font-bold text-[#062B63]">
                  {activeCv?.date || 'September 2026'}
                </span>
              </div>
            </div>

            {/* Credibility highlights */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
                <span>Meta Certified Digital Marketing Associate &amp; Meta Ads Specialist</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
                <span>Proven track record across full-funnel lead generation and landing pages</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
                <span>Dynamically managed in real-time through Admin Dashboard</span>
              </div>
            </div>

            {/* Two Main Action Buttons:
                [ DOWNLOAD CV ↓ ]
                [ VIEW CV ONLINE ]
            */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="btn-download-latest-cv"
                onClick={downloadActiveCv}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-black text-white bg-[#0B5ED7] hover:bg-[#1D4ED8] shadow-md shadow-[#0B5ED7]/25 hover:shadow-lg transition-all text-sm active:scale-[0.98] cursor-pointer"
              >
                <span>DOWNLOAD CV ↓</span>
              </button>

              <button
                id="btn-view-cv-online"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-[#062B63] bg-white hover:bg-[#EFF6FF] border border-[#E2E8F0] shadow-xs transition-all text-sm hover:border-[#0B5ED7] cursor-pointer"
              >
                <span>VIEW CV ONLINE</span>
                <Eye className="w-4 h-4 text-[#0B5ED7]" />
              </button>
            </div>

            {/* Admin shortcut indicator */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#64748B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>Admin can upload or switch active CV files anytime.</span>
              <button
                onClick={handleOpenAdminCvManager}
                className="text-[#0B5ED7] font-bold hover:underline ml-1"
              >
                CV Manager →
              </button>
            </div>

          </div>

          {/* Right Column: Professional CV Document Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              id="cv-preview-card"
              onClick={onOpenCv}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 sm:p-8 cursor-pointer hover:shadow-2xl hover:border-[#0B5ED7]/40 transition-all duration-300 group hover:-translate-y-0.5"
              title="Click to view full interactive CV document"
            >
              {/* Expand badge */}
              <div className="absolute top-5 right-5 bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[#062B63] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 group-hover:bg-[#062B63] group-hover:text-white transition-colors">
                <span>Click to Expand</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              {/* Document Header */}
              <div className="border-b border-[#E2E8F0] pb-4 mb-4">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-[#062B63] text-white flex items-center justify-center font-black text-base shadow-sm">
                    {profile.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase() || 'OS'}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#062B63] tracking-tight">
                      {profile.name.toUpperCase()}
                    </h3>
                    <p className="text-xs font-bold text-[#0B5ED7]">
                      ({profile.brandName || 'MR. CLARITY'}) • Digital Marketer &amp; AI Specialist
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#64748B] flex flex-wrap gap-x-2">
                  <span>{profile.email}</span>
                  <span>•</span>
                  <span>{profile.phone}</span>
                  <span>•</span>
                  <span>{profile.location}</span>
                </p>
              </div>

              {/* Dynamic Body Content */}
              <div className="space-y-4 text-xs">
                {/* Summary */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E2E8F0] pb-1 mb-1.5 flex items-center justify-between">
                    <span>Executive Summary</span>
                    <span className="text-[10px] text-[#64748B] font-normal">Active {activeCv?.version || 'v2.6'}</span>
                  </h4>
                  <p className="text-[#64748B] line-clamp-2 leading-relaxed font-normal">
                    {profile.bio || 'Results-driven Digital Marketer, Meta Ads Specialist, Brand Designer, and AI Automation Specialist with 2+ years of demonstrated success helping ambitious brands, startups, and founders scale customer acquisition.'}
                  </p>
                </div>

                {/* Experience Preview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E2E8F0] pb-1 mb-1.5">
                    Recent Experience ({experience.length || 2} Roles)
                  </h4>
                  <div className="space-y-2">
                    {experience.length > 0 ? (
                      experience.slice(0, 2).map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between font-bold text-[#062B63]">
                            <span>{exp.role}</span>
                            <span className="text-[#64748B] font-normal text-[11px]">
                              {exp.startDate} – {exp.endDate}
                            </span>
                          </div>
                          <div className="text-[#0B5ED7] font-semibold text-[11px]">
                            {exp.organization}
                          </div>
                          <p className="text-[#64748B] text-[11px] line-clamp-1 mt-0.5">
                            {exp.achievements?.[0] || exp.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <>
                        <div>
                          <div className="flex justify-between font-bold text-[#062B63]">
                            <span>Lead Digital Marketing &amp; Meta Ads Specialist</span>
                            <span className="text-[#64748B] font-normal text-[11px]">2024 – Present</span>
                          </div>
                          <div className="text-[#0B5ED7] font-semibold text-[11px]">
                            Mr. Clarity Digital Solutions
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-bold text-[#062B63]">
                            <span>Brand Designer &amp; Social Media Manager</span>
                            <span className="text-[#64748B] font-normal text-[11px]">2024 – Present</span>
                          </div>
                          <div className="text-[#0B5ED7] font-semibold text-[11px]">
                            Independent &amp; Client Projects
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Core Competencies tags preview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E2E8F0] pb-1 mb-1.5">
                    Core Specializations &amp; Arsenal
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Meta Ads (FB & IG)', 'TikTok Ads', 'AI Landing Pages & CRO', 'Brand Design & Systems', 'AI Automations & Zapier', 'Canva Pro Master', 'React & TypeScript'].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0B5ED7] text-[10px] font-bold border border-[#0B5ED7]/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Accent */}
              <div className="mt-5 pt-3 border-t border-dashed border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Document: {activeCv?.title || 'Master Marketing CV'}</span>
                </span>
                <span className="text-[#0B5ED7] font-black">
                  Version {activeCv?.version || 'v2.6'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
