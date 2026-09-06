import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, Sparkles, Wrench, User, Trophy } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  onOpenHireMe: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy, onOpenHireMe }) => {
  const { projects } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'META ADS',
    'LANDING PAGES',
    'BRANDING',
    'SOCIAL MEDIA',
    'AI & AUTOMATION',
    'WEB DEVELOPMENT',
    'VIDEO',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => {
        const cat = p.category.toUpperCase();
        if (activeCategory === 'META ADS') return cat.includes('META') || cat.includes('ADS');
        if (activeCategory === 'LANDING PAGES') return cat.includes('LANDING');
        if (activeCategory === 'BRANDING') return cat.includes('BRAND');
        if (activeCategory === 'SOCIAL MEDIA') return cat.includes('SOCIAL');
        if (activeCategory === 'AI & AUTOMATION') return cat.includes('AI') || cat.includes('AUTO');
        if (activeCategory === 'WEB DEVELOPMENT') return cat.includes('WEB') || cat.includes('DEV');
        if (activeCategory === 'VIDEO') return cat.includes('VIDEO') || cat.includes('CONTENT');
        return cat === activeCategory;
      });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            SELECTED WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Real projects, campaigns, designs and digital solutions.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#062B63] text-white shadow-md shadow-[#062B63]/15'
                    : 'bg-white text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasVerified = Boolean(project.verifiedResults || project.hasVerifiedMetrics);
            const outcomeText = project.results || project.outcome || project.metricHighlight || project.summary;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-black text-[#062B63] border border-[#E2E8F0] shadow-2xs">
                      {project.category}
                    </div>

                    {/* Real vs Documented Badge */}
                    <div className="absolute top-3 right-3">
                      {hasVerified ? (
                        <div className="bg-[#10B981] text-white px-2.5 py-1 rounded-lg text-[10px] font-black flex items-center gap-1 shadow-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified Result</span>
                        </div>
                      ) : (
                        <div className="bg-[#0B1F3A]/90 text-white backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                          <FileText className="w-3 h-3 text-[#60A5FA]" />
                          <span>Work Completed</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Main Info */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {project.summary || project.challenge}
                    </p>

                    {/* My Role */}
                    <div className="flex items-center gap-2 text-xs text-[#0B1F3A] mb-3 bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                      <User className="w-3.5 h-3.5 text-[#0B5ED7] shrink-0" />
                      <span className="font-semibold text-[#64748B]">My Role:</span>
                      <span className="font-bold text-[#062B63] truncate">{project.role}</span>
                    </div>

                    {/* Outcome (Verified or Completed Work) */}
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#062B63] mb-1">
                        <Trophy className="w-3.5 h-3.5 text-[#0B5ED7]" />
                        <span>Outcome:</span>
                      </div>
                      <p className={`text-xs p-2.5 rounded-xl font-medium leading-relaxed ${
                        hasVerified
                          ? 'bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0] font-semibold'
                          : 'bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]'
                      }`}>
                        {outcomeText}
                      </p>
                    </div>

                    {/* Tools Used */}
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#64748B] mb-2">
                        <Wrench className="w-3 h-3" />
                        <span>Tools Used:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools && project.tools.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F1F5F9] text-[#0B1F3A] border border-[#E2E8F0]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* View Case Study CTA Button */}
                <div className="px-6 pb-6 pt-2 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                  >
                    <span>View Case Study →</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenHireMe}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#062B63] text-white hover:bg-[#0B5ED7] text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Have a Specific Campaign or Design in Mind? Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
