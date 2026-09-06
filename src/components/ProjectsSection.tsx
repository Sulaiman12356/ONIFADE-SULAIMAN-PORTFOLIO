import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  onOpenHireMe: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy, onOpenHireMe }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Marketing', 'Design', 'Data', 'Branding'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F5F9FF]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3">
            <span>PROVEN PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-4">
            FEATURED CASE STUDIES &amp; <span className="text-[#0B5ED7]">PROJECTS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Real client campaigns, design systems, and data analytics dashboards engineered to solve business bottlenecks and maximize conversions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-[#0B5ED7] text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-[#64748B] hover:text-[#062B63] hover:bg-slate-100 border border-[#E5EAF1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5EAF1] shadow-sm hover:shadow-lg hover:border-[#0B5ED7]/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#062B63] border border-[#E5EAF1]">
                  {project.category}
                </div>

                {/* Top Badge: Metric Highlight */}
                <div className="absolute top-3 right-3 bg-[#062B63]/90 text-white backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold">
                  {project.metricHighlight}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#0B5ED7] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#0B5ED7] font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech & Deliverable tags */}
                <div className="space-y-3 pt-3 border-t border-[#E5EAF1]/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F5F9FF] text-[#062B63] border border-[#E5EAF1]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Case Study Action */}
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#F5F9FF] text-xs font-bold text-[#062B63] group-hover:text-[#0B5ED7] border border-[#E5EAF1] transition-colors"
                  >
                    <span>View Detailed Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0B5ED7]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenHireMe}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white border border-[#E5EAF1] text-sm font-bold text-[#062B63] hover:bg-[#062B63] hover:text-white shadow-sm transition-all"
          >
            <span>Have a Custom Project in Mind? Let&apos;s Build It</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
