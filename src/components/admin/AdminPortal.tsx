import React, { useState } from 'react';
import {
  X,
  LayoutDashboard,
  User,
  Sparkles,
  Award,
  FolderKanban,
  Briefcase,
  GraduationCap,
  MessageSquareQuote,
  FileText,
  Inbox,
  Settings,
  Sliders,
  LogOut,
  Lock,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Menu,
  Key,
  Layers,
  Palette,
  Share2,
  Video,
  MessageSquare,
  FolderOpen,
  Search,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AdminDashboardTab } from './AdminDashboardTab';
import { AdminProfileTab } from './AdminProfileTab';
import { AdminServicesTab } from './AdminServicesTab';
import { AdminSkillsTab } from './AdminSkillsTab';
import { AdminProjectsTab } from './AdminProjectsTab';
import { AdminCaseStudiesTab } from './AdminCaseStudiesTab';
import { AdminBrandDesignTab } from './AdminBrandDesignTab';
import { AdminSocialMediaTab } from './AdminSocialMediaTab';
import { AdminVideosTab } from './AdminVideosTab';
import { AdminExperienceTab } from './AdminExperienceTab';
import { AdminEducationCertTab } from './AdminEducationCertTab';
import { AdminCvManagerTab } from './AdminCvManagerTab';
import { AdminTestimonialsTab } from './AdminTestimonialsTab';
import { AdminHireRequestsTab } from './AdminHireRequestsTab';
import { AdminMessagesTab } from './AdminMessagesTab';
import { AdminSocialLinksTab } from './AdminSocialLinksTab';
import { AdminMediaLibraryTab } from './AdminMediaLibraryTab';
import { AdminWebsiteSettingsTab } from './AdminWebsiteSettingsTab';
import { AdminSeoTab } from './AdminSeoTab';

