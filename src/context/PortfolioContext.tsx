import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Project,
  Service,
  Testimonial,
  SkillItem,
  CVRecord,
  HireMeRequest,
  ContactMessage,
  ProfileData,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  WebsiteSettings,
  SEOSettings,
  HireRequestStatus,
  OpportunityType,
} from '../types';
import {
  PERSONAL_INFO,
  SERVICES as INITIAL_SERVICES,
  PROJECTS as INITIAL_PROJECTS,
  RESUME_DATA,
} from '../data/portfolioData';

interface PortfolioContextType {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  experience: ExperienceItem[];
  setExperience: React.Dispatch<React.SetStateAction<ExperienceItem[]>>;
  education: EducationItem[];
  setEducation: React.Dispatch<React.SetStateAction<EducationItem[]>>;
  certifications: CertificationItem[];
  setCertifications: React.Dispatch<React.SetStateAction<CertificationItem[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  addTestimonial: (item: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, updates: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  cvList: CVRecord[];
  activeCv: CVRecord | undefined;
  addCvVersion: (cv: Omit<CVRecord, 'id' | 'createdAt' | 'downloadCount'>) => void;
  updateCv: (id: string, updates: Partial<CVRecord>) => void;
  setActiveCv: (id: string) => void;
  deleteCv: (id: string) => void;
  downloadActiveCv: () => void;
  hireRequests: HireMeRequest[];
  submitHireRequest: (req: Omit<HireMeRequest, 'id' | 'status' | 'dateSubmitted'>) => Promise<boolean>;
  updateHireRequestStatus: (id: string, status: HireRequestStatus) => void;
  deleteHireRequest: (id: string) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'status'>) => Promise<boolean>;
  updateContactMessageStatus: (id: string, status: 'New' | 'Replied' | 'Archived') => void;
  deleteContactMessage: (id: string) => void;
  settings: WebsiteSettings;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;
  seo: SEOSettings;
  seoSettings: SEOSettings;
  updateSeo: (newSeo: Partial<SEOSettings>) => void;
  updateSeoSettings: (newSeo: Partial<SEOSettings>) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminActiveTab: string;
  setAdminActiveTab: (tab: string) => void;
  isHireMeOpen: boolean;
  openHireMe: (initialType?: OpportunityType, preselectedService?: string) => void;
  closeHireMe: () => void;
  hireMeInitialData: { opportunityType?: OpportunityType; service?: string };
  resetAllToFactoryDefaults: () => void;
  resetToFactoryDefaults: () => void;
}

const STORAGE_PREFIX = 'mr_clarity_v2_';

const DEFAULT_PROFILE: ProfileData = {
  name: PERSONAL_INFO.name,
  brandName: PERSONAL_INFO.brandName,
  title: PERSONAL_INFO.title,
  headline: 'Turn Ideas into Impact. Scale Globally.',
  bio: 'I combine technology, creativity and data to help businesses communicate better, grow digitally and make smarter decisions. Multidisciplinary Technology, Digital Marketing, Graphics Design, and Data professional.',
  profilePhoto: PERSONAL_INFO.portraitImage,
  availability: 'Available Worldwide (Remote & Hybrid)',
  location: PERSONAL_INFO.location,
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  socialLinks: {
    linkedin: 'https://linkedin.com/in/onifade-sulaiman',
    github: 'https://github.com/onifadesulaiman',
    instagram: 'https://instagram.com/mrclarity_official',
    whatsapp: 'https://wa.me/2348061234567',
    twitter: 'https://x.com/mrclarity_dev',
    portfolio: 'https://onifadesulaiman.dev',
  },
  credibilityMetrics: {
    projectsCompleted: {
      value: '20+',
      label: 'Projects',
      sublabel: 'Projects Completed',
      verified: true,
    },
    clientsCollaborations: {
      value: '15+',
      label: 'Clients',
      sublabel: 'Collaborations',
      verified: true,
    },
    organizationsSupported: {
      value: '8+',
      label: 'Organizations',
      sublabel: 'Communities Supported',
      verified: true,
    },
    yearsExperience: {
      value: '3+',
      label: 'Years',
      sublabel: 'Years of Experience',
      verified: true,
    },
    advertisingBudgetManaged: {
      value: '$500K+',
      label: 'Advertising Budget',
      sublabel: 'Ad Spend Managed',
      verified: true,
    },
    trainingParticipants: {
      value: '500+',
      label: 'Training',
      sublabel: 'Participants Mentored',
      verified: true,
    },
  },
};

const DEFAULT_SKILLS: SkillItem[] = [
  { id: '1', skill: 'Meta & Instagram Ads', category: 'Marketing', level: 95, yearsExperience: '3+', tools: 'Ads Manager, CAPI, Pixel', featured: true },
  { id: '2', skill: 'TikTok Ads & Creative Strategy', category: 'Marketing', level: 92, yearsExperience: '2+', tools: 'TikTok Ads Manager, CapCut', featured: true },
  { id: '3', skill: 'Canva Pro & Brand Systems', category: 'Design', level: 96, yearsExperience: '3+', tools: 'Canva Pro, Brand Kits', featured: true },
  { id: '4', skill: 'Adobe Illustrator & Photoshop', category: 'Design', level: 88, yearsExperience: '3+', tools: 'Illustrator, Photoshop', featured: true },
  { id: '5', skill: 'Power BI Business Analytics', category: 'Data', level: 88, yearsExperience: '2+', tools: 'Power BI, DAX, Power Query', featured: true },
  { id: '6', skill: 'SQL & Database Querying', category: 'Data', level: 85, yearsExperience: '2+', tools: 'PostgreSQL, MySQL', featured: true },
  { id: '7', skill: 'Advanced Microsoft Excel', category: 'Data', level: 90, yearsExperience: '3+', tools: 'PivotTables, Lookups, DAX', featured: true },
  { id: '8', skill: 'Python for Data Analysis', category: 'Data', level: 80, yearsExperience: '2+', tools: 'Pandas, NumPy, Matplotlib', featured: false },
  { id: '9', skill: 'AI Tools & Prompt Systems', category: 'Automation', level: 88, yearsExperience: '2+', tools: 'Claude, GPT-4, Gemini, Notion', featured: true },
  { id: '10', skill: 'Workflow Automation', category: 'Automation', level: 85, yearsExperience: '2+', tools: 'Zapier, Make.com', featured: false },
];

const DEFAULT_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    organization: 'Clarity Digital Academy & Consulting',
    role: 'Lead Digital Strategist & Founder',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Founded digital academy and specialized advisory helping brands scale performance ad funnels and build high-impact creative identities.',
    achievements: [
      'Trained 500+ students and business owners in Canva Pro, visual branding, and digital acquisition.',
      'Managed $500K+ in ad spend across Meta and TikTok with a 4.8x average return on ad spend (ROAS).',
      'Engineered automated client reporting dashboards using Power BI and Zapier.',
    ],
    skills: ['Meta Ads', 'Canva Pro', 'TikTok Ads', 'Power BI', 'Client Advisory'],
  },
  {
    id: 'exp-2',
    organization: 'Freelance & SME Collaborations',
    role: 'Digital Marketing & Design Consultant',
    startDate: 'Jun 2021',
    endDate: 'Present',
    description: 'Partnered with over 20 retail, fintech, and lifestyle brands across Nigeria, UK, and North America.',
    achievements: [
      'Reduced average customer acquisition cost (CAC) by up to 41% through disruptive video creative hooks.',
      'Built multi-store inventory and revenue tracking models in Microsoft Excel & SQL.',
      'Produced cohesive brand books, logos, packaging designs, and investor presentation decks.',
    ],
    skills: ['Direct-Response Copy', 'Adobe Illustrator', 'SQL', 'Excel', 'Brand Strategy'],
  },
];

