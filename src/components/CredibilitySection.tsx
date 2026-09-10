import React, { useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { BrandIcon, BrandIconName } from './BrandIcons';

interface ToolPlatform {
  name: string;
  brandKey: BrandIconName;
  purpose: string;
  category: 'Advertising & Growth' | 'Creative & Video' | 'AI & Automation' | 'Web & Tech';
  brandColor: string;
  accentBg: string;
}

export const CredibilitySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tools: ToolPlatform[] = [
    // Advertising & Growth
    {
      name: 'Meta Ads',
      brandKey: 'meta',
      purpose: 'Advertising and campaign management',
      category: 'Advertising & Growth',
      brandColor: 'text-[#0467DF]',
      accentBg: 'group-hover:bg-[#0467DF]/10',
    },
    {
      name: 'Facebook',
      brandKey: 'facebook',
      purpose: 'Audience targeting & community acquisition',
      category: 'Advertising & Growth',
      brandColor: 'text-[#0866FF]',
      accentBg: 'group-hover:bg-[#0866FF]/10',
    },
    {
      name: 'Instagram',
      brandKey: 'instagram',
      purpose: 'Visual storytelling & conversion ads',
      category: 'Advertising & Growth',
      brandColor: 'text-[#FF0069]',
      accentBg: 'group-hover:bg-[#FF0069]/10',
    },
    {
      name: 'TikTok',
      brandKey: 'tiktok',
      purpose: 'Short-form viral creatives & Spark Ads',
      category: 'Advertising & Growth',
      brandColor: 'text-slate-900',
      accentBg: 'group-hover:bg-slate-900/10',
    },
    {
      name: 'WhatsApp',
      brandKey: 'whatsapp',
      purpose: 'Direct lead closing & customer messaging',
      category: 'Advertising & Growth',
      brandColor: 'text-[#25D366]',
      accentBg: 'group-hover:bg-[#25D366]/10',
    },
    {
      name: 'LinkedIn',
      brandKey: 'linkedin',
      purpose: 'B2B lead generation & outreach campaigns',
      category: 'Advertising & Growth',
      brandColor: 'text-[#0A66C2]',
      accentBg: 'group-hover:bg-[#0A66C2]/10',
    },

    // Creative & Video
    {
      name: 'Canva',
      brandKey: 'canva',
      purpose: 'Graphics and visual content design',
      category: 'Creative & Video',
      brandColor: 'text-[#00C4CC]',
      accentBg: 'group-hover:bg-[#00C4CC]/10',
    },
    {
      name: 'CapCut',
      brandKey: 'capcut',
      purpose: 'Short-form video editing',
      category: 'Creative & Video',
      brandColor: 'text-slate-900',
      accentBg: 'group-hover:bg-slate-900/10',
    },
    {
      name: 'YouTube',
      brandKey: 'youtube',
      purpose: 'High-retention video content & ads',
      category: 'Creative & Video',
      brandColor: 'text-[#FF0000]',
      accentBg: 'group-hover:bg-[#FF0000]/10',
    },

    // AI & Automation
    {
      name: 'ChatGPT',
      brandKey: 'chatgpt',
      purpose: 'AI copy ideation & campaign strategy',
      category: 'AI & Automation',
      brandColor: 'text-[#10A37F]',
      accentBg: 'group-hover:bg-[#10A37F]/10',
    },
    {
      name: 'Claude',
      brandKey: 'claude',
      purpose: 'Deep reasoning & workflow content pipelines',
      category: 'AI & Automation',
      brandColor: 'text-[#D97757]',
      accentBg: 'group-hover:bg-[#D97757]/10',
    },
    {
      name: 'n8n',
      brandKey: 'n8n',
      purpose: 'Multi-app workflow automation & webhooks',
      category: 'AI & Automation',
      brandColor: 'text-[#EA4B71]',
      accentBg: 'group-hover:bg-[#EA4B71]/10',
    },
    {
      name: 'Google Meet',
      brandKey: 'googlemeet',
      purpose: 'Client discovery & strategy consultations',
      category: 'AI & Automation',
      brandColor: 'text-[#00897B]',
      accentBg: 'group-hover:bg-[#00897B]/10',
    },
    {
      name: 'Python',
      brandKey: 'python',
      purpose: 'Data automation scripts & web scrapers',
      category: 'AI & Automation',
      brandColor: 'text-[#3776AB]',
      accentBg: 'group-hover:bg-[#3776AB]/10',
    },

    // Web & Tech
    {
      name: 'Google',
      brandKey: 'google',
      purpose: 'Search analytics & business productivity',
      category: 'Web & Tech',
      brandColor: 'text-[#4285F4]',
      accentBg: 'group-hover:bg-[#4285F4]/10',
    },
    {
      name: 'Firebase',
      brandKey: 'firebase',
      purpose: 'Cloud databases & real-time app persistence',
      category: 'Web & Tech',
      brandColor: 'text-[#FFA611]',
      accentBg: 'group-hover:bg-[#FFA611]/10',
    },
    {
      name: 'GitHub',
      brandKey: 'github',
      purpose: 'Version control & continuous deployment',
      category: 'Web & Tech',
      brandColor: 'text-slate-900',
      accentBg: 'group-hover:bg-slate-900/10',
    },
    {
      name: 'React',
      brandKey: 'react',
      purpose: 'Interactive user interfaces & web apps',
      category: 'Web & Tech',
      brandColor: 'text-[#087EA4]',
      accentBg: 'group-hover:bg-[#087EA4]/10',
    },
    {
      name: 'Next.js',
      brandKey: 'nextjs',
      purpose: 'High-speed web platforms & SSR portals',
      category: 'Web & Tech',
      brandColor: 'text-slate-950',
      accentBg: 'group-hover:bg-slate-950/10',
    },
    {
      name: 'Node.js',
      brandKey: 'nodejs',
      purpose: 'Backend API runtimes & server services',
      category: 'Web & Tech',
      brandColor: 'text-[#5FA04E]',
      accentBg: 'group-hover:bg-[#5FA04E]/10',
    },
    {
      name: 'JavaScript',
      brandKey: 'javascript',
      purpose: 'Dynamic web interactions & client logic',
      category: 'Web & Tech',
      brandColor: 'text-[#D97706]',
      accentBg: 'group-hover:bg-[#D97706]/10',
    },
    {
      name: 'HTML5',
      brandKey: 'html5',
      purpose: 'Semantic structure & conversion landing pages',
      category: 'Web & Tech',
      brandColor: 'text-[#E34F26]',
      accentBg: 'group-hover:bg-[#E34F26]/10',
    },
    {
      name: 'CSS3',
      brandKey: 'css3',
      purpose: 'Responsive layouts & modern visual design',
      category: 'Web & Tech',
      brandColor: 'text-[#1572B6]',
      accentBg: 'group-hover:bg-[#1572B6]/10',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Tools' },
    { key: 'Advertising & Growth', label: 'Advertising & Growth' },
    { key: 'Creative & Video', label: 'Creative & Video' },
    { key: 'AI & Automation', label: 'AI & Automation' },
    { key: 'Web & Tech', label: 'Web & Tech' },
  ];

  const filteredTools = selectedCategory === 'all'
    ? tools
    : tools.filter((t) => t.category === selectedCategory);

  return (
    <section id="tools" className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header with Required Exact Title: TOOLS I WORK WITH */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[11px] font-black uppercase tracking-wider text-[#0B5ED7] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN ARSENAL &amp; PLATFORMS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062B63] tracking-tight uppercase">
            TOOLS I WORK WITH
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Verified official platforms, advertising channels, creative suites, AI agents, and web technologies I deploy to build high-converting client assets.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const count = cat.key === 'all' ? tools.length : tools.filter(t => t.category === cat.key).length;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B5ED7] text-white shadow-xs'
                      : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#062B63]'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid with Modern Cards: Real Logo + Tool Name + Short Purpose */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#0B5ED7]/40 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between gap-3 cursor-default"
            >
              {/* Real Logo with consistent icon sizing and hover animation */}
              <div
                className={`w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${tool.brandColor} ${tool.accentBg}`}
              >
                <BrandIcon name={tool.brandKey} size={24} className={tool.brandColor} />
              </div>

              {/* Tool Name & Purpose */}
              <div className="w-full">
                <span className="text-sm font-black text-[#062B63] block group-hover:text-[#0B5ED7] transition-colors">
                  {tool.name}
                </span>
                <p className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight mt-1 line-clamp-2">
                  {tool.purpose}
                </p>
              </div>

              {/* Subtle Tag */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md mt-auto">
                {tool.category.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
            <span>
              All trademarks and logos are the property of their respective owners and used strictly for professional qualification.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
