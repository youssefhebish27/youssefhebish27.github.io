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
  modules?: string[];
}

export interface CertificationItem {
  id?: string;
  title: string;
  issuer: string;
  date?: string;
  role?: string;
  color: string;
  courses?: string[];
  status?: string;
  certificateUrl?: string;
  hasModal?: boolean;
  certificateDetails?: {
    recipientName: string;
    description: string;
    period: string;
    signatoryName: string;
    signatoryTitle: string;
    organization: string;
  };
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
  id?: string;
  title: string;
  category?: 'mobile' | 'api' | 'agile' | 'internship' | 'crowdtesting' | 'automation';
  description: string;
  fullDescription?: string;
  keyHighlights?: string[];
  toolsUsed?: string[];
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
