import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Indian Standard Time (Asia/Kolkata)
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-linen-300/80 dark:border-terracotta-500/20 bg-linen-200/60 dark:bg-obsidian-950/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top bar with Navigation & Quick info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 border-b border-linen-300/70 dark:border-linen-800 gap-6">

          {/* Real-time IST Clock */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-linen-300 dark:border-linen-800 text-xs font-mono text-linen-800 dark:text-linen-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kottayam / India (IST):</span>
            <span className="font-bold text-terracotta-600 dark:text-terracotta-400">{time || 'Live IST'}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-pill hover:bg-terracotta-500 hover:text-white border border-linen-300 dark:border-terracotta-500/30 text-xs font-mono uppercase tracking-wider transition-all duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Grand Oversized Typography Banner */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <div className="font-serif font-black text-[12vw] sm:text-[11vw] tracking-tighter leading-none text-linen-900/10 dark:text-linen-100/10 hover:text-terracotta-600/20 dark:hover:text-terracotta-400/20 transition-colors duration-500 whitespace-nowrap">
            VADDI RAHUL
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-linen-600 dark:text-linen-400 gap-4 pt-4">
          <p>© {new Date().getFullYear()} Vaddi Rahul. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Vaddi_Rahul_Resume.pdf"
              className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

