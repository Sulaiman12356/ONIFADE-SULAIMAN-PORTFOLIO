import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Download, 
  Mail, 
  MessageCircle,
  X,
  Code2,
  TrendingUp,
  Palette,
  BarChart2,
  Cpu,
  Lightbulb,
  Briefcase,
  Users2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenCv: () => void;
  onOpenHireMe: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv, onOpenHireMe }) => {
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);

  const highlights = [
    { name: 'Computer Science', icon: <Code2 className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Digital Marketing', icon: <TrendingUp className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Graphics Design', icon: <Palette className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Data Analysis', icon: <BarChart2 className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'AI & Automation', icon: <Cpu className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Technology', icon: <Lightbulb className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Entrepreneurship', icon: <Briefcase className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Leadership', icon: <Users2 className="w-4 h-4 text-[#0B5ED7]" /> },
    { name: 'Training & Mentorship', icon: <BookOpen className="w-4 h-4 text-[#0B5ED7]" /> },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* PROFILE IMAGE BESIDE THE TEXT (col-span-5) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background aura */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#0B5ED7]/15 rounded-3xl blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#00D2FF]/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-white p-4 sm:p-5 border-2 border-[#E5EAF1] shadow-xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Onifade Sulaiman (Mr. Clarity)"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B63]/80 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-black tracking-tight leading-none">
                          Onifade Sulaiman
                        </div>
                        <div className="text-xs font-bold text-[#00D2FF] mt-1">
                          Mr. Clarity
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtext info pill */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#062B63] font-bold">
                    <GraduationCap className="w-4 h-4 text-[#0B5ED7]" />
                    <span>Computer Science Student</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#64748B]">OOU, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT & COPY (col-span-7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            {/* Eyebrow requested: ABOUT ME */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>ABOUT ME</span>
            </div>

            {/* Heading requested: "Who I Am" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight">
              Who I Am
            </h2>

            {/* Professional copy requested:
                "I’m Onifade Sulaiman, also known as Mr. Clarity — a Computer Science student, digital marketer, graphics designer and technology enthusiast passionate about using digital tools, data and creativity to solve real-world problems."
                "My work sits at the intersection of technology, digital marketing, design, data and innovation. I enjoy understanding problems, developing practical solutions and communicating ideas in ways people can easily understand." */}
            <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
              <p className="font-medium text-[#0B1F3A]">
                I’m Onifade Sulaiman, also known as Mr. Clarity — a Computer Science student, digital marketer, graphics designer and technology enthusiast passionate about using digital tools, data and creativity to solve real-world problems.
              </p>
              <p className="text-[#64748B]">
                My work sits at the intersection of technology, digital marketing, design, data and innovation. I enjoy understanding problems, developing practical solutions and communicating ideas in ways people can easily understand.
              </p>
            </div>

            {/* Highlights requested:
                • Computer Science
                • Digital Marketing
                • Graphics Design
                • Data Analysis
                • AI & Automation
                • Technology
                • Entrepreneurship
                • Leadership
                • Training & Mentorship */}
            <div className="pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#062B63] block mb-3">
                Key Domains &amp; Focus Areas:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#E5EAF1] shadow-xs text-xs font-bold text-[#062B63] hover:border-[#0B5ED7] hover:text-[#0B5ED7] transition-colors"
                  >
                    <div className="p-1 rounded-md bg-[#F5F9FF]">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA requested: More About Me → */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="more-about-me-btn"
                onClick={() => setIsMoreAboutOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-sm font-bold shadow-md shadow-blue-900/10 transition-all active:scale-[0.98]"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E5EAF1] text-xs font-bold text-[#062B63] transition-colors"
              >
                <Download className="w-4 h-4 text-[#0B5ED7]" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* "More About Me" Detailed Modal / In-Depth Biography */}
      {isMoreAboutOpen && (
        <div 
          id="more-about-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-[#E5EAF1] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsMoreAboutOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] text-[#0B5ED7] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IN-DEPTH PROFILE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
                About Onifade Sulaiman (Mr. Clarity)
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Computer Science Undergraduate • Digital Marketer • Creative Technologist
              </p>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-[#334155] leading-relaxed">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5EAF1] space-y-2">
                <h4 className="font-bold text-[#062B63] text-sm">Academic Background &amp; Foundations</h4>
                <p>
                  Currently pursuing a Bachelor of Science (B.Sc.) in Computer Science at Olabisi Onabanjo University (OOU), Ago-Iwoye, Nigeria. My academic studies center on algorithm design, relational database structures (SQL), software development principles, and analytical computing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5EAF1] space-y-2">
                <h4 className="font-bold text-[#062B63] text-sm">The Philosophy of &ldquo;Clarity&rdquo;</h4>
                <p>
                  I earned the moniker &ldquo;Mr. Clarity&rdquo; because I dismantle chaotic, convoluted digital problems into streamlined, systematic action plans. Whether it&apos;s untangling audience targeting inside Meta Ads Manager, structuring a complex Power BI dashboard, or teaching design principles to non-designers, clarity is the common denominator of every successful campaign.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5EAF1] space-y-2">
                <h4 className="font-bold text-[#062B63] text-sm">Leadership &amp; Community Building</h4>
                <p>
                  As the founder of Clarity Digital Academy, I have trained over 500 participants across hands-on Canva masterclasses, digital advertising workshops, and technical mentorship sessions, empowering youths and business founders to monetize practical digital skills.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5EAF1] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setIsMoreAboutOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors"
              >
                Close Window
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsMoreAboutOpen(false);
                    onOpenCv();
                  }}
                  className="px-4 py-2.5 rounded-xl border border-[#E5EAF1] text-xs font-bold text-[#062B63] hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>Download CV</span>
                </button>

                <button
                  onClick={() => {
                    setIsMoreAboutOpen(false);
                    onOpenHireMe();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
