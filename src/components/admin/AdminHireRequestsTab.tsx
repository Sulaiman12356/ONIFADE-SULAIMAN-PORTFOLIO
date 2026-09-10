import React, { useState } from 'react';
import { Mail, Phone, Building2, Calendar, DollarSign, Briefcase, Link2, FileText, CheckCircle2, Clock, Trash2, Filter, ChevronRight, MessageCircle, Wallet, Layers } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { HireMeRequest, HireRequestStatus, BudgetCurrency, BudgetType } from '../../types';

export const AdminHireRequestsTab: React.FC = () => {
  const { hireRequests, updateHireRequestStatus, deleteHireRequest } = usePortfolio();
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedBudgetType, setSelectedBudgetType] = useState<string>('all');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('all');
  const [activeLead, setActiveLead] = useState<HireMeRequest | null>(null);

  const statusOptions: HireRequestStatus[] = [
    'New',
    'In review',
    'Contacted',
    'Interview',
    'Closed',
    'Rejected',
  ];

  const getBudgetType = (req: HireMeRequest): 'advertising' | 'project' => {
    if (req.budgetType) return req.budgetType;
    const isAd = ['Meta Ads Management', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads'].includes(req.opportunityType);
    return isAd ? 'advertising' : 'project';
  };

  const getCurrency = (req: HireMeRequest): 'NGN' | 'USD' => {
    if (req.budgetCurrency) return req.budgetCurrency;
    if (req.adsBudgetNaira || req.budgetRange?.includes('₦')) return 'NGN';
    if (req.adsBudgetUSD || req.budgetRange?.includes('$')) return 'USD';
    return 'NGN';
  };

  const getDisplayBudget = (req: HireMeRequest): string => {
    const currency = getCurrency(req);
    const sym = currency === 'NGN' ? '₦' : '$';
    if (req.customBudget) {
      return `${sym}${req.customBudget} (Custom)`;
    }
    if (req.budgetRange) return req.budgetRange;
    if (req.adsBudgetNaira) return `₦${req.adsBudgetNaira}`;
    if (req.adsBudgetUSD) return `$${req.adsBudgetUSD}`;
    return 'Not specified';
  };

  const filteredRequests = hireRequests.filter((r) => {
    if (selectedStatus !== 'all' && r.status !== selectedStatus) return false;
    if (selectedBudgetType !== 'all' && getBudgetType(r) !== selectedBudgetType) return false;
    if (selectedCurrency !== 'all' && getCurrency(r) !== selectedCurrency) return false;
    return true;
  });

  const getStatusBadge = (status: HireRequestStatus) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In review':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Contacted':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Interview':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Closed':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      case 'Rejected':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#062B63] text-white space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black">Hire Me &amp; Project Inquiries</h2>
            <p className="text-xs text-blue-100 mt-1">
              Review incoming client project requests with automated budget routing &amp; email delivery.
            </p>
          </div>
          <div className="text-xs bg-white/10 px-3 py-1.5 rounded-xl font-bold backdrop-blur-sm self-start sm:self-auto">
            Total Requests: {hireRequests.length}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs">
          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1 bg-white/10 p-1 rounded-xl">
            <span className="px-2 text-[11px] font-bold text-blue-200 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Status:
            </span>
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                selectedStatus === 'all'
                  ? 'bg-white text-[#062B63]'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              All ({hireRequests.length})
            </button>
            {statusOptions.map((st) => {
              const count = hireRequests.filter((r) => r.status === st).length;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2 py-1 rounded-lg font-medium transition-colors ${
                    selectedStatus === st
                      ? 'bg-white text-[#062B63] font-bold'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {st} ({count})
                </button>
              );
            })}
          </div>

          {/* Budget Type Filter */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
            <span className="px-2 text-[11px] font-bold text-blue-200 flex items-center gap-1">
              <Layers className="w-3 h-3" /> Type:
            </span>
            <button
              onClick={() => setSelectedBudgetType('all')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                selectedBudgetType === 'all'
                  ? 'bg-white text-[#062B63]'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedBudgetType('advertising')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedBudgetType === 'advertising'
                  ? 'bg-white text-[#062B63] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              Advertising
            </button>
            <button
              onClick={() => setSelectedBudgetType('project')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedBudgetType === 'project'
                  ? 'bg-white text-[#062B63] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              Project
            </button>
          </div>

          {/* Currency Filter */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
            <span className="px-2 text-[11px] font-bold text-blue-200 flex items-center gap-1">
              <Wallet className="w-3 h-3" /> Currency:
            </span>
            <button
              onClick={() => setSelectedCurrency('all')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                selectedCurrency === 'all'
                  ? 'bg-white text-[#062B63]'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCurrency('NGN')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedCurrency === 'NGN'
                  ? 'bg-white text-[#062B63] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setSelectedCurrency('USD')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedCurrency === 'USD'
                  ? 'bg-white text-[#062B63] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: List on Left, Detail Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* List Column */}
        <div className="lg:col-span-6 space-y-3">
          {filteredRequests.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
              <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <h3 className="font-bold text-sm text-slate-700">No Inquiries Found</h3>
              <p className="text-xs text-slate-400 mt-1">
                {selectedStatus === 'all' && selectedBudgetType === 'all' && selectedCurrency === 'all'
                  ? 'Submissions made via public "Hire Me" CTAs will appear here automatically.'
                  : 'No project requests match the selected filters.'}
              </p>
            </div>
          ) : (
            filteredRequests.map((req) => {
              const currency = getCurrency(req);
              const bType = getBudgetType(req);
              const displayBudget = getDisplayBudget(req);
              const clientName = req.fullName || req.name || req.clientName || 'Direct Client';

              return (
                <div
                  key={req.id}
                  onClick={() => setActiveLead(req)}
                  className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all shadow-xs ${
                    activeLead?.id === req.id
                      ? 'border-[#0B5ED7] ring-2 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold border ${getStatusBadge(req.status)}`}>
                        {req.status}
                      </span>
                      <span className="text-[11px] font-bold text-[#0B5ED7] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {req.opportunityType}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${bType === 'advertising' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-purple-50 text-purple-700 border border-purple-200'}`}>
                        {bType === 'advertising' ? 'Ad Budget' : 'Project Budget'}
                      </span>
                      <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                        {currency}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                      {new Date(req.dateSubmitted).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1F3A]">
                        {clientName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {req.company ? `${req.company} • ` : ''}{req.email || req.clientEmail}
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <span className="text-xs font-black text-emerald-700 block">
                        {displayBudget}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {req.phone || 'No phone'}
                      </span>
                    </div>
                  </div>

                  {(req.description || req.projectDescription) && (
                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed bg-slate-50 p-2 rounded-xl">
                      {req.description || req.projectDescription}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-6">
          {activeLead ? (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5 sticky top-4">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(activeLead.status)}`}>
                      {activeLead.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      Submitted: {new Date(activeLead.dateSubmitted).toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#0B1F3A]">
                    {activeLead.fullName || activeLead.name || activeLead.clientName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {activeLead.company ? `${activeLead.company} • ` : ''}{activeLead.opportunityType}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteHireRequest(activeLead.id);
                    setActiveLead(null);
                  }}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Delete Inquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Status Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Update Lead Pipeline Status:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {statusOptions.map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        updateHireRequestStatus(activeLead.id, st);
                        setActiveLead({ ...activeLead, status: st });
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        activeLead.status === st
                          ? 'bg-[#0B5ED7] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail Fields Grid - Section 13 */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Client Email</span>
                  <a href={`mailto:${activeLead.email || activeLead.clientEmail}`} className="font-bold text-[#0B5ED7] hover:underline break-all">
                    {activeLead.email || activeLead.clientEmail}
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Client Phone</span>
                  <a href={`tel:${activeLead.phone}`} className="font-bold text-slate-800 hover:underline">
                    {activeLead.phone || 'Not provided'}
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Project Type</span>
                  <span className="font-bold text-slate-800">{activeLead.opportunityType}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Budget Type</span>
                  <span className="font-bold text-slate-800 capitalize">
                    {getBudgetType(activeLead) === 'advertising' ? 'Advertising Budget' : 'Project Budget'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Budget Currency</span>
                  <span className="font-bold text-slate-800">
                    {getCurrency(activeLead) === 'NGN' ? 'Nigerian Naira (NGN / ₦)' : 'US Dollar (USD / $)'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Budget Amount / Range</span>
                  <span className="font-black text-emerald-700 text-sm">
                    {getDisplayBudget(activeLead)}
                  </span>
                </div>

                {activeLead.customBudget && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 col-span-2">
                    <span className="text-emerald-700 block text-[10px] font-bold uppercase">Custom Specified Amount</span>
                    <span className="font-extrabold text-emerald-900">
                      {getCurrency(activeLead) === 'NGN' ? '₦' : '$'}{activeLead.customBudget}
                    </span>
                  </div>
                )}

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Date &amp; Time Submitted</span>
                  <span className="font-medium text-slate-700">
                    {new Date(activeLead.dateSubmitted).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Description */}
              {(activeLead.description || activeLead.projectDescription) && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project / Inquiry Details:
                  </label>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {activeLead.description || activeLead.projectDescription}
                  </div>
                </div>
              )}

              {/* Additional message */}
              {activeLead.additionalMessage && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Additional Message:
                  </label>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                    {activeLead.additionalMessage}
                  </div>
                </div>
              )}

              {/* Quick Contact Actions */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`mailto:${activeLead.email || activeLead.clientEmail}?subject=Re: Project Request - ${encodeURIComponent(
                    activeLead.opportunityType
                  )} - Onifade Sulaiman (Mr. Clarity)&body=Hello ${encodeURIComponent(
                    activeLead.fullName || activeLead.name || activeLead.clientName
                  )},%0D%0A%0D%0AThank you for reaching out regarding your project request for ${encodeURIComponent(
                    activeLead.opportunityType
                  )}. I have received your details and would be glad to discuss next steps.`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                {activeLead.phone && (
                  <a
                    href={`https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                      activeLead.fullName || activeLead.name || activeLead.clientName
                    )},%20this%20is%20Onifade%20Sulaiman%20(Mr.%20Clarity)%20following%20up%20on%20your%20project%20request.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                )}
              </div>

            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-slate-400 text-xs">
              Select an inquiry from the left to inspect complete client details, respond, or advance pipeline stage.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
