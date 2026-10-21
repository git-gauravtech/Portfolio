import vocalisImage from '../../assets/Vocalis.webp';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker"><span></span> Computer Science · AI/ML · Full-stack Development · Software Development </p>
          <h1 className="hero-name">I build software that moves <em>from model to real world.</em></h1>
          <p className="hero-description">
            I&apos;m Gaurav Saklani, a CSE student focused on turning machine learning ideas into useful, well-built products, from the first model to the deployed application.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
            <a className="hero-secondary-link" href="#contact">Let&apos;s talk <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof" aria-label="Selected achievements">
            <div><strong>8.96</strong><span>CGPA / 10</span></div>
            <div><strong>Ranked Under top 1000 </strong><span>in Amazon ML Challenge</span></div>
            <div><strong>2025</strong><span>Research paper & Patent application</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <a className="hero-feature" href="https://github.com/git-gauravtech/vocalis-ai" target="_blank" rel="noopener noreferrer" aria-label="View Vocalis on GitHub">
            <div className="hero-feature-topline"><span>FEATURED PROJECT</span><span>01 / 03</span></div>
            <img className="hero-project-image" src={vocalisImage} alt="Vocalis AI interview practice platform interface" />
            <div className="hero-feature-caption"><div><span>AI INTERVIEW PLATFORM</span><h2>Vocalis</h2></div><span className="hero-feature-arrow" aria-hidden="true">↗</span></div>
          </a>
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
    </section>
  );
};

export default Hero;
