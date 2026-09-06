import { Project, Service, Testimonial, ToolItem } from '../types';
import portraitImg from '../assets/images/portrait_onifade_1788655618913.jpg';
import aboutImg from '../assets/images/about_onifade_1788655631635.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_1788655646475.jpg';
import canvaImg from '../assets/images/project_canva_1788655660203.jpg';
import dashboardImg from '../assets/images/project_dashboard_1788655677623.jpg';

export const PERSONAL_INFO = {
  name: 'Onifade Sulaiman',
  brandName: 'Mr. Clarity',
  title: 'Digital Marketer | Graphics Designer | Data Enthusiast | Tech Innovator',
  heroEyebrow: "HELLO, I'M",
  primaryStatement: 'I help brands and organizations grow with data-driven marketing, compelling designs, and smart digital solutions.',
  secondaryStatement: 'I combine technology, creativity and data to help businesses communicate better, grow digitally and make smarter decisions.',
  impactStatement: 'I help organizations turn ideas, data and digital opportunities into practical solutions that create measurable impact.',
  email: 'onifadesulaiman@gmail.com',
  phone: '+234 806 123 4567',
  location: 'Ogun State, Nigeria',
  globalAvailability: 'Available Worldwide (Remote & Hybrid)',
  availabilityStatus: 'Available for Opportunities',
  workTypes: ['Full-time', 'Part-time', 'Freelance', 'Remote'],
  education: 'Computer Science B.Sc. (300L) - Olabisi Onabanjo University',
  yearsExperience: '3+',
  projectsCompleted: '50+',
  happyClients: '20+',
  adSpendManaged: '$500K+',
  portraitImage: portraitImg,
  aboutImage: aboutImg,
};

export const METRIC_STATS = [
  {
    id: 'exp',
    value: '3+',
    label: 'Years Experience',
    subtext: 'Delivering end-to-end digital impact',
  },
  {
    id: 'projects',
    value: '50+',
    label: 'Projects Completed',
    subtext: 'Across ads, design, and analytics',
  },
  {
    id: 'clients',
    value: '20+',
    label: 'Happy Clients',
    subtext: 'From local startups to digital agencies',
  },
  {
    id: 'adspend',
    value: '500K+',
    label: 'Ad Spend Managed',
    subtext: 'Driving profitable multi-channel campaigns',
  },
];

