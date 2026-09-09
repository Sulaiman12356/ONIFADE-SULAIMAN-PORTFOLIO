import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { BrandIcon } from './BrandIcons';

interface ToolPlatform {
  name: string;
  brandKey:
    | 'meta'
    | 'facebook'
    | 'instagram'
    | 'tiktok'
    | 'whatsapp'
    | 'canva'
    | 'capcut'
    | 'chatgpt'
    | 'claude'
    | 'firebase'
    | 'google'
    | 'github'
    | 'linkedin';
  category: string;
  brandColor: string;
}

export const CredibilitySection: React.FC = () => {
  // Exactly the 13 tools requested by user
  const tools: ToolPlatform[] = [
    { name: 'Meta Ads', brandKey: 'meta', category: 'Paid Advertising', brandColor: 'text-[#0B5ED7]' },
    { name: 'Facebook', brandKey: 'facebook', category: 'Audience & Social', brandColor: 'text-[#1877F2]' },
    { name: 'Instagram', brandKey: 'instagram', category: 'Visual Social & Ads', brandColor: 'text-[#E4405F]' },
    { name: 'TikTok', brandKey: 'tiktok', category: 'Short-Form & Ads', brandColor: 'text-slate-900' },
    { name: 'Canva', brandKey: 'canva', category: 'Brand & Graphic Design', brandColor: 'text-[#00C4CC]' },
    { name: 'CapCut', brandKey: 'capcut', category: 'Video Editing & Reels', brandColor: 'text-slate-900' },
    { name: 'WhatsApp', brandKey: 'whatsapp', category: 'Lead Routing & Comms', brandColor: 'text-[#25D366]' },
    { name: 'ChatGPT', brandKey: 'chatgpt', category: 'AI Strategy & Copy', brandColor: 'text-[#10A37F]' },
    { name: 'Claude', brandKey: 'claude', category: 'AI Reasoning & Workflows', brandColor: 'text-[#D97706]' },
    { name: 'Firebase', brandKey: 'firebase', category: 'Backend & Cloud DB', brandColor: 'text-[#FFA611]' },
    { name: 'Google', brandKey: 'google', category: 'Analytics & Search', brandColor: 'text-[#EA4335]' },
    { name: 'GitHub', brandKey: 'github', category: 'Code & Version Control', brandColor: 'text-slate-900' },
    { name: 'LinkedIn', brandKey: 'linkedin', category: 'Professional Network', brandColor: 'text-[#0A66C2]' },
  ];

  return (
    <section id="tools" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header with Required Exact Title: TOOLS I WORK WITH */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[11px] font-black uppercase tracking-wider text-[#0B5ED7] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE TOOL STACK</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight uppercase">
            TOOLS I WORK WITH
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Platforms, advertising channels, design software, and digital tools I deploy to generate leads, build brands, and automate business workflows.
          </p>
        </div>

        {/* 13 Graphical Tool Badges Grid with Real Brand SVGs, Logo + Name, Clean Spacing & Hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#0B5ED7]/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between gap-3 cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform ${tool.brandColor}`}>
                <BrandIcon name={tool.brandKey} size={22} className={tool.brandColor} />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-black text-[#062B63] block group-hover:text-[#0B5ED7] transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#64748B] font-semibold block mt-0.5">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#64748B] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
            <span>
              These represent tools, software, and platforms I work with and deploy in client projects.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
