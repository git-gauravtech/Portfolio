import './Research.css';

const Research = () => {
  const researchItems = [
    {
      type: 'Patent',
      year: '2025',
      title: 'A System and Method for Emergency Vehicle Traffic Coordination and Signal Control utilizing Dual-mode Audio-Visual detection and Edge computing processing',
      details: 'Indian Patent Office, Journal 39/2025, Application No. 202511079547A 2025',
      bullets: [
        'Designed an AI-powered dual-mode audio-visual detection system integrated with edge computing for adaptive traffic control at road intersection.',
        'Reduced emergency vehicle delays and improved response efficiency through intelligent traffic signal optimization.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
      color: 'pink'
    },
    {
      type: 'Publication',
      year: '2025',
      title: 'Vehicle Breakdown Prediction: An ML-Based System for Predicting Breakdown Using Ensemble Learning Technique',
      details: '2nd Asian Conference on Intelligent Technologies (ACOIT 2025), Kolar, Karnataka Oct 2025',
      highlight: {
        value: '94%',
        label: 'accuracy',
        detail: 'on 110,446 vehicle sensor records',
      },
      link: 'https://www.researchgate.net/publication/402959074_Vehicle_Breakdown_Prediction_An_ML-Based_System_for_Predicting_Breakdown_Using_Ensemble_Learning_Technique',
      bullets: [
        'Proposed an ensemble voting classifier combining Logistic Regression, Naive Bayes, and SVM for vehicle breakdown prediction.',
        'Evaluation reported balanced recall across 10 sensor features.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      ),
      color: 'cyan'
    }
  ];

  return (
    <section id="research" className="research">
      <div className="research-container">
        <h2 className="section-title">Research & Publications</h2>
        
        <div className="research-list">
          {researchItems.map((item, index) => (
            <div key={index} className={`research-row ${item.color}`}>
              <div className="research-icon-wrapper">
                {item.icon}
              </div>
              <div className="research-content">
                <div className="research-meta">
                  <span className="research-badge">{item.type}</span>
                  <span className="research-year">{item.year}</span>
                  <span className="research-venue">{item.details}</span>
                </div>
                <h3 className="research-title">{item.title}</h3>
                {item.highlight && (
                  <div className="research-highlight">
                    <strong>{item.highlight.value}</strong>
                    <span>{item.highlight.label}</span>
                    <small>{item.highlight.detail}</small>
                  </div>
                )}
                <div className="research-impact">
                  {item.bullets.map((bullet, i) => (
                    <p key={i} className="impact-bullet">
                      <span className="bullet-dot"></span>
                      {bullet}
                    </p>
                  ))}
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="research-action">
                    Read Publication
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
