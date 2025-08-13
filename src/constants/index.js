import {
  anhs,
  sti,
  mcc,
  frontend,
  backend,
  project,
  ux,
  php,
  excel,
  c_sharp,
  cpms,
  cipher,
  python,
  machine_learning,
  adobe_photoshop,
  analyst,
  mabels,
  prototyping,
  quality_assurance,
  sql_server,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Project Manager',
    icon: project,
  },
  {
    title: 'Data Analyst',
    icon: analyst,
  },
  {
    title: 'Quality Assurance',
    icon: quality_assurance,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'SQL',
    icon: sql_server,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Machine Learning',
    icon: machine_learning,
  },
  {
    name: 'Photoshop',
    icon: adobe_photoshop,
  },
  {
    name: 'C Sharp',
    icon: c_sharp,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'High School',
    company_name: 'Antipolo National High School',
    icon: anhs,
    iconBg: '#333333',
    date: '2016 - 2020',
  },
  {
    title: 'Senior High School',
    company_name: 'Maranatha Christian College',
    icon: mcc,
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'College',
    company_name: 'STI West Negros University',
    icon: sti,
    iconBg: '#333333',
    date: '2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Car Park System',
    description: 'A Car Park Management System is a software solution that automates parking operations, including vehicle entry/exit tracking, space allocation, payment processing, and reporting, to improve efficiency and reduce congestion.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cpms,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'CIPHER',
    description:
      'A Cipher System for crime intelligence and predictive heatmaps analyzes crime data to identify patterns, forecast high-risk areas, and support faster, data-driven law enforcement responses.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: cipher,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'MABELS',
    description: 'Mabel’s Inventory System with Table Management, Order Management, and POS streamlines restaurant operations by tracking stock levels, managing table assignments, handling customer orders, and processing sales transactions in one integrated platform.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mabels,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
