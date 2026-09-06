export interface Project {
  id: string;
  title: string;
  category: 'Marketing' | 'Design' | 'Data' | 'Branding';
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
  | 'Full-Time'
  | 'Part-Time'
  | 'Contract'
  | 'Freelance'
  | 'Consulting'
  | 'Internship'
  | 'Collaboration'
  | 'Speaking/Training'
  | 'Other';

export type HireRequestStatus =
  | 'New'
  | 'In review'
  | 'Contacted'
  | 'Interview'
  | 'Closed'
  | 'Rejected';

export interface HireMeRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  opportunityType: OpportunityType;
  budgetRange: string;
  description: string;
  expectedStartDate: string;
  portfolioUrl: string;
  additionalMessage: string;
  status: HireRequestStatus;
  dateSubmitted: string;
  notes?: string;
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
  twitter: string;
  portfolio: string;
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
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
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
  keywords: string;
  ogImage?: string;
}

