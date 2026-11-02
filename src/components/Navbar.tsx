import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between min-h-[44px] relative">
          {/* Brand Signature in Editorial Italic Serif */}
          <a
            href="#"
            className="font-editorial italic text-2xl sm:text-3xl font-normal text-linen-950 dark:text-linen-50 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors tracking-tight select-none"
          >
            Rahul Vaddi
          </a>

          {/* Centered Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-warm border border-linen-300/80 dark:border-terracotta-500/20 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-linen-700 dark:text-linen-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 rounded-full hover:bg-terracotta-500/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Controls (Desktop & Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Dark / Light Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 sm:p-2 rounded-full glass-pill hover:bg-terracotta-500/10 text-linen-800 dark:text-linen-200 transition-all duration-200 border border-linen-300/70 dark:border-terracotta-500/30"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to Editorial Linen" : "Switch to Obsidian Night"}
            >
              {darkMode ? <Sun size={16} className="text-terracotta-400" /> : <Moon size={16} className="text-linen-800" />}
            </button>

            {/* Resume Button (Desktop) */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Vaddi_Rahul_Resume.pdf"
              className="hidden lg:flex group items-center gap-1.5 px-4 py-2 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-white text-xs font-semibold tracking-wider uppercase shadow-glow-subtle transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
            >
              <FileText size={14} />
              <span>Resume</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-full glass-pill text-linen-900 dark:text-linen-100 md:hidden border border-linen-300/80 dark:border-linen-700/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-linen-100/95 dark:bg-obsidian-950/95 backdrop-blur-xl md:hidden pt-28 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-mono tracking-widest uppercase text-terracotta-600 dark:text-terracotta-400">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl font-bold text-linen-900 dark:text-linen-50 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-linen-300 dark:border-linen-800 flex flex-col gap-4">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Vaddi_Rahul_Resume.pdf"
                className="w-full py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-white font-semibold text-center text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow"
              >
                <FileText size={16} />
                <span>Download Resume (PDF)</span>
              </a>
              <div className="flex justify-between items-center text-xs font-mono text-linen-600 dark:text-linen-400">
                <span>IIIT Kottayam • CSE (AI & DS)</span>
                <span>vaddirahul3003@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

