import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const allCategories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-terracotta-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
            <Sparkles size={13} className="text-terracotta-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-linen-950 dark:text-linen-50 tracking-tight leading-[1.15]">
            Modern Tech Stack &amp; <span className="font-editorial italic font-normal text-terracotta-600 dark:text-terracotta-400">Core CS</span> Foundations.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-terracotta-600 text-white shadow-glow-subtle'
                  : 'glass-pill hover:bg-terracotta-500/10 text-linen-700 dark:text-linen-300 border border-linen-300/80 dark:border-terracotta-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: catIdx * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-linen-300/60 dark:border-linen-800/80">
                  <h3 className="font-serif text-xl font-bold text-linen-950 dark:text-linen-50">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-terracotta-600 dark:text-terracotta-400 font-semibold px-2 py-0.5 rounded-full bg-terracotta-500/10">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center p-2.5 rounded-xl hover:bg-terracotta-500/5 dark:hover:bg-terracotta-500/10 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle size={15} className="text-terracotta-500" />
                        <span className="font-sans font-medium text-sm text-linen-900 dark:text-linen-100 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

