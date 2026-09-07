import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Sparkles,
  Target,
  Palette,
  BarChart3,
  PenTool,
  Cpu,
  Users,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Star,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Service } from '../../types';

export const AdminServicesTab: React.FC = () => {
  const {
    services,
    addService,
    updateService,
    deleteService,
    togglePublishService,
    toggleFeatureService,
    reorderService,
  } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    iconName: 'Target',
    description: '',
    deliverables: [],
    targetAudience: '',
    outcome: '',
    featured: false,
    isPublished: true,
  });

  const [deliverablesInput, setDeliverablesInput] = useState('');

  const handleEdit = (s: Service) => {
    setEditingId(s.id);
    setFormData(s);
    setDeliverablesInput((s.deliverables || []).join('\n'));
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      await deleteService(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const deliverablesList = deliverablesInput
      .split('\n')
      .map((d) => d.trim())
      .filter(Boolean);

    if (editingId) {
      await updateService(editingId, {
        ...formData,
        deliverables: deliverablesList,
      });
    } else {
      const newService: Service = {
        id: 'svc_' + Date.now(),
        title: formData.title || 'New Service',
        iconName: formData.iconName || 'Target',
        description: formData.description || '',
        deliverables: deliverablesList,
        targetAudience: formData.targetAudience || '',
        outcome: formData.outcome || '',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
        order: services.length + 1,
      };
      await addService(newService);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      iconName: 'Target',
      description: '',
      deliverables: [],
      targetAudience: '',
      outcome: '',
      featured: false,
      isPublished: true,
    });
    setDeliverablesInput('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Services &amp; Value Propositions</h2>
          <p className="text-xs text-slate-300 mt-1">
            Manage your service offerings, deliverables, target audiences, and client outcomes.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              iconName: 'Target',
              description: '',
              deliverables: [],
              targetAudience: '',
              outcome: '',
            });
            setDeliverablesInput('');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add New Service'}</span>
        </button>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Service' : 'Add New Service'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Service Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Digital Marketing & Ads"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Icon Representation</label>
              <select
                value={formData.iconName}
                onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Target">Target (Digital Marketing / Ads)</option>
                <option value="Palette">Palette (Graphics Design / Branding)</option>
                <option value="BarChart3">BarChart3 (Data & Analytics)</option>
                <option value="PenTool">PenTool (Content Creation)</option>
                <option value="Cpu">Cpu (AI & Automation)</option>
                <option value="Users">Users (Training & Mentorship)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Service Overview / Summary</label>
            <textarea
              rows={2}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Key Deliverables (One per line)</label>
            <textarea
              rows={4}
              value={deliverablesInput}
              onChange={(e) => setDeliverablesInput(e.target.value)}
              placeholder="Meta Ad Campaigns&#10;TikTok Ad Creative Strategy&#10;Target Audience Segmentation&#10;Ad Budget Optimization"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Audience</label>
              <input
                type="text"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                placeholder="e.g. E-commerce brands, SMEs, service providers"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Expected Business Outcome</label>
              <input
                type="text"
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                placeholder="e.g. 3.5x - 5x Return on Ad Spend (ROAS)"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs"
            >
              Save Service
            </button>
          </div>
        </form>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc, index) => (
          <div
            key={svc.id}
            className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between ${
              svc.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-2 gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-black shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0B1F3A]">{svc.title}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {svc.featured && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                          Featured
                        </span>
                      )}
                      {svc.isPublished === false && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                          Unpublished
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {/* Reorder */}
                  <button
                    onClick={() => reorderService(svc.id, 'up')}
                    disabled={index === 0}
                    title="Move Up"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => reorderService(svc.id, 'down')}
                    disabled={index === services.length - 1}
                    title="Move Down"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>

                  {/* Feature */}
                  <button
                    onClick={() => toggleFeatureService(svc.id)}
                    title={svc.featured ? 'Unfeature' : 'Feature Service'}
                    className={`p-1.5 rounded-lg transition-colors ${
                      svc.featured ? 'bg-amber-100 text-amber-700' : 'text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${svc.featured ? 'fill-amber-500' : ''}`} />
                  </button>

                  {/* Publish */}
                  <button
                    onClick={() => togglePublishService(svc.id)}
                    title={svc.isPublished === false ? 'Publish' : 'Unpublish'}
                    className={`p-1.5 rounded-lg transition-colors ${
                      svc.isPublished === false ? 'bg-slate-200 text-slate-600' : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {svc.isPublished === false ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => handleEdit(svc)}
                    className="p-1.5 text-slate-400 hover:text-[#0B5ED7] transition-colors"
                    title="Edit Service"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(svc.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                    title="Delete Service"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                {svc.description}
              </p>

              <div className="space-y-1 text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="font-bold text-[#062B63] block text-[10px] uppercase">Deliverables:</span>
                {svc.deliverables?.slice(0, 3).map((d, i) => (
                  <div key={i} className="truncate">• {d}</div>
                ))}
              </div>
            </div>

            {svc.outcome && (
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-semibold">
                Outcome: {svc.outcome}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
