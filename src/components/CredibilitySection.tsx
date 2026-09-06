import React from 'react';
import { 
  Sparkles, 
  Info,
  CheckCircle2
} from 'lucide-react';

interface ToolBadge {
  name: string;
  category: string;
  iconType: string;
}

export const CredibilitySection: React.FC = () => {
  const tools: ToolBadge[] = [
    { name: 'Canva', category: 'Design', iconType: 'canva' },
    { name: 'Meta', category: 'Ecosystem', iconType: 'meta' },
    { name: 'Facebook Ads', category: 'Paid Media', iconType: 'fb' },
    { name: 'Instagram', category: 'Social & Ads', iconType: 'ig' },
    { name: 'TikTok', category: 'Video & Ads', iconType: 'tiktok' },
    { name: 'Google', category: 'Search & Analytics', iconType: 'google' },
    { name: 'Microsoft', category: 'Ecosystem', iconType: 'microsoft' },
    { name: 'Power BI', category: 'Business Intelligence', iconType: 'powerbi' },
    { name: 'SQL', category: 'Database Querying', iconType: 'sql' },
    { name: 'Python', category: 'Data & Scripting', iconType: 'python' },
    { name: 'CapCut', category: 'Video Editing', iconType: 'capcut' },
    { name: 'Adobe', category: 'Creative Suite', iconType: 'adobe' },
  ];

  const renderToolIcon = (type: string) => {
    switch (type) {
      case 'canva':
        return (
          <span className="w-5 h-5 rounded-md bg-[#00C4CC] text-white text-[11px] font-black italic flex items-center justify-center font-serif">
            C
          </span>
        );
      case 'meta':
        return (
          <span className="text-[#0668E1] font-black text-sm">
            ∞
          </span>
        );
      case 'fb':
        return (
          <span className="w-5 h-5 rounded-md bg-[#1877F2] text-white text-xs font-bold flex items-center justify-center">
            f
          </span>
        );
      case 'ig':
        return (
          <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white text-[10px] font-bold flex items-center justify-center">
            📸
          </span>
        );
      case 'tiktok':
        return (
          <span className="w-5 h-5 rounded-md bg-black text-white text-[11px] font-bold flex items-center justify-center">
            🎵
          </span>
        );
      case 'google':
        return (
          <span className="text-[#4285F4] font-bold text-sm">
            G
          </span>
        );
      case 'microsoft':
        return (
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
            <span className="bg-[#F25022] rounded-[1px]"></span>
            <span className="bg-[#7FBA00] rounded-[1px]"></span>
            <span className="bg-[#00A4EF] rounded-[1px]"></span>
            <span className="bg-[#FFB900] rounded-[1px]"></span>
          </div>
        );
      case 'powerbi':
        return (
          <span className="w-5 h-5 rounded-md bg-[#F2C811] text-black text-[10px] font-black flex items-center justify-center">
            📊
          </span>
        );
      case 'sql':
        return (
          <span className="w-5 h-5 rounded-md bg-[#003B57] text-white text-[9px] font-bold flex items-center justify-center">
            SQL
          </span>
        );
      case 'python':
        return (
          <span className="w-5 h-5 rounded-md bg-[#3776AB] text-white text-[9px] font-bold flex items-center justify-center">
            Py
          </span>
        );
      case 'capcut':
        return (
          <span className="w-5 h-5 rounded-md bg-black text-white text-[10px] font-black flex items-center justify-center">
            ✂️
          </span>
        );
      case 'adobe':
        return (
          <span className="w-5 h-5 rounded-md bg-[#FF0000] text-white text-[10px] font-black flex items-center justify-center">
            A
          </span>
        );
      default:
        return <span className="w-2 h-2 rounded-full bg-blue-500" />;
    }
  };

  return (
    <section 
      id="credibility-section" 
      className="py-12 bg-white border-b border-[#E5EAF1] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header requested: "Built Across Technology, Creativity & Digital Growth" */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-[11px] font-bold tracking-widest text-[#0B5ED7] uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
            <span>TECHNOLOGY &amp; PLATFORM ECOSYSTEM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
            Built Across Technology, Creativity &amp; Digital Growth
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] mt-2 font-normal">
            A versatile toolkit spanning advertising platforms, creative suites, data engineering, and programming environments.
          </p>
        </div>

        {/* Clean horizontal logo/tool strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              id={`tool-badge-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E5EAF1] hover:border-[#0B5ED7] hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default group"
              title={`${tool.name} (${tool.category})`}
            >
              <div className="flex items-center justify-center flex-shrink-0">
                {renderToolIcon(tool.iconType)}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#0B5ED7] transition-colors leading-tight">
                  {tool.name}
                </span>
                <span className="text-[10px] text-[#64748B] leading-none">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional & Transparent Disclaimer requested:
            "Do NOT falsely imply that I am officially employed, certified or partnered with any company simply because their software is listed. These are tools/platforms I work with or learn/use." */}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E5EAF1] text-[11px] text-[#64748B]">
            <Info className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
            <span>
              <strong>Professional Notice:</strong> These are tools, technologies, and platforms I actively work with, study, or deploy in client and personal projects. Listing does not imply official employment, corporate endorsement, or sponsorship.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
