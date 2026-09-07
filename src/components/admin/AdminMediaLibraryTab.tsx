import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  Image as ImageIcon,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  Sparkles,
  FolderOpen,
  Filter,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { MediaItem } from '../../types';

export const AdminMediaLibraryTab: React.FC = () => {
  const { mediaList, uploadMediaFile, deleteMediaItem, isSyncing } = usePortfolio();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'image' | 'document' | 'video'>('all');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    try {
      await uploadMediaFile(file, 'media_library');
    } catch (err: any) {
      alert('Upload notice: ' + (err?.message || 'Check storage connection'));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this media item from library?')) {
      await deleteMediaItem(id);
    }
  };

  const filteredMedia = mediaList.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'image') return item.category === 'image' || item.fileType?.includes('image');
    if (filterType === 'document') return item.category === 'document' || item.fileType?.includes('pdf') || item.fileType?.includes('doc');
    if (filterType === 'video') return item.category === 'video' || item.fileType?.includes('video');
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Media Library &amp; Cloud Storage</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Centralized repository for images, brand assets, PDFs, and client proof screenshots with 1-click URL copying.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-white">
            {mediaList.length} Files Stored
          </span>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`p-8 rounded-2xl border-2 border-dashed transition-all text-center cursor-pointer flex flex-col items-center justify-center gap-3 ${
          dragOver
            ? 'border-[#00D2FF] bg-blue-50/50 scale-[0.99]'
            : 'border-slate-300 hover:border-[#0B5ED7] bg-white'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => handleFileUpload(e.target.files)}
        />
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <p className="font-extrabold text-slate-800 text-sm">
            {isSyncing ? 'Uploading to Storage...' : 'Click to Upload or Drag and Drop Files'}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            PNG, JPG, WEBP, SVG, PDF, DOCX up to 25MB
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-1.5">
          {(['all', 'image', 'document', 'video'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl capitalize transition-colors ${
                filterType === type
                  ? 'bg-[#08183A] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Showing {filteredMedia.length} files
        </span>
      </div>

      {/* Media Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm group"
          >
            {/* Preview Box */}
            <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center overflow-hidden">
              {item.category === 'image' || item.fileType?.includes('image') ? (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <FileText className="w-10 h-10 text-[#0B5ED7]" />
                  <span className="text-[10px] font-mono font-bold uppercase">{item.fileType || 'Doc'}</span>
                </div>
              )}

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Content Details */}
            <div className="p-3.5 flex flex-col justify-between flex-1">
              <div>
                <p className="font-extrabold text-slate-800 text-xs truncate" title={item.name}>
                  {item.name}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-mono">
                  {item.size && <span>{(item.size / 1024).toFixed(1)} KB</span>}
                  <span>•</span>
                  <span>{new Date(item.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                <button
                  onClick={() => handleCopyUrl(item.id, item.url)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    copiedId === item.id
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0B5ED7]'
                  }`}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Link
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1 rounded-lg hover:bg-rose-50 text-rose-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
