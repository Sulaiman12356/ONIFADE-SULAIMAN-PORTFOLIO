import React from 'react';
import {
  Cpu,
  Target,
  Sparkles,
  Search,
  Layout,
  Code2,
  Workflow,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { AI_WORKFLOW_AREAS } from '../data/portfolioData';

interface AiAutomationSectionProps {
  onOpenHireMe?: () => void;
}

export const AiAutomationSection: React.FC<AiAutomationSectionProps> = ({ onOpenHireMe }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0B5ED7]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-[#0B5ED7]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#0B5ED7]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#0B5ED7]" />;
    }
  };

  return (
    <section id="ai-automation" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRACTICAL BUSINESS TECHNOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            AI &amp; WORKFLOW AUTOMATION
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            AI is not a gimmick or buzzword—it is a pragmatic operational accelerator. Here is how I deploy artificial intelligence and webhook automation across 8 core commercial functions to reduce costs, eliminate manual errors, and scale output.
          </p>
        </div>

        {/* 8 Practical Business Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AI_WORKFLOW_AREAS.map((item, index) => (
            <div
              key={item.title}
              id={`ai-area-${index + 1}`}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0B5ED7]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/15 flex items-center justify-center mb-4 group-hover:bg-[#0B5ED7] transition-colors">
                  <span className="group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#062B63] mb-2 leading-snug group-hover:text-[#0B5ED7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Practical Business Application Box */}
              <div className="pt-3 border-t border-[#E2E8F0]/80">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#0B5ED7] mb-1">
                  Practical Application
                </div>
                <p className="text-xs text-[#0B1F3A] font-semibold leading-normal">
                  {item.practicalApplication}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Case in Point Banner: Zero-Delay CRM Pipeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0B5ED7]/30 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-[#EFF6FF] text-[#0B5ED7] border border-[#BFDBFE]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Featured Automation Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
                Zero-Delay Lead Qualification &amp; WhatsApp CRM Routing
              </h3>
              <p className="text-sm text-[#0B1F3A] leading-relaxed">
                When prospective customers fill out a Meta lead form or website inquiry, they typically wait hours for a reply. By structuring webhooks between Meta Ads, Make.com, WhatsApp Business API, and Google Sheets, my clients automatically engage high-value prospects in <strong>less than 60 seconds</strong>—boosting meeting booking rates by up to <strong>38%</strong>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-[#64748B]">
                <span>✓ 0-Minute Response Time</span>
                <span>✓ Zero Data Entry</span>
                <span>✓ Instant WhatsApp Trigger</span>
                <span>✓ 15+ Hours Saved Weekly</span>
              </div>
            </div>

            <div className="lg:col-span-1 text-center lg:text-right">
              {onOpenHireMe && (
                <button
                  onClick={onOpenHireMe}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md shadow-[#0B5ED7]/25 hover:shadow-lg transition-all"
                >
                  <span>Build an AI Automation Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
