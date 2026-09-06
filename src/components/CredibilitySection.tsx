import React from 'react';
import { 
  Target, 
  Share2, 
  Palette, 
  Video, 
  Globe, 
  MessageCircle, 
  Bot, 
  Cpu, 
  Sparkles, 
  Code2, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface ToolPlatform {
  name: string;
  category: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export const CredibilitySection: React.FC = () => {
  // Exactly the 12 tools and platforms requested by user
  const toolsAndPlatforms: ToolPlatform[] = [
    {
      name: 'Meta Ads',
      category: 'Paid Advertising',
      icon: <Target className="w-5 h-5 text-[#0B5ED7]" />,
      highlight: true,
    },
    {
      name: 'Facebook',
      category: 'Audience & Growth',
      icon: <Share2 className="w-5 h-5 text-[#062B63]" />,
    },
    {
      name: 'Instagram',
      category: 'Visual Content & Ads',
      icon: <Palette className="w-5 h-5 text-pink-600" />,
    },
    {
      name: 'TikTok',
      category: 'Short-Form & Spark Ads',
      icon: <Video className="w-5 h-5 text-slate-900" />,
    },
    {
      name: 'Canva',
      category: 'Brand & Ad Design',
      icon: <Palette className="w-5 h-5 text-cyan-600" />,
      highlight: true,
    },
    {
      name: 'CapCut',
      category: 'Video Editing',
      icon: <Video className="w-5 h-5 text-slate-800" />,
    },
    {
      name: 'Google',
      category: 'Search & Ecosystem',
      icon: <Globe className="w-5 h-5 text-[#0B5ED7]" />,
    },
    {
      name: 'WhatsApp',
      category: 'Lead Routing & CRM',
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
      highlight: true,
    },
    {
      name: 'ChatGPT',
      category: 'AI Strategy & Copy',
      icon: <Bot className="w-5 h-5 text-emerald-700" />,
    },
    {
      name: 'Claude',
      category: 'AI Research & Reasoning',
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    },
    {
      name: 'AI Tools',
      category: 'Workflows & Systems',
      icon: <Cpu className="w-5 h-5 text-[#0B5ED7]" />,
      highlight: true,
    },
    {
      name: 'Web Technologies',
      category: 'Landing Pages & Apps',
      icon: <Code2 className="w-5 h-5 text-[#062B63]" />,
    },
  ];

  return (
    <section id="tools" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header with Required Exact Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[11px] font-black uppercase tracking-wider text-[#0B5ED7] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL STACK &amp; ARSENAL</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight uppercase">
            TOOLS &amp; PLATFORMS I WORK WITH
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Platforms, advertising channels, and digital tools I deploy to generate leads, build brands, and automate client acquisition.
          </p>
        </div>

        {/* 12 Graphical Tool Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {toolsAndPlatforms.map((tool, idx) => (
            <div
              key={idx}
              className={`group p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center justify-between gap-3 ${
                tool.highlight
                  ? 'bg-gradient-to-b from-[#EFF6FF]/70 to-white border-[#0B5ED7]/30 shadow-xs hover:border-[#0B5ED7] hover:shadow-md'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#0B5ED7]/35 hover:shadow-md'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>

              <div>
                <span className="text-xs sm:text-sm font-black text-[#062B63] block group-hover:text-[#0B5ED7] transition-colors">
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
              Disclaimer: These represent platforms, software, and tools I work with or use in client workflows. Not an endorsement, partnership, or employment.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
