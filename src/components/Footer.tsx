import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUp, Lock, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { BrandIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const { profile, settings, setIsAdminOpen, setAdminActiveTab } = usePortfolio();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleOpenAdmin = () => {
    setAdminActiveTab('dashboard');
    setIsAdminOpen(true);
  };

  const email = profile.email || 'ipesolasulaiman@gmail.com';

  return (
    <footer id="main-footer" className="bg-[#062B63] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* LEFT: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B5ED7] flex items-center justify-center text-white font-black text-lg shadow-md">
                <span>C</span>
              </div>

              <div>
                <span className="font-black text-2xl tracking-tight text-white block">
                  {profile.brandName || 'MR. CLARITY'}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  Digital Marketing • Meta Ads • Brand Design • AI
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              {profile.bio || 'Helping businesses scale customer acquisition and build memorable brand authority through direct-response marketing, high-converting design, and AI automation.'}
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.availability}</span>
              </div>
              <div className="text-slate-400">
                Location: <span className="text-slate-200 font-medium">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFF6FF]">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-300">
              <a href="#home" className="hover:text-white hover:translate-x-1 transition-all">Home</a>
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all">About</a>
              <a href="#services" className="hover:text-white hover:translate-x-1 transition-all">Services</a>
              <a href="#why-hire-me" className="hover:text-white hover:translate-x-1 transition-all">Why Hire Me</a>
              <a href="#how-i-work" className="hover:text-white hover:translate-x-1 transition-all">Work Process</a>
              <a href="#skills" className="hover:text-white hover:translate-x-1 transition-all">Skills</a>
              <a href="#experience" className="hover:text-white hover:translate-x-1 transition-all">Experience</a>
              <a href="#cv" className="hover:text-white hover:translate-x-1 transition-all font-bold text-[#EFF6FF]">CV Dossier</a>
              <a href="#faq" className="hover:text-white hover:translate-x-1 transition-all">FAQ</a>
              <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all">Contact</a>
            </div>
          </div>

          {/* RIGHT: Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFF6FF]">
              Connect &amp; Social
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              {profile.socialLinks?.whatsapp && (
                <a
                  href={profile.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <BrandIcon name="whatsapp" size={16} className="text-[#25D366]" />
                  <span>WhatsApp Direct</span>
                </a>
              )}

              {profile.socialLinks?.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <BrandIcon name="linkedin" size={16} className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              )}

              {profile.socialLinks?.instagram && (
                <a
                  href={profile.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <BrandIcon name="instagram" size={16} className="text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
              )}

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0B5ED7]" />
                <span className="truncate">{email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM:
            © [Dynamic Current Year] Onifade Sulaiman. All Rights Reserved.
            Privacy Policy, Terms of Use, Admin Access & Scroll To Top
        */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {currentYear} Onifade Sulaiman (Mr. Clarity). All Rights Reserved.</span>
            
            <span className="hidden sm:inline text-slate-600">•</span>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                Terms of Service
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Admin Dashboard Trigger */}
            <button
              id="footer-admin-portal-btn"
              onClick={handleOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/15 transition-colors text-[11px] font-semibold"
              title="Open Secure Admin Dashboard"
            >
              <Lock className="w-3 h-3 text-[#0B5ED7]" />
              <span>Admin Portal</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B5ED7] hover:bg-blue-600 text-white transition-colors text-xs font-bold"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Legal Dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-[#0F172A] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-black text-[#062B63] mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <div className="text-xs sm:text-sm text-[#64748B] space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Your privacy is important to Onifade Sulaiman ({profile.brandName}). Information submitted through consultation or inquiry forms is stored securely and used exclusively to communicate regarding project scopes, marketing campaigns, or strategic business partnerships.
                  </p>
                  <p>
                    We never sell, rent, or distribute client information. All campaign assets and strategic data remain strictly confidential.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All case studies, brand systems, landing page architectures, code demonstrations, and curriculum summaries displayed on this website represent the work of Onifade Sulaiman ({profile.brandName}).
                  </p>
                  <p>
                    Third-party platform names (such as Meta, Canva, TikTok, OpenAI) are trademarks of their respective owners and are referenced solely to describe software proficiencies and advertising environments.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#062B63] text-white text-xs font-bold hover:bg-[#0B5ED7] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
