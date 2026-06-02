import './Projects.css';
import avatarImg from '../../assets/avatar.webp';
import vocalis from '../../assets/Vocalis.webp';
import agro from '../../assets/agroshakti.webp';
import fina from '../../assets/finance.webp';
import indoor from '../../assets/indoor.webp';
import mic from '../../assets/mic.webp';
import portf from '../../assets/protfolio.webp';
import vbp from '../../assets/vbp.webp';

const Projects = () => {
  const scrollToDomain = (domainId) => {
    const element = document.getElementById(domainId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projectsByDomain = [
    {
      id: 'domain-aiml',
      domain: 'AI & ML',
      projects: [
        {
          id: 1,
          title: 'Vocalis',
          subtitle: 'AI Interview Simulation Platform with feedback',
          description: 'AI-powered mock interview platform that analyzes behavioral aspects including eye tracking, facial engagement, and posture using computer vision.',
          techStack: ['React', 'Python', 'OpenCV', 'TensorFlow'],
          image: vocalis,
          link: 'https://github.com/git-gauravtech/vocalis-ai',
        },
        {
          id: 2,
          title: 'AgroShakti',
          subtitle: 'AI Powered Smart Farming',
          description: 'Scalable agriculture platform integrating Node.js APIs with Flask-based ML services. Fine-tuned Meta-Llama 3.1 8B on 48K KCC dataset.',
          techStack: ['Node.js', 'Flask', 'MongoDB', 'Llama 3.1'],
          image: agro,
          link: 'https://github.com/robiophantom/AgroShakti',
        },
        {
          id: 3,
          title: 'Indoor Plant Health Detection System',
          subtitle: 'Deep-learning based disease detector',
          description: 'Classify and predict the health of indoor plants by observing the leaves of the plant.',
          techStack: ['Python', 'Scikit-learn', 'Flask'],
          image: indoor,
          link: 'https://github.com/git-gauravtech/Indoor-plant-health-detection',
        },
        {
          id: 4,
          title: 'Vehicle Breakdown Predictor',
          subtitle: 'ML-Based Maintenance Alert System',
          description: 'Predicts vehicle breakdown probability using ensemble ML model.',
          techStack: ['Python', 'Scikit-learn', 'Flask'],
          image: vbp,
          link: 'https://github.com/git-gauravtech/flask-ml-app',
        },
      ]
    },
     {
      id: 'domain-fullstack',
      domain: 'Full Stack Web Development',
      projects: [
        {
          id: 1,
          title: 'MicroMatch',
          subtitle: 'Micro-Influencer Marketing Platform',
          description: 'Platform connecting businesses with micro-influencers on Instagram for targeted campaigns. Features role-based access control and scalable REST APIs.',
          techStack: ['React', 'Express.js', 'Azure', 'Instagram API'],
          image: mic,
          link: 'https://github.com/keshav-gupta01/micromatch',
        },
        {
          id: 2,
          title: 'SmartFin',
          subtitle: 'Personal Finance Management System',
          description: 'This is a desktop application developed with JavaFX that provides a comprehensive solution for personal finance management. It allows users to track income and expenses, set budgets, manage multiple accounts and custom categories, visualize financial data through interactive charts, and even predict future expenses using AI (Weka).',
          image: fina,
          link: 'https://github.com/git-gauravtech/SmartFin#smartfin--ai-based-personal-finance-management-system',
        },
        {
          id: 3,
          title: 'Portfolio Website',
          subtitle: 'About my projects, achievements, education',
          description: 'Developed a portfolio that contains almost everything about me in different sections',
          techStack: ['React', 'Express.js', 'Azure', 'Instagram API'],
          image: portf,
          link: 'https://portfolio-nu-peach-93.vercel.app/',
        }
      ]
    },
    {
      id: 'domain-core',
      domain: 'Core Subjects',
      projects: []
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-intro-container">
          <div className="intro-left">
            <h2 className="intro-heading">Project Section</h2>
            <div className="intro-tags">
              <span className="intro-tag" onClick={() => scrollToDomain('domain-fullstack')}>Full Stack Web Development</span>
              <span className="intro-tag" onClick={() => scrollToDomain('domain-aiml')}>AI & ML</span>
              <span className="intro-tag" onClick={() => scrollToDomain('domain-core')}>Core Subjects</span>
            </div>
            <p className="intro-text">
              As a passionate problem solver with in-depth knowledge of data structures and algorithms, I'm always seeking opportunities to apply my skills to real-world challenges.
            </p>
          </div>
          <div className="intro-right">
            <img src={avatarImg} alt="Gaurav Saklani" className="intro-avatar" />
          </div>
        </div>

        {projectsByDomain.map((group) => (
          <div key={group.id} id={group.id} className="domain-section">
            <h3 className="domain-title">{group.domain}</h3>
            <div className="domain-grid">
              {group.projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-mini"
                >
                  <div className="mini-image">
                    <img src={project.image} alt={project.title} />
                    <div className="mini-overlay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="mini-content">
                    <h4>{project.title}</h4>
                    <p className="mini-subtitle">{project.subtitle}</p>
                    <p className="mini-desc">{project.description}</p>
                  </div>
                </a>
              ))}

              <a
                href="https://github.com/git-gauravtech"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-mini"
              >
                <div className="mini-image">
                  <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60" alt="GitHub" />
                  <div className="mini-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View GitHub</span>
                  </div>
                </div>
                <div className="mini-content">
                  <h4>And Much More...</h4>
                  <p className="mini-subtitle">Open Source</p>
                  <p className="mini-desc">You can checkout my GitHub repos for more such projects and contributions.</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
