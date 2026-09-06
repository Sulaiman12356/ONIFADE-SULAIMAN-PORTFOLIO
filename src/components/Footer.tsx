import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUp, Linkedin, Github, Instagram, MessageCircle, Lock, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

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

  return (
    <footer id="main-footer" className="bg-[#08183A] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Structure Requested by User:
            LEFT: Brand (Mr. Clarity, Tagline: "Technology. Creativity. Data. Digital Growth.")
            CENTER: Quick Links (Home, About, Expertise, Services, Projects, Experience, CV, Contact)
            RIGHT: Connect (LinkedIn, GitHub, Instagram, WhatsApp, Email)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* LEFT: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0B5ED7] to-[#00D2FF] p-[2px] shadow-lg shadow-blue-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#08183A] flex items-center justify-center text-white font-black text-lg">
                  <span className="text-[#00D2FF]">C</span>
                </div>
              </div>

              <div>
                <span className="font-black text-2xl tracking-tight text-white block">
                  {profile.brandName || 'MR. CLARITY'}
                </span>
                <span className="text-xs font-bold text-[#00D2FF]">
                  Technology. Creativity. Data. Digital Growth.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              {profile.bio || 'I combine technology, creativity and data to help businesses communicate better, grow digitally and make smarter decisions.'}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.availability}</span>
              </div>
              <div className="text-slate-400">
                Location: <span className="text-slate-200 font-medium">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* CENTER: Quick Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#00D2FF]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-300">
              <a href="#home" className="hover:text-white hover:translate-x-1 transition-all">Home</a>
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all">About</a>
              <a href="#expertise" className="hover:text-white hover:translate-x-1 transition-all">Expertise</a>
              <a href="#services" className="hover:text-white hover:translate-x-1 transition-all">Services</a>
              <a href="#projects" className="hover:text-white hover:translate-x-1 transition-all">Projects</a>
              <a href="#testimonials" className="hover:text-white hover:translate-x-1 transition-all">Testimonials</a>
              <a href="#cv" className="hover:text-white hover:translate-x-1 transition-all font-semibold text-[#00D2FF]">CV</a>
              <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all">Contact</a>
            </div>
          </div>

          {/* RIGHT: Connect (Editable via Admin) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#00D2FF]">
              Connect
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              {profile.socialLinks.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#00D2FF] transition-colors"
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
                  className="flex items-center gap-2.5 hover:text-[#00D2FF] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#00D2FF]" />
                  <span>GitHub</span>
                </a>
              )}

              {profile.socialLinks.instagram && (
                <a
                  href={profile.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#00D2FF] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#00D2FF]" />
                  <span>Instagram</span>
                </a>
              )}

              {profile.socialLinks.whatsapp && (
                <a
                  href={profile.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#00D2FF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 hover:text-[#00D2FF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00D2FF]" />
                  <span className="truncate">{profile.email}</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM:
            © [Dynamic Current Year] Onifade Sulaiman. All Rights Reserved.
            Privacy Policy, Terms of Use, Admin Access & Scroll To Top
        */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {currentYear} {profile.name || 'Onifade Sulaiman'}. All Rights Reserved.</span>
            
            <span className="hidden sm:inline text-slate-600">•</span>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-[#00D2FF] transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-[#00D2FF] transition-colors underline-offset-2 hover:underline"
              >
                Terms of Use
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Admin Dashboard Trigger */}
            <button
              id="footer-admin-portal-btn"
              onClick={handleOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors text-[11px] font-semibold"
              title="Open Secure Admin Dashboard"
            >
              <Lock className="w-3 h-3 text-[#00D2FF]" />
              <span>Admin Portal</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#0B5ED7] text-white transition-colors text-xs font-semibold"
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
          <div className="bg-white text-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-black text-[#0B1F3A] mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h3>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Your privacy is important to Onifade Sulaiman ({profile.brandName}). Information submitted through inquiry or hiring forms is stored securely and used exclusively to communicate regarding project scopes, business partnerships, or contract opportunities.
                  </p>
                  <p>
                    We never sell, rent, or distribute personal contact information to third parties. All project discussions and non-public client materials remain strictly confidential.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All case studies, brand materials, graphics, code demonstrations, and curriculum summaries displayed on this website represent the verified work and intellectual contributions of Onifade Sulaiman ({profile.brandName}).
                  </p>
                  <p>
                    Client trademarks, logos, and platform names (e.g. Meta, Canva, TikTok) are the property of their respective owners and are referenced solely to describe software proficiencies and campaign environments.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
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
