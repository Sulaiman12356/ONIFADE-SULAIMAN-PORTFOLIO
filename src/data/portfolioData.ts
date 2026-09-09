import { Project, Service, Testimonial, ToolItem, BrandDesignItem, SocialMediaWorkItem, VideoContentItem, FAQItem, AboutSectionItem } from '../types';
import portraitImg from '../assets/images/sulaiman.jpg';
import aboutImg from '../assets/images/sulaiman.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_1788655646475.jpg';
import canvaImg from '../assets/images/project_canva_1788655660203.jpg';
import dashboardImg from '../assets/images/project_dashboard_1788655677623.jpg';

export const PERSONAL_INFO = {
  name: 'Onifade Sulaiman',
  brandName: 'Mr. Clarity',
  title: 'Digital Marketer | Meta Ads Specialist | AI Landing Page Designer | Brand Designer | Social Media Manager | AI Automation Specialist | AI Software Developer | CapCut Video Editor',
  primaryPositioning: 'Digital Marketer | Meta Ads Specialist | AI Landing Page Designer | Brand Designer | Social Media Manager | AI Automation Specialist | AI Software Developer | CapCut Video Editor',
  heroEyebrow: 'DIGITAL MARKETING, META ADS AND DIGITAL SOLUTIONS',
  primaryStatement: 'I help businesses grow using Digital Marketing, Meta Ads, AI, Branding, Landing Pages, Social Media and Automation.',
  secondaryStatement: 'I help businesses attract the right audience, generate leads and build a stronger online presence through practical digital marketing and creative digital solutions.',
  impactStatement: 'From multi-channel ad campaigns to conversion-focused landing pages and automated workflows, I deliver measurable growth and positive ROI.',
  email: 'ipesolasulaiman@gmail.com',
  phone: '+234 805 178 0169',
  location: 'Lagos & Ogun State, Nigeria',
  globalAvailability: 'Available Worldwide (Remote, Contract & Consulting)',
  availabilityStatus: 'AVAILABLE FOR SELECTED PROJECTS',
  workTypes: ['Full-time', 'Part-time', 'Freelance', 'Remote Consulting'],
  yearsExperience: '2+',
  projectsCompleted: '30+',
  happyClients: '20+',
  adSpendManaged: '₦500K+',
  averageRoas: '4.5x',
  studentsTrained: '200+',

  portraitImage: portraitImg,
  aboutImage: aboutImg,
};

export const METRIC_STATS = [
  {
    id: 'adspend',
    value: '₦500K+',
    label: 'Meta Ads Spend Managed',
    subtext: 'High-converting acquisition campaigns',
  },
  {
    id: 'projects',
    value: '30+',
    label: 'Projects Completed',
    subtext: 'Delivered for growing businesses',
  },
  {
    id: 'clients',
    value: '20+',
    label: 'Clients Served',
    subtext: 'Founders, agencies and businesses',
  },
  {
    id: 'experience',
    value: '2+',
    label: 'Years of Experience',
    subtext: 'Practical digital marketing and design',
  },
];

