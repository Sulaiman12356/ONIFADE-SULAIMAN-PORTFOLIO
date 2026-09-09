import React from 'react';
import { ArrowRight, Quote, Globe2 } from 'lucide-react';
import sulaimanImg from '../../assets/images/onifade.jpg';

interface WhyFreeSectionProps {
  onAcceptInvitation: () => void;
}

export const WhyFreeSection: React.FC<WhyFreeSectionProps> = ({ onAcceptInvitation }) => {
  return (
    <section id="why-free" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight uppercase">
            WHY I DECIDED TO TEACH THIS <br className="hidden sm:inline" />
            <span className="text-[#0B5ED7]">FOR FREE</span>
          </h2>
        </div>

        {/* Big Dark Navy Card Container matching why decide.png */}
        <div className="bg-[#071328] text-white rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Circular Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#0B5ED7] text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
            <Quote className="w-6 h-6 fill-white text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-black text-white leading-tight">
                I didn't create this class because I think everyone must become a full-time graphic designer.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                I created it because I've seen so many people with genuinely good ideas struggle to communicate those ideas visually.
              </p>

              {/* 4 Motivation Category Boxes (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-medium text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>Some people want to start a business.</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-medium text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>Some want to promote their services.</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-medium text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>Some want to create content online.</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-medium text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>Some are students seeking a valuable skill.</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                But they don't know where to start. And sometimes, the high cost of courses becomes another barrier that stops people before they even begin.
              </p>

              {/* Highlight Box */}
              <div className="bg-blue-950/60 border border-blue-500/30 rounded-2xl p-6 text-slate-200 space-y-2">
                <h4 className="font-bold text-white text-base sm:text-lg text-[#38BDF8]">
                  So I thought: Why not create a simple starting point?
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Three days. No complicated theory. No pressure. Just learning, practising, and understanding how Canva actually works.
                </p>
              </div>

              {/* Founder Sign-off */}
              <div className="pt-2">
                <div className="text-lg font-black text-white">Onifade Sulaiman</div>
                <div className="text-sm font-semibold text-cyan-400">
                  Mr. Clarity • Founder, Clarity Digital Academy
                </div>
              </div>
            </div>

            {/* Right Photo Column matching why decide.png */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                {/* Glowing cyan/blue border framing */}
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/20">
                  <div className="overflow-hidden rounded-[22px] bg-[#0B1930] aspect-[4/5]">
                    <img
                      src={sulaimanImg}
                      alt="Onifade Sulaiman (Mr. Clarity)"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Identity Tag below photo */}
                <div className="mt-4 bg-[#0B1930] border border-white/10 rounded-2xl p-4 text-center shadow-lg">
                  <div className="font-black text-white text-base">Onifade Sulaiman</div>
                  <div className="text-xs font-bold text-cyan-400 mt-0.5">Also known as Mr. Clarity</div>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300">
                    “Learn Skills. Earn Globally.”
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer bar inside card */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>
                <strong className="text-white font-bold">100% Free Training</strong> • Open to all beginners across Africa & beyond
              </span>
            </div>

            <button
              id="accept-free-invitation-btn"
              onClick={onAcceptInvitation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/30 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Accept Free Invitation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
