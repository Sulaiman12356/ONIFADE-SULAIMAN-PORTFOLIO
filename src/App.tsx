import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilitySection } from './components/CredibilitySection';
import { MetricStats } from './components/MetricStats';
import { AboutMe } from './components/AboutMe';
import { ValueAddSection } from './components/ValueAddSection';
import { WhyHireMe } from './components/WhyHireMe';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResumeSection } from './components/ResumeSection';
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
        {/* 1. Hero Section (Electric Navy with Cyan Highlight & Lead Capture Card) */}
        <Hero
          onOpenHireMe={() => handleOpenHireMe()}
          onOpenCv={handleOpenCv}
          onDownloadCv={handleDownloadCv}
        />

        {/* 2. Credibility Section: Built Across Technology, Creativity & Digital Growth */}
        <CredibilitySection />

        {/* 3. Premium Navy-Blue Metrics Section (Editable via Admin Dashboard, verified only) */}
        <MetricStats />

        {/* 4. About Me Section: "Who I Am" with Profile Image & 9 Highlight Domains */}
        <AboutMe
          onOpenCv={handleOpenCv}
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 5. How I Can Add Value to Your Organization (6 Premium Cards with Exact Capabilities) */}
        <ValueAddSection
          onSelectService={(serviceName) => handleOpenHireMe(serviceName)}
        />

        {/* 6. Why Hire Me / The Value I Bring (4 Value Pillars) */}
        <WhyHireMe />

        {/* 7. Tools & Technical Competencies */}
        <SkillsSection />

        {/* 8. Featured Projects & Case Studies */}
        <ProjectsSection
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenHireMe={() => handleOpenHireMe()}
        />

        {/* 9. Client Reviews & Social Proof */}
        <TestimonialsSection />

        {/* 10. Resume / CV Section with Document Preview */}
        <ResumeSection
          onOpenCv={handleOpenCv}
          onDownloadCv={handleDownloadCv}
        />

        {/* 11. Final Callout Banner with Arrow CTA */}
        <CtaBanner
          onOpenHireMe={() => handleOpenHireMe()}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => {
          closeHireMe();
          setSelectedService('');
        }}
        preselectedService={selectedService || hireMeInitialData.service}
      />

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

      {/* Comprehensive Admin Management Portal */}
      <AdminPortal />
    </div>
  );
}
