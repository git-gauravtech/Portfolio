import './Resume.css';

const Resume = () => {
  const education = [
    {
      institution: 'Graphic Era Hill University, Dehradun',
      year: '2023 - Present',
      course: 'B.Tech in Computer Science & Engineering (AI & ML Specialization)',
      score: 'CGPA: 9/10'
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
      description: 'Selected in top 5% out of 60,000+ applicants. Gained industry-level mentorship from Amazon applied scientists.'
    },
    {
      title: 'Microsoft SEFA Program',
      year: '2025',
      description: 'Selected in top 100 students from university. Full-day immersive session covering product vision to deployment at scale.'
    },
    {
      title: 'Amazon ML Challenge',
      year: '2025',
      description: 'Led a three-member team and ranked 1900 out of 60,000+ teams in this prestigious global ML competition.'
    },
    {
      title: 'Graphethon & Deepshiva Finalist',
      year: '2025',
      description: 'Ranked top 35 out of 1000+ teams in this national-level hackathon, demonstrating exceptional technical capabilities.'
    }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Modern CSS & UI Design', level: 88 },
      { name: 'Responsive Layouts', level: 85 },
    ],
    backend: [
      { name: 'Node.js & Express.js', level: 88 },
      { name: 'RESTful API Design', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
    ],
    languages: [
      { name: 'Python', level: 92 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 80 },
    ],
    tools: [
      { name: 'TensorFlow & OpenCV', level: 85 },
      { name: 'Scikit-Learn', level: 88 },
      { name: 'Flask', level: 86 },
      { name: 'Git & Cloud (Azure)', level: 85 },
    ],
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        
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
            
            <h3 className="subsection-title" style={{marginTop: '4rem'}}>Achievements</h3>
            <div className="golden-timeline">
              {achievements.map((item, index) => (
                <div key={index} className="golden-item">
                  <div className="golden-marker"></div>
                  <div className="golden-content">
                    <h4>{item.title}</h4>
                    <span className="golden-year">{item.year}</span>
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
                  <div className="skills-list">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-bar-container">
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bg">
                          <div 
                            className="skill-progress-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
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
