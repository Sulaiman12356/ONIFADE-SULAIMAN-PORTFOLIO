import React, { useState } from 'react';
import { ShieldCheck, Lock, Menu, X, ArrowRight, Briefcase, Sparkles } from 'lucide-react';

interface TrainingNavbarProps {
  onRegisterClick: () => void;
  onToggleViewMode?: () => void;
  currentMode?: 'training' | 'portfolio';
}

export const TrainingNavbar: React.FC<TrainingNavbarProps> = ({
  onRegisterClick,
  onToggleViewMode,
  currentMode = 'training',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (elementId: string) => {
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(elementId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="training-navbar"
      className="sticky top-[49px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity / Logo matching canvadesigntraining.vercel.app */}
        <div
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B5ED7] to-[#04419C] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-black text-[#062B63] tracking-tight leading-none">
                CLARITY
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0B5ED7] tracking-wider uppercase bg-blue-50 px-1.5 py-0.5 rounded leading-none border border-blue-100">
                DIGITAL ACADEMY
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 mt-1">
              Learn <span className="text-[#0B5ED7] font-bold">Skills.</span> Earn{' '}
              <span className="text-amber-600 font-bold">Globally.</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-sm text-slate-700">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('what-youll-learn')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1"
          >
            What You'll Learn
          </button>
          <button
            onClick={() => scrollTo('curriculum')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1"
          >
            3-Day Curriculum
          </button>
          <button
            onClick={() => scrollTo('why-free')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1"
          >
            Why Free?
          </button>
          <button
            onClick={() => scrollTo('about-mentor')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1"
          >
            About the Mentor
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-[#0B5ED7] transition-colors cursor-pointer py-1 inline-flex items-center gap-1"
          >
            <span>FAQ</span>
            <Lock className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </nav>

        {/* Action Controls & Free Registration Badge */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Mode switch to Portfolio / Agency services */}
          {onToggleViewMode && (
            <button
              onClick={onToggleViewMode}
              title="View Mr. Clarity Portfolio & Agency Services"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>{currentMode === 'training' ? 'Agency Portfolio' : 'Canva Training'}</span>
            </button>
          )}

          {/* 100% Free Registration badge */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>100% Free Registration</span>
          </div>

          {/* Primary CTA button */}
          <button
            id="navbar-register-free-btn"
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Register Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-register-btn"
            onClick={onRegisterClick}
            className="sm:hidden px-3.5 py-2 rounded-lg bg-[#0B5ED7] text-white font-bold text-xs shadow-xs"
          >
            Register Free
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 font-semibold text-base text-slate-800">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left py-2 hover:text-[#0B5ED7] border-b border-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('what-youll-learn')}
              className="text-left py-2 hover:text-[#0B5ED7] border-b border-slate-100"
            >
              What You'll Learn
            </button>
            <button
              onClick={() => scrollTo('curriculum')}
              className="text-left py-2 hover:text-[#0B5ED7] border-b border-slate-100"
            >
              3-Day Curriculum
            </button>
            <button
              onClick={() => scrollTo('why-free')}
              className="text-left py-2 hover:text-[#0B5ED7] border-b border-slate-100"
            >
              Why Free?
            </button>
            <button
              onClick={() => scrollTo('about-mentor')}
              className="text-left py-2 hover:text-[#0B5ED7] border-b border-slate-100"
            >
              About the Mentor
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-left py-2 hover:text-[#0B5ED7] flex items-center justify-between border-b border-slate-100"
            >
              <span>Frequently Asked Questions</span>
              <Lock className="w-4 h-4 text-slate-400" />
            </button>

            {onToggleViewMode && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onToggleViewMode();
                }}
                className="text-left py-2 text-[#0B5ED7] font-bold flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Switch to Agency & Portfolio Services</span>
              </button>
            )}

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>100% Free Class • Zero Hidden Costs</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0B5ED7] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <span>Reserve My Free Spot Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
