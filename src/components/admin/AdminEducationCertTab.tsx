import React, { useState } from 'react';
import { Plus, Trash2, Edit2, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { EducationItem, CertificationItem } from '../../types';

export const AdminEducationCertTab: React.FC = () => {
  const { education, setEducation, certifications, setCertifications } = usePortfolio();

  // Education state
  const [isAddingEdu, setIsAddingEdu] = useState(false);
  const [eduDegree, setEduDegree] = useState('');
  const [eduInstitution, setEduInstitution] = useState('');
  const [eduPeriod, setEduPeriod] = useState('');
  const [eduDetails, setEduDetails] = useState('');

  // Certification state
  const [isAddingCert, setIsAddingCert] = useState(false);
  const [certTitle, setCertTitle] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certDate, setCertDate] = useState('');
  const [certUrl, setCertUrl] = useState('');

  const handleAddEdu = (e: React.FormEvent) => {
    e.preventDefault();
    const newEdu: EducationItem = {
      id: 'edu_' + Date.now(),
      degree: eduDegree,
      institution: eduInstitution,
      period: eduPeriod,
      details: eduDetails,
    };
    setEducation((prev) => [...prev, newEdu]);
    setIsAddingEdu(false);
    setEduDegree('');
    setEduInstitution('');
    setEduPeriod('');
    setEduDetails('');
  };

  const handleAddCert = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert: CertificationItem = {
      id: 'cert_' + Date.now(),
      title: certTitle,
      issuer: certIssuer,
      date: certDate,
      credentialUrl: certUrl || undefined,
    };
    setCertifications((prev) => [...prev, newCert]);
    setIsAddingCert(false);
    setCertTitle('');
    setCertIssuer('');
    setCertDate('');
    setCertUrl('');
  };

  return (
    <div className="space-y-8">
      
      {/* Education Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
          <div>
            <h3 className="text-base font-black text-[#0B1F3A] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0B5ED7]" />
              <span>Education Records ({education.length})</span>
            </h3>
            <p className="text-xs text-slate-500">Degree programs, universities, and academic coursework</p>
          </div>
          <button
            onClick={() => setIsAddingEdu(!isAddingEdu)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#062B63] text-white text-xs font-bold hover:bg-[#0B5ED7]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Degree</span>
          </button>
        </div>

        {isAddingEdu && (
          <form onSubmit={handleAddEdu} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Degree Title *</label>
                <input
                  type="text"
                  required
                  value={eduDegree}
                  onChange={(e) => setEduDegree(e.target.value)}
                  placeholder="e.g. B.Sc. Computer Science (300 Level)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Institution *</label>
                <input
                  type="text"
                  required
                  value={eduInstitution}
                  onChange={(e) => setEduInstitution(e.target.value)}
                  placeholder="e.g. Olabisi Onabanjo University"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Period</label>
                <input
                  type="text"
                  value={eduPeriod}
                  onChange={(e) => setEduPeriod(e.target.value)}
                  placeholder="e.g. 2022 - Present"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Coursework Details / Focus</label>
              <textarea
                rows={2}
                value={eduDetails}
                onChange={(e) => setEduDetails(e.target.value)}
                placeholder="Coursework, concentrations, and key academic milestones..."
                className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingEdu(false)}
                className="px-3 py-1.5 rounded-xl border border-slate-300 text-slate-600 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-[#0B5ED7] text-white font-bold"
              >
                Save Degree
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-[#0B1F3A]">{edu.degree}</div>
                <div className="text-xs text-[#0B5ED7] font-semibold">{edu.institution} ({edu.period})</div>
                <div className="text-xs text-slate-500 mt-1">{edu.details}</div>
              </div>
              <button
                onClick={() => setEducation((prev) => prev.filter((e) => e.id !== edu.id))}
                className="text-rose-600 hover:text-rose-800 p-2"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
          <div>
            <h3 className="text-base font-black text-[#0B1F3A] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0B5ED7]" />
              <span>Certifications &amp; Credentials ({certifications.length})</span>
            </h3>
            <p className="text-xs text-slate-500">Verified credentials, professional badges, and certifications</p>
          </div>
          <button
            onClick={() => setIsAddingCert(!isAddingCert)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#062B63] text-white text-xs font-bold hover:bg-[#0B5ED7]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Certification</span>
          </button>
        </div>

        {isAddingCert && (
          <form onSubmit={handleAddCert} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Certification Title *</label>
                <input
                  type="text"
                  required
                  value={certTitle}
                  onChange={(e) => setCertTitle(e.target.value)}
                  placeholder="e.g. Meta Certified Digital Marketing Associate"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Issuing Authority / Organization *</label>
                <input
                  type="text"
                  required
                  value={certIssuer}
                  onChange={(e) => setCertIssuer(e.target.value)}
                  placeholder="e.g. Meta Blueprint / Microsoft"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Date / Year</label>
                <input
                  type="text"
                  value={certDate}
                  onChange={(e) => setCertDate(e.target.value)}
                  placeholder="e.g. 2024"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Credential URL (Optional)</label>
                <input
                  type="url"
                  value={certUrl}
                  onChange={(e) => setCertUrl(e.target.value)}
                  placeholder="https://credly.com/badges/..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingCert(false)}
                className="px-3 py-1.5 rounded-xl border border-slate-300 text-slate-600 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-[#0B5ED7] text-white font-bold"
              >
                Save Credential
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-[#0B1F3A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cert.title}</span>
                </div>
                <div className="text-[11px] text-slate-500">{cert.issuer} • {cert.date}</div>
              </div>
              <button
                onClick={() => setCertifications((prev) => prev.filter((c) => c.id !== cert.id))}
                className="text-rose-600 hover:text-rose-800 p-1.5"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
