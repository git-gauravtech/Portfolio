import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Amazon ML Summer School Mentee',
      year: '2025',
      description: 'Selected in top 5% out of 60,000+ applicants. Gained industry-level mentorship from Amazon applied scientists and real-world ML experience.',
      icon: '🏆',
    },
    {
      id: 2,
      title: 'Microsoft SEFA Program',
      year: '2025',
      description: 'Selected in top 100 students from university. Full-day immersive session covering product vision to deployment at scale.',
      icon: '⭐',
    },
    {
      id: 3,
      title: 'Amazon ML Challenge',
      year: '2025',
      description: 'Led a three-member team and ranked 1900 out of 60,000+ teams in this prestigious global ML competition.',
      icon: '🎯',
    },
    {
      id: 4,
      title: 'Graphethon & Deepshiva Finalist',
      year: '2025',
      description: 'Ranked top 35 out of 1000+ teams in this national-level hackathon, demonstrating exceptional technical capabilities.',
      icon: '🚀',
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Awards</h2>
        <p className="section-subtitle">
          Recognition and accomplishments in my professional journey
        </p>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
