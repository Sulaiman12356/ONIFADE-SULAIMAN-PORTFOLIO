import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Sparkles,
  FolderKanban,
  Link2,
  ShieldCheck,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Star,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Project } from '../../types';

export const AdminProjectsTab: React.FC = () => {
  const {
    projects,
    addProject,
    updateProject,
    deleteProject,
    togglePublishProject,
    toggleFeatureProject,
    reorderProject,
  } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    category: 'META ADS',
    subtitle: '',
    client: '',
    role: '',
    timeline: '',
    metricHighlight: '',
    summary: '',
    challenge: '',
    solution: '',
    outcome: '',
    verifiedResults: true,
    hasVerifiedMetrics: true,
    workCompletedDescription: '',
    results: [],
    tools: [],
    deliverables: [],
  });

  const [resultsInput, setResultsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');

  const categories = [
    'META ADS',
    'LANDING PAGES',
    'BRANDING',
    'SOCIAL MEDIA',
    'AI & AUTOMATION',
    'WEB DEVELOPMENT',
    'VIDEO',
  ];

  const handleEdit = (p: Project) => {
    setEditingId(p.id);
    setFormData(p);
    setResultsInput((p.results || []).join('\n'));
    setToolsInput((p.tools || []).join(', '));
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultsList = resultsInput
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);
    const toolsList = toolsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingId) {
      await updateProject(editingId, {
        ...formData,
        results: resultsList,
        tools: toolsList,
      });
    } else {
      const newProject: Project = {
        id: 'proj_' + Date.now(),
        title: formData.title || 'New Project',
        category: formData.category || 'META ADS',
        subtitle: formData.subtitle || '',
        client: formData.client || 'Client Partner',
        role: formData.role || 'Digital Marketer',
        timeline: formData.timeline || 'Completed',
        thumbnail: formData.thumbnail || '/assets/images/project_ecommerce_1788655646475.jpg',
        metricHighlight: formData.metricHighlight || (formData.verifiedResults ? 'Verified Result' : 'Delivered Scope'),
        summary: formData.summary || '',
        challenge: formData.challenge || '',
        solution: formData.solution || '',
        outcome: formData.outcome || '',
        verifiedResults: formData.verifiedResults ?? true,
        hasVerifiedMetrics: formData.hasVerifiedMetrics ?? true,
        workCompletedDescription: formData.workCompletedDescription || '',
        results: resultsList,
        tools: toolsList,
        deliverables: formData.deliverables || ['Strategic Audit', 'Campaign Assets', 'Execution Documentation'],
      };
      await addProject(newProject);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'META ADS',
      subtitle: '',
      client: '',
      role: '',
      timeline: '',
      metricHighlight: '',
      summary: '',
      challenge: '',
      solution: '',
      outcome: '',
      verifiedResults: true,
      hasVerifiedMetrics: true,
      workCompletedDescription: '',
      results: [],
      tools: [],
      deliverables: [],
    });
    setResultsInput('');
    setToolsInput('');
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
        <div>
          <h2 className="text-base font-black text-[#0B1F3A] flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-[#00D2FF]" />
            <span>Selected Work &amp; Portfolio Management</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage projects across all 8 portfolio categories. Ensure verified results vs. work completed transparency.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              category: 'META ADS',
              subtitle: '',
              client: '',
              role: '',
              timeline: '',
              metricHighlight: '',
              summary: '',
              challenge: '',
              solution: '',
              outcome: '',
              verifiedResults: true,
              hasVerifiedMetrics: true,
              workCompletedDescription: '',
              results: [],
              tools: [],
              deliverables: [],
            });
            setResultsInput('');
            setToolsInput('');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add New Project'}</span>
        </button>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Project' : 'Create New Project'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Lead Gen Campaign for Real Estate"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-bold"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Metric / Outcome Highlight *</label>
              <input
                type="text"
                required
                value={formData.metricHighlight}
                onChange={(e) => setFormData({ ...formData, metricHighlight: e.target.value })}
                placeholder="e.g. 5.2x ROAS | 340 Qualified Leads"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Client Name</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. Havencrest Properties"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">My Role</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Meta Ads & Funnel Strategist"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Timeline / Duration</label>
              <input
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                placeholder="e.g. 6 Weeks"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          {/* Verification Policy Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Results Verification Policy</span>
            </div>
            <p className="text-[11px] text-slate-600">
              <strong>DO NOT fabricate results.</strong> If a project has verified results from Ads Manager or analytics, check the box below. If it does not, leave unchecked to display documented deliverables and scope.
            </p>
            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={Boolean(formData.verifiedResults)}
                onChange={(e) => setFormData({
                  ...formData,
                  verifiedResults: e.target.checked,
                  hasVerifiedMetrics: e.target.checked,
                })}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
              <span className="font-bold text-emerald-700">Project Has Verified &amp; Proven Client Metrics</span>
            </label>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Short Description / Summary</label>
            <textarea
              rows={2}
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Overall Outcome</label>
            <input
              type="text"
              value={formData.outcome || ''}
              onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
              placeholder="e.g. Generated 340 high-intent leads with zero CRM lead drop-off."
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          {!formData.verifiedResults && (
            <div>
              <label className="block font-bold text-slate-700 mb-1 text-xs">Explain Work Completed (When results are not metric-based)</label>
              <textarea
                rows={2}
                value={formData.workCompletedDescription || ''}
                onChange={(e) => setFormData({ ...formData, workCompletedDescription: e.target.value })}
                placeholder="Describe the strategy, design systems, or creative assets delivered for this client..."
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">The Challenge / Context</label>
              <textarea
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Strategy &amp; Execution</label>
              <textarea
                rows={3}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Measurable Results or Deliverables (One per line)</label>
            <textarea
              rows={3}
              value={resultsInput}
              onChange={(e) => setResultsInput(e.target.value)}
              placeholder="Delivered full 10-screen high-conversion Figma design&#10;Integrated Meta Pixel and Conversions API tracking&#10;Achieved 99/100 mobile speed index"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Tools Used (Comma separated)</label>
            <input
              type="text"
              value={toolsInput}
              onChange={(e) => setToolsInput(e.target.value)}
              placeholder="Meta Ads Manager, Figma, Webflow, Canva Pro, CapCut"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
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
              Save Project
            </button>
          </div>
        </form>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, index) => (
          <div
            key={p.id}
            className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between ${
              p.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-50 text-amber-600 border border-amber-200 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        Featured
                      </span>
                    )}
                    {p.isPublished === false && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500">
                        Unpublished
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-[#0B1F3A] mt-1.5">{p.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{p.summary}</p>
                </div>

                {/* Top Action Buttons */}
                <div className="flex items-center gap-1 shrink-0">
                  {/* Reorder */}
                  <button
                    onClick={() => reorderProject(p.id, 'up')}
                    disabled={index === 0}
                    title="Move Up"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => reorderProject(p.id, 'down')}
                    disabled={index === projects.length - 1}
                    title="Move Down"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>

                  {/* Feature */}
                  <button
                    onClick={() => toggleFeatureProject(p.id)}
                    title={p.featured ? 'Unfeature' : 'Feature Project'}
                    className={`p-1.5 rounded-lg transition-colors ${
                      p.featured ? 'bg-amber-100 text-amber-700' : 'text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${p.featured ? 'fill-amber-500' : ''}`} />
                  </button>

                  {/* Publish */}
                  <button
                    onClick={() => togglePublishProject(p.id)}
                    title={p.isPublished === false ? 'Publish' : 'Unpublish'}
                    className={`p-1.5 rounded-lg transition-colors ${
                      p.isPublished === false ? 'bg-slate-200 text-slate-600' : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {p.isPublished === false ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => handleEdit(p)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100"
                    title="Edit project"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100"
                    title="Delete project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-600 space-y-1">
                <div><strong>Client:</strong> {p.client}</div>
                <div><strong>Role:</strong> {p.role}</div>
                <div>
                  <strong>Outcome / Metric:</strong>{' '}
                  <span className={p.verifiedResults ? 'text-emerald-600 font-bold' : 'text-blue-600'}>
                    {p.outcome || p.metricHighlight}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>{p.tools ? p.tools.join(', ') : ''}</span>
              <span className={p.verifiedResults ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                {p.verifiedResults ? '✓ Verified' : 'Documented'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
