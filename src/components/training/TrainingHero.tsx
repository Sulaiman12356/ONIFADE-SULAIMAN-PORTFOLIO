import React from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Laptop, Sparkles, Quote } from 'lucide-react';

interface TrainingHeroProps {
  onReserveSpot: () => void;
  onSeeWhatIllLearn: () => void;
}

export const TrainingHero: React.FC<TrainingHeroProps> = ({
  onReserveSpot,
  onSeeWhatIllLearn,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white"
    >
      {/* Subtle geometric background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Dual Badges matching canvadesigntraining.vercel.app */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0B1930] text-white text-xs sm:text-sm font-black tracking-wider uppercase shadow-xs">
            100% FREE • 3 DAYS • BEGINNER FRIENDLY
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs sm:text-sm font-semibold shadow-xs">
            <span>🔥</span>
            <span>Live Training with Onifade Sulaiman (Mr. Clarity)</span>
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0B1F3A] tracking-tight uppercase leading-[1.08] sm:leading-[1.08] mb-6">
          YOU DON'T NEED TO BE A <br className="hidden sm:inline" />
          DESIGNER TO{' '}
          <span className="text-[#0B5ED7] underline decoration-blue-200/50 underline-offset-8">
            START DESIGNING.
          </span>
        </h1>

        {/* Subhead narrative */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed mb-8 sm:mb-10">
          Learn how to use Canva to create clean, attractive and professional designs with
          your smartphone or laptop — even if you've never designed before.
        </p>

        {/* Realistic Direct Quote Box */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="relative bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm text-slate-700 italic text-base sm:text-lg text-center leading-relaxed">
            <Quote className="w-8 h-8 text-blue-400/40 absolute -top-4 left-6 bg-white px-1" />
            <p className="relative z-10">
              <span className="text-blue-600 font-serif text-2xl font-bold not-italic mr-1.5">“</span>
              Maybe you've opened Canva before and wondered,{' '}
              <strong className="text-[#0B1F3A] font-bold not-italic">‘Where do I even start?’</strong>{' '}
              That's exactly what we'll work through together.
              <span className="text-blue-600 font-serif text-2xl font-bold not-italic ml-1.5">”</span>
            </p>
          </div>
        </div>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
          <button
            id="hero-reserve-free-spot-btn"
            onClick={onReserveSpot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>RESERVE MY FREE SPOT</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="hero-see-curriculum-btn"
            onClick={onSeeWhatIllLearn}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-4.5 rounded-xl bg-white hover:bg-slate-50 text-[#062B63] font-bold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
          >
            <span>SEE WHAT I'LL LEARN</span>
          </button>
        </div>

        {/* Micro Credibility Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />
            <span>Free practical training</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />
            <span>Beginner-friendly</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="flex items-center gap-1">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Smartphone</span>
            </span>
            <span className="text-slate-400">+</span>
            <span className="flex items-center gap-1">
              <Laptop className="w-4 h-4 text-blue-600" />
              <span>Laptop</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
