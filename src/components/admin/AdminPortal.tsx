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
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AdminDashboardTab } from './AdminDashboardTab';
import { AdminProfileTab } from './AdminProfileTab';
import { AdminCvManagerTab } from './AdminCvManagerTab';
import { AdminHireRequestsTab } from './AdminHireRequestsTab';
import { AdminServicesTab } from './AdminServicesTab';
import { AdminProjectsTab } from './AdminProjectsTab';
import { AdminSkillsTab } from './AdminSkillsTab';
import { AdminExperienceTab } from './AdminExperienceTab';
import { AdminEducationCertTab } from './AdminEducationCertTab';
import { AdminTestimonialsTab } from './AdminTestimonialsTab';
import { AdminSettingsSeoTab } from './AdminSettingsSeoTab';

export const AdminPortal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    adminActiveTab,
    setAdminActiveTab,
    resetToFactoryDefaults,
    hireRequests,
    testimonials,
  } = usePortfolio();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mr_clarity_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If modal not requested, do not render
  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master PIN is clarity2026 or admin123
    if (pinInput.trim().toLowerCase() === 'clarity2026' || pinInput.trim().toLowerCase() === 'admin123' || pinInput.trim() === '2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('mr_clarity_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect access key. Default key is: clarity2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mr_clarity_admin_auth');
    setPinInput('');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'cv_manager', label: 'CV Manager & Versions', icon: FileText },
    {
      id: 'hire_requests',
      label: 'Hire Me Inquiries',
      icon: Inbox,
      badge: hireRequests.filter((r) => r.status === 'New').length || undefined,
    },
    { id: 'profile', label: 'Profile & Contact', icon: User },
    { id: 'services', label: 'Services & Deliverables', icon: Sparkles },
    { id: 'projects', label: 'Projects & Case Studies', icon: FolderKanban },
    { id: 'skills', label: 'Skills & Platforms', icon: Award },
    { id: 'experience', label: 'Experience & Roles', icon: Briefcase },
    { id: 'education_certs', label: 'Education & Credentials', icon: GraduationCap },
    {
      id: 'testimonials',
      label: 'Testimonials (Verified)',
      icon: MessageSquareQuote,
      badge: testimonials.length || undefined,
    },
    { id: 'settings_seo', label: 'Website Settings & Metrics', icon: Sliders },
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
                  Admin Portal
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Unified Content Engine &amp; Public Site Sync
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated && (
              <>
                <button
                  onClick={() => setIsAdminOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span className="hidden sm:inline">View Public Site</span>
                </button>

                <button
                  onClick={() => {
                    if (confirm('Reset portfolio to initial factory data?')) {
                      resetToFactoryDefaults();
                    }
                  }}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors"
                  title="Reset Demo Data"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleLogout}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Lock Session / Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            )}

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Admin Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Check Screen */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center mx-auto shadow-inner">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#0B1F3A]">Secure Admin Authentication</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter your administrative master passkey to access the control center.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Master Passkey / PIN
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      autoFocus
                      required
                      value={pinInput}
                      onChange={(e) => {
                        setPinInput(e.target.value);
                        setPinError('');
                      }}
                      placeholder="Enter passkey (default: clarity2026)"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-100"
                    />
                    <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                  </div>
                  {pinError && (
                    <p className="text-xs text-rose-600 font-semibold mt-1">{pinError}</p>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-slate-600">
                  <span className="font-bold text-[#0B5ED7]">Developer Hint:</span> Default master key is <code className="bg-white px-1.5 py-0.5 rounded font-bold text-[#0B1F3A] border">clarity2026</code>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white font-extrabold text-sm transition-all shadow-md active:scale-[0.98]"
                >
                  Unlock Admin Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Body: Left Sidebar + Right Content Area */
          <div className="flex-1 flex overflow-hidden">
            
            {/* Left Sidebar */}
            <aside
              className={`w-64 bg-white border-r border-slate-200 flex flex-col justify-between overflow-y-auto flex-shrink-0 ${
                mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 block shadow-2xl' : 'hidden lg:flex'
              }`}
            >
              <div className="p-4 space-y-1">
                <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Navigation &amp; Controls
                </div>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = adminActiveTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setAdminActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#062B63] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#00D2FF]' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && item.badge > 0 && (
                        <span
                          className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                            isActive ? 'bg-[#00D2FF] text-[#08183A]' : 'bg-blue-100 text-[#0B5ED7]'
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
              <div className="p-4 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sync Active</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-slate-400 hover:text-slate-700 font-medium"
                >
                  Logout
                </button>
              </div>
            </aside>

            {/* Right Main Content Area */}
            <main className="flex-1 bg-slate-100 overflow-y-auto p-4 sm:p-6 lg:p-8">
              <div className="max-w-5xl mx-auto">
                {adminActiveTab === 'dashboard' && <AdminDashboardTab />}
                {adminActiveTab === 'cv_manager' && <AdminCvManagerTab />}
                {adminActiveTab === 'hire_requests' && <AdminHireRequestsTab />}
                {adminActiveTab === 'profile' && <AdminProfileTab />}
                {adminActiveTab === 'services' && <AdminServicesTab />}
                {adminActiveTab === 'projects' && <AdminProjectsTab />}
                {adminActiveTab === 'skills' && <AdminSkillsTab />}
                {adminActiveTab === 'experience' && <AdminExperienceTab />}
                {adminActiveTab === 'education_certs' && <AdminEducationCertTab />}
                {adminActiveTab === 'testimonials' && <AdminTestimonialsTab />}
                {adminActiveTab === 'settings_seo' && <AdminSettingsSeoTab />}
              </div>
            </main>

          </div>
        )}

      </div>

    </div>
  );
};
