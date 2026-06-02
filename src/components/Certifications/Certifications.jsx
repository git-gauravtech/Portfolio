import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: 'Aug 2025',
      image: 'https://drive.google.com/file/d/1SLoQuRN4LT6ew2Y4xNi0RJkAViNQX78m?w=800&auto=format&fit=crop&q=60' // using a nice placeholder
    },
    {
      id: 2,
      name: 'Deep Learning Specialization',
      organization: 'Coursera (DeepLearning.AI)',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="cert-grid">
          {certs.map(cert => (
            <div key={cert.id} className="cert-card">
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.name} className="cert-image" />
                <div className="cert-overlay">
                  <span className="view-cert-btn">View Certificate</span>
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
