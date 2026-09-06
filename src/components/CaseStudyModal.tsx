import React from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, Layers, ArrowUpRight, Calendar, User, Briefcase } from 'lucide-react';
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
  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="case-study-modal-dialog"
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5EAF1] relative"
      >
        {/* Sticky top action bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5EAF1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase bg-[#F5F9FF] text-[#0B5ED7] border border-[#E5EAF1]">
              {project.category}
            </span>
            <span className="text-xs font-bold text-[#64748B] truncate max-w-[220px] sm:max-w-xs">
              Case Study • {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Header & Thumbnail */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#0B5ED7]">
              {project.subtitle}
            </p>

            {/* Meta tags bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1] text-xs">
              <div>
                <div className="text-[#64748B] font-medium">Client / Org</div>
                <div className="font-bold text-[#0B1F3A]">{project.client}</div>
              </div>
              <div>
                <div className="text-[#64748B] font-medium">My Role</div>
                <div className="font-bold text-[#0B1F3A]">{project.role}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[#64748B] font-medium">Key Impact</div>
                <div className="font-extrabold text-[#0B5ED7]">{project.metricHighlight}</div>
              </div>
            </div>
          </div>

          {/* Project Image Banner */}
          <div className="rounded-2xl overflow-hidden border border-[#E5EAF1] bg-slate-100">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>

          {/* The Challenge */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
              <span>The Problem & Context</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#0B1F3A] leading-relaxed bg-[#F5F9FF]/50 p-4 rounded-xl border border-[#E5EAF1]">
              {project.challenge}
            </p>
          </div>

          {/* The Strategy & Solution */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
              <span>Strategy & Execution</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#0B1F3A] leading-relaxed p-4 rounded-xl bg-white border border-[#E5EAF1]">
              {project.solution}
            </p>
          </div>

          {/* Measurable Results */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#0B5ED7]" />
              <span>Measurable Business Results</span>
            </h3>

            <div className="space-y-2">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1] text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B1F3A] font-medium">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-[#E5EAF1]">
              <h4 className="text-xs font-bold text-[#062B63] uppercase tracking-wider mb-2">
                Deliverables Produced
              </h4>
              <ul className="space-y-1.5 text-xs text-[#64748B]">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-[#E5EAF1]">
              <h4 className="text-xs font-bold text-[#062B63] uppercase tracking-wider mb-2">
                Tools & Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold text-[#062B63]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-[#E5EAF1] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#E5EAF1] text-xs font-bold text-[#64748B] hover:bg-slate-50 transition-colors"
            >
              Back to Projects
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenHireMe();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-sm transition-colors"
            >
              <span>Discuss Similar Project with Mr. Clarity</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
