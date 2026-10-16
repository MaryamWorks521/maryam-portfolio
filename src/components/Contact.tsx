import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Full Stack Web App',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const email = 'maryamirzawork@gmail.com';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formState.service} from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.service}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section py-16 px-4 bg-black relative">
      <div className="max-w-5xl mx-auto" data-aos="zoom-in">
        {/* Section Header */}
        <div className="section-header text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
            Let's Connect
          </span>
          <h2 className="contact-title text-2xl sm:text-3xl font-bold">
            Let's Build Something <span className="text-gold">Great</span> Together
          </h2>
          <div className="title-line mx-auto"></div>
          <p className="contact-desc text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Have a project in mind, need a full-stack developer, or want to discuss opportunities? Drop me a message and I'll respond promptly.
          </p>
        </div>

        {/* 2-Column Contact Portal */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
          {/* Left Column: Direct Info Cards (2 cols) */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-sm">
              <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-sm font-bold text-white hover:text-gold transition-colors block break-all"
              >
                {email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-gold transition-colors cursor-pointer"
              >
                <i className={`fas ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-sm space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-gold w-4 text-center"></i>
                <span>Pakistan (Available for Worldwide Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bolt text-gold w-4 text-center"></i>
                <span>Fast response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-briefcase text-gold w-4 text-center"></i>
                <span>Freelance, Contract & Full-time</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-sm">
              <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block mb-2.5">
                Profiles & Repositories
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/MaryamWorks521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold hover:text-gold flex items-center justify-center text-sm transition-all text-zinc-300"
                  title="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold hover:text-gold flex items-center justify-center text-sm transition-all text-zinc-300"
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold hover:text-gold flex items-center justify-center text-sm transition-all text-zinc-300"
                  title="Send Direct Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (3 cols) */}
          <div className="md:col-span-3 p-5 sm:p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-lg">
            <h3 className="text-base font-bold text-white mb-1">
              Send a Project Message
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Fill in your details below to start a conversation directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Project Category</label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-lg px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                >
                  <option value="Full Stack Web Application">Full Stack Web Application</option>
                  <option value="Business / Restaurant / Auto Website">Business & Corporate Website</option>
                  <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                  <option value="Custom Portfolio Website">Custom Portfolio / Portal</option>
                  <option value="General Collaboration / Freelance">General Collaboration / Freelance</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="btn-primary text-xs py-2 px-4 cursor-pointer font-bold inline-flex items-center gap-1.5"
                    title="Send via your default email application"
                  >
                    <i className="fas fa-paper-plane text-[11px]"></i>
                    <span>Send via Email App</span>
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                      `Project Inquiry: ${formState.service} from ${formState.name || 'Client'}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.service}\n\nMessage:\n${formState.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
                    title="Compose and send directly in Web Gmail"
                  >
                    <i className="fab fa-google text-gold text-xs"></i>
                    <span>Open in Gmail</span>
                  </a>
                </div>

                <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                  <i className="fas fa-shield-alt text-gold/80 text-[10px]"></i>
                  Sends to: <strong className="text-zinc-300">maryamirzawork@gmail.com</strong>
                </span>
              </div>

              {submitted && (
                <div className="mt-2.5 p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Email client opened with prefilled details. Press Send in your email to deliver directly to Maryam!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
