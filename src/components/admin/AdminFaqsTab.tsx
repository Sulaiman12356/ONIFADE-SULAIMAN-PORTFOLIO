import React, { useState } from 'react';
import {
  HelpCircle,
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
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FAQItem } from '../../types';
import { DEFAULT_FAQS } from '../../data/portfolioData';

export const AdminFaqsTab: React.FC = () => {
  const {
    faqs,
    addFaq,
    updateFaq,
    deleteFaq,
    toggleFaqPublish,
    reorderFaqs,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<FAQItem>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [saveNotice, setSaveNotice] = useState(false);

  const startEdit = (faq: FAQItem) => {
    setEditingId(faq.id);
    setIsAddingNew(false);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      order: faq.order,
      isPublished: faq.isPublished !== false,
    });
  };

  const startNew = () => {
    setIsAddingNew(true);
    setEditingId(null);
    setFormData({
      question: '',
      answer: '',
      order: (faqs.length || 0) + 1,
      isPublished: true,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question || !formData.answer) {
      alert('Please fill out both the question and answer.');
      return;
    }

    if (isAddingNew) {
      await addFaq({
        question: formData.question,
        answer: formData.answer,
        order: formData.order || faqs.length + 1,
        isPublished: formData.isPublished !== false,
      });
      setIsAddingNew(false);
    } else if (editingId) {
      await updateFaq(editingId, {
        question: formData.question,
        answer: formData.answer,
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
    if (targetIndex < 0 || targetIndex >= faqs.length) return;
    const copy = [...faqs];
    const [moved] = copy.splice(index, 1);
    copy.splice(targetIndex, 0, moved);
    await reorderFaqs(copy);
  };

  const handleResetDefaults = async () => {
    if (confirm('Reset FAQ list to the default 10 questions and answers?')) {
      await reorderFaqs(DEFAULT_FAQS);
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
            <HelpCircle className="w-5 h-5 text-[#0B5ED7]" />
            <h2 className="text-xl font-black text-[#062B63] uppercase">
              Frequently Asked Questions ({faqs.length})
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Manage, edit, reorder or add FAQs displayed in the public accordion section.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset FAQs</span>
          </button>

          <button
            type="button"
            onClick={startNew}
            className="px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0B5ED7] hover:bg-[#1D4ED8] flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Question</span>
          </button>
        </div>
      </div>

      {saveNotice && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>FAQs updated in Firestore and synchronized across the portfolio!</span>
        </div>
      )}

      {/* Inline Form */}
      {(isAddingNew || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border-2 border-[#0B5ED7]/30 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-black text-[#062B63] uppercase">
              {isAddingNew ? 'Add New Question & Answer' : 'Edit FAQ Item'}
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

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Question</label>
            <input
              type="text"
              value={formData.question || ''}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="e.g. What services do you offer?"
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Answer</label>
            <textarea
              rows={4}
              value={formData.answer || ''}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="Provide a clear, professional answer..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-[#0B5ED7]"
              required
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
              <span>Save FAQ</span>
            </button>
          </div>
        </form>
      )}

      {/* List of FAQs */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={faq.id || index}
            className={`p-4 rounded-2xl border transition-all ${
              faq.isPublished !== false ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-200 opacity-70'
            } flex flex-col sm:flex-row sm:items-start justify-between gap-4`}
          >
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#0B5ED7]/20 text-[#0B5ED7] font-mono font-black text-xs flex items-center justify-center flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-[#062B63]">
                    {faq.question}
                  </h4>
                  {faq.isPublished === false && (
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                      Hidden
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
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
                disabled={index === faqs.length - 1}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-30 cursor-pointer"
                title="Move Down"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => toggleFaqPublish(faq.id)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                title={faq.isPublished !== false ? 'Hide' : 'Publish'}
              >
                {faq.isPublished !== false ? (
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
              <button
                type="button"
                onClick={() => startEdit(faq)}
                className="p-2 rounded-lg bg-[#EFF6FF] hover:bg-blue-100 text-[#0B5ED7] cursor-pointer"
                title="Edit FAQ"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Delete FAQ: "${faq.question}"?`)) {
                    deleteFaq(faq.id);
                  }
                }}
                className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
                title="Delete FAQ"
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
