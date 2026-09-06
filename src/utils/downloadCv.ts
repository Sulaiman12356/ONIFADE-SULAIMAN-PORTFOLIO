import { PERSONAL_INFO, RESUME_DATA } from '../data/portfolioData';

export const downloadCvFile = () => {
  const content = `================================================================================
ONIFADE SULAIMAN (MR. CLARITY) - CURRICULUM VITAE
================================================================================
Professional Brand: Mr. Clarity
Positioning: Digital Marketer | Graphics Designer | Data Enthusiast | Tech Innovator
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Availability: Full-time • Part-time • Freelance • Remote (Worldwide)

--------------------------------------------------------------------------------
EXECUTIVE SUMMARY
--------------------------------------------------------------------------------
${RESUME_DATA.summary}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
Degree: B.Sc. Computer Science (400 Level)
Institution: Olabisi Onabanjo University (OOU)
Timeline: 2024 - Present
Core Areas: Data Structures, Database Systems (SQL), Software Engineering, Web Technologies

--------------------------------------------------------------------------------
KEY IMPACT METRICS
--------------------------------------------------------------------------------
• 3+ Years of Verified Experience in Digital Marketing, Design & Data
• 50+ Projects Successfully Completed
• 20+ Happy Corporate & SME Clients
• $500K+ Ad Spend Managed (Meta & TikTok Ads) with 4.8x average ROAS
• 500+ Students & Professionals Trained at Clarity Digital Academy

--------------------------------------------------------------------------------
PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
1. Lead Digital Strategist & Founder | Clarity Digital Academy & Consulting
   Period: 2022 - Present
   Key Responsibilities & Achievements:
   - Trained over 500 students and professionals in Canva graphic design, visual branding, and digital monetization.
   - Built, optimized, and scaled paid advertising campaigns across Facebook, Instagram, and TikTok with over $500,000 ad spend managed.
   - Designed comprehensive brand identities, promotional assets, and corporate presentations.
   - Automated client reporting workflows and dashboard metrics, increasing operational efficiency.

2. Digital Marketing & Design Consultant | Freelance & Agency Collaborations
   Period: 2024 - Present
   Key Responsibilities & Achievements:
   - Partnered with 20+ clients across e-commerce, fintech, and retail to lower Customer Acquisition Cost (CAC) by up to 41%.
   - Built Power BI and Excel interactive dashboards for multi-store retail intelligence and inventory tracking.
   - Designed high-converting social media carousels, flyer systems, and sales funnels.

--------------------------------------------------------------------------------
TECHNICAL & FUNCTIONAL PROFICIENCIES
--------------------------------------------------------------------------------
• Digital Marketing: Meta Ads Manager (Facebook/Instagram), TikTok Ads, Google Analytics 4, Pixel & CAPI tracking, Audience Segmentation.
• Graphic Design: Canva Pro Master, Adobe Photoshop, Adobe Illustrator, Figma, Brand Identity Systems, Presentation Decks.
• Data & Analytics: Microsoft Power BI, Advanced Excel (DAX, Power Query), SQL (PostgreSQL, MySQL), Python (Data Analysis).
• AI & Automation: Zapier, Make.com, Prompt Engineering (Claude, GPT, Gemini), Notion Systems, Workflow Optimization.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• Meta Certified Digital Marketing Associate
• Advanced Canva Design & Visual Identity Specialist
• AI Workflow Automation & Prompt Engineering Fundamentals

================================================================================
Verified & Updated: 2025/2026
Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
================================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Onifade_Sulaiman_Mr_Clarity_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
