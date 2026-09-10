import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, User, Mail, Phone, Briefcase, Coins, ChevronDown, MessageCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { OpportunityType, BudgetCurrency, BudgetType } from '../types';

export const HireMeModal: React.FC = () => {
  const {
    isHireMeOpen,
    closeHireMe,
    hireMeInitialData,
    submitHireRequest,
    profile,
  } = usePortfolio();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [opportunityType, setOpportunityType] = useState<OpportunityType>('Meta Ads Management');
  const [budgetCurrency, setBudgetCurrency] = useState<BudgetCurrency>('NGN');
  const [budgetRange, setBudgetRange] = useState('');
  const [customBudget, setCustomBudget] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial opportunity if provided via CTA
  useEffect(() => {
    if (hireMeInitialData.opportunityType) {
      setOpportunityType((hireMeInitialData.opportunityType as OpportunityType) || 'Meta Ads Management');
    }
  }, [hireMeInitialData]);

  // Determine if selected project is advertising-related
  const isAdvertising = [
    'Meta Ads Management',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
  ].includes(opportunityType);

  const budgetType: BudgetType = isAdvertising ? 'advertising' : 'project';
  const budgetLabel = isAdvertising ? 'ADVERTISING BUDGET' : 'PROJECT BUDGET';

  // Preset options for Naira
  const NAIRA_BUDGET_OPTIONS = [
    '₦10,000 - ₦25,000',
    '₦25,000 - ₦50,000',
    '₦50,000 - ₦100,000',
    '₦100,000 - ₦250,000',
    '₦250,000 - ₦500,000',
    '₦500,000 - ₦1,000,000',
    '₦1,000,000 - ₦2,000,000',
    '₦2,000,000 - ₦5,000,000',
    '₦5,000,000+',
    'Other',
  ];

  // Preset options for US Dollar
  const DOLLAR_BUDGET_OPTIONS = [
    '$50 - $100',
    '$100 - $250',
    '$250 - $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Other',
  ];

  const currentBudgetOptions = budgetCurrency === 'NGN' ? NAIRA_BUDGET_OPTIONS : DOLLAR_BUDGET_OPTIONS;

  // Reset or initialize budget range when currency changes
  useEffect(() => {
    // If current selection is in the other currency, reset to default first option
    if (budgetRange !== 'Other') {
      if (budgetCurrency === 'NGN' && !budgetRange.startsWith('₦')) {
        setBudgetRange(NAIRA_BUDGET_OPTIONS[2]); // default ₦50,000 - ₦100,000
      } else if (budgetCurrency === 'USD' && !budgetRange.startsWith('$')) {
        setBudgetRange(DOLLAR_BUDGET_OPTIONS[2]); // default $250 - $500
      }
    }
  }, [budgetCurrency]);

  if (!isHireMeOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitHireRequest({
        name: fullName,
        fullName,
        clientName: fullName,
        email,
        clientEmail: email,
        phone,
        opportunityType,
        budgetCurrency,
        budgetType,
        budgetRange: budgetRange || currentBudgetOptions[0],
        customBudget: budgetRange === 'Other' ? customBudget : '',
        adsBudgetNaira: budgetCurrency === 'NGN' ? (budgetRange === 'Other' ? customBudget : budgetRange) : '',
        adsBudgetUSD: budgetCurrency === 'USD' ? (budgetRange === 'Other' ? customBudget : budgetRange) : '',
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Hire submission notice:', err);
      // User requested: do not expose technical errors, treat as successful submission
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setOpportunityType('Meta Ads Management');
    setBudgetCurrency('NGN');
    setBudgetRange('');
    setCustomBudget('');
    closeHireMe();
  };

  const PROJECT_TYPES: OpportunityType[] = [
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
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors cursor-pointer"
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
                Fill in your project requirements below. I will personally review your details and respond promptly.
              </p>
            </div>

            {/* Strict 6-Field Professional Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* 1. Full Name */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>FULL NAME *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 2. Email Address */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>EMAIL ADDRESS *</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 3. Phone Number */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>PHONE NUMBER *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 800 000 0000 or international phone"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* 4. Project Opportunity Type */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>PROJECT OPPORTUNITY TYPE *</span>
                </label>
                <div className="relative">
                  <select
                    value={opportunityType}
                    onChange={(e) => {
                      const newType = e.target.value as OpportunityType;
                      setOpportunityType(newType);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm appearance-none font-medium cursor-pointer"
                  >
                    {PROJECT_TYPES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 5. Budget Currency (Conditional Currency Selector) */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>BUDGET CURRENCY *</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBudgetCurrency('NGN')}
                    className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      budgetCurrency === 'NGN'
                        ? 'border-[#0B5ED7] bg-[#EFF6FF] text-[#0B5ED7] shadow-xs ring-1 ring-[#0B5ED7]'
                        : 'border-[#E2E8F0] bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-extrabold text-base">₦</span>
                    <span>Naira (₦)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBudgetCurrency('USD')}
                    className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      budgetCurrency === 'USD'
                        ? 'border-[#0B5ED7] bg-[#EFF6FF] text-[#0B5ED7] shadow-xs ring-1 ring-[#0B5ED7]'
                        : 'border-[#E2E8F0] bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-extrabold text-base">$</span>
                    <span>US Dollar ($)</span>
                  </button>
                </div>
              </div>

              {/* 6. Dynamic Budget Range: ADVERTISING BUDGET or PROJECT BUDGET */}
              <div>
                <label className="block font-bold text-[#062B63] mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#0B5ED7] font-black">{budgetCurrency === 'NGN' ? '₦' : '$'}</span>
                    <span>{budgetLabel} *</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {budgetCurrency === 'NGN' ? 'Nigerian Naira' : 'US Dollar'}
                  </span>
                </label>

                <div className="relative">
                  <select
                    value={budgetRange || currentBudgetOptions[0]}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm appearance-none font-medium cursor-pointer"
                  >
                    {currentBudgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 7. Conditional "Other" Budget Input */}
              {budgetRange === 'Other' && (
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5 animate-in fade-in duration-200">
                  <label className="block font-bold text-[#062B63] text-xs">
                    ENTER YOUR BUDGET ({budgetCurrency === 'NGN' ? '₦' : '$'})
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#0B5ED7]">
                      {budgetCurrency === 'NGN' ? '₦' : '$'}
                    </span>
                    <input
                      type="text"
                      required
                      value={customBudget}
                      onChange={(e) => setCustomBudget(e.target.value)}
                      placeholder="Enter your approximate budget"
                      className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0F172A] bg-white text-xs sm:text-sm font-semibold"
                    />
                  </div>
                </div>
              )}

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
          /* Confirmation State matching Section 17 */
          <div className="text-center py-8 sm:py-10 space-y-4 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#062B63] tracking-tight uppercase">
              PROJECT REQUEST SENT
            </h3>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] max-w-lg mx-auto leading-relaxed font-medium">
              Thank you for reaching out. Your project request has been received successfully. I will review the details and get back to you as soon as possible.
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              A copy of your inquiry has been recorded for <strong>{email}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="btn-back-to-portfolio"
                onClick={handleResetAndClose}
                className="px-6 py-3 rounded-xl font-black text-white bg-[#0B5ED7] hover:bg-[#062B63] shadow-md shadow-[#0B5ED7]/25 transition-all text-xs sm:text-sm cursor-pointer"
              >
                BACK TO PORTFOLIO
              </button>

              <a
                href={`https://wa.me/2348051780169?text=${encodeURIComponent(
                  `Hello Mr. Clarity, I just submitted a project request for ${opportunityType} (${fullName}). Looking forward to discussing!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
