
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  link: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'academic' | 'professional';
}