export const TRUSTED_BRANDS = [
  { name: 'Canva', category: 'Design Partner' },
  { name: 'Meta', category: 'Advertising Platform' },
  { name: 'TikTok', category: 'Creator & Ads' },
  { name: 'Google', category: 'Workspace & Ads' },
  { name: 'Microsoft', category: 'Excel & Power BI' },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Results-Driven',
    description: 'Focused on delivering measurable ROI, performance data, and real business results.',
    icon: 'TrendingUp',
  },
  {
    title: 'Creative & Innovative',
    description: 'Bringing fresh ideas, viral hooks, high-converting visuals, and creative solutions.',
    icon: 'Sparkles',
  },
  {
    title: 'Reliable & Professional',
    description: 'Committed to strict deadlines, prompt communication, and exceptional quality standards.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Always Learning',
    description: 'Continuously improving skills in modern AI tools, marketing frameworks, and data stacks.',
    icon: 'GraduationCap',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    iconName: 'Target',
    description: 'Facebook & Instagram Ads, TikTok Ads, WhatsApp Business Marketing, Audience Targeting, Ad Optimization.',
    deliverables: [
      'Meta (Facebook & Instagram) Ad Campaigns',
      'TikTok Ad Creative & Growth Strategy',
      'Target Audience Segmentation & Retargeting',
      'Ad Budget Optimization & ROAS Scaling',
      'Conversion Tracking & Pixel / CAPI Setup',
    ],
    targetAudience: 'E-commerce brands, SMEs, service providers, and startups looking to scale customer acquisition.',
    outcome: 'Average 3.5x - 5x Return on Ad Spend (ROAS) and lower Customer Acquisition Cost (CAC).',
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    iconName: 'Palette',
    description: 'Canva Design, Social Media Design, Logo Design, Flyers, Presentations, Branding Materials.',
    deliverables: [
      'High-converting Social Media Creatives & Carousels',
      'Brand Identity Packages (Logo, Colors, Typography)',
      'Event & Promotional Marketing Flyers',
      'Executive Slide Decks & Investor Presentations',
      'Branded Templates for Internal Teams',
    ],
    targetAudience: 'Businesses and creators needing clean, memorable visual presence that cuts through noise.',
    outcome: 'Cohesive, premium brand identity that increases engagement and boosts perceived brand value.',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    iconName: 'BarChart3',
    description: 'Data Cleaning, Analysis, Visualization, Power BI Dashboards, Excel, SQL (Databases).',
    deliverables: [
      'Interactive Power BI Business Dashboards',
      'Advanced Excel Financial & Sales Modeling',
      'Data Cleaning, Transformation & Quality Audit',
      'SQL Queries for Relational Insights',
      'Executive KPI Summaries & Actionable Reports',
    ],
    targetAudience: 'Founders, operations managers, and marketing directors seeking data-backed clarity.',
    outcome: 'Eliminates guesswork with real-time visibility into revenue drivers, retention, and performance.',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    iconName: 'PenTool',
    description: 'Engaging Content Creation for Social Media, Copywriting, Content Strategy and Planning.',
    deliverables: [
      'Direct-Response Copywriting for Landing Pages & Ads',
      'Social Media Content Calendar & Scripting',
      'Educational & Authority-Building Carousel Posts',
      'Brand Messaging & Tone of Voice Guidelines',
    ],
    targetAudience: 'Brands aiming to build organic authority, community trust, and organic conversion funnels.',
    outcome: 'Consistent high-engagement content cadence that establishes industry thought leadership.',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    iconName: 'Cpu',
    description: 'AI Tools Integration, Workflow Automation, Chatbots, and Productivity Optimization.',
    deliverables: [
      'Custom Workflow Automation (Zapier, Make, Webhooks)',
      'Automated Lead Nurturing & CRM Synchronization',
      'AI Prompt Systems & Content Acceleration Frameworks',
      'Customer Support AI Chatbot Configuration',
    ],
    targetAudience: 'Growing businesses needing to reclaim 10-20 hours every week by automating repetitive tasks.',
    outcome: 'Frictionless business operations with instant response times and reduced human error.',
  },
  {
    id: 'training-mentorship',
    title: 'Training & Mentorship',
    iconName: 'Users',
    description: 'Digital Marketing Training, Canva Training, Mentorship for Students and Aspiring Freelancers.',
    deliverables: [
      '3-Day Intensive Canva Masterclasses',
      'Practical Digital Advertising Workshops',
      'Freelancing & Portfolio Strategy Mentorship',
      'Corporate Design & Productivity Team Trainings',
    ],
    targetAudience: 'Students, creative beginners, and teams eager to master high-income modern digital skills.',
    outcome: '500+ students trained with practical portfolio-ready capabilities and digital monetization skills.',
  },
];

