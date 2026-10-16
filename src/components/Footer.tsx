import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; 2026 Developer Portfolio | <span className="text-zinc-300 font-medium">Maryam Mirza</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-500">
          <a href="#home" className="hover:text-gold transition-colors">Back to Top</a>
          <span>•</span>
          <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
          <span>•</span>
          <a
            href="https://github.com/MaryamWorks521"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
