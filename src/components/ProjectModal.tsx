import React from 'react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0c0c0e] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-44 sm:h-48 bg-zinc-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-transparent"></div>

          <span className="absolute top-3 left-3 bg-black/85 border border-gold/50 text-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">
            {project.categoryLabel}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/80 border border-zinc-700 text-zinc-300 hover:text-gold hover:border-gold transition-colors flex items-center justify-center cursor-pointer text-xs"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-0.5">
              {project.title}
            </h3>
            <p className="text-gold text-xs font-medium">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Project Overview
            </h4>
            <p className="text-zinc-300 leading-relaxed text-xs">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Key Features & Architectural Highlights
            </h4>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-zinc-300 text-xs">
                  <i className="fas fa-check-circle text-gold text-[10px] mt-0.5 mr-2 flex-shrink-0"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-zinc-800/80 bg-zinc-950/60 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3.5"
            >
              <i className="fas fa-external-link-alt mr-1.5 text-black text-[11px]"></i>
              Launch Live Project
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-1.5 px-3.5"
              >
                <i className="fab fa-github mr-1.5 text-gold text-xs"></i>
                Source Code
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-[11px] text-zinc-400 hover:text-white px-2 py-1 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
