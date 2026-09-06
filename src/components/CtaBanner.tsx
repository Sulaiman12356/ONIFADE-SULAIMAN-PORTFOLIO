import React from 'react';
import { ArrowUpRight, MessageSquare, Download, Sparkles, Mail, Phone, MessageCircle, Globe, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface CtaBannerProps {
  onOpenHireMe: () => void;
  onOpenCv?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenHireMe, onOpenCv }) => {
  const { profile, downloadActiveCv, openHireMe } = usePortfolio();

  const handleLetsTalk = () => {
    // If whatsapp is available, open direct whatsapp or hire me
    if (profile.socialLinks.whatsapp) {
      window.open(profile.socialLinks.whatsapp, '_blank');
    } else {
      openHireMe('Consulting', "General Discussion / Let's Talk");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F9FF] relative border-t border-[#E5EAF1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#08183A] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl text-center border border-white/10">
          
          {/* Ambient radial glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-80 h-80 bg-[#0B5ED7]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#00D2FF] border border-white/10 text-xs font-extrabold uppercase tracking-widest mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </div>

            {/* Exact Heading Requested */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Let's Build Something Valuable Together.
            </h2>

            {/* Exact Text Requested */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Have a project, job opportunity, collaboration or idea you'd like to discuss? I'd love to hear from you.
            </p>

            {/* Three Exact Requested Buttons:
                [ Hire Me ]
                [ Let's Talk ]
                [ Download CV ]
            */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                id="cta-hire-me-btn"
                onClick={onOpenHireMe}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-black text-[#08183A] bg-[#00D2FF] hover:bg-[#38BDF8] shadow-xl shadow-cyan-500/20 transition-all active:scale-[0.98] text-sm sm:text-base"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#08183A]" />
              </button>

              <button
                id="cta-lets-talk-btn"
                onClick={handleLetsTalk}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-md transition-all active:scale-[0.98] text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4 text-[#00D2FF]" />
                <span>Let's Talk</span>
              </button>

              <button
                id="cta-download-cv-btn"
                onClick={downloadActiveCv}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/20 shadow-xs transition-all active:scale-[0.98] text-sm sm:text-base"
              >
                <Download className="w-4 h-4 text-[#00D2FF]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Editable Contact Channels Row (synced dynamically from Admin) */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                DIRECT CONTACT CHANNELS (EDITABLE IN ADMIN)
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#00D2FF]" />
                    <span>{profile.email}</span>
                  </a>
                )}

                {profile.phone && (
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#00D2FF]" />
                    <span>{profile.phone}</span>
                  </a>
                )}

                {profile.socialLinks.whatsapp && (
                  <a
                    href={profile.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                )}

                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#00D2FF]" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {profile.socialLinks.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#00D2FF]" />
                    <span>GitHub</span>
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
