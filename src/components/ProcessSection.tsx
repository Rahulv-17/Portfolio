import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const icons = [ShieldCheck, Terminal, Rocket];

  return (
    <section id="process" className="py-24 relative bg-linen-200/40 dark:bg-obsidian-950/40 border-y border-linen-300/80 dark:border-terracotta-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
              <Sparkles size={13} className="text-terracotta-500" />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-linen-950 dark:text-linen-50 tracking-tight leading-[1.15]">
              How I Engineer <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">Reliable</span> Production Systems.
            </h2>
          </div>
          <p className="text-sm text-linen-700 dark:text-linen-300 max-w-md font-sans leading-relaxed">
            From deterministic multi-agent state machines to low-latency caching layers, each phase ensures scalability, auditable outputs, and exceptional user experiences.
          </p>
        </div>

        {/* 3 Step Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-8 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-5xl font-black text-terracotta-400/50 dark:text-terracotta-500/40 group-hover:text-terracotta-500 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-linen-950 dark:text-linen-50 mb-3 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-linen-700 dark:text-linen-300 leading-relaxed font-sans mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-linen-300/60 dark:border-linen-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-linen-200/80 dark:bg-linen-900/80 text-linen-800 dark:text-linen-300 border border-linen-300/70 dark:border-linen-800"
                      >
                        {tag}
                      </span>
                    ))}
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

