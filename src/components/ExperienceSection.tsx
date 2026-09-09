import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ExperienceSectionProps {
  onOpenHireMe: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenHireMe }) => {
  const { experience } = usePortfolio();

  const careerHighlights = [
    {
      role: 'Lead Digital Marketing & Meta Ads Specialist',
      company: 'Mr. Clarity Digital Solutions',
      location: 'Remote & Hybrid',
      period: '2024 – Present',
      type: 'Commercial Acquisition & Strategy',
      description: 'Managing end-to-end paid advertising campaigns, landing page conversion funnels, and digital growth systems for commercial businesses, brands, and founders.',
      achievements: [
        'Managed over ₦500,000+ in targeted Meta Ads campaigns across Facebook and Instagram delivering high-intent leads.',
        'Engineered high-converting AI landing pages and lead capture funnels that turned ad traffic into direct WhatsApp and form enquiries.',
        'Implemented Meta Pixel, CAPI, and conversion tracking to optimize cost-per-lead and improve overall campaign ROI.',
      ],
      tags: ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Landing Pages', 'Lead Generation'],
    },
    {
      role: 'Brand Designer & Social Media Manager',
      company: 'Independent & Client Projects',
      location: 'Remote',
      period: '2024 – Present',
      type: 'Brand Identity & Content Strategy',
      description: 'Developing complete visual identities, marketing collateral, social media content, and high-retention video creatives.',
      achievements: [
        'Designed brand identities, logos, marketing flyers, and commercial pitch materials for 30+ client projects.',
        'Planned, created, and published content calendars across Facebook, Instagram, and TikTok to build engaged brand communities.',
        'Produced and edited high-converting promotional videos and Reels using CapCut with attention-grabbing hooks and retention pacing.',
      ],
      tags: ['Brand Identity', 'Logo Design', 'Social Media Management', 'CapCut Video Editing', 'Canva'],
    },
    {
      role: 'AI Automation & Web Solutions Specialist',
      company: 'Digital Systems & Automation',
      location: 'Remote',
      period: '2024 – Present',
      type: 'AI Workflows & Modern Web Systems',
      description: 'Deploying practical AI workflows, automation routines, and responsive web platforms to solve real business challenges.',
      achievements: [
        'Connected advertising campaigns and landing pages with automated WhatsApp routing and CRM response sequences.',
        'Leveraged ChatGPT and Claude to streamline research, ad copy creation, and operational content pipelines.',
        'Built modern, responsive web applications and landing pages backed by Firebase and modern web technologies.',
      ],
      tags: ['AI Workflows', 'Automation', 'WhatsApp Routing', 'Web Development', 'Firebase'],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <span>TRACK RECORD &amp; CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            Proven Track Record of Measurable Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            A history of driving commercial revenue, mentoring creative talent, and delivering high-stakes digital initiatives.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {careerHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B5ED7]/40 hover:bg-white hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0] mb-5">
                <div>
                  <div className="inline-block text-[11px] font-bold text-[#0B5ED7] uppercase tracking-wider mb-1">
                    {item.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#062B63] group-hover:text-[#0B5ED7] transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="sm:text-right flex sm:flex-col items-center sm:items-end gap-2 text-xs font-semibold text-[#64748B]">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#062B63] font-bold">
                    {item.period}
                  </span>
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="space-y-2.5 mb-6">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0B5ED7] border border-[#0B5ED7]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenHireMe}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B5ED7] text-white hover:bg-[#1D4ED8] text-sm font-bold shadow-md shadow-[#0B5ED7]/25 transition-all active:scale-[0.98]"
          >
            <span>Discuss How I Can Add Value to Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
