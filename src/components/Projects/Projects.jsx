import './Projects.css';
import vocalis from '../../assets/Vocalis.webp';
import agro from '../../assets/agroshakti.webp';
import fina from '../../assets/finance.webp';
import indoor from '../../assets/indoor.webp';
import mic from '../../assets/mic.webp';
import portf from '../../assets/protfolio.webp';
import vbp from '../../assets/vbp.webp';
import persona from '../../assets/persona.webp';
import mapify from '../../assets/mapify.webp';
import quest from '../../assets/quest.webp';

const Projects = () => {
  const projectsByDomain = [
    {
      id: 'domain-aiml',
      domain: 'AI & ML',
      projects: [
        {
          id: 1,
          title: 'Vocalis',
          subtitle: 'AI Interview Simulation Platform with feedback',
          description: 'An AI interview practice platform that uses computer vision to assess eye contact, facial engagement, and posture alongside technical responses.',
          techStack: ['React', 'Python', 'OpenCV', 'TensorFlow'],
          image: vocalis,
          link: 'https://github.com/git-gauravtech/vocalis-ai',
        },
        {
          id: 2,
          title: 'AI Persona - Personal Representative',
          subtitle: 'The persona can answer questions about my resume, education, projects, GitHub repositories, achievements, and role fit. It can also schedule interviews.',
          description: 'It is grounded using RAG over my resume, GitHub README files, commit history, and contribution data. It can also check real calendar availability and book or cancel interviews using Cal.com.',
          techStack: ['Python', 'Vapi', 'FastAPI', 'Cal.com API'],
          image: persona,
          link: 'https://github.com/git-gauravtech/AI_persona',
        },
        {
          id: 3,
          title: 'AgroShakti',
          subtitle: 'AI Powered Smart Farming',
          description: 'A farming platform connecting Node.js APIs with Flask ML services, including a Meta-Llama 3.1 8B model fine-tuned on 48K KCC records.',
          techStack: ['Node.js', 'Flask', 'MongoDB', 'Llama 3.1'],
          image: agro,
          link: 'https://github.com/robiophantom/AgroShakti',
        },
        {
          id: 4,
          title: 'Indoor Plant Health Detection System',
          subtitle: 'Deep-learning based disease detector',
          description: 'Classify and predict the health of indoor plants by observing the leaves of the plant.',
          techStack: ['Python', 'Scikit-learn', 'Flask'],
          image: indoor,
          link: 'https://github.com/git-gauravtech/Indoor-plant-health-detection',
        },
        {
          id: 5,
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
          techStack: ['Java', 'JavaFX', 'MySQL', 'Weka'],
          image: fina,
          link: 'https://github.com/git-gauravtech/SmartFin#smartfin--ai-based-personal-finance-management-system',
        },
        {
          id: 3,
          title: 'Portfolio Website',
          subtitle: 'About my projects, achievements, education',
          description: 'A responsive portfolio bringing together selected product work, research, education, and ways to get in touch.',
          techStack: ['React', 'Vite', 'CSS'],
          image: portf,
          link: 'https://portfolio-nu-peach-93.vercel.app/',
        },
        {
          id: 4,
          title: 'Mapify',
          subtitle: 'An tool for Er diagram to relational database schema conversion and vice versa',
          description: 'A web application that allows users to convert ER diagrams to relational database schemas and vice versa, facilitating database design and understanding.',
          techStack: ['HTML', 'JavaScript', 'Gojs', 'CSS'],
          image: mapify,
          link: 'https://github.com/VanshRai7000/Mapify'
        },
        {
          id: 5,
          title: 'QuestForge',
          subtitle: 'An enterprise-grade, full-stack AI assessment generation system.',
          description: 'A full-stack web application that enables educators to automatically create high-quality, customized question papers, quizzes, and structured examinations from uploaded study materials (PDFs, images) or raw topics in seconds.',
          techStack: ['WebSocket', 'Redis', 'Node.js', 'Express.js', 'MongoDB'],
          image: quest,
          link: 'https://github.com/git-gauravtech/QuestForge'

        }
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-intro-container">
          <div className="intro-left">
            <p className="projects-kicker">Selected work · 2023—2026</p>
            <h2 className="intro-heading">Projects built to solve real problems.</h2>
            <p className="intro-text">
              From computer vision and applied machine learning to full-stack products, these projects show how I take ideas through implementation.
            </p>
            <div className="intro-tags">
              <a className="intro-tag" href="#domain-aiml">AI & ML <span aria-hidden="true">↓</span></a>
              <a className="intro-tag" href="#domain-fullstack">Full-stack <span aria-hidden="true">↓</span></a>
            </div>
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
                    <ul className="mini-stack" aria-label={`Technology used for ${project.title}`}>
                      {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <span className="mini-link">View project <span aria-hidden="true">↗</span></span>
                  </div>
                </a>
              ))}
            </div>
            <a className="projects-github-link" href="https://github.com/git-gauravtech" target="_blank" rel="noopener noreferrer">
              Browse more on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
