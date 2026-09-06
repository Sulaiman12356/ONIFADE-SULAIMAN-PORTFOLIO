import React from 'react';
import { Users, FileText, Briefcase, Eye, ArrowUpRight, CheckCircle2, Clock, Sparkles, Sliders, ExternalLink, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminDashboardTab: React.FC = () => {
  const {
    profile,
    cvList,
    activeCv,
    hireRequests,
    testimonials,
    projects,
    services,
    setAdminActiveTab,
    setIsAdminOpen,
  } = usePortfolio();

  const newRequestsCount = hireRequests.filter((r) => r.status === 'New').length;
  const inReviewCount = hireRequests.filter((r) => r.status === 'In review').length;
  const totalDownloads = cvList.reduce((acc, c) => acc + (c.downloadCount || 0), 0);

  return (
    <div className="space-y-6">
      
      {/* Top Welcome / Hero Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#062B63] to-[#08183A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#00D2FF] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Operational Command Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Welcome, {profile.brandName || 'Mr. Clarity'}
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Live management of your portfolio, active CV versioning, lead intake pipeline, testimonials, and verified career accomplishments.
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

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Hire Requests */}
        <div
          onClick={() => setAdminActiveTab('hire_requests')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-[#0B5ED7] transition-all"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Opportunity Inquiries</span>
            <Briefcase className="w-4 h-4 text-[#0B5ED7]" />
          </div>
          <div className="text-2xl font-black text-[#0B1F3A]">
            {hireRequests.length}
          </div>
          <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
            <span>{newRequestsCount} New</span>
            <span>•</span>
            <span className="text-amber-600">{inReviewCount} In Review</span>
          </div>
        </div>

        {/* Active CV */}
        <div
          onClick={() => setAdminActiveTab('cv_manager')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-[#0B5ED7] transition-all"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Active CV Version</span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-[#0B1F3A]">
            {activeCv?.version || 'v2.6'}
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            {totalDownloads} total downloads
          </div>
        </div>

        {/* Testimonials */}
        <div
          onClick={() => setAdminActiveTab('testimonials')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-[#0B5ED7] transition-all"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Verified Reviews</span>
            <Users className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-[#0B1F3A]">
            {testimonials.length}
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            {testimonials.filter((t) => t.isPublished || t.published || t.permissionStatus === 'granted').length} published live
          </div>
        </div>

        {/* Case Studies */}
        <div
          onClick={() => setAdminActiveTab('projects')}
          className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-[#0B5ED7] transition-all"
        >
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Case Studies &amp; Projects</span>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-[#0B1F3A]">
            {projects.length}
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            {services.length} active service offerings
          </div>
        </div>

      </div>

      {/* Split Section: Recent Inquiries + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Inquiries */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0B5ED7]" />
              <span>Recent Hire &amp; Project Inquiries</span>
            </h3>
            <button
              onClick={() => setAdminActiveTab('hire_requests')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
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
                      <span className="font-bold text-xs text-[#0B1F3A]">{req.fullName}</span>
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

        {/* Quick Administration Shortcuts */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            Quick Actions
          </h3>

          <div className="space-y-2">
            <button
              onClick={() => setAdminActiveTab('cv_manager')}
              className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 text-left transition-all flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-xs text-[#0B1F3A]">Update Active CV</div>
                <div className="text-[10px] text-slate-500">Upload new PDF or change date</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#0B5ED7]" />
            </button>

            <button
              onClick={() => setAdminActiveTab('profile')}
              className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 text-left transition-all flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-xs text-[#0B1F3A]">Edit Profile &amp; Contact</div>
                <div className="text-[10px] text-slate-500">Phone, email, headline, social links</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#0B5ED7]" />
            </button>

            <button
              onClick={() => setAdminActiveTab('testimonials')}
              className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 text-left transition-all flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-xs text-[#0B1F3A]">Add Client Testimonial</div>
                <div className="text-[10px] text-slate-500">Publish genuine collaborator review</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#0B5ED7]" />
            </button>

            <button
              onClick={() => setAdminActiveTab('settings_seo')}
              className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 text-left transition-all flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-xs text-[#0B1F3A]">Edit Credibility Numbers</div>
                <div className="text-[10px] text-slate-500">Ad budget, projects completed, verified flags</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#0B5ED7]" />
            </button>
          </div>

          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
            <strong>Persistent State:</strong> Changes you make are automatically synchronized with the public website in real-time.
          </div>
        </div>

      </div>

    </div>
  );
};
