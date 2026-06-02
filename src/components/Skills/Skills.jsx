import './Skills.css';

const Skills = () => {
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

  const categories = [
    { key: 'frontend', title: 'Frontend', icon: '🎨' },
    { key: 'backend', title: 'Backend', icon: '⚙️' },
    { key: 'languages', title: 'Programming Languages', icon: '💻' },
    { key: 'tools', title: 'ML & Tools', icon: '🛠️' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I specialize in
        </p>

        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category.key} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {skillsData[category.key].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
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
    </section>
  );
};

export default Skills;
