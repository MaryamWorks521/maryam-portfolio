import React from 'react';

const TECH_STACK_TICKER = [
  { name: 'React 19', icon: 'fab fa-react' },
  { name: 'Node.js & Express', icon: 'fab fa-node-js' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'Firebase & Firestore', icon: 'fas fa-fire' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind' },
  { name: 'REST APIs', icon: 'fas fa-network-wired' },
  { name: 'PHP & MySQL', icon: 'fas fa-database' },
  { name: 'Git & GitHub', icon: 'fab fa-github' },
  { name: 'Responsive Web UI', icon: 'fas fa-laptop-code' },
  { name: 'Modern Full Stack', icon: 'fas fa-layer-group' },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section relative pt-24 pb-12 overflow-hidden">
      {/* Radiant Golden Ambient Lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.04) 50%, rgba(0, 0, 0, 0) 75%)',
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />

      <div className="hero-content relative z-10 max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-sm shadow-gold/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for Freelance & Full-Time Projects</span>
        </div>

        {/* Hero Title with Metallic Glow */}
        <h1 className="hero-title tracking-tight mb-2">
          Hi, I am{' '}
          <span className="text-gradient drop-shadow-[0_0_24px_rgba(212,175,55,0.4)] font-extrabold">
            MARYAM MIRZA
          </span>
        </h1>

        {/* Professional Title with Golden Accent Lines */}
        <div className="flex items-center justify-center gap-3 mb-3.5">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gold"></span>
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider text-zinc-100 uppercase">
            Full Stack Web Developer
          </p>
          <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gold"></span>
        </div>

        {/* Refined Bio Description */}
        <p className="hero-desc text-zinc-300 max-w-2xl mx-auto mb-6 text-sm sm:text-base leading-relaxed">
          Crafting high-performance web applications, client business websites, and scalable digital solutions with clean, modern code. Specializing in React, Node.js, Firebase, and responsive UI architecture.
        </p>

        {/* Action Buttons */}
        <div className="btn-container mb-9">
          <a href="#projects" className="btn-primary group">
            <i className="fas fa-briefcase mr-2 text-black/80 transition-transform group-hover:-translate-y-0.5"></i>
            Explore 8 Featured Projects
          </a>
          <a href="#contact" className="btn-secondary group">
            <i className="fas fa-comment-dots mr-2 text-gold transition-transform group-hover:scale-110"></i>
            Let's Talk & Collaborate
          </a>
        </div>

        {/* 3 Executive Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left mb-10">
          <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 hover:border-gold/50 transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">3+ Years</span>
                <span className="text-[11px] text-zinc-400">Coding Experience</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 hover:border-gold/50 transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm">
                <i className="fas fa-layer-group"></i>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">8 Deployed</span>
                <span className="text-[11px] text-zinc-400">Live Web Applications</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 hover:border-gold/50 transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm">
                <i className="fas fa-check-double"></i>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">100% Verified</span>
                <span className="text-[11px] text-zinc-400">Live Client & Work Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Animated Tech Stack Ticker (Removes empty void between sections) */}
      <div className="relative w-full border-y border-zinc-800/80 bg-zinc-950/70 py-2.5 overflow-hidden backdrop-blur-sm">
        <div className="animate-marquee flex items-center gap-8">
          {[...TECH_STACK_TICKER, ...TECH_STACK_TICKER].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs font-medium text-zinc-400 whitespace-nowrap hover:text-gold transition-colors"
            >
              <i className={`${tech.icon} text-gold text-xs`}></i>
              <span>{tech.name}</span>
              <span className="text-zinc-700 ml-6">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
