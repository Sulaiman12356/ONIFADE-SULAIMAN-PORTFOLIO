import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Lock, Sparkles, Download } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface NavbarProps {
  onOpenHireMe: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe, onOpenCv }) => {
  const { setIsAdminOpen, profile } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'how-i-work', 'projects', 'brand-design', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'CV', href: '#cv', id: 'cv' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar (Inspired by Canva Training Template) */}
      <div className="bg-[#031B3D] text-white text-[11px] sm:text-xs font-semibold py-2 px-4 border-b border-[#062B63] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#062B63] text-[#00D2FF] font-black tracking-wide border border-[#0B5ED7]/40 text-[10px] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              LIVE STATUS
            </span>
            <span className="text-slate-200">
              Available for Q2/Q3 High-Growth Projects • Fast WhatsApp Response • 100% Focused on Measurable ROI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenHireMe}
              className="text-[#00D2FF] hover:text-white font-bold flex items-center gap-1 transition-colors group cursor-pointer"
            >
              <span>CLAIM FREE AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-slate-300 hover:text-white flex items-center gap-1 text-[11px] transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3 text-[#0B5ED7]" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>

      <header
        id="main-header"
        className={`transition-all duration-200 bg-white ${
          isScrolled
            ? 'shadow-md border-b border-[#E2E8F0] py-3'
            : 'border-b border-[#E2E8F0]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: MR. CLARITY Logo */}
            <a
              id="nav-brand-logo"
              href="#home"
              className="flex items-center gap-3 group text-decoration-none"
            >
              {/* Shield/Sparkle Logo Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#0B5ED7] group-hover:bg-[#062B63] transition-all flex items-center justify-center text-white shadow-md shadow-[#0B5ED7]/25">
                <span className="font-black text-lg tracking-wider text-white">C</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-tight text-[#062B63] group-hover:text-[#0B5ED7] transition-colors">
                    {profile.brandName || 'MR. CLARITY'}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#0B5ED7] border border-[#0B5ED7]/25">
                    SOLUTIONS
                  </span>
                </div>
                <span className="text-[11px] font-semibold tracking-wide text-[#64748B]">
                  Digital Marketing &amp; AI
                </span>
              </div>
            </a>

            {/* RIGHT (Desktop): Navigation links + Primary HIRE ME button */}
            <div className="hidden lg:flex items-center gap-6">
              <nav id="desktop-nav-links" className="flex items-center space-x-5 text-sm font-semibold text-[#062B63]">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      id={`nav-link-${link.id}`}
                      href={link.href}
                      className={`transition-colors py-1 relative ${
                        isActive
                          ? 'text-[#0B5ED7] font-bold'
                          : 'text-[#062B63] hover:text-[#0B5ED7]'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5ED7] rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3 pl-2 border-l border-[#E2E8F0]">
                {/* 100% Free Consultation badge */}
                <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-bold text-[#15803D]">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span>100% Free Consultation</span>
                </div>

                {/* Primary HIRE ME Button */}
                <button
                  id="nav-hire-me-btn"
                  onClick={onOpenHireMe}
                  className="bg-[#0B5ED7] hover:bg-[#062B63] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-md shadow-[#0B5ED7]/25 transition-all duration-200 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>HIRE ME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Admin Access Portal Trigger */}
                <button
                  id="nav-admin-btn"
                  onClick={() => setIsAdminOpen(true)}
                  className="p-2 rounded-xl text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] transition-colors cursor-pointer"
                  title="Admin Control Center"
                  aria-label="Admin Control Center"
                >
                  <Lock className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* MOBILE: Clean Hamburger & Prominent Hire Me */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-hire-me-btn"
                onClick={onOpenHireMe}
                className="bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-sm shadow-[#0B5ED7]/25"
              >
                HIRE ME
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#062B63] hover:bg-[#EFF6FF] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden bg-white border-b border-[#E2E8F0] shadow-xl px-4 py-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E2E8F0]">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#EFF6FF] text-[#0B5ED7]'
                      : 'text-[#062B63] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireMe();
                }}
                className="w-full py-3 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#0B5ED7]/25 transition-colors"
              >
                <span>HIRE ME FOR YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-2 px-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCv();
                  }}
                  className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View / Download CV</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="text-xs font-bold text-[#64748B] hover:text-[#062B63] flex items-center gap-1"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
