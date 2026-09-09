import React, { useState } from 'react';
import { 
  Target, 
  Layout, 
  Palette, 
  Share2, 
  Cpu, 
  Video, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Layers,
  Search
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ExpertiseCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  skills: string[];
  keyOutcome: string;
}

export const SkillsSection: React.FC = () => {
  const { openHireMe } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Exactly the 7 categories requested by user
  const categories: ExpertiseCategory[] = [
    {
      id: 'digital-marketing',
      name: 'DIGITAL MARKETING',
      icon: <Target className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'High-ROAS customer acquisition, campaign strategy and lead generation',
      skills: [
        'Meta Ads',
        'Facebook Ads',
        'Instagram Ads',
        'TikTok Ads',
        'Lead Generation',
        'Campaign Strategy',
        'Marketing Strategy',
      ],
      keyOutcome: 'Profitable customer acquisition, qualified leads and positive advertising ROI.',
    },
    {
      id: 'landing-pages',
      name: 'LANDING PAGES AND FUNNELS',
      icon: <Layout className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Conversion focused landing pages and lead capture systems',
      skills: [
        'Landing Page Design',
        'Conversion Focused Design',
        'Lead Capture',
        'Meta Pixel Integration',
        'WhatsApp Integration',
      ],
      keyOutcome: 'Higher conversion rates and seamless message or inquiry capture.',
    },
    {
      id: 'branding-design',
      name: 'BRANDING AND DESIGN',
      icon: <Palette className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Professional visual design, logos and marketing materials',
      skills: [
        'Canva',
        'Brand Design',
        'Logo Design',
        'Social Media Design',
        'Marketing Graphics',
      ],
      keyOutcome: 'Elevated perceived brand trust, consistency and market credibility.',
    },
    {
      id: 'social-media',
      name: 'SOCIAL MEDIA',
      icon: <Share2 className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Consistent content planning, design and community management',
      skills: [
        'Facebook',
        'Instagram',
        'TikTok',
        'WhatsApp',
        'Content Planning',
        'Social Media Management',
      ],
      keyOutcome: 'Sustainable brand community, authority and organic customer engagement.',
    },
    {
      id: 'ai-automation',
      name: 'AI AND AUTOMATION',
      icon: <Cpu className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Practical AI tools, prompt systems and workflow automation',
      skills: [
        'ChatGPT',
        'Claude',
        'AI Tools',
        'AI Workflows',
        'Marketing Automation',
        'Prompt Engineering',
      ],
      keyOutcome: 'Reduced operational overhead, faster execution and automated follow-ups.',
    },
    {
      id: 'development',
      name: 'DEVELOPMENT',
      icon: <Code2 className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Practical websites, modern web apps and digital platforms',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Firebase',
        'AI Website Development',
        'Web Applications',
      ],
      keyOutcome: 'Robust, fast and responsive digital solutions tailored to business needs.',
    },
    {
      id: 'video',
      name: 'VIDEO',
      icon: <Video className="w-5 h-5 text-[#0B5ED7]" />,
      tagline: 'Scroll-stopping short form videos, reels and promotional edits',
      skills: [
        'CapCut',
        'Short Form Video',
        'Reels',
        'Social Media Video Editing',
      ],
      keyOutcome: 'Engaging video content with clear hooks and subtitles that convert.',
    },
  ];

  // Filter categories based on active tab and search query
  const displayedCategories = categories.filter((cat) => {
    const matchesTab = activeCategory === 'all' || cat.id === activeCategory;
    if (!matchesTab) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesName = cat.name.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesName || matchesSkill;
  });

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER: MY DIGITAL MARKETING EXPERTISE
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63] uppercase">
            MY DIGITAL MARKETING EXPERTISE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            A strategic breakdown of my capabilities across paid acquisition, conversion funnels, brand design, AI automation, video creatives, and digital systems.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE CONTROLS: Category Tabs & Search
            ======================================================== */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          {/* Scrollable / Wrap Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0B5ED7] text-white shadow-md shadow-[#0B5ED7]/25'
                  : 'bg-white text-[#64748B] hover:text-[#0B5ED7] border border-[#E2E8F0] hover:border-[#0B5ED7]/30'
              }`}
            >
              All Categories
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#0B5ED7] text-white shadow-md shadow-[#0B5ED7]/25'
                    : 'bg-white text-[#64748B] hover:text-[#0B5ED7] border border-[#E2E8F0] hover:border-[#0B5ED7]/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Filter Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Meta Ads, Canva)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#062B63] placeholder-[#94A3B8] focus:outline-none focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/15 transition-all"
            />
          </div>

        </div>

        {/* ========================================================
            CATEGORY CARDS GRID (7 Categorized Sections)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-7 border border-[#E2E8F0] hover:border-[#0B5ED7]/45 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Category Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#0B5ED7]/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#062B63] group-hover:text-white transition-all shadow-2xs">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-black text-[#0B5ED7] px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20">
                    CATEGORY 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-1.5 tracking-tight">
                  {cat.name}
                </h3>

                <p className="text-xs text-[#64748B] mb-5 font-medium">
                  {cat.tagline}
                </p>

                {/* Skills Badges Grid */}
                <div className="pt-4 border-t border-[#E2E8F0] space-y-2 mb-6">
                  <div className="text-[11px] font-black text-[#062B63] uppercase tracking-wider mb-2">
                    Core Skills &amp; Platforms:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] group-hover:border-[#0B5ED7]/25 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome Pill */}
                <div className="p-3 rounded-xl bg-[#EFF6FF]/60 border border-[#0B5ED7]/15 mb-4">
                  <div className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-wider mb-0.5">
                    Commercial Impact:
                  </div>
                  <div className="text-xs text-[#062B63] font-medium leading-relaxed">
                    {cat.keyOutcome}
                  </div>
                </div>
              </div>

              {/* Inquire Action Button */}
              <div className="pt-3 border-t border-[#E2E8F0]">
                <button
                  onClick={() => openHireMe(undefined, cat.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EFF6FF] hover:bg-[#0B5ED7] text-[#0B5ED7] hover:text-white border border-[#0B5ED7]/20 hover:border-[#0B5ED7] font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs group/btn"
                >
                  <span>Inquire for {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B5ED7] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Fallback if search yields no result */}
        {displayedCategories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8">
            <p className="text-sm font-bold text-[#062B63] mb-2">No matching skills found for &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-[#64748B] mb-4">Try searching for Meta Ads, Canva, CapCut, or AI Automation.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-[#0B5ED7]/25"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
