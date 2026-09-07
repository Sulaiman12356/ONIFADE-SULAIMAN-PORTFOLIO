import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Sparkles, Building2, Calendar, DollarSign, Briefcase, Link2, FileText, Phone, Mail, User } from 'lucide-react';
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
    company: '',
    jobTitle: '',
    opportunityType: 'Freelance' as OpportunityType,
    budgetRange: '$500 - $1,500',
    description: '',
    expectedStartDate: '',
    portfolioUrl: '',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (hireMeInitialData.opportunityType) {
      setFormData((prev) => ({ ...prev, opportunityType: hireMeInitialData.opportunityType || 'Freelance' }));
    }
    if (hireMeInitialData.service) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description
          ? prev.description
          : `Interested in: ${hireMeInitialData.service}. `,
      }));
    }
  }, [hireMeInitialData]);

  if (!isHireMeOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitHireRequest({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        opportunityType: formData.opportunityType,
        budgetRange: formData.budgetRange,
        description: formData.description,
        expectedStartDate: formData.expectedStartDate || 'Flexible / Immediate',
        portfolioUrl: formData.portfolioUrl,
        additionalMessage: formData.additionalMessage,
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
      company: '',
      jobTitle: '',
      opportunityType: 'Freelance',
      budgetRange: '$500 - $1,500',
      description: '',
      expectedStartDate: '',
      portfolioUrl: '',
      additionalMessage: '',
    });
    closeHireMe();
  };

  return (
    <div
      id="hire-me-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="hire-me-modal-dialog"
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#E5EAF1] p-6 sm:p-8 relative"
      >
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] text-[#0B5ED7] border border-[#E5EAF1] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HIRE MR. CLARITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight">
                Let's Build Something Impactful
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-normal">
                Submit your project or hiring specifications. Each opportunity is tracked securely and addressed promptly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000 or +234..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Company / Organization</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Growth Labs"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Job Title & Opportunity Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Your Job Title / Role</span>
                  </label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    placeholder="e.g. Founder, Marketing Director, HR Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Opportunity Type *</span>
                  </label>
                  <select
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value as OpportunityType })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Internship">Internship</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Speaking/Training">Speaking / Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Budget Range & Expected Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Budget Range *</span>
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  >
                    <option value="Under $500">Under $500 (Project Starter)</option>
                    <option value="$500 - $1,500">$500 - $1,500 (Growth Campaign)</option>
                    <option value="$1,500 - $3,000">$1,500 - $3,000 (Multi-channel Scaling)</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000 (Comprehensive Retainer)</option>
                    <option value="$5,000+">$5,000+ (Enterprise / Full-Time)</option>
                    <option value="Competitive / Open for Discussion">Competitive / Open for Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>Expected Start Date</span>
                  </label>
                  <input
                    type="text"
                    value={formData.expectedStartDate}
                    onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                    placeholder="e.g. Immediately / Next Month / Q4"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Row 5: Portfolio or Job Description URL */}
              <div>
                <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>Portfolio / Job Description URL (Optional)</span>
                </label>
                <input
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://company.com/job-spec or Google Drive link"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Row 6: Project/Role Description */}
              <div>
                <label className="block font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>Project / Role Description *</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the opportunity, key deliverables, expectations, or problems to solve..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Row 7: Additional Message */}
              <div>
                <label className="block font-bold text-[#0B1F3A] mb-1.5">
                  Additional Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalMessage}
                  onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                  placeholder="Any other details, communication preference, or timeline constraints..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF1] focus:border-[#0B5ED7] focus:ring-2 focus:ring-[#0B5ED7]/10 outline-none text-[#0B1F3A] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <div className="text-[11px] text-slate-400">
                  Direct inquiry to {profile.name} ({profile.email})
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2.5 rounded-xl font-semibold text-[#64748B] hover:bg-slate-100 transition-colors text-xs sm:text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    id="btn-send-opportunity"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white bg-[#0B5ED7] hover:bg-[#1D4ED8] shadow-md shadow-[#0B5ED7]/25 transition-all text-xs sm:text-sm active:scale-[0.98] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Opportunity'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State matching user exact required text */
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
              Opportunity Received
            </h3>

            {/* Exact wording requested by user */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0B1F3A] max-w-lg mx-auto leading-relaxed font-medium">
              Thank you. Your opportunity has been received. I'll review the details and respond as soon as possible.
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              A copy of your submission has been registered in the system under <strong>{formData.email}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/2348061234567?text=${encodeURIComponent(
                  `Hello Mr. Clarity, I just submitted an opportunity for ${formData.opportunityType} (${formData.fullName} - ${formData.company || 'Direct'}). Looking forward to connecting!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Notification</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#0B1F3A] transition-colors"
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