const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Sc. Computer Science (300 Level)',
    institution: 'Olabisi Onabanjo University (OOU)',
    period: '2022 - Present',
    details: 'Coursework: Algorithms & Data Structures, Relational Database Management Systems, Software Engineering, Computer Networks, and Artificial Intelligence.',
  },
];

const DEFAULT_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Meta Certified Digital Marketing Associate',
    issuer: 'Meta Blueprint',
    date: '2024',
    credentialUrl: 'https://www.credly.com',
  },
  {
    id: 'cert-2',
    title: 'Data Analysis & Visualization with Power BI & Excel',
    issuer: 'Microsoft Certified Professional Learning',
    date: '2024',
  },
  {
    id: 'cert-3',
    title: 'Advanced Canva Design & Visual Identity Specialist',
    issuer: 'Canva Design Institute',
    date: '2023',
  },
  {
    id: 'cert-4',
    title: 'AI Workflow Automation & Prompt Engineering',
    issuer: 'DeepLearning.AI & Industry Cohorts',
    date: '2024',
  },
];

const DEFAULT_CV_LIST: CVRecord[] = [
  {
    id: 'cv-active',
    title: 'Onifade Sulaiman (Mr. Clarity) - Master CV',
    version: 'v2.5',
    date: 'September 2026',
    fileName: 'Onifade_Sulaiman_Mr_Clarity_CV_v2.5.txt',
    summary: 'Executive Technology, Digital Marketing, Graphics Design, and Data Analytics Curriculum Vitae for Onifade Sulaiman (Mr. Clarity).',
    isActive: true,
    isPublished: true,
    downloadCount: 142,
    createdAt: '2026-09-01T08:00:00.000Z',
    fileType: 'txt',
  },
];

