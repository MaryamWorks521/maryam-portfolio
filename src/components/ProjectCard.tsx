import React, { useState } from 'react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDetails }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      data-aos="fade-up"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
      className="project-card group flex flex-col bg-black border border-zinc-800/90 hover:border-gold/60 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-black/60"
    >
      {/* Thumbnail Container */}
      <div className="project-img-holder relative overflow-hidden h-44 bg-zinc-950">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.fallbackGradient} flex flex-col items-center justify-center p-4 text-center`}
          >
            <i className={`${project.iconClass} text-gold text-2xl mb-1 opacity-80`}></i>
            <span className="text-white font-semibold text-sm">{project.title}</span>
            <span className="text-[11px] text-zinc-400 mt-0.5">{project.categoryLabel}</span>
          </div>
        )}

        {/* Subtle dark gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Category Pill Tag */}
        <span className="project-category-badge absolute top-2.5 left-2.5 text-[10px]">
          {project.categoryLabel}
        </span>

        {/* Live Status Badge */}
        <span className="absolute top-2.5 right-2.5 bg-black/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </span>
      </div>

      {/* Project Details */}
      <div className="project-info p-4 flex flex-col flex-grow bg-zinc-950/40">
        <div className="flex items-start justify-between gap-1.5 mb-1.5">
          <div>
            <h3 className="project-title text-base font-bold text-gold group-hover:text-amber-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-[11px] text-zinc-400 font-medium line-clamp-1">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            title="View architectural details and features"
            className="text-zinc-400 hover:text-gold transition-colors text-[11px] flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 hover:border-gold/50 cursor-pointer flex-shrink-0"
          >
            <i className="fas fa-info-circle text-[10px]"></i>
            <span className="hidden sm:inline">Specs</span>
          </button>
        </div>

        <p className="project-desc text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>

        {/* Key Highlights preview (1-2 quick points) */}
        <div className="mb-3 space-y-1">
          {project.highlights.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-center text-[11px] text-zinc-300">
              <i className="fas fa-check text-gold text-[9px] mr-1.5 flex-shrink-0"></i>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Verified Tech Tags */}
        <div className="project-tech-tags flex flex-wrap gap-1 mb-3.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="project-tech-tag text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-tech-tag text-[10px] px-1.5 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-zinc-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="project-footer flex items-center justify-between gap-2 pt-2.5 border-t border-zinc-900 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link text-xs font-semibold text-gold hover:text-white flex items-center gap-1"
          >
            <i className="fas fa-external-link-alt text-[10px]"></i>
            <span>Live Project</span>
          </a>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo-link text-xs text-zinc-400 hover:text-white flex items-center gap-1"
              title="View Source on GitHub"
            >
              <i className="fab fa-github text-xs"></i>
              <span>GitHub Code</span>
            </a>
          ) : (
            <span className="text-[10px] text-zinc-600">Client Portfolio</span>
          )}
        </div>
      </div>
    </article>
  );
};