export const TRUSTED_BRANDS = [
  { name: 'Meta Ads', category: 'Facebook & Instagram' },
  { name: 'TikTok Ads', category: 'Viral & Paid Growth' },
  { name: 'Canva Pro', category: 'Visual Brand Design' },
  { name: 'OpenAI & Claude', category: 'AI & Automation' },
  { name: 'Figma', category: 'Landing Page UI/UX' },
  { name: 'Firebase', category: 'Cloud Database & Auth' },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Revenue & ROI Focused',
    description: 'Every ad campaign, creative asset, and landing page is engineered for conversion, customer acquisition, and measurable financial return.',
    icon: 'TrendingUp',
  },
  {
    title: 'High-Converting Visuals',
    description: 'Distinctive, scroll-stopping design that communicates clarity, builds immediate trust, and turns passive browsers into paying customers.',
    icon: 'Sparkles',
  },
  {
    title: 'AI Speed & Automation',
    description: 'Leveraging modern AI and automated workflows to accelerate delivery, qualify leads instantly, and reduce operational overhead.',
    icon: 'Cpu',
  },
  {
    title: 'Reliable & Collaborative',
    description: 'Transparent communication, regular performance updates, strict deadlines, and a proactive commercial growth mindset.',
    icon: 'ShieldCheck',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'meta-ads-management',
    title: 'Meta Ads Management',
    iconName: 'Target',
    description: 'I help businesses plan, launch and improve Meta advertising campaigns designed to reach the right audience and generate meaningful opportunities.',
    deliverables: [
      'Facebook Ads',
      'Instagram Ads',
      'Audience Targeting',
      'Lead Generation',
      'Campaign Setup',
      'Campaign Optimization',
      'Retargeting',
    ],
    targetAudience: 'Businesses, startups, and service providers looking to reach customers and generate profitable leads.',
    outcome: 'Optimized Meta ad campaigns that consistently convert audiences into qualified leads and sales.',
  },
  {
    id: 'landing-page-design',
    title: 'Landing Page Design',
    iconName: 'Layout',
    description: 'I create clean and focused landing pages that guide visitors toward a clear action such as sending a message, making an enquiry or submitting their details.',
    deliverables: [
      'Landing Pages',
      'Lead Capture Pages',
      'Business Websites',
      'Conversion Focused Pages',
      'WhatsApp Integration',
      'Meta Pixel Integration',
    ],
    targetAudience: 'Founders, coaches, and businesses running ads that need high-converting, mobile-friendly landing pages.',
    outcome: 'Clear landing pages that increase conversion rates and guide visitors to take immediate action.',
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    iconName: 'Palette',
    description: 'I create professional visual designs that help businesses look consistent, trustworthy and memorable.',
    deliverables: [
      'Logo Design',
      'Brand Identity',
      'Flyers',
      'Social Media Designs',
      'Marketing Materials',
    ],
    targetAudience: 'Brands and entrepreneurs who want a clean, recognizable visual identity across digital and physical touchpoints.',
    outcome: 'A cohesive, professional brand identity that commands respect and builds instant trust with prospective clients.',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    iconName: 'Share2',
    description: 'I help businesses maintain a professional social media presence with useful content, consistent branding and a clear content direction.',
    deliverables: [
      'Content Planning',
      'Social Media Strategy',
      'Content Creation',
      'Post Design',
      'Community Management',
      'Page Management',
    ],
    targetAudience: 'Businesses and personal brands wanting consistent, engaging social media presence without daily hassle.',
    outcome: 'Consistent, relevant content that builds audience trust, engagement, and inbound inquiries.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    iconName: 'Cpu',
    description: 'I use practical AI tools and automation to reduce repetitive work and improve business workflows.',
    deliverables: [
      'Marketing Automation',
      'Lead Workflows',
      'Content Workflows',
      'Business Automation',
      'AI Productivity Systems',
    ],
    targetAudience: 'Growing businesses looking to automate lead routing, follow-ups, and repetitive marketing processes.',
    outcome: 'Instant lead handling, reduced operational overhead, and streamlined day-to-day business operations.',
  },
  {
    id: 'ai-software-web-dev',
    title: 'AI Software and Website Development',
    iconName: 'Code2',
    description: 'I build practical websites and digital systems that solve real business problems.',
    deliverables: [
      'Business Websites',
      'Web Applications',
      'Landing Pages',
      'Digital Platforms',
      'AI Powered Web Solutions',
    ],
    targetAudience: 'Companies and startups needing modern, fast, and responsive digital web solutions with database capabilities.',
    outcome: 'High-performance web applications and business platforms that run smoothly across all devices.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    iconName: 'Video',
    description: 'I edit short form videos designed for social media, marketing campaigns and business promotion.',
    deliverables: [
      'CapCut Editing',
      'Reels',
      'Short Form Videos',
      'Promotional Videos',
      'Social Media Videos',
    ],
    targetAudience: 'Creators and businesses needing scroll-stopping, subtitled short-form video content for social platforms and paid ads.',
    outcome: 'Engaging, fast-paced video edits with clear hooks and subtitles that capture attention.',
  },
];

