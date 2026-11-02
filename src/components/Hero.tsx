import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate min-h-[92vh] sm:min-h-screen lg:min-h-[85vh] xl:min-h-[88vh] pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-24 lg:pb-4 overflow-hidden flex flex-col justify-between">
      {/* ─── VIBRANT AMBIENT LIME AURA GLOW (Faithful to Editorial Reference) ─── */}
      <div className="hero-aura-glow absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] lg:w-[1020px] h-[340px] sm:h-[600px] lg:h-[720px] blur-[30px] sm:blur-[55px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* ─── TOP ACCOLADE BADGE (Google Website of the Day style) ─── */}
        <motion.div
          initial={{ opacity: 0.85, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-2 sm:mb-3"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-linen-300/80 dark:border-linen-800 bg-white/80 dark:bg-obsidian-900/80 backdrop-blur-md shadow-sm text-[10px] sm:text-xs font-sans text-linen-800 dark:text-linen-200 max-w-[92vw]">
            {/* Laurel Wreath Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-lime-700 dark:text-lime-400 shrink-0">
              <path d="M7 19C4 16 3 12 4 8M17 19C20 16 21 12 20 8M12 4V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
            </svg>
            <span className="font-semibold tracking-wide text-linen-900 dark:text-linen-100 whitespace-nowrap">IIIT Kottayam</span>
            <span className="text-linen-400 dark:text-linen-600">·</span>
            <span className="text-linen-700 dark:text-linen-300 font-medium hidden sm:inline">B.Tech CSE (AI &amp; Data Science)</span>
            <span className="text-linen-700 dark:text-linen-300 font-medium sm:hidden">CSE (AI &amp; DS)</span>
          </div>
        </motion.div>

        {/* ─── MAIN HERO HEADLINE: Dual Typography Pairing ─── */}
        <div className="text-center relative z-10 px-2 sm:px-4 select-none">
          {/* Line 1: Bold Modern Geometric Sans */}
          <motion.h1
            initial={{ opacity: 0.85, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6rem] tracking-tight text-linen-950 dark:text-linen-50 leading-[1.05]"
          >
            Hi I'm Rahul
          </motion.h1>

          {/* Line 2: Editorial Display Italic Serif */}
          <motion.div
            initial={{ opacity: 0.85, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-editorial italic font-normal text-2xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.8rem] tracking-tight text-linen-950 dark:text-linen-100 leading-[0.95] mt-0.5 sm:mt-1 whitespace-normal sm:whitespace-nowrap"
          >
            Full Stack Developer
          </motion.div>
        </div>

        {/* ─── CENTERSTAGE: Layered Portrait with 3D Overlap & Floating Accents ─── */}
        <div className="relative z-20 -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-16 xl:-mt-18">
          {/* Portrait Container: Compact on desktop to eliminate extra scrolling while keeping mobile intact */}
          <motion.div
            initial={{ opacity: 0.9, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[220px] sm:max-w-[290px] md:max-w-[340px] lg:max-w-[270px] xl:max-w-[300px] mx-auto"
          >
            <img
              src="/assets/me_transparent.png"
              alt="Vaddi Rahul — Full Stack Developer"
              className="w-full h-auto max-h-[460px] lg:max-h-[350px] xl:max-h-[380px] object-contain mx-auto drop-shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
              }}
              loading="eager"
            />
          </motion.div>

          {/* ─── DESKTOP FLOATING SATELLITES (Exact Reference Composition) ─── */}
          {/* Middle Left: Status Pill */}
          <motion.div
            initial={{ opacity: 0.85, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-md shadow-warm border border-linen-300/80 dark:border-linen-700/60 absolute left-4 xl:left-12 top-[44%] -translate-y-1/2 z-30 hover:scale-105 transition-transform"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500" />
            </span>
            <span className="text-xs xl:text-sm font-sans font-medium text-linen-900 dark:text-linen-100 whitespace-nowrap">
              Available for now opportunities
            </span>
          </motion.div>

          {/* Middle Right: Bio Text Blurb */}
          <motion.div
            initial={{ opacity: 0.85, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="hidden lg:block absolute right-4 xl:right-12 top-[44%] -translate-y-1/2 max-w-[240px] xl:max-w-[280px] text-left z-30"
          >
            <p className="text-sm xl:text-base font-sans text-linen-800 dark:text-linen-200 leading-relaxed font-normal">
              passionate about creating intuitive digital experiences that connect users with value.
            </p>
          </motion.div>

          {/* Bottom Left: Trust / Specialization Proof */}
          <motion.div
            initial={{ opacity: 0.85, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hidden lg:flex items-center gap-3 absolute left-4 xl:left-12 bottom-0 z-30 max-w-[320px]"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-linen-100 dark:border-obsidian-950 shadow-sm">
                AI
              </div>
              <div className="w-8 h-8 rounded-full bg-lime-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-linen-100 dark:border-obsidian-950 shadow-sm">
                FS
              </div>
              <div className="w-8 h-8 rounded-full bg-terracotta-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-linen-100 dark:border-obsidian-950 shadow-sm">
                VR
              </div>
            </div>
            <p className="text-xs font-sans text-linen-600 dark:text-linen-400 leading-snug">
              Specializing in AI &amp; Full-Stack systems at <span className="text-linen-950 dark:text-linen-100 font-semibold">IIIT Kottayam</span>.
            </p>
          </motion.div>

          {/* Bottom Right: High-Contrast Obsidian Pill CTA */}
          <motion.div
            initial={{ opacity: 0.85, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="hidden lg:flex items-center gap-3 absolute right-4 xl:right-12 bottom-0 z-30"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-linen-100 text-white dark:text-neutral-900 font-sans font-medium text-sm transition-all duration-300 shadow-warm-lg hover:scale-105"
            >
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* ─── MOBILE / TABLET CONTENT FLOW ─── */}
        <div className="lg:hidden flex flex-col items-center gap-3 mt-1 px-4 text-center z-30 relative">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-obsidian-900/90 shadow-warm border border-linen-300/80 dark:border-linen-700/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
            </span>
            <span className="text-xs font-sans font-medium text-linen-900 dark:text-linen-100">
              Available for now opportunities
            </span>
          </div>

          {/* Bio text */}
          <p className="text-xs sm:text-sm font-sans text-linen-700 dark:text-linen-300 max-w-[280px] sm:max-w-sm leading-relaxed px-2">
            passionate about creating intuitive digital experiences that connect users with value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1 w-full max-w-[280px]">
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-sans font-medium text-xs tracking-wider uppercase shadow-warm hover:scale-105 transition-all text-center"
            >
              → Get in Touch
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-linen-300 dark:border-linen-700 glass-pill text-linen-900 dark:text-linen-100 font-sans font-medium text-xs tracking-wider uppercase hover:bg-terracotta-500/10 transition-all text-center"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-3 sm:pt-4 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1 text-[11px] font-mono text-linen-500 dark:text-linen-400 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-5 h-5 rounded-full border border-linen-300 dark:border-linen-700 flex items-center justify-center group-hover:border-terracotta-500 transition-colors">
              <ArrowDown size={11} className="animate-bounce text-terracotta-500" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
