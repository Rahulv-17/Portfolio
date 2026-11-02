import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, GraduationCap, Trophy, Calendar, Sparkles } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'achievement'>('all');

  const filteredItems =
    activeTab === 'all'
      ? TIMELINE
      : TIMELINE.filter((item) => item.type === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'achievement':
        return Trophy;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="journey" className="py-24 relative bg-linen-200/40 dark:bg-obsidian-950/40 border-y border-linen-300/80 dark:border-terracotta-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
              <Sparkles size={13} className="text-terracotta-500" />
              <span>Career &amp; Academic Timeline</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-linen-950 dark:text-linen-50 tracking-tight leading-[1.15]">
              Experience, <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">Education</span> &amp; Key Milestones.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'achievement', label: 'Achievements' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-terracotta-600 text-white shadow-glow-subtle'
                    : 'glass-pill hover:bg-terracotta-500/10 text-linen-700 dark:text-linen-300 border border-linen-300/80 dark:border-terracotta-500/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const Icon = getIcon(item.type);
              return (
                <motion.div
                  key={item.role + item.period}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-8 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-400/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Type Badge & Period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-700 dark:text-terracotta-300 font-semibold">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-linen-600 dark:text-linen-400">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-linen-950 dark:text-linen-50 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                      {item.role}
                    </h3>

                    <div className="text-sm font-sans font-semibold text-linen-800 dark:text-linen-200 mt-1 mb-3">
                      {item.organization}
                      {item.location && <span className="font-normal text-linen-500"> • {item.location}</span>}
                    </div>

                    <p className="text-sm text-linen-700 dark:text-linen-300 leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight pill & Tags */}
                  <div className="pt-4 border-t border-linen-300/60 dark:border-linen-800/80 flex flex-wrap items-center justify-between gap-2">
                    {item.highlight && (
                      <span className="text-[11px] font-mono text-terracotta-700 dark:text-terracotta-300 font-medium">
                        ✦ {item.highlight}
                      </span>
                    )}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-linen-200/90 dark:bg-linen-900/90 text-linen-700 dark:text-linen-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

