import React, { useState } from 'react';

interface SkillItem {
  name: string;
  category: 'all' | 'frontend' | 'backend' | 'tools';
  icon: string;
}

const SKILLS_LIST: SkillItem[] = [
  // Full Stack Core
  { name: 'React', category: 'frontend', icon: 'fab fa-react' },
  { name: 'Node.js & Express', category: 'backend', icon: 'fab fa-node-js' },
  { name: 'TypeScript', category: 'frontend', icon: 'fas fa-code' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'fas fa-wind' },
  { name: 'Firebase & Firestore', category: 'backend', icon: 'fas fa-fire' },

  // Original Portfolio Skills
  { name: 'PHP', category: 'backend', icon: 'fab fa-php' },
  { name: 'MySQL', category: 'backend', icon: 'fas fa-database' },
  { name: 'JavaScript', category: 'frontend', icon: 'fab fa-js' },
  { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap Framework', category: 'frontend', icon: 'fab fa-bootstrap' },
  { name: 'jQuery', category: 'frontend', icon: 'fas fa-code' },
  { name: 'Git & GitHub', category: 'tools', icon: 'fab fa-github' },
  { name: 'Responsive Web Design', category: 'frontend', icon: 'fas fa-laptop-code' },
];

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = filter === 'all'
    ? SKILLS_LIST
    : SKILLS_LIST.filter((s) => s.category === filter);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">
          My <span className="text-gold">Skills</span>
        </h2>
        <p className="section-subtitle-gray">Technologies I work with daily</p>

        {/* Compact Skill Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`text-[11px] px-3 py-1 rounded-full border transition-all cursor-pointer font-medium ${
              filter === 'all'
                ? 'bg-gold text-black border-gold shadow-sm shadow-gold/20'
                : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-gold hover:text-white'
            }`}
          >
            All Skills ({SKILLS_LIST.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('frontend')}
            className={`text-[11px] px-3 py-1 rounded-full border transition-all cursor-pointer font-medium ${
              filter === 'frontend'
                ? 'bg-gold text-black border-gold shadow-sm shadow-gold/20'
                : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-gold hover:text-white'
            }`}
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setFilter('backend')}
            className={`text-[11px] px-3 py-1 rounded-full border transition-all cursor-pointer font-medium ${
              filter === 'backend'
                ? 'bg-gold text-black border-gold shadow-sm shadow-gold/20'
                : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-gold hover:text-white'
            }`}
          >
            Backend & Database
          </button>
          <button
            type="button"
            onClick={() => setFilter('tools')}
            className={`text-[11px] px-3 py-1 rounded-full border transition-all cursor-pointer font-medium ${
              filter === 'tools'
                ? 'bg-gold text-black border-gold shadow-sm shadow-gold/20'
                : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-gold hover:text-white'
            }`}
          >
            Tools & Version Control
          </button>
        </div>
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="zoom-in"
            style={{ transitionDelay: `${(index % 4) * 60}ms` }}
            className="skill-card bg-dark-gray group"
          >
            <i className={`${skill.icon} text-gold transition-transform duration-300 group-hover:scale-110`}></i>
            <h3 className="text-white group-hover:text-gold transition-colors">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
