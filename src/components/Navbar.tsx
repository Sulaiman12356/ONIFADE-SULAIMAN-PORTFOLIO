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
    { name: 'Process', href: '#how-i-work', id: 'how-i-work' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Branding', href: '#brand-design', id: 'brand-design' },
    { name: 'CV', href: '#cv', id: 'cv' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-md border-b border-[#E2E8F0] py-3'
          : 'border-b border-[#E2E8F0]/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: MR. CLARITY or professional Clarity Logo */}
          <a
            id="nav-brand-logo"
            href="#home"
            className="flex items-center gap-3 group text-decoration-none"
          >
            {/* Professional Clarity Monogram Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#062B63] group-hover:bg-[#0B5ED7] transition-all flex items-center justify-center text-white shadow-md shadow-[#062B63]/15">
              <span className="font-black text-lg tracking-wider text-white">C</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-[#062B63] group-hover:text-[#0B5ED7] transition-colors">
                  {profile.brandName || 'MR. CLARITY'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#0B5ED7] border border-[#0B5ED7]/20">
                  GROWTH
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-[#64748B]">
                Digital Marketing &amp; AI
              </span>
            </div>
          </a>

          {/* RIGHT (Desktop): Navigation links + Primary HIRE ME button */}
          <div className="hidden lg:flex items-center gap-7">
            <nav id="desktop-nav-links" className="flex items-center space-x-6 text-sm font-semibold text-[#062B63]">
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
              {/* Primary HIRE ME Button */}
              <button
                id="nav-hire-me-btn"
                onClick={onOpenHireMe}
                className="bg-[#062B63] hover:bg-[#0B5ED7] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#062B63]/15 transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
              >
                <span>HIRE ME</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Admin Access Portal Trigger */}
              <button
                id="nav-admin-btn"
                onClick={() => setIsAdminOpen(true)}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#062B63] hover:bg-[#EFF6FF] transition-colors"
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
              className="bg-[#062B63] hover:bg-[#0B5ED7] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
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
              className="w-full py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
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
  );
};
