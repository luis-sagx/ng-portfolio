import { Project } from '../models/portfolio.model';

export const PROJECTS: Project[] = [
  {
    image: 'assets/img/cinema.png',
    title: 'Cinema System',
    description:
      'Web application for managing movie theater operations, including showtimes.',
    technologies: ['Angular', 'Node JS', 'Express', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/luis-sagx/cinema-tests',
    githubUrl: 'https://github.com/luis-sagx/cinema-tests',
    highlights: [
      'Comprehensive unit and integration testing',
      'Stress testing for performance optimization',
      'Security testing to ensure data protection',
    ],
  },
  {
    image: 'assets/img/sagxup.jpg',
    title: 'Sagx UP - Financial Control',
    description:
      'Mobile application for personal financial management, including IA',
    technologies: ['Flutter', 'Firebase', 'AI Google Studio'],
    link: 'https://github.com/luis-sagx/sagx-up',
    githubUrl: 'https://github.com/luis-sagx/sagx-up',
    highlights: [
      'AI-driven financial insights',
      'Real-time expense tracking',
      'User-friendly mobile interface',
    ],
  },
  {
    image: 'assets/img/sureno.png',
    title: 'Online Liquor Store "Sureño"',
    description:
      'Website designed for selling and managing liquors from the "Sureño" brand.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Flask',
      'MongoDB',
      'Bootstrap',
    ],
    link: 'https://github.com/luis-sagx/Sureno.git',
    githubUrl: 'https://github.com/luis-sagx/Sureno.git',
    highlights: [
      'Full-stack e-commerce solution',
      'Real-time inventory management',
      'Administrative dashboard for order tracking',
    ],
  },
  {
    image: 'assets/img/carta.png',
    title: 'Letter Sending "Simply Lovely"',
    description:
      'Interactive platform for children to create, customize, and send digital letters.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node JS',
      'Express',
      'MongoDB',
    ],
    link: 'https://github.com/MateoJa54/carta.git',
    githubUrl: 'https://github.com/MateoJa54/carta.git',
    highlights: [
      'Interactive UI for children',
      'Voice message integration',
      'Email automation',
    ],
  },
  {
    image: 'assets/img/hospital.png',
    title: 'Hospital Management System',
    description:
      'Web application for managing medical appointments and treatments.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'C#',
      'SQL Server',
      'Bootstrap',
    ],
    link: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git',
    githubUrl: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git',
    highlights: [
      'Complete CRUD operations',
      'Appointment scheduling system',
      'Application of stored procedures for data integrity',
    ],
  },
  {
    image: 'assets/img/control.png',
    title: 'Expense Control',
    description:
      'Web application for managing and tracking personal expenses effectively.',
    technologies: ['React', 'Typescript', 'Tailwind CSS'],
    link: 'https://github.com/luis-sagx/expense-control.git',
    githubUrl: 'https://github.com/luis-sagx/expense-control.git',
    highlights: [
      'Intuitive user interface',
      'Real-time expense tracking',
      'Data visualization with charts',
    ],
  },
];
