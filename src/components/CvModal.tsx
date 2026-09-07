import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, GraduationCap, Briefcase, Award, Sparkles, Tag, Clock } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { profile, activeCv, experience, education, certifications, skills, downloadActiveCv } = usePortfolio();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="cv-modal-dialog"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#E5EAF1] flex flex-col relative"
      >
        {/* Sticky modal top actions bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5EAF1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B5ED7] animate-pulse"></span>
            <div>
              <span className="font-extrabold text-sm text-[#0B1F3A] block">
                {profile.name} • Curriculum Vitae
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-2">
                <span>Version: <strong className="text-[#0B5ED7]">{activeCv?.version || 'v2.5'}</strong></span>
                <span>•</span>
                <span>Updated: {activeCv?.date || 'September 2026'}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#E5EAF1] text-xs font-bold text-[#0B1F3A] hover:bg-slate-50 transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={downloadActiveCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#1D4ED8] transition-colors shadow-xs"
              title="Download Latest CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Latest CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 print:m-0 text-left">
          
          {/* Header */}
          <div className="border-b border-[#062B63]/20 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
                  {profile.name.toUpperCase()}
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#0B5ED7] mt-1">
                  Professional Brand: {profile.brandName}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
                  {profile.title}
                </p>
              </div>

              <div className="text-xs text-[#64748B] space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-2 flex items-center gap-1.5">
              <span>Executive Profile</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#0B1F3A] leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-3">
              Technical &amp; Functional Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {skills.map((skill) => (
                <div key={skill.id} className="p-3 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#062B63]">{skill.skill}</span>
                    <span className="text-[10px] text-[#0B5ED7] font-bold">{skill.level}%</span>
                  </div>
                  <div className="text-[11px] text-slate-500">{skill.tools}</div>
                  <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#0B5ED7] h-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-4 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0B5ED7]" />
              <span>Professional Experience ({experience.length} Positions)</span>
            </h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#0B5ED7] pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-extrabold text-[#0B1F3A]">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-[#0B5ED7]">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#64748B]">
                    {exp.organization}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{exp.description}</p>
                  <ul className="space-y-1 text-xs text-[#0B1F3A] pt-1">
                    {exp.achievements?.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#0B5ED7] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {exp.skills.map((s, si) => (
                        <span key={si} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#0B5ED7]" />
              <span>Education</span>
            </h2>

            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl border border-[#E5EAF1] bg-[#F5F9FF]">
                  <div className="flex justify-between font-bold text-sm text-[#0B1F3A]">
                    <span>{edu.degree}</span>
                    <span className="text-xs text-[#0B5ED7]">{edu.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#64748B] mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-[#0B1F3A]">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Recognition */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0B5ED7]" />
              <span>Certifications &amp; Credentials</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between p-3 rounded-lg border border-[#E5EAF1] bg-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1F3A]">{cert.title}</div>
                      <div className="text-[11px] text-slate-500">{cert.issuer} • {cert.date}</div>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-bold text-[#0B5ED7] hover:underline"
                    >
                      Verify
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
