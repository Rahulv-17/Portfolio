import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-terracotta-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-sand-300/20 dark:bg-terracotta-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
              <Sparkles size={13} className="text-terracotta-500" />
              <span>Selected Works &amp; Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-linen-950 dark:text-linen-50 tracking-tight leading-[1.15]">
              Featured <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">Engineering</span> Systems &amp; AI Platforms.
            </h2>
          </div>
          <p className="text-sm text-linen-700 dark:text-linen-300 max-w-md font-sans leading-relaxed">
            Real-world full-stack platforms engineered from scratch, featuring multi-agent AI orchestration, AST dependency graph generation, and real-time distributed state.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group p-6 sm:p-10 rounded-4xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-400/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left or Right: Content Info */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 dark:text-terracotta-400 font-semibold px-3 py-1 rounded-full bg-terracotta-500/10">
                          {project.category}
                        </span>
                        {project.stats && project.stats.map((stat, i) => (
                          <span
                            key={i}
                            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-linen-600 dark:text-linen-400 px-2.5 py-0.5 rounded-full bg-linen-200 dark:bg-linen-900 border border-linen-300/60 dark:border-linen-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                            {stat.label}: <strong className="text-linen-950 dark:text-linen-100">{stat.value}</strong>
                          </span>
                        ))}
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-black text-linen-950 dark:text-linen-50 mt-2">
                        {project.title}
                      </h3>
                      <p className="font-sans font-medium text-sm text-terracotta-700 dark:text-terracotta-300 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-linen-700 dark:text-linen-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Contributions from Resume */}
                    <div className="space-y-2.5 pt-1">
                      {project.contributions.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-linen-800 dark:text-linen-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-linen-200/90 dark:bg-linen-900/90 text-linen-800 dark:text-linen-200 border border-linen-300/70 dark:border-linen-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-glow transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <ExternalLink size={14} />
                          <span>Live Platform</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full glass-pill hover:bg-terracotta-500/10 text-linen-900 dark:text-linen-100 font-semibold text-xs tracking-wider uppercase border border-linen-300 dark:border-terracotta-500/30 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <Github size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Frame */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-linen-300 dark:border-linen-800 bg-linen-900 group-hover:border-terracotta-400/50 shadow-warm-lg transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
