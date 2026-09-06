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
      role: 'Lead Digital Marketing & Growth Strategist',
      company: 'Mr. Clarity Growth Consulting',
      location: 'Remote & Hybrid',
      period: '2022 – Present',
      type: 'Leadership & Client Advisory',
      description: 'Managing end-to-end paid advertising campaigns, conversion funnels, and growth strategy for commercial businesses and founders.',
      achievements: [
        'Managed over $500,000 in profitable paid advertising spend across Meta (Facebook/Instagram) and TikTok at an average 4.8x ROAS.',
        'Engineered high-converting AI landing pages and sales funnels that increased client conversion rates by 25% to 60%.',
        'Built automated lead routing and CRM workflows that reduced client lead response times to under 60 seconds.',
      ],
      tags: ['Meta Ads', 'TikTok Ads', 'Landing Page CRO', 'Lead Gen Funnels', 'ROAS Scaling'],
    },
    {
      role: 'Founder & Lead Instructor',
      company: 'Clarity Digital Academy',
      location: 'Online & Community Cohorts',
      period: '2022 – Present',
      type: 'Educational Leadership',
      description: 'Founded and scaled an intensive digital training academy teaching graphic design, brand building, and monetization to emerging creators.',
      achievements: [
        'Trained and mentored over 500+ students, entrepreneurs, and freelancers in practical Canva design and digital marketing.',
        'Designed comprehensive 3-day intensive curriculum, practical handbooks, and reusable corporate template systems.',
        'Over 65 alumni secured high-paying freelance contracts and full-time creative positions within 60 days.',
      ],
      tags: ['Canva Mastery', 'Brand Design', 'Curriculum Design', 'Public Speaking', 'Mentorship'],
    },
    {
      role: 'Brand Designer & Creative Strategist',
      company: 'Freelance & Corporate Partnerships',
      location: 'Lagos & Global Remote',
      period: '2021 – Present',
      type: 'Creative Direction',
      description: 'Directing brand identity systems, pitch decks, and performance ad creatives for startups, SMEs, and corporate entities.',
      achievements: [
        'Delivered complete brand identity packages (logos, typography, color palettes, stationery) for 30+ businesses.',
        'Designed institutional pitch decks that helped tech and logistics startups secure angel and pre-seed funding.',
        'Scripted and produced disruptive short-form video hooks that lowered paid ad acquisition costs by up to 42%.',
      ],
      tags: ['Visual Identity', 'Logo Design', 'Pitch Decks', 'Ad Creatives', 'Figma'],
    },
    {
      role: 'AI Automation & Digital Systems Consultant',
      company: 'Cross-Industry Client Solutions',
      location: 'Remote',
      period: '2023 – Present',
      type: 'Systems & Technology',
      description: 'Integrating modern AI tools, workflow automation, and custom web applications to accelerate business operations.',
      achievements: [
        'Configured multi-tool Zapier and Make.com integrations connecting ad leads directly to WhatsApp and CRM pipelines.',
        'Integrated OpenAI, Claude, and Gemini API capabilities into custom client workflows and web dashboards.',
        'Eliminated an average of 15 hours of manual data entry weekly per client organization.',
      ],
      tags: ['AI Workflows', 'Zapier & Make', 'CRM Integration', 'Web Development', 'Prompt Engineering'],
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#062B63] text-white hover:bg-[#0B5ED7] text-sm font-bold shadow-md shadow-[#062B63]/15 transition-all active:scale-[0.98]"
          >
            <span>Discuss How I Can Add Value to Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
