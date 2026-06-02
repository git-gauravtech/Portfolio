import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Gaurav Saklani</h3>
            <p className="footer-tagline">
              Building innovative solutions, one line of code at a time.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <ul>
              <li>
                <a href="https://github.com/git-gauravtech" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/gaurav-saklani-06a17a300" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gaurav Saklani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
