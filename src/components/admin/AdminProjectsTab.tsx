import React, { useState } from 'react';
import { Plus, Trash2, Edit2, CheckCircle2, Sparkles, FolderKanban, Link2 } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Project } from '../../types';

export const AdminProjectsTab: React.FC = () => {
  const { projects, setProjects } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    category: 'Marketing',
    subtitle: '',
    client: '',
    role: '',
    timeline: '',
    metricHighlight: '',
    summary: '',
    challenge: '',
    solution: '',
    results: [],
    tools: [],
    deliverables: [],
  });

  const [resultsInput, setResultsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');

  const handleEdit = (p: Project) => {
    setEditingId(p.id);
    setFormData(p);
    setResultsInput(p.results.join('\n'));
    setToolsInput(p.tools.join(', '));
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? ({
                ...p,
                ...formData,
                results: resultsList,
                tools: toolsList,
              } as Project)
            : p
        )
      );
    } else {
      const newProject: Project = {
        id: 'proj_' + Date.now(),
        title: formData.title || 'New Case Study',
        category: formData.category || 'Marketing',
        subtitle: formData.subtitle || '',
        client: formData.client || 'Client Partner',
        role: formData.role || 'Lead Strategist',
        timeline: formData.timeline || '4 Weeks',
        thumbnail: formData.thumbnail || '/assets/images/project_ecommerce_1788655646475.jpg',
        metricHighlight: formData.metricHighlight || 'High ROI Outcome',
        summary: formData.summary || '',
        challenge: formData.challenge || '',
        solution: formData.solution || '',
        results: resultsList,
        tools: toolsList,
        deliverables: formData.deliverables || [],
      };
      setProjects((prev) => [newProject, ...prev]);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Marketing',
      subtitle: '',
      client: '',
      role: '',
      timeline: '',
      metricHighlight: '',
      summary: '',
      challenge: '',
      solution: '',
      results: [],
      tools: [],
      deliverables: [],
    });
    setResultsInput('');
    setToolsInput('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-[#062B63] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Case Studies &amp; Projects</h2>
          <p className="text-xs text-slate-300 mt-1">
            Showcase verified portfolio projects, challenges, solutions, tools used, and measurable results.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              category: 'Marketing',
              subtitle: '',
              client: '',
              role: '',
              timeline: '',
              metricHighlight: '',
              summary: '',
              challenge: '',
              solution: '',
              results: [],
              tools: [],
              deliverables: [],
            });
            setResultsInput('');
            setToolsInput('');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add New Project'}</span>
        </button>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Project' : 'Create Case Study'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. E-commerce Ad Campaign"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Data">Data</option>
                <option value="Branding">Branding</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Metric Highlight *</label>
              <input
                type="text"
                required
                value={formData.metricHighlight}
                onChange={(e) => setFormData({ ...formData, metricHighlight: e.target.value })}
                placeholder="e.g. 4.8x ROAS | +180% Revenue"
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
                placeholder="e.g. Retail Fashion Brand"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Your Role</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Lead Digital Strategist"
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

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Executive Summary</label>
            <textarea
              rows={2}
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">The Challenge / Problem</label>
              <textarea
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">The Strategy &amp; Solution</label>
              <textarea
                rows={3}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Key Measurable Results (One per line)</label>
            <textarea
              rows={3}
              value={resultsInput}
              onChange={(e) => setResultsInput(e.target.value)}
              placeholder="Generated over $38,000 in tracked sales from $8,000 ad budget&#10;Reduced average customer acquisition cost (CAC) by 41%&#10;Achieved a 3.4% click-through rate (CTR)"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Tools &amp; Platforms (Comma separated)</label>
            <input
              type="text"
              value={toolsInput}
              onChange={(e) => setToolsInput(e.target.value)}
              placeholder="Meta Ads Manager, Facebook Pixel & CAPI, Canva Pro, Excel"
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
              className="px-5 py-2 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold"
            >
              Save Case Study
            </button>
          </div>
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((proj) => (
          <div key={proj.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-50 text-[#0B5ED7]">
                  {proj.category}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {proj.metricHighlight}
                </span>
              </div>
              <h4 className="font-extrabold text-base text-[#0B1F3A]">{proj.title}</h4>
              <p className="text-xs text-slate-500 line-clamp-1 max-w-xl">{proj.summary}</p>
              <div className="text-[11px] text-slate-400">
                Client: {proj.client} • Role: {proj.role} • Timeline: {proj.timeline}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleEdit(proj)}
                className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-[#0B5ED7] hover:bg-slate-50 transition-colors text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(proj.id)}
                className="p-2 rounded-xl border border-slate-200 text-rose-600 hover:bg-rose-50 transition-colors text-xs font-semibold flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
