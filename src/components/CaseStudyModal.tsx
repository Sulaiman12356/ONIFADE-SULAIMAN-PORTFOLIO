import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  TrendingUp,
  FileText,
  Target,
  Users,
  Layers,
  Wrench,
  Smartphone,
  Monitor,
  Eye,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart2,
  ExternalLink,
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenHireMe: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenHireMe,
}) => {
  const [activeDevicePreview, setActiveDevicePreview] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  const isMetaAds =
    project.category.toUpperCase().includes('META') ||
    project.category.toUpperCase().includes('ADS') ||
    Boolean(project.metaAdsDetails);

  const isLandingPage =
    project.category.toUpperCase().includes('LANDING') ||
    Boolean(project.landingPageDetails);

  const hasVerified = Boolean(project.verifiedResults || project.hasVerifiedMetrics);

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-dialog"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top action bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase bg-[#EFF6FF] text-[#0B5ED7] border border-[#BFDBFE]">
              {project.category}
            </span>
            <span className="text-xs font-bold text-[#64748B] truncate max-w-[200px] sm:max-w-md">
              Case Study: {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#062B63] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 sm:p-8 space-y-8 text-left">
          
          {/* Header & Verification Indicator */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {hasVerified ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Verified Client Results &amp; Live Data</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
                  <FileText className="w-4 h-4 text-[#0B5ED7]" />
                  <span>Documented Project Scope &amp; Deliverables</span>
                </div>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#0B5ED7]">
              {project.subtitle}
            </p>

            {/* Meta tags bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs mt-4">
              <div>
                <div className="text-[#64748B] font-medium">Client / Org</div>
                <div className="font-bold text-[#062B63]">{project.client}</div>
              </div>
              <div>
                <div className="text-[#64748B] font-medium">My Role</div>
                <div className="font-bold text-[#062B63]">{project.role}</div>
              </div>
              <div>
                <div className="text-[#64748B] font-medium">Timeline</div>
                <div className="font-bold text-[#062B63]">{project.timeline || 'Completed'}</div>
              </div>
              <div>
                <div className="text-[#64748B] font-medium">Outcome Focus</div>
                <div className="font-black text-[#0B5ED7]">{project.metricHighlight}</div>
              </div>
            </div>
          </div>

          {/* Project Image Banner / Visual Preview */}
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#F1F5F9]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>

          {/* ======================================================= */}
          {/* SECTION TYPE A: META ADS CAMPAIGNS CASE STUDY STRUCTURE */}
          {/* ======================================================= */}
          {isMetaAds && project.metaAdsDetails && (
            <div className="space-y-6 pt-2">
              <div className="border-b border-[#E2E8F0] pb-3">
                <h3 className="text-lg font-black text-[#062B63] flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#0B5ED7]" />
                  <span>Meta Ads Campaign Architecture</span>
                </h3>
              </div>

              {/* Objective & Industry & Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE]">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#0B5ED7] mb-1">
                    Campaign Objective
                  </div>
                  <div className="text-sm font-bold text-[#062B63]">
                    {project.metaAdsDetails.campaignObjective}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#64748B] mb-1">
                    Business &amp; Industry
                  </div>
                  <div className="text-sm font-bold text-[#062B63]">
                    {project.metaAdsDetails.businessIndustry}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#64748B] mb-1">
                    Target Audience
                  </div>
                  <div className="text-sm font-bold text-[#062B63]">
                    {project.metaAdsDetails.targetAudience}
                  </div>
                </div>
              </div>

              {/* Strategy & Creative Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-2 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#0B5ED7]" />
                    <span>Campaign Strategy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {project.metaAdsDetails.strategy}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-2 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#0B5ED7]" />
                    <span>Creative Strategy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {project.metaAdsDetails.creativeStrategy}
                  </p>
                </div>
              </div>

              {/* Ad Setup & Funnel & Tracking */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-black text-[#062B63] mb-1">Ad Setup &amp; Formats</div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {project.metaAdsDetails.adSetup}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-black text-[#062B63] mb-1">Funnel Architecture</div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {project.metaAdsDetails.funnel}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-black text-[#062B63] mb-1">Tracking &amp; CAPI Setup</div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {project.metaAdsDetails.trackingSetup}
                  </p>
                </div>
              </div>

              {/* Optimization Strategy */}
              <div className="p-4 rounded-xl bg-[#EFF6FF]/60 border border-[#BFDBFE]">
                <div className="text-xs font-black uppercase tracking-wider text-[#0B5ED7] mb-1">
                  Optimization &amp; Scaling Strategy
                </div>
                <p className="text-xs sm:text-sm text-[#062B63] leading-relaxed">
                  {project.metaAdsDetails.optimizationStrategy}
                </p>
              </div>

              {/* Meta Ads Results & Metrics */}
              {project.metaAdsDetails.results && (
                <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-black uppercase tracking-wider text-[#166534] flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      <span>Verified Campaign Results</span>
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-white text-[#166534] border border-[#BBF7D0]">
                      Meta Ads Manager Data
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    {project.metaAdsDetails.results.reach && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">Reach</div>
                        <div className="text-lg font-black text-[#062B63]">{project.metaAdsDetails.results.reach}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.leads && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">Leads Generated</div>
                        <div className="text-lg font-black text-[#0B5ED7]">{project.metaAdsDetails.results.leads}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.cpl && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">Cost Per Lead</div>
                        <div className="text-lg font-black text-[#10B981]">{project.metaAdsDetails.results.cpl}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.roas && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">ROAS</div>
                        <div className="text-lg font-black text-[#10B981]">{project.metaAdsDetails.results.roas}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.ctr && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">CTR (Link)</div>
                        <div className="text-lg font-black text-[#062B63]">{project.metaAdsDetails.results.ctr}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.cpc && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">CPC</div>
                        <div className="text-lg font-black text-[#062B63]">{project.metaAdsDetails.results.cpc}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.impressions && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">Impressions</div>
                        <div className="text-lg font-black text-[#062B63]">{project.metaAdsDetails.results.impressions}</div>
                      </div>
                    )}
                    {project.metaAdsDetails.results.conversions && (
                      <div className="p-3 bg-white rounded-xl border border-[#BBF7D0]">
                        <div className="text-[10px] font-bold text-[#64748B] uppercase">Conversions</div>
                        <div className="text-lg font-black text-[#0B5ED7]">{project.metaAdsDetails.results.conversions}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ======================================================= */}
          {/* SECTION TYPE B: LANDING PAGE & WEBSITE CASE STUDY       */}
          {/* ======================================================= */}
          {isLandingPage && project.landingPageDetails && (
            <div className="space-y-6 pt-2">
              <div className="border-b border-[#E2E8F0] pb-3 flex items-center justify-between">
                <h3 className="text-lg font-black text-[#062B63] flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-[#0B5ED7]" />
                  <span>Landing Page &amp; Conversion System</span>
                </h3>

                {/* Desktop / Mobile Switcher */}
                <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl">
                  <button
                    onClick={() => setActiveDevicePreview('desktop')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                      activeDevicePreview === 'desktop'
                        ? 'bg-white text-[#062B63] shadow-xs'
                        : 'text-[#64748B]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                  <button
                    onClick={() => setActiveDevicePreview('mobile')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                      activeDevicePreview === 'mobile'
                        ? 'bg-white text-[#062B63] shadow-xs'
                        : 'text-[#64748B]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                </div>
              </div>

              {/* Screenshots Display */}
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] flex justify-center">
                {activeDevicePreview === 'desktop' ? (
                  <div className="w-full rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md bg-white">
                    <img
                      src={project.landingPageDetails.desktopScreenshot || project.thumbnail}
                      alt={`${project.title} Desktop View`}
                      className="w-full h-auto object-cover max-h-[400px]"
                    />
                  </div>
                ) : (
                  <div className="max-w-[280px] w-full rounded-2xl overflow-hidden border-4 border-[#062B63] shadow-xl bg-white">
                    <img
                      src={project.landingPageDetails.mobileScreenshot || project.thumbnail}
                      alt={`${project.title} Mobile View`}
                      className="w-full h-auto object-cover max-h-[450px]"
                    />
                  </div>
                )}
              </div>

              {/* Strategy & Conversion Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="text-xs font-black uppercase text-[#062B63] mb-1">
                    Design Strategy &amp; Visual Hierarchy
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {project.landingPageDetails.designStrategy}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="text-xs font-black uppercase text-[#062B63] mb-1">
                    Conversion Architecture
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {project.landingPageDetails.conversionStrategy}
                  </p>
                </div>
              </div>

              {/* 4 Conversion Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#64748B] text-[10px] uppercase">Primary CTA</div>
                  <div className="font-black text-[#0B5ED7] mt-0.5">{project.landingPageDetails.ctaText}</div>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#64748B] text-[10px] uppercase">Lead Capture</div>
                  <div className="font-bold text-[#062B63] mt-0.5">{project.landingPageDetails.leadCaptureMethod}</div>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#64748B] text-[10px] uppercase">Meta Ads Integration</div>
                  <div className="font-bold text-[#062B63] mt-0.5">{project.landingPageDetails.metaAdsIntegration}</div>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#64748B] text-[10px] uppercase">AI Tools Used</div>
                  <div className="font-bold text-[#0B5ED7] mt-0.5">{project.landingPageDetails.aiToolsUsed}</div>
                </div>
              </div>
            </div>
          )}

          {/* Standard Challenge & Solution (Always displayed for context) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-2 flex items-center gap-1.5">
                <span>The Challenge / Client Objective</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-2 flex items-center gap-1.5">
                <span>Execution &amp; Solution</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results OR Documented Work Completed */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />
              <span>{hasVerified ? 'Measurable Verified Outcomes' : 'Scope & Completed Deliverables'}</span>
            </h3>

            <div className="space-y-2">
              {project.results && project.results.length > 0 ? (
                project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm ${
                      hasVerified
                        ? 'bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#334155]'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${hasVerified ? 'text-[#10B981]' : 'text-[#0B5ED7]'}`} />
                    <span className="font-medium">{res}</span>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B]">
                  {project.workCompletedDescription || project.summary}
                </div>
              )}
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white">
              <h4 className="text-xs font-black text-[#062B63] uppercase tracking-wider mb-2">
                Deliverables Produced
              </h4>
              <ul className="space-y-1.5 text-xs text-[#64748B]">
                {project.deliverables && project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white">
              <h4 className="text-xs font-black text-[#062B63] uppercase tracking-wider mb-2">
                Tools &amp; Platforms Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools && project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#062B63] font-bold border border-[#E2E8F0]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#062B63]">
                Need a similar growth outcome for your business?
              </h4>
              <p className="text-xs text-[#0B5ED7] mt-0.5">
                Let's audit your current strategy and design an executable roadmap.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenHireMe();
              }}
              className="px-6 py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
