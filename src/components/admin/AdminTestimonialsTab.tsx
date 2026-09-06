import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Star, CheckCircle2, MessageSquareQuote, Eye, EyeOff } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Testimonial } from '../../types';

export const AdminTestimonialsTab: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<Testimonial>>({
    name: '',
    role: '',
    organization: '',
    photo: '',
    quote: '',
    rating: 5,
    isFeatured: true,
    isPublished: true,
  });

  const handleEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setFormData(t);
    setIsAdding(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateTestimonial(editingId, formData);
    } else {
      addTestimonial({
        name: formData.name || 'Anonymous Client',
        role: formData.role || 'Partner',
        organization: formData.organization || 'Company',
        photo: formData.photo || '',
        quote: formData.quote || '',
        rating: Number(formData.rating) || 5,
        isFeatured: formData.isFeatured ?? true,
        isPublished: formData.isPublished ?? true,
      });
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      name: '',
      role: '',
      organization: '',
      photo: '',
      quote: '',
      rating: 5,
      isFeatured: true,
      isPublished: true,
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-[#062B63] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Verified Client Testimonials</h2>
          <p className="text-xs text-slate-300 mt-1">
            Manage genuine client reviews. Testimonials are strictly opt-in and published only when verified.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              name: '',
              role: '',
              organization: '',
              photo: '',
              quote: '',
              rating: 5,
              isFeatured: true,
              isPublished: true,
            });
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Close Form' : 'Add Testimonial'}</span>
        </button>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider">
            {editingId ? 'Edit Testimonial' : 'Add Genuine Testimonial'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Client Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Position / Job Title *</label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. CMO / Growth Director"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Organization / Brand *</label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Horizon Retail"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Client Photo URL</label>
              <input
                type="text"
                value={formData.photo}
                onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                placeholder="https://... or avatar"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Star Rating (1 - 5)</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value={5}>5 Stars (Exceptional)</option>
                <option value={4}>4 Stars (Very Good)</option>
                <option value={3}>3 Stars (Good)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Testimonial Quote *</label>
            <textarea
              rows={3}
              required
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              placeholder="What did the client say about working with Onifade Sulaiman (Mr. Clarity)?"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div className="flex items-center gap-6 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="rounded text-[#0B5ED7]"
              />
              <span className="font-semibold text-slate-800">Feature on homepage</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="rounded text-[#0B5ED7]"
              />
              <span className="font-semibold text-slate-800">Publish (Visible to public)</span>
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
              className="px-5 py-2 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold"
            >
              Save Testimonial
            </button>
          </div>
        </form>
      )}

      {/* Testimonials List */}
      {testimonials.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
          <MessageSquareQuote className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h3 className="font-bold text-sm text-slate-700">No Testimonials Yet</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Testimonials from collaborators and clients will appear here once added and verified.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {t.isPublished ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-500">
                        Draft
                      </span>
                    )}

                    <button
                      onClick={() => handleEdit(t)}
                      className="p-1 text-slate-400 hover:text-[#0B5ED7]"
                      title="Edit"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteTestimonial(t.id)}
                      className="p-1 text-slate-400 hover:text-rose-600"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-xs text-[#0B1F3A]">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role} • {t.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
