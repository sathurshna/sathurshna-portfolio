import './App.css';

const projects = [
  {
    number: '01',
    title: 'FreshLens AI',
    status: 'Ongoing',
    description:
      'AI-powered inventory and freshness monitoring system for small-scale retailers. Vendors can capture produce images and receive automated freshness classifications.',
    technologies: [
      'React Native',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Celery',
    ],
    link: 'https://github.com/FreshLens-AI',
  },
  {
    number: '02',
    title: 'Smart Blood Donation Coordination System',
    status: 'Ongoing',
    description:
      'Full-stack platform designed to coordinate donors, hospitals, and blood donation requests with role-based authentication and RESTful APIs.',
    technologies: [
      'React Native',
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
    ],
    link: 'https://github.com/sathurshna/Smart-blood-donation-system',
  },
  {
    number: '03',
    title: 'Industrial Predictive Maintenance System',
    status: 'Completed',
    description:
      'Scalable IoT-based predictive maintenance system for collecting industrial sensor data, real-time streaming, machine failure prediction, and operational monitoring.',
    technologies: [
      'React',
      'FastAPI',
      'Kafka',
      'MLflow',
      'Kubernetes',
      'GCP',
    ],
    link: 'https://github.com/PredictiveOps',
  },
  {
    number: '04',
    title: 'Supply Chain Management System',
    status: 'Completed',
    description:
      'Full-stack logistics management platform with dedicated customer and admin portals, secure authentication, database management, and RESTful APIs.',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'MySQL',
      'Tailwind CSS',
    ],
    link: 'https://github.com/sathurshna/Kandypack-Logistics-Project-',
  },
];

const skills = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'FastAPI',
  'Node.js',
  'Django',
  'Tailwind CSS',
  'Vite',
  'MySQL',
  'PostgreSQL',
  'Git / GitHub',
  'Docker',
  'Prometheus',
];

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          SU<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="mailto:sathurshnau.23@cse.mrt.ac.lk"
          className="nav-contact"
        >
          Let's Talk ↗
        </a>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER SCIENCE & ENGINEERING</p>

            <h1>
              Hi, I'm <span>Sathurshna.</span>
            </h1>

            <h2>
              I build software that solves
              <br />
              <span className="accent-text">real-world problems.</span>
            </h2>

            <p className="hero-description">
              Computer Science and Engineering undergraduate at the University
              of Moratuwa, interested in Software Engineering and full-stack
              development.
            </p>

            <div className="hero-buttons">
  <a href="#projects" className="primary-button">
    View My Work <span>↗</span>
  </a>

  <a
    href="/Sathurshna-Uthayakumar-CV.pdf"
    download="Sathurshna-Uthayakumar-CV.pdf"
    className="secondary-button"
  >
    Download CV ↓
  </a>
</div>

<div className="social-links">
  <a
    href="https://github.com/sathurshna"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/sathurshna-uthayakumar-64761129a/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
</div>
          </div>

          <div className="hero-card">
            <div className="card-label">CURRENTLY</div>

            <div className="hero-card-main">
              <div className="big-number">03</div>
              <div>
                <strong>Year</strong>
                <p>BSc Engineering</p>
              </div>
            </div>

            <div className="hero-divider" />

            <div className="stats">
              <div>
                <strong>3.28</strong>
                <span>GPA / 4.0</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Projects</span>
              </div>
            </div>

            <div className="location">
              <span>●</span> University of Moratuwa, Sri Lanka
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-text">
                I'm a Computer Science and Engineering undergraduate with a
                strong interest in <strong>Software Engineering</strong> and
                full-stack development.
              </p>
            </div>

            <div className="about-text">
              <p>
                I enjoy designing efficient, scalable and user-friendly
                software solutions. My current work involves building
                full-stack applications, REST APIs, mobile applications and
                systems that solve practical problems.
              </p>

              <p>
                I'm continuously learning modern technologies and looking for
                opportunities to apply my knowledge through real-world
                projects and collaborative development.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span>03</span>
            <h2>Featured Projects</h2>
          </div>

          <p className="section-intro">
            A selection of systems I've developed or am currently building.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
  <div className="project-top">
    <span className="project-number">{project.number}</span>

    <span className="project-status">
      <span className="status-dot">●</span>
      {project.status}
    </span>
  </div>

  <div className="project-content">
    <h3>{project.title}</h3>

    <p>{project.description}</p>
  </div>

  <div className="technology-list">
    {project.technologies.map((technology) => (
      <span key={technology}>{technology}</span>
    ))}
  </div>

  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="project-arrow"
  >
    View Project <span>↗</span>
  </a>
</article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section education-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">
            <div className="education-year">2024 — PRESENT</div>

            <div>
              <h3>University of Moratuwa</h3>
              <p>BSc. Engineering (Hons) in Computer Science and Engineering</p>
              <span className="education-detail">Current GPA: 3.28 / 4.0</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-year">2022 — 2023</div>

            <div>
              <h3>BT/Vincent Girls' High School</h3>
              <p>G.C.E. Advanced Level — Physical Science Stream</p>
              <span className="education-detail">
                2A B · Z-Score 2.1460 · Island Rank 700
              </span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section experience-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Experience & Activities</h2>
          </div>

          <div className="experience-item">
            <div className="experience-date">FEB 2025</div>

            <div>
              <h3>CSE Career Fair 2025</h3>
              <p className="experience-role">Career Fair Company Coordinator</p>
              <p>
                Coordinated with participating companies and supported the
                organization and smooth execution of the CSE Career Fair.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">ONGOING</div>

            <div>
              <h3>Hit the Ground</h3>
              <p className="experience-role">Organizing Committee — Design Committee</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">06 — CONTACT</p>

          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            I'm always interested in learning, collaborating and working on
            challenging software engineering problems.
          </p>

          <a
            href="mailto:sathurshnau.23@cse.mrt.ac.lk"
            className="email-link"
          >
            sathurshnau.23@cse.mrt.ac.lk ↗
          </a>
        </section>
      </main>

      <footer>
        <span>© 2026 Sathurshna Uthayakumar</span>

        <div>
          <a
            href="mailto:sathurshnau.23@cse.mrt.ac.lk"
            aria-label="Email"
          >
            Email
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;