const DEFAULT_SETTINGS: WebsiteSettings = {
  websiteTitle: 'Onifade Sulaiman (Mr. Clarity) | Technology • Creativity • Data • Growth',
  metaDescription: 'Official portfolio of Onifade Sulaiman (Mr. Clarity) - Digital Marketer, Graphics Designer, Data Analyst & Technology Innovator.',
  logoText: 'MR. CLARITY',
  theme: 'dark-navy',
  primaryColor: '#0B5ED7',
  availabilityStatus: 'Available for Opportunities (Full-time, Contract, Consulting)',
  allowPublicHireRequests: true,
};

const DEFAULT_SEO: SEOSettings = {
  metaTitle: 'Onifade Sulaiman (Mr. Clarity) - Portfolio & CV',
  metaDescription: 'Download latest CV, explore case studies, view data dashboards, and hire Mr. Clarity for growth marketing, graphic design, and data analytics.',
  keywords: 'Onifade Sulaiman, Mr. Clarity, Digital Marketer Nigeria, Power BI Data Analyst, Canva Designer, Meta Ads Specialist, TikTok Ads Strategist, Technology Innovator',
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    if (item) return JSON.parse(item);
  } catch (e) {
    console.error(`Error loading ${key} from storage:`, e);
  }
  return fallback;
}

function saveToStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to storage:`, e);
  }
}

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() =>
    loadFromStorage('profile', DEFAULT_PROFILE)
  );
  const [services, setServices] = useState<Service[]>(() =>
    loadFromStorage('services', INITIAL_SERVICES)
  );
  const [projects, setProjects] = useState<Project[]>(() =>
    loadFromStorage('projects', INITIAL_PROJECTS)
  );
  const [skills, setSkills] = useState<SkillItem[]>(() =>
    loadFromStorage('skills', DEFAULT_SKILLS)
  );
  const [experience, setExperience] = useState<ExperienceItem[]>(() =>
    loadFromStorage('experience', DEFAULT_EXPERIENCE)
  );
  const [education, setEducation] = useState<EducationItem[]>(() =>
    loadFromStorage('education', DEFAULT_EDUCATION)
  );
  const [certifications, setCertifications] = useState<CertificationItem[]>(() =>
    loadFromStorage('certifications', DEFAULT_CERTIFICATIONS)
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() =>
    loadFromStorage('testimonials', [])
  );
  const [cvList, setCvList] = useState<CVRecord[]>(() =>
    loadFromStorage('cvList', DEFAULT_CV_LIST)
  );
  const [hireRequests, setHireRequests] = useState<HireMeRequest[]>(() =>
    loadFromStorage('hireRequests', [])
  );
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() =>
    loadFromStorage('contactMessages', [])
  );
  const [settings, setSettings] = useState<WebsiteSettings>(() =>
    loadFromStorage('settings', DEFAULT_SETTINGS)
  );
  const [seo, setSeo] = useState<SEOSettings>(() =>
    loadFromStorage('seo', DEFAULT_SEO)
  );

  // Admin and Modal states
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('dashboard');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [hireMeInitialData, setHireMeInitialData] = useState<{
    opportunityType?: OpportunityType;
    service?: string;
  }>({});

  // Sync to localStorage
  useEffect(() => { saveToStorage('profile', profile); }, [profile]);
  useEffect(() => { saveToStorage('services', services); }, [services]);
  useEffect(() => { saveToStorage('projects', projects); }, [projects]);
  useEffect(() => { saveToStorage('skills', skills); }, [skills]);
  useEffect(() => { saveToStorage('experience', experience); }, [experience]);
  useEffect(() => { saveToStorage('education', education); }, [education]);
  useEffect(() => { saveToStorage('certifications', certifications); }, [certifications]);
  useEffect(() => { saveToStorage('testimonials', testimonials); }, [testimonials]);
  useEffect(() => { saveToStorage('cvList', cvList); }, [cvList]);
  useEffect(() => { saveToStorage('hireRequests', hireRequests); }, [hireRequests]);
  useEffect(() => { saveToStorage('contactMessages', contactMessages); }, [contactMessages]);
  useEffect(() => { saveToStorage('settings', settings); }, [settings]);
  useEffect(() => { saveToStorage('seo', seo); }, [seo]);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  const updateSettings = (newSettings: Partial<WebsiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const updateSeo = (newSeo: Partial<SEOSettings>) => {
    setSeo((prev) => ({ ...prev, ...newSeo }));
  };

  // Testimonials management
  const addTestimonial = (item: Omit<Testimonial, 'id'>) => {
    const newItem: Testimonial = {
      ...item,
      id: 'test_' + Date.now(),
      dateAdded: item.dateAdded || new Date().toISOString(),
    };
    setTestimonials((prev) => [newItem, ...prev]);
  };

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  // CV Management functions
  const activeCv = cvList.find((cv) => cv.isActive && cv.isPublished) || cvList[0];

  const addCvVersion = (newCv: Omit<CVRecord, 'id' | 'createdAt' | 'downloadCount'>) => {
    const id = 'cv_' + Date.now();
    const fullRecord: CVRecord = {
      ...newCv,
      id,
      createdAt: new Date().toISOString(),
      downloadCount: 0,
    };

    setCvList((prev) => {
      // If the new one is active, deactivate others
      if (fullRecord.isActive) {
        return [fullRecord, ...prev.map((c) => ({ ...c, isActive: false }))];
      }
      return [fullRecord, ...prev];
    });
  };

  const updateCv = (id: string, updates: Partial<CVRecord>) => {
    setCvList((prev) =>
      prev.map((cv) => {
        if (cv.id === id) {
          const updated = { ...cv, ...updates };
          return updated;
        }
        if (updates.isActive && cv.id !== id) {
          return { ...cv, isActive: false };
        }
        return cv;
      })
    );
  };

  const setActiveCv = (id: string) => {
    setCvList((prev) =>
      prev.map((cv) => ({
        ...cv,
        isActive: cv.id === id,
        isPublished: cv.id === id ? true : cv.isPublished,
      }))
    );
  };

  const deleteCv = (id: string) => {
    setCvList((prev) => {
      const remaining = prev.filter((cv) => cv.id !== id);
      // Ensure at least one is active if remaining exists
      if (remaining.length > 0 && !remaining.some((c) => c.isActive)) {
        remaining[0].isActive = true;
      }
      return remaining;
    });
  };

  const downloadActiveCv = () => {
    if (!activeCv) return;

    // Increment download count
    setCvList((prev) =>
      prev.map((c) => (c.id === activeCv.id ? { ...c, downloadCount: (c.downloadCount || 0) + 1 } : c))
    );

    // If active CV has a real uploaded fileUrl (dataURL or link), download that
    if (activeCv.fileUrl) {
      const link = document.createElement('a');
      link.href = activeCv.fileUrl;
      link.download = activeCv.fileName || `Onifade_Sulaiman_CV_${activeCv.version}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Dynamic generation from current profile, experience, skills, education, and active CV data
    const cvText = `================================================================================
${profile.name.toUpperCase()} (${profile.brandName.toUpperCase()}) - CURRICULUM VITAE
================================================================================
CV Version: ${activeCv.version} | Last Updated: ${activeCv.date}
Title: ${profile.title}
Email: ${profile.email} | Phone: ${profile.phone}
Location: ${profile.location}
Availability: ${profile.availability}
LinkedIn: ${profile.socialLinks.linkedin}
GitHub: ${profile.socialLinks.github}
Portfolio: ${profile.socialLinks.portfolio}

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${profile.bio}

--------------------------------------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------------------------------------
${experience
  .map(
    (exp) => `• ${exp.role} | ${exp.organization}
  Timeline: ${exp.startDate} - ${exp.endDate}
  Overview: ${exp.description}
  Key Achievements:
