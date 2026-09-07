import React, { useState } from 'react';
import {
  Share2,
  Save,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  Twitter,
  Facebook,
  Globe,
  Mail,
  Phone,
  Video,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AdminSocialLinksTab: React.FC = () => {
  const { profile, updateSocialLinks, updateProfile } = usePortfolio();

  const [formData, setFormData] = useState({
    whatsapp: profile.socialLinks?.whatsapp || '',
    linkedin: profile.socialLinks?.linkedin || '',
    instagram: profile.socialLinks?.instagram || '',
    tiktok: profile.socialLinks?.tiktok || '',
    facebook: profile.socialLinks?.facebook || '',
    twitter: profile.socialLinks?.twitter || '',
    github: profile.socialLinks?.github || '',
    portfolio: profile.socialLinks?.portfolio || '',
    email: profile.email || '',
    phone: profile.phone || '',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure whatsapp is properly formatted
    let cleanWhatsApp = formData.whatsapp.trim();
    if (cleanWhatsApp && !cleanWhatsApp.startsWith('http')) {
      // Clean digits
      const digits = cleanWhatsApp.replace(/[^0-9]/g, '');
      cleanWhatsApp = `https://wa.me/${digits}`;
    }

    await updateSocialLinks({
      whatsapp: cleanWhatsApp,
      linkedin: formData.linkedin,
      instagram: formData.instagram,
      tiktok: formData.tiktok,
      facebook: formData.facebook,
      twitter: formData.twitter,
      github: formData.github,
      portfolio: formData.portfolio,
      email: formData.email,
      phone: formData.phone,
    });

    await updateProfile({
      email: formData.email,
      phone: formData.phone,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Share2 className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Social Links &amp; Direct WhatsApp Sync</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Single Source of Truth: Updating your WhatsApp number or social profiles immediately updates all website buttons, modals, hero CTAs, and footer links.
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-bold text-xs animate-fade-in shadow-md">
            <CheckCircle2 className="w-4 h-4" />
            Website Contact Updated!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* WhatsApp Control */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Direct Link or Number *
              </label>
              {formData.whatsapp && (
                <a
                  href={formData.whatsapp.startsWith('http') ? formData.whatsapp : `https://wa.me/${formData.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  Test Link <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="text"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="https://wa.me/2348061234567 or +2348061234567"
              className="w-full px-3 py-2 text-sm rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            />
            <p className="text-[11px] text-emerald-800">
              When clicked by clients, this opens a direct chat with your business WhatsApp.
            </p>
          </div>

          {/* LinkedIn Control */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-blue-950">
                <Linkedin className="w-4 h-4 text-[#0B5ED7]" />
                LinkedIn Profile URL
              </label>
              {formData.linkedin && (
                <a
                  href={formData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              placeholder="https://linkedin.com/in/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-blue-800">
              Official professional presence for recruiters and high-ticket clients.
            </p>
          </div>

          {/* Instagram Control */}
          <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-pink-950">
                <Instagram className="w-4 h-4 text-pink-600" />
                Instagram Profile URL
              </label>
              {formData.instagram && (
                <a
                  href={formData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-pink-700 hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="url"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              placeholder="https://instagram.com/mrclarity_official"
              className="w-full px-3 py-2 text-sm rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            />
            <p className="text-[11px] text-pink-800">
              Showcase design aesthetics and personal brand storytelling.
            </p>
          </div>

          {/* TikTok Control */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Video className="w-4 h-4 text-slate-700" />
                TikTok Handle / URL
              </label>
              {formData.tiktok && (
                <a
                  href={formData.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-700 hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="text"
              value={formData.tiktok}
              onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
              placeholder="https://tiktok.com/@mrclarity"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-slate-500">
              Short-form marketing breakdowns and video content hooks.
            </p>
          </div>

          {/* Facebook Control */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Facebook className="w-4 h-4 text-blue-600" />
                Facebook Page / Profile URL
              </label>
              {formData.facebook && (
                <a
                  href={formData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-blue-700 hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="url"
              value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              placeholder="https://facebook.com/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-blue-800">
              Meta Ads manager page connection and client social proof.
            </p>
          </div>

          {/* GitHub / Tech Presence */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Github className="w-4 h-4 text-slate-800" />
                GitHub Profile URL
              </label>
              {formData.github && (
                <a
                  href={formData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-700 hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              placeholder="https://github.com/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-slate-500">
              Demonstrates software development, automation scripts, and technical chops.
            </p>
          </div>

          {/* Twitter / X */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Twitter className="w-4 h-4 text-slate-800" />
                Twitter / X Profile
              </label>
              {formData.twitter && (
                <a
                  href={formData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-700 hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="url"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              placeholder="https://x.com/..."
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-slate-500">
              Tech discussions, marketing thoughts, and network building.
            </p>
          </div>

          {/* Direct Email & Phone */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Mail className="w-4 h-4 text-[#0B5ED7]" />
              Primary Contact Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ipesolasulaiman@gmail.com"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
            />
            <p className="text-[11px] text-slate-500">
              Public contact email for direct project proposals.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end pt-3 border-t border-slate-100">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#084298] transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            Save &amp; Sync All Social Links
          </button>
        </div>
      </form>
    </div>
  );
};
