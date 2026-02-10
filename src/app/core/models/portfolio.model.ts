/**
 * Portfolio Data Models
 * Centralized interfaces for type-safe portfolio content
 */

export interface Skill {
  name: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[]; // Key achievements/metrics
}

export interface Education {
  level: 'primary' | 'secondary' | 'higher' | 'certification';
  institution: string;
  period: string;
  degree?: string;
}

export interface Course {
  title: string;
  provider: string;
  year?: number;
  certificateUrl?: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  imageUrl: string;
  resumeUrl?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}
