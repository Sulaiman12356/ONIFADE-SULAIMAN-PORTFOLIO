import React, { useState } from 'react';
import { Plus, Trash2, Edit2, CheckCircle2, Sparkles, Target, Palette, BarChart3, PenTool, Cpu, Users } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Service } from '../../types';

export const AdminServicesTab: React.FC = () => {
  const { services, setServices } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    iconName: 'Target',
    description: '',
    deliverables: [],
    targetAudience: '',
    outcome: '',
  });

  const [deliverablesInput, setDeliverablesInput] = useState('');

  const handleEdit = (s: Service) => {
    setEditingId(s.id);
    setFormData(s);
    setDeliverablesInput(s.deliverables.join('\n'));
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      setServices((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const deliverablesList = deliverablesInput
      .split('\n')
      .map((d) => d.trim())
      .filter(Boolean);

    if (editingId) {
      setServices((prev) =>
        prev.map((s) =>
          s.id === editingId
            ? ({ ...s, ...formData, deliverables: deliverablesList } as Service)
            : s
        )
      );
    } else {
      const newService: Service = {
        id: 'svc_' + Date.now(),
        title: formData.title || 'New Service',
        iconName: formData.iconName || 'Target',
        description: formData.description || '',
        deliverables: deliverablesList,
        targetAudience: formData.targetAudience || '',
        outcome: formData.outcome || '',
      };
      setServices((prev) => [...prev, newService]);
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
    });
    setDeliverablesInput('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-[#062B63] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              className="px-5 py-2 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold"
            >
              Save Service
            </button>
          </div>
        </form>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <div key={svc.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-black">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-sm text-[#0B1F3A]">{svc.title}</h4>
                </div>
                <div className="flex items-center gap-1">
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
