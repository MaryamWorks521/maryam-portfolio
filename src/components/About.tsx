import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section bg-dark-gray overflow-hidden py-16">
      <div className="about-container max-w-5xl mx-auto px-4">
        {/* Profile Image with Golden Aura — Moves in smoothly from Left side (fade-right) */}
        <div data-aos="fade-right">
          <div className="img-wrapper relative">
            <img
              src="/assets/m2.png"
              alt="Maryam Mirza Profile"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://raw.githubusercontent.com/MaryamWorks521/CodeAlpha_AlphaHub/main/codealpha_portfolio/m2.png';
              }}
            />
          </div>

          {/* Quick Experience Badge Under Profile */}
          <div className="mt-4 p-3 rounded-lg bg-zinc-950/90 border border-zinc-800 text-center max-w-[16rem] mx-auto shadow-sm">
            <span className="text-xs text-gold font-semibold uppercase tracking-wider block">Professional Focus</span>
            <p className="text-[11px] text-zinc-400 mt-0.5">Full Stack Web Engineering & Scalable UI Design</p>
          </div>
        </div>

        {/* About Details — Moves in smoothly from Right side (fade-left) */}
        <div data-aos="fade-left">
          <h2 className="section-title">
            About <span className="text-gold">Me</span>
          </h2>
          <div className="title-line"></div>

          <p className="about-text">
            I'm a passionate full-stack developer who transforms complex problems into simple, high-performance, and beautiful digital solutions. With over 3 years of hands-on experience, I love writing scalable, clean code and delivering production-ready web applications for clients and businesses.
          </p>

          {/* 4-Item Information Grid */}
          <div className="info-grid mb-5">
            <div>
              <span className="text-gold block text-xs">Experience:</span>
              <span className="text-zinc-200 font-semibold">3+ Years</span>
            </div>
            <div>
              <span className="text-gold block text-xs">Availability:</span>
              <span className="text-zinc-200">Freelance / Full-time</span>
            </div>
            <div>
              <span className="text-gold block text-xs">Language:</span>
              <span className="text-zinc-200">Urdu, English</span>
            </div>
            <div>
              <span className="text-gold block text-xs">Location:</span>
              <span className="text-zinc-200">Pakistan</span>
            </div>
          </div>

          {/* Core Strengths Highlights (Removes empty feel) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5 pt-3 border-t border-zinc-800/80">
            <div className="p-2.5 rounded-md bg-zinc-950/60 border border-zinc-800/80">
              <i className="fas fa-bolt text-gold text-xs mb-1 block"></i>
              <h4 className="text-xs font-semibold text-white">Fast & Responsive</h4>
              <p className="text-[10px] text-zinc-400 mt-0.5">Optimized for every device & viewport.</p>
            </div>
            <div className="p-2.5 rounded-md bg-zinc-950/60 border border-zinc-800/80">
              <i className="fas fa-shield-alt text-gold text-xs mb-1 block"></i>
              <h4 className="text-xs font-semibold text-white">Clean Code</h4>
              <p className="text-[10px] text-zinc-400 mt-0.5">Maintainable, modular architecture.</p>
            </div>
            <div className="p-2.5 rounded-md bg-zinc-950/60 border border-zinc-800/80">
              <i className="fas fa-rocket text-gold text-xs mb-1 block"></i>
              <h4 className="text-xs font-semibold text-white">Cloud Deployed</h4>
              <p className="text-[10px] text-zinc-400 mt-0.5">Vercel, Firebase & live production.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-5"
            >
              <i className="fas fa-paper-plane mr-1.5 text-black/80"></i>
              Get in Touch
            </a>
            <a
              href="https://github.com/MaryamWorks521"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-5"
            >
              <i className="fab fa-github mr-1.5 text-gold"></i>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
