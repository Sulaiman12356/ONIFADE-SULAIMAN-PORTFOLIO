import React, { useState, useEffect } from 'react';
import {
  Download,
  Upload,
  CheckCircle2,
  Trash2,
  Eye,
  Plus,
  Sparkles,
  AlertCircle,
  FileText,
  Clock,
  Tag,
  Edit3,
  Save,
  RotateCcw,
  Image as ImageIcon,
  Loader2,
  User,
  Award,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  CVRecord,
  CvCustomContent,
  CvMetricItem,
  CvExperienceEntry,
  CvEducationEntry,
  CvCertificationEntry,
} from '../../types';
import { CvDocumentView } from '../CvDocumentView';

export const AdminCvManagerTab: React.FC = () => {
  const {
    profile,
    cvList,
    activeCv,
    addCvVersion,
    updateCv,
    setActiveCv,
    deleteCv,
    downloadActiveCv,
    experience: defaultExperience,
    education: defaultEducation,
    certifications: defaultCertifications,
    skills: defaultSkills,
  } = usePortfolio();

  // Tab mode: 'editor' | 'versions' | 'upload'
  const [activeSubTab, setActiveSubTab] = useState<'editor' | 'versions' | 'upload'>('editor');
  const [showPreview, setShowPreview] = useState(false);
  const [savingStatus, setSavingStatus] = useState<string | null>(null);
  const [downloadingFormat, setDownloadingFormat] = useState<'pdf' | 'image' | 'txt' | null>(null);

  // New Version State
  const [newTitle, setNewTitle] = useState('');
  const [newVersion, setNewVersion] = useState('v3.0');
  const [newDate, setNewDate] = useState('October 2026');
  const [newSummary, setNewSummary] = useState('');
  const [newFileType, setNewFileType] = useState<'pdf' | 'docx' | 'txt'>('pdf');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [setAsActiveImmediately, setSetAsActiveImmediately] = useState(true);

  // Editable CV content state for Active CV
  const [content, setContent] = useState<CvCustomContent>({});
  const [newSkillInput, setNewSkillInput] = useState('');

  // Synchronize content with activeCv or portfolio defaults
  useEffect(() => {
    if (activeCv?.customContent) {
      setContent(activeCv.customContent);
    } else {
      // Initialize with portfolio defaults
      setContent({
        fullName: profile.name,
        brandName: profile.brandName,
        professionalTitle: profile.title,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        availability: profile.availability,
        summary: profile.bio,
        philosophy:
          'Clarity in the message. Clarity in the design. Clarity in the strategy. Clarity in the customer journey.',
        verifiedMetrics: [
          { label: 'Meta Ads Spend Managed', value: '₦500K+' },
          { label: 'Verified Projects Completed', value: '30+' },
          { label: 'Clients & Collaborations', value: '20+' },
          { label: 'Experience Benchmark', value: '3+ Years' },
        ],
        skills: defaultSkills.map((s) => s.skill).concat([
          'Meta Ads',
          'Facebook Ads',
          'Instagram Ads',
          'TikTok Ads',
          'Canva',
          'CapCut Video Editing',
          'Landing Page Design',
          'AI Automation',
          'Lead Generation Funnels',
        ]),
        experience: defaultExperience.map((exp) => ({
          id: exp.id,
          role: exp.role,
          organization: exp.organization,
          startDate: exp.startDate,
          endDate: exp.endDate,
          description: exp.description,
          achievements: exp.achievements || [],
          skills: exp.skills || [],
        })),
        education: defaultEducation.map((edu) => ({
          id: edu.id,
          degree: edu.degree,
          institution: edu.institution,
          period: edu.period,
          details: edu.details,
        })),
        certifications: defaultCertifications.map((c) => ({
          id: c.id,
          title: c.title,
          issuer: c.issuer,
          date: c.date,
          credentialUrl: c.credentialUrl,
        })),
      });
    }
  }, [activeCv, profile, defaultExperience, defaultEducation, defaultCertifications, defaultSkills]);

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

  const handleCreateCv = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCvVersion({
      title: newTitle || `Onifade Sulaiman (Mr. Clarity) - CV ${newVersion}`,
      version: newVersion || 'v3.0',
      date: newDate || 'October 2026',
      fileName: uploadedFileName || `Onifade_Sulaiman_CV_${newVersion}.pdf`,
      fileUrl: uploadedFileUrl || undefined,
      summary: newSummary || 'Curriculum Vitae for Onifade Sulaiman (Mr. Clarity)',
      isActive: setAsActiveImmediately,
      isPublished: true,
      fileType: newFileType,
      customContent: content,
    });

    setSavingStatus('New CV version published successfully!');
    setTimeout(() => setSavingStatus(null), 3500);
    setActiveSubTab('editor');
    setNewTitle('');
    setUploadedFileName('');
    setUploadedFileUrl('');
  };

  const handleSaveContent = async () => {
    if (!activeCv) return;
    try {
      setSavingStatus('Saving changes to Firestore...');
      await updateCv(activeCv.id, {
        customContent: content,
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      });
      setSavingStatus('CV content updated and synchronized live!');
      setTimeout(() => setSavingStatus(null), 3000);
    } catch (err) {
      console.error('Error saving CV content:', err);
      setSavingStatus('Failed to save CV changes.');
    }
  };

  const handleResetToDefaults = () => {
    if (confirm('Reset all CV fields to current website profile & experience defaults?')) {
      setContent({
        fullName: profile.name,
        brandName: profile.brandName,
        professionalTitle: profile.title,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        availability: profile.availability,
        summary: profile.bio,
        philosophy:
          'Clarity in the message. Clarity in the design. Clarity in the strategy. Clarity in the customer journey.',
        verifiedMetrics: [
          { label: 'Meta Ads Spend Managed', value: '₦500K+' },
          { label: 'Verified Projects Completed', value: '30+' },
          { label: 'Clients & Collaborations', value: '20+' },
          { label: 'Experience Benchmark', value: '3+ Years' },
        ],
        skills: defaultSkills.map((s) => s.skill),
        experience: defaultExperience.map((exp) => ({
          id: exp.id,
          role: exp.role,
          organization: exp.organization,
          startDate: exp.startDate,
          endDate: exp.endDate,
          description: exp.description,
          achievements: exp.achievements || [],
          skills: exp.skills || [],
        })),
        education: defaultEducation.map((edu) => ({
          id: edu.id,
          degree: edu.degree,
          institution: edu.institution,
          period: edu.period,
          details: edu.details,
        })),
        certifications: defaultCertifications.map((c) => ({
          id: c.id,
          title: c.title,
          issuer: c.issuer,
          date: c.date,
          credentialUrl: c.credentialUrl,
        })),
      });
    }
  };

  const handleAddSkill = () => {
    if (!newSkillInput.trim()) return;
    const current = content.skills || [];
    if (!current.includes(newSkillInput.trim())) {
      setContent({ ...content, skills: [...current, newSkillInput.trim()] });
    }
    setNewSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const current = content.skills || [];
    setContent({ ...content, skills: current.filter((s) => s !== skillToRemove) });
  };

  // Metric updates
  const handleMetricChange = (index: number, field: 'label' | 'value', val: string) => {
    const current = content.verifiedMetrics ? [...content.verifiedMetrics] : [];
    if (current[index]) {
      current[index] = { ...current[index], [field]: val };
      setContent({ ...content, verifiedMetrics: current });
    }
  };

  // Experience handlers
  const handleAddExperience = () => {
    const newExp: CvExperienceEntry = {
      id: 'exp_' + Date.now(),
      role: 'Meta Ads & Growth Marketer',
      organization: 'Growth Client Co.',
      startDate: '2024',
      endDate: 'Present',
      description: 'Scaled high-ROI advertising funnels and increased lead acquisition.',
      achievements: ['Generated 150+ qualified inbound leads', 'Reduced cost per acquisition by 28%'],
      skills: ['Meta Ads', 'Landing Pages', 'Canva'],
    };
    setContent({ ...content, experience: [newExp, ...(content.experience || [])] });
  };

  const handleRemoveExperience = (index: number) => {
    const list = [...(content.experience || [])];
    list.splice(index, 1);
    setContent({ ...content, experience: list });
  };

  const handleUpdateExperience = (index: number, field: keyof CvExperienceEntry, val: any) => {
    const list = [...(content.experience || [])];
    list[index] = { ...list[index], [field]: val };
    setContent({ ...content, experience: list });
  };

  // Education handlers
  const handleAddEducation = () => {
    const newEdu: CvEducationEntry = {
      id: 'edu_' + Date.now(),
      degree: 'B.Sc. Computer Science',
      institution: 'Olabisi Onabanjo University',
      period: '2020 – 2024',
      details: 'Specialized in Software Systems, Web Technologies, and Data Communications.',
    };
    setContent({ ...content, education: [...(content.education || []), newEdu] });
  };

  const handleRemoveEducation = (index: number) => {
    const list = [...(content.education || [])];
    list.splice(index, 1);
    setContent({ ...content, education: list });
  };

  // Certification handlers
  const handleAddCertification = () => {
    const newCert: CvCertificationEntry = {
      id: 'cert_' + Date.now(),
      title: 'Meta Certified Digital Marketing Associate',
      issuer: 'Meta Blueprint',
      date: '2024',
    };
    setContent({ ...content, certifications: [...(content.certifications || []), newCert] });
  };

  const handleRemoveCertification = (index: number) => {
    const list = [...(content.certifications || [])];
    list.splice(index, 1);
    setContent({ ...content, certifications: list });
  };

  // Test Download handler
  const handleTestDownload = async (format: 'pdf' | 'image' | 'txt') => {
    try {
      setDownloadingFormat(format);
      await downloadActiveCv(format);
    } catch (err) {
      console.error('Test download error:', err);
    } finally {
      setDownloadingFormat(null);
    }
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
          <h2 className="text-xl sm:text-2xl font-black">CV Editor &amp; Downloads</h2>
          <p className="text-xs text-slate-200 mt-1 max-w-xl">
            Edit full CV contents in real-time, preview changes instantly, and manage downloadable PDF and Image formats for clients.
          </p>
        </div>

        {/* Subtab switches */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveSubTab('editor')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'editor'
                ? 'bg-white text-[#0B5ED7] shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 inline mr-1" />
            <span>Edit CV Content</span>
          </button>

          <button
            onClick={() => setActiveSubTab('versions')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'versions'
                ? 'bg-white text-[#0B5ED7] shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <Tag className="w-3.5 h-3.5 inline mr-1" />
            <span>CV Versions ({cvList.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('upload')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'upload'
                ? 'bg-[#00D2FF] text-[#08183A] shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <Upload className="w-3.5 h-3.5 inline mr-1" />
            <span>Upload New File</span>
          </button>
        </div>
      </div>

      {/* Active CV Quick Summary & Action Bar */}
      {activeCv && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#0B5ED7]/25 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-black flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 uppercase tracking-wider">
                  Active On Public Site
                </span>
                <span className="text-xs font-black text-[#0B5ED7]">
                  {activeCv.version}
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0B1F3A] mt-0.5">
                {activeCv.title}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                <span>Updated: <strong>{activeCv.date}</strong></span>
                <span>•</span>
                <span>Downloads: <strong>{activeCv.downloadCount || 0}</strong></span>
              </p>
            </div>
          </div>

          {/* Test Download Options */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleTestDownload('pdf')}
              disabled={downloadingFormat !== null}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs disabled:opacity-50"
              title="Test PDF Download"
            >
              {downloadingFormat === 'pdf' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <FileText className="w-3.5 h-3.5" />
              )}
              <span>Test PDF</span>
            </button>

            <button
              onClick={() => handleTestDownload('image')}
              disabled={downloadingFormat !== null}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs disabled:opacity-50"
              title="Test Image Download"
            >
              {downloadingFormat === 'image' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ImageIcon className="w-3.5 h-3.5 text-blue-300" />
              )}
              <span>Test Image (PNG)</span>
            </button>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>{showPreview ? 'Hide Preview' : 'Live Preview'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Save Notification */}
      {savingStatus && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{savingStatus}</span>
          </div>
          <button onClick={() => setSavingStatus(null)} className="text-emerald-700 hover:underline">
            Dismiss
          </button>
        </div>
      )}

      {/* Real-time Preview Drawer */}
      {showPreview && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-100 border border-slate-300 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-[#0B1F3A] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0B5ED7]" />
              <span>Interactive Live Preview of CV (High Resolution Canvas)</span>
            </h3>
            <button
              onClick={() => setShowPreview(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Close Preview ✕
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden max-h-[600px] overflow-y-auto">
            <CvDocumentView customContent={content} />
          </div>
        </div>
      )}

      {/* SUBTAB 1: CV CONTENT EDITOR */}
      {activeSubTab === 'editor' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-[#0B1F3A]">
                Customize Active CV Document
              </h3>
              <p className="text-xs text-slate-500">
                Any edits made here are immediately reflected in the generated PDF, downloadable Image, and public website view.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetToDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                title="Reset to website defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                onClick={handleSaveContent}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-xs font-black shadow-md shadow-[#0B5ED7]/25 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save All Changes</span>
              </button>
            </div>
          </div>

          {/* 1. Identity & Personal Details */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-2">
              <User className="w-4 h-4 text-[#0B5ED7]" />
              <span>Identity, Brand &amp; Contact Header</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Candidate Name</label>
                <input
                  type="text"
                  value={content.fullName || ''}
                  onChange={(e) => setContent({ ...content, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Brand Name</label>
                <input
                  type="text"
                  value={content.brandName || ''}
                  onChange={(e) => setContent({ ...content, brandName: e.target.value })}
                  placeholder="e.g. Mr. Clarity"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={content.professionalTitle || ''}
                  onChange={(e) => setContent({ ...content, professionalTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={content.email || ''}
                  onChange={(e) => setContent({ ...content, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone</label>
                <input
                  type="text"
                  value={content.phone || ''}
                  onChange={(e) => setContent({ ...content, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Location</label>
                <input
                  type="text"
                  value={content.location || ''}
                  onChange={(e) => setContent({ ...content, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Availability</label>
                <input
                  type="text"
                  value={content.availability || ''}
                  onChange={(e) => setContent({ ...content, availability: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>
            </div>
          </div>

          {/* 2. Executive Profile / Summary */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B5ED7]" />
              <span>Professional Executive Profile</span>
            </h4>
            <textarea
              rows={4}
              value={content.summary || ''}
              onChange={(e) => setContent({ ...content, summary: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 leading-relaxed"
              placeholder="Write a concise executive summary highlighting experience and key competencies..."
            />
          </div>

          {/* 3. Verified Metrics Strip (e.g. ₦500K+, 30+, 20+, 3+ Years) */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63]">
              Verified Milestones Strip (4 Highlights)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {(content.verifiedMetrics || []).map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase">
                      Metric {idx + 1} Value
                    </label>
                    <input
                      type="text"
                      value={m.value}
                      onChange={(e) => handleMetricChange(idx, 'value', e.target.value)}
                      placeholder="e.g. ₦500K+ or 3+ Years"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-bold text-[#0B5ED7]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase">
                      Metric {idx + 1} Label
                    </label>
                    <input
                      type="text"
                      value={m.label}
                      onChange={(e) => handleMetricChange(idx, 'label', e.target.value)}
                      placeholder="e.g. Experience Benchmark"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Strategic Skills & Tools */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63]">
              Core Strategic Skills &amp; Technical Tools
            </h4>
            <div className="flex flex-wrap gap-1.5 items-center">
              {(content.skills || []).map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-bold text-[#062B63]"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-slate-400 hover:text-rose-600 font-bold ml-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="text"
                value={newSkillInput}
                onChange={(e) => setNewSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                placeholder="Type new skill and press Enter (e.g. Meta Ads, Canva, TikTok Ads)..."
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#1D4ED8] cursor-pointer"
              >
                Add Skill
              </button>
            </div>
          </div>

          {/* 5. Experience Positions */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#0B5ED7]" />
                <span>Professional Experience Positions ({(content.experience || []).length})</span>
              </h4>
              <button
                type="button"
                onClick={handleAddExperience}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0B5ED7] hover:bg-blue-100 text-xs font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Position</span>
              </button>
            </div>

            <div className="space-y-4">
              {(content.experience || []).map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#0B5ED7]">Position #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(idx)}
                      className="text-xs text-rose-600 hover:text-rose-800 font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Job Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleUpdateExperience(idx, 'role', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Organization</label>
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) => handleUpdateExperience(idx, 'organization', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => handleUpdateExperience(idx, 'startDate', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => handleUpdateExperience(idx, 'endDate', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-600 mb-1 text-xs">Description</label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(idx, 'description', e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Education */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0B5ED7]" />
                <span>Academic Education</span>
              </h4>
              <button
                type="button"
                onClick={handleAddEducation}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0B5ED7] hover:bg-blue-100 text-xs font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Education</span>
              </button>
            </div>

            <div className="space-y-3">
              {(content.education || []).map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 text-xs">
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const list = [...(content.education || [])];
                          list[idx].degree = e.target.value;
                          setContent({ ...content, education: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const list = [...(content.education || [])];
                          list[idx].institution = e.target.value;
                          setContent({ ...content, education: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Period</label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) => {
                          const list = [...(content.education || [])];
                          list[idx].period = e.target.value;
                          setContent({ ...content, education: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(idx)}
                    className="text-xs text-rose-600 hover:text-rose-800 font-bold mt-5 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Certifications */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0B5ED7]" />
                <span>Certifications &amp; Credentials</span>
              </h4>
              <button
                type="button"
                onClick={handleAddCertification}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0B5ED7] hover:bg-blue-100 text-xs font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Certification</span>
              </button>
            </div>

            <div className="space-y-3">
              {(content.certifications || []).map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 text-xs">
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Title</label>
                      <input
                        type="text"
                        value={cert.title}
                        onChange={(e) => {
                          const list = [...(content.certifications || [])];
                          list[idx].title = e.target.value;
                          setContent({ ...content, certifications: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Issuer</label>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => {
                          const list = [...(content.certifications || [])];
                          list[idx].issuer = e.target.value;
                          setContent({ ...content, certifications: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">Date</label>
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => {
                          const list = [...(content.certifications || [])];
                          list[idx].date = e.target.value;
                          setContent({ ...content, certifications: list });
                        }}
                        className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveCertification(idx)}
                    className="text-xs text-rose-600 hover:text-rose-800 font-bold mt-5 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Philosophy & Work Ethic */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#062B63]">
              Work Ethic &amp; Guiding Approach (Philosophy)
            </h4>
            <input
              type="text"
              value={content.philosophy || ''}
              onChange={(e) => setContent({ ...content, philosophy: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium"
              placeholder="e.g. Clarity in the message. Clarity in the design. Clarity in the strategy..."
            />
          </div>

          {/* Bottom Save Bar */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handleSaveContent}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white text-sm font-black shadow-lg shadow-[#0B5ED7]/25 transition-all cursor-pointer active:scale-[0.99]"
            >
              <Save className="w-4 h-4" />
              <span>Save &amp; Publish Active CV</span>
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 2: CV VERSIONS LIST */}
      {activeSubTab === 'versions' && (
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
                          className="text-[11px] font-bold text-[#0B5ED7] hover:underline cursor-pointer"
                        >
                          Set Active
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => updateCv(cv.id, { isPublished: !cv.isPublished })}
                        className="text-[11px] text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                      >
                        {cv.isPublished ? 'Unpublish' : 'Publish'}
                      </button>

                      {cvList.length > 1 && (
                        <button
                          onClick={() => deleteCv(cv.id)}
                          className="text-[11px] text-rose-600 hover:text-rose-800 font-medium cursor-pointer"
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
      )}

      {/* SUBTAB 3: UPLOAD / CREATE NEW VERSION */}
      {activeSubTab === 'upload' && (
        <form onSubmit={handleCreateCv} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-black text-[#0B1F3A] flex items-center gap-2">
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
                placeholder="e.g. Master Executive CV 2026"
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
                placeholder="e.g. v3.0 or 2026-Q4"
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
              <label className="block font-bold text-slate-700 mb-1">
                Attach Custom Standalone PDF File (Optional)
              </label>
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
              <label className="block font-bold text-slate-700 mb-1">Primary Format</label>
              <select
                value={newFileType}
                onChange={(e) => setNewFileType(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="pdf">PDF Document (Recommended)</option>
                <option value="docx">Microsoft Word (DOCX)</option>
                <option value="txt">Formatted Text (TXT)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1 text-xs">Version Summary Note</label>
            <input
              type="text"
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}
              placeholder="e.g. Updated with Q4 2026 Meta Ads metrics and 3+ Years Experience"
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
              Set as active CV immediately (will display and be downloadable on public website)
            </label>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveSubTab('editor')}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-blue-700 shadow-sm"
            >
              Create &amp; Publish Version
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
