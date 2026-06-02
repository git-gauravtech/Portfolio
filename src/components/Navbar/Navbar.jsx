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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Gaurav Saklani</span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-item" onClick={() => scrollToSection('hero')}>
            Home
          </div>
          <div className="navbar-item" onClick={() => scrollToSection('about')}>About Me</div>
          <div className="navbar-item" onClick={() => scrollToSection('projects')}>Projects</div>
          <div className="navbar-item" onClick={() => scrollToSection('research')}>Research</div>
          <div className="navbar-item" onClick={() => scrollToSection('resume')}>Resume</div>
          <div className="navbar-item nav-btn" onClick={() => scrollToSection('contact')}>Contact Me</div>
        </div>

        <div
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
