import { PERSONAL_INFO } from '../data/portfolioData';

export const downloadCvFile = () => {
  const content = `================================================================================
ONIFADE SULAIMAN - CURRICULUM VITAE
================================================================================
NAME:
Onifade Sulaiman (Mr. Clarity)

PROFESSIONAL TITLE:
Digital Marketer and Digital Solutions Specialist

EMAIL:
${PERSONAL_INFO.email}

PHONE:
${PERSONAL_INFO.phone}

LOCATION:
${PERSONAL_INFO.location}

AVAILABILITY:
Full-Time, Contract, Freelance, Remote, Consulting, Collaboration

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Digital Marketing professional with practical experience in Meta Ads, social media marketing, landing page design, branding, content design, AI automation and digital development. I help businesses improve their online presence, attract potential customers and create better digital experiences.

================================================================================
ACHIEVEMENTS & VERIFIED METRICS
================================================================================
• ₦500K+ Meta Ads Spend Managed
• 30+ Projects Completed
• 20+ Clients Served
• 3+ Years Experience

================================================================================
CORE SKILLS
================================================================================
• Meta Ads
• Facebook Ads
• Instagram Ads
• TikTok Ads
• Digital Marketing
• Lead Generation
• Landing Page Design
• Marketing Funnels
• Social Media Management
• Brand Design
• Canva Design
• CapCut Video Editing
• AI Tools
• AI Automation
• AI Workflow Design
• Website Design
• AI Website Development
• Web Applications
• Firebase
• Content Creation
• Marketing Strategy

================================================================================
EDUCATION
================================================================================
B.Sc. Computer Science
Olabisi Onabanjo University

================================================================================
PHILOSOPHY & APPROACH
================================================================================
Clarity in the message. Clarity in the design. Clarity in the strategy. Clarity in the customer journey. Clarity in what happens next.

================================================================================
CONTACT & COLLABORATION
================================================================================
Phone: +234 805 178 0169
Email: ipesolasulaiman@gmail.com
Portfolio: Onifade Sulaiman (Mr. Clarity)
================================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Onifade_Sulaiman_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

