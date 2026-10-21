import './Resume.css';

const Resume = () => {
  const education = [
    {
      institution: 'Graphic Era Hill University, Dehradun',
      year: '2023 - Present',
      course: 'B.Tech in Computer Science & Engineering (AI & ML Specialization)',
      score: 'CGPA: 8.96/10'
    },
    {
      institution: 'Saraswati Vidya Mandir Inter College',
      year: '2023',
      course: 'Intermediate (PCM)',
      score: 'Percentage: 90.80%'
    },
    {
      institution: 'Saraswati Vidya Mandir Inter College',
      year: '2021',
      course: 'High School',
      score: 'Percentage: 95.20%'
    }
  ];

  const achievements = [
    {
      title: 'Amazon ML Summer School Mentee',
      year: '2025',
      highlight: 'Top 5% of 60,000+ applicants',
      description: 'Selected in top 5% out of 60,000+ applicants. Gained industry-level mentorship from Amazon applied scientists.'
    },
    {
      title: 'Microsoft SEFA Program',
      year: '2025',
      highlight: 'Top 100 at university',
      description: 'Selected in top 100 students from university. Full-day immersive session covering product vision to deployment at scale.'
    },
    {
      title: 'Amazon ML Challenge',
      year: '2026 & 2025',
      highlight: 'Top 1,000 in 2026 · Top 1,900 in 2025',
      description: 'Led a three-member team and ranked under top 1000 out of 20000 teams in 2026 and under 1900 out of 25,000+ teams in this prestigious global ML competition.'
    },
    {
      title: 'Graphethon & Deepshiva Finalist',
      year: '2025',
      highlight: 'Top 35 of 1,000+ teams',
      description: 'Ranked top 35 out of 1000+ teams in this national-level hackathon, demonstrating exceptional technical capabilities.'
    }
  ];

  const skillsData = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java', 'JavaScript'],
    'AI & machine learning': ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'FastAPI'],
    'Product development': ['React', 'Node.js', 'Express.js', 'REST APIs'],
    'Data & tools': ['Git', 'GitHub', 'MongoDB', 'MySQL', 'AWS'],
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Education & recognition</h2>
        
        <div className="resume-content">
          <div className="golden-path-section">
            <h3 className="subsection-title">Education</h3>
            <div className="golden-timeline">
              {education.map((item, index) => (
                <div key={index} className="golden-item">
                  <div className="golden-marker"></div>
                  <div className="golden-content">
                    <h4>{item.institution}</h4>
                    <span className="golden-year">{item.year}</span>
                    <p className="golden-course">{item.course}</p>
                    <p className="golden-score">{item.score}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="subsection-title resume-achievements-title">Achievements</h3>
            <div className="golden-timeline">
              {achievements.map((item, index) => (
                <div key={index} className="golden-item">
                  <div className="golden-marker"></div>
                  <div className="golden-content">
                    <h4>{item.title}</h4>
                    <span className="golden-year">{item.year}</span>
                    {item.highlight && <span className="achievement-highlight">{item.highlight}</span>}
                    <p className="golden-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="skill-category">
                  <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <ul className="skills-list">
                    {skills.map((skill) => <li key={skill} className="skill-item">{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
