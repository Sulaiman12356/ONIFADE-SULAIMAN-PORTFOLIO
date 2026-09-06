import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Briefcase, Calendar, Building2 } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ExperienceItem } from '../../types';

export const AdminExperienceTab: React.FC = () => {
  const { experience, setExperience } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<ExperienceItem>>({
    organization: '',
    role: '',
    startDate: '',
    endDate: 'Present',
    description: '',
    achievements: [],
    skills: [],
  });

  const [achievementsInput, setAchievementsInput] = useState('');
  const [skillsInput, setSkillsInput] = useState('');

  const handleEdit = (exp: ExperienceItem) => {
    setEditingId(exp.id);
    setFormData(exp);
    setAchievementsInput(exp.achievements.join('\n'));
    setSkillsInput(exp.skills.join(', '));
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this experience record?')) {
      setExperience((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const achievementsList = achievementsInput
      .split('\n')
      .map((a) => a.trim())
      .filter(Boolean);
    const skillsList = skillsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingId) {
      setExperience((prev) =>
        prev.map((e) =>
          e.id === editingId
            ? ({
                ...e,
                ...formData,
                achievements: achievementsList,
                skills: skillsList,
              } as ExperienceItem)
            : e
        )
      );
    } else {
      const newExp: ExperienceItem = {
        id: 'exp_' + Date.now(),
        organization: formData.organization || 'Organization',
        role: formData.role || 'Role',
        startDate: formData.startDate || '2023',
        endDate: formData.endDate || 'Present',
        description: formData.description || '',
        achievements: achievementsList,
        skills: skillsList,
      };
      setExperience((prev) => [...prev, newExp]);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      organization: '',
      role: '',
      startDate: '',
      endDate: 'Present',
      description: '',
      achievements: [],
      skills: [],
    });
    setAchievementsInput('');
    setSkillsInput('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-[#062B63] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Experience &amp; Career Roles</h2>
          <p className="text-xs text-slate-300 mt-1">
            Manage professional roles, timelines, organizations, verified achievements, and skills applied.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              organization: '',
              role: '',
              startDate: '',
              endDate: 'Present',
              description: '',
              achievements: [],
              skills: [],
            });
            setAchievementsInput('');
            setSkillsInput('');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add Experience'}</span>
        </button>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Experience Record' : 'Add New Experience Record'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Role / Job Title *</label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Lead Digital Strategist & Founder"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Company / Organization *</label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Clarity Digital Academy"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Start Date</label>
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                placeholder="e.g. Jan 2022"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">End Date</label>
              <input
                type="text"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                placeholder="e.g. Present"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Role Overview / Mission</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Key Achievements (One per line)</label>
            <textarea
              rows={3}
              value={achievementsInput}
              onChange={(e) => setAchievementsInput(e.target.value)}
              placeholder="Trained 500+ students in Canva Pro and digital marketing&#10;Managed $500K+ ad spend across Meta and TikTok with 4.8x ROAS&#10;Built automated client reporting systems"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Skills Utilized (Comma separated)</label>
            <input
              type="text"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="Meta Ads, Canva Pro, Power BI, Client Advisory"
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
              Save Role
            </button>
          </div>
        </form>
      )}

      {/* Experience List */}
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-extrabold text-[#0B1F3A] text-base">{exp.role}</span>
                <span className="text-slate-400">•</span>
                <span className="text-[#0B5ED7] font-bold">{exp.organization}</span>
              </div>

              <div className="text-xs text-slate-500 font-semibold">
                {exp.startDate} – {exp.endDate}
              </div>

              <p className="text-xs text-slate-600 max-w-2xl">{exp.description}</p>

              <div className="space-y-1 text-xs text-slate-700 pt-1">
                {exp.achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0B5ED7] font-bold">•</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleEdit(exp)}
                className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-[#0B5ED7] hover:bg-slate-50 transition-colors text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(exp.id)}
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
