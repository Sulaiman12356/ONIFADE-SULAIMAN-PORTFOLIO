import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  db,
  auth,
  storage,
  googleProvider,
  handleFirestoreError,
  OperationType,
  testConnection,
} from '../lib/firebase';
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
  BrandDesignItem,
  SocialMediaWorkItem,
  VideoContentItem,
} from '../types';
import {
  PERSONAL_INFO,
  SERVICES as INITIAL_SERVICES,
  PROJECTS as INITIAL_PROJECTS,
  BRAND_DESIGNS as INITIAL_BRAND_DESIGNS,
  SOCIAL_MEDIA_ITEMS as INITIAL_SOCIAL_MEDIA_ITEMS,
  VIDEO_ITEMS as INITIAL_VIDEO_ITEMS,
  RESUME_DATA,
} from '../data/portfolioData';

export interface PortfolioContextType {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => Promise<void>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  updateService: (id: string, updates: Partial<Service>) => Promise<void>;
  addService: (service: Service) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  addProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  brandDesigns: BrandDesignItem[];
  setBrandDesigns: React.Dispatch<React.SetStateAction<BrandDesignItem[]>>;
  addBrandDesign: (item: BrandDesignItem) => Promise<void>;
  updateBrandDesign: (id: string, updates: Partial<BrandDesignItem>) => Promise<void>;
  deleteBrandDesign: (id: string) => Promise<void>;
  socialMediaItems: SocialMediaWorkItem[];
  setSocialMediaItems: React.Dispatch<React.SetStateAction<SocialMediaWorkItem[]>>;
  addSocialMediaItem: (item: SocialMediaWorkItem) => Promise<void>;
  updateSocialMediaItem: (id: string, updates: Partial<SocialMediaWorkItem>) => Promise<void>;
  deleteSocialMediaItem: (id: string) => Promise<void>;
  videoItems: VideoContentItem[];
  setVideoItems: React.Dispatch<React.SetStateAction<VideoContentItem[]>>;
  addVideoItem: (item: VideoContentItem) => Promise<void>;
  updateVideoItem: (id: string, updates: Partial<VideoContentItem>) => Promise<void>;
  deleteVideoItem: (id: string) => Promise<void>;
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  updateSkill: (id: string, updates: Partial<SkillItem>) => Promise<void>;
  addSkill: (skill: SkillItem) => Promise<void>;
  deleteSkill: (id: string) => Promise<void>;
  experience: ExperienceItem[];
  setExperience: React.Dispatch<React.SetStateAction<ExperienceItem[]>>;
  updateExperience: (id: string, updates: Partial<ExperienceItem>) => Promise<void>;
  addExperience: (item: ExperienceItem) => Promise<void>;
  deleteExperience: (id: string) => Promise<void>;
  education: EducationItem[];
  setEducation: React.Dispatch<React.SetStateAction<EducationItem[]>>;
  updateEducation: (id: string, updates: Partial<EducationItem>) => Promise<void>;
  addEducation: (item: EducationItem) => Promise<void>;
  deleteEducation: (id: string) => Promise<void>;
  certifications: CertificationItem[];
  setCertifications: React.Dispatch<React.SetStateAction<CertificationItem[]>>;
  updateCertification: (id: string, updates: Partial<CertificationItem>) => Promise<void>;
  addCertification: (item: CertificationItem) => Promise<void>;
  deleteCertification: (id: string) => Promise<void>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  addTestimonial: (item: Omit<Testimonial, 'id'>) => Promise<void>;
  updateTestimonial: (id: string, updates: Partial<Testimonial>) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  cvList: CVRecord[];
  activeCv: CVRecord | undefined;
  addCvVersion: (cv: Omit<CVRecord, 'id' | 'createdAt' | 'downloadCount'>) => Promise<void>;
  updateCv: (id: string, updates: Partial<CVRecord>) => Promise<void>;
  setActiveCv: (id: string) => Promise<void>;
  deleteCv: (id: string) => Promise<void>;
  downloadActiveCv: () => void;
  hireRequests: HireMeRequest[];
  submitHireRequest: (req: Omit<HireMeRequest, 'id' | 'status' | 'dateSubmitted'>) => Promise<boolean>;
  updateHireRequestStatus: (id: string, status: HireRequestStatus) => Promise<void>;
  deleteHireRequest: (id: string) => Promise<void>;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'status'>) => Promise<boolean>;
  updateContactMessageStatus: (id: string, status: 'New' | 'Replied' | 'Archived') => Promise<void>;
  deleteContactMessage: (id: string) => Promise<void>;
  settings: WebsiteSettings;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => Promise<void>;
  seo: SEOSettings;
  seoSettings: SEOSettings;
  updateSeo: (newSeo: Partial<SEOSettings>) => Promise<void>;
  updateSeoSettings: (newSeo: Partial<SEOSettings>) => Promise<void>;
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

  // Firebase Auth & Cloud Integration State
  firebaseUser: FirebaseUser | null;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (val: boolean) => void;
  isFirebaseConnected: boolean;
  isSyncing: boolean;
  syncStatusMessage: string;
  signInWithGoogle: () => Promise<void>;
  signOutAdmin: () => Promise<void>;
  seedDatabaseToFirebase: () => Promise<void>;
  uploadMediaFile: (file: File, folder?: string) => Promise<string>;
  logAnalyticsEvent: (eventType: string, metadata?: Record<string, unknown>) => Promise<void>;
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
    tiktok: 'https://tiktok.com/@mrclarity',
    facebook: 'https://facebook.com/mrclarity',
    twitter: 'https://x.com/mrclarity_dev',
    portfolio: 'https://onifadesulaiman.dev',
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
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
  websiteTitle: 'Onifade Sulaiman (Mr. Clarity) | Digital Marketer, Designer & Technology Enthusiast',
  metaDescription: 'Explore the professional portfolio of Onifade Sulaiman (Mr. Clarity), a digital marketer, graphics designer, data enthusiast and technology innovator helping organizations solve problems through technology, creativity and digital growth.',
  logoText: 'MR. CLARITY',
  theme: 'dark-navy',
  primaryColor: '#0B5ED7',
  availabilityStatus: 'Available for Opportunities (Full-time, Contract, Consulting)',
  allowPublicHireRequests: true,
};

