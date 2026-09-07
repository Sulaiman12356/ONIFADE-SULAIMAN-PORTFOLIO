import React, { useState } from 'react';
import { Settings, Globe, Shield, Save, CheckCircle2, Sliders } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminSettingsSeoTab: React.FC = () => {
  const { settings, updateSettings, seoSettings, updateSeoSettings, profile, updateProfile } = usePortfolio();
  const [siteSettings, setSiteSettings] = useState(settings);
  const [seo, setSeo] = useState(seoSettings);
  const [metrics, setMetrics] = useState(profile.credibilityMetrics);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(siteSettings);
    updateSeoSettings(seo);
    updateProfile({ credibilityMetrics: metrics });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <form onSubmit={handleSaveAll} className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Website Settings &amp; SEO Engine</h2>
          <p className="text-xs text-slate-300 mt-1">
            Configure site metadata, search engine indexing tags, brand colors, and editable credibility metrics.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#08183A] font-extrabold text-xs shadow-sm transition-all active:scale-[0.98]"
        >
          <Save className="w-4 h-4" />
          <span>Save All Settings</span>
        </button>
      </div>

      {savedNotice && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings &amp; SEO parameters updated successfully!</span>
        </div>
      )}

      {/* Editable Credibility Metrics Section (User's Metric Requirement!) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#0B5ED7]" />
            <span>Credibility Metrics &amp; Key Numbers (Editable)</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Every metric displayed in the public credibility section is editable below. Toggle any metric off to hide it if unverified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Projects Completed */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Projects Completed</label>
              <input
                type="checkbox"
                checked={metrics.projectsCompleted.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    projectsCompleted: {
                      ...metrics.projectsCompleted,
                      verified: e.target.checked,
                    },
                  })
                }
                title="Toggle visibility if verified"
              />
            </div>
            <input
              type="text"
              value={metrics.projectsCompleted.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  projectsCompleted: {
                    ...metrics.projectsCompleted,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Clients & Collaborations */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Clients / Collaborations</label>
              <input
                type="checkbox"
                checked={metrics.clientsCollaborations.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    clientsCollaborations: {
                      ...metrics.clientsCollaborations,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.clientsCollaborations.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  clientsCollaborations: {
                    ...metrics.clientsCollaborations,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Years Experience */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Years of Experience</label>
              <input
                type="checkbox"
                checked={metrics.yearsExperience.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    yearsExperience: {
                      ...metrics.yearsExperience,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.yearsExperience.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  yearsExperience: {
                    ...metrics.yearsExperience,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Ad Budget Managed */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Advertising Budget Managed</label>
              <input
                type="checkbox"
                checked={metrics.advertisingBudgetManaged.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    advertisingBudgetManaged: {
                      ...metrics.advertisingBudgetManaged,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.advertisingBudgetManaged.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  advertisingBudgetManaged: {
                    ...metrics.advertisingBudgetManaged,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Training / Participants */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Training Participants</label>
              <input
                type="checkbox"
                checked={metrics.trainingParticipants.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    trainingParticipants: {
                      ...metrics.trainingParticipants,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.trainingParticipants.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  trainingParticipants: {
                    ...metrics.trainingParticipants,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Organizations Supported */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Organizations Supported</label>
              <input
                type="checkbox"
                checked={metrics.organizationsSupported.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    organizationsSupported: {
                      ...metrics.organizationsSupported,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.organizationsSupported.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  organizationsSupported: {
                    ...metrics.organizationsSupported,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>
        </div>
      </div>

      {/* SEO & Search Engine Optimization */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#0B5ED7]" />
          <span>SEO &amp; Open Graph Meta Tags</span>
        </h3>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">SEO Title</label>
            <input
              type="text"
              value={seo.metaTitle}
              onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">SEO Meta Description</label>
            <textarea
              rows={2}
              value={seo.metaDescription}
              onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Meta Keywords (Comma separated)</label>
              <input
                type="text"
                value={seo.keywords}
                onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">OG Share Image URL</label>
              <input
                type="text"
                value={seo.ogImage}
                onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md shadow-[#0B5ED7]/25 transition-all active:scale-[0.98]"
        >
          <Save className="w-4 h-4" />
          <span>Save All Settings</span>
        </button>
      </div>

    </form>
  );
};
