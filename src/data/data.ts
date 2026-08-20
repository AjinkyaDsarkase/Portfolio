// Central store for all resume/portfolio content.
// Edit this file to update the site — components read from here, not hardcoded markup.

export const personalInfo = {
  name: 'Ajinkya Darkase',
  title: 'Frontend Developer',
  tagline:
    'I build scalable, responsive React & Next.js applications with clean, maintainable code.',
  email: 'ajinkya.darkase12@gmail.com',
  phone: '+91 95296 84082',
  location: 'Baner, Pune',
  github: 'https://github.com/AjinkyaDsarkase',
  linkedin: 'https://linkedin.com/in/ajinkyadarkase121373',
  // PLACEHOLDER: add your resume PDF at /public/resume/Ajinkya_Darkase_Resume.pdf
  resumeUrl: '/resume/Ajinkya_Darkase_Resume.pdf',
  // PLACEHOLDER: add a square photo (e.g. 480x480+) at /public/images/avatar.jpg,
  // then set this to '/images/avatar.jpg'. Left `null`, the Hero shows a generated
  // placeholder instead — decided here (not by a failed image load) so it renders
  // correctly whether or not JavaScript runs.
  avatarUrl: '/images/projects/Ajinkya.png',
  siteUrl: 'https://ajinkyadarkase.dev', // PLACEHOLDER: update with your deployed domain
};

export const aboutMe = `Frontend Developer with 1+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. Skilled in component-based architecture, reusable UI development, and state management with Zustand, with hands-on experience integrating secure REST APIs and role-based authentication. Focused on clean, maintainable code and responsive, enterprise-grade interfaces, working in Agile teams with Git and CI/CD.`;

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling / UI',
    skills: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'State Management',
    skills: ['Zustand', 'React Context'],
  },
  {
    category: 'API & Auth',
    skills: ['REST APIs', 'Axios', 'Authentication', 'Role-based Access Control'],
  },
  {
    category: 'Backend / Data',
    skills: ['Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'CI/CD', 'Postman', 'VS Code', 'Chrome DevTools', 'Agile'],
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Frontend Developer',
    company: 'Brilliantech Software Pvt. Ltd.',
    location: 'Baner, Pune',
    startDate: 'Aug 2025',
    endDate: 'Present',
    highlights: [
      'Developed and maintained responsive, production-grade web applications using React.js, Next.js, and TypeScript for enterprise clients.',
      'Built reusable UI components and optimized frontend performance, improving maintainability and delivery speed.',
      'Collaborated with cross-functional teams in an Agile environment using Git and CI/CD workflows.',
    ],
  },
];

// Maps to an icon + gradient tone in ProjectCover — used as a generated cover
// when no real screenshot is available (see `image` below).
export type ProjectCoverIcon = 'vendor' | 'recruit' | 'bot';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  // PLACEHOLDER: replace with real deployed URLs / repo links
  liveUrl: string | null;
  githubUrl: string | null;
  coverIcon: ProjectCoverIcon;
  // Optional real screenshot. If set (and the file exists in public/images/projects/),
  // ProjectCard renders it instead of the generated cover.
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'vms',
    title: 'VMS',
    subtitle: 'Vendor Management System',
    description:
      'A platform that helps businesses manage vendors end to end — sign-up, document checks, and ongoing tracking — with role-based access for five types of users, admin approval dashboards with Excel report export, live updates, global search, and a fully responsive UI.',
    techStack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Axios',
      'React Hook Form',
      'Zod',
      'REST APIs',
      'Git',
    ],
    liveUrl: null, // PLACEHOLDER: add live demo URL
    githubUrl: null, // PLACEHOLDER: add GitHub repo URL
    coverIcon: 'vendor',
  },
  {
    slug: 'recruit-management-system',
    title: 'Recruit Management System',
    subtitle: 'Recruitment website with careers portal',
    description:
      'A live recruitment website with a blog and case studies built for search-engine ranking, a candidate/employer job-application system with resume uploads and automated confirmation emails, instant job search, one-tap WhatsApp contact, and Google Maps directions.',
    techStack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'REST APIs',
      'Git',
    ],
    liveUrl: null, // PLACEHOLDER: add live demo URL
    githubUrl: null, // PLACEHOLDER: add GitHub repo URL
    coverIcon: 'recruit',
  },
  {
    slug: 'bot-builder',
    title: 'Bot Builder',
    subtitle: 'Low-Code Chatbot Platform',
    description:
      'A low-code platform where administrators create chatbot workflows via a drag-and-drop interface, built with reusable responsive components, secure login and access controls, and performance-optimized rendering.',
    techStack: [
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'React Flow',
      'Axios',
      'REST APIs',
      'Git',
      'CI/CD',
    ],
    liveUrl: null, // PLACEHOLDER: add live demo URL
    githubUrl: null, // PLACEHOLDER: add GitHub repo URL
    coverIcon: 'bot',
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: '[YOUR INSTITUTION NAME HERE]', // PLACEHOLDER
    year: '[YOUR GRADUATION YEAR HERE]', // PLACEHOLDER
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// Maps to an icon in WorkProcess.
export type ProcessStepIcon = 'discover' | 'plan' | 'design' | 'develop' | 'test' | 'deploy';

export interface ProcessStep {
  icon: ProcessStepIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: 'discover',
    title: 'Discover',
    description: 'Understanding goals, requirements, and project scope.',
  },
  {
    icon: 'plan',
    title: 'Plan',
    description: 'Planning architecture, tech stack, and project roadmap.',
  },
  {
    icon: 'design',
    title: 'Design',
    description: 'Creating wireframes and clean, responsive UI.',
  },
  {
    icon: 'develop',
    title: 'Develop',
    description: 'Writing clean, scalable, and efficient code.',
  },
  {
    icon: 'test',
    title: 'Test',
    description: 'Testing for bugs, performance, and cross-browser issues.',
  },
  {
    icon: 'deploy',
    title: 'Deploy',
    description: 'Deploying to production and ensuring a smooth launch.',
  },
];

// PLACEHOLDER: replace with your real Formspree form endpoint (https://formspree.io)
export const formspreeEndpoint = 'https://formspree.io/f/mjybjlpz';
