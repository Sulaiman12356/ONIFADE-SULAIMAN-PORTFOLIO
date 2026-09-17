import React from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CvCustomContent } from '../types';

interface CvDocumentViewProps {
  id?: string;
  className?: string;
  customContent?: CvCustomContent;
}

export const CvDocumentView: React.FC<CvDocumentViewProps> = ({
  id = 'cv-document-render',
  className = '',
  customContent,
}) => {
  const { profile, experience, education, certifications, skills } = usePortfolio();

  // Merge customContent (from active CV record) with live portfolio defaults
  const fullName = customContent?.fullName || profile.name;
  const brandName = customContent?.brandName || profile.brandName;
  const professionalTitle = customContent?.professionalTitle || profile.title;
  const email = customContent?.email || profile.email;
  const phone = customContent?.phone || profile.phone;
  const location = customContent?.location || profile.location;
  const availability = customContent?.availability || profile.availability;
  const summary = customContent?.summary || profile.bio;
  const philosophy = customContent?.philosophy || 'Clarity in the message. Clarity in the design. Clarity in the strategy. Clarity in the customer journey.';

  // Metrics
  const metrics = customContent?.verifiedMetrics && customContent.verifiedMetrics.length > 0
    ? customContent.verifiedMetrics
    : [
        { label: 'Meta Ads Spend Managed', value: '₦500K+' },
        { label: 'Verified Projects Completed', value: '30+' },
        { label: 'Clients & Collaborations', value: '20+' },
        { label: 'Experience Benchmark', value: '3+ Years' },
      ];

  // Skills
  const displaySkills: string[] = customContent?.skills && customContent.skills.length > 0
    ? customContent.skills
    : skills.map((s) => s.skill).concat([
        'Meta Ads',
        'Facebook Ads',
        'Instagram Ads',
        'TikTok Ads',
        'Canva',
        'CapCut Video Editing',
        'Landing Page Design',
        'AI Automation',
        'Lead Generation Funnels',
        'Marketing Strategy',
      ]);

  // Unique skills
  const uniqueSkills = Array.from(new Set(displaySkills));

  // Experience
  const displayExperience = customContent?.experience && customContent.experience.length > 0
    ? customContent.experience
    : experience.map((exp) => ({
        id: exp.id,
        role: exp.role,
        organization: exp.organization,
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description,
        achievements: exp.achievements || [],
        skills: exp.skills || [],
      }));

  // Education
  const displayEducation = customContent?.education && customContent.education.length > 0
    ? customContent.education
    : education.map((edu) => ({
        id: edu.id,
        degree: edu.degree,
        institution: edu.institution,
        period: edu.period,
        details: edu.details,
      }));

  // Certifications
  const displayCertifications = customContent?.certifications && customContent.certifications.length > 0
    ? customContent.certifications
    : certifications.map((c) => ({
        id: c.id,
        title: c.title,
        issuer: c.issuer,
        date: c.date,
        credentialUrl: c.credentialUrl,
      }));

  return (
    <div
      id={id}
      className={`bg-white text-[#0B1F3A] font-sans antialiased p-8 sm:p-12 space-y-8 max-w-4xl mx-auto ${className}`}
      style={{ minHeight: '1050px', boxSizing: 'border-box' }}
    >
      {/* Document Header */}
      <div className="border-b-2 border-[#062B63]/20 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight uppercase">
              {fullName}
            </h1>
            <p className="text-sm sm:text-base font-extrabold text-[#0B5ED7]">
              Professional Brand: {brandName}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
              {professionalTitle}
            </p>
          </div>

          <div className="text-xs text-[#64748B] space-y-1.5 sm:text-right">
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
              <span className="font-semibold text-[#0B1F3A]">{email}</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
              <span className="font-semibold text-[#0B1F3A]">{phone}</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
              <span>{location}</span>
            </div>
            {availability && (
              <div className="text-[11px] text-[#0B5ED7] font-bold">
                Availability: {availability}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verified Milestones & Metric Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-center"
          >
            <span className="text-lg sm:text-xl font-black text-[#0B5ED7] tracking-tight">
              {m.value}
            </span>
            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Executive Summary */}
      <div className="space-y-2">
        <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
          <span>Professional Executive Profile</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
          {summary}
        </p>
      </div>

      {/* Core Technical & Functional Competencies */}
      <div className="space-y-3">
        <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63]">
          Core Strategic Skills &amp; Technical Tools
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {uniqueSkills.map((skillName, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EFF6FF] border border-[#0B5ED7]/20 text-xs font-semibold text-[#062B63]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]" />
              <span>{skillName}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="space-y-4">
        <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-[#0B5ED7]" />
          <span>Professional Experience &amp; Track Record</span>
        </h2>

        <div className="space-y-5">
          {displayExperience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-[#0B5ED7] pl-4 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-extrabold text-[#0B1F3A]">
                  {exp.role}
                </h3>
                <span className="text-xs font-bold text-[#0B5ED7]">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <div className="text-xs font-bold text-[#64748B]">
                {exp.organization}
              </div>
              {exp.description && (
                <p className="text-xs text-[#334155] leading-relaxed">
                  {exp.description}
                </p>
              )}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-1 text-xs text-[#0B1F3A] pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-[#0B5ED7] font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education & Academics */}
      {displayEducation && displayEducation.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0B5ED7]" />
            <span>Education &amp; Academic Background</span>
          </h2>

          <div className="space-y-2.5">
            {displayEducation.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <div className="flex justify-between items-baseline font-bold text-sm text-[#0B1F3A]">
                  <span>{edu.degree}</span>
                  <span className="text-xs text-[#0B5ED7]">{edu.period}</span>
                </div>
                <div className="text-xs font-semibold text-[#64748B]">
                  {edu.institution}
                </div>
                {edu.details && (
                  <div className="text-xs text-[#334155] mt-1">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {displayCertifications && displayCertifications.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#062B63] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#0B5ED7]" />
            <span>Certifications &amp; Professional Qualifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {displayCertifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E2E8F0] bg-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-[#0B1F3A]">{cert.title}</div>
                  <div className="text-[11px] text-[#64748B]">{cert.issuer} • {cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Core Philosophy */}
      {philosophy && (
        <div className="pt-4 border-t border-[#E2E8F0] text-center space-y-1">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#0B5ED7]">
            Work Ethic &amp; Guiding Approach
          </div>
          <p className="text-xs font-bold text-[#062B63] italic max-w-xl mx-auto">
            "{philosophy}"
          </p>
        </div>
      )}

      {/* Document Footer Note */}
      <div className="pt-2 text-center text-[10px] text-slate-400">
        Onifade Sulaiman (Mr. Clarity) • Verified Professional Portfolio Document • Generated in High Definition
      </div>
    </div>
  );
};
