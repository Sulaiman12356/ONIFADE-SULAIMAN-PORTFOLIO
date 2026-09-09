import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Save, Sparkles, CheckCircle2, Link2, Upload, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { resolveProfileImage, resolveAboutImage } from '../../utils/imageUtils';

export const AdminProfileTab: React.FC = () => {
  const { profile, updateProfile } = usePortfolio();
  const [formData, setFormData] = useState(profile);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B5ED7] to-[#1D4ED8] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-black">Profile &amp; About Identity</h2>
          <p className="text-xs text-slate-300 mt-1">
            Edit your core personal brand details, headlines, bio, direct contact info, and social channels. Updates propagate instantly across the entire public site.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#08183A] font-extrabold text-xs shadow-sm transition-all active:scale-[0.98]"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {savedNotice && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Profile changes saved and published to the live portfolio!</span>
        </div>
      )}

      {/* Basic Identity */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4 text-[#0B5ED7]" />
          <span>Core Identification</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Full Legal Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Brand Moniker / Pseudonym</label>
            <input
              type="text"
              required
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Location / Base</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1 text-xs">Professional Title / Discipline Stacking</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1 text-xs">Slogan / Primary Headline</label>
          <input
            type="text"
            value={formData.headline}
            onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1 text-xs">Executive Biography &amp; Story</label>
          <textarea
            rows={4}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs leading-relaxed"
          />
        </div>

        <div className="text-xs">
          <label className="block font-bold text-slate-700 mb-1">Availability Status</label>
          <input
            type="text"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
          />
        </div>

        {/* Profile & About Photos Section */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h4 className="text-xs font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#0B5ED7]" />
                <span>Profile &amp; About Photos (onifade.jpg)</span>
              </h4>
              <p className="text-[11px] text-slate-500">
                Official image asset: <code className="text-[#0B5ED7] font-mono">onifade.jpg</code>. Used in Hero and About Me sections.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  profilePhoto: PERSONAL_INFO.portraitImage,
                  aboutPhoto: PERSONAL_INFO.aboutImage,
                });
              }}
              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#0B5ED7] text-[11px] font-black flex items-center gap-1 self-start sm:self-auto cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Apply onifade.jpg to Both</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Profile Photo */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Profile Photo (Hero)</span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Asset
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0 relative group">
                  <img
                    src={resolveProfileImage(formData.profilePhoto, PERSONAL_INFO.portraitImage)}
                    alt="Profile Preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 space-y-1.5 text-xs">
                  <input
                    type="text"
                    value={formData.profilePhoto || ''}
                    onChange={(e) => setFormData({ ...formData, profilePhoto: e.target.value })}
                    placeholder="URL or asset path (e.g. onifade.jpg)"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-mono"
                  />
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer text-[11px] font-bold text-[#0B5ED7] hover:underline flex items-center gap-1">
                      <Upload className="w-3 h-3" />
                      <span>Upload New</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              if (typeof reader.result === 'string') {
                                setFormData((prev) => ({ ...prev, profilePhoto: reader.result as string }));
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, profilePhoto: PERSONAL_INFO.portraitImage })}
                      className="text-[11px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Use onifade.jpg
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Picture */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">About Picture (About Me)</span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Asset
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0 relative group">
                  <img
                    src={resolveAboutImage(formData.aboutPhoto || formData.profilePhoto, PERSONAL_INFO.aboutImage)}
                    alt="About Preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 space-y-1.5 text-xs">
                  <input
                    type="text"
                    value={formData.aboutPhoto || ''}
                    onChange={(e) => setFormData({ ...formData, aboutPhoto: e.target.value })}
                    placeholder="URL or asset path (e.g. onifade.jpg)"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-mono"
                  />
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer text-[11px] font-bold text-[#0B5ED7] hover:underline flex items-center gap-1">
                      <Upload className="w-3 h-3" />
                      <span>Upload New</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              if (typeof reader.result === 'string') {
                                setFormData((prev) => ({ ...prev, aboutPhoto: reader.result as string }));
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, aboutPhoto: PERSONAL_INFO.aboutImage })}
                      className="text-[11px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Use onifade.jpg
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Channels */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#0B5ED7]" />
          <span>Direct Contact Channels (Editable)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Official Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Phone Number (Call / SMS)</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
          <Link2 className="w-4 h-4 text-[#0B5ED7]" />
          <span>Social Media &amp; Profiles</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">LinkedIn Profile</label>
            <input
              type="url"
              value={formData.socialLinks.linkedin}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, linkedin: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">GitHub Profile</label>
            <input
              type="url"
              value={formData.socialLinks.github}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, github: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Instagram Profile</label>
            <input
              type="url"
              value={formData.socialLinks.instagram}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, instagram: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">WhatsApp Direct Link</label>
            <input
              type="url"
              value={formData.socialLinks.whatsapp}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, whatsapp: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Twitter / X Profile</label>
            <input
              type="url"
              value={formData.socialLinks.twitter}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Facebook Page / Profile</label>
            <input
              type="url"
              value={formData.socialLinks.facebook || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, facebook: e.target.value },
                })
              }
              placeholder="https://facebook.com/mrclarity"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">TikTok Profile</label>
            <input
              type="url"
              value={formData.socialLinks.tiktok || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, tiktok: e.target.value },
                })
              }
              placeholder="https://tiktok.com/@mrclarity"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Custom Portfolio URL</label>
            <input
              type="url"
              value={formData.socialLinks.portfolio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, portfolio: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B5ED7] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md shadow-[#0B5ED7]/25 transition-all active:scale-[0.98]"
        >
          <Save className="w-4 h-4" />
          <span>Save Profile Changes</span>
        </button>
      </div>

    </form>
  );
};
