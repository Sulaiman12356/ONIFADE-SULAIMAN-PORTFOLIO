import React from 'react';
import { ArrowRight, MessageSquare, Download, Sparkles, Mail, Phone, MessageCircle, Globe, Linkedin, Instagram, Twitter } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface CtaBannerProps {
  onOpenHireMe: () => void;
  onOpenCv?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenHireMe, onOpenCv }) => {
  const { profile, downloadActiveCv, openHireMe } = usePortfolio();

  const handleLetsTalk = () => {
    if (profile.socialLinks.whatsapp) {
      window.open(profile.socialLinks.whatsapp, '_blank');
    } else {
      openHireMe('Consulting', "Strategy Consultation / Let's Talk");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B5ED7] via-[#084fb5] to-[#1D4ED8] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl text-center border-2 border-white/20">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-[#EFF6FF] border border-white/30 text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>READY TO SCALE YOUR BUSINESS?</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Let's Build Something High-Converting Together.
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-2xl mx-auto">
              Have a paid advertising campaign, landing page redesign, brand identity project, or AI workflow you want to scale? Let's discuss your targets.
            </p>

            {/* Action Buttons:
                [ Work With Me / Hire Me ]
                [ Book Strategy Call / Let's Talk ]
                [ Download CV ]
            */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                id="cta-hire-me-btn"
                onClick={onOpenHireMe}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-[#0B5ED7] bg-white hover:bg-slate-50 shadow-xl transition-all active:scale-[0.98] text-sm sm:text-base group"
              >
                <span>Hire Me / Work With Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="cta-lets-talk-btn"
                onClick={handleLetsTalk}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 shadow-md transition-all active:scale-[0.98] text-sm sm:text-base backdrop-blur-xs"
              >
                <MessageSquare className="w-4 h-4 text-cyan-200" />
                <span>Book Strategy Call</span>
              </button>

              <button
                id="cta-download-cv-btn"
                onClick={downloadActiveCv}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white hover:bg-white/20 border border-white/30 shadow-xs transition-all active:scale-[0.98] text-sm sm:text-base backdrop-blur-xs"
              >
                <Download className="w-4 h-4 text-cyan-200" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Direct Contact Channels Row */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                DIRECT CHANNELS &amp; FAST RESPONSE
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-slate-200">
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 hover:text-[#0B5ED7] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#0B5ED7]" />
                    <span>{profile.email}</span>
                  </a>
                )}

                {profile.phone && (
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-2 hover:text-[#0B5ED7] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0B5ED7]" />
                    <span>{profile.phone}</span>
                  </a>
                )}

                {profile.socialLinks.whatsapp && (
                  <a
                    href={profile.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#0B5ED7] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Chat</span>
                  </a>
                )}

                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#0B5ED7] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0B5ED7]" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {profile.socialLinks.instagram && (
                  <a
                    href={profile.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#0B5ED7] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#0B5ED7]" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
