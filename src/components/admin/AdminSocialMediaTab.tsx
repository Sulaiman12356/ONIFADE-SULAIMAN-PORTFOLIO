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
  Share2,
  Sparkles,
  Instagram,
  Facebook,
  Video,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { SocialMediaWorkItem } from '../../types';

export const AdminSocialMediaTab: React.FC = () => {
  const {
    socialMediaItems,
    addSocialMediaItem,
    updateSocialMediaItem,
    deleteSocialMediaItem,
    togglePublishSocialMediaItem,
    toggleFeatureSocialMediaItem,
    reorderSocialMediaItem,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<SocialMediaWorkItem>>({
    title: '',
    platform: 'Instagram',
    category: 'Content',
    imageUrl: '',
    description: '',
    caption: '',
    metrics: '',
    postType: 'Post',
    featured: false,
    isPublished: true,
  });

  const handleEdit = (item: SocialMediaWorkItem) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this social media piece?')) {
      await deleteSocialMediaItem(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateSocialMediaItem(editingId, {
        title: formData.title || 'Social Post',
        platform: formData.platform || 'Instagram',
        category: formData.category || 'Content',
        imageUrl: formData.imageUrl || '',
        description: formData.description || '',
        caption: formData.caption || '',
        metrics: formData.metrics || '',
        postType: formData.postType || 'Post',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
      });
    } else {
      const newItem: SocialMediaWorkItem = {
        id: 'sm_' + Date.now(),
        title: formData.title || 'New Social Post',
        platform: formData.platform || 'Instagram',
        category: formData.category || 'Content',
        imageUrl:
          formData.imageUrl ||
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
        description: formData.description || '',
        caption: formData.caption || '',
        metrics: formData.metrics || '',
        postType: formData.postType || 'Post',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
        order: socialMediaItems.length + 1,
      };
      await addSocialMediaItem(newItem);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      platform: 'Instagram',
      category: 'Content',
      imageUrl: '',
      description: '',
      caption: '',
      metrics: '',
      postType: 'Post',
      featured: false,
      isPublished: true,
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Share2 className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Social Media Campaigns &amp; Content</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Showcase Instagram Carousels, Viral Reels, Ad Creatives, TikTok Marketing, and Content Calendars.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              platform: 'Instagram',
              category: 'Content',
              imageUrl: '',
              description: '',
              caption: '',
              metrics: '',
              postType: 'Post',
              featured: false,
              isPublished: true,
            });
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-white transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? 'Cancel' : 'Add Social Media Work'}
        </button>
      </div>

      {/* Add / Edit Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
              {editingId ? 'Edit Social Work' : 'Add Social Media Work'}
            </h3>
            <span className="text-xs text-slate-500 font-medium">Synced in real-time to public portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Campaign / Content Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. 5 Ad Copy Hooks That Scale"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Platform *</label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="TikTok">TikTok</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Post Format</label>
              <select
                value={formData.postType}
                onChange={(e) => setFormData({ ...formData, postType: e.target.value as any })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Carousel">Carousel (Swipeable)</option>
                <option value="Reel">Reel / Short Video</option>
                <option value="Ad Creative">Ad Creative</option>
                <option value="Post">Static Post</option>
                <option value="Calendar">Content Calendar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Image / Creative URL *</label>
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
              <label className="block text-xs font-bold text-slate-700 mb-1">Performance Metric / Result</label>
              <input
                type="text"
                value={formData.metrics}
                onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                placeholder="e.g. 142k organic views | 1,840 saves | 8.2% CTR"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Caption / Strategy Breakdown</label>
            <textarea
              rows={2}
              value={formData.caption || formData.description}
              onChange={(e) => setFormData({ ...formData, caption: e.target.value, description: e.target.value })}
              placeholder="What makes this hook effective? Target audience, call to action, and engagement triggers."
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
              {editingId ? 'Save Changes' : 'Add Social Post'}
            </button>
          </div>
        </form>
      )}

      {/* Social Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {socialMediaItems.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-2xl bg-white border overflow-hidden flex flex-col justify-between transition-all ${
              item.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#08183A]/85 text-white backdrop-blur-sm flex items-center gap-1">
                  {item.platform === 'Instagram' && <Instagram className="w-2.5 h-2.5 text-pink-400" />}
                  {item.platform === 'Facebook' && <Facebook className="w-2.5 h-2.5 text-blue-400" />}
                  {item.platform === 'TikTok' && <Video className="w-2.5 h-2.5 text-cyan-400" />}
                  {item.platform} • {item.postType || 'Post'}
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
                {item.metrics && (
                  <p className="text-[11px] font-bold text-emerald-700 mt-1">
                    {item.metrics}
                  </p>
                )}
                {(item.caption || item.description) && (
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1.5">{item.caption || item.description}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => reorderSocialMediaItem(item.id, 'up')}
                    disabled={index === 0}
                    title="Move Up"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => reorderSocialMediaItem(item.id, 'down')}
                    disabled={index === socialMediaItems.length - 1}
                    title="Move Down"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleFeatureSocialMediaItem(item.id)}
                    title={item.featured ? 'Unfeature' : 'Mark Featured'}
                    className={`p-1.5 rounded-lg ${
                      item.featured ? 'bg-amber-100 text-amber-700' : 'hover:bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${item.featured ? 'fill-amber-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => togglePublishSocialMediaItem(item.id)}
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
