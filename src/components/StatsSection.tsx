import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/portfolioData';
import { Award, Terminal, Cpu, GraduationCap } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const icons = [Terminal, Cpu, GraduationCap, Award];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl glass-card border border-linen-300/80 dark:border-terracotta-500/20 shadow-warm hover:shadow-warm-lg hover:border-terracotta-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle corner decorative glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-terracotta-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="p-3 w-fit rounded-2xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400 mb-6 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-black text-linen-950 dark:text-linen-50 tracking-tight mb-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                  {stat.value}
                </div>

                <div className="font-sans font-bold text-base text-linen-900 dark:text-linen-100 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs font-mono text-linen-600 dark:text-linen-400 leading-relaxed">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

