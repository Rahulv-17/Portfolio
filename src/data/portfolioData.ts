import { Project, SkillCategory, ExperienceItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Vaddi Rahul',
  firstName: 'Rahul',
  lastName: 'Vaddi',
  title: 'Full-Stack & AI Systems Developer',
  headline: 'Engineering Intelligent Multi-Agent Workflows & High-Throughput Real-Time Systems.',
  location: 'Kottayam, Kerala / Andhra Pradesh, India',
  email: 'vaddirahul3003@gmail.com',
  phone: '+91 7075436426',
  github: 'https://github.com/Rahulv-17',
  linkedin: 'https://www.linkedin.com/in/rahulvaddi/',
  resumeUrl: '/Rahul_Vaddi_Resume.pdf',
  bio: 'Computer Science undergraduate specializing in AI & Data Science at IIIT Kottayam, with practical experience engineering full-stack and AI-powered applications involving deterministic agent swarms, real-time WebSockets, LLM streaming, and high-throughput data pipelines.',
  availability: 'Available for Software Development Roles & Internships',
  educationSummary: 'B.Tech CSE with AI & Data Science • IIIT Kottayam',
};

export const STATS: StatItem[] = [
  {
    value: '150+',
    label: 'DSA Solved',
    sublabel: 'LeetCode & GeeksforGeeks problem solving',
  },
  {
    value: '3+',
    label: 'Production Systems',
    sublabel: 'Multi-agent AI, repo intelligence & expense platforms',
  },
  {
    value: '7.3',
    label: 'CGPA (Till Sem 6)',
    sublabel: 'IIIT Kottayam • CSE with AI & Data Science',
  },
  {
    value: '92.5%',
    label: 'Intermediate Score',
    sublabel: 'Sri Chaitanya (925/1000) • Academic Excellence',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'credix',
    title: 'Credix',
    subtitle: 'AI-Powered Credit Coaching & Multi-Agent Financial Platform',
    category: 'AI & Distributed Systems',
    description: 'A privacy-first multi-agent platform that analyzes credit reports and delivers personalized score-improvement plans, credit-card recommendations, and insurance guidance.',
    techStack: ['TypeScript', 'Mastra', 'Hono', 'Python', 'FastAPI', 'MongoDB', 'Snowflake', 'Redis/Pogocache', 'OpenTelemetry'],
    contributions: [
      'Built a privacy-first multi-agent platform that analyzes credit reports and delivers personalized score-improvement plans, credit-card recommendations, and insurance guidance.',
      'Engineered deterministic agent workflows using Mastra and Hono, backed by a Python/FastAPI service for reproducible, auditable recommendations.',
      'Designed a Redis/Pogocache → MongoDB → Snowflake data pipeline with PII masking, server-side signal computation, read-through caching, and OpenTelemetry tracing.',
    ],
    githubUrl: 'https://github.com/Rahulv-17/Credix.git',
    featured: true,
    image: '/assets/projects/credix.svg',
    stats: [
      { label: 'Cache Hit Rate', value: '94.2%' },
      { label: 'Agent Pipeline', value: 'Deterministic' },
    ],
  },
  {
    id: 'repolens-ai',
    title: 'RepoLens AI',
    subtitle: 'AI-Powered Repository Intelligence & Architectural Insights',
    category: 'Developer Tooling & Generative AI',
    description: 'A full-stack tool that analyzes GitHub repositories and generates structured architecture, dependency insights, and streaming Gemini AI codebase interrogation.',
    techStack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT/OAuth 2.0'],
    contributions: [
      'Built a full-stack tool that analyzes GitHub repositories and generates structured architecture and dependency insights.',
      'Automated repository cloning, source scanning, import/export extraction, dependency graph generation, important-file ranking, and health metrics.',
      'Integrated Gemini with context-aware code retrieval and streaming chat for repository questions, secured using JWT/OAuth 2.0.',
    ],
    githubUrl: 'https://github.com/Rahulv-17/RepoLens-AI.git',
    liveUrl: 'https://repolens.rahulvaddi.me/',
    featured: true,
    image: '/assets/projects/repolens.svg',
    stats: [
      { label: 'AST Parse Rate', value: '98.7%' },
      { label: 'AI Retrieval', value: 'Context-Aware' },
    ],
  },
  {
    id: 'splitmint',
    title: 'SplitMint',
    subtitle: 'Real-Time Expense Sharing & Collaborative Financial Tracking',
    category: 'Full-Stack & Real-Time Web',
    description: 'An interactive expense-sharing platform supporting group splits, shared budgets, recurring expenses, and automated settlement tracking with live WebSockets.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT/OAuth 2.0', 'Recharts'],
    contributions: [
      'Built an expense-sharing platform supporting group splits, shared budgets, recurring expenses, and settlement tracking.',
      'Developed REST APIs using Express.js and Mongoose for expenses, groups, budgets, categories, settlements, and users.',
      'Implemented real-time updates with Socket.IO, JWT/Google OAuth authentication, and Recharts dashboards for spending analytics.',
    ],
    githubUrl: 'https://github.com/Rahulv-17/SplitMint.git',
    liveUrl: 'https://splitmint.rahulvaddi.me/',
    featured: true,
    image: '/assets/projects/splitmint.svg',
    stats: [
      { label: 'Live Protocol', value: 'Socket.IO' },
      { label: 'Analytics', value: 'Recharts Visuals' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Generative AI' },
      { name: 'Multi-Agent Systems (Mastra)' },
      { name: 'Gemini API & LLM Streaming' },
      { name: 'Machine Learning' },
      { name: 'NLP (Natural Language Processing)' },
      { name: 'Computer Vision' },
      { name: 'OpenCV' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'C++' },
      { name: 'C' },
    ],
  },
  {
    title: 'Frontend Engineering',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'HTML5 & CSS3' },
      { name: 'Framer Motion' },
      { name: 'Recharts' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Hono' },
      { name: 'FastAPI' },
      { name: 'REST APIs' },
      { name: 'Socket.IO (WebSockets)' },
      { name: 'OpenTelemetry' },
    ],
  },
  {
    title: 'Databases & Caching',
    skills: [
      { name: 'MongoDB' },
      { name: 'Snowflake' },
      { name: 'Redis / Pogocache' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Core CS & Tools',
    skills: [
      { name: 'Operating Systems' },
      { name: 'DBMS' },
      { name: 'Computer Networks' },
      { name: 'OOPS' },
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Render' },
      { name: 'Vercel' },
      { name: 'Postman' },
    ],
  },
];

export const TIMELINE: ExperienceItem[] = [
  {
    role: 'Freelance Full-Stack Developer',
    organization: 'Client Engagements',
    period: 'May 2025 – Aug 2025',
    description: 'Developed and delivered multiple full-stack websites for clients, implementing frontend interfaces and back-end functionality based on project requirements.',
    type: 'experience',
    tags: ['Client Delivery', 'React', 'Node.js', 'REST APIs', 'Full-Stack'],
    highlight: 'Delivered multiple end-to-end client applications',
  },
  {
    role: 'B.Tech. in CSE with AI and Data Science',
    organization: 'Indian Institute of Information Technology, Kottayam',
    location: 'Kottayam, Kerala, India',
    period: 'Aug 2023 – Apr 2027',
    description: 'Rigorous coursework in Artificial Intelligence, Data Science, Distributed Systems, Algorithms, and Software Architecture. CGPA: 7.3 (Till Semester 6).',
    type: 'education',
    tags: ['CGPA: 7.3', 'AI & Data Science', 'Algorithms', 'Distributed Systems'],
    highlight: 'Institute of National Importance (IIIT Kottayam)',
  },
  {
    role: 'Intermediate Education (MPC)',
    organization: 'Sri Chaitanya Educational Institution',
    location: 'Andhra Pradesh, India',
    period: 'Jul 2020 – May 2022',
    description: 'Scored 925 / 1000 with distinction across Mathematics, Physics, and Chemistry.',
    type: 'education',
    tags: ['925 / 1000', 'Mathematics', 'Physics', 'Chemistry'],
    highlight: 'Top 5% statewide academic achievement',
  },
  {
    role: 'Autonomous Hardware Drone Engineer',
    organization: 'Hands-on Drone Workshop',
    period: 'Workshop Milestone',
    description: 'Built a drone from scratch during a hands-on workshop, gaining practical experience in drone assembly, motor controllers, and hardware integration.',
    type: 'achievement',
    tags: ['Hardware Integration', 'Robotics', 'Drone Assembly', 'Firmware'],
    highlight: 'Assembled and calibrated flight-ready drone hardware',
  },
  {
    role: 'Algorithmic Problem Solving Mastery',
    organization: 'LeetCode & GeeksforGeeks',
    period: 'Ongoing Discipline',
    description: 'Solved 150+ DSA problems across LeetCode and GeeksforGeeks spanning Dynamic Programming, Graphs, Trees, and System Design patterns.',
    type: 'achievement',
    tags: ['150+ Problems', 'LeetCode', 'GeeksforGeeks', 'Data Structures & Algorithms'],
    highlight: '150+ Algorithmic Solutions',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover & Architect',
    description: 'Deconstruct complex domain challenges into deterministic agent workflows and low-latency system architectures. Define PII security boundaries, API contracts, and schema designs before writing a single line of code.',
    tags: ['Domain Modeling', 'Multi-Agent Flowcharts', 'PII Masking Rules', 'Data Architecture'],
  },
  {
    number: '02',
    title: 'Engineer & Optimize',
    description: 'Implement high-throughput backend services using Hono and FastAPI paired with read-through caching layers (Redis/Pogocache) and context-aware LLM retrieval streams. Ensure full observability with OpenTelemetry.',
    tags: ['Mastra Swarms', 'Redis Caching', 'FastAPI Microservices', 'OpenTelemetry'],
  },
  {
    number: '03',
    title: 'Deliver & Polish',
    description: 'Craft responsive, accessible frontend interfaces with React, Vite, and Tailwind CSS. Wire real-time WebSocket state management (Socket.IO) and deploy seamlessly to production on Vercel and Render.',
    tags: ['React + Vite', 'Socket.IO Sync', 'Awwwards-grade Motion', 'Vercel / Render CI/CD'],
  },
];

