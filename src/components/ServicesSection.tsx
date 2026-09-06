import React, { useState } from 'react';
import { 
  Target, 
  Palette, 
  BarChart3, 
  PenTool, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const getServiceBadge = (index: number, iconName: string) => {
    const badgeStyles = [
      { bg: 'bg-purple-50 text-purple-600 border-purple-200', icon: <Target className="w-6 h-6" /> },
      { bg: 'bg-emerald-50 text-emerald-600 border-emerald-200', icon: <Palette className="w-6 h-6" /> },
      { bg: 'bg-blue-50 text-blue-600 border-blue-200', icon: <BarChart3 className="w-6 h-6" /> },
      { bg: 'bg-amber-50 text-amber-600 border-amber-200', icon: <PenTool className="w-6 h-6" /> },
      { bg: 'bg-rose-50 text-rose-600 border-rose-200', icon: <Cpu className="w-6 h-6" /> },
      { bg: 'bg-indigo-50 text-indigo-600 border-indigo-200', icon: <Users className="w-6 h-6" /> },
    ];
    return badgeStyles[index % badgeStyles.length];
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header matching canvadesigntraining.vercel.app template */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3">
            <span>CORE EXPERTISE &amp; SERVICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-4">
            WHAT I <span className="text-[#0B5ED7]">BRING TO THE TABLE</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Go from inconsistent results to high-converting ad funnels, polished brand designs, and automated data dashboards that create measurable commercial impact.
          </p>
        </div>

        {/* 6 Services Grid matching template cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const badge = getServiceBadge(index, service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-[#F8FAFC] rounded-2xl p-7 sm:p-8 border border-[#E5EAF1] hover:border-[#0B5ED7] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Colored Icon Box from template */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 shadow-xs ${badge.bg}`}>
                    {badge.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#062B63] group-hover:text-[#0B5ED7] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0B1F3A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#E5EAF1] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-[#062B63] hover:text-[#0B5ED7] transition-colors flex items-center gap-1"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-[#0B5ED7] hover:text-white border border-[#E5EAF1] text-xs font-bold text-[#0B5ED7] transition-all shadow-xs"
                  >
                    Inquire Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee / Proof pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F9FF] border border-[#E5EAF1] text-xs font-semibold text-[#062B63]">
            <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
            <span>Need a custom blended role or project? All engagements come with clear KPIs &amp; strict deliverables.</span>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5EAF1] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-[#F5F9FF] text-[#0B5ED7] text-xs font-bold uppercase tracking-wider">
                Service Blueprint
              </span>
              <h3 className="text-2xl font-black text-[#062B63] mt-2">
                {activeModalService.title}
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                {activeModalService.description}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1]">
                <div className="font-bold text-[#062B63] mb-1">Expected Outcome &amp; Impact:</div>
                <div className="text-[#0B1F3A]">{activeModalService.outcome}</div>
              </div>

              <div>
                <div className="font-bold text-[#062B63] mb-2">Detailed Deliverables:</div>
                <ul className="space-y-2">
                  {activeModalService.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#0B1F3A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-[#E5EAF1]">
                <div className="font-bold text-[#062B63] mb-1">Ideal For:</div>
                <div className="text-[#64748B]">{activeModalService.targetAudience}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5EAF1] flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#64748B] hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
