import { SkillCategory } from '../models/portfolio.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C++' },
      { name: 'C#' },
    ],
  },

  {
    title: 'Frontend',
    icon: 'fa-solid fa-desktop',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Flutter' },
    ],
  },
  {
    title: 'Backend',
    icon: 'fa-solid fa-server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Spring Boot' },
      { name: 'Flask' },
      { name: 'ASP.NET Core' },
    ],
  },

  {
    title: 'Databases',
    icon: 'fa-solid fa-database',
    skills: [
      { name: 'MongoDB' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'fa-solid fa-wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Postman' },
      { name: 'VS Code' },
    ],
  },
];
