import { SkillCategory } from '../models/portfolio.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'Java' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C++' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: 'fa-brands fa-html5',
    skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'Tailwind CSS' }],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Flask' },
      { name: 'Spring Boot' },
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
    title: 'Tools & Technologies',
    icon: 'fa-solid fa-wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Docker' },
      { name: 'Linux' },
    ],
  },
];
