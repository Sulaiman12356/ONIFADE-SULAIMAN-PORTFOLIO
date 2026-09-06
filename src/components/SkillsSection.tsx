import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Compass, 
  Cpu, 
  BarChart2, 
  Share2, 
  ShieldAlert,
  ArrowUpRight 
} from 'lucide-react';
import { TOOLS_LIST, SKILL_PERCENTAGES, BEYOND_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [showAllTools, setShowAllTools] = useState(false);

  const displayedTools = showAllTools ? TOOLS_LIST : TOOLS_LIST.slice(0, 8);

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Tools & Platforms I Use */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3">
            <span>TECH ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-3">
            TOOLS &amp; <span className="text-[#0B5ED7]">CORE COMPETENCIES</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            A specialized stack of industry-standard tools for high-converting advertising, visual branding, and automated data intelligence.
          </p>
        </div>

        {/* Tools Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {displayedTools.map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-[#E5EAF1] bg-white hover:bg-[#F5F9FF] hover:border-[#0B5ED7]/30 shadow-sm transition-all group"
            >
              <div className={`w-10 h-10 rounded-lg ${tool.iconBg} ${tool.iconColor} flex items-center justify-center font-bold text-sm border border-black/5`}>
                {tool.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-bold text-[#0B1F3A] truncate group-hover:text-[#0B5ED7] transition-colors">
                  {tool.name}
                </div>
                <div className="text-[11px] text-[#64748B] truncate">
                  {tool.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Skills Toggle Button */}
        <div className="text-center mb-20">
          <button
            onClick={() => setShowAllTools(!showAllTools)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#062B63] bg-[#F5F9FF] hover:bg-[#062B63] hover:text-white border border-[#E5EAF1] transition-all"
          >
            <span>{showAllTools ? 'Collapse Tools List' : 'View All Skills & Tools'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Split: What I'm Great At & Beyond Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Progress Bars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                CORE COMPETENCIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mt-1">
                What I&apos;m Great At
              </h3>
            </div>

            <div className="space-y-5">
              {SKILL_PERCENTAGES.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[#0B1F3A]">
                      {skill.name}
                    </span>
                    <span className="font-extrabold text-[#0B5ED7]">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-2.5 w-full rounded-full bg-[#E5EAF1] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#062B63] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Beyond Skills (Deep Navy Card) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#062B63] text-white p-7 sm:p-9 shadow-xl border border-white/10 relative overflow-hidden">
              {/* Background gradient sphere */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B5ED7]/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 text-xs font-bold tracking-wider uppercase">
                  <span>HOLISTIC CAPABILITY</span>
                </div>

                <h4 className="text-2xl font-extrabold text-white tracking-tight">
                  Beyond Skills
                </h4>

                <p className="text-sm text-white/80 leading-relaxed">
                  I combine technical depth with creativity, business acumen, and a growth mindset to deliver solutions that produce tangible financial and brand impact.
                </p>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  {BEYOND_SKILLS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
                    <span className="text-white font-bold">Philosophy:</span> &quot;Execution without measurement is guesswork; measurement without execution is pointless.&quot;
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
