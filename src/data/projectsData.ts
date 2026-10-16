export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Stack Development' | 'Business Websites' | 'E-commerce' | 'Portfolio Websites' | 'Informational Websites';
  categoryLabel: string;
  tags: string[];
  image: string;
  fallbackGradient: string;
  iconClass: string;
  liveUrl: string;
  repoUrl?: string;
  highlights: string[];
}

export const CATEGORIES = [
  'All',
  'Full Stack Development',
  'Business Websites',
  'E-commerce',
  'Portfolio Websites',
  'Informational Websites',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: 'fan-hub-plus',
    title: 'Fan Hub Plus',
    subtitle: 'Fandom Universe & Multi-Pillar Media Portal',
    description:
      'A comprehensive full-stack web application designed for pop-culture and entertainment enthusiasts. Features 8 dedicated fandom pillars (Anime, Gaming, Movies, TV Shows, K-Pop, Comics, Manga, Cosplay), dynamic multi-facet filtering, role-based dashboards, convention schedules, bookmark notes, release countdowns, user submissions queue, and an interactive assistant.',
    category: 'Full Stack Development',
    categoryLabel: 'Full Stack Web Application',
    tags: ['React 19', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS', 'REST API', 'Lucide Icons'],
    image: '/assets/fanhub_preview.jpg',
    fallbackGradient: 'from-purple-900 to-indigo-950',
    iconClass: 'fas fa-layer-group',
    liveUrl: 'https://fan-hub-plus-jxgn.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/fan-hub-plus',
    highlights: [
      '8 Fandom universe pillars with dynamic multi-facet filtering',
      'Role-based access control (Visitor, Registered Fan, Administrator)',
      'Admin approval queue for fan content submissions',
      'Convention & live event calendar with venue previews',
      'Personalized bookmark notes & release countdown timers',
    ],
  },
  {
    id: 'alphahub',
    title: 'AlphaHub',
    subtitle: 'Full Stack Social Media Platform',
    description:
      'A full-stack social media platform engineered during the CodeAlpha internship. Powered by Firebase cloud backend services, featuring secure authentication, realtime post publishing with media attachments, global topic and user search, dynamic feed timeline, user profile pages, and SweetAlert2 interactive alerts.',
    category: 'Full Stack Development',
    categoryLabel: 'Full Stack Social Media Platform',
    tags: ['React', 'Firebase Auth', 'Cloud Firestore', 'React Router', 'SweetAlert2', 'CSS3'],
    image: '/assets/MARYAM2.png',
    fallbackGradient: 'from-amber-900 to-stone-950',
    iconClass: 'fas fa-users',
    liveUrl: 'https://code-alpha-alpha-hub.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/CodeAlpha_AlphaHub',
    highlights: [
      'Firebase Authentication & secure user state management',
      'Cloud Firestore real-time post feeds and profile storage',
      'Create post system with rich media attachments',
      'Global search across users and topics',
      'Interactive SweetAlert2 feedback and error handling',
    ],
  },
  {
    id: 'zaytoon-bar-bq',
    title: 'Zaytoon Bar B.Q',
    subtitle: 'Authentic Traditional BBQ Restaurant Website',
    description:
      'A culinary business website crafted to showcase traditional charcoal Pakistani BBQ, succulent seekh kebabs, and authentic dining in Saddar, Karachi. Features a responsive menu categorized by grills, karahi, and platters, online table reservation inquiries, customer reviews, and Google Maps location integration.',
    category: 'Business Websites',
    categoryLabel: 'Restaurant Website',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Lucide Icons', 'Vite'],
    image: '/assets/zaytoon_preview.jpg',
    fallbackGradient: 'from-amber-950 to-orange-950',
    iconClass: 'fas fa-utensils',
    liveUrl: 'https://zaytoon-bar-bq-sigma.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/Zaytoon-Bar-B.Q',
    highlights: [
      'Interactive digital menu with multi-category filters',
      'Online reservation booking & contact inquiry workflow',
      'Visual grill showcase with authentic Pakistani aesthetics',
      'Integrated Saddar, Karachi location and opening hours',
    ],
  },
  {
    id: 'ashiq-autos',
    title: 'Ashiq Autos',
    subtitle: 'Automotive Care & Workshop Business Website',
    description:
      'A professional automotive service business website developed for an established auto care facility in Karachi. Features comprehensive service catalog listings (engine overhaul, computer diagnostics, oil service, brake maintenance, AC repairs), estimate booking inquiries, transparent business details, and Schema.org local business structured data.',
    category: 'Business Websites',
    categoryLabel: 'Automotive Business Website',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite', 'Schema.org'],
    image: '/assets/ashiq_autos_preview.jpg',
    fallbackGradient: 'from-blue-950 to-zinc-950',
    iconClass: 'fas fa-car',
    liveUrl: 'https://ashiq-autos-6zpy.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/Ashiq-Autos',
    highlights: [
      'Interactive auto service cards with detailed job descriptions',
      'Instant service quotation inquiry form',
      'Karachi workshop location, phone contact, and operating hours',
      'Schema.org AutoRepair local business SEO markup',
    ],
  },
  {
    id: 'luxlips-cosmetics',
    title: 'LuxLips Cosmetics Store',
    subtitle: 'Luxury Lipstick & Lip Care Boutique',
    description:
      'An elegant cosmetics e-commerce boutique featuring curated lipstick collections and lip care items. Provides interactive shade swatch selectors, virtual shade try-on visualization, modal product views with formula benefits, and dynamic shopping bag total calculations.',
    category: 'E-commerce',
    categoryLabel: 'E-commerce Website',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    image: '/assets/luxlips_preview.jpg',
    fallbackGradient: 'from-rose-950 to-stone-950',
    iconClass: 'fas fa-gem',
    liveUrl: 'https://luxlips-cosmetics-store.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/luxlips-cosmetics',
    highlights: [
      'Interactive shade swatch selector and virtual try-on color preview',
      'Detailed cosmetic formula specs & shade profiles',
      'Dynamic shopping bag state with price calculations',
      'Luxury beauty aesthetic with editorial typography',
    ],
  },
  {
    id: 'glow-theory',
    title: 'Glow Theory',
    subtitle: 'Luxury Skincare & Cosmetics Storefront',
    description:
      'A beauty and skincare e-commerce website concept developed during the CodeAlpha internship. Built with a pitch-dark luxury aesthetic showcasing curated product lines across cleansers, serums, and moisturisers, glowing visual hierarchy, responsive catalog navigation, and custom brand identity.',
    category: 'E-commerce',
    categoryLabel: 'E-commerce / Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Flexbox/Grid'],
    image: '/assets/maryam.png',
    fallbackGradient: 'from-stone-900 to-black',
    iconClass: 'fas fa-sparkles',
    liveUrl: 'https://maryamworks521.github.io/CodeAlpha_AlphaHub/codealpha_ecommerce_web/',
    repoUrl: 'https://github.com/MaryamWorks521/CodeAlpha_AlphaHub/tree/main/codealpha_ecommerce_web',
    highlights: [
      'Pitch-dark luxury theme with high-contrast radiant product cards',
      'Category-specific pages for cleansers, serums, and skincare',
      'Responsive design tested across desktop and mobile screens',
      'Clean modular frontend architecture with pure CSS3 styling',
    ],
  },
  {
    id: 'amin-nassif-portfolio',
    title: 'Amin Nassif Portfolio',
    subtitle: 'Client Portfolio for Educator & Digital Creator',
    description:
      'A bespoke portfolio website developed for client Amin Nassif Handal—an educator, Arabic & Islamic studies scholar, and digital content creator. Engineered to showcase research publications, lecture archives, educational philosophy, multimedia video works, and personal achievements with dark mode styling and bilingual typography.',
    category: 'Portfolio Websites',
    categoryLabel: 'Portfolio Website',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    image: '/assets/amin_nassif_preview.jpg',
    fallbackGradient: 'from-emerald-950 to-slate-950',
    iconClass: 'fas fa-graduation-cap',
    liveUrl: 'https://amin-nassif-portfolio.vercel.app/',
    repoUrl: 'https://github.com/MaryamWorks521/amin-nassif-portfolio',
    highlights: [
      'Tailored client design for scholar & digital content educator',
      'Academic publications and video archive showcase',
      'Bilingual typography pairing Outfit and Amiri Arabic fonts',
      'Responsive layout with structured resume and speaking schedule',
    ],
  },
  {
    id: 'national-parks',
    title: 'National Parks',
    subtitle: 'Global Nature & Conservation Travel Portal',
    description:
      'A visually captivating informational portal dedicated to world-renowned national parks and outdoor conservation destinations (Banff, Serengeti, Yellowstone, Yosemite, Galapagos, Jiuzhaigou). Features wildlife spotlights, park facts, interactive sitemap, and downloadable conservation guides.',
    category: 'Informational Websites',
    categoryLabel: 'Informational Website',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    image: '/assets/national_parks_wildlife.jpg',
    fallbackGradient: 'from-emerald-900 to-stone-950',
    iconClass: 'fas fa-mountain',
    liveUrl: 'https://maryamworks521.github.io/national-parks/',
    repoUrl: 'https://github.com/MaryamWorks521/national-parks',
    highlights: [
      'Immersive nature destination profiles with wildlife galleries',
      'Multi-page informational architecture and park exploration guides',
      'Interactive animal spotlight sheets (Tigers, Rhinos, Tortoises)',
      'Conservation awareness guides and printable downloads',
    ],
  },
];
