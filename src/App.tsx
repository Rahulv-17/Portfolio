import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Check user preference or default to editorial light theme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('rahul_theme');
    if (saved) return saved === 'dark';
    return false; // Default to photograph-matched warm linen editorial
  });

  // Apply dark class to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('rahul_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('rahul_theme', 'light');
    }
  }, [darkMode]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-linen-100 dark:bg-obsidian-950 text-linen-950 dark:text-linen-100 selection:bg-terracotta-500 selection:text-white transition-colors duration-300 relative bg-noise">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Flagship Hero Section */}
        <Hero />

        {/* Tech Marquee */}
        <TechMarquee />

        {/* Key Resume Metrics */}
        <StatsSection />

        {/* Philosophy & Narrative */}
        <AboutSection />

        {/* Engineering Process */}
        <ProcessSection />

        {/* Technical Skills & Core CS */}
        <SkillsSection />

        {/* Curated Projects Showcase */}
        <ProjectsSection />

        {/* Experience & Education */}
        <ExperienceEducation />

        {/* Interactive Contact Section */}
        <ContactSection />
      </main>

      {/* Grand Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;

