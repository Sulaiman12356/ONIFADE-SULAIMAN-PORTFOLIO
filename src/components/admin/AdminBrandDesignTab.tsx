import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  Star,
  ArrowUp,
  ArrowDown,
  Palette,
  Sparkles,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { BrandDesignItem } from '../../types';

export const AdminBrandDesignTab: React.FC = () => {
  const {
    brandDesigns,
    addBrandDesign,
    updateBrandDesign,
    deleteBrandDesign,
    togglePublishBrandDesign,
    toggleFeatureBrandDesign,
    reorderBrandDesign,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<BrandDesignItem>>({
    title: '',
    category: 'Brand identities',
    imageUrl: '',
    description: '',
    client: '',
    year: '2025',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    featured: false,
    isPublished: true,
  });

  const [toolsInput, setToolsInput] = useState('Photoshop, Illustrator, Figma');

  const handleEdit = (item: BrandDesignItem) => {
    setEditingId(item.id);
    setFormData(item);
    setToolsInput((item.tools || []).join(', '));
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this brand design project?')) {
      await deleteBrandDesign(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsedTools = toolsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingId) {
      await updateBrandDesign(editingId, {
        title: formData.title || 'Brand Project',
        category: formData.category || 'Brand identities',
        imageUrl: formData.imageUrl || '',
        description: formData.description || '',
        client: formData.client || '',
        year: formData.year || '2025',
        tools: parsedTools,
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
      });
    } else {
      const newItem: BrandDesignItem = {
        id: 'bd_' + Date.now(),
        title: formData.title || 'New Brand Project',
        category: formData.category || 'Brand identities',
        imageUrl:
          formData.imageUrl ||
          'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80',
        description: formData.description || '',
        client: formData.client || '',
        year: formData.year || '2025',
        tools: parsedTools,
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
        order: brandDesigns.length + 1,
      };
      await addBrandDesign(newItem);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Brand identities',
      imageUrl: '',
      description: '',
      client: '',
      year: '2025',
      featured: false,
      isPublished: true,
    });
    setToolsInput('Photoshop, Illustrator, Figma');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Palette className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Brand Design &amp; Visual Identities</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Manage logos, brand identity guides, high-converting marketing flyers, presentations, and campaign graphics.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              category: 'Brand identities',
              imageUrl: '',
              description: '',
              client: '',
              year: '2025',
              featured: false,
              isPublished: true,
            });
            setToolsInput('Photoshop, Illustrator, Figma');
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-white transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? 'Cancel' : 'Add Brand Design Project'}
        </button>
      </div>

      {/* Add / Edit Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
              {editingId ? 'Edit Brand Project' : 'Create Brand Project'}
            </h3>
            <span className="text-xs text-slate-500 font-medium">Synced in real-time to public portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Zenith Health Tech Brand Identity"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Design Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Brand identities">Brand identities</option>
                <option value="Logos">Logos</option>
                <option value="Flyers">Flyers</option>
                <option value="Marketing materials">Marketing materials</option>
                <option value="Campaign designs">Campaign designs</option>
                <option value="Social media graphics">Social media graphics</option>
                <option value="Presentations">Presentations</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Client Name</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. Zenith Health Labs"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Design Tools Used (comma separated)</label>
              <input
                type="text"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                placeholder="e.g. Adobe Illustrator, Photoshop, Figma, After Effects"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Image URL / Media Asset *</label>
            <input
              type="url"
              required
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Design Objective &amp; Description</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Strategic thinking behind color palette, typography, visual hierarchy, and brand positioning."
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
              {editingId ? 'Save Changes' : 'Add Brand Design'}
            </button>
          </div>
        </form>
      )}

      {/* Brand Designs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brandDesigns.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-2xl bg-white border overflow-hidden flex flex-col justify-between transition-all ${
              item.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#08183A]/85 text-white backdrop-blur-sm">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-white flex items-center gap-1 shadow-sm">
                    <Star className="w-2.5 h-2.5 fill-white text-white" />
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                {item.client && (
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    Client: {item.client}
                  </p>
                )}
                {item.description && (
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1.5">{item.description}</p>
                )}
              </div>

              {/* Action Controls */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => reorderBrandDesign(item.id, 'up')}
                    disabled={index === 0}
                    title="Move Up"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => reorderBrandDesign(item.id, 'down')}
                    disabled={index === brandDesigns.length - 1}
                    title="Move Down"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleFeatureBrandDesign(item.id)}
                    title={item.featured ? 'Unfeature' : 'Mark Featured'}
                    className={`p-1.5 rounded-lg ${
                      item.featured ? 'bg-amber-100 text-amber-700' : 'hover:bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${item.featured ? 'fill-amber-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => togglePublishBrandDesign(item.id)}
                    title={item.isPublished === false ? 'Publish' : 'Unpublish'}
                    className={`p-1.5 rounded-lg ${
                      item.isPublished === false ? 'bg-slate-200 text-slate-600' : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {item.isPublished === false ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => handleEdit(item)}
                    title="Edit"
                    className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                    className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-600"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
