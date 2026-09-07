import React, { useState } from 'react';
import { Download, Upload, CheckCircle2, Trash2, Eye, Plus, Sparkles, AlertCircle, FileText, Clock, Tag } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { CVRecord } from '../../types';

export const AdminCvManagerTab: React.FC = () => {
  const {
    cvList,
    activeCv,
    addCvVersion,
    updateCv,
    setActiveCv,
    deleteCv,
    downloadActiveCv,
  } = usePortfolio();

  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newVersion, setNewVersion] = useState('v2.6');
  const [newDate, setNewDate] = useState('October 2026');
  const [newSummary, setNewSummary] = useState('');
  const [newFileType, setNewFileType] = useState<'pdf' | 'docx' | 'txt'>('pdf');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [uploadedText, setUploadedText] = useState('');
  const [setAsActiveImmediately, setSetAsActiveImmediately] = useState(true);

  // File upload handler converting to DataURL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedFileUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCreateCv = (e: React.FormEvent) => {
    e.preventDefault();
    addCvVersion({
      title: newTitle || `Onifade Sulaiman (Mr. Clarity) - CV ${newVersion}`,
      version: newVersion || 'v2.6',
      date: newDate || 'September 2026',
      fileName: uploadedFileName || `Onifade_Sulaiman_CV_${newVersion}.txt`,
      fileUrl: uploadedFileUrl || undefined,
      textContent: uploadedText || undefined,
      summary: newSummary || 'Curriculum Vitae for Onifade Sulaiman (Mr. Clarity)',
      isActive: setAsActiveImmediately,
      isPublished: true,
      fileType: newFileType,
    });

    // Reset
    setIsAdding(false);
    setNewTitle('');
    setNewVersion('');
    setNewDate('');
    setNewSummary('');
    setUploadedFileName('');
    setUploadedFileUrl('');
    setUploadedText('');
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#00D2FF] text-[11px] font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Curriculum Vitae Management</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">CV Manager &amp; Versions</h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Upload, replace, set active CV, and update dynamic versions. The public website automatically syncs with the active version.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D2FF] text-[#08183A] font-bold text-xs hover:bg-[#38BDF8] transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add / Upload New CV</span>
          </button>
        </div>
      </div>

      {/* Active CV Highlight Banner */}
      {activeCv && (
        <div className="p-5 rounded-2xl bg-white border-2 border-[#0B5ED7]/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-black">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 uppercase">
                  Currently Live on Website
                </span>
                <span className="text-xs font-extrabold text-[#0B5ED7]">
                  {activeCv.version}
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0B1F3A] mt-0.5">
                {activeCv.title}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-3 mt-1">
                <span>Last Updated: <strong>{activeCv.date}</strong></span>
                <span>•</span>
                <span>Downloads: <strong>{activeCv.downloadCount || 0}</strong></span>
                <span>•</span>
                <span>File: {activeCv.fileName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadActiveCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Test Download</span>
            </button>
          </div>
        </div>
      )}

      {/* Upload / Add Form Drawer */}
      {isAdding && (
        <form onSubmit={handleCreateCv} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-[#0B1F3A] flex items-center gap-2">
            <Upload className="w-4 h-4 text-[#0B5ED7]" />
            <span>Upload or Add New CV Version</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">CV Title</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Master Executive CV"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Version String *</label>
              <input
                type="text"
                required
                value={newVersion}
                onChange={(e) => setNewVersion(e.target.value)}
                placeholder="e.g. v2.6 or 2026-Q4"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Display Date *</label>
              <input
                type="text"
                required
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                placeholder="e.g. October 2026"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Upload File (PDF, DOCX, TXT)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#0B5ED7] file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
              {uploadedFileName && (
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                  Selected: {uploadedFileName}
                </p>
              )}
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Format Type</label>
              <select
                value={newFileType}
                onChange={(e) => setNewFileType(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="pdf">PDF Document</option>
                <option value="docx">Microsoft Word (DOCX)</option>
                <option value="txt">Formatted Text (TXT)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Summary Note</label>
            <input
              type="text"
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}
              placeholder="e.g. Updated with Q3 2026 ad spend numbers and new certifications"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              id="setAsActive"
              checked={setAsActiveImmediately}
              onChange={(e) => setSetAsActiveImmediately(e.target.checked)}
              className="rounded text-[#0B5ED7]"
            />
            <label htmlFor="setAsActive" className="font-semibold text-slate-800">
              Set as active CV immediately (will display on public website)
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
              className="px-5 py-2 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-blue-700"
            >
              Save &amp; Publish CV
            </button>
          </div>
        </form>
      )}

      {/* CV Versions List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-black text-[#0B1F3A]">All CV Versions &amp; Records</h3>
          <span className="text-xs text-slate-500">{cvList.length} recorded</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider font-bold">
              <tr>
                <th className="py-3 px-4">Version &amp; Title</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">File</th>
                <th className="py-3 px-4">Downloads</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cvList.map((cv) => (
                <tr key={cv.id} className={cv.isActive ? 'bg-blue-50/40' : 'hover:bg-slate-50/60'}>
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#0B1F3A] flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-extrabold">
                        {cv.version}
                      </span>
                      <span>{cv.title}</span>
                    </div>
                    {cv.summary && <div className="text-[11px] text-slate-500 mt-0.5">{cv.summary}</div>}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-600">
                    {cv.date}
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {cv.fileName}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-700">
                    {cv.downloadCount || 0}
                  </td>
                  <td className="py-3 px-4">
                    {cv.isActive ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => setActiveCv(cv.id)}
                        className="text-[11px] font-bold text-[#0B5ED7] hover:underline"
                      >
                        Set Active
                      </button>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => updateCv(cv.id, { isPublished: !cv.isPublished })}
                      className="text-[11px] text-slate-600 hover:text-slate-900 font-medium"
                    >
                      {cv.isPublished ? 'Unpublish' : 'Publish'}
                    </button>

                    {cvList.length > 1 && (
                      <button
                        onClick={() => deleteCv(cv.id)}
                        className="text-[11px] text-rose-600 hover:text-rose-800 font-medium"
                        title="Delete CV record"
                      >
                        Delete
                      </button>
                    )}
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
