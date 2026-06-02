import { useState } from 'react';
import './About.css';
import avatarImg from '../../assets/avatar.png';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-me">
            <div className="about-image">
              <img src={avatarImg} alt="Gaurav Saklani" className="about-photo" />
            </div>
            <div className="about-text">
              <h3>Hi, I'm Gaurav</h3>
              <p>
                I'm currently pursuing my B.Tech at Graphic Era Hill University with a focus on AI and ML. I've always been fascinated by how technology can solve real problems, which led me to dive deep into both full-stack development and machine learning.
              </p>
              <p>
                Over the past few years, I've built projects ranging from an AI interview simulator (Vocalis) to a smart farming platform (AgroShakti). I enjoy the challenge of taking a complex idea, training the right models, and building a clean, scalable web application around it.
              </p>
              <p>
                When I'm not coding, you can usually find me participating in hackathons, exploring new open-source AI models, or figuring out how to optimize my backend architectures. I simply love learning by building.
              </p>
              
              <div className="about-buttons">
                <button 
                  className="btn certifications-btn" 
                  onClick={() => scrollToSection('certifications')}
                >
                  View My Certifications
                </button>
                <button 
                  className="btn resume-btn" 
                  onClick={() => scrollToSection('resume')}
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