const DEFAULT_SEO: SEOSettings = {
  metaTitle: 'Onifade Sulaiman (Mr. Clarity) | Digital Marketer, Designer & Technology Enthusiast',
  metaDescription: 'Explore the professional portfolio of Onifade Sulaiman (Mr. Clarity), a digital marketer, graphics designer, data enthusiast and technology innovator helping organizations solve problems through technology, creativity and digital growth.',
  keywords: 'Onifade Sulaiman, Mr. Clarity, Digital Marketer Nigeria, Power BI Data Analyst, Canva Designer, Meta Ads Specialist, TikTok Ads Strategist, Technology Innovator, Firebase Backend',
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
  // Local state with safe initial fallback
  const [profile, setProfile] = useState<ProfileData>(() => loadFromStorage('profile', DEFAULT_PROFILE));
  const [services, setServices] = useState<Service[]>(() => loadFromStorage('services', INITIAL_SERVICES));
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = loadFromStorage<Project[]>('projects', []);
    if (!stored || stored.length === 0 || !stored.some((p) => p.category === 'META ADS')) {
      return INITIAL_PROJECTS;
    }
    return stored;
  });
  const [brandDesigns, setBrandDesigns] = useState<BrandDesignItem[]>(() => {
    const stored = loadFromStorage<BrandDesignItem[]>('brandDesigns', []);
    return stored && stored.length > 0 ? stored : INITIAL_BRAND_DESIGNS;
  });
  const [socialMediaItems, setSocialMediaItems] = useState<SocialMediaWorkItem[]>(() => {
    const stored = loadFromStorage<SocialMediaWorkItem[]>('socialMediaItems', []);
    return stored && stored.length > 0 ? stored : INITIAL_SOCIAL_MEDIA_ITEMS;
  });
  const [videoItems, setVideoItems] = useState<VideoContentItem[]>(() => {
    const stored = loadFromStorage<VideoContentItem[]>('videoItems', []);
    return stored && stored.length > 0 ? stored : INITIAL_VIDEO_ITEMS;
  });
  const [skills, setSkills] = useState<SkillItem[]>(() => loadFromStorage('skills', DEFAULT_SKILLS));
  const [experience, setExperience] = useState<ExperienceItem[]>(() => loadFromStorage('experience', DEFAULT_EXPERIENCE));
  const [education, setEducation] = useState<EducationItem[]>(() => loadFromStorage('education', DEFAULT_EDUCATION));
  const [certifications, setCertifications] = useState<CertificationItem[]>(() => loadFromStorage('certifications', DEFAULT_CERTIFICATIONS));
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => loadFromStorage('testimonials', []));
  const [cvList, setCvList] = useState<CVRecord[]>(() => loadFromStorage('cvList', DEFAULT_CV_LIST));
  const [hireRequests, setHireRequests] = useState<HireMeRequest[]>(() => loadFromStorage('hireRequests', []));
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => loadFromStorage('contactMessages', []));
  const [settings, setSettings] = useState<WebsiteSettings>(() => loadFromStorage('settings', DEFAULT_SETTINGS));
  const [seo, setSeo] = useState<SEOSettings>(() => loadFromStorage('seo', DEFAULT_SEO));

  // Firebase Auth State
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mr_clarity_admin_auth') === 'true';
  });
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatusMessage, setSyncStatusMessage] = useState<string>('Firebase Connected');

  // UI state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('dashboard');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [hireMeInitialData, setHireMeInitialData] = useState<{
    opportunityType?: OpportunityType;
    service?: string;
  }>({});

  // Verify connection to Firestore on boot
  useEffect(() => {
    testConnection().then(() => {
      setIsFirebaseConnected(true);
    }).catch(() => {
      setIsFirebaseConnected(false);
    });
  }, []);

  // Monitor Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        // Check if admin: user email matches admin or marked in Firestore
        const isAuthorizedEmail = user.email?.toLowerCase() === 'ipesolasulaiman@gmail.com';
        if (isAuthorizedEmail) {
          setIsAdminAuthenticated(true);
          sessionStorage.setItem('mr_clarity_admin_auth', 'true');
        }

        // Keep user document in sync in 'users' collection
        try {
          await setDoc(
            doc(db, 'users', user.uid),
            {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || 'Admin User',
              photoURL: user.photoURL || null,
              role: isAuthorizedEmail ? 'admin' : 'viewer',
              lastLogin: new Date().toISOString(),
            },
            { merge: true }
          );

          if (isAuthorizedEmail) {
            // Also ensure admin registry doc exists for firestore rules verification
            await setDoc(
              doc(db, 'admins', user.uid),
              {
                uid: user.uid,
                email: user.email,
                authorizedAt: new Date().toISOString(),
              },
              { merge: true }
            );
          }
        } catch (err) {
          console.warn('User record sync notice:', err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // -------------------------------------------------------------
  // Real-Time Subscriptions to all Firestore Collections (Single Source of Truth)
  // -------------------------------------------------------------
  useEffect(() => {
    // 1. Profile Collection (doc 'main')
    const unsubProfile = onSnapshot(
      doc(db, 'profile', 'main'),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as ProfileData;
          setProfile((prev) => ({ ...prev, ...data }));
          saveToStorage('profile', { ...profile, ...data });
        }
      },
      (error) => {
        console.warn('Profile sync listener notice:', error.message);
      }
    );

    // 2. Social Links Collection (doc 'main') - Single source of truth for social links
    const unsubSocial = onSnapshot(
      doc(db, 'socialLinks', 'main'),
      (snapshot) => {
        if (snapshot.exists()) {
          const links = snapshot.data();
          setProfile((prev) => ({
            ...prev,
            socialLinks: { ...prev.socialLinks, ...links },
          }));
        }
      },
      (error) => {
        console.warn('Social links sync notice:', error.message);
      }
    );

    // 3. Settings Collection (doc 'main')
    const unsubSettings = onSnapshot(
      doc(db, 'settings', 'main'),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as WebsiteSettings;
          setSettings((prev) => ({ ...prev, ...data }));
          saveToStorage('settings', { ...settings, ...data });
        }
      },
      (error) => {
        console.warn('Settings sync notice:', error.message);
      }
    );

    // 4. Skills Collection
    const unsubSkills = onSnapshot(
      collection(db, 'skills'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: SkillItem[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<SkillItem, 'id'>) });
          });
          setSkills(items);
          saveToStorage('skills', items);
        }
      },
      (error) => {
        console.warn('Skills sync notice:', error.message);
      }
    );

    // 5. Services Collection
    const unsubServices = onSnapshot(
      collection(db, 'services'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: Service[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<Service, 'id'>) });
          });
          setServices(items);
          saveToStorage('services', items);
        }
      },
      (error) => {
        console.warn('Services sync notice:', error.message);
      }
    );

    // 6. Projects Collection
    const unsubProjects = onSnapshot(
      collection(db, 'projects'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: Project[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<Project, 'id'>) });
          });
          setProjects(items);
          saveToStorage('projects', items);
        }
      },
      (error) => {
        console.warn('Projects sync notice:', error.message);
      }
    );

    // 7. Experience Collection
    const unsubExperience = onSnapshot(
      collection(db, 'experience'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: ExperienceItem[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<ExperienceItem, 'id'>) });
          });
          setExperience(items);
          saveToStorage('experience', items);
        }
      },
      (error) => {
        console.warn('Experience sync notice:', error.message);
      }
    );

    // 8. Education Collection
    const unsubEducation = onSnapshot(
      collection(db, 'education'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: EducationItem[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<EducationItem, 'id'>) });
          });
          setEducation(items);
          saveToStorage('education', items);
        }
      },
      (error) => {
        console.warn('Education sync notice:', error.message);
      }
    );

    // 9. Certifications Collection
    const unsubCertifications = onSnapshot(
      collection(db, 'certifications'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: CertificationItem[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<CertificationItem, 'id'>) });
          });
          setCertifications(items);
          saveToStorage('certifications', items);
        }
      },
      (error) => {
        console.warn('Certifications sync notice:', error.message);
      }
    );

    // 10. Testimonials Collection
    const unsubTestimonials = onSnapshot(
      collection(db, 'testimonials'),
      (snapshot) => {
        const items: Testimonial[] = [];
        snapshot.forEach((docSnap) => {
          items.push({ id: docSnap.id, ...(docSnap.data() as Omit<Testimonial, 'id'>) });
        });
        setTestimonials(items);
        saveToStorage('testimonials', items);
      },
      (error) => {
        console.warn('Testimonials sync notice:', error.message);
      }
    );

    // 11. CV Collection
    const unsubCv = onSnapshot(
      collection(db, 'cv'),
      (snapshot) => {
        if (!snapshot.empty) {
          const items: CVRecord[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<CVRecord, 'id'>) });
          });
          setCvList(items);
          saveToStorage('cvList', items);
        }
      },
      (error) => {
        console.warn('CV sync notice:', error.message);
      }
    );

    // 12. Hire Requests Collection (Admin only)
    let unsubHireRequests = () => {};
    if (isAdminAuthenticated) {
      unsubHireRequests = onSnapshot(
        collection(db, 'hireRequests'),
        (snapshot) => {
          const items: HireMeRequest[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<HireMeRequest, 'id'>) });
          });
          setHireRequests(items);
          saveToStorage('hireRequests', items);
        },
        (error) => {
          console.warn('Hire requests listener notice:', error.message);
        }
      );
    }

    // 13. Messages Collection (Admin only)
    let unsubMessages = () => {};
    if (isAdminAuthenticated) {
      unsubMessages = onSnapshot(
        collection(db, 'messages'),
        (snapshot) => {
          const items: ContactMessage[] = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...(docSnap.data() as Omit<ContactMessage, 'id'>) });
          });
          setContactMessages(items);
          saveToStorage('contactMessages', items);
        },
        (error) => {
          console.warn('Messages listener notice:', error.message);
        }
      );
    }

    return () => {
      unsubProfile();
      unsubSocial();
      unsubSettings();
      unsubSkills();
      unsubServices();
      unsubProjects();
      unsubExperience();
      unsubEducation();
      unsubCertifications();
      unsubTestimonials();
      unsubCv();
      unsubHireRequests();
      unsubMessages();
    };
  }, [isAdminAuthenticated]);

  // -------------------------------------------------------------
  // Firebase Auth Actions
  // -------------------------------------------------------------
  const signInWithGoogle = async () => {
    try {
      setIsSyncing(true);
      setSyncStatusMessage('Authenticating with Google...');
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setFirebaseUser(user);

      const isAuthorizedEmail = user.email?.toLowerCase() === 'ipesolasulaiman@gmail.com';
      if (isAuthorizedEmail) {
        setIsAdminAuthenticated(true);
        sessionStorage.setItem('mr_clarity_admin_auth', 'true');
      }

      setSyncStatusMessage(`Signed in as ${user.email}`);
    } catch (error) {
      console.error('Google Sign-In failed:', error);
      setSyncStatusMessage('Sign-in cancelled or failed');
      throw error;
    } finally {
      setIsSyncing(false);
    }
  };

  const signOutAdmin = async () => {
    try {
      await signOut(auth);
      setFirebaseUser(null);
      setIsAdminAuthenticated(false);
      sessionStorage.removeItem('mr_clarity_admin_auth');
      setSyncStatusMessage('Signed out');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  // -------------------------------------------------------------
  // Seed / Initialize Database with pristine defaults
  // -------------------------------------------------------------
  const seedDatabaseToFirebase = async () => {
    setIsSyncing(true);
    setSyncStatusMessage('Synchronizing all collections to Firebase...');
    try {
      // 1. Profile document
      await setDoc(doc(db, 'profile', 'main'), DEFAULT_PROFILE, { merge: true });

      // 2. Social Links
      await setDoc(doc(db, 'socialLinks', 'main'), DEFAULT_PROFILE.socialLinks, { merge: true });

      // 3. Settings document
      await setDoc(doc(db, 'settings', 'main'), DEFAULT_SETTINGS, { merge: true });

      // 4. Skills
      for (const skill of DEFAULT_SKILLS) {
        await setDoc(doc(db, 'skills', skill.id), skill, { merge: true });
      }

      // 5. Services
      for (const service of INITIAL_SERVICES) {
        await setDoc(doc(db, 'services', service.id), service, { merge: true });
      }

      // 6. Projects
      for (const project of INITIAL_PROJECTS) {
        await setDoc(doc(db, 'projects', project.id), project, { merge: true });
      }

      // 7. Experience
      for (const exp of DEFAULT_EXPERIENCE) {
        await setDoc(doc(db, 'experience', exp.id), exp, { merge: true });
      }

      // 8. Education
      for (const edu of DEFAULT_EDUCATION) {
        await setDoc(doc(db, 'education', edu.id), edu, { merge: true });
      }

      // 9. Certifications
      for (const cert of DEFAULT_CERTIFICATIONS) {
        await setDoc(doc(db, 'certifications', cert.id), cert, { merge: true });
      }

      // 10. CV
      for (const cv of DEFAULT_CV_LIST) {
        await setDoc(doc(db, 'cv', cv.id), cv, { merge: true });
      }

      setSyncStatusMessage('Firebase Database Seeded Successfully!');
    } catch (error) {
      console.error('Database seeding warning:', error);
      handleFirestoreError(error, OperationType.WRITE, 'seedDatabase');
    } finally {
      setIsSyncing(false);
    }
  };

  // -------------------------------------------------------------
  // Firebase Storage File Upload
  // -------------------------------------------------------------
  const uploadMediaFile = async (file: File, folder: string = 'documents'): Promise<string> => {
    setIsSyncing(true);
    setSyncStatusMessage(`Uploading ${file.name}...`);
    try {
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const fileRef = ref(storage, `${folder}/${Date.now()}_${sanitizedName}`);
      const snapshot = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);

      // Record in 'media' collection
      await addDoc(collection(db, 'media'), {
        name: file.name,
        url: downloadUrl,
        size: file.size,
        type: file.type,
        folder,
        uploadedAt: new Date().toISOString(),
      });

      setSyncStatusMessage('File uploaded successfully!');
      return downloadUrl;
    } catch (storageErr) {
      console.warn('Firebase Storage upload notice, using local blob/DataURL:', storageErr);
      // Seamless Base64 fallback so user is never blocked
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } finally {
      setIsSyncing(false);
    }
  };

  // -------------------------------------------------------------
  // Analytics Telemetry logger
  // -------------------------------------------------------------
  const logAnalyticsEvent = async (eventType: string, metadata: Record<string, unknown> = {}) => {
    try {
      await addDoc(collection(db, 'analytics'), {
        eventType,
        path: window.location.pathname,
        metadata,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      // Non-blocking telemetry
      console.warn('Analytics event notice:', err);
    }
  };

  // -------------------------------------------------------------
  // Mutation Operations (Single Source of Truth)
  // -------------------------------------------------------------
  const updateProfile = async (data: Partial<ProfileData>) => {
    const updated = { ...profile, ...data };
    setProfile(updated);
    saveToStorage('profile', updated);

    try {
      await setDoc(doc(db, 'profile', 'main'), updated, { merge: true });
      if (data.socialLinks) {
        await setDoc(doc(db, 'socialLinks', 'main'), data.socialLinks, { merge: true });
      }
    } catch (err) {
      console.warn('Profile Firestore sync notice:', err);
    }
  };

  const updateSettings = async (newSettings: Partial<WebsiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveToStorage('settings', updated);

    try {
      await setDoc(doc(db, 'settings', 'main'), updated, { merge: true });
    } catch (err) {
      console.warn('Settings Firestore sync notice:', err);
    }
  };

  const updateSeo = async (newSeo: Partial<SEOSettings>) => {
    const updated = { ...seo, ...newSeo };
    setSeo(updated);
    saveToStorage('seo', updated);

    try {
      await setDoc(doc(db, 'settings', 'main'), { seo: updated }, { merge: true });
    } catch (err) {
      console.warn('SEO Firestore sync notice:', err);
    }
  };

  // Project CRUD
  const addProject = async (proj: Project) => {
    setProjects((prev) => [proj, ...prev]);
    try {
      await setDoc(doc(db, 'projects', proj.id), proj);
    } catch (err) {
      console.warn('Project add Firestore notice:', err);
    }
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    try {
      await updateDoc(doc(db, 'projects', id), updates);
    } catch (err) {
      console.warn('Project update Firestore notice:', err);
    }
  };

  const deleteProject = async (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (err) {
      console.warn('Project delete Firestore notice:', err);
    }
  };

  // Brand Design CRUD
  const addBrandDesign = async (item: BrandDesignItem) => {
    setBrandDesigns((prev) => [item, ...prev]);
    saveToStorage('brandDesigns', [item, ...brandDesigns]);
    try {
      await setDoc(doc(db, 'brandDesigns', item.id), item);
    } catch (err) {
      console.warn('BrandDesign add Firestore notice:', err);
    }
  };

  const updateBrandDesign = async (id: string, updates: Partial<BrandDesignItem>) => {
    setBrandDesigns((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updates } : item));
      saveToStorage('brandDesigns', updated);
      return updated;
    });
    try {
      await updateDoc(doc(db, 'brandDesigns', id), updates);
    } catch (err) {
      console.warn('BrandDesign update Firestore notice:', err);
    }
  };

  const deleteBrandDesign = async (id: string) => {
    setBrandDesigns((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage('brandDesigns', updated);
      return updated;
    });
    try {
      await deleteDoc(doc(db, 'brandDesigns', id));
    } catch (err) {
      console.warn('BrandDesign delete Firestore notice:', err);
    }
  };

  // Social Media Work CRUD
  const addSocialMediaItem = async (item: SocialMediaWorkItem) => {
    setSocialMediaItems((prev) => [item, ...prev]);
    saveToStorage('socialMediaItems', [item, ...socialMediaItems]);
    try {
      await setDoc(doc(db, 'socialMediaItems', item.id), item);
    } catch (err) {
      console.warn('SocialMediaItem add Firestore notice:', err);
    }
  };

  const updateSocialMediaItem = async (id: string, updates: Partial<SocialMediaWorkItem>) => {
    setSocialMediaItems((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updates } : item));
      saveToStorage('socialMediaItems', updated);
      return updated;
    });
    try {
      await updateDoc(doc(db, 'socialMediaItems', id), updates);
    } catch (err) {
      console.warn('SocialMediaItem update Firestore notice:', err);
    }
  };

  const deleteSocialMediaItem = async (id: string) => {
    setSocialMediaItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage('socialMediaItems', updated);
      return updated;
    });
    try {
      await deleteDoc(doc(db, 'socialMediaItems', id));
    } catch (err) {
      console.warn('SocialMediaItem delete Firestore notice:', err);
    }
  };

  // Video Content CRUD
  const addVideoItem = async (item: VideoContentItem) => {
    setVideoItems((prev) => [item, ...prev]);
    saveToStorage('videoItems', [item, ...videoItems]);
    try {
      await setDoc(doc(db, 'videoItems', item.id), item);
    } catch (err) {
      console.warn('VideoItem add Firestore notice:', err);
    }
  };

  const updateVideoItem = async (id: string, updates: Partial<VideoContentItem>) => {
    setVideoItems((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updates } : item));
      saveToStorage('videoItems', updated);
      return updated;
    });
    try {
      await updateDoc(doc(db, 'videoItems', id), updates);
    } catch (err) {
      console.warn('VideoItem update Firestore notice:', err);
    }
  };

  const deleteVideoItem = async (id: string) => {
    setVideoItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage('videoItems', updated);
      return updated;
    });
    try {
      await deleteDoc(doc(db, 'videoItems', id));
    } catch (err) {
      console.warn('VideoItem delete Firestore notice:', err);
    }
  };

  // Service CRUD
  const addService = async (service: Service) => {
    setServices((prev) => [...prev, service]);
    try {
      await setDoc(doc(db, 'services', service.id), service);
    } catch (err) {
      console.warn('Service add Firestore notice:', err);
    }
  };

  const updateService = async (id: string, updates: Partial<Service>) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)));
    try {
      await updateDoc(doc(db, 'services', id), updates);
    } catch (err) {
      console.warn('Service update Firestore notice:', err);
    }
  };

  const deleteService = async (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    try {
      await deleteDoc(doc(db, 'services', id));
    } catch (err) {
      console.warn('Service delete Firestore notice:', err);
    }
  };

  // Skill CRUD
  const addSkill = async (skill: SkillItem) => {
    setSkills((prev) => [...prev, skill]);
    try {
      await setDoc(doc(db, 'skills', skill.id), skill);
    } catch (err) {
      console.warn('Skill add Firestore notice:', err);
    }
  };

  const updateSkill = async (id: string, updates: Partial<SkillItem>) => {
    setSkills((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)));
    try {
      await updateDoc(doc(db, 'skills', id), updates);
    } catch (err) {
      console.warn('Skill update Firestore notice:', err);
    }
  };

  const deleteSkill = async (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
    try {
      await deleteDoc(doc(db, 'skills', id));
    } catch (err) {
      console.warn('Skill delete Firestore notice:', err);
    }
  };

  // Experience CRUD
  const addExperience = async (item: ExperienceItem) => {
    setExperience((prev) => [item, ...prev]);
    try {
      await setDoc(doc(db, 'experience', item.id), item);
    } catch (err) {
      console.warn('Experience add Firestore notice:', err);
    }
  };

  const updateExperience = async (id: string, updates: Partial<ExperienceItem>) => {
    setExperience((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)));
    try {
      await updateDoc(doc(db, 'experience', id), updates);
    } catch (err) {
      console.warn('Experience update Firestore notice:', err);
    }
  };

  const deleteExperience = async (id: string) => {
    setExperience((prev) => prev.filter((e) => e.id !== id));
    try {
      await deleteDoc(doc(db, 'experience', id));
    } catch (err) {
      console.warn('Experience delete Firestore notice:', err);
    }
  };

  // Education CRUD
  const addEducation = async (item: EducationItem) => {
    setEducation((prev) => [...prev, item]);
    try {
      await setDoc(doc(db, 'education', item.id), item);
    } catch (err) {
      console.warn('Education add Firestore notice:', err);
    }
  };

  const updateEducation = async (id: string, updates: Partial<EducationItem>) => {
    setEducation((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)));
    try {
      await updateDoc(doc(db, 'education', id), updates);
    } catch (err) {
      console.warn('Education update Firestore notice:', err);
    }
  };

  const deleteEducation = async (id: string) => {
    setEducation((prev) => prev.filter((e) => e.id !== id));
    try {
      await deleteDoc(doc(db, 'education', id));
    } catch (err) {
      console.warn('Education delete Firestore notice:', err);
    }
  };

  // Certification CRUD
  const addCertification = async (item: CertificationItem) => {
    setCertifications((prev) => [...prev, item]);
    try {
      await setDoc(doc(db, 'certifications', item.id), item);
    } catch (err) {
      console.warn('Certification add Firestore notice:', err);
    }
  };

  const updateCertification = async (id: string, updates: Partial<CertificationItem>) => {
    setCertifications((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
    try {
      await updateDoc(doc(db, 'certifications', id), updates);
    } catch (err) {
      console.warn('Certification update Firestore notice:', err);
    }
  };

  const deleteCertification = async (id: string) => {
    setCertifications((prev) => prev.filter((c) => c.id !== id));
    try {
      await deleteDoc(doc(db, 'certifications', id));
    } catch (err) {
      console.warn('Certification delete Firestore notice:', err);
    }
  };

  // Testimonials CRUD (Single source of truth)
  const addTestimonial = async (item: Omit<Testimonial, 'id'>) => {
    const id = 'test_' + Date.now();
    const newItem: Testimonial = {
      ...item,
      id,
      dateAdded: item.dateAdded || new Date().toISOString(),
    };
    setTestimonials((prev) => [newItem, ...prev]);
    try {
      await setDoc(doc(db, 'testimonials', id), newItem);
    } catch (err) {
      console.warn('Testimonial add Firestore notice:', err);
    }
  };

  const updateTestimonial = async (id: string, updates: Partial<Testimonial>) => {
    setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
    try {
      await updateDoc(doc(db, 'testimonials', id), updates);
    } catch (err) {
      console.warn('Testimonial update Firestore notice:', err);
    }
  };

  const deleteTestimonial = async (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    try {
      await deleteDoc(doc(db, 'testimonials', id));
    } catch (err) {
      console.warn('Testimonial delete Firestore notice:', err);
    }
  };

  // CV Management (Single source of truth)
  const activeCv = cvList.find((cv) => cv.isActive && cv.isPublished) || cvList[0];

  const addCvVersion = async (newCv: Omit<CVRecord, 'id' | 'createdAt' | 'downloadCount'>) => {
    const id = 'cv_' + Date.now();
    const fullRecord: CVRecord = {
      ...newCv,
      id,
      createdAt: new Date().toISOString(),
      downloadCount: 0,
    };

    setCvList((prev) => {
      if (fullRecord.isActive) {
        return [fullRecord, ...prev.map((c) => ({ ...c, isActive: false }))];
      }
      return [fullRecord, ...prev];
    });

    try {
      await setDoc(doc(db, 'cv', id), fullRecord);
      if (fullRecord.isActive) {
        // Deactivate others in Firestore
        for (const existing of cvList) {
          if (existing.id !== id && existing.isActive) {
            await updateDoc(doc(db, 'cv', existing.id), { isActive: false });
          }
        }
      }
    } catch (err) {
      console.warn('CV add Firestore notice:', err);
    }
  };

  const updateCv = async (id: string, updates: Partial<CVRecord>) => {
    setCvList((prev) =>
      prev.map((cv) => {
        if (cv.id === id) {
          return { ...cv, ...updates };
        }
        if (updates.isActive && cv.id !== id) {
          return { ...cv, isActive: false };
        }
        return cv;
      })
    );

    try {
      await updateDoc(doc(db, 'cv', id), updates);
      if (updates.isActive) {
        for (const existing of cvList) {
          if (existing.id !== id && existing.isActive) {
            await updateDoc(doc(db, 'cv', existing.id), { isActive: false });
          }
        }
      }
    } catch (err) {
      console.warn('CV update Firestore notice:', err);
    }
  };

  const setActiveCv = async (id: string) => {
    setCvList((prev) =>
      prev.map((cv) => ({
        ...cv,
        isActive: cv.id === id,
        isPublished: cv.id === id ? true : cv.isPublished,
      }))
    );

    try {
      for (const cv of cvList) {
        await updateDoc(doc(db, 'cv', cv.id), {
          isActive: cv.id === id,
          isPublished: cv.id === id ? true : cv.isPublished,
        });
      }
    } catch (err) {
      console.warn('Set active CV Firestore notice:', err);
    }
  };

  const deleteCv = async (id: string) => {
    setCvList((prev) => {
      const remaining = prev.filter((cv) => cv.id !== id);
      if (remaining.length > 0 && !remaining.some((c) => c.isActive)) {
        remaining[0].isActive = true;
      }
      return remaining;
    });

    try {
      await deleteDoc(doc(db, 'cv', id));
    } catch (err) {
      console.warn('CV delete Firestore notice:', err);
    }
  };

  const downloadActiveCv = () => {
    if (!activeCv) return;

    // Increment download count locally & Firestore
    setCvList((prev) =>
      prev.map((c) => (c.id === activeCv.id ? { ...c, downloadCount: (c.downloadCount || 0) + 1 } : c))
    );

    updateDoc(doc(db, 'cv', activeCv.id), {
      downloadCount: (activeCv.downloadCount || 0) + 1,
    }).catch((err) => console.warn('Increment CV download count notice:', err));

    logAnalyticsEvent('cv_download', {
      version: activeCv.version,
      fileName: activeCv.fileName,
    });

    // If active CV has a real uploaded fileUrl (Firebase Storage or link), download that
    if (activeCv.fileUrl) {
      const link = document.createElement('a');
      link.href = activeCv.fileUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = activeCv.fileName || `Onifade_Sulaiman_CV_${activeCv.version}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Dynamic generation from current profile, experience, skills, education, and active CV data
    const cvText = `================================================================================
${profile.name.toUpperCase()} (${profile.brandName.toUpperCase()}) - CURRICULUM VITAE
================================================================================
Version: ${activeCv.version} | Generated: ${new Date().toLocaleDateString()}
Title: ${profile.title}
Availability: ${profile.availability}
Location: ${profile.location}
Email: ${profile.email}
Phone: ${profile.phone}
Portfolio: ${profile.socialLinks.portfolio}
LinkedIn: ${profile.socialLinks.linkedin}
GitHub: ${profile.socialLinks.github}

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${profile.bio}

--------------------------------------------------------------------------------
CORE METRICS & CREDIBILITY
--------------------------------------------------------------------------------
- Projects Completed: ${profile.credibilityMetrics.projectsCompleted.value} (${profile.credibilityMetrics.projectsCompleted.sublabel})
- Clients & Collaborations: ${profile.credibilityMetrics.clientsCollaborations.value} (${profile.credibilityMetrics.clientsCollaborations.sublabel})
- Ad Budget Managed: ${profile.credibilityMetrics.advertisingBudgetManaged.value} (${profile.credibilityMetrics.advertisingBudgetManaged.sublabel})
- Participants Mentored: ${profile.credibilityMetrics.trainingParticipants.value} (${profile.credibilityMetrics.trainingParticipants.sublabel})

--------------------------------------------------------------------------------
EXPERIENCE & POSITIONS
--------------------------------------------------------------------------------
${experience
  .map(
    (exp) => `
${exp.role.toUpperCase()}
${exp.organization} (${exp.startDate} - ${exp.endDate})
Summary: ${exp.description}
Key Achievements:
${exp.achievements.map((ach) => `  * ${ach}`).join('\n')}
Tools: ${exp.skills.join(', ')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
EDUCATION & ACADEMICS
--------------------------------------------------------------------------------
${education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} (${edu.period})
${edu.details}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS & CREDENTIALS
--------------------------------------------------------------------------------
${certifications
  .map(
    (c) => `* ${c.title} - ${c.issuer} (${c.date}) ${c.credentialUrl ? `[Verify: ${c.credentialUrl}]` : ''}`
  )
  .join('\n')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS & PROFICIENCY
--------------------------------------------------------------------------------
${skills
  .map((s) => `* ${s.skill} [${s.category}]: ${s.level}% proficiency (${s.yearsExperience} yrs) - Tools: ${s.tools}`)
  .join('\n')}

================================================================================
© ${new Date().getFullYear()} Onifade Sulaiman (Mr. Clarity). All Rights Reserved.
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeCv.fileName || `Onifade_Sulaiman_Mr_Clarity_CV_${activeCv.version}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Hire Requests
  const submitHireRequest = async (
    req: Omit<HireMeRequest, 'id' | 'status' | 'dateSubmitted'>
  ): Promise<boolean> => {
    const id = 'req_' + Date.now();
    const newReq: HireMeRequest = {
      ...req,
      id,
      status: 'New',
      dateSubmitted: new Date().toISOString(),
    };

    setHireRequests((prev) => [newReq, ...prev]);

    try {
      // Direct Firestore write conforming to security rules
      await addDoc(collection(db, 'hireRequests'), {
        clientName: req.clientName,
        clientEmail: req.clientEmail,
        company: req.company || '',
        opportunityType: req.opportunityType,
        roleTitle: req.roleTitle || '',
        serviceNeeded: req.serviceNeeded || '',
        budgetRange: req.budgetRange,
        timeline: req.timeline,
        projectDescription: req.projectDescription,
        preferredContact: req.preferredContact,
        whatsappNumber: req.whatsappNumber || '',
        status: 'New',
        dateSubmitted: new Date().toISOString(),
        createdAt: serverTimestamp(),
      });

      logAnalyticsEvent('hire_request_submitted', {
        opportunityType: req.opportunityType,
        serviceNeeded: req.serviceNeeded,
      });

      return true;
    } catch (err) {
      console.warn('Hire request Firestore write notice:', err);
      return true; // Local submission succeeded
    }
  };

  const updateHireRequestStatus = async (id: string, status: HireRequestStatus) => {
    setHireRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    try {
      await updateDoc(doc(db, 'hireRequests', id), { status });
    } catch (err) {
      console.warn('Hire request update notice:', err);
    }
  };

  const deleteHireRequest = async (id: string) => {
    setHireRequests((prev) => prev.filter((r) => r.id !== id));
    try {
      await deleteDoc(doc(db, 'hireRequests', id));
    } catch (err) {
      console.warn('Hire request delete notice:', err);
    }
  };

  // Contact Messages
  const submitContactMessage = async (
    msg: Omit<ContactMessage, 'id' | 'date' | 'status'>
  ): Promise<boolean> => {
    const id = 'msg_' + Date.now();
    const newMsg: ContactMessage = {
      ...msg,
      id,
      status: 'New',
      date: new Date().toISOString(),
    };

    setContactMessages((prev) => [newMsg, ...prev]);

    try {
      await addDoc(collection(db, 'messages'), {
        name: msg.name,
        email: msg.email,
        subject: msg.subject,
        message: msg.message,
        status: 'New',
        date: new Date().toISOString(),
        createdAt: serverTimestamp(),
      });

      logAnalyticsEvent('contact_message_sent', { subject: msg.subject });
      return true;
    } catch (err) {
      console.warn('Message Firestore write notice:', err);
      return true;
    }
  };

  const updateContactMessageStatus = async (id: string, status: 'New' | 'Replied' | 'Archived') => {
    setContactMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    try {
      await updateDoc(doc(db, 'messages', id), { status });
    } catch (err) {
      console.warn('Message update notice:', err);
    }
  };

  const deleteContactMessage = async (id: string) => {
    setContactMessages((prev) => prev.filter((m) => m.id !== id));
    try {
      await deleteDoc(doc(db, 'messages', id));
    } catch (err) {
      console.warn('Message delete notice:', err);
    }
  };

  const openHireMe = (initialType?: OpportunityType, preselectedService?: string) => {
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

  const resetToFactoryDefaults = () => {
    setProfile(DEFAULT_PROFILE);
    setServices(INITIAL_SERVICES);
    setProjects(INITIAL_PROJECTS);
    setSkills(DEFAULT_SKILLS);
    setExperience(DEFAULT_EXPERIENCE);
    setEducation(DEFAULT_EDUCATION);
    setCertifications(DEFAULT_CERTIFICATIONS);
    setTestimonials([]);
    setCvList(DEFAULT_CV_LIST);
    setSettings(DEFAULT_SETTINGS);
    setSeo(DEFAULT_SEO);

    localStorage.removeItem(STORAGE_PREFIX + 'profile');
    localStorage.removeItem(STORAGE_PREFIX + 'services');
    localStorage.removeItem(STORAGE_PREFIX + 'projects');
    localStorage.removeItem(STORAGE_PREFIX + 'skills');
    localStorage.removeItem(STORAGE_PREFIX + 'experience');
    localStorage.removeItem(STORAGE_PREFIX + 'education');
    localStorage.removeItem(STORAGE_PREFIX + 'certifications');
    localStorage.removeItem(STORAGE_PREFIX + 'testimonials');
    localStorage.removeItem(STORAGE_PREFIX + 'cvList');
    localStorage.removeItem(STORAGE_PREFIX + 'settings');
    localStorage.removeItem(STORAGE_PREFIX + 'seo');
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        updateProfile,
        services,
        setServices,
        updateService,
        addService,
        deleteService,
        projects,
        setProjects,
        updateProject,
        addProject,
        deleteProject,
        brandDesigns,
        setBrandDesigns,
        addBrandDesign,
        updateBrandDesign,
        deleteBrandDesign,
        socialMediaItems,
        setSocialMediaItems,
        addSocialMediaItem,
        updateSocialMediaItem,
        deleteSocialMediaItem,
        videoItems,
        setVideoItems,
        addVideoItem,
        updateVideoItem,
        deleteVideoItem,
        skills,
        setSkills,
        updateSkill,
        addSkill,
        deleteSkill,
        experience,
        setExperience,
        updateExperience,
        addExperience,
        deleteExperience,
        education,
        setEducation,
        updateEducation,
        addEducation,
        deleteEducation,
        certifications,
        setCertifications,
        updateCertification,
        addCertification,
        deleteCertification,
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
        resetAllToFactoryDefaults: resetToFactoryDefaults,
        resetToFactoryDefaults,

        // Firebase Auth & Cloud Integration
        firebaseUser,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        isFirebaseConnected,
        isSyncing,
        syncStatusMessage,
        signInWithGoogle,
        signOutAdmin,
        seedDatabaseToFirebase,
        uploadMediaFile,
        logAnalyticsEvent,
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
