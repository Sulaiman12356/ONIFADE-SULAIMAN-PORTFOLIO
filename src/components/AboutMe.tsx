import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Target,
  Palette,
  Cpu,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  Layout,
  MessageCircle,
  HelpCircle,
  Compass,
  Layers,
  Search,
  CheckSquare,
  Rocket,
  RefreshCw,
  Clock,
  Phone,
  Mail,
  Copy,
  Check,
  Zap,
  Globe,
  Share2,
  Sliders,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PERSONAL_INFO, DEFAULT_ABOUT_SECTIONS } from '../data/portfolioData';
import { resolveAboutImage } from '../utils/imageUtils';
import { AboutSectionItem } from '../types';

interface AboutMeProps {
  onOpenCv: () => void;
  onOpenHireMe: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv, onOpenHireMe }) => {
  const { profile, aboutSections: contextSections } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const portraitSrc = resolveAboutImage(
    profile.aboutPhoto || profile.profilePhoto,
    PERSONAL_INFO.aboutImage || PERSONAL_INFO.portraitImage
  );

  // Use sections from context (synced with Firestore / localStorage) or fallback
  const sectionsList: AboutSectionItem[] =
    contextSections && contextSections.length > 0 ? contextSections : DEFAULT_ABOUT_SECTIONS;

  // Helper to find subsection content by number (e.g., "01", "02")
  const getSection = (numStr: string): AboutSectionItem => {
    const found = sectionsList.find((s) => s.sectionNumber === numStr);
    if (found) return found;
    const defaultFound = DEFAULT_ABOUT_SECTIONS.find((s) => s.sectionNumber === numStr);
    return (
      defaultFound || {
        id: `about-${numStr}`,
        sectionNumber: numStr,
        title: `SECTION ${numStr}`,
        content: '',
        order: parseInt(numStr, 10),
        isPublished: true,
      }
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ipesolasulaiman@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sec01 = getSection('01');
  const sec02 = getSection('02');
  const sec03 = getSection('03');
  const sec04 = getSection('04');
  const sec05 = getSection('05');
  const sec06 = getSection('06');
  const sec07 = getSection('07');
  const sec08 = getSection('08');
  const sec09 = getSection('09');
  const sec10 = getSection('10');
  const sec11 = getSection('11');
  const sec12 = getSection('12');
  const sec13 = getSection('13');
  const sec14 = getSection('14');
  const sec15 = getSection('15');

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* =====================================================
            01. WHO I AM
            ===================================================== */}
        {sec01.isPublished !== false && (
          <div className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Portrait and Badges */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-2xl overflow-hidden bg-[#F8FAFC] border-2 border-[#E2E8F0] shadow-xl p-2">
                    <img
                      src={portraitSrc || '/onifade.jpg'}
                      onError={(e) => {
                        if (e.currentTarget.src !== window.location.origin + '/onifade.jpg') {
                          e.currentTarget.src = '/onifade.jpg';
                        }
                      }}
                      alt="Onifade Sulaiman (Mr. Clarity)"
                      className="w-full h-auto aspect-4/5 object-cover object-top rounded-xl"
                    />

                    {/* Floating Metrics Badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E2E8F0] shadow-lg flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                          Meta Ads Spend
                        </div>
                        <div className="text-xl font-black text-[#062B63]">
                          ₦500K+
                        </div>
                      </div>
                      <div className="h-8 w-px bg-[#E2E8F0]" />
                      <div>
                        <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                          Experience
                        </div>
                        <div className="text-xl font-black text-[#0B5ED7]">
                          2+ Years
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recognition Tag */}
                  <div className="mt-4 p-4 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#062B63] text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                      MC
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#062B63]">
                        Onifade Sulaiman • Mr. Clarity
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        Digital Marketer &amp; Digital Solutions Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                  <span>01. WHO I AM</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63] uppercase">
                  {sec01.title}
                </h2>

                {sec01.subtitle && (
                  <p className="text-lg font-bold text-[#0B5ED7]">
                    {sec01.subtitle}
                  </p>
                )}

                <div className="space-y-4 text-base text-[#334155] leading-relaxed">
                  <p>
                    I am Onifade Sulaiman, professionally known as <span className="font-bold text-[#062B63]">Mr. Clarity</span>. I am a Digital Marketer and Digital Solutions Specialist focused on helping businesses build stronger digital presence, attract the right audience and turn ideas into practical digital solutions.
                  </p>
                  <p>
                    My work sits at the intersection of Digital Marketing, Meta Ads, Landing Pages, Brand Design, Social Media Management, AI Automation and Digital Development.
                  </p>
                  <p>
                    I enjoy taking something unclear and turning it into something simple, useful and understandable. That mindset is a major part of what the name Mr. Clarity represents.
                  </p>
                </div>

                {/* Key Capability Chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    'Digital Marketing',
                    'Meta Ads',
                    'Landing Pages',
                    'Brand Design',
                    'Social Media',
                    'AI Automation',
                    'Web Development',
                  ].map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#062B63]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenHireMe}
                    className="bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-xl font-black flex items-center gap-2 shadow-md shadow-[#0B5ED7]/25 transition-all text-sm active:scale-[0.98] cursor-pointer"
                  >
                    <span>HIRE ME</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenCv}
                    className="bg-white hover:bg-[#EFF6FF] border-2 border-[#0B5ED7] text-[#0B5ED7] px-6 py-3.5 rounded-xl font-black flex items-center gap-2 transition-all text-sm shadow-xs cursor-pointer"
                  >
                    <span>DOWNLOAD MY CV</span>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =====================================================
            02. WHERE IT STARTED
            ===================================================== */}
        {sec02.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>02. WHERE IT STARTED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec02.title}
              </h2>
              {sec02.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec02.subtitle}
                </p>
              )}
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                I did not start with everything figured out. I started by learning, creating and trying to understand how things work. My curiosity was not only about creating something that looked good. I became interested in why some businesses get attention online while others struggle to be noticed.
              </p>
            </div>

            {/* 4 Interactive Question Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  q: 'Why do some advertisements get people to stop scrolling?',
                  tag: 'Attention & Hook',
                },
                {
                  q: 'Why do some brands immediately look trustworthy?',
                  tag: 'Visual Authority',
                },
                {
                  q: 'Why does one landing page make you want to take action while another makes you leave?',
                  tag: 'Conversion & Copy',
                },
                {
                  q: 'Why do some businesses have good products but still struggle to get customers online?',
                  tag: 'System & Offer',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#0B5ED7]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold text-[#0B5ED7] bg-[#EFF6FF] px-2.5 py-1 rounded-md mb-3">
                      {item.tag}
                    </span>
                    <p className="text-base font-bold text-[#062B63] leading-snug">
                      "{item.q}"
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B]">
                    Question {idx + 1} that shaped my marketing philosophy
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm sm:text-base font-medium text-[#475569] text-center">
              Those questions gradually changed the way I looked at digital work.
            </p>
          </div>
        )}

        {/* =====================================================
            03. FROM DESIGN TO DIGITAL MARKETING
            ===================================================== */}
        {sec03.isPublished !== false && (
          <div className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                <span>03. FROM DESIGN TO DIGITAL MARKETING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec03.title}
              </h2>
              {sec03.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7]">
                  {sec03.subtitle}
                </p>
              )}

              <div className="space-y-4 text-base text-[#334155] leading-relaxed">
                <p>
                  One of the important stages of my journey was graphics design.
                </p>
                <p className="p-4 rounded-xl bg-[#EFF6FF] border-l-4 border-[#0B5ED7] text-[#062B63] font-semibold">
                  Design taught me something simple but powerful: People often notice what they see before they understand what you are saying.
                </p>
                <p>
                  That changed the way I approached design. I became less interested in creating something that was simply beautiful and more interested in understanding what the design was supposed to achieve.
                </p>
                <p>
                  That shift eventually led me deeper into Digital Marketing.
                </p>
              </div>
            </div>

            {/* Right: The 5 Objectives Visual Matrix */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="text-xs font-black text-[#062B63] uppercase tracking-wider mb-4">
                  What is the design meant to achieve?
                </div>

                {[
                  { title: 'Attract Attention', desc: 'Break scroll fatigue in fast social feeds with high-contrast hooks.', icon: <Sparkles className="w-4 h-4 text-[#0B5ED7]" /> },
                  { title: 'Build Trust', desc: 'Signal legitimacy, credibility and professional authority instantly.', icon: <Award className="w-4 h-4 text-[#0B5ED7]" /> },
                  { title: 'Communicate an Offer', desc: 'Make the value proposition immediately clear without jargon.', icon: <Target className="w-4 h-4 text-[#0B5ED7]" /> },
                  { title: 'Promote a Product', desc: 'Spotlight the transformation and benefits for the buyer.', icon: <Rocket className="w-4 h-4 text-[#0B5ED7]" /> },
                  { title: 'Generate a Response', desc: 'Guide the user directly toward clicking, messaging or inquiring.', icon: <ArrowRight className="w-4 h-4 text-[#0B5ED7]" /> },
                ].map((obj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                        {obj.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#062B63]">{obj.title}</div>
                        <div className="text-xs text-[#64748B]">{obj.desc}</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            04. DISCOVERING META ADS
            ===================================================== */}
        {sec04.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                  <span>04. DISCOVERING META ADS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                  {sec04.title}
                </h2>
                {sec04.subtitle && (
                  <p className="text-base font-bold text-[#0B5ED7]">
                    {sec04.subtitle}
                  </p>
                )}

                <div className="space-y-4 text-base text-[#334155] leading-relaxed">
                  <p>
                    In 2024, I began taking Digital Marketing more seriously.
                  </p>
                  <p>
                    I started learning how Facebook and Instagram advertising actually works beyond simply pressing the boost button.
                  </p>
                  <p>
                    I became interested in audience targeting, campaign objectives, ad creatives, lead generation, offers, landing pages and conversion.
                  </p>
                  <p className="font-semibold text-[#062B63]">
                    The more I learned, the more I realized that successful advertising is not simply about spending money to show an advert. It is about understanding the audience, presenting the right message, creating a clear offer and giving people a reason to take the next step.
                  </p>
                </div>
              </div>

              {/* Right: Technical Meta Ads Capability Stack */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                  <div className="text-xs font-black text-[#062B63] uppercase tracking-wider mb-2">
                    Meta Ads Focus Disciplines
                  </div>
                  {[
                    { label: 'Audience Targeting', detail: 'High-intent interests, custom audiences, lookalikes' },
                    { label: 'Campaign Objectives', detail: 'Leads, sales, traffic and direct messaging' },
                    { label: 'Direct-Response Creatives', detail: 'Visual hooks, video ads & high-CTR copy' },
                    { label: 'Conversion & Tracking', detail: 'Meta Pixel, Conversions API (CAPI) setup' },
                    { label: 'Testing & Optimization', detail: 'A/B creative testing, budget scaling & ROAS' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-[#E2E8F0]">
                      <div className="text-xs font-bold text-[#062B63]">{item.label}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            05. FROM RUNNING ADS TO UNDERSTANDING THE CUSTOMER JOURNEY
            ===================================================== */}
        {sec05.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>05. CUSTOMER JOURNEY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec05.title}
              </h2>
              {sec05.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec05.subtitle}
                </p>
              )}
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                One of the biggest lessons I learned was that an advertisement does not exist alone. You can have a good advert and still lose the customer after the click. That made me start looking at the entire customer journey:
              </p>
            </div>

            {/* 8-Step Visual Customer Journey Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
              {[
                { step: '01', title: 'The Ad', desc: 'Paid placement' },
                { step: '02', title: 'Creative', desc: 'Visual hook' },
                { step: '03', title: 'Message', desc: 'Clear copy' },
                { step: '04', title: 'Landing Page', desc: 'Fast CRO' },
                { step: '05', title: 'Branding', desc: 'Visual trust' },
                { step: '06', title: 'The Offer', desc: 'Value clarity' },
                { step: '07', title: 'Follow-up', desc: 'Lead nurture' },
                { step: '08', title: 'Experience', desc: 'Retention' },
              ].map((st, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] text-center shadow-2xs hover:border-[#0B5ED7]/40 transition-colors"
                >
                  <span className="text-[10px] font-black text-[#0B5ED7] bg-[#EFF6FF] px-1.5 py-0.5 rounded">
                    {st.step}
                  </span>
                  <div className="text-xs font-bold text-[#062B63] mt-2 mb-0.5">{st.title}</div>
                  <div className="text-[10px] text-[#64748B]">{st.desc}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-[#0B5ED7]/20 text-center max-w-2xl mx-auto">
              <div className="text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-1">
                The Core Project Question
              </div>
              <p className="text-base sm:text-lg font-bold text-[#062B63]">
                "Today, when I look at a digital marketing project, I do not only ask, 'How do we run the advert?' I also ask, 'What happens after someone sees it?'"
              </p>
            </div>
          </div>
        )}

        {/* =====================================================
            06. WHY I COMBINE MARKETING, DESIGN AND TECHNOLOGY
            ===================================================== */}
        {sec06.isPublished !== false && (
          <div className="scroll-mt-24 space-y-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>06. THE THREE PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec06.title}
              </h2>
              {sec06.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec06.subtitle}
                </p>
              )}
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                As I worked on different digital projects, I noticed that many businesses have good ideas but disconnected digital systems:
              </p>
            </div>

            {/* 3 Interconnected Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#E2E8F0] hover:border-[#0B5ED7] transition-all shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0B5ED7] flex items-center justify-center font-black mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#062B63] mb-2 uppercase">
                  Marketing
                </h3>
                <p className="text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
                  Reaching the Right Audience
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Traffic, Meta advertising, campaign objectives, audience targeting, direct-response offers and lead acquisition.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#E2E8F0] hover:border-[#0B5ED7] transition-all shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0B5ED7] flex items-center justify-center font-black mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#062B63] mb-2 uppercase">
                  Design
                </h3>
                <p className="text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
                  Communicating Value Clearly
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Visual authority, Canva Pro brand identities, ad creatives, conversion-focused landing page UI and clarity.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#E2E8F0] hover:border-[#0B5ED7] transition-all shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0B5ED7] flex items-center justify-center font-black mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#062B63] mb-2 uppercase">
                  Technology
                </h3>
                <p className="text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
                  Solving Business Problems
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  AI workflows, automated lead routing, conversion landing pages and modern software tools built for practical use.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#475569] text-center max-w-2xl mx-auto">
              Today, I see AI tools, automation, websites and digital systems as practical tools for solving business problems, not simply technologies to show off.
            </p>
          </div>
        )}

        {/* =====================================================
            07. WHAT I DO TODAY
            ===================================================== */}
        {sec07.isPublished !== false && (
          <div className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>07. CORE DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec07.title}
              </h2>
              {sec07.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec07.subtitle}
                </p>
              )}
              <p className="mt-4 text-base text-[#64748B]">
                I help businesses, founders and teams build clear and effective digital solutions across 8 specialized disciplines:
              </p>
            </div>

            {/* 8 Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  num: '01',
                  name: 'META ADS MANAGEMENT',
                  desc: 'Facebook & Instagram advertising strategy, campaign setup, audience targeting, creative direction, testing and optimization.',
                  tag: 'Paid Acquisition',
                },
                {
                  num: '02',
                  name: 'LANDING PAGE DESIGN',
                  desc: 'Conversion-focused landing pages designed to support advertising campaigns, lead generation and clear customer journeys.',
                  tag: 'Conversion Rate',
                },
                {
                  num: '03',
                  name: 'BRAND DESIGN',
                  desc: 'Professional visual identities, marketing graphics and brand assets that help businesses communicate clearly.',
                  tag: 'Visual Identity',
                },
                {
                  num: '04',
                  name: 'SOCIAL MEDIA MANAGEMENT',
                  desc: 'Content planning, social media strategy, creative content and audience engagement across platforms.',
                  tag: 'Organic Reach',
                },
                {
                  num: '05',
                  name: 'AI AUTOMATION',
                  desc: 'Practical AI-powered workflows and automation designed to reduce repetitive work and improve digital processes.',
                  tag: 'Productivity',
                },
                {
                  num: '06',
                  name: 'AI SOFTWARE & WEBSITES',
                  desc: 'Modern websites, landing pages and digital applications designed around practical business needs.',
                  tag: 'Development',
                },
                {
                  num: '07',
                  name: 'VIDEO EDITING',
                  desc: 'Short-form and promotional video editing using tools such as CapCut for social feeds and direct-response ads.',
                  tag: 'Direct Response',
                },
                {
                  num: '08',
                  name: 'DIGITAL MARKETING STRATEGY',
                  desc: 'Helping businesses understand their audience, positioning, offers, campaigns and digital customer journey.',
                  tag: 'Advisory',
                },
              ].map((serv, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B5ED7]/40 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-[#0B5ED7] bg-[#EFF6FF] px-2 py-0.5 rounded">
                        {serv.num}
                      </span>
                      <span className="text-[10px] font-bold text-[#64748B] uppercase">
                        {serv.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[#062B63] mb-2 leading-tight">
                      {serv.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenHireMe}
                    className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs font-bold text-[#0B5ED7] hover:text-[#062B63] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            08. WHAT I HAVE LEARNED ALONG THE WAY
            ===================================================== */}
        {sec08.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-14 rounded-3xl bg-[#062B63] text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-black text-[#93C5FD] uppercase tracking-wider">
                <span>08. CORE MARKETING PRINCIPLES</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                "{sec08.quote || 'Marketing is not simply about making noise. It is about communication.'}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 text-left">
                {[
                  'It is about understanding people.',
                  'It is about presenting the right message to the right audience.',
                  'It is about presenting it at the right time.',
                  'It is about making the offer clear.',
                  'It is about building genuine trust.',
                  'It is about making the next step easy to understand.',
                ].map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-white/90">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            09. MY APPROACH
            ===================================================== */}
        {sec09.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>09. THE 5-STAGE FRAMEWORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec09.title}
              </h2>
              {sec09.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec09.subtitle}
                </p>
              )}
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                I do not believe every business needs the same strategy. The right approach depends on the business, the audience, the offer and the goal.
              </p>
            </div>

            {/* 5-Stage Framework Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
              {[
                { stage: '01', name: 'UNDERSTAND', desc: 'Understand the business, audience, offer and objective.', icon: <Search className="w-4 h-4 text-[#0B5ED7]" /> },
                { stage: '02', name: 'PLAN', desc: 'Build a practical strategy based on the actual goal.', icon: <Compass className="w-4 h-4 text-[#0B5ED7]" /> },
                { stage: '03', name: 'CREATE', desc: 'Develop the campaign, creative, landing page or digital solution.', icon: <Palette className="w-4 h-4 text-[#0B5ED7]" /> },
                { stage: '04', name: 'LAUNCH', desc: 'Put the strategy into live action with proper tracking.', icon: <Rocket className="w-4 h-4 text-[#0B5ED7]" /> },
                { stage: '05', name: 'IMPROVE', desc: 'Review performance, identify weaknesses and optimize.', icon: <RefreshCw className="w-4 h-4 text-[#0B5ED7]" /> },
              ].map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#0B5ED7]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-3">
                      {st.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#0B5ED7] uppercase">
                      STAGE {st.stage}
                    </span>
                    <h3 className="text-sm font-black text-[#062B63] mt-1 mb-1.5">
                      {st.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            10. MY PROFESSIONAL JOURNEY
            ===================================================== */}
        {sec10.isPublished !== false && (
          <div className="scroll-mt-24">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider mb-3">
                <span>10. TIMELINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec10.title}
              </h2>
              {sec10.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7] mt-1">
                  {sec10.subtitle}
                </p>
              )}
            </div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  year: '2024',
                  title: 'Foundation & Learning',
                  desc: 'Started building practical experience in Digital Marketing, Graphics Design and online business promotion.',
                },
                {
                  year: '2025',
                  title: 'Expansion & Execution',
                  desc: 'Expanded into Meta Ads, landing pages, branding, social media management and broader digital marketing projects.',
                },
                {
                  year: '2026',
                  title: 'Specialization & Systems',
                  desc: 'Focused more deeply on Meta Ads, landing pages, branding, social media, AI automation and digital development.',
                },
                {
                  year: 'CURRENT',
                  title: 'Active Building & Growth',
                  desc: 'Continuing to build, learn and work on freelance projects, professional opportunities, partnerships and digital solutions.',
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0B5ED7]/40 transition-colors"
                >
                  <div>
                    <div className="text-2xl font-black text-[#0B5ED7] mb-2 font-mono">
                      {t.year}
                    </div>
                    <div className="text-sm font-bold text-[#062B63] mb-2">
                      {t.title}
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            11. WHAT DRIVES ME
            ===================================================== */}
        {sec11.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#EFF6FF] border border-[#0B5ED7]/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                  <span>11. PHILOSOPHY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                  {sec11.title}
                </h2>
                {sec11.subtitle && (
                  <p className="text-base font-bold text-[#0B5ED7]">
                    {sec11.subtitle}
                  </p>
                )}
                <p className="text-base text-[#334155] leading-relaxed">
                  I enjoy taking unclear ideas and turning them into understandable solutions. That is where the name Mr. Clarity comes from.
                </p>
                <p className="text-base font-semibold text-[#062B63]">
                  For me, clarity is not just a name. It is an approach:
                </p>
              </div>

              {/* 5 Clarity Cards */}
              <div className="lg:col-span-6 space-y-2.5">
                {[
                  'Clarity in the message.',
                  'Clarity in the design.',
                  'Clarity in the strategy.',
                  'Clarity in the customer journey.',
                  'Clarity in what happens next.',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#0B5ED7]/20 shadow-2xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#062B63]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            12. WHERE I AM GOING
            ===================================================== */}
        {sec12.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                <span>12. WHERE I AM GOING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                {sec12.title}
              </h2>
              {sec12.subtitle && (
                <p className="text-base font-bold text-[#0B5ED7]">
                  {sec12.subtitle}
                </p>
              )}
              <p className="text-base text-[#475569] leading-relaxed">
                I am still learning, and I intend to keep learning. Digital marketing, technology and AI continue to change quickly. That means staying relevant requires curiosity, practice and the willingness to improve.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                My goal is to continue working on challenging projects, learn from businesses and teams, and build practical digital solutions that create real value.
              </p>
              <p className="text-base font-bold text-[#062B63]">
                Long term, I want to keep developing at the intersection of marketing, design, technology and AI.
              </p>
            </div>
          </div>
        )}

        {/* =====================================================
            13. WHY WORK WITH ME
            ===================================================== */}
        {sec13.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
                  <span>13. WHY WORK WITH ME</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#062B63] uppercase">
                  {sec13.title}
                </h2>
                {sec13.subtitle && (
                  <p className="text-base font-bold text-[#0B5ED7]">
                    {sec13.subtitle}
                  </p>
                )}
                <p className="text-base text-[#334155] leading-relaxed">
                  You should not work with me simply because I can run Meta Ads, design graphics, build a landing page or use AI tools.
                </p>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#0B5ED7] border-y border-r border-[#E2E8F0]">
                  <p className="text-base font-bold text-[#062B63]">
                    Work with me because I am interested in the problem behind the project.
                  </p>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  That mindset allows me to look beyond individual tasks and think about the bigger picture.
                </p>
              </div>

              {/* 5 Problem-Solving Discovery Questions */}
              <div className="lg:col-span-6 space-y-2.5">
                <div className="text-xs font-black text-[#062B63] uppercase tracking-wider mb-2">
                  What I seek to understand first:
                </div>
                {[
                  'What are you trying to achieve?',
                  'Who are you trying to reach?',
                  'What is currently not working?',
                  'What should happen after someone sees your campaign?',
                  'What digital experience should your customer have?',
                ].map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#EFF6FF] text-[#0B5ED7] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#062B63]">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            14. A SHORT PERSONAL NOTE
            ===================================================== */}
        {sec14.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#E2E8F0] shadow-sm max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-black text-[#0B5ED7] uppercase tracking-wider">
              <span>14. PERSONAL NOTE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
              {sec14.title}
            </h2>
            {sec14.subtitle && (
              <p className="text-sm font-bold text-[#0B5ED7]">
                {sec14.subtitle}
              </p>
            )}
            <div className="space-y-4 text-base text-[#475569] leading-relaxed text-left sm:text-center">
              <p>
                I am still building my story.
              </p>
              <p>
                I am proud of how far I have come since I started taking this journey seriously in 2024, but I also know there is still a lot more to learn.
              </p>
              <p>
                Every project, campaign, client interaction and challenge teaches me something.
              </p>
              <p>
                I see my portfolio as more than a collection of work. It is a record of what I have learned, what I can do today and where I am heading next.
              </p>
              <p className="text-base font-bold text-[#062B63] pt-2">
                This is not the final version of my story. It is the part I am currently building.
              </p>
            </div>
          </div>
        )}

        {/* =====================================================
            15. LET'S WORK TOGETHER
            ===================================================== */}
        {sec15.isPublished !== false && (
          <div className="scroll-mt-24 p-8 sm:p-14 rounded-3xl bg-[#062B63] text-white shadow-xl">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-black text-[#93C5FD] uppercase tracking-wider">
                <span>15. GET IN TOUCH</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
                  LET'S WORK TOGETHER
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-[#60A5FA]">
                  LET'S BUILD SOMETHING THAT MAKES SENSE.
                </p>
                <p className="text-base text-white/80 max-w-xl mx-auto leading-relaxed pt-2">
                  Have a business idea, marketing challenge or digital project you want to discuss? I would be happy to hear about it.
                </p>
              </div>

              {/* Contact Detail Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="tel:+2348051780169"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#60A5FA]" />
                  <span>+234 805 178 0169</span>
                </a>

                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white text-xs sm:text-sm font-bold border border-white/15">
                  <Mail className="w-4 h-4 text-[#60A5FA]" />
                  <span>ipesolasulaiman@gmail.com</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="ml-2 p-1 hover:bg-white/20 rounded transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={onOpenHireMe}
                  className="bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-[#0B5ED7]/30 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>HIRE ME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2348051780169?text=Hello%20Onifade%20Sulaiman,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>MESSAGE ON WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCv}
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 px-6 py-4 rounded-xl font-black text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>VIEW MY CV</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
