import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Sliders, Shield, Palette, Globe } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminWebsiteSettingsTab: React.FC = () => {
  const { settings, updateSettings, profile, updateProfile } = usePortfolio();
  const [siteSettings, setSiteSettings] = useState(settings);
  const [metrics, setMetrics] = useState(profile.credibilityMetrics);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSettings(siteSettings);
    await updateProfile({ credibilityMetrics: metrics });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Website Settings &amp; Global Configuration</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Manage site name, brand accent colors, availability status, and public display controls.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-white text-[#08183A] font-extrabold text-xs shadow-md transition-all active:scale-[0.98] shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Save Website Settings</span>
        </button>
      </div>

      {savedNotice && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Website settings updated in real time across the public site!</span>
        </div>
      )}

      {/* General Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#0B5ED7]" />
          General Website Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Website Brand Title</label>
            <input
              type="text"
              value={siteSettings.siteTitle}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteTitle: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Tagline / Sub-heading</label>
            <input
              type="text"
              value={siteSettings.siteTagline}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteTagline: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Logo Text</label>
            <input
              type="text"
              value={siteSettings.logoText}
              onChange={(e) => setSiteSettings({ ...siteSettings, logoText: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Availability Status Message</label>
            <input
              type="text"
              value={siteSettings.availabilityStatus}
              onChange={(e) => setSiteSettings({ ...siteSettings, availabilityStatus: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-slate-200 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={siteSettings.allowHireRequests}
              onChange={(e) => setSiteSettings({ ...siteSettings, allowHireRequests: e.target.checked })}
              className="w-4 h-4 rounded text-[#0B5ED7]"
            />
            <span className="text-xs font-bold text-slate-800">Allow Hire Inquiries</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-slate-200 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={siteSettings.enableCaseStudyDownloads}
              onChange={(e) => setSiteSettings({ ...siteSettings, enableCaseStudyDownloads: e.target.checked })}
              className="w-4 h-4 rounded text-[#0B5ED7]"
            />
            <span className="text-xs font-bold text-slate-800">Enable Case Study Downloads</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-slate-200 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={siteSettings.requireVerificationForMetrics}
              onChange={(e) => setSiteSettings({ ...siteSettings, requireVerificationForMetrics: e.target.checked })}
              className="w-4 h-4 rounded text-[#0B5ED7]"
            />
            <span className="text-xs font-bold text-slate-800">Verified Metrics Badge</span>
          </label>
        </div>
      </div>

      {/* Brand Color Accents */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#0B5ED7]" />
          Brand Colors &amp; Styling
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Primary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={siteSettings.primaryColor || '#0B5ED7'}
                onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                className="w-9 h-9 rounded-lg border border-slate-200 cursor-pointer"
              />
              <input
                type="text"
                value={siteSettings.primaryColor || '#0B5ED7'}
                onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                className="w-full px-2.5 py-1.5 text-xs font-mono rounded-lg border border-slate-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Secondary Accent</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={siteSettings.secondaryColor || '#00D2FF'}
                onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                className="w-9 h-9 rounded-lg border border-slate-200 cursor-pointer"
              />
              <input
                type="text"
                value={siteSettings.secondaryColor || '#00D2FF'}
                onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                className="w-full px-2.5 py-1.5 text-xs font-mono rounded-lg border border-slate-200"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">Footer Copyright Text</label>
            <input
              type="text"
              value={siteSettings.footerCopyright}
              onChange={(e) => setSiteSettings({ ...siteSettings, footerCopyright: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>
      </div>

      {/* Credibility Key Metrics (Editable) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#0B5ED7]" />
            Credibility Metrics &amp; Key Numbers (Editable)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Every metric displayed in the public credibility section is directly editable below.
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
                checked={metrics.clientsServed.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    clientsServed: {
                      ...metrics.clientsServed,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.clientsServed.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  clientsServed: {
                    ...metrics.clientsServed,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Ad Spend Managed */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Ad Spend Managed</label>
              <input
                type="checkbox"
                checked={metrics.adSpendManaged.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    adSpendManaged: {
                      ...metrics.adSpendManaged,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.adSpendManaged.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  adSpendManaged: {
                    ...metrics.adSpendManaged,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Average ROAS */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Average ROAS Lift</label>
              <input
                type="checkbox"
                checked={metrics.averageRoas.verified}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    averageRoas: {
                      ...metrics.averageRoas,
                      verified: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <input
              type="text"
              value={metrics.averageRoas.value}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  averageRoas: {
                    ...metrics.averageRoas,
                    value: e.target.value,
                  },
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
            />
          </div>

          {/* Years of Experience */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800">Years Experience</label>
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
        </div>
      </div>
    </form>
  );
};
