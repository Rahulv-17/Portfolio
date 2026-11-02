import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-between">
      {/* Ambient Lighting Gradients derived from Rahul's Photograph */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-b from-terracotta-400/20 via-terracotta-600/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-sand-300/25 dark:bg-terracotta-900/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-terracotta-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 my-auto">
        {/* Hero Main Grid: Left Column, Center Portrait, Right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ─── LEFT COLUMN: Greeting, Name, Socials, Stat ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-between order-1 lg:order-1 text-center lg:text-left space-y-6"
          >
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-terracotta-600 dark:text-terracotta-400 font-semibold flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-6 h-[1.5px] bg-terracotta-500 inline-block" />
                Hello, I am
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-linen-950 dark:text-linen-50 leading-[1.05]">
                VADDI <br />
                <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">
                  RAHUL
                </span>
              </h1>
              <p className="mt-3 text-xs font-mono text-linen-600 dark:text-linen-400 uppercase tracking-wider">
                Full-Stack &amp; AI Engineer
              </p>
            </div>

            {/* Social Links Arranged Vertically (Desktop) / Horizontally (Mobile) */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-linen-500 dark:text-linen-400 block mb-3">
                Verified Profiles
              </span>
              <div className="flex flex-wrap lg:flex-col items-center justify-center lg:items-start gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 hover:border-terracotta-500/40 transition-all text-linen-800 dark:text-linen-200 text-xs font-medium"
                >
                  <div className="p-1.5 rounded-lg bg-linen-200 dark:bg-linen-800 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                    <Github size={14} />
                  </div>
                  <span>github.com/Rahulv-17</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 hover:border-terracotta-500/40 transition-all text-linen-800 dark:text-linen-200 text-xs font-medium"
                >
                  <div className="p-1.5 rounded-lg bg-linen-200 dark:bg-linen-800 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </div>
                  <span>linkedin.com/in/rahulvaddi</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 hover:border-terracotta-500/40 transition-all text-linen-800 dark:text-linen-200 text-xs font-medium"
                >
                  <div className="p-1.5 rounded-lg bg-linen-200 dark:bg-linen-800 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </div>
                  <span>vaddirahul3003@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─── CENTER COLUMN: Real Portrait + Ambient Glowing Arch ─── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-2 lg:order-2 relative">
            {/* Glowing Arch & Portrait Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto"
            >
              {/* Arched Background with Photograph-Derived Warm Lighting */}
              <div className="relative mx-auto rounded-t-full rounded-b-3xl overflow-hidden pt-8 px-4 bg-gradient-to-b from-terracotta-200/50 via-linen-200/40 to-linen-100 dark:from-terracotta-900/40 dark:via-obsidian-900/80 dark:to-obsidian-950 border border-terracotta-400/30 dark:border-terracotta-500/20 shadow-warm-lg">
                {/* Internal Glow Behind Head */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-terracotta-400/40 to-terracotta-600/30 blur-2xl pointer-events-none" />

                {/* Actual Personal Photograph */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <img
                    src="/assets/me_transparent.png"
                    alt="Vaddi Rahul — Full-Stack & AI Systems Developer"
                    className="w-full h-auto max-h-[520px] object-contain mx-auto drop-shadow-2xl"
                    loading="eager"
                  />
                </motion.div>

                {/* Smooth Fade at Bottom of Photograph */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-linen-100 dark:from-obsidian-950 via-linen-100/70 dark:via-obsidian-950/70 to-transparent pointer-events-none z-20" />
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: Professional Headline, Bio, CTAs ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-between order-3 lg:order-3 text-center lg:text-left space-y-6"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
                Focus &amp; Specialization
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-linen-950 dark:text-linen-50 leading-snug">
                Engineering <span className="italic font-normal text-terracotta-600 dark:text-terracotta-400">Intelligent</span> Multi-Agent Workflows &amp; Real-Time Web.
              </h2>
            </div>

            <p className="text-sm text-linen-700 dark:text-linen-300 leading-relaxed font-sans">
              Computer Science undergraduate at <strong className="text-linen-950 dark:text-linen-100 font-semibold">IIIT Kottayam</strong> specializing in AI &amp; Data Science. Proven track record deploying multi-agent swarms (Mastra, Gemini), low-latency backends (Hono, FastAPI), and dynamic frontends.
            </p>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {['Multi-Agent Systems', 'FastAPI & Hono', 'React / Next.js', 'Redis Caching', 'Gemini AI API', 'Socket.IO'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-linen-200/80 dark:bg-linen-900/80 text-linen-800 dark:text-linen-200 border border-linen-300/60 dark:border-linen-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex justify-center">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-white font-semibold text-xs tracking-wider uppercase shadow-glow transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Explore Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="pt-12 md:pt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-linen-500 dark:text-linen-400 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-8 h-8 rounded-full border border-linen-300 dark:border-linen-700 flex items-center justify-center group-hover:border-terracotta-500 transition-colors">
              <ArrowDown size={14} className="animate-bounce text-terracotta-500" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
