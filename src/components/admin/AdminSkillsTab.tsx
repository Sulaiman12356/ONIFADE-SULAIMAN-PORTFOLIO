import React, { useState } from 'react';
import { Plus, Trash2, Edit2, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { SkillItem } from '../../types';

export const AdminSkillsTab: React.FC = () => {
  const { skills, setSkills } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<SkillItem>>({
    skill: '',
    category: 'Marketing',
    level: 90,
    yearsExperience: '3+',
    tools: '',
    featured: true,
  });

  const handleEdit = (s: SkillItem) => {
    setEditingId(s.id);
    setFormData(s);
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setSkills((prev) =>
        prev.map((s) => (s.id === editingId ? ({ ...s, ...formData } as SkillItem) : s))
      );
    } else {
      const newSkill: SkillItem = {
        id: 'skill_' + Date.now(),
        skill: formData.skill || 'New Skill',
        category: formData.category || 'Marketing',
        level: Number(formData.level) || 85,
        yearsExperience: formData.yearsExperience || '2+',
        tools: formData.tools || '',
        featured: formData.featured ?? true,
      };
      setSkills((prev) => [...prev, newSkill]);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      skill: '',
      category: 'Marketing',
      level: 90,
      yearsExperience: '3+',
      tools: '',
      featured: true,
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Skills &amp; Platform Stack</h2>
          <p className="text-xs text-slate-300 mt-1">
            Manage your technical competencies, proficiency levels, years of experience, and featured status.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              skill: '',
              category: 'Marketing',
              level: 90,
              yearsExperience: '3+',
              tools: '',
              featured: true,
            });
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add New Skill'}</span>
        </button>
      </div>

      {/* Add / Edit Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Skill Item' : 'Add Skill to Stack'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Skill Name *</label>
              <input
                type="text"
                required
                value={formData.skill}
                onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                placeholder="e.g. Power BI Business Analytics"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Data">Data</option>
                <option value="Automation">Automation &amp; AI</option>
                <option value="Management">Management</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Years Experience</label>
              <input
                type="text"
                value={formData.yearsExperience}
                onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                placeholder="e.g. 3+"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Proficiency Level ({formData.level}%)
              </label>
              <input
                type="range"
                min="40"
                max="100"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: Number(e.target.value) })}
                className="w-full accent-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Tools / Technologies</label>
              <input
                type="text"
                value={formData.tools}
                onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                placeholder="e.g. Power BI, DAX, Power Query"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              id="skillFeatured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="rounded text-[#0B5ED7]"
            />
            <label htmlFor="skillFeatured" className="font-semibold text-slate-800">
              Feature on public homepage and CV preview
            </label>
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
              Save Skill
            </button>
          </div>
        </form>
      )}

      {/* Skills List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-black text-[#0B1F3A]">Active Skills ({skills.length})</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider font-bold">
              <tr>
                <th className="py-3 px-4">Skill Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Proficiency</th>
                <th className="py-3 px-4">Tools</th>
                <th className="py-3 px-4">Featured</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {skills.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-bold text-[#0B1F3A]">
                    {s.skill}
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {s.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0B5ED7] h-full" style={{ width: `${s.level}%` }} />
                      </div>
                      <span className="font-bold text-slate-700 text-[11px]">{s.level}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {s.tools}
                  </td>
                  <td className="py-3 px-4">
                    {s.featured ? (
                      <span className="text-emerald-600 font-bold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">No</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(s)}
                      className="text-[#0B5ED7] hover:underline font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-rose-600 hover:underline font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
