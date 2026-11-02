export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  contributions: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  type: 'experience' | 'education' | 'achievement';
  tags?: string[];
  highlight?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

