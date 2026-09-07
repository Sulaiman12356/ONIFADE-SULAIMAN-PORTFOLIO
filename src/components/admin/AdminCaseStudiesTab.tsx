import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Eye,
  EyeOff,
  Star,
  ArrowUp,
  ArrowDown,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { CaseStudyItem } from '../../types';

export const AdminCaseStudiesTab: React.FC = () => {
  const {
    caseStudies,
    addCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    togglePublishCaseStudy,
    toggleFeatureCaseStudy,
    reorderCaseStudy,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<CaseStudyItem>>({
    title: '',
    client: '',
    category: 'Meta Ads & Lead Gen',
    summary: '',
    challenge: '',
    strategy: '',
    results: '',
    metrics: '',
    thumbnail: '',
    featured: false,
    isPublished: true,
  });

  const handleEdit = (item: CaseStudyItem) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      await deleteCaseStudy(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateCaseStudy(editingId, {
        title: formData.title || 'Case Study',
        client: formData.client || '',
        category: formData.category || 'Digital Marketing',
        summary: formData.summary || '',
        challenge: formData.challenge || '',
        strategy: formData.strategy || '',
        results: formData.results || '',
        metrics: formData.metrics || '',
        thumbnail: formData.thumbnail || '',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
      });
    } else {
      const newItem: CaseStudyItem = {
        id: 'cs_' + Date.now(),
        title: formData.title || 'New Case Study',
        client: formData.client || '',
        category: formData.category || 'Digital Marketing',
        summary: formData.summary || '',
        challenge: formData.challenge || '',
        strategy: formData.strategy || '',
        results: formData.results || '',
        metrics: formData.metrics || '',
        thumbnail:
          formData.thumbnail ||
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
        order: caseStudies.length + 1,
      };
      await addCaseStudy(newItem);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      client: '',
      category: 'Meta Ads & Lead Gen',
      summary: '',
      challenge: '',
      strategy: '',
      results: '',
      metrics: '',
      thumbnail: '',
      featured: false,
      isPublished: true,
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Case Studies &amp; Growth Breakdowns</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Publish deep-dive client success stories showcasing Challenge, Strategy, Execution, and Verified Results.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              client: '',
              category: 'Meta Ads & Lead Gen',
              summary: '',
              challenge: '',
              strategy: '',
              results: '',
              metrics: '',
              thumbnail: '',
              featured: false,
              isPublished: true,
            });
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-white transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? 'Cancel' : 'Add New Case Study'}
        </button>
      </div>

      {/* Add / Edit Form Modal / Box */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
              {editingId ? 'Edit Case Study' : 'Create New Case Study'}
            </h3>
            <span className="text-xs text-slate-500 font-medium">Synced in real-time to public website</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Case Study Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Scaling Dental Implant Leads via High-Intent Meta Ads"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Client / Brand Name *</label>
              <input
                type="text"
                required
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. Apex Dental Group"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Meta Ads & Lead Gen">Meta Ads & Lead Gen</option>
                <option value="Landing Page Optimization">Landing Page Optimization</option>
                <option value="Brand Identity & Design">Brand Identity & Design</option>
                <option value="Social Media Growth">Social Media Growth</option>
                <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                <option value="Full-Funnel Campaign">Full-Funnel Campaign</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Key Metrics Highlight</label>
              <input
                type="text"
                value={formData.metrics}
                onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                placeholder="e.g. 340+ Qualified Leads | 4.8x ROAS | $21 CPL"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Executive Summary</label>
            <textarea
              rows={2}
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Brief overview of the business challenge and overall impact."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">1. The Challenge</label>
              <textarea
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="What was the core bottleneck or problem?"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">2. The Strategy & Execution</label>
              <textarea
                rows={3}
                value={formData.strategy}
                onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                placeholder="Funnel architecture, ad creatives, audience targeting, automation."
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">3. Measurable Results</label>
              <textarea
                rows={3}
                value={formData.results}
                onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                placeholder="Specific revenue, conversion rate lift, or lead volume achievements."
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Thumbnail Image URL</label>
            <input
              type="url"
              value={formData.thumbnail}
              onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
              <input
                type="checkbox"
                checked={formData.featured ?? false}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded text-[#0B5ED7] focus:ring-0"
              />
              Feature on Homepage
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
              <input
                type="checkbox"
                checked={formData.isPublished ?? true}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-0"
              />
              Publish to Website
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#084298] transition-colors shadow-sm"
            >
              {editingId ? 'Save Changes' : 'Publish Case Study'}
            </button>
          </div>
        </form>
      )}

      {/* Case Studies List */}
      <div className="grid grid-cols-1 gap-4">
        {caseStudies.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#0B5ED7]" />
            <p className="font-bold text-slate-600">No case studies added yet.</p>
            <p className="text-xs mt-1">Click "Add New Case Study" to highlight your client wins.</p>
          </div>
        ) : (
          caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl bg-white border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                item.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-100 shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                    <Layers className="w-8 h-8" />
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-[#0B5ED7] border border-blue-100">
                      {item.category}
                    </span>
                    {item.client && (
                      <span className="text-[10px] font-semibold text-slate-500">
                        Client: {item.client}
                      </span>
                    )}
                    {item.featured && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        Featured
                      </span>
                    )}
                    {item.isPublished === false && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        Unpublished
                      </span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{item.summary}</p>
                  {item.metrics && (
                    <p className="text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.metrics}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Controls: REORDER, FEATURE, PUBLISH, EDIT, DELETE */}
              <div className="flex items-center gap-1.5 self-end md:self-center shrink-0">
                {/* Reorder Buttons */}
                <button
                  onClick={() => reorderCaseStudy(item.id, 'up')}
                  disabled={index === 0}
                  title="Move Up"
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => reorderCaseStudy(item.id, 'down')}
                  disabled={index === caseStudies.length - 1}
                  title="Move Down"
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Feature Toggle */}
                <button
                  onClick={() => toggleFeatureCaseStudy(item.id)}
                  title={item.featured ? 'Unfeature' : 'Mark as Featured'}
                  className={`p-2 rounded-xl transition-colors ${
                    item.featured ? 'bg-amber-100 text-amber-700' : 'hover:bg-slate-100 text-slate-400'
                  }`}
                >
                  <Star className={`w-4 h-4 ${item.featured ? 'fill-amber-500' : ''}`} />
                </button>

                {/* Publish Toggle */}
                <button
                  onClick={() => togglePublishCaseStudy(item.id)}
                  title={item.isPublished === false ? 'Publish' : 'Unpublish'}
                  className={`p-2 rounded-xl transition-colors ${
                    item.isPublished === false ? 'bg-slate-200 text-slate-600' : 'bg-emerald-50 text-emerald-600'
                  }`}
                >
                  {item.isPublished === false ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>

                {/* Edit */}
                <button
                  onClick={() => handleEdit(item)}
                  title="Edit"
                  className="p-2 rounded-xl hover:bg-blue-50 text-blue-600 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  title="Delete"
                  className="p-2 rounded-xl hover:bg-rose-50 text-rose-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
