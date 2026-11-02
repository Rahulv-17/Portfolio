import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, Phone, Github, Linkedin, Download, ArrowUpRight, Send, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#d97736', '#e5a374', '#c46830', '#f5dac4'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const getEncodedData = () => {
    const subject = encodeURIComponent(
      formSubject || `Portfolio Inquiry from ${formName || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hi Rahul,\n\n${formMessage || 'I reviewed your portfolio and would like to connect regarding an opportunity.'}\n\nBest regards,\n${formName || 'Sender'}`
    );
    return { subject, body };
  };

  const openGmail = () => {
    const { subject, body } = getEncodedData();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openDefaultMail = () => {
    const { subject, body } = getEncodedData();
    const url = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = url;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-terracotta-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grand Card */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-5xl glass-card border border-linen-300/80 dark:border-terracotta-500/30 shadow-warm-lg relative overflow-hidden">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-terracotta-400/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Direct Actions */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-300 text-xs font-mono uppercase tracking-widest font-semibold mb-4">
                  <Sparkles size={13} className="text-terracotta-500" />
                  <span>Start a Conversation</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-linen-950 dark:text-linen-50 tracking-tight leading-[1.05]">
                  Let's Make <br />
                  <span className="font-editorial italic font-normal text-terracotta-600 dark:text-terracotta-400">
                    It Happen.
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-linen-700 dark:text-linen-300 leading-relaxed font-sans max-w-lg">
                  Always open to new software engineering opportunities, internships, AI research collaborations, and creative technical challenges. Connect with me directly through your favorite email service.
                </p>
              </div>

              {/* Verified Contact Details with Quick Actions */}
              <div className="space-y-4">
                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-2xl bg-linen-200/80 dark:bg-obsidian-950/80 border border-linen-300/70 dark:border-linen-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2.5 rounded-xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400">
                        Primary Email
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-sans font-semibold text-sm text-linen-950 dark:text-linen-50 hover:text-terracotta-600 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 text-xs font-mono font-semibold text-linen-800 dark:text-linen-200 border border-linen-300 dark:border-terracotta-500/30 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone & Resume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-linen-200/80 dark:bg-obsidian-950/80 border border-linen-300/70 dark:border-linen-800 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400">
                        Phone (India)
                      </div>
                      <div className="font-sans font-semibold text-sm text-linen-950 dark:text-linen-50">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="Vaddi_Rahul_Resume.pdf"
                    className="p-4 rounded-2xl bg-terracotta-600 hover:bg-terracotta-500 text-white flex items-center justify-between gap-3 shadow-glow transition-all duration-200 hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/10 text-white">
                        <Download size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-linen-200">
                          PDF Document
                        </div>
                        <div className="font-sans font-semibold text-sm">
                          Download Resume
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Profile Links */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 text-linen-900 dark:text-linen-100 text-xs font-mono font-medium flex items-center gap-2 border border-linen-300 dark:border-terracotta-500/30 transition-colors"
                  >
                    <Github size={15} />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-pill hover:bg-terracotta-500/10 text-linen-900 dark:text-linen-100 text-xs font-mono font-medium flex items-center gap-2 border border-linen-300 dark:border-terracotta-500/30 transition-colors"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn Network</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Composer */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-linen-100/90 dark:bg-obsidian-950/90 border border-linen-300 dark:border-linen-800 space-y-5 shadow-warm relative">
                {/* Header */}
                <div className="pb-4 border-b border-linen-300/80 dark:border-linen-800">
                  <h3 className="font-serif text-xl font-bold text-linen-950 dark:text-linen-50">
                    Send a Message
                  </h3>
                  <p className="text-xs text-linen-600 dark:text-linen-400 mt-0.5">
                    I'll get back to you as soon as possible
                  </p>
                </div>

                {/* Message Fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Recruiter / Collaborator"
                        className="w-full px-3.5 py-2 rounded-xl bg-linen-200/60 dark:bg-obsidian-900 border border-linen-300 dark:border-linen-800 text-linen-950 dark:text-linen-50 text-xs focus:outline-none focus:border-terracotta-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        placeholder="Developer Role / Discussion"
                        className="w-full px-3.5 py-2 rounded-xl bg-linen-200/60 dark:bg-obsidian-900 border border-linen-300 dark:border-linen-800 text-linen-950 dark:text-linen-50 text-xs focus:outline-none focus:border-terracotta-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400 mb-1">
                      Message Note
                    </label>
                    <textarea
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Hi Rahul, we reviewed your work on Credix and RepoLens AI and would love to connect..."
                      className="w-full px-3.5 py-2 rounded-xl bg-linen-200/60 dark:bg-obsidian-900 border border-linen-300 dark:border-linen-800 text-linen-950 dark:text-linen-50 text-xs focus:outline-none focus:border-terracotta-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Primary Direct Launch Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={openGmail}
                      className="flex-1 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Open in Gmail (Pre-filled)</span>
                    </button>

                    <button
                      type="button"
                      onClick={openDefaultMail}
                      className="sm:w-auto px-5 py-3.5 rounded-full glass-pill hover:bg-terracotta-500/10 text-linen-900 dark:text-linen-100 font-semibold text-xs tracking-wider uppercase border border-linen-300 dark:border-terracotta-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Mail size={14} className="text-terracotta-500" />
                      <span>Mail App</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