export const TOOLS_LIST: ToolItem[] = [
  { name: 'Meta Ads', category: 'Marketing', iconBg: 'bg-blue-50', iconColor: 'text-[#0B5ED7]', tag: 'Facebook & Instagram' },
  { name: 'Facebook', category: 'Social Media', iconBg: 'bg-blue-50', iconColor: 'text-[#1877F2]', tag: 'Social Platform' },
  { name: 'Instagram', category: 'Social Media', iconBg: 'bg-pink-50', iconColor: 'text-[#E4405F]', tag: 'Visual Social' },
  { name: 'TikTok', category: 'Social Media', iconBg: 'bg-slate-50', iconColor: 'text-slate-900', tag: 'Short Video' },
  { name: 'Canva', category: 'Design', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600', tag: 'Brand Design' },
  { name: 'CapCut', category: 'Video', iconBg: 'bg-slate-100', iconColor: 'text-slate-900', tag: 'Video Editing' },
  { name: 'WhatsApp', category: 'Messaging', iconBg: 'bg-green-50', iconColor: 'text-green-600', tag: 'Client Comms' },
  { name: 'ChatGPT', category: 'AI', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700', tag: 'AI Strategy' },
  { name: 'Claude', category: 'AI', iconBg: 'bg-amber-50', iconColor: 'text-amber-800', tag: 'AI Workflows' },
  { name: 'Firebase', category: 'Backend', iconBg: 'bg-yellow-50', iconColor: 'text-amber-600', tag: 'Database & Auth' },
  { name: 'Google', category: 'Analytics', iconBg: 'bg-red-50', iconColor: 'text-red-600', tag: 'Analytics & Tools' },
  { name: 'GitHub', category: 'Development', iconBg: 'bg-slate-100', iconColor: 'text-slate-900', tag: 'Code Repository' },
  { name: 'LinkedIn', category: 'Professional', iconBg: 'bg-blue-50', iconColor: 'text-[#0A66C2]', tag: 'Professional Network' },
];

export const SKILL_PERCENTAGES = [
  { name: 'Meta Ads & Paid Acquisition (Facebook/Instagram)', percentage: 96 },
  { name: 'AI Landing Page Design & CRO Funnels', percentage: 92 },
  { name: 'Brand Identity & Visual Design (Canva/Figma)', percentage: 94 },
  { name: 'TikTok Advertising & Motion Video Creatives', percentage: 90 },
  { name: 'AI Automations, Zapier & CRM Workflows', percentage: 88 },
  { name: 'AI-Powered Web & Software Development', percentage: 85 },
];

export const BEYOND_SKILLS = [
  'Direct-Response Marketing Psychology',
  'Commercial Acumen & ROI Obsession',
  'Rapid Creative Iteration & Testing',
  'Clear, Professional Executive Communication',
  'End-to-End Campaign Project Management',
  'Training & Mentorship Capabilities (500+ Alumni)',
];

export const HOW_I_WORK_STEPS = [
  {
    step: 'STEP 01',
    title: 'DISCOVER',
    description: 'Understand the business, audience, product and objectives.',
    iconName: 'Search',
    focusArea: 'Audience Research & Unit Economics',
  },
  {
    step: 'STEP 02',
    title: 'STRATEGIZE',
    description: 'Develop the marketing, creative or digital strategy.',
    iconName: 'Compass',
    focusArea: 'Offer Positioning & Funnel Architecture',
  },
  {
    step: 'STEP 03',
    title: 'BUILD',
    description: 'Create the campaign, landing page, brand assets, content or digital system.',
    iconName: 'Layers',
    focusArea: 'High-Converting Creatives & Tech Systems',
  },
  {
    step: 'STEP 04',
    title: 'LAUNCH',
    description: 'Deploy the campaign, website or digital solution.',
    iconName: 'Rocket',
    focusArea: 'Pixel Setup, CAPI & Live Traffic Testing',
  },
  {
    step: 'STEP 05',
    title: 'OPTIMIZE',
    description: 'Review performance and improve what is working.',
    iconName: 'TrendingUp',
    focusArea: 'A/B Testing, Creative Testing & Conversion Rate Lift',
  },
  {
    step: 'STEP 06',
    title: 'SCALE',
    description: 'Scale successful campaigns, systems and strategies where appropriate.',
    iconName: 'BarChart3',
    focusArea: 'Budget Scaling, Retargeting & Omnichannel Expansion',
  },
];

export const PROJECTS: Project[] = [];

export const BRAND_DESIGNS: BrandDesignItem[] = [];

export const SOCIAL_MEDIA_ITEMS: SocialMediaWorkItem[] = [];

export const VIDEO_ITEMS: VideoContentItem[] = [];

export const AI_WORKFLOW_AREAS = [
  {
    title: 'Marketing & Ad Strategy',
    description: 'Audience segmentation, competitor hook analysis, dynamic copy angles, and multi-tier ad campaign ideation.',
    iconName: 'Target',
    practicalApplication: 'Generating 20+ distinct angle hooks in 15 minutes to battle creative ad fatigue.',
  },
  {
    title: 'Content Creation & Video Scripting',
    description: 'Structuring direct-response video scripts, kinetic caption hooks, and value-packed social media carousels.',
    iconName: 'Sparkles',
    practicalApplication: 'Crafting 30 days of high-retention reel scripts aligned with client brand tone.',
  },
  {
    title: 'Market Research & Audience Insights',
    description: 'Analyzing customer pain points, competitor review sentiment, and objections to sharpen offer positioning.',
    iconName: 'Search',
    practicalApplication: 'Synthesizing 500+ customer reviews into the top 3 core emotional buying triggers.',
  },
  {
    title: 'Landing Page & CRO Copywriting',
    description: 'Drafting high-converting headlines, benefit bullet points, risk reversals, and compelling calls-to-action.',
    iconName: 'Layout',
    practicalApplication: 'Testing 5 psychological value propositions against client historical conversion baselines.',
  },
  {
    title: 'Website & Digital System Development',
    description: 'Accelerating modern component creation, responsive UI debugging, and rapid full-stack web prototypes.',
    iconName: 'Code2',
    practicalApplication: 'Building production-ready, accessible React/Tailwind landing pages in days instead of weeks.',
  },
  {
    title: 'Workflow Automation',
    description: 'Multi-tool webhook triggers via Zapier and Make, eliminating manual data entry and repetitive handoffs.',
    iconName: 'Cpu',
    practicalApplication: 'Connecting Meta lead forms directly to instant WhatsApp and CRM updates in <60 seconds.',
  },
  {
    title: 'Business Operations & Productivity',
    description: 'Automated executive meeting summaries, proposal drafting, and centralized knowledge management.',
    iconName: 'Workflow',
    practicalApplication: 'Saving 12+ hours every week on operational admin so we can focus on strategic client growth.',
  },
  {
    title: 'Commercial Business Processes',
    description: 'Lead qualification logic, customer onboarding workflows, and automated client reporting digests.',
    iconName: 'TrendingUp',
    practicalApplication: 'Filtering tire-kickers automatically so sales teams only speak with qualified decision-makers.',
  },
];

// Testimonials are managed dynamically via Firebase Firestore
export const TESTIMONIALS: Testimonial[] = [];

export const RESUME_DATA = {
  summary: 'Results-driven Digital Marketer, Meta Ads Specialist, Brand Designer, and AI Automation Specialist with 3+ years of demonstrated success helping ambitious brands, startups, and founders scale customer acquisition, elevate visual identity, and streamline digital growth.',
  education: [
    {
      degree: 'B.Sc. Studies in Technology & Digital Systems',
      institution: 'Olabisi Onabanjo University (OOU)',
      period: '2022 - Present',
      details: 'Applied knowledge of computer systems, algorithmic workflows, modern software development, and digital marketing technologies.',
    },
  ],
  experience: [
    {
      role: 'Lead Digital Marketing & Growth Strategist',
      company: 'Mr. Clarity Growth Consulting',
      period: '2022 - Present',
      points: [
        'Manage end-to-end paid advertising campaigns across Meta (Facebook/Instagram) with ₦500K+ in ad spend managed at an average 4.5x ROAS.',
        'Design high-converting, mobile-first landing pages with direct WhatsApp conversion funnels.',
        'Implement automated lead capture funnels and WhatsApp CRM workflows that reduce lead response times to under 60 seconds.',
      ],
    },
    {
      role: 'Founder & Lead Instructor',
      company: 'Clarity Digital Academy',
      period: '2022 - Present',
      points: [
        'Trained and mentored 500+ students, business owners, and freelancers in Canva graphic design, digital advertising, and high-income digital skills.',
        'Designed complete curriculum, practical workbooks, template systems, and verified certification standards.',
        'Maintained a 98% positive participant satisfaction rating across multiple training cohorts.',
      ],
    },
    {
      role: 'Brand Designer & Creative Strategist',
      company: 'Freelance & Agency Collaborations',
      period: '2021 - Present',
      points: [
        'Partnered with 30+ startups and corporate clients to create cohesive brand identities, logos, and high-performing ad creatives.',
        'Crafted direct-response marketing collateral, pitch decks, and social media content calendars that drove measurable commercial growth.',
      ],
    },
  ],
  certifications: [
    'Meta Certified Digital Marketing Associate',
    'Advanced Canva Design & Brand Identity Specialist',
    'AI Workflow Automation & Prompt Engineering Fundamentals',
    'Direct-Response Copywriting & Landing Page CRO Masterclass',
  ],
  technicalProficiencies: {
    marketing: ['Meta Ads Manager (FB/IG)', 'TikTok Ads', 'Audience Research', 'Google Analytics 4', 'CAPI & Pixel Tracking', 'Lead Gen Funnels'],
    design: ['Canva Pro Expert', 'Figma (Landing Page UI/UX)', 'Adobe Photoshop', 'Brand Identity Systems', 'Direct-Response Visuals'],
    aiAutomation: ['Zapier', 'Make.com', 'OpenAI & Claude Prompts', 'AI Customer Chatbots', 'CRM Automations', 'Workflow Architecture'],
    development: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase Cloud DB & Auth', 'Semantic SEO'],
  },
};

export const DEFAULT_CASE_STUDIES: any[] = [];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you offer?',
    answer: 'I offer Meta Ads Management (Facebook and Instagram Ads), Landing Page Design, Brand Design, Social Media Management, AI Automation, AI Website Development, Video Editing and Digital Marketing Strategy.',
    order: 1,
    isPublished: true,
  },
  {
    id: 'faq-2',
    question: 'Who do you work with?',
    answer: 'I work with businesses, entrepreneurs, startups, organizations and brands looking to improve their digital marketing, generate leads, optimize campaigns or create better digital assets.',
    order: 2,
    isPublished: true,
  },
  {
    id: 'faq-3',
    question: 'Can you help me run Facebook and Instagram Ads?',
    answer: 'Yes. I handle campaign strategy, audience targeting, ad creatives, campaign setup, testing, optimization and reporting.',
    order: 3,
    isPublished: true,
  },
  {
    id: 'faq-4',
    question: 'Do you design landing pages for ads?',
    answer: 'Yes. I design conversion-focused landing pages designed to turn ad traffic into leads, inquiries and sales.',
    order: 4,
    isPublished: true,
  },
  {
    id: 'faq-5',
    question: 'What is the difference between graphics design and digital marketing?',
    answer: 'Graphics design helps communicate visually and build trust, while digital marketing focuses on reaching the right audience, driving traffic and generating measurable business results. I combine both.',
    order: 5,
    isPublished: true,
  },
  {
    id: 'faq-6',
    question: 'How do you use AI in your work?',
    answer: 'I use AI for research, content drafting, workflow automation, website development and improving productivity. AI helps speed up processes, but strategy and human judgment remain central.',
    order: 6,
    isPublished: true,
  },
  {
    id: 'faq-7',
    question: 'What is your process for starting a project?',
    answer: 'We begin by discussing your business, audience, offer and goals. From there, I develop a plan, create the necessary assets or campaigns, launch and optimize based on results.',
    order: 7,
    isPublished: true,
  },
  {
    id: 'faq-8',
    question: 'How much do you charge?',
    answer: 'Pricing depends on the scope of the project, deliverables and requirements. Reach out with your project details and I will provide a clear proposal.',
    order: 8,
    isPublished: true,
  },
  {
    id: 'faq-9',
    question: 'Are you open to full-time or contract roles?',
    answer: 'Yes. I am open to freelance projects, contract roles, full-time positions and strategic collaborations.',
    order: 9,
    isPublished: true,
  },
  {
    id: 'faq-10',
    question: 'How can I get started?',
    answer: "You can use the 'Hire Me' button, send a message through the contact form, email me at ipesolasulaiman@gmail.com or reach out via WhatsApp at +234 805 178 0169.",
    order: 10,
    isPublished: true,
  },
];

