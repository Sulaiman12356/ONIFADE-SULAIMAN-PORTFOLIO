import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, DollarSign, Briefcase, Phone, Mail, User } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { OpportunityType } from '../types';

export const HireMeModal: React.FC = () => {
  const {
    isHireMeOpen,
    closeHireMe,
    hireMeInitialData,
    submitHireRequest,
    profile,
  } = usePortfolio();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    adsBudgetNaira: '',
    adsBudgetUSD: '',
    opportunityType: 'Meta Ads Management' as OpportunityType,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (hireMeInitialData.opportunityType) {
      setFormData((prev) => ({
        ...prev,
        opportunityType: (hireMeInitialData.opportunityType as OpportunityType) || 'Meta Ads Management',
      }));
    }
  }, [hireMeInitialData]);

  if (!isHireMeOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitHireRequest({
        name: formData.fullName,
        fullName: formData.fullName,
        clientName: formData.fullName,
        email: formData.email,
        clientEmail: formData.email,
        phone: formData.phone,
        adsBudgetNaira: formData.adsBudgetNaira,
        adsBudgetUSD: formData.adsBudgetUSD,
        opportunityType: formData.opportunityType,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      adsBudgetNaira: '',
      adsBudgetUSD: '',
      opportunityType: 'Meta Ads Management',
    });
    closeHireMe();
  };

  const OPPORTUNITY_OPTIONS: OpportunityType[] = [
    'Meta Ads Management',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'Landing Page',
    'Website Development',
    'Brand Design',
    'Social Media Management',
    'AI Automation',
    'Video Editing',
    'Digital Marketing Strategy',
    'Other',
  ];

  return (
    <div
      id="hire-me-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="hire-me-modal-dialog"
        className="bg-white rounded-3xl max-w-xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#E5EAF1] p-6 sm:p-8 relative"
      >
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0B5ED7] border border-[#0B5ED7]/25 text-xs font-bold uppercase tracking-wider mb-2">
                <span>HIRE ONIFADE SULAIMAN (MR. CLARITY)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight">
                Start a Project
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-normal">
                Fill in your project information below. I will review your requirements and respond promptly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* 1. Full Name */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>1. Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 2. Email Address */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>2. Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 3. Phone Number */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>3. Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 805 000 0000 or international phone"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 4. Ads Budget in Naira & 5. Ads Budget in USD */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#0B5ED7] font-black">₦</span>
                    <span>4. Ads Budget in Naira</span>
                  </label>
                  <input
                    type="text"
                    value={formData.adsBudgetNaira}
                    onChange={(e) => setFormData({ ...formData, adsBudgetNaira: e.target.value })}
                    placeholder="e.g. ₦150,000 / month"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>5. Ads Budget in US Dollars</span>
                  </label>
                  <input
                    type="text"
                    value={formData.adsBudgetUSD}
                    onChange={(e) => setFormData({ ...formData, adsBudgetUSD: e.target.value })}
                    placeholder="e.g. $500 - $1,500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* 6. Project Opportunity Type */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>6. Project Opportunity Type *</span>
                </label>
                <select
                  value={formData.opportunityType}
                  onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value as OpportunityType })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                >
                  {OPPORTUNITY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <div className="text-[11px] text-slate-500">
                  Direct inquiry to {profile.name}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2.5 rounded-xl font-semibold text-[#64748B] hover:bg-slate-100 transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    id="btn-send-project-request"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-white bg-[#0B5ED7] hover:bg-[#062B63] shadow-md shadow-[#0B5ED7]/25 transition-all text-xs sm:text-sm active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'SEND PROJECT REQUEST'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-[#062B63] tracking-tight">
              Project Request Sent Successfully
            </h3>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] max-w-lg mx-auto leading-relaxed font-medium">
              Thank you. Your project request has been received. I will review your requirements and get back to you shortly.
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Your inquiry has been stored under <strong>{formData.email}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/2348051780169?text=${encodeURIComponent(
                  `Hello Mr. Clarity, I just submitted a project request for ${formData.opportunityType} (${formData.fullName}). Looking forward to discussing!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#062B63] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
