import React, { useState } from 'react';
import { Mail, Phone, Building2, Calendar, DollarSign, Briefcase, Link2, FileText, CheckCircle2, Clock, Trash2, Filter, ChevronRight, MessageCircle } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { HireMeRequest, HireRequestStatus } from '../../types';

export const AdminHireRequestsTab: React.FC = () => {
  const { hireRequests, updateHireRequestStatus, deleteHireRequest } = usePortfolio();
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [activeLead, setActiveLead] = useState<HireMeRequest | null>(null);

  const statusOptions: HireRequestStatus[] = [
    'New',
    'In review',
    'Contacted',
    'Interview',
    'Closed',
    'Rejected',
  ];

  const filteredRequests = hireRequests.filter((r) => {
    if (selectedStatus === 'all') return true;
    return r.status === selectedStatus;
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
      <div className="p-5 rounded-2xl bg-[#062B63] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Hire Me &amp; Opportunity Inquiries</h2>
          <p className="text-xs text-slate-300 mt-1">
            Review incoming project opportunities, job offers, contracts, and consultation requests.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/10 p-1.5 rounded-xl text-xs">
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-3 py-1 rounded-lg font-bold transition-colors ${
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
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
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
                {selectedStatus === 'all'
                  ? 'Submissions made via public "Hire Me" CTAs will appear here automatically.'
                  : `No opportunities currently under "${selectedStatus}".`}
              </p>
            </div>
          ) : (
            filteredRequests.map((req) => (
              <div
                key={req.id}
                onClick={() => setActiveLead(req)}
                className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all shadow-xs ${
                  activeLead?.id === req.id
                    ? 'border-[#0B5ED7] ring-2 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold border ${getStatusBadge(req.status)}`}>
                      {req.status}
                    </span>
                    <span className="text-[11px] font-bold text-[#0B5ED7] bg-blue-50 px-2 py-0.5 rounded">
                      {req.opportunityType}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {new Date(req.dateSubmitted).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1F3A]">
                      {req.fullName}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {req.company ? `${req.company} • ` : ''} {req.jobTitle || 'Prospective Partner'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-700 block">
                      {req.budgetRange}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Start: {req.expectedStartDate}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed bg-slate-50 p-2 rounded-xl">
                  {req.description}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-6">
          {activeLead ? (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5 sticky top-4">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(activeLead.status)}`}>
                      {activeLead.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      Submitted: {new Date(activeLead.dateSubmitted).toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#0B1F3A]">
                    {activeLead.fullName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {activeLead.jobTitle} {activeLead.company ? `at ${activeLead.company}` : ''}
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
                          ? 'bg-[#062B63] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* 11 Fields Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Email</span>
                  <a href={`mailto:${activeLead.email}`} className="font-bold text-[#0B5ED7] hover:underline break-all">
                    {activeLead.email}
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Phone</span>
                  <a href={`tel:${activeLead.phone}`} className="font-bold text-slate-800 hover:underline">
                    {activeLead.phone}
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Opportunity Type</span>
                  <span className="font-bold text-slate-800">{activeLead.opportunityType}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Budget Range</span>
                  <span className="font-bold text-emerald-700">{activeLead.budgetRange}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Expected Start Date</span>
                  <span className="font-bold text-slate-800">{activeLead.expectedStartDate}</span>
                </div>

                {activeLead.portfolioUrl && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Job / Spec URL</span>
                    <a
                      href={activeLead.portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#0B5ED7] hover:underline break-all inline-flex items-center gap-1"
                    >
                      <span>{activeLead.portfolioUrl}</span>
                      <Link2 className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project / Opportunity Description:
                </label>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {activeLead.description}
                </div>
              </div>

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
                  href={`mailto:${activeLead.email}?subject=RE: Project Inquiry - Onifade Sulaiman (Mr. Clarity)&body=Hi ${encodeURIComponent(
                    activeLead.fullName
                  )},%0D%0A%0D%0AThank you for reaching out regarding your opportunity (${encodeURIComponent(
                    activeLead.opportunityType
                  )}). I have reviewed your requirements and would love to connect.`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                {activeLead.phone && (
                  <a
                    href={`https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                      activeLead.fullName
                    )},%20this%20is%20Onifade%20Sulaiman%20(Mr.%20Clarity)%20following%20up%20on%20your%20project%20inquiry.`}
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
