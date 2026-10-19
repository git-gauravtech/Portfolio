import './Certifications.css';
import aiAgentsCertificate from '../../assets/c1.webp';
import machineLearningCertificate from '../../assets/c2.webp';


const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: 'Building AI Agents and Agentic Workflows',
      organization: 'IBM',
      date: 'May 2026',
      dateTime: '2026-05',
      image: aiAgentsCertificate,
      certificateUrl:
        'https://drive.google.com/file/d/1rmYE2otsIXES-H3YQmQ7Tn21Xw2sa2sD/view?usp=sharing',
    },
    {
      id: 2,
      name: 'IBM Introduction to Machine Learning',
      organization: 'Coursera (IBM)',
      date: 'Feb 2025',
      dateTime: '2025-02',
      image: machineLearningCertificate,
      certificateUrl: 'https://drive.google.com/file/d/1ztjUQ5ymSeevr0cS_0m-A2fz4jWUOGTf/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          {certs.map((cert) => (
            <article key={cert.id} className="cert-card">
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="cert-image"
                />

                <div className="cert-overlay">
                  <a
                    className="view-cert-btn"
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="cert-content">
                <h3>{cert.name}</h3>
                <p className="cert-org">{cert.organization}</p>
                <time className="cert-date" dateTime={cert.dateTime}>{cert.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;