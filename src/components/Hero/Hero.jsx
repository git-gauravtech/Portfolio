import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <br></br>
          <br></br>
          <h1 className="hero-name">
            Hii<span className="wave">👋</span>, I'm  Gaurav
          </h1>
          <div className="hero-roles">
            <div className="role-tags">
              <span className="role-tag">I am a </span>
              <span className="role-tag type-animation-wrapper">
                <TypeAnimation
                  sequence={[
                    'CSE Undergrad',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'AI & ML Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="role-highlight"
                />
              </span>
            </div>
          </div>
          <p className="hero-description">
            Passionate about building intelligent solutions leveraging AI/ML and scalable full-stack development. Specialized in end-to-end systems from model training to backend deployment.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