${exp.achievements.map((a) => `    - ${a}`).join('\n')}
  Skills Utilized: ${exp.skills.join(', ')}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
${education
  .map(
    (edu) => `• ${edu.degree}
  Institution: ${edu.institution} (${edu.period})
  Focus: ${edu.details}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS & CREDENTIALS
--------------------------------------------------------------------------------
${certifications
  .map(
    (cert) => `• ${cert.title} - ${cert.issuer} (${cert.date})${cert.credentialUrl ? ` [${cert.credentialUrl}]` : ''}`
  )
  .join('\n')}

--------------------------------------------------------------------------------
CORE COMPETENCIES & TOOLSET
--------------------------------------------------------------------------------
${skills.map((s) => `• ${s.skill} (${s.category}) - Proficiency: ${s.level}% [${s.tools}]`).join('\n')}

================================================================================
Verified Document. Contact: ${profile.email}
================================================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeCv.fileName || `Onifade_Sulaiman_CV_${activeCv.version}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Hire Me Request submission
  const submitHireRequest = async (
    req: Omit<HireMeRequest, 'id' | 'status' | 'dateSubmitted'>
  ): Promise<boolean> => {
    const newRequest: HireMeRequest = {
      ...req,
      id: 'hire_' + Date.now(),
      status: 'New',
      dateSubmitted: new Date().toISOString(),
    };

    setHireRequests((prev) => [newRequest, ...prev]);
    return true;
  };

  const updateHireRequestStatus = (id: string, status: HireRequestStatus) => {
    setHireRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const deleteHireRequest = (id: string) => {
    setHireRequests((prev) => prev.filter((r) => r.id !== id));
  };

  // Contact Message submission
  const submitContactMessage = async (
    msg: Omit<ContactMessage, 'id' | 'date' | 'status'>
  ): Promise<boolean> => {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg_' + Date.now(),
      status: 'New',
      date: new Date().toISOString(),
    };

    setContactMessages((prev) => [newMsg, ...prev]);
    return true;
  };

  const updateContactMessageStatus = (
    id: string,
    status: 'New' | 'Replied' | 'Archived'
  ) => {
    setContactMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status } : m))
    );
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const openHireMe = (
    initialType?: OpportunityType,
    preselectedService?: string
  ) => {
    setHireMeInitialData({
      opportunityType: initialType,
      service: preselectedService,
    });
    setIsHireMeOpen(true);
  };

  const closeHireMe = () => {
    setIsHireMeOpen(false);
    setHireMeInitialData({});
  };

  const resetAllToFactoryDefaults = () => {
    setProfile(DEFAULT_PROFILE);
    setServices(INITIAL_SERVICES);
    setProjects(INITIAL_PROJECTS);
    setSkills(DEFAULT_SKILLS);
    setExperience(DEFAULT_EXPERIENCE);
    setEducation(DEFAULT_EDUCATION);
    setCertifications(DEFAULT_CERTIFICATIONS);
    setTestimonials([]);
    setCvList(DEFAULT_CV_LIST);
    setHireRequests([]);
    setContactMessages([]);
    setSettings(DEFAULT_SETTINGS);
    setSeo(DEFAULT_SEO);
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        updateProfile,
        services,
        setServices,
        projects,
        setProjects,
        skills,
        setSkills,
        experience,
        setExperience,
        education,
        setEducation,
        certifications,
        setCertifications,
        testimonials,
        setTestimonials,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        cvList,
        activeCv,
        addCvVersion,
        updateCv,
        setActiveCv,
        deleteCv,
        downloadActiveCv,
        hireRequests,
        submitHireRequest,
        updateHireRequestStatus,
        deleteHireRequest,
        contactMessages,
        submitContactMessage,
        updateContactMessageStatus,
        deleteContactMessage,
        settings,
        updateSettings,
        seo,
        seoSettings: seo,
        updateSeo,
        updateSeoSettings: updateSeo,
        isAdminOpen,
        setIsAdminOpen,
        adminActiveTab,
        setAdminActiveTab,
        isHireMeOpen,
        openHireMe,
        closeHireMe,
        hireMeInitialData,
        resetAllToFactoryDefaults,
        resetToFactoryDefaults: resetAllToFactoryDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