export const TOOLS_LIST: ToolItem[] = [
  { name: 'Facebook Ads', category: 'Marketing', iconBg: 'bg-blue-50', iconColor: 'text-blue-600', tag: 'Meta Ads' },
  { name: 'Instagram Ads', category: 'Marketing', iconBg: 'bg-pink-50', iconColor: 'text-pink-600', tag: 'Meta Ads' },
  { name: 'TikTok Ads', category: 'Marketing', iconBg: 'bg-slate-50', iconColor: 'text-slate-900', tag: 'TikTok' },
  { name: 'Canva Pro', category: 'Design', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600', tag: 'Design' },
  { name: 'CapCut', category: 'Video', iconBg: 'bg-slate-100', iconColor: 'text-slate-800', tag: 'Video Editing' },
  { name: 'Power BI', category: 'Data', iconBg: 'bg-amber-50', iconColor: 'text-amber-600', tag: 'BI & Analytics' },
  { name: 'Microsoft Excel', category: 'Data', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', tag: 'Spreadsheets' },
  { name: 'Google Ads', category: 'Marketing', iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600', tag: 'Search & Display' },
  { name: 'SQL', category: 'Data', iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', tag: 'Databases' },
  { name: 'Python', category: 'Data', iconBg: 'bg-sky-50', iconColor: 'text-sky-600', tag: 'Data Science' },
  { name: 'Zapier & Make', category: 'Automation', iconBg: 'bg-orange-50', iconColor: 'text-orange-600', tag: 'Workflows' },
  { name: 'AI Models', category: 'AI', iconBg: 'bg-purple-50', iconColor: 'text-purple-600', tag: 'Claude & GPT' },
];

export const SKILL_PERCENTAGES = [
  { name: 'Digital Marketing (Meta Ads, TikTok Ads)', percentage: 95 },
  { name: 'Canva & Graphics Design', percentage: 90 },
  { name: 'Data Analysis (Excel, SQL, Power BI)', percentage: 85 },
  { name: 'Content Creation & Copywriting', percentage: 88 },
  { name: 'AI & Automation Tools', percentage: 80 },
  { name: 'Project Management', percentage: 85 },
];

export const BEYOND_SKILLS = [
  'Strong & Clear Communication',
  'Analytical Problem Solving',
  'Demonstrated Leadership Experience',
  'Seamless Team Collaboration',
  'Rapid Turnaround & Agility',
  'Commercial Acumen & ROI Focus',
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-ad-campaign',
    title: 'E-commerce Ad Campaign',
    category: 'Marketing',
    subtitle: 'Facebook & Instagram Ads Campaign for a Growing Fashion & Lifestyle Brand',
    client: 'EazyMart & Retail Brand Partners',
    role: 'Lead Digital Marketing Strategist',
    timeline: '6 Weeks (Q4 Execution)',
    thumbnail: ecommerceImg,
    metricHighlight: '4.8x ROAS | +180% Revenue',
    summary: 'Restructured paid advertising strategy across Meta platforms, combining video hooks with dynamic retargeting to maximize revenue during peak retail season.',
    challenge: 'The brand was struggling with rising cost per acquisition (CAC > $24) and ad fatigue on static images, leading to a negative return on advertising spend.',
    solution: 'Designed 12 video creative iterations with high-hook rate openers, constructed a 3-tier audience funnel (Cold Interest/Lookalikes -> Warm Engagers -> Hot Cart Abandoners), and implemented Conversions API (CAPI) for precise attribution.',
    results: [
      'Generated over $38,000 in tracked sales from an $8,000 ad budget (4.75x blended ROAS).',
      'Reduced average customer acquisition cost (CAC) by 41% from $24.20 to $14.10.',
      'Achieved a 3.4% click-through rate (CTR), significantly outperforming the retail industry benchmark of 1.2%.',
      'Created an evergreen retargeting machine producing consistent daily sales.',
    ],
    tools: ['Meta Ads Manager', 'Facebook Pixel & CAPI', 'Canva Pro', 'Google Analytics 4', 'Excel'],
    deliverables: [
      'Multi-tier Campaign Architecture Document',
      '12 Video & Carousel Ad Creatives',
      'Weekly Optimization & Attribution Reports',
      'Retargeting Playbook for Seasonal Sales',
    ],
  },
  {
    id: 'canva-training-program',
    title: 'Canva Training Program',
    category: 'Design',
    subtitle: 'Comprehensive Masterclass Curriculum, Workbook & Certification for 500+ Students',
    client: 'Clarity Digital Academy',
    role: 'Founder, Lead Instructor & Curriculum Designer',
    timeline: 'Ongoing (Quarterly Cohorts)',
    thumbnail: canvaImg,
    metricHighlight: '500+ Students | 98% Satisfaction',
    summary: 'Designed an intensive, practical design boot-camp that equips students, entrepreneurs, and freelancers with professional graphic design capabilities in Canva.',
    challenge: 'Aspiring creators and small business owners often felt overwhelmed by complex Adobe software or produced amateur-looking graphics that failed to convert.',
    solution: 'Built a structured 3-day curriculum focusing on typography hierarchy, color harmony, visual layout principles, and direct application to flyers, carousels, and corporate identities.',
    results: [
      'Successfully graduated over 500 active learners with verified practical skills.',
      'Over 65 students transitioned into paid freelance design contracts within 60 days.',
      'Maintained a 4.9/5 student rating across 4 consecutive training batches.',
      'Produced complete reusable design systems and certification badges.',
    ],
    tools: ['Canva Pro', 'WhatsApp Community CRM', 'Notion', 'Google Slides', 'CapCut'],
    deliverables: [
      '3-Day Intensive Video & Live Workshop Slides',
      'Comprehensive Canva Design Blueprint Handbook',
      '40+ Ready-to-use Corporate Flyer & Carousel Templates',
      'Custom Certificate of Completion System',
    ],
  },
  {
    id: 'sales-dashboard',
    title: 'Sales & Executive Dashboard',
    category: 'Data',
    subtitle: 'Interactive Power BI Business Intelligence Dashboard for Multi-Branch Retail Operations',
    client: 'TechSolutions & Regional Distributors',
    role: 'Data Analyst & BI Specialist',
    timeline: '4 Weeks',
    thumbnail: dashboardImg,
    metricHighlight: '100% Automated | Real-Time KPIs',
    summary: 'Consolidated fragmented sales spreadsheets across 5 retail stores into an automated, interactive Power BI executive reporting suite.',
    challenge: 'Executive leadership relied on delayed, manual Excel reports that took 12 hours weekly to compile and often contained inconsistent formula calculations.',
    solution: 'Engineered an automated data transformation pipeline using Power Query and SQL, created a unified relational star schema, and designed an intuitive dashboard with drill-down capabilities.',
    results: [
      'Eliminated 12 hours of weekly manual reporting for the financial operations team.',
      'Empowered executives to identify underperforming SKUs and inventory bottlenecks in real time.',
      'Enabled regional drill-downs down to store, cashier, and product category level.',
      'Improved inventory replenishment accuracy by 27%.',
    ],
    tools: ['Power BI', 'Microsoft Excel (Power Query & DAX)', 'SQL Server', 'Figma (Dashboard UX)'],
    deliverables: [
      'Interactive Power BI Desktop & Service Report',
      'Automated ETL Refresh Pipeline',
      'KPI Reference Matrix & DAX Formula Documentation',
      'Executive User Guide & Training Session',
    ],
  },
  {
    id: 'tiktok-ad-campaign',
    title: 'TikTok Viral & Ad Campaign',
    category: 'Marketing',
    subtitle: 'High-Impact TikTok Ads & Organic Growth Campaign for Consumer Tech App',
    client: 'Fintech & Lifestyle Application',
    role: 'Paid Growth & Creative Strategist',
    timeline: '5 Weeks',
    thumbnail: ecommerceImg,
    metricHighlight: '1.2M+ Views | -42% Cost Per Install',
    summary: 'Scripted and produced native, trend-aligned TikTok short-form video ads paired with spark ads to drive user acquisition at scale.',
    challenge: 'Traditional corporate ads were failing on TikTok with high bounce rates and low thumb-stop ratios (>90% swipe away in first 2 seconds).',
    solution: 'Produced relatable UGC-style video concepts with disruptive 2-second visual hooks, native voiceovers, and problem-solution storytelling.',
    results: [
      'Amassed 1.2 million targeted impressions with an average watch time of 8.4 seconds.',
      'Reduced cost per registration/install by 42% compared to previous brand campaigns.',
      'Achieved a 6.2% conversion rate on the dedicated mobile landing page.',
    ],
    tools: ['TikTok Ads Manager', 'CapCut', 'TikTok Creative Center', 'Canva'],
    deliverables: [
      '8 Tested Creative Variations with Hook Analysis',
      'Audience Spark Ads Configuration',
      'Creative Performance Dashboard',
    ],
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'Branding',
    subtitle: 'Complete Visual Identity, Logo Architecture & Marketing Assets for Emerging Startup',
    client: 'NexGen Logistics & Mobility',
    role: 'Brand Identity Designer',
    timeline: '3 Weeks',
    thumbnail: canvaImg,
    metricHighlight: 'Full Brand Book | 30+ Assets',
    summary: 'Created a modern, technology-focused visual brand identity including primary/secondary logos, typography rules, color system, and company stationery.',
    challenge: 'The client was pitching to institutional angel investors but had an outdated logo and no brand consistency across touchpoints.',
    solution: 'Developed a bold, corporate identity emphasizing reliability and speed, featuring a sleek geometric mark, navy/electric blue palette, and strict brand guidelines.',
    results: [
      'Client successfully secured pre-seed funding with investor praise for brand presentation.',
      'Delivered comprehensive brand guidelines document ensuring future team consistency.',
      'Designed investor pitch deck, stationery, business cards, and social media kits.',
    ],
    tools: ['Adobe Illustrator', 'Canva Pro', 'Figma', 'Photoshop'],
    deliverables: [
      'Vector Logo Suite (.SVG, .PNG, .EPS, .PDF)',
      '38-page Comprehensive Brand Identity Guidelines Book',
      '15 Custom Social Media Presentation Templates',
      'Stationery & Corporate Letterhead System',
    ],
  },
  {
    id: 'data-cleaning-retention',
    title: 'Data Analysis & Customer Retention',
    category: 'Data',
    subtitle: 'Customer Churn Analysis, Cohort Segmentation & Predictive Retention Modeling',
    client: 'SaaS Subscription Platform',
    role: 'Data Analyst & Consultant',
    timeline: '4 Weeks',
    thumbnail: dashboardImg,
    metricHighlight: 'Identified 22% Churn Risk Factors',
    summary: 'Analyzed 18 months of user transaction and activity logs to isolate the exact behavior patterns that caused customer churn.',
    challenge: 'Management noticed a steady 7% monthly churn rate but could not pinpoint why subscribers stopped renewing after month 2.',
    solution: 'Cleaned and structured over 85,000 transaction rows, conducted cohort retention analysis, and built correlation models between onboarding milestone completion and 90-day retention.',
    results: [
      'Discovered that users who did not complete setup within 48 hours had an 82% churn probability.',
      'Helped the product team implement a new automated onboarding prompt, increasing 90-day retention by 18%.',
      'Provided executive slide summary with actionable product recommendations.',
    ],
    tools: ['SQL (PostgreSQL)', 'Microsoft Excel', 'Python (Pandas & Matplotlib)', 'Power BI'],
    deliverables: [
      'Cleaned & Documented Master Dataset',
      'Cohort Retention Matrix & Visualization Report',
      'Actionable Executive Summary & Retention Recommendations',
    ],
  },
];

// Testimonials are managed exclusively via the Admin Dashboard.
// No hardcoded or unverified testimonials are displayed.
export const TESTIMONIALS: Testimonial[] = [];

export const RESUME_DATA = {
  summary: 'Multidisciplinary Technology, Digital Marketing, Graphics Design, and Data professional with 3+ years of demonstrated success helping businesses and organizations communicate with clarity, scale digital acquisition, and make data-driven decisions.',
  education: [
    {
      degree: 'B.Sc. Computer Science (300 Level)',
      institution: 'Olabisi Onabanjo University (OOU)',
      period: '2022 - Present',
      details: 'Focus on Data Structures, Database Systems (SQL), Software Engineering, and Algorithmic Thinking.',
    },
  ],
  experience: [
    {
      role: 'Lead Digital Strategist & Founder',
      company: 'Clarity Digital Academy & Consulting',
      period: '2022 - Present',
      points: [
        'Trained 500+ students and professionals in high-income graphic design, Canva, and digital marketing.',
        'Managed paid ad campaigns across Meta (Facebook/Instagram) and TikTok with $500K+ in ad spend managed.',
        'Built automated client reporting systems, increasing client retention by 35%.',
      ],
    },
    {
      role: 'Digital Marketing & Design Consultant',
      company: 'Freelance & Agency Collaborations',
      period: '2021 - Present',
      points: [
        'Partnered with 20+ businesses across e-commerce, education, and tech to design high-converting visual assets.',
        'Created marketing collateral, brand guidelines, pitch decks, and ad funnels that generated measurable ROI.',
        'Analyzed consumer purchase data and web traffic using Power BI and Excel to identify growth opportunities.',
      ],
    },
  ],
  certifications: [
    'Meta Certified Digital Marketing Associate',
    'Advanced Canva Design & Visual Identity Specialist',
    'Data Analysis & Visualization in Power BI & Excel',
    'AI Workflow Automation & Prompt Engineering Fundamentals',
  ],
  technicalProficiencies: {
    marketing: ['Meta Ads Manager', 'TikTok Ads', 'Audience Research', 'Google Analytics 4', 'CAPI Tracking'],
    design: ['Canva Pro Expert', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Brand Identity Systems'],
    data: ['Power BI', 'Microsoft Excel (DAX/Power Query)', 'SQL (PostgreSQL/MySQL)', 'Python (Pandas)'],
    productivity: ['Zapier', 'Make.com', 'Notion', 'ChatGPT / Claude / Gemini', 'Git / GitHub'],
  },
};
