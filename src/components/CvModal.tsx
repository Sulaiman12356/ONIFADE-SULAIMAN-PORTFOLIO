import React, { useState } from 'react';
import { X, Printer, FileText, CheckCircle2, Loader2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CvDocumentView } from './CvDocumentView';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadCv?: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { profile, activeCv, downloadActiveCv } = usePortfolio();
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsDownloadingPdf(true);
      await downloadActiveCv('pdf');
      setDownloadSuccess('PDF document downloaded successfully!');
      setTimeout(() => setDownloadSuccess(null), 3500);
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="cv-modal-dialog"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-[#E5EAF1] flex flex-col relative"
      >
        {/* Sticky modal top actions bar */}
        <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-[#E5EAF1] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B5ED7] animate-pulse"></span>
            <div>
              <span className="font-extrabold text-sm text-[#0B1F3A] block leading-tight">
                {profile.name} • Curriculum Vitae
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-2">
                <span>Version: <strong className="text-[#0B5ED7]">{activeCv?.version || 'v2.6'}</strong></span>
                <span>•</span>
                <span>Updated: {activeCv?.date || 'October 2026'}</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Download as PDF */}
            <button
              id="btn-modal-download-pdf"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#1D4ED8] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              title="Download CV in PDF format"
            >
              {isDownloadingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV (PDF)</span>
                </>
              )}
            </button>

            {/* Print / Native Save */}
            <button
              id="btn-modal-print-cv"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E5EAF1] text-xs font-bold text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer"
              title="Print document or save using browser dialog"
            >
              <Printer className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>Print</span>
            </button>

            {/* Close */}
            <button
              id="btn-modal-close-cv"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors ml-1 cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success alert notice */}
        {downloadSuccess && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2 flex items-center justify-between text-xs text-emerald-800 font-bold animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{downloadSuccess}</span>
            </div>
            <button
              onClick={() => setDownloadSuccess(null)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Scrollable CV Document view */}
        <div className="overflow-y-auto flex-1 p-2 sm:p-4 bg-slate-100/70">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
            <CvDocumentView
              id="cv-document-modal-render"
              customContent={activeCv?.customContent}
            />
          </div>
        </div>

        {/* Bottom Quick Bar */}
        <div className="bg-white px-6 py-3 border-t border-[#E5EAF1] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 flex-shrink-0">
          <span className="font-semibold text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Document Format: Verified PDF</span>
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="inline-flex items-center gap-1.5 text-[#0B5ED7] hover:underline font-bold cursor-pointer disabled:opacity-50"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
