import React, { useState } from 'react';
import { 
  Target, 
  Layout, 
  Palette, 
  Share2, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  MessageSquare,
  Zap,
  HelpCircle,
  Video,
  Layers,
  GraduationCap,
  TrendingUp,
  FileText
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ServicesSectionProps {
  onOpenHireMe: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenHireMe }) => {
  const { openHireMe } = usePortfolio();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Exactly the 7 services requested by user
  const primaryServices: ServiceCardData[] = [
    {
      id: 'meta-ads-management',
      number: '01',
      title: 'META ADS MANAGEMENT',
      category: 'Paid Acquisition & Growth',
      icon: <Target className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I help businesses plan, launch and improve Meta advertising campaigns designed to reach the right audience and generate meaningful opportunities.',
      services: [
        'Facebook Ads',
        'Instagram Ads',
        'Audience Targeting',
        'Lead Generation',
        'Campaign Setup',
        'Campaign Optimization',
        'Retargeting',
      ],
    },
    {
      id: 'landing-page-design',
      number: '02',
      title: 'LANDING PAGE DESIGN',
      category: 'Conversion Funnels & CRO',
      icon: <Layout className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I create clean and focused landing pages that guide visitors toward a clear action such as sending a message, making an enquiry or submitting their details.',
      services: [
        'Landing Pages',
        'Lead Capture Pages',
        'Business Websites',
        'Conversion Focused Pages',
        'WhatsApp Integration',
        'Meta Pixel Integration',
      ],
    },
    {
      id: 'brand-design',
      number: '03',
      title: 'BRAND DESIGN',
      category: 'Visual Identity & Graphics',
      icon: <Palette className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I create professional visual designs that help businesses look consistent, trustworthy and memorable.',
      services: [
        'Logo Design',
        'Brand Identity',
        'Flyers',
        'Social Media Designs',
        'Marketing Materials',
      ],
    },
    {
      id: 'social-media-management',
      number: '04',
      title: 'SOCIAL MEDIA MANAGEMENT',
      category: 'Content Strategy & Engagement',
      icon: <Share2 className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I help businesses maintain a professional social media presence with useful content, consistent branding and a clear content direction.',
      services: [
        'Content Planning',
        'Social Media Strategy',
        'Content Creation',
        'Post Design',
        'Community Management',
        'Page Management',
      ],
    },
    {
      id: 'ai-automation',
      number: '05',
      title: 'AI AUTOMATION',
      category: 'Productivity & Workflows',
      icon: <Cpu className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I use practical AI tools and automation to reduce repetitive work and improve business workflows.',
      services: [
        'Marketing Automation',
        'Lead Workflows',
        'Content Workflows',
        'Business Automation',
        'AI Productivity Systems',
      ],
    },
    {
      id: 'ai-software-web',
      number: '06',
      title: 'AI SOFTWARE AND WEBSITE DEVELOPMENT',
      category: 'Modern Web & Tech Solutions',
      icon: <Code2 className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I build practical websites and digital systems that solve real business problems.',
      services: [
        'Business Websites',
        'Web Applications',
        'Landing Pages',
        'Digital Platforms',
        'AI Powered Web Solutions',
      ],
    },
    {
      id: 'video-editing',
      number: '07',
      title: 'VIDEO EDITING',
      category: 'Social Media & Short Form Videos',
      icon: <Video className="w-6 h-6 text-[#0B5ED7]" />,
      description:
        'I edit short form videos designed for social media, marketing campaigns and business promotion.',
      services: [
        'CapCut Editing',
        'Reels',
        'Short Form Videos',
        'Promotional Videos',
        'Social Media Videos',
      ],
    },
  ];

  // Exactly the 17 additional services requested by user
  const moreWaysICanHelp = [
    { name: 'TikTok Ads', category: 'Paid Advertising' },
    { name: 'WhatsApp Marketing', category: 'Lead Generation' },
    { name: 'Personal Branding', category: 'Brand Strategy' },
    { name: 'Content Creation', category: 'Media & Organic' },
    { name: 'Copywriting', category: 'Direct-Response' },
    { name: 'Marketing Strategy', category: 'Growth Planning' },
    { name: 'Sales Funnel Design', category: 'Conversion Architecture' },
    { name: 'Lead Generation', category: 'Customer Acquisition' },
    { name: 'CapCut Video Editing', category: 'Video Ads' },
    { name: 'Short-form Video Editing', category: 'Reels & TikTok' },
    { name: 'Social Media Creative Design', category: 'Visual Content' },
    { name: 'Digital Product Design', category: 'Digital Assets' },
    { name: 'Digital Skills Training', category: 'Academy & Education' },
    { name: 'Canva Training', category: 'Graphic Masterclasses' },
    { name: 'AI Tools Training', category: 'Workflow Education' },
    { name: 'Digital Marketing Training', category: 'Workshops' },
    { name: 'Campaign Consultation', category: 'Ad Audits & Advisory' },
  ];

  const handleServiceSelect = (serviceTitle: string) => {
    onOpenHireMe(serviceTitle);
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER: WHAT I DO / Digital Solutions Built Around Growth
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            Digital Solutions Built Around Growth
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            I help businesses, personal brands, and organizations attract targeted attention, generate profitable leads, build cohesive visual identities, and streamline workflows through marketing, design, and AI.
          </p>
        </div>

        {/* ========================================================
            6 PREMIUM SERVICE CARDS GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {primaryServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/45 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#EFF6FF] border border-[#0B5ED7]/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#062B63] group-hover:text-white transition-all shadow-2xs">
                    {service.icon}
                  </div>
                  <span className="text-xs font-black text-[#0B5ED7] px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20">
                    CARD {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-1 tracking-tight">
                  {service.title}
                </h3>
                <div className="text-[11px] font-bold text-[#0B5ED7] uppercase tracking-wider mb-4">
                  {service.category}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Services Checklist */}
                <div className="pt-4 border-t border-[#E2E8F0] space-y-2 mb-6">
                  <div className="text-[11px] font-black text-[#062B63] uppercase tracking-wider mb-2.5">
                    Services Included:
                  </div>
                  <div className="space-y-1.5">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0F172A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#EFF6FF] hover:bg-[#0B5ED7] text-[#0B5ED7] hover:text-white border border-[#0B5ED7]/20 hover:border-[#0B5ED7] font-black text-xs flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer group-hover:bg-[#0B5ED7] group-hover:text-white"
                >
                  <span>Request {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B5ED7] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================
            SECONDARY SERVICES SECTION: "More Ways I Can Help"
            ======================================================== */}
        <div className="rounded-3xl bg-white border-2 border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-[11px] font-black text-[#0B5ED7] uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>EXPANDED CAPABILITIES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
              More Ways I Can Help
            </h3>
            
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Beyond end-to-end management, I provide targeted sprint services, creative production, short-form editing, corporate workshops, and strategic consulting.
            </p>
          </div>

          {/* 17 Interactive Service Tags */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {moreWaysICanHelp.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceSelect(item.name)}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#0B5ED7] transition-all text-left cursor-pointer active:scale-[0.98]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7] group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-[#062B63] group-hover:text-[#0B5ED7] transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-medium text-[#64748B] bg-white px-2 py-0.5 rounded-md border border-[#E2E8F0]">
                  {item.category}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Inquiry Strip */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-[#64748B] text-center sm:text-left">
              Have a tailored campaign or training requirement? Let's discuss your timeline and outcomes.
            </div>
            
            <button
              onClick={() => onOpenHireMe('Custom Scope')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-black transition-colors shadow-sm shadow-[#0B5ED7]/25"
            >
              <span>Discuss Custom Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