export const DEFAULT_ABOUT_SECTIONS: AboutSectionItem[] = [
  {
    id: 'about-01',
    sectionNumber: '01',
    title: 'WHO I AM',
    subtitle: 'Onifade Sulaiman (Mr. Clarity)',
    content: `I am Onifade Sulaiman, professionally known as Mr. Clarity. I am a Digital Marketer and Digital Solutions Specialist focused on helping businesses build stronger digital presence, attract the right audience and turn ideas into practical digital solutions.

My work sits at the intersection of Digital Marketing, Meta Ads, Landing Pages, Brand Design, Social Media Management, AI Automation and Digital Development.

I enjoy taking something unclear and turning it into something simple, useful and understandable. That mindset is a major part of what the name Mr. Clarity represents.`,
    order: 1,
    isPublished: true,
  },
  {
    id: 'about-02',
    sectionNumber: '02',
    title: 'WHERE IT STARTED',
    subtitle: 'Curiosity and Questions',
    content: `I did not start with everything figured out.

I started by learning, creating and trying to understand how things work.

My curiosity was not only about creating something that looked good. I became interested in why some businesses get attention online while others struggle to be noticed.

I started asking questions:
• Why do some advertisements get people to stop scrolling?
• Why do some brands immediately look trustworthy?
• Why does one landing page make you want to take action while another makes you leave?
• Why do some businesses have good products but still struggle to get customers online?

Those questions gradually changed the way I looked at digital work.`,
    order: 2,
    isPublished: true,
  },
  {
    id: 'about-03',
    sectionNumber: '03',
    title: 'FROM DESIGN TO DIGITAL MARKETING',
    subtitle: 'Beyond Visual Aesthetics',
    content: `One of the important stages of my journey was graphics design.

Design taught me something simple but powerful: People often notice what they see before they understand what you are saying.

That changed the way I approached design. I became less interested in creating something that was simply beautiful and more interested in understanding what the design was supposed to achieve:
• Was it meant to attract attention?
• Build trust?
• Communicate an offer?
• Promote a product?
• Generate a response?

That shift eventually led me deeper into Digital Marketing.`,
    order: 3,
    isPublished: true,
  },
  {
    id: 'about-04',
    sectionNumber: '04',
    title: 'DISCOVERING META ADS',
    subtitle: 'Beyond the Boost Button',
    content: `In 2024, I began taking Digital Marketing more seriously.

I started learning how Facebook and Instagram advertising actually works beyond simply pressing the boost button.

I became interested in audience targeting, campaign objectives, ad creatives, lead generation, offers, landing pages and conversion.

The more I learned, the more I realized that successful advertising is not simply about spending money to show an advert. It is about understanding the audience, presenting the right message, creating a clear offer and giving people a reason to take the next step.`,
    order: 4,
    isPublished: true,
  },
  {
    id: 'about-05',
    sectionNumber: '05',
    title: 'FROM RUNNING ADS TO UNDERSTANDING THE CUSTOMER JOURNEY',
    subtitle: 'Looking at the Complete Journey',
    content: `One of the biggest lessons I learned was that an advertisement does not exist alone. You can have a good advert and still lose the customer after the click.

That made me start looking at the entire customer journey:
• The ad
• The creative
• The message
• The landing page
• The branding
• The offer
• The follow-up
• The overall customer experience

Today, when I look at a digital marketing project, I do not only ask, "How do we run the advert?"
I also ask, "What happens after someone sees it?"`,
    order: 5,
    isPublished: true,
  },
  {
    id: 'about-06',
    sectionNumber: '06',
    title: 'WHY I COMBINE MARKETING, DESIGN AND TECHNOLOGY',
    subtitle: 'Connecting the Digital Pieces',
    content: `As I worked on different digital projects, I noticed that many businesses have good ideas but disconnected digital systems.

Their social media may look good, but their landing page may not convert.
Their landing page may look good, but their advertising strategy may be unclear.
They may receive leads but have no proper process for managing them.

That is why I became increasingly interested in combining marketing, design and technology.

Today, I see AI tools, automation, websites and digital systems as practical tools for solving business problems, not simply technologies to show off.`,
    order: 6,
    isPublished: true,
  },
  {
    id: 'about-07',
    sectionNumber: '07',
    title: 'WHAT I DO TODAY',
    subtitle: 'Core Digital Solutions Built Around Practical Growth',
    content: `Today, I help businesses, founders and teams build clear and effective digital solutions across 8 specialized disciplines:

1. META ADS MANAGEMENT: Facebook and Instagram advertising strategy, campaign setup, audience targeting, creative direction, testing and optimization.
2. LANDING PAGE DESIGN: Conversion-focused landing pages designed to support advertising campaigns, lead generation and clear customer journeys.
3. BRAND DESIGN: Professional visual identities, marketing graphics and brand assets that help businesses communicate clearly.
4. SOCIAL MEDIA MANAGEMENT: Content planning, social media strategy, creative content and audience engagement.
5. AI AUTOMATION: Practical AI-powered workflows and automation designed to reduce repetitive work and improve digital processes.
6. AI SOFTWARE AND WEBSITE DEVELOPMENT: Modern websites, landing pages and digital applications designed around practical business needs.
7. VIDEO EDITING: Short-form and promotional video editing using tools such as CapCut.
8. DIGITAL MARKETING STRATEGY: Helping businesses understand their audience, positioning, offers, campaigns and digital customer journey.`,
    order: 7,
    isPublished: true,
  },
  {
    id: 'about-08',
    sectionNumber: '08',
    title: 'WHAT I HAVE LEARNED ALONG THE WAY',
    subtitle: 'Key Marketing Principles',
    quote: 'Marketing is not simply about making noise. It is about communication.',
    content: `I have learned that marketing is not simply about making noise.
It is about communication.
It is about understanding people.
It is about presenting the right message to the right audience at the right time.
It is about making the offer clear.
It is about building trust.
And most importantly, it is about making the next step easy to understand.`,
    order: 8,
    isPublished: true,
  },
  {
    id: 'about-09',
    sectionNumber: '09',
    title: 'MY APPROACH',
    subtitle: 'The 5-Stage Framework',
    quote: 'I do not believe every business needs the same strategy. The right approach depends on the business, the audience, the offer and the goal.',
    content: `UNDERSTAND: Understand the business, audience, offer and objective.
PLAN: Build a practical strategy based on the actual goal.
CREATE: Develop the campaign, creative, landing page, content or digital solution.
LAUNCH: Put the strategy into action.
IMPROVE: Review performance, identify weaknesses and improve where necessary.`,
    order: 9,
    isPublished: true,
  },
  {
    id: 'about-10',
    sectionNumber: '10',
    title: 'MY PROFESSIONAL JOURNEY',
    subtitle: 'Continuous Growth & Focus',
    content: `2024: Started building practical experience in Digital Marketing, Graphics Design and online business promotion.
2025: Expanded into Meta Ads, landing pages, branding, social media management and broader digital marketing projects.
2026: Focused more deeply on Meta Ads, landing pages, branding, social media, AI automation and digital development.
CURRENT: Continuing to build, learn and work on freelance projects, professional opportunities, partnerships and digital solutions.`,
    order: 10,
    isPublished: true,
  },
  {
    id: 'about-11',
    sectionNumber: '11',
    title: 'WHAT DRIVES ME',
    subtitle: 'The Philosophy Behind Mr. Clarity',
    content: `I enjoy taking unclear ideas and turning them into understandable solutions.
That is where the name Mr. Clarity comes from.

For me, clarity is not just a name. It is an approach:
• Clarity in the message.
• Clarity in the design.
• Clarity in the strategy.
• Clarity in the customer journey.
• Clarity in what happens next.`,
    order: 11,
    isPublished: true,
  },
  {
    id: 'about-12',
    sectionNumber: '12',
    title: 'WHERE I AM GOING',
    subtitle: 'Committed to Continuous Learning',
    content: `I am still learning, and I intend to keep learning.

Digital marketing, technology and AI continue to change quickly. That means staying relevant requires curiosity, practice and the willingness to improve.

My goal is to continue working on challenging projects, learn from businesses and teams, and build practical digital solutions that create real value.

Long term, I want to keep developing at the intersection of marketing, design, technology and AI.`,
    order: 12,
    isPublished: true,
  },
  {
    id: 'about-13',
    sectionNumber: '13',
    title: 'WHY WORK WITH ME',
    subtitle: 'Focused on the Problem Behind the Project',
    content: `You should not work with me simply because I can run Meta Ads, design graphics, build a landing page or use AI tools.

Work with me because I am interested in the problem behind the project.

I want to understand:
• What are you trying to achieve?
• Who are you trying to reach?
• What is currently not working?
• What should happen after someone sees your campaign?
• What digital experience should your customer have?

That mindset allows me to look beyond individual tasks and think about the bigger picture.`,
    highlights: [
      'Meta Ads',
      'Landing Pages',
      'Brand Design',
      'Social Media',
      'AI Automation',
      'Website Development',
      'Video Editing',
      'Digital Strategy',
    ],
    order: 13,
    isPublished: true,
  },
  {
    id: 'about-14',
    sectionNumber: '14',
    title: 'A SHORT PERSONAL NOTE',
    subtitle: 'Building the Story',
    content: `I am still building my story.

I am proud of how far I have come since I started taking this journey seriously in 2024, but I also know there is still a lot more to learn.

Every project, campaign, client interaction and challenge teaches me something.

I see my portfolio as more than a collection of work. It is a record of what I have learned, what I can do today and where I am heading next.

This is not the final version of my story.
It is the part I am currently building.`,
    order: 14,
    isPublished: true,
  },
  {
    id: 'about-15',
    sectionNumber: '15',
    title: "LET'S WORK TOGETHER",
    subtitle: "LET'S BUILD SOMETHING THAT MAKES SENSE.",
    content: `Have a business idea, marketing challenge or digital project you want to discuss? I would be happy to hear about it.

Phone: +234 805 178 0169
Email: ipesolasulaiman@gmail.com`,
    order: 15,
    isPublished: true,
  },
];

export const DEFAULT_MEDIA_ITEMS = [
  {
    id: 'med-1',
    name: 'onifade_sulaiman_portrait.jpg',
    url: portraitImg,
    fileType: 'image/jpeg',
    size: 245000,
    uploadedAt: '2026-09-01T10:00:00.000Z',
    category: 'image' as const,
  },
  {
    id: 'med-2',
    name: 'ecommerce_case_study.jpg',
    url: ecommerceImg,
    fileType: 'image/jpeg',
    size: 310000,
    uploadedAt: '2026-09-01T10:05:00.000Z',
    category: 'image' as const,
  },
  {
    id: 'med-3',
    name: 'canva_design_masterclass.jpg',
    url: canvaImg,
    fileType: 'image/jpeg',
    size: 280000,
    uploadedAt: '2026-09-01T10:10:00.000Z',
    category: 'image' as const,
  },
  {
    id: 'med-4',
    name: 'dashboard_saas_preview.jpg',
    url: dashboardImg,
    fileType: 'image/jpeg',
    size: 295000,
    uploadedAt: '2026-09-01T10:15:00.000Z',
    category: 'image' as const,
  },
];
