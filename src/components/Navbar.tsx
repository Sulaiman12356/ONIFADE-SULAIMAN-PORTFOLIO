import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

interface NavbarProps {
  onOpenHireMe: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe, onOpenCv }) => {
  const { setIsAdminOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'expertise', 'projects', 'testimonials', 'cv', 'contact'];
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
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Value Add', href: '#services', id: 'services' },
    { name: 'Skills & Tools', href: '#expertise', id: 'expertise' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'CV', href: '#cv', id: 'cv' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08183A]/95 backdrop-blur-md shadow-xl border-b border-white/10 h-20'
          : 'bg-[#08183A] border-b border-white/10 h-20'
      } flex items-center`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo matching canvadesigntraining.vercel.app prototype */}
          <a
            id="nav-brand-logo"
            href="#home"
            className="flex items-center gap-3 group text-decoration-none"
          >
            {/* Circular glowing logo mark */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0B5ED7] to-[#00D2FF] p-[2px] shadow-lg shadow-blue-500/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#08183A] flex items-center justify-center text-white font-black text-lg">
                <span className="text-[#00D2FF]">C</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#00D2FF] transition-colors">
                  MR. CLARITY
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-[#00D2FF] border border-[#00D2FF]/30 hidden sm:inline-block">
                  PRO
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-slate-300">
                Turn Ideas into <span className="text-[#FFB800] font-bold">Impact</span>. Scale <span className="text-[#FFB800] font-bold">Globally</span>.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-[#00D2FF] font-bold border-b-2 border-[#00D2FF]'
                      : 'hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-admin-portal-btn"
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              title="Open Secure Admin Portal"
            >
              <Lock className="w-3.5 h-3.5 text-[#00D2FF]" />
            </button>

            <button
              id="nav-quick-cv-btn"
              onClick={onOpenCv}
              className="text-xs font-bold px-4 py-2 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors border border-white/20"
            >
              View CV
            </button>

            <button
              id="nav-hire-me-btn"
              onClick={onOpenHireMe}
              className="bg-gradient-to-r from-[#0B5ED7] to-[#2563EB] hover:from-[#2563EB] hover:to-[#00D2FF] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] inline-flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-20 left-0 right-0 bg-[#08183A] border-b border-white/10 shadow-2xl px-6 py-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-500/20 text-[#00D2FF]'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full py-3 rounded-xl border border-white/20 text-xs font-bold text-white hover:bg-white/10 text-center"
              >
                View Complete CV
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireMe();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0B5ED7] to-[#00D2FF] text-white text-xs font-extrabold shadow-lg shadow-blue-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Hire Mr. Clarity Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
