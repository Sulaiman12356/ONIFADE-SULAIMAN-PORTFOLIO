import React, { useState } from 'react';
import { 
  Target, 
  Layout, 
  Palette, 
  Cpu, 
  Share2, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  X
} from 'lucide-react';

interface ValueCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
}

interface ValueAddSectionProps {
  onSelectService: (areaName: string) => void;
}

export const ValueAddSection: React.FC<ValueAddSectionProps> = ({ onSelectService }) => {
  const [selectedCard, setSelectedCard] = useState<ValueCard | null>(null);

  const cards: ValueCard[] = [
    {
      id: 'meta-tiktok-ads',
      number: '01',
      title: 'META & TIKTOK ADVERTISING',
      subtitle: 'Paid Acquisition & ROAS Scaling',
      description: 'I build and scale high-performing ad campaigns across Facebook, Instagram, and TikTok, driving qualified leads and profitable customer acquisition for brands.',
      capabilities: [
        'Meta (Facebook & Instagram) Ads',
        'TikTok Paid & Spark Ads',
        'Direct-Response Ad Creatives',
        'Audience Segmentation & Lookalikes',
        'Conversions API (CAPI) & Pixel Setup',
        'Lead Generation Funnels',
        'Budget Scaling & ROAS Optimization',
        'Creative A/B Split Testing',
      ],
      icon: <Target className="w-6 h-6 text-[#0B5ED7]" />,
    },
    {
      id: 'ai-landing-pages',
      number: '02',
      title: 'AI LANDING PAGES & CRO',
      subtitle: 'Conversion-Focused Funnels',
      description: 'I design and build ultra-fast, mobile-first landing pages engineered with conversion psychology, persuasive copywriting, and instant lead capture.',
      capabilities: [
        'High-Converting Landing Pages',
        'Direct-Response Copywriting',
        'Mobile-First Responsive Layouts',
        'Conversion Rate Optimization (CRO)',
        'Sales Funnel Architecture',
        'A/B Testing Strategies',
        'Sub-2s Load Speed Optimization',
        'Email & CRM Form Integrations',
      ],
      icon: <Layout className="w-6 h-6 text-[#0B5ED7]" />,
    },
    {
      id: 'brand-identity-design',
      number: '03',
      title: 'BRAND DESIGN & VISUAL AUTHORITY',
      subtitle: 'Logos, Systems & Ad Creatives',
      description: 'I craft distinctive visual brand systems that establish immediate trust, command premium pricing, and stop the scroll across digital touchpoints.',
      capabilities: [
        'Comprehensive Brand Identity Systems',
        'Logo Design & Vector Assets',
        'Canva Brand Kits & Templates',
        'High-Impact Social Media Carousels',
        'Investor Pitch Decks & Presentations',
        'Corporate Marketing Collateral',
        'Product & Packaging Graphics',
        'Digital Asset Guidelines',
      ],
      icon: <Palette className="w-6 h-6 text-[#0B5ED7]" />,
    },
    {
      id: 'ai-automation-systems',
      number: '04',
      title: 'AI AUTOMATION & WORKFLOW SYSTEMS',
      subtitle: 'Zero-Delay Operations & CRM',
      description: 'I eliminate manual bottlenecks by connecting marketing leads directly to WhatsApp, automated nurturing sequences, and organized CRM pipelines.',
      capabilities: [
        'Zapier & Make.com Automations',
        'Instant WhatsApp Lead Routing',
        'Automated Email Nurture Sequences',
        'CRM Pipeline Synchronization',
        'AI Customer Inquiry Chatbots',
        'Prompt Engineering Systems',
        'Operations Task Automation',
        'Lead Qualification Webhooks',
      ],
      icon: <Cpu className="w-6 h-6 text-[#0B5ED7]" />,
    },
    {
      id: 'social-media-strategy',
      number: '05',
      title: 'SOCIAL MEDIA & CONTENT STRATEGY',
      subtitle: 'Organic Growth & Engagement',
      description: 'I develop strategic content calendars, viral short-form video hooks, and educational carousel posts that build organic authority and trust.',
      capabilities: [
        'Multi-Channel Content Strategy',
        '30-Day Editorial Calendars',
        'Short-Form Video Scripting',
        'Carousel & Infographic Design',
        'Community & DM Engagement',
        'Personal Branding Frameworks',
        'Brand Messaging & Tone of Voice',
        'Performance Analytics Reports',
      ],
      icon: <Share2 className="w-6 h-6 text-[#0B5ED7]" />,
    },
    {
      id: 'ai-software-development',
      number: '06',
      title: 'AI SOFTWARE & WEB DEVELOPMENT',
      subtitle: 'Custom Digital Business Solutions',
      description: 'I build modern web applications, AI-integrated digital tools, client dashboards, and interactive landing systems with React and cloud backends.',
      capabilities: [
        'Modern Web Apps (React, TypeScript)',
        'AI API Integrations (OpenAI, Gemini)',
        'Custom Client Portals & Dashboards',
        'Interactive Assessment Calculators',
        'Firebase Cloud Sync & Auth',
        'Semantic SEO Architecture',
        'High-Performance UI Systems',
        'Rapid Software Prototyping',
      ],
      icon: <Code2 className="w-6 h-6 text-[#0B5ED7]" />,
    },
  ];

  return (
    <section id="services-value" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <span>VALUE DELIVERED TO ORGANIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            How I Can Add Measurable Value to Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Six high-leverage domains where I combine digital marketing, brand design, AI automation, and technology to accelerate commercial growth.
          </p>
        </div>

        {/* 6 Value Cards Grid matching reference design system */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EFF6FF] transition-all shadow-xs">
                    {card.icon}
                  </div>
                  <span className="text-xs font-black text-[#0B5ED7] px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-1 tracking-tight">
                  {card.title}
                </h3>
                <div className="text-xs font-bold text-[#0B5ED7] mb-3">
                  {card.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Capabilities Chips */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#E2E8F0]">
                  <div className="text-[11px] font-bold text-[#062B63] uppercase tracking-wider mb-2">
                    Core Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.capabilities.slice(0, 5).map((cap, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A]"
                      >
                        {cap}
                      </span>
                    ))}
                    {card.capabilities.length > 5 && (
                      <span className="text-[11px] font-bold px-2 py-1 rounded-lg bg-[#EFF6FF] text-[#0B5ED7]">
                        +{card.capabilities.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={() => onSelectService(card.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#0B5ED7] text-[#062B63] hover:text-white border border-[#E2E8F0] hover:border-[#0B5ED7] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group/btn"
                >
                  <span>Engage This Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B5ED7] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
