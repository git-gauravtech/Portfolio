import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <a className="navbar-logo" href="#hero" onClick={() => setIsMenuOpen(false)}>
          <span className="logo-mark">GS</span>
          <span className="logo-text">Gaurav Saklani</span>
        </a>

        <div id="primary-navigation" className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a className="navbar-item" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a className="navbar-item" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a className="navbar-item" href="#research" onClick={() => setIsMenuOpen(false)}>Research</a>
          <a className="navbar-item" href="#resume" onClick={() => setIsMenuOpen(false)}>Background</a>
          <a className="navbar-item nav-btn" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
