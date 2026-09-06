import React from 'react';
import { Download, Eye, Send, ArrowUpRight, ShieldCheck, Clock, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ResumeSectionProps {
  onOpenCv: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCv }) => {
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
    <section id="cv" className="py-20 sm:py-28 bg-[#F5F9FF]/80 relative border-t border-[#E5EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative, Metadata & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>MY CV</span>
            </div>

            {/* Exact Heading Requested */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight leading-tight">
              Want to Know More About My Experience?
            </h2>

            {/* Exact Description Requested */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Download my latest CV or view my professional profile online.
            </p>

            {/* Dynamic CV Metadata Pills */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5EAF1] shadow-xs flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#062B63] font-bold">
                <Tag className="w-4 h-4 text-[#0B5ED7]" />
                <span>CV Version:</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#0B5ED7] font-extrabold text-xs border border-blue-100">
                  {activeCv?.version || 'v2.5'}
                </span>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-[#062B63] font-medium">
                <Clock className="w-4 h-4 text-[#0B5ED7]" />
                <span className="text-slate-500 font-normal">Last Updated:</span>
                <span className="font-bold text-[#062B63]">
                  {activeCv?.date || 'September 2026'}
                </span>
              </div>
            </div>

            {/* Credibility highlights */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1F3A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Verified academic track: B.Sc. Computer Science • OOU</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1F3A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Meta Certified Digital Marketing Associate &amp; $500K+ ad spend</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1F3A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Dynamic document: Updated automatically via Admin Dashboard</span>
              </div>
            </div>

            {/* Three Exact Requested Buttons:
                [ Download Latest CV ]
                [ View CV Online ]
                [ Request CV ]
            */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="btn-download-latest-cv"
                onClick={downloadActiveCv}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#062B63] hover:bg-[#0B5ED7] shadow-md shadow-blue-900/10 transition-all text-sm active:scale-[0.98]"
              >
                <span>Download Latest CV</span>
                <Download className="w-4 h-4" />
              </button>

              <button
                id="btn-view-cv-online"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-[#062B63] bg-white hover:bg-slate-50 border border-[#CBD5E1] shadow-xs transition-all text-sm hover:border-[#0B5ED7]"
              >
                <span>View CV Online</span>
                <Eye className="w-4 h-4 text-[#0B5ED7]" />
              </button>

              <button
                id="btn-request-cv"
                onClick={handleRequestCv}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-[#0B5ED7] bg-blue-50 hover:bg-blue-100/80 border border-blue-200 shadow-xs transition-all text-sm"
              >
                <span>Request CV</span>
                <Send className="w-4 h-4 text-[#0B5ED7]" />
              </button>
            </div>

            {/* Admin shortcut indicator */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>Admin can upload, version, or replace this CV in the dashboard.</span>
              <button
                onClick={handleOpenAdminCvManager}
                className="text-[#0B5ED7] font-bold hover:underline ml-1"
              >
                Manage CV →
              </button>
            </div>

          </div>

          {/* Right Column: Professional CV Document Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              id="cv-preview-card"
              onClick={onOpenCv}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-xl border border-[#E5EAF1] p-6 sm:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              title="Click to view full interactive CV document"
            >
              {/* Expand badge */}
              <div className="absolute top-5 right-5 bg-[#F5F9FF] border border-[#E5EAF1] text-[#062B63] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 opacity-90 group-hover:bg-[#062B63] group-hover:text-white transition-colors">
                <span>Click to Expand</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              {/* Document Header */}
              <div className="border-b border-[#E5EAF1] pb-4 mb-4">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#062B63] text-white flex items-center justify-center font-black text-base shadow-sm">
                    {profile.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase() || 'OS'}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0B1F3A] tracking-tight">
                      {profile.name.toUpperCase()}
                    </h3>
                    <p className="text-xs font-bold text-[#0B5ED7]">
                      ({profile.brandName.toUpperCase()}) • {profile.title}
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
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E5EAF1] pb-1 mb-1.5 flex items-center justify-between">
                    <span>Executive Summary</span>
                    <span className="text-[10px] text-slate-400 font-normal">Active {activeCv?.version || 'v2.5'}</span>
                  </h4>
                  <p className="text-[#64748B] line-clamp-2 leading-relaxed">
                    {profile.bio}
                  </p>
                </div>

                {/* Experience Preview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E5EAF1] pb-1 mb-1.5">
                    Recent Experience ({experience.length} Roles)
                  </h4>
                  <div className="space-y-2">
                    {experience.slice(0, 2).map((exp) => (
                      <div key={exp.id}>
                        <div className="flex justify-between font-bold text-[#0B1F3A]">
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
                    ))}
                  </div>
                </div>

                {/* Education Preview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E5EAF1] pb-1 mb-1.5">
                    Education
                  </h4>
                  {education.slice(0, 1).map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between font-bold text-[#0B1F3A]">
                        <span>{edu.degree}</span>
                        <span className="text-[#64748B] font-normal text-[11px]">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[#64748B] text-[11px]">
                        {edu.institution} • {edu.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills tags preview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#062B63] border-b border-[#E5EAF1] pb-1 mb-1.5">
                    Featured Skills &amp; Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skills
                      .filter((s) => s.featured)
                      .slice(0, 6)
                      .map((item) => (
                        <span
                          key={item.id}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-[#0B1F3A] text-[10px] font-semibold"
                        >
                          {item.skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Bottom Paper Accent */}
              <div className="mt-5 pt-3 border-t border-dashed border-[#E5EAF1] flex items-center justify-between text-[11px] text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active CV: {activeCv?.title || 'Master CV'}</span>
                </span>
                <span className="text-[#0B5ED7] font-black">
                  Version {activeCv?.version || 'v2.5'} ({activeCv?.date || 'September 2026'})
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
