import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  color: string;
  courses?: string[]; // Added for Rowad Masr list
  status?: string; // Added to indicate "In Progress"
}

export interface StatItem {
  value: string;
  label: string;
  link?: string;
  color: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  color: string;
  icon: LucideIcon;
}

export interface KeyLearning {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}