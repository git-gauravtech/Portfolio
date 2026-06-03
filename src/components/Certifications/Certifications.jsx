import './Certifications.css';
import awsCertificate from '../../assets/c1.webp';
import c2 from '../../assets/c2.webp';


const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: 'Building AI Agents and Agentic Workflows',
      organization: 'IBM',
      date: 'May 2026',
      image: awsCertificate,
      certificateUrl:
        'https://drive.google.com/file/d/1rmYE2otsIXES-H3YQmQ7Tn21Xw2sa2sD/view?usp=sharing',
    },
    {
      id: 2,
      name: 'IBM Introduction to Machine Learning',
      organization: 'Coursera (IBM)',
      date: 'Feb 2025',
      image: c2,
      certificateUrl: 'https://drive.google.com/file/d/1ztjUQ5ymSeevr0cS_0m-A2fz4jWUOGTf/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="cert-image"
                />

                <div className="cert-overlay">
                  <span
                    className="view-cert-btn"
                    onClick={() =>
                      cert.certificateUrl !== '#'
                        ? window.open(cert.certificateUrl, '_blank')
                        : null
                    }
                  >
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="cert-content">
                <h3>{cert.name}</h3>
                <p className="cert-org">{cert.organization}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;