import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface TopCountdownBarProps {
  onClaimSpot: () => void;
}

export const TopCountdownBar: React.FC<TopCountdownBarProps> = ({ onClaimSpot }) => {
  // Target cohort: Thursday 10th - 12th Saturday September, 2026 • 8:30 PM (WAT)
  // Dynamic countdown so it always ticks realistically
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 5,
    minutes: 31,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 3, hours: 14, minutes: 28, seconds: 45 }; // graceful loop
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <aside
      id="top-announcement-bar"
      aria-label="Upcoming Cohort Announcement"
      className="bg-[#0B1930] text-white py-2 px-3 sm:px-4 border-b border-white/10 sticky top-0 z-50 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs sm:text-sm">
        {/* Cohort Schedule Details */}
        <div className="flex items-center gap-2 flex-wrap justify-center text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold tracking-wide uppercase text-[11px] border border-amber-400/30">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
            NEXT LIVE COHORT
          </span>
          <span className="font-semibold text-slate-200">
            Thursday 10th – 12th Saturday September, 2026 • <span className="text-white font-bold">8:30 PM - 10:00 PM (WAT)</span>
          </span>
        </div>

        {/* Live Countdown & Instant CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ticker Box Units */}
          <div className="flex items-center gap-1 sm:gap-1.5 font-mono text-xs">
            <div className="bg-[#071328] border border-white/15 px-1.5 sm:px-2 py-1 rounded text-center min-w-[36px] sm:min-w-[42px]">
              <div className="font-bold text-white text-xs sm:text-sm leading-tight">{pad(timeLeft.days)}</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">DAYS</div>
            </div>
            <span className="text-slate-500 font-bold">:</span>
            <div className="bg-[#071328] border border-white/15 px-1.5 sm:px-2 py-1 rounded text-center min-w-[36px] sm:min-w-[42px]">
              <div className="font-bold text-white text-xs sm:text-sm leading-tight">{pad(timeLeft.hours)}</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">HOURS</div>
            </div>
            <span className="text-slate-500 font-bold">:</span>
            <div className="bg-[#071328] border border-white/15 px-1.5 sm:px-2 py-1 rounded text-center min-w-[36px] sm:min-w-[42px]">
              <div className="font-bold text-white text-xs sm:text-sm leading-tight">{pad(timeLeft.minutes)}</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">MINS</div>
            </div>
            <span className="text-slate-500 font-bold">:</span>
            <div className="bg-[#071328] border border-white/15 px-1.5 sm:px-2 py-1 rounded text-center min-w-[36px] sm:min-w-[42px]">
              <div className="font-bold text-cyan-400 text-xs sm:text-sm leading-tight">{pad(timeLeft.seconds)}</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">SECS</div>
            </div>
          </div>

          {/* Direct CTA */}
          <button
            id="top-bar-claim-spot-btn"
            onClick={onClaimSpot}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-[#0B5ED7] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>CLAIM FREE SPOT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
