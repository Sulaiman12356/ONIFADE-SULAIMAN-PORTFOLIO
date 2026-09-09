import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, Award } from 'lucide-react';
import sulaimanImg from '../../assets/images/onifade.jpg';

interface AboutMentorTrainingProps {
  onLearnDirectly: () => void;
}

export const AboutMentorTraining: React.FC<AboutMentorTrainingProps> = ({ onLearnDirectly }) => {
  return (
    <section id="about-mentor" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight uppercase leading-tight">
            HI, I'M SULAIMAN, WIDELY <br className="hidden sm:inline" />
            KNOWN AS <span className="text-[#0B5ED7]">MR. CLARITY.</span>
          </h2>
        </div>

        {/* Large Dark Navy Card Container matching clarity.png */}
        <div className="bg-[#071328] text-white rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo & Profile Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                {/* Photo container with blue border & floating badge */}
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#0B5ED7] to-cyan-500 shadow-xl shadow-blue-500/25">
                  <div className="overflow-hidden rounded-[22px] bg-[#0B1930] aspect-[4/5]">
                    <img
                      src={sulaimanImg}
                      alt="Onifade Sulaiman (Mr. Clarity)"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating badge on photo matching clarity.png */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#0B1F3A] px-4 py-1.5 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 whitespace-nowrap z-10">
                    <div className="w-5 h-5 rounded-full bg-[#0B5ED7] text-white flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-white text-[#0B5ED7]" />
                    </div>
                    <span className="text-xs font-black">Mr. Clarity</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-[11px] text-slate-500 font-semibold">Founder & Head Mentor</span>
                  </div>
                </div>

                {/* Info Credentials below photo */}
                <div className="mt-8 text-center space-y-1">
                  <div className="text-xl font-black tracking-wide text-white">ONIFADE SULAIMAN</div>
                  <div className="text-sm font-bold text-cyan-400">MR. CLARITY</div>
                  <div className="text-xs text-slate-400 font-medium">Founder, Clarity Digital Academy</div>
                  <div className="pt-2">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                      “Learn Skills. Earn Globally.”
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biography & Teaching Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                I'm a digital skills mentor and the founder of Clarity Digital Academy.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                I genuinely enjoy breaking complicated things down into simple, digestible steps.
                Because when people understand the basics, learning stops feeling intimidating and stressful.
              </p>

              {/* Callout Box matching clarity.png */}
              <div className="bg-blue-950/70 border border-blue-500/30 rounded-2xl p-6 sm:p-7 text-slate-200 space-y-3">
                <div className="text-[#38BDF8] font-bold text-lg sm:text-xl">
                  “That's what clarity means to me.”
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  In this 3-day class, I won't just show you what buttons to press. I'll show you how to think
                  like someone who creates clean, balanced and purposeful designs.
                </p>
              </div>

              {/* 3 Metric / Philosophy Pillars (3 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-black text-cyan-400 text-base">No Jargon</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Clear plain English</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-black text-cyan-400 text-base">Patient Mentorship</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Questions welcomed</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-black text-cyan-400 text-base">Global Mindset</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">High standard outputs</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  id="learn-directly-with-sulaiman-btn"
                  onClick={onLearnDirectly}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Learn Directly with Sulaiman (Mr. Clarity)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
