/**
 * Nafis Sadik — Centralized Profile Data
 * Edit this file to update all content across the portfolio.
 */

export const siteConfig = {
  // ─── Domain ────────────────────────────────────────────────────────────────
  // Replace with your production domain when deploying.
  url: 'https://nafissadik.com',

  // ─── SEO ───────────────────────────────────────────────────────────────────
  title: 'Nafis Sadik | Technology & Media Specialist',
  description:
    'Nafis Sadik is a Technology and Media Specialist based in Dhaka, Bangladesh, working at the intersection of SaaS, Artificial Intelligence, and digital media.',
  ogImage: 'https://i.ibb.co.com/4gm5ddHX/nafis-sadik.webp',
};

export const person = {
  name: 'Nafis Sadik',
  firstName: 'Nafis',
  lastName: 'Sadik',
  monogram: 'NS',
  title: 'Technology & Media Specialist',
  tagline:
    'Building at the intersection of technology, media and intelligent digital experiences.',
  location: 'Dhaka, Bangladesh',
  locationShort: 'Dhaka, BD',
  availability: 'Open to opportunities',
};

export const social = {
  linkedin: 'https://www.linkedin.com/in/inafissadik/',
  facebook: 'https://www.facebook.com/i.nafissadik',
  instagram: 'https://www.instagram.com/nafis.__.sadik',
  // Replace NAFIS_GITHUB_USERNAME with your actual GitHub username.
  github: 'https://github.com/NAFIS_GITHUB_USERNAME',
};

export const contact = {
  // Replace EMAIL_PLACEHOLDER with your actual email address.
  email: 'nafissadik50@gmail.com',
};

export const about = {
  intro:
    'I am a Technology and Media Specialist at TechDoor LLC, navigating the space where software systems, artificial intelligence, and digital media converge. My work sits at the crossroads of product thinking and technical execution.',
  interests: [
    {
      label: 'SaaS Development',
      description:
        'Designing and building software-as-a-service products with a focus on scalability and user experience.',
    },
    {
      label: 'Artificial Intelligence',
      description:
        'Exploring the application of AI in real-world products and digital workflows.',
    },
    {
      label: 'Technology',
      description:
        'Staying at the forefront of emerging technologies and their impact on society and business.',
    },
    {
      label: 'Media',
      description:
        'Understanding and shaping the relationship between technology platforms and digital media.',
    },
  ],
};

export const experience = [
  {
    id: 'exp-01',
    role: 'Technology & Media Specialist',
    company: 'TechDoor LLC',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    workMode: 'On-site',
    startDate: 'September 2026',
    endDate: null, // null = Present
    responsibilities: [
      // Add your professional responsibilities here.
      'Add key responsibility or achievement here.',
      'Add key responsibility or achievement here.',
      'Add key responsibility or achievement here.',
    ],
    companyUrl: "https://www.techdoorllc.com/", // Add company URL if available.
  },
];

export const education = [
  {
    id: 'edu-01',
    institution: 'Southeast University',
    degree: 'Bachelor of Science',
    field: 'Computer Science and Engineering',
    location: null,
    startYear: null, // Add start year when available.
    endYear: null,   // Add end/expected graduation year when available.
    achievements: [], // Add achievements, GPA, honours when available.
  },
];

export const skills = {
  primary: [
    { label: 'SaaS Development', level: 'core' },
    { label: 'Artificial Intelligence', level: 'core' },
    { label: 'Technology', level: 'core' },
    { label: 'Media', level: 'core' },
    { label: 'Computer Science', level: 'core' },
    { label: 'Digital Products', level: 'core' },
  ],
  // Add specific tools, languages, or technologies as they become relevant.
  tools: [
    // e.g. { label: 'React', category: 'Frontend' },
  ],
};

export const projects = [
  {
    id: 'proj-01',
    index: '01',
    title: 'Add Project Name',
    description:
      'Add a concise description of this project — what it does, the problem it solves, and its impact.',
    category: 'SaaS',
    technologies: [],
    imageUrl: null, // Add project image path e.g. '/images/project-01.jpg'
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    featured: true,
  },
  {
    id: 'proj-02',
    index: '02',
    title: 'Add Project Name',
    description:
      'Add a concise description of this project — what it does, the problem it solves, and its impact.',
    category: 'AI',
    technologies: [],
    imageUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    featured: true,
  },
  {
    id: 'proj-03',
    index: '03',
    title: 'Add Project Name',
    description:
      'Add a concise description of this project — what it does, the problem it solves, and its impact.',
    category: 'Digital Product',
    technologies: [],
    imageUrl: null,
    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
];
