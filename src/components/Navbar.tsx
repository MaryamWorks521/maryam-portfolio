import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'border-b border-white/10' : ''}`}>
      <a href="#home" className="nav-logo text-gold flex items-center">
        PORTFOLIO<span className="text-white">.</span>
      </a>

      {/* Hamburger Toggle */}
      <button
        className="burger-menu focus:outline-none"
        id="burgerToggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <a href="#contact" className="mobile-hire-btn" onClick={closeMenu}>
          Hire Me
        </a>
      </div>

      <a href="#contact" className="nav-btn">
        Hire Me
      </a>
    </nav>
  );
};
