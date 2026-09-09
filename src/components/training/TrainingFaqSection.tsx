import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

interface TrainingFaqSectionProps {
  onRegisterClick: () => void;
}

export const TrainingFaqSection: React.FC<TrainingFaqSectionProps> = ({ onRegisterClick }) => {
  // First item open by default as shown in frequently ask Question.png
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this class really free?',
      answer:
        'Yes, 100% free! You will not be asked to pay any registration fee or hidden subscription charges before joining the 3 days of training.',
    },
    {
      question: 'Do I need a laptop to participate?',
      answer:
        'No! You can participate fully using your smartphone (iOS or Android) by installing the free Canva app, or use a laptop/desktop computer via any web browser. We demonstrate practical workflows for both!',
    },
    {
      question: 'Do I need Canva Pro?',
      answer:
        'No. Everything taught in this 3-day class is 100% executable using the free version of Canva. You do not need a paid Canva Pro subscription.',
    },
    {
      question: "What if I've never designed before?",
      answer:
        'This training is specifically designed for absolute beginners! No prior design background or artistic talent is required. We start from the foundational basics and build up step-by-step.',
    },
    {
      question: 'Where will the class take place?',
      answer:
        'The live training sessions will be held online via Google Meet / Zoom with private WhatsApp cohort support community for Q&A, assignments, and resource sharing.',
    },
    {
      question: 'What time does the class start?',
      answer:
        'Classes run from 8:30 PM to 10:00 PM (West Africa Time / WAT) each evening from Thursday through Saturday, designed to fit into your work or school schedule.',
    },
    {
      question: 'Will there be recordings or replays?',
      answer:
        'Yes! Replay links and summary cheat sheets will be shared inside the exclusive WhatsApp cohort group for registered attendees.',
    },
    {
      question: 'Can I ask questions during the class?',
      answer:
        'Absolutely! There will be dedicated live Q&A segments during each session where Sulaiman (Mr. Clarity) answers your questions directly and reviews live designs.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching frequently ask Question.png */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B5ED7] font-bold text-xs uppercase tracking-wider border border-blue-100 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-[#0B5ED7]">QUESTIONS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Everything you need to know about the 3-day class.
          </p>
        </div>

        {/* 8 Accordion Items matching screenshot */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-[#0B5ED7] bg-white ring-2 ring-blue-500/10 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base sm:text-lg ${isOpen ? 'text-[#0B1F3A]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#0B5ED7] text-white'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Assistance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#0B1F3A]">Still have a question?</div>
              <div className="text-xs text-slate-500">Ask Sulaiman directly on WhatsApp for immediate guidance.</div>
            </div>
          </div>

          <a
            href="https://wa.me/2348051780169?text=Hello%20Mr.%20Clarity,%20I%20have%20a%20question%20about%20the%203-Day%20Canva%20Design%20Training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
