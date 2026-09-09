import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Save,
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AboutSectionItem } from '../../types';
import { DEFAULT_ABOUT_SECTIONS } from '../../data/portfolioData';

export const AdminAboutTab: React.FC = () => {
  const {
    aboutSections,
    addAboutSection,
    updateAboutSection,
    deleteAboutSection,
    toggleAboutSectionPublish,
    reorderAboutSections,
    setAboutSections,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<AboutSectionItem>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [saveNotice, setSaveNotice] = useState(false);

  const startEdit = (sec: AboutSectionItem) => {
    setEditingId(sec.id);
    setIsAddingNew(false);
    setFormData({
      sectionNumber: sec.sectionNumber,
      title: sec.title,
      subtitle: sec.subtitle || '',
      content: sec.content,
      quote: sec.quote || '',
      order: sec.order,
      isPublished: sec.isPublished !== false,
    });
  };

  const startNew = () => {
    setIsAddingNew(true);
    setEditingId(null);
    const nextOrder = (aboutSections.length || 0) + 1;
    setFormData({
      sectionNumber: String(nextOrder).padStart(2, '0'),
      title: '',
      subtitle: '',
      content: '',
      quote: '',
      order: nextOrder,
      isPublished: true,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('Please provide a title and narrative content.');
      return;
    }

    if (isAddingNew) {
      await addAboutSection({
        sectionNumber: formData.sectionNumber || '01',
        title: formData.title,
        subtitle: formData.subtitle || '',
        content: formData.content,
        quote: formData.quote || '',
        order: formData.order || aboutSections.length + 1,
        isPublished: formData.isPublished !== false,
      });
      setIsAddingNew(false);
    } else if (editingId) {
      await updateAboutSection(editingId, {
        sectionNumber: formData.sectionNumber,
        title: formData.title,
        subtitle: formData.subtitle,
        content: formData.content,
        quote: formData.quote,
        order: formData.order,
        isPublished: formData.isPublished,
      });
      setEditingId(null);
    }

    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 3000);
  };

  const handleMove = async (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= aboutSections.length) return;
    const copy = [...aboutSections];
    const [moved] = copy.splice(index, 1);
    copy.splice(targetIndex, 0, moved);
    await reorderAboutSections(copy);
  };

  const handleResetToDefaultStory = async () => {
    if (confirm('Reset all 15 About Story subsections to the official default story? This will overwrite existing about sections.')) {
      await reorderAboutSections(DEFAULT_ABOUT_SECTIONS);
      setSaveNotice(true);
      setTimeout(() => setSaveNotice(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[#0B5ED7]" />
            <h2 className="text-xl font-black text-[#062B63] uppercase">
              About Story Subsections (15 Subsections)
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Manage, edit, reorder or add to the 15 narrative sections of the story-driven About Me page.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetToDefaultStory}
            className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset to official 15 subsections"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Story</span>
          </button>

          <button
            type="button"
            onClick={startNew}
            className="px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0B5ED7] hover:bg-[#1D4ED8] flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Subsection</span>
          </button>
        </div>
      </div>

      {saveNotice && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>About story sections saved and updated across the live portfolio!</span>
        </div>
      )}

      {/* Edit / Add Modal or Inline Form */}
      {(isAddingNew || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border-2 border-[#0B5ED7]/30 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-black text-[#062B63] uppercase">
              {isAddingNew ? 'Add New Subsection' : `Edit Subsection ${formData.sectionNumber}`}
            </h3>
            <button
              type="button"
              onClick={() => {
                setIsAddingNew(false);
                setEditingId(null);
              }}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Section Number</label>
              <input
                type="text"
                value={formData.sectionNumber || ''}
                onChange={(e) => setFormData({ ...formData, sectionNumber: e.target.value })}
                placeholder="e.g. 01"
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. WHO I AM"
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle / Tagline (Optional)</label>
            <input
              type="text"
              value={formData.subtitle || ''}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="e.g. Beyond Visual Aesthetics"
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Narrative Content / Story Text</label>
            <textarea
              rows={5}
              value={formData.content || ''}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write the human, confident and professional narrative for this section..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Featured Quote / Highlight (Optional)</label>
            <input
              type="text"
              value={formData.quote || ''}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              placeholder="e.g. Marketing is not simply about making noise. It is about communication."
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
              <input
                type="checkbox"
                checked={formData.isPublished !== false}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="rounded text-[#0B5ED7]"
              />
              <span>Published on Website</span>
            </label>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Subsection</span>
            </button>
          </div>
        </form>
      )}

      {/* List of Subsections */}
      <div className="space-y-3">
        {aboutSections.map((sec, index) => (
          <div
            key={sec.id || index}
            className={`p-4 rounded-2xl border transition-all ${
              sec.isPublished !== false ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-200 opacity-70'
            } flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
          >
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[#0B5ED7] font-mono font-black text-xs flex items-center justify-center flex-shrink-0">
                {sec.sectionNumber}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-[#062B63]">
                    {sec.title}
                  </h4>
                  {sec.isPublished === false && (
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                      Hidden
                    </span>
                  )}
                </div>
                {sec.subtitle && (
                  <div className="text-xs font-bold text-[#0B5ED7]">
                    {sec.subtitle}
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 max-w-xl">
                  {sec.content}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 self-end sm:self-center">
              <button
                type="button"
                onClick={() => handleMove(index, 'up')}
                disabled={index === 0}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-30 cursor-pointer"
                title="Move Up"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleMove(index, 'down')}
                disabled={index === aboutSections.length - 1}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-30 cursor-pointer"
                title="Move Down"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => toggleAboutSectionPublish(sec.id)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                title={sec.isPublished !== false ? 'Hide from website' : 'Publish to website'}
              >
                {sec.isPublished !== false ? (
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
              <button
                type="button"
                onClick={() => startEdit(sec)}
                className="p-2 rounded-lg bg-[#EFF6FF] hover:bg-blue-100 text-[#0B5ED7] cursor-pointer"
                title="Edit Subsection"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Delete subsection ${sec.sectionNumber}: ${sec.title}?`)) {
                    deleteAboutSection(sec.id);
                  }
                }}
                className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
                title="Delete Subsection"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
