
import React from 'react';
import { Project, SkillCategory, Experience } from './types';

const GITHUB_BASE = 'https://github.com/mahnoorshkh';

export const PROJECTS: Project[] = [
  {
    id: 'buzzhub',
    title: 'BuzzHub',
    description: 'A robust e-commerce and real-time tracking platform built with the MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    features: [
      'Seamless Stripe integration for secure payments',
      'WebSockets (Socket.io) for real-time delivery tracking',
      'Complex state management for multi-vendor carts'
    ],
    link: GITHUB_BASE
  },
  {
    id: 'gofood',
    title: 'GoFood MERN App',
    description: 'A comprehensive restaurant and food delivery application with a focus on high-performance listings.',
    tags: ['MERN', 'Express', 'React', 'Node.js', 'MongoDB'],
    features: [
      'Dynamic food category filtering and search',
      'Secure user authentication and session management',
      'Real-time cart updates and order history tracking'
    ],
    link: GITHUB_BASE
  },
  {
    id: 'proplink',
    title: 'PropLink Property App',
    description: 'Modern real estate platform for listing and discovering properties with advanced filtering.',
    tags: ['MERN', 'Context API', 'Express', 'Node.js', 'MongoDB'],
    features: [
      'Image upload and management for property listings',
      'Advanced search filters for price, location, and amenities',
      'Responsive design for mobile-first property browsing'
    ],
    link: GITHUB_BASE
  },
  {
    id: 'carter',
    title: 'Carter Boating App',
    description: 'Service-based application for boating enthusiasts with automated workflows.',
    tags: ['Next.js', 'AWS S3', 'Node.js', 'Google Maps API', 'Cron Jobs'],
    features: [
      'AWS S3 for high-speed asset management',
      'Google Maps API for location-based boat tracking',
      'CRON jobs for automated recurring maintenance alerts'
    ],
    link: GITHUB_BASE
  },
  {
    id: 'medease',
    title: 'MedEase (Final Year Project)',
    description: 'AI-powered healthcare assistant facilitating patient-doctor interactions.',
    tags: ['Python', 'GenAI', 'React Native', 'Web Scraping', 'Node.js'],
    features: [
      'AI-powered chatbot for preliminary diagnosis',
      'Intelligent web scraping for real-time medical news',
      'Cross-platform mobile access for patients'
    ],
    link: GITHUB_BASE
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'SQL', 'Python', 'C++', 'Java']
  },
  {
    name: 'Backend & Cloud',
    skills: ['Node.js (Express/Nest)', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Specialized',
    skills: ['Gen AI', 'Power BI', 'API Testing (Postman/JMeter)', 'CI/CD Pipelines']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Visiting Faculty',
    company: 'FAST NUCES',
    period: 'Current',
    description: [
      'Teaching Web Engineering to senior undergraduate students',
      'Designing curricula focused on RESTful API design and full-stack architectures',
      'Mentoring students in building production-ready scalable systems'
    ],
    type: 'academic'
  },
  {
    role: 'Backend Developer',
    company: 'Launch Box',
    period: 'Previous',
    description: [
      'Developed high-performance APIs using Node.js and Express',
      'Optimized database queries in MongoDB leading to a 30% reduction in response time',
      'Integrated third-party microservices and payment gateways'
    ],
    type: 'professional'
  }
];

export const ICONS = {
  Terminal: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
  ),
  Layers: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  ),
  External: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  )
};
