import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Exports a DOM element as a crisp, multi-page or single-page A4 PDF.
 */
export const exportCvAsPdf = async (
  elementId = 'cv-document-render',
  filename = 'Onifade_Sulaiman_CV.pdf'
): Promise<boolean> => {
  // Check modal or offscreen or fallback element
  let element = document.getElementById(elementId);
  if (!element) {
    element = document.getElementById('cv-document-modal-render') ||
              document.getElementById('cv-document-render-offscreen') ||
              document.getElementById('cv-document-render');
  }

  if (!element) {
    console.warn(`Element for PDF export not found (tried #${elementId}). Falling back to text CV.`);
    downloadCvFile();
    return false;
  }

  try {
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 2, // 2x for sharp print quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth || 1000,
    });

    window.scrollTo(0, originalScrollY);

    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Failed to export CV as PDF:', error);
    downloadCvFile();
    return false;
  }
};

/**
 * Exports a DOM element as a high-resolution PNG image for instant sharing.
 */
export const exportCvAsImage = async (
  elementId = 'cv-document-render',
  filename = 'Onifade_Sulaiman_CV.png'
): Promise<boolean> => {
  let element = document.getElementById(elementId);
  if (!element) {
    element = document.getElementById('cv-document-modal-render') ||
              document.getElementById('cv-document-render-offscreen') ||
              document.getElementById('cv-document-render');
  }

  if (!element) {
    console.warn(`Element for Image export not found (tried #${elementId}). Falling back to text CV.`);
    downloadCvFile();
    return false;
  }

  try {
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 2, // crisp high resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth || 1000,
    });

    window.scrollTo(0, originalScrollY);

    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Failed to export CV as Image:', error);
    downloadCvFile();
    return false;
  }
};

/**
 * Standard plain text ATS-friendly CV download fallback.
 */
export const downloadCvFile = (customContent?: any, filename = 'Onifade_Sulaiman_CV.txt') => {
  const name = customContent?.fullName || PERSONAL_INFO.name;
  const brand = customContent?.brandName || PERSONAL_INFO.brandName;
  const title = customContent?.professionalTitle || PERSONAL_INFO.title;
  const email = customContent?.email || PERSONAL_INFO.email;
  const phone = customContent?.phone || PERSONAL_INFO.phone;
  const location = customContent?.location || PERSONAL_INFO.location;
  const summary = customContent?.summary || `${PERSONAL_INFO.primaryStatement} ${PERSONAL_INFO.secondaryStatement}`;
  const philosophy = customContent?.philosophy || 'Clarity in the message. Clarity in the design. Clarity in the strategy. Clarity in the customer journey.';

  const content = `================================================================================
${name.toUpperCase()} (${brand.toUpperCase()}) - CURRICULUM VITAE
================================================================================
NAME:
${name} (${brand})

PROFESSIONAL TITLE:
${title}

EMAIL:
${email}

PHONE:
${phone}

LOCATION:
${location}

AVAILABILITY:
Full-Time, Contract, Freelance, Remote, Consulting, Collaboration

================================================================================
PROFESSIONAL SUMMARY
================================================================================
${summary}

================================================================================
ACHIEVEMENTS & VERIFIED METRICS
================================================================================
• ₦500K+ Meta Ads Spend Managed
• 30+ Projects Completed
• 20+ Clients Served
• 3+ Years Experience

================================================================================
CORE SKILLS & PLATFORMS
================================================================================
• Meta Ads (Facebook & Instagram Ads)
• TikTok Ads
• Digital Marketing Strategy
• Lead Generation & Marketing Funnels
• Conversion-Focused Landing Pages
• Brand Design & Visual Identity (Canva)
• Short-Form Video Editing (CapCut)
• AI Automation & AI Workflows (ChatGPT, Claude, n8n)
• Web Development (React, JavaScript, HTML5, CSS3, Firebase)

================================================================================
EDUCATION
================================================================================
B.Sc. Computer Science
Olabisi Onabanjo University

================================================================================
PHILOSOPHY & APPROACH
================================================================================
"${philosophy}"

================================================================================
CONTACT & COLLABORATION
================================================================================
Phone: ${phone}
Email: ${email}
Portfolio: https://onifadesulaiman.dev
================================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
