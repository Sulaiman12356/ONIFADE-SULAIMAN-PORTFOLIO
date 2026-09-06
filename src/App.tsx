import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilitySection } from './components/CredibilitySection';
import { MetricStats } from './components/MetricStats';
import { AboutMe } from './components/AboutMe';
import { ServicesSection } from './components/ServicesSection';
import { WhyHireMe } from './components/WhyHireMe';
import { HowIWorkSection } from './components/HowIWorkSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BrandDesignSection } from './components/BrandDesignSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { AiAutomationSection } from './components/AiAutomationSection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { HireMeModal } from './components/HireMeModal';
import { CvModal } from './components/CvModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AdminPortal } from './components/admin/AdminPortal';
import { Project } from './types';
import { usePortfolio } from './context/PortfolioContext';

export default function App() {
  const { downloadActiveCv, isHireMeOpen, openHireMe, closeHireMe, hireMeInitialData } = usePortfolio();
  const [selectedService, setSelectedService] = useState<string>('');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenHireMe = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    openHireMe(undefined, serviceName);
  };

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleDownloadCv = () => {
    downloadActiveCv();
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A] font-sans antialiased selection:bg-[#0B5ED7] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenHireMe={() => handleOpenHireMe()}
        onOpenCv={handleOpenCv}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section (Conversion-focused hero with Portrait & Primary CTAs) */}
        <Hero
          onOpenHireMe={() => handleOpenHireMe()}
          onOpenCv={handleOpenCv}
          onDownloadCv={handleDownloadCv}
        />

        {/* 2. Tool & Trust Strip immediately below Hero: "TOOLS & PLATFORMS I WORK WITH" */}
        <CredibilitySection />

        {/* 3. Key Growth & Performance Metrics Strip */}
        <MetricStats />

        {/* 4. About Me: "Who I Am" (Digital Marketer, Meta Ads Specialist & AI Solutions) */}
        <AboutMe
          onOpenCv={handleOpenCv}
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 5. What I Do: "Digital Solutions Built Around Growth" (6 Service Cards) */}
        <ServicesSection
          onOpenHireMe={(serviceName) => handleOpenHireMe(serviceName)}
        />

        {/* 6. Why Hire Me?: "More Than a Marketer. A Digital Problem Solver." */}
        <WhyHireMe />

        {/* 7. HOW I WORK: 6-Stage Methodology (Discover, Strategize, Build, Launch, Optimize, Scale) */}
        <HowIWorkSection
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 8. My Digital Marketing Expertise (Skill Domains) */}
        <SkillsSection />

        {/* 9. SELECTED WORK: Real projects, campaigns, designs and digital solutions */}
        <ProjectsSection
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 10. BRAND DESIGN: Strategic brand identities, logos, flyers, marketing assets */}
        <BrandDesignSection
          onOpenHireMe={() => handleOpenHireMe('Brand Identity & Graphic Design')}
        />

        {/* 11. SOCIAL MEDIA WORK: Content designs, reels, TikTok, campaign creatives */}
        <SocialMediaSection
          onOpenHireMe={() => handleOpenHireMe('Social Media Growth & Content')}
        />

        {/* 12. AI & AUTOMATION: Practical business technology and workflow pipelines */}
        <AiAutomationSection
          onOpenHireMe={() => handleOpenHireMe('AI Business Solutions & Automation')}
        />

        {/* 13. VIDEO & CONTENT: Short-form videos, reels, promotional videos with CapCut focus */}
        <VideoGallerySection
          onOpenHireMe={() => handleOpenHireMe('Direct-Response Video Creatives')}
        />

        {/* 14. Professional Experience & Growth Milestones */}
        <ExperienceSection
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 15. Client Proof & Testimonials */}
        <TestimonialsSection />

        {/* 16. MY CV: "Interested in Working With Me?" with DOWNLOAD CV ↓ and VIEW CV ONLINE */}
        <ResumeSection
          onOpenCv={handleOpenCv}
          onDownloadCv={handleDownloadCv}
        />

        {/* 17. LET'S WORK TOGETHER: Contact channels and fast inquiry form */}
        <ContactSection
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 18. Final High-Conversion Action Banner */}
        <CtaBanner
          onOpenHireMe={() => handleOpenHireMe()}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HireMeModal />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onDownloadCv={handleDownloadCv}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHireMe={() => {
          setSelectedProject(null);
          handleOpenHireMe();
        }}
      />

      {/* Admin Management Portal */}
      <AdminPortal />
    </div>
  );
}
