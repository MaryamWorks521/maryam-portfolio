import React from 'react';

const SERVICES = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Full Stack Web Applications',
    subtitle: 'End-to-end web apps with modern frontend & robust backend',
    description:
      'Architecting dynamic web apps with React 19, TypeScript, Node.js, and Express. Integrating secure Firebase auth, real-time Firestore database, and role-based permissions.',
    tags: ['React', 'Node.js', 'Express', 'Firebase', 'REST APIs'],
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business & Commercial Websites',
    subtitle: 'High-converting online presence for service brands & shops',
    description:
      'Designing bespoke client websites (restaurants, workshops, agencies) with service breakdowns, booking inquiries, opening hours, and Local Business SEO Schema.',
    tags: ['Tailwind CSS', 'Vite', 'Schema.org', 'Interactive Forms'],
  },
  {
    icon: 'fas fa-shopping-bag',
    title: 'E-Commerce & Digital Storefronts',
    subtitle: 'Elegant shopping experiences with interactive product swatches',
    description:
      'Building luxury beauty and product storefronts featuring curated catalog navigation, shade swatches, modal product details, and dynamic shopping bag calculations.',
    tags: ['E-Commerce UI', 'State Management', 'Shade Swatches', 'Cart Logic'],
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Bespoke Client Portfolios & Portals',
    subtitle: 'Distinctive personal branding & rich informational hubs',
    description:
      'Crafting custom portfolio websites for creators, educators, and scholars, along with multi-page informational hubs with galleries and rich document archives.',
    tags: ['Personal Branding', 'Responsive Layouts', 'Dark Mode UI', 'Typography'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-10" data-aos="fade-up">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
            What I Deliver
          </span>
          <h2 className="section-title text-2xl sm:text-3xl font-bold">
            Specialized <span className="text-gold">Services</span>
          </h2>
          <div className="title-line mx-auto"></div>
          <p className="section-subtitle-gray text-zinc-400 max-w-lg mx-auto text-xs sm:text-sm">
            High-standard engineering solutions tailored for businesses, startups, and clients.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              data-aos="fade-up"
              style={{ transitionDelay: `${idx * 80}ms` }}
              className="service-card group hover:border-gold/60 transition-all duration-300"
            >
              <div className="flex items-start gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gold/80 font-medium">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
