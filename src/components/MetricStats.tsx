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
  X,
  Target,
  Sparkles
} from 'lucide-react';

export interface EditableMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  isVerified: boolean;
  isVisible: boolean;
  iconType: 'budget' | 'roas' | 'projects' | 'training' | 'clients' | 'experience';
}

const DEFAULT_METRICS: EditableMetric[] = [
  {
    id: 'budget',
    value: '$500K+',
    label: 'Meta Ad Spend Managed',
    sublabel: 'Profitable multi-channel acquisition',
    isVerified: true,
    isVisible: true,
    iconType: 'budget',
  },
  {
    id: 'roas',
    value: '4.8x',
    label: 'Average Campaign ROAS',
    sublabel: 'Direct-response conversion funnels',
    isVerified: true,
    isVisible: true,
    iconType: 'roas',
  },
  {
    id: 'projects',
    value: '50+',
    label: 'Projects Delivered',
    sublabel: 'Ads, AI pages & brand systems',
    isVerified: true,
    isVisible: true,
    iconType: 'projects',
  },
  {
    id: 'training',
    value: '500+',
    label: 'Students & Founders Trained',
    sublabel: 'Founder, Clarity Digital Academy',
    isVerified: true,
    isVisible: true,
    iconType: 'training',
  },
  {
    id: 'clients',
    value: '30+',
    label: 'Clients & Brands Scaled',
    sublabel: 'Startups, SMEs & e-commerce',
    isVerified: true,
    isVisible: true,
    iconType: 'clients',
  },
  {
    id: 'experience',
    value: '3+',
    label: 'Years Proven Experience',
    sublabel: 'Digital marketing & AI solutions',
    isVerified: true,
    isVisible: true,
    iconType: 'experience',
  },
];

export const MetricStats: React.FC = () => {
  const [metrics, setMetrics] = useState<EditableMetric[]>(() => {
    const saved = localStorage.getItem('clarity_verified_metrics_v2');
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
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('clarity_verified_metrics_v2', JSON.stringify(metrics));
  }, [metrics]);

  const handleOpenAdmin = () => {
    setDraftMetrics(JSON.parse(JSON.stringify(metrics)));
    setIsAdminOpen(true);
    setSavedSuccess(false);
  };

  const handleSave = () => {
    setMetrics(draftMetrics);
    setSavedSuccess(true);
    setTimeout(() => {
      setIsAdminOpen(false);
      setSavedSuccess(false);
    }, 800);
  };

  const handleResetDefaults = () => {
    setDraftMetrics(DEFAULT_METRICS);
  };

  const handleFieldChange = (id: string, field: keyof EditableMetric, val: any) => {
    setDraftMetrics((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const visibleMetrics = metrics.filter((m) => m.isVisible && m.isVerified);

  const renderIcon = (type: EditableMetric['iconType']) => {
    switch (type) {
      case 'budget':
        return <TrendingUp className="w-5 h-5 text-[#0B5ED7]" />;
      case 'roas':
        return <Target className="w-5 h-5 text-[#0B5ED7]" />;
      case 'projects':
        return <Briefcase className="w-5 h-5 text-[#0B5ED7]" />;
      case 'training':
        return <GraduationCap className="w-5 h-5 text-[#0B5ED7]" />;
      case 'clients':
        return <Users className="w-5 h-5 text-[#0B5ED7]" />;
      case 'experience':
      default:
        return <Clock className="w-5 h-5 text-[#0B5ED7]" />;
    }
  };

  return (
    <section 
      id="credibility-metrics"
      className="bg-[#062B63] text-white py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#EFF6FF] border border-white/20 text-[11px] font-bold tracking-wider uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>VERIFIED PERFORMANCE DATA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Measurable Business Impact
            </h2>
          </div>

          <button
            onClick={handleOpenAdmin}
            className="self-start sm:self-auto text-xs font-bold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/15 transition-all flex items-center gap-1.5"
            title="Configure verified metrics"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Manage Metrics</span>
          </button>
        </div>

        {/* 6 Metric Cards Grid matching the clean rounded visual reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {visibleMetrics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {renderIcon(stat.iconType)}
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200 leading-snug mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Admin Modal for metric customization */}
      {isAdminOpen && (
        <div 
          id="admin-metrics-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#062B63] text-white border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-black uppercase text-[#0B5ED7] tracking-wider">
                  METRICS CONFIGURATION
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Manage Portfolio Performance Metrics
                </h3>
              </div>
              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

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
                          Pending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => handleFieldChange(item.id, 'value', e.target.value)}
                        className="w-24 px-2 py-1 rounded bg-white/10 border border-white/20 text-sm font-bold text-white focus:outline-none focus:border-[#0B5ED7]"
                      />
                      <input
                        type="text"
                        value={item.sublabel}
                        onChange={(e) => handleFieldChange(item.id, 'sublabel', e.target.value)}
                        className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20 text-xs text-slate-300 focus:outline-none focus:border-[#0B5ED7]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleFieldChange(item.id, 'isVerified', !item.isVerified)}
                      className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                        item.isVerified ? 'bg-emerald-600/30 text-emerald-300' : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{item.isVerified ? 'Verified' : 'Unverified'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleFieldChange(item.id, 'isVisible', !item.isVisible)}
                      className={`p-2 rounded-lg text-xs font-bold transition-colors ${
                        item.isVisible ? 'bg-blue-600/30 text-blue-300' : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {item.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAdminOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-6 py-2 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold shadow-lg transition-all"
                >
                  {savedSuccess ? 'Saved!' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
