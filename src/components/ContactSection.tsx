import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Twitter,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactSectionProps {
  onOpenHireMe?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenHireMe }) => {
  const { profile, submitContactMessage } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const email = profile.email || 'onifadesulaiman@gmail.com';
  const phone = profile.phone || '+234 806 123 4567';
  const whatsappNumber = profile.phone ? profile.phone.replace(/[^0-9]/g, '') : '2348061234567';
  const whatsappUrl = profile.socialLinks?.whatsapp || `https://wa.me/${whatsappNumber}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Direct Portfolio Inquiry',
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setErrorMsg('Unable to send message right now. Please try via WhatsApp or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialChannels = [
    {
      name: 'WhatsApp',
      handle: 'Direct Chat / Fast Reply',
      icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />,
      url: whatsappUrl,
      color: 'bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D]',
      cta: 'Chat on WhatsApp',
    },
    {
      name: 'Email',
      handle: email,
      icon: <Mail className="w-5 h-5 text-[#0B5ED7]" />,
      url: `mailto:${email}`,
      color: 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]',
      cta: 'Send Direct Email',
    },
    {
      name: 'Phone',
      handle: phone,
      icon: <Phone className="w-5 h-5 text-[#062B63]" />,
      url: `tel:${phone}`,
      color: 'bg-[#F8FAFC] border-[#E2E8F0] text-[#062B63]',
      cta: 'Call Phone',
    },
    {
      name: 'LinkedIn',
      handle: 'Professional Network',
      icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
      url: profile.socialLinks?.linkedin || 'https://linkedin.com',
      color: 'bg-white border-[#E2E8F0] text-[#0A66C2]',
      cta: 'Connect on LinkedIn',
    },
    {
      name: 'Instagram',
      handle: '@mrclarity_official',
      icon: <Instagram className="w-5 h-5 text-[#E1306C]" />,
      url: profile.socialLinks?.instagram || 'https://instagram.com',
      color: 'bg-white border-[#E2E8F0] text-[#E1306C]',
      cta: 'Follow on Instagram',
    },
    {
      name: 'Facebook',
      handle: 'Mr. Clarity Growth',
      icon: <Facebook className="w-5 h-5 text-[#1877F2]" />,
      url: profile.socialLinks?.facebook || 'https://facebook.com',
      color: 'bg-white border-[#E2E8F0] text-[#1877F2]',
      cta: 'Follow on Facebook',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#0B5ED7]/25 text-xs font-bold text-[#0B5ED7] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062B63]">
            LET'S WORK TOGETHER
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Whether you need a full-funnel Meta ad campaign, an AI-engineered landing page, full brand redesign, or ongoing digital growth consulting, let's connect today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Channels (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-black text-[#062B63] mb-4">
              Direct Contact &amp; Verified Channels
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${channel.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xs border border-inherit">
                      {channel.icon}
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-50" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                      {channel.name}
                    </div>
                    <div className="text-sm font-black text-[#062B63] truncate">
                      {channel.handle}
                    </div>
                    <div className="mt-3 text-xs font-bold underline flex items-center gap-1">
                      {channel.cta} →
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Banner */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-[#10B981]">
                  Current Availability Status
                </span>
              </div>
              <p className="text-sm text-[#0B1F3A] font-semibold mb-3">
                {profile.availability || 'Available for Full-Time, Freelance, Contract, Remote & Consulting Opportunities.'}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-bold text-[#475569]">
                <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0]">Full-Time</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0]">Freelance</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0]">Contract</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0]">Remote</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0]">Consulting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Contact Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-md">
            <h3 className="text-xl font-black text-[#062B63] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#64748B] mb-6">
              Fill out this quick form and I will respond to your business inquiry within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto" />
                <h4 className="text-lg font-bold text-[#166534]">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-[#15803D] leading-relaxed">
                  Thank you for reaching out. Your message has been safely received and I will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl bg-white border border-[#BBF7D0] text-xs font-bold text-[#166534] hover:bg-[#F0FDF4]"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#062B63] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Adebayo Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0B1F3A] focus:outline-hidden focus:border-[#0B5ED7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B63] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. adebayo@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0B1F3A] focus:outline-hidden focus:border-[#0B5ED7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B63] mb-1">
                    Subject / Project Focus
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Meta Ads Campaign & Landing Page"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0B1F3A] focus:outline-hidden focus:border-[#0B5ED7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B63] mb-1">
                    How can I help you? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your business, current marketing challenges, or objectives..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0B1F3A] focus:outline-hidden focus:border-[#0B5ED7] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message Now'}</span>
                </button>

                {onOpenHireMe && (
                  <div className="text-center pt-2">
                    <span className="text-xs text-[#64748B]">Have a detailed project scope? </span>
                    <button
                      type="button"
                      onClick={onOpenHireMe}
                      className="text-xs font-bold text-[#0B5ED7] hover:underline"
                    >
                      Open Full Hire Me Form →
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
