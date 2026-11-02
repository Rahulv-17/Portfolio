import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, Layers, Zap, Wrench, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Bot,
      title: 'Deterministic Multi-Agent Swarms',
      description: 'Designing audit-ready agentic architectures using Mastra and Hono, backed by Python/FastAPI microservices for reproducible, reliable AI reasoning.',
    },
    {
      icon: Zap,
      title: 'Real-Time Distributed Systems',
      description: 'Engineering low-latency event pipelines, WebSocket synchronization via Socket.IO, and high-throughput server-side signal computation.',
    },
    {
      icon: Layers,
      title: 'High-Performance Caching & Pipelines',
      description: 'Architecting Redis/Pogocache -> MongoDB -> Snowflake data workflows with SHA-256 PII masking, read-through caching, and OpenTelemetry observability.',
    },
    {
      icon: Wrench,
      title: 'Full-Stack & Hardware Breadth',
      description: 'From modern React/Vite frontends with Tailwind and Framer Motion to hands-on drone flight controller hardware assembly from scratch.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-terracotta-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Editorial Serif styling */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <Sparkles size={13} className="text-terracotta-500" />
            <span>Philosophy &amp; Engineering Focus</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-linen-950 dark:text-linen-50 leading-[1.15] tracking-tight">
            Blending <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">Deterministic AI</span> with High-Throughput Distributed Architecture.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-linen-700 dark:text-linen-300 leading-relaxed font-sans">
            I am a Computer Science undergraduate at <strong className="text-linen-950 dark:text-linen-50 font-semibold">Indian Institute of Information Technology, Kottayam</strong> specializing in AI &amp; Data Science. My work revolves around turning complex stochastic models and distributed protocols into dependable, delightful production software.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm relative">
              <div className="text-xs font-mono text-terracotta-600 dark:text-terracotta-400 uppercase tracking-widest font-semibold mb-3">
                Academic &amp; Practical Foundation
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen-950 dark:text-linen-50 mb-4">
                IIIT Kottayam • CSE with AI &amp; Data Science
              </h3>
              <p className="text-sm sm:text-base text-linen-700 dark:text-linen-300 leading-relaxed mb-6 font-sans">
                Throughout my B.Tech at IIIT Kottayam (maintaining a 7.3 CGPA through Sem 6), I have complemented core computer science disciplines—Operating Systems, DBMS, Computer Networks, and OOP—with applied multi-agent AI and full-stack engineering.
              </p>

              <div className="space-y-3">
                {[
                  '150+ DSA algorithmic problems solved on LeetCode & GeeksforGeeks.',
                  'Designed privacy-first multi-agent financial pipelines with Mastra, Hono, and Snowflake.',
                  'Developed context-aware repository intelligence powered by Gemini LLM streaming.',
                  'Built collaborative real-time expense sharing tools with Socket.IO and Recharts analytics.',
                  'Assembled and calibrated an autonomous drone from scratch in a hands-on hardware workshop.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-linen-800 dark:text-linen-200">
                    <CheckCircle2 size={16} className="text-terracotta-600 dark:text-terracotta-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-linen-300/60 dark:border-linen-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-linen-600 dark:text-linen-400">
                <span>Location: Kottayam, India</span>
                <span className="text-terracotta-600 dark:text-terracotta-400 font-semibold">{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Architecture Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 w-fit rounded-2xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-linen-950 dark:text-linen-50 mb-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-linen-700 dark:text-linen-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

