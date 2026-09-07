import React, { useState } from 'react';
import { Globe, Save, CheckCircle2, Search, Share2, Sparkles, Tag } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminSeoTab: React.FC = () => {
  const { seoSettings, updateSeoSettings } = usePortfolio();
  const [seo, setSeo] = useState(seoSettings);
  const [keywordInput, setKeywordInput] = useState(
    Array.isArray(seoSettings.keywords)
      ? seoSettings.keywords.join(', ')
      : seoSettings.keywords || ''
  );
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsedKeywords = keywordInput
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean);

    await updateSeoSettings({
      ...seo,
      keywords: parsedKeywords,
    });

    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const addQuickKeyword = (kw: string) => {
    const list = keywordInput.split(',').map((k) => k.trim()).filter(Boolean);
    if (!list.includes(kw)) {
      setKeywordInput([...list, kw].join(', '));
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Search Engine Optimization (SEO)</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Configure Google search rankings metadata, Open Graph preview cards, and high-intent conversion keywords.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-white text-[#08183A] font-extrabold text-xs shadow-md transition-all active:scale-[0.98] shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Save SEO Configuration</span>
        </button>
      </div>

      {savedNotice && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>SEO settings updated and synchronized with HTML meta tags!</span>
        </div>
      )}

      {/* Meta Tags Configuration */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#0B5ED7]" />
          Search Indexing &amp; Meta Tags
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">SEO Page Title Tag *</label>
              <span className={`text-[10px] font-mono ${seo.metaTitle.length > 60 ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                {seo.metaTitle.length} / 60 chars recommended
              </span>
            </div>
            <input
              type="text"
              required
              value={seo.metaTitle}
              onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })}
              placeholder="Onifade Sulaiman (Mr. Clarity) | Meta Ads Expert & Growth Strategist"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">SEO Meta Description *</label>
              <span className={`text-[10px] font-mono ${seo.metaDescription.length > 160 ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                {seo.metaDescription.length} / 160 chars recommended
              </span>
            </div>
            <textarea
              rows={3}
              required
              value={seo.metaDescription}
              onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })}
              placeholder="Proven Meta Ads & Digital Growth Strategist. 70+ projects completed, 4.2x average ROAS, high-converting funnels, landing pages, and AI automations."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Canonical URL</label>
            <input
              type="url"
              value={seo.canonicalUrl}
              onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })}
              placeholder="https://mrclarity.com"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Open Graph Share Image URL</label>
            <input
              type="url"
              value={seo.ogImage}
              onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>

        {/* Target High-Intent Keywords */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-slate-700 mb-1">Target Keywords (comma-separated)</label>
          <textarea
            rows={2}
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            placeholder="Meta Ads Expert, Digital Growth Marketer, Facebook Ads Strategist, High-Converting Landing Pages, Lead Generation Specialist"
            className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
          />

          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" /> Quick Add:
            </span>
            {[
              'Meta Ads Expert',
              'Performance Marketer',
              'High-Converting Landing Pages',
              'Facebook Ads Specialist',
              'ROAS Optimization',
              'Growth Strategist',
              'AI Automation Specialist',
            ].map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => addQuickKeyword(tag)}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#0B5ED7] transition-colors"
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Google Search Preview Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-[#0B5ED7]" />
          Google Search Result Live Preview
        </h3>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-2xl font-sans">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
            <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">
              C
            </span>
            <span>{seo.canonicalUrl || 'https://mrclarity.com'}</span>
          </div>
          <h4 className="text-base text-[#1a0dab] hover:underline cursor-pointer font-medium leading-snug line-clamp-1">
            {seo.metaTitle || 'Onifade Sulaiman (Mr. Clarity) | Meta Ads & Growth Strategist'}
          </h4>
          <p className="text-xs text-[#4d5156] mt-1 line-clamp-2 leading-relaxed">
            {seo.metaDescription || 'Proven Meta Ads & Digital Growth Strategist. 70+ projects completed, 4.2x average ROAS.'}
          </p>
        </div>
      </div>

      {/* Social Media Open Graph Share Card Preview */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          <Share2 className="w-3.5 h-3.5 text-[#0B5ED7]" />
          Social Share Card Preview (LinkedIn / Twitter / WhatsApp)
        </h3>
        <div className="max-w-md rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
          <div className="aspect-[1.91/1] w-full bg-slate-100 overflow-hidden">
            <img
              src={seo.ogImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'}
              alt="OG Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 bg-slate-50 border-t border-slate-100">
            <span className="text-[10px] uppercase font-bold text-slate-400">mrclarity.com</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{seo.metaTitle}</p>
            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{seo.metaDescription}</p>
          </div>
        </div>
      </div>
    </form>
  );
};
