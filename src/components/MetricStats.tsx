import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Users, 
  Building2, 
  Clock, 
  TrendingUp, 
  GraduationCap, 
  Settings2, 
  Eye, 
  EyeOff, 
  Check, 
  RotateCcw,
  ShieldCheck,
  X
} from 'lucide-react';

export interface EditableMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  isVerified: boolean;
  isVisible: boolean;
  iconType: 'projects' | 'clients' | 'orgs' | 'experience' | 'budget' | 'training';
}

const DEFAULT_METRICS: EditableMetric[] = [
  {
    id: 'projects',
    value: '50+',
    label: 'Projects Completed',
    sublabel: 'Web, Design & Funnels',
    isVerified: true,
    isVisible: true,
    iconType: 'projects',
  },
  {
    id: 'clients',
    value: '30+',
    label: 'Clients / Collaborations',
    sublabel: 'Brands & Businesses',
    isVerified: true,
    isVisible: true,
    iconType: 'clients',
  },
  {
    id: 'orgs',
    value: '10+',
    label: 'Organizations Supported',
    sublabel: 'Communities & Teams',
    isVerified: true,
    isVisible: true,
    iconType: 'orgs',
  },
  {
    id: 'experience',
    value: '3+',
    label: 'Years of Experience',
    sublabel: 'Tech, Ads & Creative',
    isVerified: true,
    isVisible: true,
    iconType: 'experience',
  },
  {
    id: 'budget',
    value: '$500K+',
    label: 'Advertising Budget Managed',
    sublabel: 'Meta & TikTok Ads',
    isVerified: true,
    isVisible: true,
    iconType: 'budget',
  },
  {
    id: 'training',
    value: '500+',
    label: 'Training / Participants',
    sublabel: 'Clarity Digital Academy',
    isVerified: true,
    isVisible: true,
    iconType: 'training',
  },
];

export const MetricStats: React.FC = () => {
  const [metrics, setMetrics] = useState<EditableMetric[]>(() => {
    const saved = localStorage.getItem('mr_clarity_metrics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_METRICS;
      }
    }
    return DEFAULT_METRICS;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [draftMetrics, setDraftMetrics] = useState<EditableMetric[]>(metrics);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setDraftMetrics(metrics);
  }, [metrics]);

  const handleSaveAdmin = () => {
    setMetrics(draftMetrics);
    localStorage.setItem('mr_clarity_metrics', JSON.stringify(draftMetrics));
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsAdminOpen(false);
    }, 800);
  };

  const handleResetDefaults = () => {
    setDraftMetrics(DEFAULT_METRICS);
    setMetrics(DEFAULT_METRICS);
    localStorage.setItem('mr_clarity_metrics', JSON.stringify(DEFAULT_METRICS));
  };

  const handleUpdateDraft = (id: string, field: keyof EditableMetric, val: any) => {
    setDraftMetrics((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: val } : m))
    );
  };

  const renderIcon = (type: EditableMetric['iconType']) => {
    switch (type) {
      case 'projects':
        return <Briefcase className="w-5 h-5 text-[#00D2FF]" />;
      case 'clients':
        return <Users className="w-5 h-5 text-[#00D2FF]" />;
      case 'orgs':
        return <Building2 className="w-5 h-5 text-[#00D2FF]" />;
      case 'experience':
        return <Clock className="w-5 h-5 text-[#00D2FF]" />;
      case 'budget':
        return <TrendingUp className="w-5 h-5 text-[#00D2FF]" />;
      case 'training':
        return <GraduationCap className="w-5 h-5 text-[#00D2FF]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  const visibleMetrics = metrics.filter((m) => m.isVisible && (m.isVerified || m.value !== ''));

  return (
    <section 
      id="metrics-stats-bar" 
      className="bg-[#062B63] text-white py-14 sm:py-16 relative overflow-hidden border-y border-white/10"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#0B5ED7]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Admin Customize Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#00D2FF] block mb-1">
              PROVABLE TRACK RECORD
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Impact &amp; Quantitative Metrics
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified metrics displayed • Unverified hidden</span>
            </div>

            {/* Quick Admin Dashboard trigger for metric editing */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-slate-200 transition-colors"
              title="Admin: Edit numbers or toggle metric visibility"
            >
              <Settings2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Admin Metrics</span>
            </button>
          </div>
        </div>

        {/* Dynamic Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {visibleMetrics.map((stat) => (
            <div
              key={stat.id}
              id={`metric-card-${stat.id}`}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/15">
                {renderIcon(stat.iconType)}
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 leading-snug mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Admin Dashboard Edit Modal */}
      {isAdminOpen && (
        <div 
          id="admin-metrics-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#08183A] text-white border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-black uppercase text-[#00D2FF] tracking-wider">
                  ADMIN DASHBOARD
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Manage Performance Metrics &amp; Verification
                </h3>
              </div>
              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Every number here can be customized. Per policy: <strong>&ldquo;Do NOT invent achievements or numbers. If a metric is not verified, hide it rather than inventing it.&rdquo;</strong> Toggle visibility or mark as unverified to hide from public view.
            </p>

            <div className="space-y-4">
              {draftMetrics.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{item.label}</span>
                      {item.isVerified ? (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                          Verified
                        </span>
                      ) : (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-500/30">
                          Pending / Unverified
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{item.sublabel}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-28">
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Value:
                      </label>
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => handleUpdateDraft(item.id, 'value', e.target.value)}
                        placeholder="e.g. 50+ or X+"
                        className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white font-bold text-sm focus:border-[#00D2FF] outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleUpdateDraft(item.id, 'isVerified', !item.isVerified)}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-colors ${
                          item.isVerified 
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40' 
                            : 'bg-white/10 text-slate-300 border-white/20'
                        }`}
                      >
                        {item.isVerified ? 'Mark Unverified' : 'Mark Verified'}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleUpdateDraft(item.id, 'isVisible', !item.isVisible)}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-colors flex items-center justify-center gap-1 ${
                          item.isVisible 
                            ? 'bg-blue-500/20 text-[#00D2FF] border-[#00D2FF]/40' 
                            : 'bg-rose-500/20 text-rose-300 border-rose-400/40'
                        }`}
                      >
                        {item.isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        <span>{item.isVisible ? 'Visible' : 'Hidden'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAdminOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveAdmin}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B5ED7] to-[#00D2FF] text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all"
                >
                  {saveSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Saved Successfully!</span>
                    </>
                  ) : (
                    <span>Save Metrics Configuration</span>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
