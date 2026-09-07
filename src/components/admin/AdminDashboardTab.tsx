import React from 'react';
import {
  Users,
  FileText,
  Briefcase,
  Sparkles,
  ExternalLink,
  PlusCircle,
  Upload,
  ToggleLeft,
  ToggleRight,
  RotateCcw,
  MessageSquare,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Target,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminDashboardTab: React.FC = () => {
  const {
    profile,
    cvList,
    activeCv,
    hireRequests,
    contactMessages,
    testimonials,
    projects,
    services,
    settings,
    updateSettings,
    resetToFactoryDefaults,
    setAdminActiveTab,
    setIsAdminOpen,
  } = usePortfolio();

  const newRequestsCount = hireRequests.filter((r) => r.status === 'New').length;
  const newMessagesCount = contactMessages.filter((m) => m.status === 'New').length;
  const totalDownloads = cvList.reduce((acc, c) => acc + (c.downloadCount || 0), 0);

  const handleToggleHireAvailability = async () => {
    await updateSettings({
      allowPublicHireRequests: !settings.allowPublicHireRequests,
      availabilityStatus: !settings.allowPublicHireRequests
        ? 'Available for Q2/Q3 High-Growth Projects'
        : 'Fully Booked - Inquiries Queued',
    });
  };

  const handleResetData = () => {
    if (
      confirm(
        'Are you sure you want to reset the portfolio database back to standard default values? This clears temporary edits.'
      )
    ) {
      resetToFactoryDefaults();
      alert('Portfolio restored to initial baseline defaults.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Welcome Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#00D2FF] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Operational Command Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Welcome, {profile.brandName || 'Mr. Clarity'}
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Real-time management dashboard: all modifications directly update public website content, contact triggers, and downloadable assets.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAdminOpen(false)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>View Live Site</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Metrics: Total Projects, Total Services, Total Inquiries, Total Messages */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Projects */}
        <div
          onClick={() => setAdminActiveTab('projects')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-[#0B5ED7] transition-all group"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Total Projects</span>
            <Layers className="w-4 h-4 text-[#0B5ED7] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-black text-[#08183A]">{projects.length}</div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            {projects.filter((p) => p.featured).length} Featured on Homepage
          </div>
        </div>

        {/* Total Services */}
        <div
          onClick={() => setAdminActiveTab('services')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-[#0B5ED7] transition-all group"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Total Services</span>
            <Target className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-black text-[#08183A]">{services.length}</div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            Core Service Offerings
          </div>
        </div>

        {/* Total Inquiries (Hire Requests) */}
        <div
          onClick={() => setAdminActiveTab('hire_requests')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-[#0B5ED7] transition-all group"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Hire Inquiries</span>
            <Briefcase className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-black text-[#08183A]">{hireRequests.length}</div>
          <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
            <span>{newRequestsCount} New Unread</span>
          </div>
        </div>

        {/* Total Messages */}
        <div
          onClick={() => setAdminActiveTab('messages')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-[#0B5ED7] transition-all group"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Total Messages</span>
            <MessageSquare className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-black text-[#08183A]">{contactMessages.length}</div>
          <div className="text-[11px] text-amber-600 font-bold mt-1">
            <span>{newMessagesCount} New Messages</span>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons Section */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
          Quick Actions &amp; System Controls
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Add Project */}
          <button
            onClick={() => setAdminActiveTab('projects')}
            className="p-3.5 rounded-xl bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200/80 text-left transition-all flex flex-col justify-between gap-2 text-[#08183A]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-extrabold text-xs">Add Project</span>
              <PlusCircle className="w-4 h-4 text-[#0B5ED7]" />
            </div>
            <p className="text-[10px] text-slate-500">Create new case study or portfolio piece</p>
          </button>

          {/* Add Service */}
          <button
            onClick={() => setAdminActiveTab('services')}
            className="p-3.5 rounded-xl bg-purple-50/70 hover:bg-purple-100/80 border border-purple-200/80 text-left transition-all flex flex-col justify-between gap-2 text-[#08183A]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-extrabold text-xs">Add Service</span>
              <PlusCircle className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-[10px] text-slate-500">Add marketing or design offering</p>
          </button>

          {/* Upload CV */}
          <button
            onClick={() => setAdminActiveTab('cv')}
            className="p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200/80 text-left transition-all flex flex-col justify-between gap-2 text-[#08183A]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-extrabold text-xs">Upload CV</span>
              <Upload className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-[10px] text-slate-500">
              Active: {activeCv?.version || 'v2.6'} ({totalDownloads} dl)
            </p>
          </button>

          {/* Toggle Hire Availability */}
          <button
            onClick={handleToggleHireAvailability}
            className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
              settings.allowPublicHireRequests
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/80 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-extrabold text-xs">Hire Availability</span>
              {settings.allowPublicHireRequests ? (
                <ToggleRight className="w-5 h-5 text-emerald-600" />
              ) : (
                <ToggleLeft className="w-5 h-5 text-rose-500" />
              )}
            </div>
            <p className="text-[10px]">
              {settings.allowPublicHireRequests ? 'Status: Accepting Clients' : 'Status: Fully Booked'}
            </p>
          </button>

          {/* Clear Sample Data / Reset */}
          <button
            onClick={handleResetData}
            className="p-3.5 rounded-xl bg-slate-50 hover:bg-rose-50/80 border border-slate-200 hover:border-rose-200 text-left transition-all flex flex-col justify-between gap-2 text-slate-700 hover:text-rose-700"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-extrabold text-xs">Reset Sample Data</span>
              <RotateCcw className="w-4 h-4 text-slate-400 hover:text-rose-600" />
            </div>
            <p className="text-[10px] text-slate-500">Restore factory baseline</p>
          </button>
        </div>
      </div>

      {/* Split: Recent Inquiries & Recent Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Hire Inquiries */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0B5ED7]" />
              <span>Recent Hire Inquiries</span>
            </h3>
            <button
              onClick={() => setAdminActiveTab('hire_requests')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
            >
              <span>View All ({hireRequests.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {hireRequests.length === 0 ? (
            <div className="p-8 text-center rounded-xl bg-slate-50 text-slate-400 text-xs">
              No inquiries yet. Submissions through "Hire Me" will show here instantly.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {hireRequests.slice(0, 4).map((req) => (
                <div
                  key={req.id}
                  onClick={() => setAdminActiveTab('hire_requests')}
                  className="py-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 px-2 rounded-xl transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{req.fullName}</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-50 text-[#0B5ED7]">
                        {req.opportunityType}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {req.company ? `${req.company} • ` : ''}Budget: {req.budgetRange}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {req.status}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {new Date(req.dateSubmitted).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Contact Messages */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#0B5ED7]" />
              <span>Recent Contact Messages</span>
            </h3>
            <button
              onClick={() => setAdminActiveTab('messages')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
            >
              <span>View All ({contactMessages.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {contactMessages.length === 0 ? (
            <div className="p-8 text-center rounded-xl bg-slate-50 text-slate-400 text-xs">
              No direct messages yet. Submissions from the website Contact section will appear here.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {contactMessages.slice(0, 4).map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setAdminActiveTab('messages')}
                  className="py-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 px-2 rounded-xl transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{msg.name}</span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                          msg.status === 'New'
                            ? 'bg-blue-100 text-[#0B5ED7]'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {msg.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{msg.message}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">
                      {new Date(msg.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
