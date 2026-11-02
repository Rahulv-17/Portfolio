import React from 'react';

export const TechMarquee: React.FC = () => {
  const techs = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'Language & AI' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'FastAPI', category: 'Backend Service' },
    { name: 'Mastra', category: 'Multi-Agent Framework' },
    { name: 'Hono', category: 'Edge Backend' },
    { name: 'Next.js', category: 'Full-Stack' },
    { name: 'Gemini API', category: 'Generative AI' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'MongoDB', category: 'NoSQL Database' },
    { name: 'Snowflake', category: 'Data Warehouse' },
    { name: 'Redis / Pogocache', category: 'In-Memory Cache' },
    { name: 'Socket.IO', category: 'Real-Time WebSockets' },
    { name: 'Tailwind CSS', category: 'Design System' },
    { name: 'OpenTelemetry', category: 'Observability' },
    { name: 'OpenCV', category: 'Computer Vision' },
  ];

  // Duplicate for seamless infinite loop
  const list = [...techs, ...techs];

  return (
    <div className="py-6 border-y border-linen-300/80 dark:border-terracotta-500/20 bg-linen-200/50 dark:bg-obsidian-950/60 overflow-hidden relative backdrop-blur-sm">
      {/* Side gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-linen-100 dark:from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-linen-100 dark:from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-6 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 group-hover:scale-150 transition-transform" />
            <span className="font-serif text-lg font-bold tracking-tight text-linen-900 dark:text-linen-100 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-linen-500 dark:text-linen-400 px-2 py-0.5 rounded-full bg-linen-300/60 dark:bg-linen-800/80 border border-linen-300 dark:border-linen-700">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

