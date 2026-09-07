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
  Video,
  Sparkles,
  Play,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { VideoContentItem } from '../../types';

export const AdminVideosTab: React.FC = () => {
  const {
    videoItems,
    addVideoItem,
    updateVideoItem,
    deleteVideoItem,
    togglePublishVideoItem,
    toggleFeatureVideoItem,
    reorderVideoItem,
  } = usePortfolio();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<VideoContentItem>>({
    title: '',
    category: 'Short-form videos',
    platform: 'TikTok',
    videoUrl: '',
    thumbnail: '',
    description: '',
    primaryTool: 'CapCut / Premiere Pro',
    duration: '0:35',
    featured: false,
    isPublished: true,
  });

  const handleEdit = (item: VideoContentItem) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this video asset?')) {
      await deleteVideoItem(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateVideoItem(editingId, {
        title: formData.title || 'Video Content',
        category: formData.category || 'Short-form videos',
        platform: formData.platform || 'TikTok',
        videoUrl: formData.videoUrl || '',
        thumbnail: formData.thumbnail || '',
        description: formData.description || '',
        primaryTool: formData.primaryTool || 'CapCut',
        duration: formData.duration || '0:30',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
      });
    } else {
      const newItem: VideoContentItem = {
        id: 'vid_' + Date.now(),
        title: formData.title || 'New Video',
        category: formData.category || 'Short-form videos',
        platform: formData.platform || 'TikTok',
        videoUrl: formData.videoUrl || '',
        thumbnail:
          formData.thumbnail ||
          'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
        description: formData.description || '',
        primaryTool: formData.primaryTool || 'CapCut',
        duration: formData.duration || '0:30',
        featured: formData.featured ?? false,
        isPublished: formData.isPublished ?? true,
        order: videoItems.length + 1,
      };
      await addVideoItem(newItem);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Short-form videos',
      platform: 'TikTok',
      videoUrl: '',
      thumbnail: '',
      description: '',
      primaryTool: 'CapCut / Premiere Pro',
      duration: '0:35',
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
            <Video className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Video &amp; Motion Marketing</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Manage high-retention short-form videos, Instagram Reels, TikTok creatives, and promotional ad cuts.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({
              title: '',
              category: 'Short-form videos',
              platform: 'TikTok',
              videoUrl: '',
              thumbnail: '',
              description: '',
              primaryTool: 'CapCut / Premiere Pro',
              duration: '0:35',
              featured: false,
              isPublished: true,
            });
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-white transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? 'Cancel' : 'Add Video Asset'}
        </button>
      </div>

      {/* Add / Edit Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
              {editingId ? 'Edit Video Asset' : 'Add Video Asset'}
            </h3>
            <span className="text-xs text-slate-500 font-medium">Synced in real-time to public portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Video Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Meta Ads UGC Hook Test #3"
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
                <option value="TikTok">TikTok</option>
                <option value="Instagram">Instagram Reels</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="Meta Ads">Meta Ad Creative</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Video Format</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Short-form videos">Short-form videos</option>
                <option value="Reels">Reels</option>
                <option value="TikTok videos">TikTok videos</option>
                <option value="Promotional videos">Promotional videos</option>
                <option value="Social media videos">Social media videos</option>
                <option value="Marketing content">Marketing content</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Thumbnail Image URL *</label>
              <input
                type="url"
                required
                value={formData.thumbnail}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Video URL / Embed Link</label>
              <input
                type="url"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                placeholder="https://youtube.com/watch?... or https://tiktok.com/..."
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Primary Editing Tool</label>
              <input
                type="text"
                value={formData.primaryTool}
                onChange={(e) => setFormData({ ...formData, primaryTool: e.target.value })}
                placeholder="CapCut, Premiere Pro, DaVinci Resolve"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g. 0:35, 1:15"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Description / Hook Angle</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="The 3-second hook structure, pacing, sound design, and conversion CTA."
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
              {editingId ? 'Save Changes' : 'Add Video'}
            </button>
          </div>
        </form>
      )}

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {videoItems.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-2xl bg-white border overflow-hidden flex flex-col justify-between transition-all ${
              item.isPublished === false ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="relative aspect-[9/16] max-h-56 w-full bg-slate-900 overflow-hidden group">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#00D2FF] text-[#08183A] flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#08183A]/90 text-white backdrop-blur-sm">
                  {item.platform}
                </span>
                {item.featured && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-white flex items-center gap-1 shadow-sm">
                    <Star className="w-2.5 h-2.5 fill-white text-white" />
                    Featured
                  </span>
                )}
              </div>

              {item.duration && (
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono font-bold">
                  {item.duration}
                </div>
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  Tool: {item.primaryTool} • {item.category}
                </p>
                {item.description && (
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1.5">{item.description}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => reorderVideoItem(item.id, 'up')}
                    disabled={index === 0}
                    title="Move Up"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => reorderVideoItem(item.id, 'down')}
                    disabled={index === videoItems.length - 1}
                    title="Move Down"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleFeatureVideoItem(item.id)}
                    title={item.featured ? 'Unfeature' : 'Mark Featured'}
                    className={`p-1.5 rounded-lg ${
                      item.featured ? 'bg-amber-100 text-amber-700' : 'hover:bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${item.featured ? 'fill-amber-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => togglePublishVideoItem(item.id)}
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
