export type ProjectCategory =
  | 'ALL'
  | 'META ADS'
  | 'LANDING PAGES'
  | 'BRANDING'
  | 'SOCIAL MEDIA'
  | 'AI & AUTOMATION'
  | 'WEB DEVELOPMENT'
  | 'VIDEO'
  | 'Marketing'
  | 'Design'
  | string;

export interface MetaAdsDetails {
  campaignObjective: string;
  industry: string;
  targetAudience: string;
  campaignStrategy: string;
  creativeStrategy: string;
  adSetup: string;
  funnelDetails: string;
  trackingSetup: string;
  optimizationStrategy: string;
  metrics?: {
    reach?: string;
    impressions?: string;
    ctr?: string;
    cpc?: string;
    leads?: string;
    cpl?: string;
    conversions?: string;
    roas?: string;
  };
  isVerifiedResults: boolean;
  verifiedBadgeText?: string;
  workCompletedNotes?: string;
}

export interface LandingPageDetails {
  desktopScreenshot: string;
  mobileScreenshot: string;
  businessObjective: string;
  designStrategy: string;
  conversionStrategy: string;
  ctaText: string;
  leadCapture: string;
  metaAdsIntegration: string;
  tracking: string;
  mobileOptimization: string;
  aiWorkflowUsed: string;
  liveUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  thumbnail: string;
  metricHighlight: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  deliverables: string[];
  featured?: boolean;
  order?: number;
  isPublished?: boolean;
  shortDescription?: string;
  outcome?: string;
  isVerifiedResults?: boolean;
  verifiedResults?: boolean;
  hasVerifiedMetrics?: boolean;
  workCompleted?: string;
  workCompletedDescription?: string;
  metaAdsDetails?: any;
  landingPageDetails?: any;
  liveUrl?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: string;
  metrics?: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
  thumbnail?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  fileType: string;
  size?: number;
  uploadedAt: string;
  category?: 'image' | 'video' | 'document' | 'other';
}

export interface BrandDesignItem {
  id: string;
  title: string;
  category: 'Logos' | 'Flyers' | 'Social media graphics' | 'Brand identities' | 'Marketing materials' | 'Campaign designs' | 'Presentations' | string;
  imageUrl: string;
  description?: string;
  client?: string;
  tools?: string[];
  year?: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface SocialMediaWorkItem {
  id: string;
  title: string;
  platform: 'Instagram' | 'Facebook' | 'TikTok' | string;
  category: 'Instagram' | 'Facebook' | 'TikTok' | 'Branding' | 'Campaigns' | 'Content' | string;
  imageUrl: string;
  videoUrl?: string;
  description?: string;
  caption?: string;
  metrics?: string;
  postType?: 'Post' | 'Reel' | 'Story' | 'Carousel' | 'Ad Creative' | 'Calendar';
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface VideoContentItem {
  id: string;
  title: string;
  category: 'Short-form videos' | 'Reels' | 'TikTok videos' | 'Promotional videos' | 'Social media videos' | 'Marketing content' | string;
  platform: 'TikTok' | 'Instagram' | 'Facebook' | 'YouTube Shorts' | 'Meta Ads' | string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  projectUrl?: string;
  primaryTool: string;
  duration?: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  outcome: string;
  category?: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  organization?: string;
  quote: string;
  photoUrl?: string;
  photo?: string;
  rating: number;
  permissionStatus?: 'granted' | 'pending' | 'hidden';
  isFeatured?: boolean;
  dateAdded?: string;
  role?: string;
  company?: string;
  highlightMetric?: string;
  testimonial?: string;
  published?: boolean;
  isPublished?: boolean;
}

export interface SkillItem {
  id: string;
  skill: string;
  category: string;
  level: number;
  yearsExperience: string;
  tools: string;
  featured: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconBg: string;
  iconColor: string;
  tag: string;
}

export interface CVRecord {
  id: string;
  title: string;
  version: string;
  date: string;
  fileUrl?: string;
  fileName: string;
  previewUrl?: string;
  summary?: string;
  isActive: boolean;
  isPublished: boolean;
  downloadCount: number;
  createdAt: string;
  fileType?: 'pdf' | 'docx' | 'txt';
  textContent?: string;
}

export type OpportunityType =
  | 'Meta Ads Management'
  | 'Facebook Ads'
  | 'Instagram Ads'
  | 'TikTok Ads'
  | 'Landing Page'
  | 'Website Development'
  | 'Brand Design'
  | 'Social Media Management'
  | 'AI Automation'
  | 'Video Editing'
  | 'Digital Marketing Strategy'
  | 'Full-Time'
  | 'Contract'
  | 'Freelance'
  | 'Consulting'
  | 'Collaboration'
  | 'Other';

export type HireRequestStatus =
  | 'New'
  | 'Contacted'
  | 'In Progress'
  | 'Completed'
  | 'Closed'
  | string;

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
  isPublished: boolean;
}

export interface AboutSectionItem {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle?: string;
  content: string;
  quote?: string;
  highlights?: string[];
  order: number;
  isPublished: boolean;
}

export interface HireMeRequest {
  id: string;
  fullName: string;
  name?: string;
  email: string;
  phone: string;
  company?: string;
  jobTitle?: string;
  opportunityType: OpportunityType | string;
  adsBudgetNaira?: string;
  adsBudgetUSD?: string;
  budgetRange?: string;
  description?: string;
  expectedStartDate?: string;
  portfolioUrl?: string;
  additionalMessage?: string;
  status: HireRequestStatus;
  createdAt?: string;
  dateSubmitted: string;
  notes?: string;
  roleTitle?: string;
  serviceNeeded?: string;
  clientName?: string;
  clientEmail?: string;
  timeline?: string;
  projectDescription?: string;
  preferredContact?: string;
  whatsappNumber?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  date: string;
  status: 'New' | 'Replied' | 'Archived';
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  whatsapp: string;
  tiktok: string;
  facebook: string;
  twitter?: string;
  portfolio?: string;
  email?: string;
  phone?: string;
}

export interface CredibilityMetricItem {
  value: string;
  label: string;
  sublabel: string;
  verified: boolean;
}

export interface CredibilityMetrics {
  projectsCompleted: CredibilityMetricItem;
  clientsCollaborations: CredibilityMetricItem;
  organizationsSupported: CredibilityMetricItem;
  yearsExperience: CredibilityMetricItem;
  advertisingBudgetManaged: CredibilityMetricItem;
  trainingParticipants: CredibilityMetricItem;
}

export interface ProfileData {
  name: string;
  brandName: string;
  title: string;
  headline: string;
  bio: string;
  profilePhoto: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: SocialLinks;
  credibilityMetrics: CredibilityMetrics;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  skills: string[];
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  featured?: boolean;
  isPublished?: boolean;
  order?: number;
}

export interface WebsiteSettings {
  websiteTitle: string;
  metaDescription: string;
  favicon?: string;
  logoText: string;
  theme: string;
  primaryColor: string;
  availabilityStatus: string;
  allowPublicHireRequests: boolean;
}

export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string | string[];
  ogImage?: string;
}