export const AdminPortal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    adminActiveTab,
    setAdminActiveTab,
    hireRequests,
    contactMessages,
    testimonials,
    firebaseUser,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
    signInWithGoogle,
    signOutAdmin,
    isFirebaseConnected,
    isSyncing,
    seedDatabaseToFirebase,
  } = usePortfolio();

  // Authentication state
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);

  // If modal not requested, do not render
  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      pinInput.trim().toLowerCase() === 'clarity2026' ||
      pinInput.trim().toLowerCase() === 'admin123' ||
      pinInput.trim() === '2026'
    ) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('mr_clarity_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect access key. Default key is: clarity2026');
    }
  };

  const handleGoogleLogin = async () => {
    setAuthLoading(true);
    setPinError('');
    try {
      await signInWithGoogle();
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('mr_clarity_admin_auth', 'true');
    } catch (err: any) {
      setPinError(err?.message || 'Google authentication failed. Please try passkey.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutAdmin();
    } catch {
      // ignore
    }
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('mr_clarity_admin_auth');
    setPinInput('');
  };

  const handleManualSeed = async () => {
    if (confirm('Synchronize all default data collections directly to Firebase Firestore?')) {
      try {
        await seedDatabaseToFirebase();
        setSeedSuccess(true);
        setTimeout(() => setSeedSuccess(false), 4000);
      } catch (err: any) {
        alert('Sync error: ' + (err?.message || 'Check Firestore permissions'));
      }
    }
  };

  // Exact 19 Navigation Items in the user's required order:
  // Dashboard, Profile, Services, Skills, Projects, Case Studies, Brand Design, Social Media, Videos, Experience, Education, CV, Testimonials, Hire Requests, Messages, Social Links, Media Library, Website Settings, SEO
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'case_studies', label: 'Case Studies', icon: Layers },
    { id: 'brand_design', label: 'Brand Design', icon: Palette },
    { id: 'social_media', label: 'Social Media', icon: Share2 },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'cv', label: 'CV', icon: FileText },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: MessageSquareQuote,
      badge: testimonials.length || undefined,
    },
    {
      id: 'hire_requests',
      label: 'Hire Requests',
      icon: Inbox,
      badge: hireRequests.filter((r) => r.status === 'New').length || undefined,
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: MessageSquare,
      badge: contactMessages.filter((m) => m.status === 'New').length || undefined,
    },
    { id: 'social_links', label: 'Social Links', icon: Share2 },
    { id: 'media_library', label: 'Media Library', icon: FolderOpen },
    { id: 'website_settings', label: 'Website Settings', icon: Settings },
    { id: 'seo', label: 'SEO', icon: Search },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#08183A]/80 backdrop-blur-md">
      {/* Modal Container */}
      <div className="bg-slate-100 rounded-3xl w-full max-w-7xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-white/20">
        {/* Top Operational Bar */}
        <div className="bg-[#08183A] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-white/10 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0B5ED7] to-[#00D2FF] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#08183A] rounded-lg flex items-center justify-center text-[#00D2FF] font-black text-xs">
                C
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm tracking-tight text-white">MR. CLARITY</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#0B5ED7] text-white uppercase tracking-wider">
                  Admin Dashboard
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Firebase Single Source of Truth • Real-Time Public Website Sync
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Firebase Live Cloud Status Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <div
                className={`w-2 h-2 rounded-full ${
                  isSyncing ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                }`}
              />
              <span>
                {isSyncing
                  ? 'Syncing to Cloud...'
                  : isFirebaseConnected
                  ? 'Firestore Live'
                  : 'Local Storage Linked'}
              </span>
            </div>

            {/* Seed / Sync Button */}
            <button
              onClick={handleManualSeed}
              title="Ensure all default portfolio collections are written to Firestore"
              className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              <RotateCcw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>Sync Cloud DB</span>
            </button>

            {seedSuccess && (
              <span className="text-[10px] text-emerald-400 font-bold hidden lg:inline-block">
                ✓ Cloud Synchronized!
              </span>
            )}

            {/* View Live Site Button */}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="hidden sm:inline">Close &amp; View Site</span>
            </button>

            {/* Close Cross */}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-rose-500/30 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAdminAuthenticated ? (
          /* Authentication Screen */
          <div className="flex-1 flex items-center justify-center p-6 bg-slate-100">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#08183A] text-[#00D2FF] flex items-center justify-center shadow-md">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">Secure Admin Dashboard</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Authenticate to control and publish live content to the public portfolio.
                </p>
              </div>

              {pinError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                  {pinError}
                </div>
              )}

              {/* Passkey Input */}
              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Master Access Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={pinInput}
                      onChange={(e) => setPinInput(e.target.value)}
                      placeholder="Enter access key (e.g. clarity2026)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] text-sm"
                      autoFocus
                    />
                    <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Default passkey: <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0B5ED7] font-bold">clarity2026</code>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0B5ED7] hover:bg-[#084298] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  Unlock Admin Dashboard
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400 font-bold">or Firebase Auth</span>
                </div>
              </div>

              {/* Google Sign-in */}
              <button
                onClick={handleGoogleLogin}
                disabled={authLoading}
                type="button"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{authLoading ? 'Signing in...' : 'Sign in with Google Account'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Workspace */
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar Navigation */}
            <aside
              className={`${
                mobileMenuOpen ? 'block' : 'hidden'
              } lg:block w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col justify-between overflow-y-auto`}
            >
              <div className="p-3 space-y-1">
                <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Control Modules (19)
                </div>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  // Handle aliases if any
                  const isActive =
                    adminActiveTab === item.id ||
                    (item.id === 'cv' && adminActiveTab === 'cv_manager') ||
                    (item.id === 'website_settings' && adminActiveTab === 'settings_seo');

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setAdminActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                        isActive
                          ? 'bg-[#0B5ED7] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 ${
                            isActive ? 'text-white' : 'text-slate-500'
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && item.badge > 0 && (
                        <span
                          className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                            isActive
                              ? 'bg-[#00D2FF] text-[#08183A]'
                              : 'bg-blue-100 text-[#0B5ED7]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Footer */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Firestore Single Source</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-rose-600 font-bold transition-colors"
                  >
                    Logout
                  </button>
                </div>
                {firebaseUser ? (
                  <div className="text-[10px] text-slate-400 truncate">
                    Auth: <span className="text-slate-600 font-mono">{firebaseUser.email}</span>
                  </div>
                ) : (
                  <div className="text-[10px] text-slate-400 truncate">
                    Auth: <span className="text-slate-600 font-mono">Master Passkey</span>
                  </div>
                )}
              </div>
            </aside>

            {/* Right Main Content Area */}
            <main className="flex-1 bg-slate-100 overflow-y-auto p-4 sm:p-6 lg:p-8">
              <div className="max-w-5xl mx-auto">
                {adminActiveTab === 'dashboard' && <AdminDashboardTab />}
                {adminActiveTab === 'profile' && <AdminProfileTab />}
                {adminActiveTab === 'services' && <AdminServicesTab />}
                {adminActiveTab === 'skills' && <AdminSkillsTab />}
                {adminActiveTab === 'projects' && <AdminProjectsTab />}
                {adminActiveTab === 'case_studies' && <AdminCaseStudiesTab />}
                {adminActiveTab === 'brand_design' && <AdminBrandDesignTab />}
                {adminActiveTab === 'social_media' && <AdminSocialMediaTab />}
                {adminActiveTab === 'videos' && <AdminVideosTab />}
                {adminActiveTab === 'experience' && <AdminExperienceTab />}
                {adminActiveTab === 'education' && <AdminEducationCertTab />}
                {(adminActiveTab === 'cv' || adminActiveTab === 'cv_manager') && (
                  <AdminCvManagerTab />
                )}
                {adminActiveTab === 'testimonials' && <AdminTestimonialsTab />}
                {adminActiveTab === 'hire_requests' && <AdminHireRequestsTab />}
                {adminActiveTab === 'messages' && <AdminMessagesTab />}
                {adminActiveTab === 'social_links' && <AdminSocialLinksTab />}
                {adminActiveTab === 'media_library' && <AdminMediaLibraryTab />}
                {(adminActiveTab === 'website_settings' ||
                  adminActiveTab === 'settings_seo') && <AdminWebsiteSettingsTab />}
                {adminActiveTab === 'seo' && <AdminSeoTab />}
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};
