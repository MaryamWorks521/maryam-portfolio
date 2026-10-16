import React, { useState, useMemo } from 'react';
import { PROJECTS, CATEGORIES, CategoryFilter, Project } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="projects-section bg-dark-gray py-16 px-4">
      <div className="projects-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-8" data-aos="fade-up">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
            Portfolio Showcase
          </span>
          <h2 className="section-title text-2xl sm:text-3xl font-bold">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <div className="title-line mx-auto"></div>
          <p className="section-subtitle-gray text-zinc-400 max-w-lg mx-auto text-xs sm:text-sm">
            8 verified production applications, client business websites, and full-stack platforms.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
          {/* Quick Search Bar */}
          <div className="relative mb-4">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-xs"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 8 projects by technology (React, Node, Firebase, HTML5) or name..."
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold rounded-full py-2 pl-9 pr-8 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="projects-filter-bar flex flex-wrap gap-1.5 justify-center">
            {CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`filter-btn text-xs px-3 py-1 rounded-full border transition-all cursor-pointer font-medium ${
                    activeCategory === category
                      ? 'active bg-gold text-black border-gold shadow-sm shadow-gold/30'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-gold hover:text-white'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-center mb-6 text-xs text-zinc-400">
            Showing <strong className="text-gold">{filteredProjects.length}</strong> matching projects for "{searchQuery}"
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="ml-2 text-gold underline cursor-pointer text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 3-Column Balanced Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-950/60 rounded-xl border border-zinc-800/80 p-8">
            <i className="fas fa-folder-open text-zinc-600 text-3xl mb-3"></i>
            <h3 className="text-base font-semibold text-white mb-1">No Projects Found</h3>
            <p className="text-xs text-zinc-400 mb-4">No projects matched your current search or category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="btn-primary text-xs py-1.5 px-4"
            >
              Show All 8 Projects
            </button>
          </div>
        )}

        {/* Project Modal for deep inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
