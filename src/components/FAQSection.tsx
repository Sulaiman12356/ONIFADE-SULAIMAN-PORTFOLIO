import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { DEFAULT_FAQS } from '../data/portfolioData';

interface FAQSectionProps {
  onOpenHireMe: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenHireMe }) => {
  const { faqs: contextFaqs } = usePortfolio();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = (contextFaqs && contextFaqs.length > 0 ? contextFaqs : DEFAULT_FAQS)
    .filter((f) => f.isPublished !== false)
    .sort((a, b) => a.order - b.order);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0B5ED7]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-4 uppercase">
            Questions &amp; Answers
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Clear answers about my services, process, tools and how we can work together.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id || idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0B5ED7]/50 shadow-md'
                    : 'bg-white border-[#E2E8F0] hover:border-[#0B5ED7]/30 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-black text-[#0B5ED7] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0B5ED7]/15">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-extrabold text-base sm:text-lg text-[#062B63] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0B5ED7] text-white rotate-180'
                        : 'bg-[#F1F5F9] text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F1F5F9] mt-1 pl-14">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-black text-[#062B63] mb-1">
              Have a question not listed here?
            </div>
            <p className="text-sm text-[#64748B]">
              Reach out directly. I am always happy to discuss ideas and project requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/2348051780169?text=Hello%20Onifade%20Sulaiman,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenHireMe}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>HIRE ME</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
